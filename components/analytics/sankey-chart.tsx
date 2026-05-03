"use client"

import { useEffect, useRef } from "react"
import { ResponsiveSankey } from "@nivo/sankey"
import { gsap } from "gsap"

// ✨ The "Final Blow" Theme Palette: Copper, Emerald, Cyan, Amber, Pink
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

  // Premium entry animation
  useEffect(() => {
    if (!data || !data.nodes || data.nodes.length === 0) return;

    const ctx = gsap.context(() => {
      // Fade in the flow links smoothly
      gsap.fromTo("path", 
        { opacity: 0 },
        { opacity: 0.5, duration: 1.5, stagger: 0.1, ease: "power2.out" }
      )
      // Grow the nodes from the center
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
    <div ref={containerRef} className="h-full w-full relative -mt-4">
      <ResponsiveSankey
        data={data}
        // ✨ FIX 1: Perfectly balanced margins to center the chart
        // 140px on left and right gives the text massive room to sit outside the chart without overlapping!
        margin={{ top: 40, right: 140, bottom: 40, left: 140 }}
        align="justify"
        // ✨ FIX 2: Injecting the premium color palette
        colors={CYBER_THEME_COLORS}
        nodeOpacity={1}
        nodeThickness={16}
        nodeInnerPadding={3}
        nodeSpacing={36} // More space between vertical nodes to stop text crushing
        nodeBorderWidth={0}
        nodeBorderRadius={4}
        linkOpacity={0.35}
        linkHoverOthersOpacity={0.05}
        linkHoverOpacity={0.8}
        enableLinkGradient={true}
        labelPosition="outside"
        labelOrientation="horizontal"
        labelPadding={20}
        theme={{
          // ✨ FIX 3: Bright, readable text with glowing drop shadows
          labels: { 
            text: { 
              fontSize: 11, 
              fontWeight: 800, 
              textTransform: 'uppercase', 
              letterSpacing: '0.1em', 
              fill: "#F8FAFC", // Bright white
              // Heavy drop shadow ensures text is readable even if it crosses a colored link
              textShadow: "0px 4px 15px rgba(0,0,0,1), 0px 0px 4px rgba(0,0,0,0.8)" 
            } 
          },
          // Customizing the hover tooltip to match our glassmorphism theme
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