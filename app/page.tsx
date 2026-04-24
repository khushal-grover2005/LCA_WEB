import { SiteNav } from "@/components/site-nav"
import { SiteFooter } from "@/components/site-footer"
import { Hero } from "@/components/landing/hero"
import { MetalsStrip } from "@/components/landing/metals-strip"
import { Features } from "@/components/landing/features"
import { CTA } from "@/components/landing/cta"

export default function LandingPage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <SiteNav />
      <main className="flex-1">
        <Hero />
        <MetalsStrip />
        <Features />
        <CTA />
      </main>
      <SiteFooter />
    </div>
  )
}
