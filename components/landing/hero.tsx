"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } })
      tl.from(".hero-eyebrow", { y: 20, opacity: 0, duration: 0.6 })
        .from(
          ".hero-title-line",
          { y: 40, opacity: 0, duration: 0.8, stagger: 0.08 },
          "-=0.3",
        )
        .from(".hero-sub", { y: 20, opacity: 0, duration: 0.6 }, "-=0.4")
        .from(
          ".hero-cta",
          { y: 16, opacity: 0, duration: 0.5, stagger: 0.08 },
          "-=0.3",
        )
        .from(
          ".hero-stat",
          { y: 20, opacity: 0, duration: 0.6, stagger: 0.1 },
          "-=0.2",
        )
        .from(
          ".hero-visual",
          { scale: 0.92, opacity: 0, duration: 1.1, ease: "power2.out" },
          "-=1.2",
        )

      // Floating ember animation
      gsap.to(".ember", {
        y: -20,
        x: "random(-10, 10)",
        opacity: 0,
        duration: "random(3, 6)",
        repeat: -1,
        ease: "sine.inOut",
        stagger: {
          each: 0.4,
          from: "random",
          repeat: -1,
        },
      })

      // Parallax on mouse move
      const onMove = (e: MouseEvent) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 12
        const y = (e.clientY / window.innerHeight - 0.5) * 12
        gsap.to(".hero-visual", {
          x,
          y,
          duration: 0.8,
          ease: "power2.out",
        })
      }
      window.addEventListener("mousemove", onMove)
      return () => window.removeEventListener("mousemove", onMove)
    }, rootRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={rootRef}
      className="relative overflow-hidden pt-10 pb-20 md:pt-16 md:pb-32"
    >
      {/* Ambient glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -top-32 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-primary/25 blur-3xl" />
        <div className="absolute bottom-10 right-0 h-[420px] w-[420px] rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[280px] w-[280px] rounded-full bg-primary/10 blur-3xl" />
      </div>

      {/* Floating embers */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        {Array.from({ length: 18 }).map((_, i) => (
          <span
            key={i}
            className="ember absolute h-1 w-1 rounded-full bg-primary/80 shadow-[0_0_12px_rgba(234,120,52,0.8)]"
            style={{
              left: `${(i * 53) % 100}%`,
              top: `${40 + ((i * 27) % 55)}%`,
            }}
          />
        ))}
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <div className="hero-eyebrow mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground backdrop-blur-sm">
            <Sparkles className="h-3 w-3 text-primary" />
            Expert system for metals & circularity
          </div>

          <h1 className="font-serif text-5xl font-semibold leading-[1.05] tracking-tight text-balance md:text-6xl lg:text-7xl">
            <span className="hero-title-line block">From ore to</span>
            <span className="hero-title-line block">
              <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
                circular impact
              </span>
            </span>
            <span className="hero-title-line block text-foreground/80">
              in one click.
            </span>
          </h1>

          <p className="hero-sub mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
            MetalCycle predicts the full life-cycle footprint of 20 metals
            across 42 parameters. Enter what you know — our expert system
            intelligently estimates the rest.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="hero-cta">
              <Link href="/predictor">
                Run a prediction
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="hero-cta">
              <Link href="/auth/sign-up">Create account</Link>
            </Button>
          </div>

          <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-border/60 pt-8">
            {[
              { label: "Metals supported", value: "20" },
              { label: "Parameters modeled", value: "42" },
              { label: "Production routes", value: "65+" },
            ].map((s) => (
              <div key={s.label} className="hero-stat">
                <dt className="text-xs uppercase tracking-wider text-muted-foreground">
                  {s.label}
                </dt>
                <dd className="mt-1 font-serif text-3xl font-semibold text-foreground">
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="hero-visual relative">
          <div className="relative aspect-square overflow-hidden rounded-2xl border border-border/60 bg-card shadow-2xl shadow-primary/20">
            <Image
              src="/hero-mining.jpg"
              alt="Molten copper flowing in an industrial mining facility"
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />

            {/* Floating metrics card */}
            <div className="absolute bottom-6 left-6 right-6 rounded-xl border border-border/60 bg-card/90 p-4 backdrop-blur-md">
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>Live prediction · Copper</span>
                <span className="flex items-center gap-1 text-accent">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  streaming
                </span>
              </div>
              <div className="mt-3 grid grid-cols-3 gap-3">
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                    GWP
                  </div>
                  <div className="font-serif text-xl font-semibold">4.32</div>
                  <div className="text-[10px] text-muted-foreground">
                    kg CO₂/kg
                  </div>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                    Circularity
                  </div>
                  <div className="font-serif text-xl font-semibold text-accent">
                    0.71
                  </div>
                  <div className="text-[10px] text-muted-foreground">index</div>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                    Recycled
                  </div>
                  <div className="font-serif text-xl font-semibold">62%</div>
                  <div className="text-[10px] text-muted-foreground">
                    content
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
