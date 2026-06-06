import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import ChatbotClient from "./chat-client"

export const metadata = {
  title: "AI Assistant · MetalCycle",
  description: "Chat with the LCA Expert System.",
}

export default async function ChatPage() {
  // 1. Initialize the secure server-side Supabase client
  const supabase = await createClient()
  
  // 2. Fetch the current active user session
  const {
    data: { user },
  } = await supabase.auth.getUser()

  // 3. The Security Bouncer: If no user is found, instantly kick them to the login page.
  // We append ?redirect=/chat so they are sent right back here after logging in!
  if (!user) {
    redirect("/auth/login?redirect=/chat")
  }

  // 4. If they pass the check, render the full chat interface!
  return <ChatbotClient />
}