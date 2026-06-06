import { Zap } from "lucide-react"

export default function Loading() {
  return (
    <div className="flex-1 flex items-center justify-center min-h-[60vh] animate-in fade-in duration-300">
      <div className="flex flex-col items-center gap-6">
        <div className="relative flex h-20 w-20 items-center justify-center rounded-3xl bg-copper/10 border border-copper/20 shadow-[0_0_40px_rgba(255,107,0,0.15)]">
          <Zap className="h-10 w-10 text-copper animate-pulse" />
          <div className="absolute inset-0 rounded-3xl ring-4 ring-copper/10 animate-ping" style={{ animationDuration: '2s' }} />
        </div>
        <div className="flex flex-col items-center gap-2">
          <p className="text-sm font-bold tracking-widest uppercase text-copper animate-pulse">
            Processing
          </p>
          <p className="text-xs text-muted-foreground">
            Synchronizing with secure database...
          </p>
        </div>
      </div>
    </div>
  )
}