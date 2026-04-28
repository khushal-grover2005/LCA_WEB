import { Bot, MessageSquare, Sparkles } from "lucide-react"
import { GlowingCard } from "@/components/ui/glowing-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export const metadata = {
  title: "LCA AI Assistant · MetalCycle",
}

export default function ChatbotPage() {
  return (
    <div className="flex min-h-dvh flex-col bg-background pt-10">
      <main className="mx-auto w-full max-w-4xl flex-1 px-6">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground">
            <Bot className="h-3 w-3 text-primary" />
            LCA RAG Assistant
          </div>
          <h1 className="mt-4 font-serif text-4xl font-semibold tracking-tight">
            Ask the Expert System
          </h1>
          <p className="mt-2 text-muted-foreground">
            Get context-aware insights about your LCA predictions.
          </p>
        </div>

        <GlowingCard className="flex h-500px flex-col justify-between p-6">
          <div className="flex-1 space-y-4 overflow-y-auto pr-4">
            {/* Initial AI Message */}
            <div className="flex gap-3">
              <div className="flex h-8s w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Bot className="h-5 w-5" />
              </div>
              <div className="rounded-xl bg-muted p-4 text-sm text-muted-foreground shadow-sm">
                Hello! I am your MetalCycle RAG Assistant. Ask me about your recent prediction results, environmental impacts, or how to optimize your production routes.
              </div>
            </div>
          </div>

          <div className="mt-6 flex gap-2 pt-4 border-t border-border">
            <Input
              placeholder="Ask about your LCA data..."
              className="flex-1 bg-card border-border"
            />
            <Button size="icon" className="shrink-0 bg-primary hover:bg-primary/90">
              <MessageSquare className="h-4 w-4" />
            </Button>
          </div>
        </GlowingCard>
      </main>
    </div>
  )
}

