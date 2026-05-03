"use client"

import React, { useState, useMemo, useRef, useEffect } from "react"
import dynamic from "next/dynamic"
import { gsap } from "gsap"
import { Zap, Activity, ChevronRight, AlertCircle } from "lucide-react"
import { GlowingCard } from "@/components/ui/glowing-card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const SankeyChart = dynamic(() => import("./sankey-chart").then((mod: any) => mod.SankeyChart || mod.default), { 
  ssr: false,
  loading: () => <div className="h-[350px] w-full flex items-center justify-center animate-pulse bg-muted/10 rounded-xl text-muted-foreground text-sm font-mono">Loading Flow...</div>
})

const ValueRadar = dynamic(() => import("./value-radar").then((mod: any) => mod.ValueRadar || mod.default), { 
  ssr: false,
  loading: () => <div className="h-[350px] w-full flex items-center justify-center animate-pulse bg-muted/10 rounded-xl text-muted-foreground text-sm font-mono">Loading Radar...</div>
})

class ChartErrorBoundary extends React.Component<{children: React.ReactNode}, {hasError: boolean, error: Error | null}> {
  constructor(props: {children: React.ReactNode}) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center p-6 bg-destructive/10 text-destructive rounded-xl h-full min-h-[300px] border border-destructive/20 text-center">
          <AlertCircle className="h-8 w-8 mb-2" />
          <p className="font-bold text-sm">Chart Component Crashed</p>
          <code className="text-[10px] mt-2 p-2 bg-destructive/20 rounded max-w-full overflow-x-auto text-left">
            {this.state.error?.message || "Unknown rendering error."}
          </code>
        </div>
      );
    }
    return this.props.children;
  }
}

const formatSafeDate = (isoString: string) => {
  try {
    const d = new Date(isoString);
    if (isNaN(d.getTime())) return "Unknown Date";
    return `${d.getUTCDate().toString().padStart(2, '0')}/${(d.getUTCMonth() + 1).toString().padStart(2, '0')}/${d.getUTCFullYear()}`;
  } catch (e) {
    return "Unknown Date";
  }
}

// ✨ PRO FIX: A robust function to dig out the Sankey data no matter how Supabase nested it.
const extractSankeyData = (prediction: any) => {
  if (!prediction) return { nodes: [], links: [] };
  
  // It might be flat, it might be nested in visualizations, OR it might be nested inside a 'response' object
  let rawViz = prediction.visualizations || prediction.response?.visualizations || prediction.sankey_data;
  
  // If Supabase saved it as a raw string, parse it
  if (typeof rawViz === 'string') {
    try { rawViz = JSON.parse(rawViz); } catch(e) {}
  }
  
  return rawViz?.sankey_data || rawViz || { nodes: [], links: [] };
}

