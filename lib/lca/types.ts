export type PredictResponse = {
  status: "success" | "error"
  results?: {
    gwp_total?: number
    circularity_index?: number
    resource_efficiency?: number
    recycled_content_est?: number
    reuse_potential?: number
    [key: string]: unknown
  }
  visualizations?: {
    sankey_data?: {
      nodes: { name: string }[]
      links: { source: number; target: number; value: number }[]
    }
    [key: string]: unknown
  }
  technical_profile?: Record<string, string | number | null>
  imputed_fields?: string[]
  message?: string
}
