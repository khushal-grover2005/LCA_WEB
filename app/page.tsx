import { Hero } from "@/components/landing/hero"
import { MetalsStrip } from "@/components/landing/metals-strip"
import { Features } from "@/components/landing/features"
import { CTA } from "@/components/landing/cta"

export default function LandingPage() {
  return (
    // ✨ No need for 'flex flex-col' or 'min-h-dvh' here 
    // because the Root Layout handles the wrapper now.
    <>
      <main>
        <Hero />
        <MetalsStrip />
        <Features />
        <CTA />
      </main>
    </>
  )
}