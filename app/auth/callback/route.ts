// app/auth/callback/route.ts
import { NextResponse, type NextRequest } from "next/server"
import { createClient } from "@/lib/supabase/server"

export async function GET(request: NextRequest) {
  const { searchParams, origin } = new URL(request.url)
  const code = searchParams.get("code")
  // Default to dashboard, but allow the 'next' param to override it
  const next = searchParams.get("next") ?? "/dashboard"

  if (code) {
    const supabase = await createClient()
    const { error } = await supabase.auth.exchangeCodeForSession(code)
    
    if (!error) {
      // Successful exchange, redirect to intended page
      return NextResponse.redirect(`${origin}${next}`)
    }
  }

  // If no code or error, send to error page
  return NextResponse.redirect(`${origin}/auth/error?error=callback_failed`)
}