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
    // We use a selector to ensure elements are hidden before animation starts
    // but visible if GSAP fails to load.
    const ctx = gsap.context(() => {
      gsap.from(".stat-card", {
        y: 12,
        opacity: 0,
        duration: 0.4,
        stagger: 0.05,
        ease: "power2.out",
        clearProps: "all", // This clears GSAP styles after animation to let CSS take back over
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
    <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full auto-rows-fr">
      {stats.map((s) => {
        const Icon = s.icon
        return (
          <GlowingCard 
            key={s.label} 
            className="stat-card flex flex-col h-full min-h-[150px] p-6 relative overflow-hidden"
          >
            {/* 1. Fixed Header Lane (24px) */}
            <div className="h-6 flex items-center gap-2 mb-2">
              <div className="flex-shrink-0 flex items-center justify-center w-4 h-4">
                <Icon
                  className={`h-4 w-4 ${
                    s.tone === "primary" ? "text-primary" : 
                    s.tone === "accent" ? "text-accent" : 
                    "text-muted-foreground"
                  }`}
                />
              </div>
              <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold truncate">
                {s.label}
              </span>
            </div>

            {/* 2. Expanding Middle Lane (Vertical Center) */}
            <div className="flex-1 flex items-center">
              <span className="font-serif text-4xl font-semibold tracking-tight leading-none">
                {s.value}
              </span>
            </div>

            {/* 3. Fixed Footer Lane (16px) */}
            <div className="h-4 mt-3 flex items-center">
              {s.hint ? (
                <span className="text-[10px] text-muted-foreground/60 font-medium leading-none">
                  {s.hint}
                </span>
              ) : (
                <div className="h-px w-full bg-transparent" aria-hidden="true" />
              )}
            </div>
          </GlowingCard>
        )
      })}
    </div>
  )
}