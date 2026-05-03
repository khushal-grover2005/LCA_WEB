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
      // Animate flow links
      gsap.fromTo("path", 
        { opacity: 0 },
        { opacity: 0.35, duration: 1.5, stagger: 0.1, ease: "power2.out" }
      )
      // Animate pillars (nodes)
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
        // ✨ THE FINAL FIX: 130px left/right margins provide a "safe zone" 
        // for wide tooltips to render without hitting the card's overflow boundary.
        margin={{ top: 30, right: 130, bottom: 30, left: 130 }}
        align="justify"
        colors={CYBER_THEME_COLORS}
        nodeOpacity={1}
        nodeThickness={48} 
        nodeInnerPadding={3}
        nodeSpacing={24} 
        nodeBorderWidth={0}
        nodeBorderRadius={6}
        linkOpacity={0.35}
        linkHoverOthersOpacity={0.05}
        linkHoverOpacity={0.8}
        enableLinkGradient={true}
        
        // Disable default labels to prevent horizontal clashing
        enableLabels={false}

        // CUSTOM NODE RENDERER: Forces vertical, centered white text inside pillars
        node={(nodeProps: any) => {
          const { node, x, y, width, height, color } = nodeProps;
          
          return (
            <g transform={`translate(${x},${y})`}>
              {/* Colored Data Pillar */}
              <rect width={width} height={height} fill={color} rx={6} ry={6} />
              
              {/* Vertically Locked Text */}
              <text
                x={width / 2}
                y={height / 2}
                textAnchor="middle"
                dominantBaseline="central"
                transform={`rotate(-90, ${width / 2}, ${height / 2})`}
                fill="#FFFFFF"
                style={{
                  fontSize: 13,
                  fontWeight: 900,
                  fontFamily: 'var(--font-jetbrains), monospace', 
                  letterSpacing: '0.15em',
                  textShadow: '0px 2px 10px rgba(0,0,0,0.8)', 
                  pointerEvents: 'none' 
                }}
              >
                {node.id}
              </text>
            </g>
          )
        }}

        theme={{
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