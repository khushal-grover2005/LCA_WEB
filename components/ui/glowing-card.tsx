"use client"

import { useRef } from "react"
import { cn } from "@/lib/utils"

export function GlowingCard({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)

  return (
    <div
      ref={ref}
      className={cn(
        "group relative overflow-hidden rounded-xl border border-primary/20 bg-card p-6 shadow-md transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5",
        "before:absolute before:inset-0 before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100",
        "before:bg-[radial-gradient(400px_circle_at_var(--mouse-x,0px)_var(--mouse-y,0px),rgba(234,120,52,0.15),transparent_80%)]",
        className,
      )}
      onMouseMove={(e) => {
        if (!ref.current) return
        const rect = ref.current.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        ref.current.style.setProperty("--mouse-x", `${x}px`)
        ref.current.style.setProperty("--mouse-y", `${y}px`)
      }}
    >
      {/* Subtle border glow effect */}
      <div className="absolute inset-0 rounded-xl bg-linear-to-tr from-primary/10 via-transparent to-accent/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative z-10">{children}</div>
    </div>
  )
}

