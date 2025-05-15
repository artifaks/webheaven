import { createClient } from "@supabase/supabase-js";
import type { Database } from "../types/supabase";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error("Missing Supabase environment variables");
}

// Create a fallback for development if environment variables are missing
const url = supabaseUrl || "https://your-project-url.supabase.co";
const key = supabaseAnonKey || "your-anon-key";

export const supabase = createClient<Database>(url, key);
