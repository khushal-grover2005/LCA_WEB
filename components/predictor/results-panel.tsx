"use client"

import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import {
  Bookmark,
  CheckCircle2,
  Flame,
  Gauge,
  Recycle,
  Sparkles,
  TrendingUp,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { FIELDS_BY_KEY, LCA_FIELDS, FIELD_GROUPS } from "@/lib/lca/schema"
import type { PredictResponse } from "@/lib/lca/types"
import { cn } from "@/lib/utils"
import { toast } from "sonner"

type Props = {
  response: PredictResponse
  inputPayload: Record<string, string | number>
  authenticated: boolean
}

function formatNum(v: unknown, digits = 2): string {
  if (v === null || v === undefined) return "—"
  const n = typeof v === "number" ? v : Number(v)
  if (!Number.isFinite(n)) return String(v)
  if (Math.abs(n) >= 1000) return n.toLocaleString(undefined, { maximumFractionDigits: 0 })
  return n.toFixed(digits)
}

export function ResultsPanel({ response, inputPayload, authenticated }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const [showProfile, setShowProfile] = useState(false)
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)

  const results = response.results ?? {}
  const imputed = new Set(response.imputed_fields ?? [])
  const profile = response.technical_profile ?? {}

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".result-card", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: "power3.out",
      })
      gsap.from(".metric-chip", {
        scale: 0.9,
        opacity: 0,
        duration: 0.5,
        stagger: 0.05,
        ease: "back.out(1.4)",
        delay: 0.2,
      })
    }, ref)
    return () => ctx.revert()
  }, [response])

  async function onSave() {
    setSaving(true)
    try {
      const res = await fetch("/api/predictions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ input_payload: inputPayload, response }),
      })
      if (!res.ok) {
        const body = await res.json().catch(() => ({}))
        throw new Error(body.error || `Failed (${res.status})`)
      }
      setSaved(true)
      toast.success("Saved to your dashboard.")
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Failed to save.")
    } finally {
      setSaving(false)
    }
  }

  const headline: {
    key: string
    label: string
    icon: typeof Flame
    unit?: string
    digits?: number
    tone?: "primary" | "accent" | "default"
  }[] = [
    { key: "gwp_total", label: "Total GWP", icon: Flame, unit: "kg CO₂/kg", tone: "primary" },
    { key: "circularity_index", label: "Circularity", icon: Recycle, digits: 2, tone: "accent" },
    { key: "resource_efficiency", label: "Resource Eff.", icon: Gauge, digits: 2 },
    { key: "recycled_content_est", label: "Recycled %", icon: TrendingUp, unit: "%", digits: 1 },
    { key: "reuse_potential", label: "Reuse Score", icon: Sparkles, digits: 2 },
  ]

  return (
    <div ref={ref} className="flex flex-col gap-6">
      {/* Headline metrics */}
      <div className="result-card overflow-hidden rounded-xl border border-border bg-card">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-5 py-4">
          <div>
            <h2 className="font-serif text-xl font-semibold">Prediction results</h2>
            <p className="text-xs text-muted-foreground">
              {String(inputPayload.metal)} · {String(inputPayload.production_route)}
            </p>
          </div>
          {authenticated ? (
            <Button
              onClick={onSave}
              size="sm"
              variant={saved ? "outline" : "default"}
              disabled={saving || saved}
            >
              {saved ? (
                <>
                  <CheckCircle2 className="mr-2 h-4 w-4" />
                  Saved
                </>
              ) : (
                <>
                  <Bookmark className="mr-2 h-4 w-4" />
                  {saving ? "Saving…" : "Save to dashboard"}
                </>
              )}
            </Button>
          ) : (
            <Button asChild size="sm" variant="outline">
              <a href="/auth/login">Sign in to save</a>
            </Button>
          )}
        </div>
        <div className="grid grid-cols-2 gap-3 p-5 md:grid-cols-5">
          {headline.map((h) => {
            const Icon = h.icon
            const value = results[h.key as keyof typeof results]
            return (
              <div
                key={h.key}
                className={cn(
                  "metric-chip rounded-lg border border-border bg-background/60 p-4",
                  h.tone === "primary" && "border-primary/30 bg-primary/5",
                  h.tone === "accent" && "border-accent/30 bg-accent/5",
                )}
              >
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground">
                  <Icon
                    className={cn(
                      "h-3.5 w-3.5",
                      h.tone === "primary" && "text-primary",
                      h.tone === "accent" && "text-accent",
                    )}
                  />
                  {h.label}
                </div>
                <div className="mt-2 font-serif text-2xl font-semibold">
                  {formatNum(value, h.digits ?? 2)}
                </div>
                {h.unit && (
                  <div className="text-[10px] text-muted-foreground">
                    {h.unit}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* Imputed fields */}
      {imputed.size > 0 && (
        <div className="result-card rounded-xl border border-border bg-card p-5">
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-accent" />
            <h3 className="font-serif text-base font-semibold">
              AI-estimated fields
            </h3>
            <Badge variant="secondary">{imputed.size}</Badge>
          </div>
          <p className="mt-1 text-xs text-muted-foreground">
            Our expert system estimated these values based on similar metal
            profiles.
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {Array.from(imputed).map((key) => {
              const field = FIELDS_BY_KEY[key]
              return (
                <Badge key={key} variant="outline" className="font-normal">
                  {field?.label ?? key}
                </Badge>
              )
            })}
          </div>
        </div>
      )}

      {/* Technical profile toggle */}
      <div className="result-card rounded-xl border border-border bg-card">
        <div className="flex items-center justify-between px-5 py-4">
          <div>
            <h3 className="font-serif text-base font-semibold">
              Full technical profile
            </h3>
            <p className="text-xs text-muted-foreground">
              All 42 parameters — your inputs alongside AI-estimated values.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Label htmlFor="toggle-profile" className="text-xs">
              Show
            </Label>
            <Switch
              id="toggle-profile"
              checked={showProfile}
              onCheckedChange={setShowProfile}
            />
          </div>
        </div>

        {showProfile && (
          <div className="border-t border-border">
            {FIELD_GROUPS.map((group) => {
              const fieldsInGroup = LCA_FIELDS.filter(
                (f) => f.group === group.key,
              )
              return (
                <div key={group.key} className="border-b border-border last:border-b-0">
                  <div className="bg-muted/30 px-5 py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {group.label}
                  </div>
                  <div className="divide-y divide-border/60">
                    {fieldsInGroup.map((f) => {
                      const isImputed = imputed.has(f.key)
                      const rawInput = inputPayload[f.key]
                      const profileValue = profile[f.key]
                      const display =
                        rawInput !== undefined && rawInput !== ""
                          ? rawInput
                          : profileValue
                      return (
                        <div
                          key={f.key}
                          className="flex items-center justify-between px-5 py-2.5 text-sm"
                        >
                          <div className="flex items-center gap-2">
                            <span className="text-foreground/90">{f.label}</span>
                            {f.unit && (
                              <span className="text-xs text-muted-foreground">
                                ({f.unit})
                              </span>
                            )}
                            {isImputed && (
                              <Badge
                                variant="outline"
                                className="border-accent/40 bg-accent/5 text-[10px] text-accent"
                              >
                                estimated
                              </Badge>
                            )}
                            {!isImputed &&
                              rawInput !== undefined &&
                              rawInput !== "" && (
                                <Badge
                                  variant="outline"
                                  className="border-primary/40 bg-primary/5 text-[10px] text-primary"
                                >
                                  your input
                                </Badge>
                              )}
                          </div>
                          <span className="font-mono text-sm tabular-nums text-foreground">
                            {display === undefined || display === null || display === ""
                              ? "—"
                              : typeof display === "number"
                              ? formatNum(display, 2)
                              : String(display)}
                          </span>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
