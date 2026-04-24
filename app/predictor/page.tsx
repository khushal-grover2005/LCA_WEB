import { SiteNav } from "@/components/site-nav"
import { SiteFooter } from "@/components/site-footer"
import { PredictorForm } from "@/components/predictor/predictor-form"
import { createClient } from "@/lib/supabase/server"

export const metadata = {
  title: "Predictor · MetalCycle",
  description:
    "Run a life-cycle prediction across 42 parameters for 20 metals.",
}

export default async function PredictorPage() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  return (
    <div className="flex min-h-dvh flex-col">
      <SiteNav />
      <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-10 md:py-16">
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Predictor
          </div>
          <h1 className="mt-4 font-serif text-4xl font-semibold tracking-tight md:text-5xl text-balance">
            Predict the life-cycle of any metal.
          </h1>
          <p className="mt-3 max-w-2xl text-muted-foreground text-pretty">
            Start with the metal and production route. Add as many of the other
            40 parameters as you know — our expert system will estimate the rest
            and flag every value it filled in.
          </p>
        </div>
        <PredictorForm authenticated={!!user} />
      </main>
      <SiteFooter />
    </div>
  )
}
