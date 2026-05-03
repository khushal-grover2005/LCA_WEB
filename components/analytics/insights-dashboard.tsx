"use client"

import { useState, useMemo, useRef, useEffect } from "react"
import dynamic from "next/dynamic"
import { gsap } from "gsap"
import { Zap, Activity, ChevronRight, AlertCircle } from "lucide-react"
import { GlowingCard } from "@/components/ui/glowing-card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// ✨ PRO FIX: Added loading states so GSAP doesn't panic while waiting for these to mount
const SankeyChart = dynamic(() => import("./sankey-chart").then(mod => mod.SankeyChart), { 
  ssr: false,
  loading: () => <div className="h-full w-full flex items-center justify-center animate-pulse bg-muted/10 rounded-xl text-muted-foreground text-sm font-mono">Loading Flow...</div>
})
const ValueRadar = dynamic(() => import("./value-radar").then(mod => mod.ValueRadar), { 
  ssr: false,
  loading: () => <div className="h-full w-full flex items-center justify-center animate-pulse bg-muted/10 rounded-xl text-muted-foreground text-sm font-mono">Loading Radar...</div>
})

export function InsightsDashboard({ history }: { history: any[] }) {
  const [selectedId, setSelectedId] = useState(history?.[0]?.id || null)
  const [isAnalyzed, setIsAnalyzed] = useState(false)
  const [simulateRenewable, setSimulateRenewable] = useState(false)
  const dashboardRef = useRef<HTMLDivElement>(null)

  const activePrediction = useMemo(() => 
    history?.find(p => p.id === selectedId), 
  [selectedId, history])

  const maxValues = useMemo(() => {
    if (!history || history.length === 0) return { gwp: 1, circularity: 100, recycled: 100 };
    return {
      // Safely check for results.gwp_total, default to 1 if missing
      gwp: Math.max(...history.map(p => p.results?.gwp_total || 1)),
      circularity: 100,
      recycled: 100
    }
  }, [history])

  useEffect(() => {
    if (!isAnalyzed || !activePrediction) return;

    // ✨ PRO FIX: 50ms delay gives React time to put the dynamic charts into the DOM before animating
    const timer = setTimeout(() => {
      const ctx = gsap.context(() => {
        const tl = gsap.timeline()
        tl.to(".selection-box", { y: -15, duration: 0.5, ease: "power2.out" })
          .fromTo(".analysis-grid", { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, ease: "expo.out" })
          .from(".viz-card", { scale: 0.95, opacity: 0, stagger: 0.1, ease: "back.out(1.2)", duration: 0.5 }, "-=0.4")
      }, dashboardRef)
      return () => ctx.revert()
    }, 50)

    return () => clearTimeout(timer)
  }, [isAnalyzed, activePrediction])

  // ✨ PRO FIX: Handle empty database safely
  if (!history || history.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 bg-card/30 rounded-[2rem] border border-border/50">
        <AlertCircle className="h-12 w-12 text-muted-foreground mb-4" />
        <h2 className="text-2xl font-serif font-bold">No Data Available</h2>
        <p className="text-muted-foreground">Run a prediction in the Predictor first to generate insights.</p>
      </div>
    )
  }

  return (
    <div ref={dashboardRef} className="space-y-8 pb-20">
      {/* Selection Section */}
      <div className="selection-box flex flex-col md:flex-row justify-between items-end gap-6 bg-card/30 p-8 rounded-[2rem] border border-border/50 backdrop-blur-md">
        <div className="space-y-4 flex-1 w-full">
          <label className="text-[10px] font-black uppercase tracking-[0.2em] text-primary ml-1">Archive Explorer</label>
          <Select value={selectedId} onValueChange={(v) => { setSelectedId(v); setIsAnalyzed(false); }}>
            <SelectTrigger className="w-full md:w-[450px] h-14 bg-background/40 border-primary/10 hover:border-primary/40 transition-all text-base">
              <SelectValue placeholder="Select prediction log" />
            </SelectTrigger>
            <SelectContent className="z-[150]">
              {history.map((h, index) => (
                <SelectItem key={h.id} value={h.id} className="cursor-pointer">
                  <div className="flex items-center gap-3 w-full">
                    <span className="text-xs font-mono text-muted-foreground/40 w-6">
                      {(index + 1).toString().padStart(2, '0')}
                    </span>
                    <span className="font-bold w-28 text-left truncate">
                      {h.metal || "Unknown Metal"}
                    </span>
                    <span className="text-xs opacity-30 shrink-0">|</span>
                    <span className="text-xs font-mono opacity-60 tracking-wider">
                      {new Date(h.created_at).toLocaleDateString("en-GB", {
                        day: "2-digit", month: "2-digit", year: "numeric"
                      })}
                    </span>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <Button 
          size="lg" 
          onClick={() => setIsAnalyzed(true)} 
          disabled={!selectedId}
          className="h-14 px-12 font-black text-sm tracking-widest bg-primary shadow-[0_10px_30px_rgba(var(--primary),0.2)] hover:scale-105 transition-all"
        >
          GENERATE INSIGHTS <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>

      {isAnalyzed && activePrediction && (
        <div className="analysis-grid grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Radar Visualization */}
          <div className="viz-card lg:col-span-4 h-[500px]">
            <GlowingCard className="h-full p-8 flex flex-col relative overflow-hidden group">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="font-serif text-2xl font-bold">Performance</h3>
                  <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">Relative Accuracy</p>
                </div>
                <Activity className="text-primary h-5 w-5" />
              </div>
              <div className="flex-1 min-h-0">
                {/* ✨ PRO FIX: Ensure activePrediction.results exists before passing it */}
                {activePrediction.results ? (
                  <ValueRadar data={activePrediction} maxValues={maxValues} simulation={simulateRenewable} />
                ) : (
                  <div className="h-full flex items-center justify-center text-sm text-muted-foreground italic">No performance data saved.</div>
                )}
              </div>
            </GlowingCard>
          </div>

          {/* Sankey Supply Chain */}
          <div className="viz-card lg:col-span-8 h-[500px]">
            <GlowingCard className="h-full p-8 flex flex-col">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="font-serif text-2xl font-bold">Flow Topology</h3>
                  <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">Impact Distribution (kg CO₂/kg)</p>
                </div>
                <div className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-black text-primary">LIVE FLOW</div>
              </div>
              <div className="flex-1 min-h-0">
                {/* ✨ PRO FIX: Safely fallback to an empty chart if visualizations are missing */}
                <SankeyChart data={activePrediction.visualizations?.sankey_data || { nodes: [], links: [] }} />
              </div>
            </GlowingCard>
          </div>

          {/* Simulation Dashboard */}
          <div className="viz-card lg:col-span-12">
            <GlowingCard className="p-10 flex flex-col md:flex-row items-center justify-between gap-10 bg-gradient-to-br from-card to-primary/5">
              <div className="space-y-4 max-w-2xl">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-2xl">
                    <Zap className="h-8 w-8 text-primary animate-pulse" />
                  </div>
                  <h3 className="text-3xl font-black italic tracking-tighter uppercase">Green Grid Simulation</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Toggle the simulation to visualize the transition to a 100% renewable grid. In your current model, this optimization yields a <span className="text-primary font-bold">~60% reduction</span> in electricity-related GWP.
                </p>
              </div>
              <Button 
                variant={simulateRenewable ? "default" : "outline"}
                className={`h-20 px-16 rounded-[1.5rem] font-black text-xl transition-all shadow-2xl ${simulateRenewable ? 'scale-110' : ''}`}
                onClick={() => setSimulateRenewable(!simulateRenewable)}
              >
                {simulateRenewable ? "SIMULATION: ON" : "RUN SIMULATION"}
              </Button>
            </GlowingCard>
          </div>

        </div>
      )}
    </div>
  )
}