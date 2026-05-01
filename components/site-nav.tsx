"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { usePathname, useRouter } from "next/navigation"
import { Flame, LogOut, Menu, X } from "lucide-react"
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // 1. Fetch user session
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

  // 2. Handle header background on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // 3. Close mobile menu when navigating to a new page
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  // 4. Lock background scrolling ONLY when menu is open (Fixed Infinite Loop)
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    // Cleanup to ensure body scroll is restored if component unmounts
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [mobileMenuOpen])

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
        scrolled || mobileMenuOpen
          ? "border-b border-border/60 bg-background/95 backdrop-blur-xl"
          : "bg-background/90",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2 shrink-0 z-[110]">
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground shadow-lg shadow-primary/30">
            <Flame className="h-4 w-4" />
          </span>
          <span className="font-serif text-lg font-semibold tracking-tight">
            MetalCycle
          </span>
        </Link>

        {/* DESKTOP NAV LINKS (Hidden on Mobile/Tablet) */}
        <nav className="hidden lg:flex items-center gap-1">
          {LINKS.map((link) => {
            const active = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href)
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-md px-3 py-2 text-sm transition-colors",
                  active
                    ? "bg-primary/10 text-primary font-medium"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        {/* TOP ACTIONS AREA */}
        <div className="flex items-center gap-2 z-[110]">
          {/* DESKTOP ONLY: Log Out / Sign In / Join (Hidden on <1024px) */}
          {email ? (
            <div className="hidden lg:flex items-center gap-2">
              <span className="text-xs text-muted-foreground xl:inline">
                {email}
              </span>
              <Button variant="ghost" size="sm" onClick={signOut} className="h-9 w-9 p-0">
                <LogOut className="h-4 w-4" />
              </Button>
            </div>
          ) : (
            <div className="hidden lg:flex items-center gap-2">
              <Button asChild variant="ghost" size="sm">
                <Link href="/auth/login">Sign in</Link>
              </Button>
              <Button asChild size="sm" className="bg-primary hover:bg-primary/90 font-semibold">
                <Link href="/auth/sign-up">Join</Link>
              </Button>
            </div>
          )}

          {/* MOBILE TOGGLE BUTTON (Visible only on <1024px) */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden h-9 w-9 p-0"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* MOBILE OVERLAY (Fully opaque, contains all mobile actions) */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 top-16 z-[105] h-[calc(100vh-64px)] w-full bg-background lg:hidden animate-in fade-in slide-in-from-top-4 duration-200">
            <nav className="flex flex-col p-6 gap-4 h-full">
              {LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "flex items-center h-14 px-4 rounded-xl text-xl transition-all",
                    pathname === link.href 
                      ? "bg-primary/10 text-primary font-bold" 
                      : "text-muted-foreground active:bg-muted"
                  )}
                >
                  {link.label}
                </Link>
              ))}

              <div className="mt-auto pb-10 flex flex-col gap-4">
                <hr className="border-border/50" />
                {!email ? (
                  <div className="grid grid-cols-1 gap-3">
                    <Button asChild variant="outline" size="lg" className="h-12 text-base">
                      <Link href="/auth/login">Sign in</Link>
                    </Button>
                    <Button asChild size="lg" className="h-12 text-base font-bold">
                      <Link href="/auth/sign-up">Join MetalCycle</Link>
                    </Button>
                  </div>
                ) : (
                  <div className="flex flex-col gap-3">
                    <div className="text-sm text-muted-foreground text-center italic mb-2">
                      Logged in as {email}
                    </div>
                    <Button variant="destructive" size="lg" onClick={signOut} className="w-full h-12 text-base gap-2">
                      <LogOut className="h-5 w-5" />
                      Sign Out
                    </Button>
                  </div>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}