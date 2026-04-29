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
    { label: "Saved predictions", value: count.toString(), icon: BarChart3 },
    { label: "Unique metals", value: uniqueMetals.toString(), icon: Sparkles, tone: "accent" },
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
            className="stat-card opacity-100 flex flex-col h-full min-h-[160px] p-5"
          >
            {/* 1. TOP SECTION: Label and Icon */}
            <div className="h-6 flex items-center gap-2">
              <div className="flex items-center justify-center w-4 h-4">
                <Icon
                  className={`h-3.5 w-3.5 ${
                    s.tone === "primary" ? "text-primary" : 
                    s.tone === "accent" ? "text-accent" : 
                    "text-muted-foreground"
                  }`}
                />
              </div>
              <span className="text-[10px] uppercase tracking-[0.1em] text-muted-foreground font-bold leading-none">
                {s.label}
              </span>
            </div>

            {/* 2. MIDDLE SECTION: The Big Value */}
            <div className="flex-1 flex items-center pt-2">
              <span className="font-serif text-4xl font-semibold tracking-tight leading-none">
                {s.value}
              </span>
            </div>

            {/* 3. BOTTOM SECTION: The Unit Hint */}
            <div className="h-4 mt-2 flex items-end">
              {s.hint ? (
                <span className="text-[10px] text-muted-foreground/70 font-medium leading-none">
                  {s.hint}
                </span>
              ) : (
                <div className="h-px w-full" aria-hidden="true" />
              )}
            </div>
          </GlowingCard>
        )
      })}
    </div>
  )
}