import { supabase } from "../../../../lib/supabaseClient";

export async function POST(req) {
  try {
    const { email } = await req.json();
    console.log("Received email:", email); // Debugging log

    // Validate email format
    if (!email || !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      console.error("Invalid email format:", email);
      return new Response(JSON.stringify({ error: "Invalid email format" }), { status: 400 });
    }

    // Insert into Supabase
    const { data, error } = await supabase.from("emails").insert([{ email }]);
    if (error) {
      console.error("Supabase error:", error.message);
      return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }

    console.log("Email saved successfully:", data);
    return new Response(JSON.stringify({ message: "Email saved successfully" }), { status: 200 });

  } catch (error) {
    console.error("Server error:", error);
    return new Response(JSON.stringify({ error: "Server error" }), { status: 500 });
  }
}

