import { NextResponse, type NextRequest } from "next/server"
import { createClient } from "@/lib/supabase/server"
import type { PredictResponse } from "@/lib/lca/types"

export async function POST(request: NextRequest) {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 })
  }

  const body = (await request.json().catch(() => null)) as
    | {
        input_payload: Record<string, unknown>
        response: PredictResponse
      }
    | null
  if (!body?.input_payload || !body?.response) {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 })
  }

  const r = body.response.results ?? {}
  const { data, error } = await supabase
    .from("predictions")
    .insert({
      user_id: user.id,
      metal: String(body.input_payload.metal ?? ""),
      production_route: String(body.input_payload.production_route ?? ""),
      gwp_total: typeof r.gwp_total === "number" ? r.gwp_total : null,
      circularity_index:
        typeof r.circularity_index === "number" ? r.circularity_index : null,
      resource_efficiency:
        typeof r.resource_efficiency === "number"
          ? r.resource_efficiency
          : null,
      recycled_content_est:
        typeof r.recycled_content_est === "number"
          ? r.recycled_content_est
          : null,
      reuse_potential:
        typeof r.reuse_potential === "number" ? r.reuse_potential : null,
      input_payload: body.input_payload,
      
      // ✨ ADDED THIS LINE: Now the database receives the full profile object!
      technical_profile: body.response.technical_profile ?? {},
      
      response: body.response,
      visualizations: body.response.visualizations ?? {},
      imputed_fields: body.response.imputed_fields ?? [],
    })
    .select("id")
    .single()

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
  return NextResponse.json({ id: data.id })
}