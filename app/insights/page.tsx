import { redirect } from "next/navigation"
import { Target } from "lucide-react"
import { createClient } from "@/lib/supabase/server"
import { InsightsDashboard } from "@/components/analytics/insights-dashboard"
import { SiteNav } from "@/components/site-nav" 

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
    // ✨ THEME FIX: Removed bg-background and added relative z-10 so the global orbs shine through!
    <div className="flex min-h-dvh flex-col relative z-10">
      <SiteNav /> 
      
      {/* Changed pt-10 to pt-24 to provide space under the sticky nav */}
      <main className="mx-auto w-full max-w-7xl flex-1 px-6 py-10 pt-24">
        <div className="mb-12 px-6">
          {/* ✨ THEME UPGRADE: Glassmorphic Copper Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-card/40 backdrop-blur-md px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-copper">
            <Target className="h-3 w-3 animate-spark" />
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