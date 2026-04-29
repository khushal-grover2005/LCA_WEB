"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { BarChart3, Flame, Recycle, Sparkles } from "lucide-react"
import { GlowingCard } from "@/components/ui/glowing-card"

type Row = {
  gwp_total: number | null
  circularity_index: number | null
  metal: string
}

export function DashboardStats({ rows }: { rows: Row[] }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".stat-card", {
        y: 16,
        opacity: 0,
        duration: 0.5,
        stagger: 0.08,
        ease: "power3.out",
        onComplete: () => {
          const elements = document.querySelectorAll('.stat-card');
          elements.forEach((el) => (el as HTMLElement).style.opacity = '1');
        }
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  const count = rows.length
  const avgGwp =
    rows.filter((r) => r.gwp_total !== null).length > 0
      ? rows
          .filter((r) => r.gwp_total !== null)
          .reduce((a, r) => a + (r.gwp_total ?? 0), 0) /
        rows.filter((r) => r.gwp_total !== null).length
      : null
  const avgCirc =
    rows.filter((r) => r.circularity_index !== null).length > 0
      ? rows
          .filter((r) => r.circularity_index !== null)
          .reduce((a, r) => a + (r.circularity_index ?? 0), 0) /
        rows.filter((r) => r.circularity_index !== null).length
      : null
  const uniqueMetals = new Set(rows.map((r) => r.metal)).size

  const stats: Array<{
    label: string
    value: string
    icon: typeof BarChart3
    tone?: "primary" | "accent"
    hint?: string
  }> = [
    {
      label: "Saved predictions",
      value: count.toString(),
      icon: BarChart3,
    },
    {
      label: "Unique metals",
      value: uniqueMetals.toString(),
      icon: Sparkles,
      tone: "accent",
    },
    {
      label: "Avg. GWP",
      value: avgGwp !== null ? avgGwp.toFixed(2) : "—",
      hint: avgGwp !== null ? "kg CO₂/kg" : undefined,
      icon: Flame,
      tone: "primary",
    },
    {
      label: "Avg. circularity",
      value: avgCirc !== null ? avgCirc.toFixed(2) : "—",
      icon: Recycle,
      tone: "accent",
    },
  ]

  return (
    <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
      {stats.map((s) => {
        const Icon = s.icon
        return (
          <GlowingCard 
            key={s.label} 
            className="stat-card opacity-100 flex flex-col h-full min-h-[140px] p-6"
          >
            {/* 1. Header Row - Aligns Icons and Labels */}
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground font-semibold">
              <Icon
                className={`h-3.5 w-3.5 ${
                  s.tone === "primary"
                    ? "text-primary"
                    : s.tone === "accent"
                      ? "text-accent"
                      : "text-muted-foreground"
                }`}
              />
              {s.label}
            </div>

            {/* 2. Middle Section - Absorbs available space to keep content parallel */}
            <div className="flex-1 flex flex-col justify-center mt-2">
              <div className="font-serif text-3xl font-semibold">
                {s.value}
              </div>
            </div>

            {/* 3. Footer Section - Fixed height placeholder to prevent shifting */}
            <div className="mt-auto h-4">
              {s.hint ? (
                <div className="text-[10px] text-muted-foreground leading-none">
                  {s.hint}
                </div>
              ) : (
                /* Invisible spacer to maintain layout symmetry */
                <div className="h-full w-full" aria-hidden="true" />
              )}
            </div>
          </GlowingCard>
        )
      })}
    </div>
  )
}