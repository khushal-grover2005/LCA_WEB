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

  // Premium entry animation
  useEffect(() => {
    if (!data || !data.nodes || data.nodes.length === 0) return;

    const ctx = gsap.context(() => {
      gsap.fromTo("path", 
        { opacity: 0 },
        { opacity: 0.5, duration: 1.5, stagger: 0.1, ease: "power2.out" }
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
    <div ref={containerRef} className="h-full w-full relative -mt-4">
      <ResponsiveSankey
        data={data}
        // ✨ FIX 1: We can shrink the side margins now because the text is inside!
        margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
        align="justify"
        colors={CYBER_THEME_COLORS}
        nodeOpacity={1}
        // ✨ FIX 2: Made the nodes much thicker (32px) so they act as pillars for the text
        nodeThickness={32} 
        nodeInnerPadding={3}
        nodeSpacing={24} 
        nodeBorderWidth={0}
        nodeBorderRadius={4}
        linkOpacity={0.35}
        linkHoverOthersOpacity={0.05}
        linkHoverOpacity={0.8}
        enableLinkGradient={true}
        // ✨ FIX 3: Rotated the text vertically and moved it inside the pillars
        labelPosition="inside"
        labelOrientation="vertical"
        labelPadding={16}
        theme={{
          labels: { 
            text: { 
              fontSize: 12, 
              fontWeight: 900, 
              textTransform: 'uppercase', 
              letterSpacing: '0.2em', // Added extra spacing for sleek vertical reading
              fill: "#FFFFFF", // Crisp white
              textShadow: "0px 2px 8px rgba(0,0,0,0.9)" // Heavy shadow so it pops off the colored pillars
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