export function InsightsDashboard({ history }: { history: any[] }) {
  const [selectedId, setSelectedId] = useState(history?.[0]?.id || null)
  const [isAnalyzed, setIsAnalyzed] = useState(false)
  const [simulateRenewable, setSimulateRenewable] = useState(false)
  
  const dashboardRef = useRef<HTMLDivElement>(null)
  const analysisRef = useRef<HTMLDivElement>(null)

  const activePrediction = useMemo(() => {
    if (!Array.isArray(history)) return null;
    const rawData = history.find(p => p?.id === selectedId);
    if (!rawData) return null;

    // We check `rawData.response.results` in case you saved the entire API response inside a `response` column
    return {
      ...rawData,
      results: rawData.results || rawData.response?.results || {
        gwp_total: rawData.gwp_total || 0,
        circularity_index: rawData.circularity_index || 0,
        resource_efficiency: rawData.resource_efficiency || 0,
        recycled_content_est: rawData.recycled_content_est || 0,
      },
      technical_profile: rawData.technical_profile || rawData.response?.technical_profile || {}
    }
  }, [selectedId, history])

  const maxValues = useMemo(() => {
    if (!Array.isArray(history) || history.length === 0) return { gwp: 1, circularity: 100, recycled: 100 };
    return {
      gwp: Math.max(...history.map(p => Number(p?.gwp_total) || Number(p?.results?.gwp_total) || Number(p?.response?.results?.gwp_total) || 1)),
      circularity: 100,
      recycled: 100
    }
  }, [history])

  const handleAnalyze = () => {
    setIsAnalyzed(true)
    setTimeout(() => {
      if (analysisRef.current) {
        analysisRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100)
  }

  useEffect(() => {
    if (!isAnalyzed || !activePrediction) return;

    let ctx: gsap.Context;
    const timer = setTimeout(() => {
      ctx = gsap.context(() => {
        const tl = gsap.timeline()
        tl.to(".selection-box", { y: -15, duration: 0.5, ease: "power2.out" })
          .fromTo(".analysis-grid", { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, ease: "expo.out" })
          .from(".viz-card", { scale: 0.95, opacity: 0, stagger: 0.1, ease: "back.out(1.2)", duration: 0.5 }, "-=0.4")
      }, dashboardRef)
    }, 50)

    return () => {
      clearTimeout(timer);
      if (ctx) ctx.revert();
    }
  }, [isAnalyzed, activePrediction])

  if (!Array.isArray(history) || history.length === 0) {
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
      <div className="selection-box flex flex-col md:flex-row justify-between items-end gap-6 bg-card/30 p-8 rounded-[2rem] border border-border/50 backdrop-blur-md">
        <div className="space-y-4 flex-1 w-full">
          <label className="text-[10px] font-black uppercase tracking-[0.2em] text-primary ml-1">Archive Explorer</label>
          <Select value={selectedId} onValueChange={(v) => { setSelectedId(v); setIsAnalyzed(false); }}>
            <SelectTrigger className="w-full md:w-[450px] h-14 bg-background/40 border-primary/10 hover:border-primary/40 transition-all text-base">
              <SelectValue placeholder="Select prediction log" />
            </SelectTrigger>
            <SelectContent className="z-[150]">
              {history.map((h, index) => {
                if (!h) return null;
                return (
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
                        {formatSafeDate(h.created_at)}
                      </span>
                    </div>
                  </SelectItem>
                )
              })}
            </SelectContent>
          </Select>
        </div>
        <Button 
          size="lg" 
          onClick={handleAnalyze} 
          disabled={!selectedId}
          className="h-14 px-12 font-black text-sm tracking-widest bg-primary shadow-[0_10px_30px_rgba(var(--primary),0.2)] hover:scale-105 transition-all"
        >
          GENERATE INSIGHTS <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>

      {isAnalyzed && activePrediction && (
        <div ref={analysisRef} className="analysis-grid grid grid-cols-1 lg:grid-cols-12 gap-8 scroll-mt-24 pt-4">
          
          {/* Radar Visualization */}
          <div className="viz-card lg:col-span-4 min-h-[500px]">
            <GlowingCard className="h-full p-8 flex flex-col relative overflow-hidden group">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="font-serif text-2xl font-bold">Performance</h3>
                  <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">Relative Accuracy</p>
                </div>
                <Activity className="text-primary h-5 w-5" />
              </div>
              {/* ✨ PRO FIX: Forced h-[350px] directly on the wrapper so Recharts cannot collapse */}
              <div className="flex-1 w-full h-[350px] relative">
                <ChartErrorBoundary>
                  {/* @ts-ignore */}
                  <ValueRadar data={activePrediction} maxValues={maxValues} simulation={simulateRenewable} />
                </ChartErrorBoundary>
              </div>
            </GlowingCard>
          </div>

          {/* Sankey Supply Chain */}
          <div className="viz-card lg:col-span-8 min-h-[500px]">
            <GlowingCard className="h-full p-8 flex flex-col">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="font-serif text-2xl font-bold">Flow Topology</h3>
                  <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">Impact Distribution (kg CO₂/kg)</p>
                </div>
                <div className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-black text-primary">LIVE FLOW</div>
              </div>
              {/* ✨ PRO FIX: Forced h-[350px] directly on the wrapper so Nivo cannot collapse */}
              <div className="flex-1 w-full h-[350px] relative">
                <ChartErrorBoundary>
                  {/* @ts-ignore */}
                  <SankeyChart data={extractSankeyData(activePrediction)} />
                </ChartErrorBoundary>
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