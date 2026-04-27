import { Sparkles, BarChart3, GitBranch, Target } from "lucide-react"
import { GlowingCard } from "@/components/ui/glowing-card"

export const metadata = {
  title: "Analytics & Insights · MetalCycle",
}

export default async function InsightsPage() {
  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <main className="mx-auto w-full max-w-7xl flex-1 px-6 py-10 md:py-16">
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground">
            <Target className="h-3 w-3 text-accent" />
            Performance Analytics
          </div>
          <h1 className="mt-4 font-serif text-4xl font-semibold tracking-tight md:text-5xl">
            Insights & Analytics
          </h1>
          <p className="mt-2 text-muted-foreground">
            Visual breakdown of your material flows and carbon efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Sankey Placeholder */}
          <GlowingCard className="col-span-1 lg:col-span-2 h-96 flex flex-col justify-center items-center text-muted-foreground border-border/50">
            <GitBranch className="mb-4 h-8 w-8 text-primary/50" />
            <p className="font-serif text-lg">Material Flow Sankey</p>
            <span className="text-xs">Coming soon: Data visualization stream</span>
          </GlowingCard>

          {/* Radar Placeholder */}
          <GlowingCard className="col-span-1 h-96 flex flex-col justify-center items-center text-muted-foreground border-border/50">
            <BarChart3 className="mb-4 h-8 w-8 text-accent/50" />
            <p className="font-serif text-lg">Efficiency Radar</p>
            <span className="text-xs">Circularity performance metrics</span>
          </GlowingCard>
          
          {/* Additional Stats Placeholder */}
          <GlowingCard className="col-span-1 md:col-span-3 p-8 flex items-center justify-between border-border/50">
             <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                    <Sparkles className="h-6 w-6" />
                </div>
                <div>
                    <h3 className="font-serif text-xl font-semibold">Strategic Benchmarking</h3>
                    <p className="text-sm text-muted-foreground">Your performance is currently tracking 12% above industry baseline.</p>
                </div>
             </div>
          </GlowingCard>
        </div>
      </main>
    </div>
  )
}
