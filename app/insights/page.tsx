import { redirect } from "next/navigation"
import { Sparkles, BarChart3, GitBranch, Target } from "lucide-react"
import { GlowingCard } from "@/components/ui/glowing-card"
import { createClient } from "@/lib/supabase/server"
import { SankeyChart } from "@/components/analytics/sankey-chart"

export const metadata = {
  title: "Analytics & Insights · MetalCycle",
}

export default async function InsightsPage() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) redirect("/auth/login?redirect=/insights")

  // Fetch latest prediction to visualize
  const { data: latest } = await supabase
    .from("predictions")
    .select("*")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false })
    .limit(1)
    .single()

  // Mock data for visualization if no prediction exists yet
  const sankeyData = latest?.visualizations?.sankey_data ?? {
    nodes: [{ name: "Extraction" }, { name: "Smelting" }, { name: "Manufacturing" }],
    links: [{ source: 0, target: 1, value: 50 }, { source: 1, target: 2, value: 50 }],
  }

  return (
    <div className="flex min-h-dvh flex-col bg-background pt-10">
      <main className="mx-auto w-full max-w-7xl flex-1 px-6 py-10 md:py-16">
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground">
            <Target className="h-3 w-3 text-accent" />
            Performance Analytics
          </div>
          <h1 className="mt-4 font-serif text-4xl font-semibold tracking-tight md:text-5xl">
            Insights & Analytics
          </h1>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="col-span-1 lg:col-span-2">
            <SankeyChart data={sankeyData} />
          </div>

          <GlowingCard className="col-span-1 h-96 flex flex-col items-center justify-center border-border/50 text-muted-foreground">
            <BarChart3 className="mb-4 h-8 w-8 text-accent/50" />
            <p className="font-serif text-lg">Efficiency Radar</p>
            <span className="text-xs">
              {latest ? "Analyzing performance vs ideal" : "Run a prediction to see data"}
            </span>
          </GlowingCard>
        </div>
      </main>
    </div>
  )
}
