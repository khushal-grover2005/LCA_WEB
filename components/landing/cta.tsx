"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

gsap.registerPlugin(ScrollTrigger)

export function CTA() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial state explicitly
      gsap.set(".cta-content > *", { y: 40, opacity: 0 });

      gsap.to(".cta-content > *", {
        y: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".cta-content",
          start: "top 85%", // Trigger earlier
          toggleActions: "play none none none"
        },
      });
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="pt-0 pb-20 md:pb-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-card/80 p-10 md:p-16">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10"
          >
            <Image
              src="/metal-sample.jpg"
              alt=""
              fill
              sizes="100vw"
              className="object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-linear-to-r from-card via-card/80 to-card/40" />
          </div>

          <div className="cta-content max-w-2xl">
            <h2 className="font-serif text-4xl font-semibold leading-tight tracking-tight text-balance md:text-5xl">
              Ready to measure what you&apos;re making?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground text-pretty">
              Run your first prediction in under a minute. No setup required —
              just pick a metal and a route, and let the expert system handle
              the rest.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href="/predictor">
                  Launch predictor
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/auth/sign-up">Create free account</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

