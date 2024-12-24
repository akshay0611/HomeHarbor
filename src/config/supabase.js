import { createClient } from "@supabase/supabase-js";

// Access environment variables using Vite's import.meta.env
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_KEY;

// Define the redirect URL for email verification
const REDIRECT_URL = import.meta.env.VITE_REDIRECT_URL || `${window.location.origin}/verification-success`;  // Default to the local verification page if not set

if (!SUPABASE_URL || !SUPABASE_KEY) {
  throw new Error("Supabase URL and key are required");
}

// Create Supabase client
export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
