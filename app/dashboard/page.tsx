import Link from "next/link"
import { redirect } from "next/navigation"
import { SiteNav } from "@/components/site-nav"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { createClient } from "@/lib/supabase/server"
import { DashboardStats } from "@/components/dashboard/dashboard-stats"
import { PredictionsList } from "@/components/dashboard/predictions-list"
import { ArrowRight, Sparkles } from "lucide-react"

export const metadata = {
  title: "Dashboard · MetalCycle",
}

export default async function DashboardPage() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) redirect("/auth/login?redirect=/dashboard")

  const { data: predictions, error } = await supabase
    .from("predictions")
    .select(
      "id, metal, production_route, gwp_total, circularity_index, resource_efficiency, recycled_content_est, reuse_potential, imputed_fields, created_at, technical_profile",
    )
    .order("created_at", { ascending: false })
    .limit(50)

  const rows = predictions ?? []

  return (
    <div className="flex min-h-dvh flex-col relative z-10">
      <SiteNav />
      <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-10 md:py-16">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            {/* ✨ THEME UPGRADE: Glassmorphic badge with glowing spark */}
            <div className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-card/40 backdrop-blur-md px-3 py-1 text-xs text-muted-foreground">
              <Sparkles className="h-3 w-3 text-copper animate-spark" />
              Signed in as <span className="text-foreground font-medium">{user.email}</span>
            </div>
            <h1 className="mt-4 font-serif text-4xl font-semibold tracking-tight md:text-5xl">
              Your predictions
            </h1>
            <p className="mt-2 text-muted-foreground">
              Everything you&apos;ve saved — searchable, comparable, exportable.
            </p>
          </div>
          
          {/* ✨ THEME UPGRADE: Shimmering Copper Button */}
          <Button asChild size="lg" className="bg-copper text-copper-foreground ring-copper-glow hover:scale-[1.02] hover:brightness-110 transition-all border-none relative overflow-hidden group">
            <Link href="/predictor">
              <div className="absolute inset-0 animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative z-10 flex items-center">
                New prediction
                <ArrowRight className="ml-2 h-4 w-4" />
              </span>
            </Link>
          </Button>
        </div>

        <div className="mt-10">
          <DashboardStats rows={rows} />
        </div>

        <div className="mt-10">
          <PredictionsList rows={rows} error={error?.message ?? null} />
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}