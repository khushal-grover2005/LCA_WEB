import { NextResponse, type NextRequest } from "next/server"
import { validateAll } from "@/lib/lca/validate"
import type { PredictResponse } from "@/lib/lca/types"

const HF_ENDPOINT =
  "https://khushal-grover2005-lca-predictor.hf.space/predict"

export async function POST(request: NextRequest) {
  let raw: Record<string, string>
  try {
    raw = await request.json()
  } catch {
    return NextResponse.json(
      { status: "error", message: "Invalid JSON body." },
      { status: 400 },
    )
  }

  // Coerce everything to strings for validation
  const normalized: Record<string, string> = {}
  for (const [k, v] of Object.entries(raw ?? {})) {
    normalized[k] = v === null || v === undefined ? "" : String(v)
  }

  const { errors, payload, isValid } = validateAll(normalized)
  if (!isValid) {
    return NextResponse.json(
      { status: "error", message: "Validation failed.", errors },
      { status: 422 },
    )
  }

  try {
    const upstream = await fetch(HF_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      // Avoid Next's fetch cache for predictions
      cache: "no-store",
    })

    if (!upstream.ok) {
      const text = await upstream.text()
      return NextResponse.json(
        {
          status: "error",
          message: `Upstream error (${upstream.status}): ${text.slice(0, 200)}`,
        },
        { status: 502 },
      )
    }

    const data = (await upstream.json()) as PredictResponse
    return NextResponse.json(data)
  } catch (err) {
    return NextResponse.json(
      {
        status: "error",
        message:
          err instanceof Error ? err.message : "Failed to reach predictor service.",
      },
      { status: 502 },
    )
  }
}
