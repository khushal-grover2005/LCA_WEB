import { FIELDS_BY_KEY, getRoutesForMetal, type LcaField } from "./schema"

export type ValidationResult = {
  ok: boolean
  error?: string
  /** Coerced value on success (number for numeric fields, string otherwise) */
  value?: string | number | null
}

/**
 * Validate a raw string input for a given field.
 * Empty string means "not provided" — valid for non-required fields.
 */
export function validateField(
  field: LcaField,
  raw: string,
  context: { metal?: string } = {},
): ValidationResult {
  const trimmed = raw.trim()

  if (!trimmed) {
    if (field.required) {
      return { ok: false, error: `${field.label} is required.` }
    }
    return { ok: true, value: null }
  }

  if (field.kind === "categorical") {
    const options =
      field.dependsOn === "metal"
        ? getRoutesForMetal(context.metal)
        : field.options ?? []
    if (!options.includes(trimmed)) {
      return {
        ok: false,
        error:
          field.dependsOn === "metal"
            ? "Select a production route that matches the chosen metal."
            : `Must be one of: ${options.slice(0, 4).join(", ")}${options.length > 4 ? "…" : ""}`,
      }
    }
    return { ok: true, value: trimmed }
  }

  // Numeric / integer
  if (!/^-?\d+(\.\d+)?$/.test(trimmed)) {
    return { ok: false, error: "Enter a valid number." }
  }
  const num = Number(trimmed)
  if (!Number.isFinite(num)) {
    return { ok: false, error: "Enter a finite number." }
  }
  if (field.kind === "integer" && !Number.isInteger(num)) {
    return { ok: false, error: "Enter a whole number." }
  }
  if (typeof field.min === "number" && num < field.min) {
    return { ok: false, error: `Must be ≥ ${field.min}${field.unit ? ` ${field.unit}` : ""}.` }
  }
  if (typeof field.max === "number" && num > field.max) {
    return { ok: false, error: `Must be ≤ ${field.max}${field.unit ? ` ${field.unit}` : ""}.` }
  }
  return { ok: true, value: num }
}

/** Validate the full form. Returns first error per field and a clean payload. */
export function validateAll(
  values: Record<string, string>,
): {
  errors: Record<string, string>
  payload: Record<string, string | number>
  isValid: boolean
} {
  const errors: Record<string, string> = {}
  const payload: Record<string, string | number> = {}
  const metal = values.metal?.trim()

  for (const key of Object.keys(FIELDS_BY_KEY)) {
    const field = FIELDS_BY_KEY[key]
    const raw = values[key] ?? ""
    const result = validateField(field, raw, { metal })
    if (!result.ok) {
      errors[key] = result.error ?? "Invalid value."
      continue
    }
    if (result.value !== null && result.value !== undefined && result.value !== "") {
      payload[key] = result.value
    }
  }

  return {
    errors,
    payload,
    isValid: Object.keys(errors).length === 0 && !!payload.metal && !!payload.production_route,
  }
}
