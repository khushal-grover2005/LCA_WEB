"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { Trash2, Sparkles, Flame, Recycle, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
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
  // Added this to hold the profile data!
  technical_profile?: Record<string, any> 
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
  
  // State to track which rows have their technical profile expanded
  const [expandedRows, setExpandedRows] = useState<Record<string, boolean>>({})

  const toggleRow = (id: string) => {
    setExpandedRows((prev) => ({ ...prev, [id]: !prev[id] }))
  }

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

      {/* Header Row */}
      <div className="hidden grid-cols-[1.2fr_1.5fr_0.8fr_0.8fr_0.8fr_auto_1.2fr] gap-4 border-b border-border bg-muted/10 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground md:grid md:items-center">
        <div>Metal</div>
        <div>Route</div>
        <div className="text-right">GWP</div>
        <div className="text-right">Circularity</div>
        <div className="text-right">Recycled %</div>
        <div className="text-center w-16">Profile</div>
        <div className="flex items-center justify-end gap-2">
          <span>Date</span>
          <div className="w-8"></div> {/* Spacer for alignment with trash button */}
        </div>
      </div>

      <ul className="divide-y divide-border/50">
        {rows.map((row) => {
          const isExpanded = !!expandedRows[row.id]

          return (
            <li
              key={row.id}
              className="group grid grid-cols-1 gap-3 px-5 py-4 transition-all duration-300 hover:bg-primary/5 md:grid-cols-[1.2fr_1.5fr_0.8fr_0.8fr_0.8fr_auto_1.2fr] md:items-center md:gap-4"
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

              {/* Profile Toggle Switch */}
              <div className="flex items-center justify-between md:justify-center mt-2 md:mt-0 w-full md:w-16">
                <span className="text-xs text-muted-foreground md:hidden uppercase font-semibold">Full Profile</span>
                <Switch 
                  checked={isExpanded} 
                  onCheckedChange={() => toggleRow(row.id)} 
                  aria-label="Toggle full technical profile"
                />
              </div>

              {/* Date and Delete Button */}
              <div className="flex items-center justify-between gap-2 md:justify-end mt-4 md:mt-0">
                <span className="text-xs text-muted-foreground font-mono">
                  {formatDate(row.created_at)}
                </span>
                {/* ✨ FIX: Removed hover/opacity classes. It is now always visible! */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-muted-foreground hover:bg-destructive/10 hover:text-destructive"
                  onClick={() => onDelete(row.id)}
                  disabled={deletingId === row.id}
                  aria-label="Delete prediction"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>

              {/* Expandable Technical Profile Section */}
              {isExpanded && (
                <div className="col-span-1 md:col-span-7 mt-4 rounded-xl bg-background/50 p-5 border border-border shadow-inner animate-in fade-in slide-in-from-top-2">
                  <h4 className="flex items-center gap-2 text-sm font-semibold text-foreground mb-4">
                    <FileText className="h-4 w-4 text-primary" />
                    Full Technical Profile
                  </h4>
                  
                  {row.technical_profile && Object.keys(row.technical_profile).length > 0 ? (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                      {Object.entries(row.technical_profile).map(([key, val]) => (
                        <div key={key} className="flex flex-col gap-1 border-l-2 border-primary/20 pl-3">
                          <span className="text-[10px] text-muted-foreground uppercase tracking-wider">
                            {key.replace(/_/g, ' ')}
                          </span>
                          <span className="font-mono text-sm text-foreground">
                            {typeof val === 'number' ? formatNum(val, 2) : String(val)}
                          </span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm text-muted-foreground italic">
                      No detailed technical profile data saved for this prediction.
                    </p>
                  )}
                </div>
              )}

            </li>
          )
        })}
      </ul>
    </div>
  )
}