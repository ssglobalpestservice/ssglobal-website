import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validations/contact";
import DOMPurify from "isomorphic-dompurify";
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
      location: DOMPurify.sanitize(result.data.location),
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
      fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          content: `🚨 **New Pest Control Lead!**\n**Name:** ${sanitizedData.full_name}\n**Phone:** ${sanitizedData.phone}\n**Location:** ${sanitizedData.location}\n**Service:** ${sanitizedData.service_type}`,
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
