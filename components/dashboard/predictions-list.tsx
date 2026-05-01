"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { Trash2, Sparkles, Flame, Recycle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { toast } from "sonner"

type Row = {
  id: string
  metal: string
  production_route: string
  gwp_total: number | null
  circularity_index: number | null
  resource_efficiency: number | null
  recycled_content_est: number | null
  reuse_potential: number | null
  imputed_fields: string[] | null
  created_at: string
}

function formatNum(v: number | null, digits = 2) {
  if (v === null || v === undefined || !Number.isFinite(v)) return "—"
  return v.toFixed(digits)
}

function formatDate(iso: string) {
  const d = new Date(iso)
  return d.toLocaleString(undefined, {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  })
}

export function PredictionsList({
  rows,
  error,
}: {
  rows: Row[]
  error: string | null
}) {
  const router = useRouter()
  const [deletingId, setDeletingId] = useState<string | null>(null)

  async function onDelete(id: string) {
    setDeletingId(id)
    try {
      const res = await fetch(`/api/predictions/${id}`, { method: "DELETE" })
      if (!res.ok) throw new Error(`Failed (${res.status})`)
      toast.success("Prediction deleted.")
      router.refresh()
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Failed to delete.")
    } finally {
      setDeletingId(null)
    }
  }

  if (error) {
    return (
      <div className="rounded-xl border border-destructive/30 bg-destructive/5 p-6 text-sm text-destructive">
        Failed to load predictions: {error}
      </div>
    )
  }

  if (rows.length === 0) {
    return (
      <div className="rounded-xl border border-dashed border-border bg-card/50 p-12 text-center">
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes pulse-glow {
            0%, 100% { box-shadow: 0 0 0 0 rgba(234, 120, 52, 0.4); }
            50% { box-shadow: 0 0 10px 2px rgba(234, 120, 52, 0.6); }
          }
          .animate-button-ready {
            animation: pulse-glow 2s infinite;
          }
        ` }} />
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Sparkles className="h-5 w-5" />
        </div>
        <h3 className="mt-4 font-serif text-xl font-semibold">
          No predictions yet
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Run your first prediction and save it here for easy comparison.
        </p>
        <Button asChild className="mt-6 animate-button-ready">
          <Link href="/predictor">Run a prediction</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-card shadow-lg shadow-black/5">
      {/* Terminal Header */}
      <div className="flex items-center gap-2 border-b border-border bg-muted/20 px-5 py-3">
        <div className="flex gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-destructive/60" />
          <div className="h-2.5 w-2.5 rounded-full bg-amber-500/60" />
          <div className="h-2.5 w-2.5 rounded-full bg-emerald-500/60" />
        </div>
        <div className="ml-2 text-xs font-mono text-muted-foreground">
          PREDICTION_LOG_TERMINAL_V1
        </div>
      </div>

      {/* Header Row (Hidden on mobile, perfectly aligned via grid on desktop) */}
      <div className="hidden grid-cols-[1.2fr_1.5fr_0.8fr_0.8fr_0.8fr_0.6fr_1.2fr] gap-4 border-b border-border bg-muted/10 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground md:grid md:items-center">
        <div>Metal</div>
        <div>Route</div>
        <div className="text-right">GWP</div>
        <div className="text-right">Circularity</div>
        <div className="text-right">Recycled %</div>
        <div>Imputed</div>
        {/* Alignment Fix: Match the row's layout so "Date" sits perfectly over the timestamp */}
        <div className="flex items-center justify-end gap-2">
          <span>Date</span>
          <div className="w-7"></div> {/* Invisible placeholder for the trash button */}
        </div>
      </div>

      <ul className="divide-y divide-border/50">
        {rows.map((row) => {
          const imputedCount = row.imputed_fields?.length ?? 0
          return (
            <li
              key={row.id}
              className="group grid grid-cols-1 gap-3 px-5 py-4 transition-all duration-300 hover:bg-primary/5 hover:backdrop-blur-sm md:grid-cols-[1.2fr_1.5fr_0.8fr_0.8fr_0.8fr_0.6fr_1.2fr] md:items-center md:gap-4"
            >
              <div>
                <div className="font-serif text-lg font-semibold group-hover:text-primary transition-colors">
                  {row.metal}
                </div>
                <div className="text-xs text-muted-foreground md:hidden font-mono">
                  {row.production_route}
                </div>
              </div>
              <div className="hidden text-sm text-muted-foreground md:block font-mono">
                {row.production_route}
              </div>
              <div className="flex items-center gap-4 md:contents">
                <div className="flex items-center gap-1.5 md:block md:text-right">
                  <Flame className="h-3.5 w-3.5 text-primary md:hidden" />
                  <span className="font-mono text-sm tabular-nums">
                    {formatNum(row.gwp_total, 2)}
                  </span>
                  <span className="text-[10px] text-muted-foreground md:block">
                    kg CO₂/kg
                  </span>
                </div>
                <div className="flex items-center gap-1.5 md:block md:text-right">
                  <Recycle className="h-3.5 w-3.5 text-accent md:hidden" />
                  <span className="font-mono text-sm tabular-nums text-accent font-semibold">
                    {formatNum(row.circularity_index, 2)}
                  </span>
                </div>
                <div className="md:text-right">
                  <span className="font-mono text-sm tabular-nums">
                    {formatNum(row.recycled_content_est, 1)}%
                  </span>
                </div>
              </div>
              <div>
                {imputedCount > 0 ? (
                  <Badge variant="outline" className="border-accent/30 bg-accent/5 text-[10px] text-accent">
                    {imputedCount} EST
                  </Badge>
                ) : (
                  <span className="text-xs text-muted-foreground font-mono">—</span>
                )}
              </div>
              <div className="flex items-center justify-between gap-2 md:justify-end">
                <span className="text-xs text-muted-foreground font-mono">
                  {formatDate(row.created_at)}
                </span>
                
                {/* Mobile Visibility Fix: opacity-100 on mobile, fades on hover for desktop */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-7 w-7 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity"
                  onClick={() => onDelete(row.id)}
                  disabled={deletingId === row.id}
                  aria-label="Delete prediction"
                >
                  <Trash2 className="h-3.5 w-3.5 text-destructive" />
                </Button>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}