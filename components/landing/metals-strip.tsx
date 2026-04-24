"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { METALS } from "@/lib/lca/schema"

gsap.registerPlugin(ScrollTrigger)

export function MetalsStrip() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".metal-chip", {
        opacity: 0,
        y: 16,
        stagger: 0.03,
        duration: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".metals-row",
          start: "top 85%",
        },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="border-y border-border/60 bg-card/30 py-12">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground">
          20 metals covered
        </p>
        <div className="metals-row mt-6 flex flex-wrap justify-center gap-2">
          {METALS.map((m) => (
            <span
              key={m}
              className="metal-chip rounded-full border border-border bg-background/60 px-4 py-1.5 text-sm text-foreground/80 transition-colors hover:border-primary/40 hover:text-primary"
            >
              {m}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
