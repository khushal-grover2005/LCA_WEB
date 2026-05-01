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

  // Close mobile menu when pathname changes
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

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
        {/* LOGO SECTION */}
        <Link href="/" className="flex items-center gap-2 shrink-0 z-[101]">
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground shadow-lg shadow-primary/30">
            <Flame className="h-4 w-4" />
          </span>
          <span className="font-serif text-lg font-semibold tracking-tight">
            MetalCycle
          </span>
        </Link>

        {/* DESKTOP NAV - Hidden on Mobile */}
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

        {/* RIGHT ACTIONS */}
        <div className="flex items-center gap-2 z-[101]">
          {email ? (
            <div className="flex items-center gap-2">
              <span className="hidden text-xs text-muted-foreground xl:inline">
                {email}
              </span>
              <Button variant="ghost" size="sm" onClick={signOut} className="h-8 w-8 p-0">
                <LogOut className="h-4 w-4" />
              </Button>
            </div>
          ) : (
            <div className="hidden sm:flex items-center gap-2">
              <Button asChild variant="ghost" size="sm">
                <Link href="/auth/login">Sign in</Link>
              </Button>
              <Button asChild size="sm">
                <Link href="/auth/sign-up">Join</Link>
              </Button>
            </div>
          )}

          {/* MOBILE TOGGLE - Only visible on Mobile/Tablet */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden h-8 w-8 p-0"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* MOBILE MENU OVERLAY */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 top-16 z-[100] bg-background lg:hidden animate-in fade-in slide-in-from-top-4 duration-200">
            <nav className="flex flex-col p-4 gap-2">
              {LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "flex items-center h-12 px-4 rounded-lg text-lg transition-colors",
                    pathname === link.href 
                      ? "bg-primary/10 text-primary font-semibold" 
                      : "text-muted-foreground active:bg-muted"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <hr className="my-2 border-border" />
              {!email && (
                <div className="grid grid-cols-2 gap-2 mt-2">
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/auth/login">Sign in</Link>
                  </Button>
                  <Button asChild className="w-full">
                    <Link href="/auth/sign-up">Join</Link>
                  </Button>
                </div>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}