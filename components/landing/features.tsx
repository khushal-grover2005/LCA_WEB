"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import {
  Brain,
  GitBranch,
  Recycle,
  ShieldCheck,
  Sparkles,
  TrendingDown,
} from "lucide-react"
import { GlowingCard } from "@/components/ui/glowing-card"

gsap.registerPlugin(ScrollTrigger)

const FEATURES = [
  {
    icon: Brain,
    title: "Expert-system imputation",
    body: "Leave any of the 42 fields empty. Our conditional imputation engine estimates them from similar metal profiles and flags every value it filled in.",
  },
  {
    icon: ShieldCheck,
    title: "Strict validation",
    body: "Every value is range-checked before submission. Transport distance can't be negative, percentages stay within 0–100, and routes must match the chosen metal.",
  },
  {
    icon: TrendingDown,
    title: "Full GWP breakdown",
    body: "Upstream, process, transport, and downstream emissions — all in kg CO₂ per kg of metal, benchmarked against industry baselines.",
  },
  {
    icon: Recycle,
    title: "Circularity scoring",
    body: "Composite circularity index, recycled content, end-of-life recovery, and reuse potential — scored from 0 to 1 so you can compare routes fairly.",
  },
  {
    icon: GitBranch,
    title: "Sankey visualisation",
    body: "See the material flow from extraction to end-of-life. Ideal for reporting and identifying leakage points in your supply chain.",
  },
  {
    icon: Sparkles,
    title: "Recommended actions",
    body: "Each prediction ships with a concrete improvement lever — switch energy source, increase recycled content, or shorten transport distance.",
  },
]

export function Features() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".feature-card", {
        y: 40,
        opacity: 0,
        duration: 0.7,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".feature-grid",
          start: "top 80%",
        },
      })
      gsap.from(".feature-heading", {
        y: 20,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".feature-heading",
          start: "top 85%",
        },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="feature-heading mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            How it works
          </div>
          <h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-balance md:text-5xl">
            An expert system, not a black box.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Built on a curated dataset of metal life-cycle profiles. Every
            estimate is auditable and every recommendation is traceable.
          </p>
        </div>

        <div className="feature-grid mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => {
            const Icon = f.icon
            return (
              <GlowingCard
                key={f.title}
                className="feature-card"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-serif text-xl font-semibold">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {f.body}
                </p>
              </GlowingCard>
            )
          })}
        </div>
      </div>
    </section>
  )
}
