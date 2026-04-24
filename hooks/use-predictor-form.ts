"use client"

import { useCallback, useMemo, useState } from "react"
import { FIELDS_BY_KEY, LCA_FIELDS } from "@/lib/lca/schema"
import { validateField } from "@/lib/lca/validate"

type FieldState = {
  value: string
  touched: boolean
  error: string | null
}

export type PredictorFormState = Record<string, FieldState>

function initialState(): PredictorFormState {
  const s: PredictorFormState = {}
  for (const f of LCA_FIELDS) {
    s[f.key] = { value: "", touched: false, error: null }
  }
  return s
}

export function usePredictorForm() {
  const [state, setState] = useState<PredictorFormState>(initialState)
  const [enabledOptional, setEnabledOptional] = useState<Set<string>>(new Set())

  const metal = state.metal.value

  const setValue = useCallback(
    (key: string, value: string) => {
      setState((prev) => {
        const field = FIELDS_BY_KEY[key]
        if (!field) return prev
        const result = validateField(field, value, { metal: prev.metal.value })
        const next: PredictorFormState = {
          ...prev,
          [key]: {
            value,
            touched: prev[key].touched || value.length > 0,
            error: result.ok ? null : result.error ?? "Invalid",
          },
        }
        // If metal changes, clear invalid production_route
        if (key === "metal" && prev.production_route.value) {
          const routeResult = validateField(
            FIELDS_BY_KEY.production_route,
            prev.production_route.value,
            { metal: value },
          )
          if (!routeResult.ok) {
            next.production_route = {
              value: "",
              touched: false,
              error: null,
            }
          }
        }
        return next
      })
    },
    [],
  )

  const markTouched = useCallback((key: string) => {
    setState((prev) => ({
      ...prev,
      [key]: { ...prev[key], touched: true },
    }))
  }, [])

  const toggleOptional = useCallback((key: string, on: boolean) => {
    setEnabledOptional((prev) => {
      const next = new Set(prev)
      if (on) next.add(key)
      else next.delete(key)
      return next
    })
    if (!on) {
      // Clear the value when opting out
      setState((prev) => ({
        ...prev,
        [key]: { value: "", touched: false, error: null },
      }))
    }
  }, [])

  const reset = useCallback(() => {
    setState(initialState())
    setEnabledOptional(new Set())
  }, [])

  const { isValid, payload, errorCount } = useMemo(() => {
    const errors: Record<string, string> = {}
    const out: Record<string, string | number> = {}
    for (const f of LCA_FIELDS) {
      const isRequired = f.required
      const isActive = isRequired || enabledOptional.has(f.key)
      const { value } = state[f.key]
      if (!isActive) continue
      if (!value.trim()) {
        if (isRequired) errors[f.key] = `${f.label} is required.`
        continue
      }
      const result = validateField(f, value, { metal })
      if (!result.ok) {
        errors[f.key] = result.error ?? "Invalid"
      } else if (result.value !== null && result.value !== undefined) {
        out[f.key] = result.value
      }
    }
    return {
      isValid:
        Object.keys(errors).length === 0 &&
        !!out.metal &&
        !!out.production_route,
      payload: out,
      errorCount: Object.keys(errors).length,
    }
  }, [state, enabledOptional, metal])

  return {
    state,
    enabledOptional,
    setValue,
    markTouched,
    toggleOptional,
    reset,
    isValid,
    payload,
    errorCount,
  }
}
