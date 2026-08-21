import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validations/contact";
import DOMPurify from "isomorphic-dompurify";

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
import { supabase } from "@/lib/supabase";

// Memory-based rate limiting
const rateLimitMap = new Map<string, { count: number; timestamp: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS = 5; // 5 requests per minute per IP

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const userRecord = rateLimitMap.get(ip);

  if (!userRecord) {
    rateLimitMap.set(ip, { count: 1, timestamp: now });
    return false;
  }

  if (now - userRecord.timestamp > RATE_LIMIT_WINDOW) {
    rateLimitMap.set(ip, { count: 1, timestamp: now });
    return false;
  }

  if (userRecord.count >= MAX_REQUESTS) {
    return true;
  }

  userRecord.count++;
  return false;
}

export async function POST(req: Request) {
  try {
    const ip = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "unknown";
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { success: false, message: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body = await req.json();
    
    // Validate with Zod
    const result = contactSchema.safeParse(body);
    
    if (!result.success) {
      return NextResponse.json(
        { success: false, errors: result.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    // Sanitize inputs to prevent XSS
    const sanitizedData = {
      full_name: DOMPurify.sanitize(result.data.fullName),
      phone: DOMPurify.sanitize(result.data.phone),
      service_type: DOMPurify.sanitize(result.data.serviceType),
      bhk_size: DOMPurify.sanitize(result.data.bhkSize),
      location: DOMPurify.sanitize(result.data.location),
      address: DOMPurify.sanitize(result.data.address),
      email: result.data.email ? DOMPurify.sanitize(result.data.email) : null,
      message: result.data.message ? DOMPurify.sanitize(result.data.message) : null,
    };

    // Insert into Supabase (if configured)
    const { error: dbError } = await supabase
      .from("leads")
      .insert([sanitizedData]);

    if (dbError) {
      console.warn("Supabase Warning (DB Insert Failed - Missing Table or RLS):", dbError.message);
      // We will not block the user submission. We gracefully degrade and continue to Webhook.
    }

    // Trigger Webhook Notification (Fire and forget)
    const webhookUrl = process.env.DISCORD_WEBHOOK_URL || process.env.LEAD_WEBHOOK_URL;
    if (webhookUrl) {
      const embedFields = [
        { name: "Name", value: sanitizedData.full_name, inline: true },
        { name: "Phone", value: sanitizedData.phone, inline: true },
        { name: "Service", value: sanitizedData.service_type, inline: true },
        { name: "Property Size", value: sanitizedData.bhk_size, inline: true },
        { name: "Location", value: sanitizedData.location, inline: true },
        { name: "Address", value: sanitizedData.address, inline: false }
      ];

      if (sanitizedData.email) {
        embedFields.push({ name: "Email", value: sanitizedData.email, inline: true });
      }
      if (sanitizedData.message) {
        embedFields.push({ name: "Additional Details", value: sanitizedData.message, inline: false });
      }

      fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          embeds: [
            {
              title: "New Pest Control Lead Received!",
              color: 15105570, // Alert Orange
              fields: embedFields,
              timestamp: new Date().toISOString()
            }
          ]
        }),
      }).catch((err) => console.error("Webhook Error:", err));
    }

    return NextResponse.json(
      { success: true, message: "Request received successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error." },
      { status: 500 }
    );
  }
}
