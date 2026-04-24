"use client"

import { useState } from "react"
import { ChevronDown, Plus, X } from "lucide-react"
import { type LcaField } from "@/lib/lca/schema"
import { FieldRow } from "./field-row"
import { cn } from "@/lib/utils"

type Props = {
  title: string
  description: string
  fields: LcaField[]
  state: Record<string, { value: string; touched: boolean; error: string | null }>
  enabledOptional: Set<string>
  metal: string
  onChange: (key: string, value: string) => void
  onBlur: (key: string) => void
  onToggle: (key: string, on: boolean) => void
}

export function OptionalGroup({
  title,
  description,
  fields,
  state,
  enabledOptional,
  metal,
  onChange,
  onBlur,
  onToggle,
}: Props) {
  const [open, setOpen] = useState(false)
  const activeCount = fields.filter((f) => enabledOptional.has(f.key)).length
  const inactiveFields = fields.filter((f) => !enabledOptional.has(f.key))
  const activeFields = fields.filter((f) => enabledOptional.has(f.key))

  return (
    <div className="rounded-xl border border-border bg-card/60">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between px-5 py-4 text-left"
        aria-expanded={open}
      >
        <div>
          <h3 className="font-serif text-lg font-semibold">{title}</h3>
          <p className="text-xs text-muted-foreground">{description}</p>
        </div>
        <div className="flex items-center gap-3">
          {activeCount > 0 && (
            <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
              {activeCount} active
            </span>
          )}
          <ChevronDown
            className={cn(
              "h-4 w-4 text-muted-foreground transition-transform",
              open && "rotate-180",
            )}
          />
        </div>
      </button>

      {open && (
        <div className="border-t border-border px-5 py-5">
          {activeFields.length > 0 && (
            <div className="mb-5 grid grid-cols-1 gap-5 md:grid-cols-2">
              {activeFields.map((f) => (
                <div key={f.key} className="relative">
                  <FieldRow
                    field={f}
                    value={state[f.key].value}
                    error={state[f.key].error}
                    touched={state[f.key].touched}
                    metal={metal}
                    onChange={(v) => onChange(f.key, v)}
                    onBlur={() => onBlur(f.key)}
                  />
                  <button
                    type="button"
                    onClick={() => onToggle(f.key, false)}
                    className="absolute -top-1 right-0 rounded-full p-1 text-muted-foreground hover:bg-destructive/10 hover:text-destructive"
                    aria-label={`Remove ${f.label}`}
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                </div>
              ))}
            </div>
          )}

          {inactiveFields.length > 0 && (
            <div>
              {activeFields.length > 0 && (
                <p className="mb-2 text-xs uppercase tracking-wider text-muted-foreground">
                  Add more
                </p>
              )}
              <div className="flex flex-wrap gap-2">
                {inactiveFields.map((f) => (
                  <button
                    key={f.key}
                    type="button"
                    onClick={() => onToggle(f.key, true)}
                    className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1.5 text-xs text-foreground/80 transition-colors hover:border-primary/40 hover:text-primary"
                  >
                    <Plus className="h-3 w-3" />
                    {f.label}
                    {f.unit && (
                      <span className="text-muted-foreground">
                        ({f.unit})
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
