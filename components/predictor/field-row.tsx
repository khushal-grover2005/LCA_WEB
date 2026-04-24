"use client"

import { AlertCircle } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { getRoutesForMetal, type LcaField } from "@/lib/lca/schema"
import { cn } from "@/lib/utils"

type Props = {
  field: LcaField
  value: string
  error: string | null
  touched: boolean
  metal?: string
  onChange: (value: string) => void
  onBlur: () => void
  disabled?: boolean
}

export function FieldRow({
  field,
  value,
  error,
  touched,
  metal,
  onChange,
  onBlur,
  disabled,
}: Props) {
  const showError = touched && !!error
  const id = `field-${field.key}`

  const options =
    field.kind === "categorical"
      ? field.dependsOn === "metal"
        ? getRoutesForMetal(metal)
        : field.options ?? []
      : []

  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-baseline justify-between gap-2">
        <Label
          htmlFor={id}
          className={cn(
            "flex items-center gap-1.5",
            disabled && "text-muted-foreground",
          )}
        >
          {field.label}
          {field.required && (
            <span className="text-primary" aria-hidden>
              *
            </span>
          )}
          {field.unit && (
            <span className="text-xs font-normal text-muted-foreground">
              ({field.unit})
            </span>
          )}
        </Label>
        {typeof field.min === "number" && typeof field.max === "number" && (
          <span className="text-[10px] text-muted-foreground">
            {field.min}–{field.max}
          </span>
        )}
      </div>

      {field.kind === "categorical" ? (
        <Select
          value={value || undefined}
          onValueChange={(v) => {
            onChange(v)
            onBlur()
          }}
          disabled={disabled || (field.dependsOn === "metal" && !metal)}
        >
          <SelectTrigger
            id={id}
            aria-invalid={showError}
            className={cn(showError && "border-destructive")}
          >
            <SelectValue
              placeholder={
                field.dependsOn === "metal" && !metal
                  ? "Choose a metal first"
                  : "Select…"
              }
            />
          </SelectTrigger>
          <SelectContent>
            {options.length === 0 ? (
              <div className="px-3 py-2 text-xs text-muted-foreground">
                No options available
              </div>
            ) : (
              options.map((opt) => (
                <SelectItem key={opt} value={opt}>
                  {opt}
                </SelectItem>
              ))
            )}
          </SelectContent>
        </Select>
      ) : (
        <Input
          id={id}
          type="text"
          inputMode={field.kind === "integer" ? "numeric" : "decimal"}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onBlur={onBlur}
          placeholder={field.placeholder ?? ""}
          aria-invalid={showError}
          disabled={disabled}
          className={cn(showError && "border-destructive")}
        />
      )}

      {showError ? (
        <p className="flex items-start gap-1 text-xs text-destructive">
          <AlertCircle className="mt-0.5 h-3 w-3 shrink-0" />
          <span>{error}</span>
        </p>
      ) : (
        <p className="text-xs text-muted-foreground">{field.description}</p>
      )}
    </div>
  )
}
