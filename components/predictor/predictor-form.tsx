"use client"

import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { AlertCircle, Loader2, RotateCcw, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FieldRow } from "./field-row"
import { OptionalGroup } from "./optional-group"
import { ResultsPanel } from "./results-panel"
import { usePredictorForm } from "@/hooks/use-predictor-form"
import { FIELD_GROUPS, LCA_FIELDS } from "@/lib/lca/schema"
import type { PredictResponse } from "@/lib/lca/types"
import { cn } from "@/lib/utils"

const REQUIRED_KEYS = new Set(LCA_FIELDS.filter((f) => f.required).map((f) => f.key))

// Identity fields shown inline in the "required" card
const IDENTITY_FIELDS = LCA_FIELDS.filter(
  (f) => f.group === "identity" && f.required,
)

// Optional groups shown below (identity extras are merged into 'identity' optional group)
const OPTIONAL_GROUP_ORDER: Array<(typeof FIELD_GROUPS)[number]["key"]> = [
  "identity",
  "process",
  "transport",
  "environmental",
  "circularity",
  "economic",
  "meta",
]

// Exclude output-only metrics from the form
const HIDDEN_FIELDS = new Set(["data_completeness_score", "recommended_action"])

export function PredictorForm({ authenticated }: { authenticated: boolean }) {
  const ref = useRef<HTMLDivElement>(null)
  const resultsRef = useRef<HTMLDivElement>(null)
  const {
    state,
    enabledOptional,
    setValue,
    markTouched,
    toggleOptional,
    reset,
    isValid,
    payload,
    errorCount,
  } = usePredictorForm()

  const [loading, setLoading] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [response, setResponse] = useState<PredictResponse | null>(null)
  const [submittedPayload, setSubmittedPayload] = useState<
    Record<string, string | number>
  >({})

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".predictor-enter", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: "power3.out",
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  useEffect(() => {
    if (response && resultsRef.current) {
      resultsRef.current.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }, [response])

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!isValid || loading) return
    setLoading(true)
    setSubmitError(null)
    try {
      const res = await fetch("/api/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      const body = (await res.json()) as PredictResponse & {
        errors?: Record<string, string>
      }
      if (!res.ok) {
        throw new Error(
          body.message ??
            (body.errors
              ? Object.values(body.errors).slice(0, 2).join(" ")
              : `Request failed (${res.status})`),
        )
      }
      setResponse(body)
      setSubmittedPayload(payload)
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : "Prediction failed.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div ref={ref} className="flex flex-col gap-8">
      <form onSubmit={onSubmit} className="flex flex-col gap-6">
        {/* Required identity card */}
        <div className="predictor-enter rounded-xl border border-primary/30 bg-linear-to-br from-card to-primary/5 p-6">
          <div className="mb-5 flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
              1
            </span>
            <h2 className="font-serif text-lg font-semibold">
              Required inputs
            </h2>
            <span className="text-xs text-muted-foreground">
              Everything else is optional.
            </span>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {IDENTITY_FIELDS.map((field) => (
              <FieldRow
                key={field.key}
                field={field}
                value={state[field.key].value}
                error={state[field.key].error}
                touched={state[field.key].touched}
                metal={state.metal.value}
                onChange={(v) => setValue(field.key, v)}
                onBlur={() => markTouched(field.key)}
              />
            ))}
          </div>
        </div>

        {/* Optional groups */}
        <div className="predictor-enter flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-muted text-xs font-semibold text-foreground">
              2
            </span>
            <h2 className="font-serif text-lg font-semibold">
              Optional parameters
            </h2>
            <span className="text-xs text-muted-foreground">
              Add only what you know — the rest will be intelligently estimated.
            </span>
          </div>

          {OPTIONAL_GROUP_ORDER.map((groupKey) => {
            const meta = FIELD_GROUPS.find((g) => g.key === groupKey)!
            const fields = LCA_FIELDS.filter(
              (f) => f.group === groupKey && !REQUIRED_KEYS.has(f.key) && !HIDDEN_FIELDS.has(f.key),
            )
            if (fields.length === 0) return null
            return (
              <OptionalGroup
                key={groupKey}
                title={meta.label}
                description={meta.description}
                fields={fields}
                state={state}
                enabledOptional={enabledOptional}
                metal={state.metal.value}
                onChange={setValue}
                onBlur={markTouched}
                onToggle={toggleOptional}
              />
            )
          })}
        </div>

        {/* Submit bar */}
        <div
          className={cn(
            "predictor-enter sticky bottom-4 z-10 flex flex-wrap items-center justify-between gap-4 rounded-xl border bg-card/95 p-4 shadow-xl backdrop-blur transition-all duration-500",
            isValid
              ? "border-primary/40 shadow-primary/20 animate-button-ready"
              : "border-border shadow-none",
          )}
        >
          <div className="flex items-center gap-3 text-sm">
            {isValid ? (
              <>
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="text-foreground">
                  System Status: <span className="font-semibold text-primary">READY</span>
                </span>
              </>
            ) : (
              <>
                <AlertCircle className={cn("h-4 w-4", errorCount > 0 ? "text-destructive" : "text-muted-foreground")} />
                <span className="text-muted-foreground">
                  {errorCount > 0
                    ? `Input Error: ${errorCount} field(s) require attention.`
                    : "System Status: Awaiting valid identity inputs."}
                </span>
              </>
            )}
          </div>
          <div className="flex items-center gap-2">
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => {
                reset()
                setResponse(null)
                setSubmitError(null)
              }}
            >
              <RotateCcw className="mr-2 h-3.5 w-3.5" />
              Reset
            </Button>
            <Button
              type="submit"
              size="lg"
              disabled={!isValid || loading}
              className={cn(
                "transition-all duration-300 font-semibold uppercase tracking-wider",
                isValid
                  ? "bg-primary text-primary-foreground hover:bg-primary/90 opacity-100 shadow-[0_0_20px_rgba(234,120,52,0.6)]"
                  : "bg-muted text-muted-foreground cursor-not-allowed opacity-40 grayscale",
              )}
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Predicting…
                </>
              ) : (
                <>
                  <Sparkles className="mr-2 h-4 w-4" />
                  Initiate Analysis
                </>
              )}
            </Button>
          </div>
        </div>

        {submitError && (
          <div className="predictor-enter rounded-lg border border-destructive/30 bg-destructive/5 p-4 text-sm text-destructive">
            <div className="flex items-start gap-2">
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
              <span>{submitError}</span>
            </div>
          </div>
        )}
      </form>

      {response && (
        <div ref={resultsRef} id="results">
          <ResultsPanel
            response={response}
            inputPayload={submittedPayload}
            authenticated={authenticated}
          />
        </div>
      )}
    </div>
  )
}

