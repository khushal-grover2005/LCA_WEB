"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { usePathname, useRouter } from "next/navigation"
import { Flame, LogOut, Menu } from "lucide-react" // Added Menu icon
import { Button } from "@/components/ui/button"
import { createClient } from "@/lib/supabase/client"
import { cn } from "@/lib/utils"

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/predictor", label: "Predictor" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/insights", label: "Insights" },
  { href: "/chat", label: "Chat" },
]

export function SiteNav() {
  const pathname = usePathname()
  const router = useRouter()
  const [email, setEmail] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const supabase = createClient()
    supabase.auth.getUser().then(({ data }) => {
      setEmail(data.user?.email ?? null)
    })
    const { data: sub } = supabase.auth.onAuthStateChange((_ev, session) => {
      setEmail(session?.user?.email ?? null)
    })
    return () => sub.subscription.unsubscribe()
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  async function signOut() {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push("/")
    router.refresh()
  }

  return (
    <header
      className={cn(
        "sticky top-0 z-[100] w-full transition-all duration-300",
        scrolled
          ? "border-b border-border/60 bg-background/95 backdrop-blur-xl"
          : "bg-background/90",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground shadow-lg shadow-primary/30">
            <Flame className="h-4 w-4" />
          </span>
          <span className="hidden xs:inline-block font-serif text-lg font-semibold tracking-tight">
            MetalCycle
          </span>
        </Link>

        {/* NAVIGATION - Hidden on very small screens, scrollable on medium */}
        <nav className="hidden md:flex items-center gap-1 mx-4">
          {LINKS.map((link) => {
            const active = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href)
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  active
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        {/* ACTIONS */}
        <div className="flex items-center gap-2">
          {/* Mobile Navigation Dropdown/Scroll (Visible only on Mobile) */}
          <div className="md:hidden flex items-center overflow-x-auto max-w-[150px] no-scrollbar mr-2">
             <nav className="flex gap-1">
                {LINKS.slice(0,3).map((link) => ( // Show only first 3 on mobile to save space
                   <Link key={link.href} href={link.href} className={cn(
                      "text-[11px] px-2 py-1 rounded-md",
                      pathname === link.href ? "bg-primary/10 text-primary" : "text-muted-foreground"
                   )}>
                      {link.label}
                   </Link>
                ))}
             </nav>
          </div>

          {email ? (
            <div className="flex items-center gap-2">
              <span className="hidden text-xs text-muted-foreground lg:inline">
                {email}
              </span>
              <Button variant="ghost" size="sm" onClick={signOut}>
                <LogOut className="h-4 w-4" />
              </Button>
            </div>
          ) : (
            <div className="flex items-center gap-1 sm:gap-2">
              <Button asChild variant="ghost" size="sm" className="h-8 px-2 text-xs sm:text-sm">
                <Link href="/auth/login">Sign in</Link>
              </Button>
              <Button asChild size="sm" className="h-8 px-3 text-xs sm:text-sm">
                <Link href="/auth/sign-up">Join</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}