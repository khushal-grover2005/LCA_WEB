"use client"

import { useState } from "react"
import { Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// Use your actual types here if you have them exported!
type Prediction = any 

export function PredictionsList({ 
  predictions, 
  onDelete 
}: { 
  predictions: Prediction[]
  onDelete: (id: string) => void 
}) {
  const [isDeleting, setIsDeleting] = useState<string | null>(null)

  // ✨ ALIGNMENT FIX: This single layout string is used for BOTH the header and the rows.
  // This guarantees every column stays perfectly synced.
  const gridLayout = "grid grid-cols-1 md:grid-cols-[1.5fr_2.5fr_1fr_1fr_1fr_1fr_1fr_3rem] gap-4 px-6 items-center"

  const handleDelete = async (id: string) => {
    setIsDeleting(id)
    await onDelete(id)
    setIsDeleting(null)
  }

  if (predictions.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-xl border border-border bg-card py-20 text-center">
        <p className="text-muted-foreground">No predictions saved yet.</p>
      </div>
    )
  }

  return (
    <div className="rounded-xl border border-border bg-card overflow-hidden shadow-xl">
      {/* Terminal Top Bar */}
      <div className="flex items-center gap-2 border-b border-border bg-muted/30 px-4 py-3">
        <div className="flex gap-1.5">
          <div className="h-3 w-3 rounded-full bg-red-500/80" />
          <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
          <div className="h-3 w-3 rounded-full bg-green-500/80" />
        </div>
        <div className="ml-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          Prediction_Log_Terminal_v1
        </div>
      </div>

      {/* Table Header (Hidden on Mobile) */}
      <div className={cn(
        gridLayout, 
        "hidden md:grid py-4 border-b border-border bg-muted/10 text-xs font-semibold text-muted-foreground uppercase tracking-wider"
      )}>
        <div className="text-left">Metal</div>
        <div className="text-left">Route</div>
        <div className="text-right">GWP</div>
        <div className="text-right">Circularity</div>
        <div className="text-right">Recycled %</div>
        <div className="text-center">Imputed</div>
        <div className="text-right">Date</div>
        <div>{/* Empty column for delete button */}</div>
      </div>

      {/* Data Rows */}
      <div className="divide-y divide-border/50">
        {predictions.map((pred) => (
          <div 
            key={pred.id} 
            className={cn(
              gridLayout, 
              "py-5 group hover:bg-muted/5 transition-colors relative"
            )}
          >
            {/* Metal */}
            <div className="font-serif text-xl font-bold text-foreground">
              {pred.metal || "Unknown"}
            </div>
            
            {/* Route */}
            <div className="font-mono text-sm text-muted-foreground">
              {pred.production_route || "Primary"}
            </div>

            {/* GWP */}
            <div className="md:text-right flex md:flex-col items-center justify-between md:items-end gap-1 md:gap-0 mt-4 md:mt-0">
              <span className="md:hidden text-xs text-muted-foreground">GWP:</span>
              <div className="flex flex-col md:items-end">
                <span className="font-mono text-base font-semibold text-primary">
                  {pred.gwp_total ? Number(pred.gwp_total).toFixed(2) : "—"}
                </span>
                <span className="text-[10px] text-muted-foreground hidden md:block">kg CO₂/kg</span>
              </div>
            </div>

            {/* Circularity */}
            <div className="md:text-right flex items-center justify-between md:block mt-2 md:mt-0">
              <span className="md:hidden text-xs text-muted-foreground">Circularity:</span>
              <span className="font-mono text-base text-emerald-400">
                {pred.circularity_index ? Number(pred.circularity_index).toFixed(2) : "—"}
              </span>
            </div>

            {/* Recycled % */}
            <div className="md:text-right flex items-center justify-between md:block mt-2 md:mt-0">
              <span className="md:hidden text-xs text-muted-foreground">Recycled:</span>
              <span className="font-mono text-base">
                {pred.recycled_content_est ? Number(pred.recycled_content_est).toFixed(1) + "%" : "—"}
              </span>
            </div>

            {/* Imputed */}
            <div className="md:text-center flex items-center justify-between md:block mt-2 md:mt-0">
              <span className="md:hidden text-xs text-muted-foreground">Imputed:</span>
              <span className="font-mono text-sm text-muted-foreground">
                {pred.imputed_fields?.length > 0 ? pred.imputed_fields.length : "—"}
              </span>
            </div>

            {/* Date */}
            <div className="md:text-right flex items-center justify-between md:block mt-2 md:mt-0">
              <span className="md:hidden text-xs text-muted-foreground">Date:</span>
              <span className="font-mono text-xs text-muted-foreground">
                {new Date(pred.created_at).toLocaleDateString('en-GB', {
                  day: 'numeric', month: 'short'
                })}, {new Date(pred.created_at).toLocaleTimeString('en-GB', {
                  hour: '2-digit', minute: '2-digit'
                })}
              </span>
            </div>

            {/* ✨ MOBILE HOVER FIX: Delete Button ✨ */}
            {/* opacity-100 forces it to show on mobile. md:opacity-0 hides it on desktop until hovered. */}
            <div className="absolute top-5 right-6 md:relative md:top-0 md:right-0 flex justify-end">
              <Button
                variant="ghost"
                size="icon"
                disabled={isDeleting === pred.id}
                onClick={() => handleDelete(pred.id)}
                className="h-8 w-8 text-muted-foreground hover:text-destructive hover:bg-destructive/10 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}