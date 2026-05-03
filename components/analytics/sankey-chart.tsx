"use client"

import { useEffect, useRef } from "react"
import { ResponsiveSankey } from "@nivo/sankey"
import { gsap } from "gsap"

// The Premium Cyber Palette
const CYBER_THEME_COLORS = [
  "#FF6B00", // Molten Copper
  "#10B981", // Emerald
  "#06B6D4", // Cyan
  "#F59E0B", // Amber
  "#EC4899", // Neon Pink
  "#8B5CF6", // Violet
];

export function SankeyChart({ data }: { data: any }) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!data || !data.nodes || data.nodes.length === 0) return;

    const ctx = gsap.context(() => {
      gsap.fromTo("path", 
        { opacity: 0 },
        { opacity: 0.35, duration: 1.5, stagger: 0.1, ease: "power2.out" }
      )
      gsap.from("rect", { 
        scaleY: 0, 
        transformOrigin: "center", 
        duration: 1, 
        stagger: 0.05, 
        ease: "back.out(1.2)" 
      })
    }, containerRef)

    return () => ctx.revert()
  }, [data])

  if (!data || !data.nodes || data.nodes.length === 0) {
    return (
      <div className="h-full w-full flex items-center justify-center text-muted-foreground text-sm italic border-2 border-dashed border-border/10 rounded-xl">
        No supply chain flow data available for this record.
      </div>
    )
  }

  return (
    <div ref={containerRef} className="h-full w-full relative">
      <ResponsiveSankey
        data={data}
        // ✨ Since the text is locked inside, we can reduce outer margins so the chart fills the whole card!
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
        align="justify"
        colors={CYBER_THEME_COLORS}
        nodeOpacity={1}
        nodeThickness={48} // ✨ Thickened the pillars to comfortably hold the text
        nodeInnerPadding={3}
        nodeSpacing={24} 
        nodeBorderWidth={0}
        nodeBorderRadius={6}
        linkOpacity={0.35}
        linkHoverOthersOpacity={0.05}
        linkHoverOpacity={0.8}
        enableLinkGradient={true}
        labelPosition="inside"
        
        // Keeping the glassmorphic tooltips intact
        theme={{
          labels: {
            text: {
              fill: '#FFFFFF',
              fontSize: 13,
              fontWeight: 900,
              fontFamily: 'var(--font-jetbrains), monospace',
              letterSpacing: '0.15em',
              textShadow: '0px 2px 10px rgba(0,0,0,0.8)',
            }
          },
          tooltip: { 
            container: { 
              background: 'rgba(9, 9, 11, 0.95)', 
              color: '#F8FAFC', 
              borderRadius: '12px', 
              border: '1px solid #FF6B00', 
              boxShadow: '0 20px 40px rgba(255,107,0,0.15)',
              fontSize: '11px',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            } 
          }
        }}
      />
    </div>
  )
}