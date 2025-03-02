import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://txxjeapypilgsikrlnop.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR4eGplYXB5cGlsZ3Npa3Jsbm9wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA4NTQwODcsImV4cCI6MjA1NjQzMDA4N30.ZbNqr0yEScs1ZzWPP2X3NXTOj3Iys1h5IWaCsCZr_jA";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
