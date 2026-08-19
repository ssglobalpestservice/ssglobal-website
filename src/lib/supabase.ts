import { createClient } from "@supabase/supabase-js";

// Provide placeholders for build-time execution when env vars are missing
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL || "https://placeholder.supabase.co";
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder-key";

if (supabaseUrl === "https://placeholder.supabase.co") {
  console.warn("Supabase credentials are not fully configured in environment variables.");
}

export const supabase = createClient(supabaseUrl, supabaseKey);
