import { redirect } from "next/navigation"
import { Target } from "lucide-react"
import { createClient } from "@/lib/supabase/server"
import { InsightsDashboard } from "@/components/analytics/insights-dashboard"

export default async function InsightsPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect("/auth/login?redirect=/insights")

  const { data: history } = await supabase
    .from("predictions")
    .select("*")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false })

  return (
    <div className="flex min-h-dvh flex-col bg-background pt-10">
      <main className="mx-auto w-full max-w-7xl flex-1 px-6 py-10">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-primary">
            <Target className="h-3 w-3" />
            Decision Intelligence
          </div>
          <h1 className="mt-6 font-serif text-5xl font-bold tracking-tight">Analytics & Insights</h1>
          <p className="text-muted-foreground mt-2 max-w-lg">Advanced life-cycle assessment and process optimization simulations.</p>
        </div>

        <InsightsDashboard history={history || []} />
      </main>
    </div>
  )
}