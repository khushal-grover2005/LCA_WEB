"use client"

import { useEffect, useRef } from "react"
import { ResponsiveSankey } from "@nivo/sankey"
import { gsap } from "gsap"

export function SankeyChart({ data }: { data: any }) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!data || !data.nodes || data.nodes.length === 0) return;

    const ctx = gsap.context(() => {
      // Custom Path Morphing Effect: Animating stroke-dash for "flow" look
      gsap.fromTo("path", 
        { strokeDasharray: "10,10", strokeDashoffset: 100, opacity: 0 },
        { 
          strokeDashoffset: 0, 
          opacity: 0.6, 
          duration: 3, 
          stagger: 0.05, 
          ease: "none",
          repeat: -1
        }
      )
      
      // Node entrance
      gsap.from("rect", {
        scaleY: 0,
        transformOrigin: "bottom",
        duration: 1,
        stagger: 0.02,
        ease: "expo.out"
      })
    }, containerRef)

    return () => ctx.revert()
  }, [data])

  // ✨ FIX: Prevent Nivo from silently crashing/hiding when data is empty
  if (!data || !data.nodes || data.nodes.length === 0) {
    return (
      <div className="h-full w-full flex items-center justify-center text-muted-foreground text-sm italic border-2 border-dashed border-border/10 rounded-xl">
        No supply chain flow data available for this record.
      </div>
    )
  }

  return (
    <div ref={containerRef} className="h-full w-full">
      <ResponsiveSankey
        data={data}
        margin={{ top: 10, right: 160, bottom: 10, left: 10 }}
        align="justify"
        colors={{ scheme: 'category10' }}
        nodeThickness={16}
        nodeSpacing={24}
        nodeBorderWidth={0}
        nodeBorderRadius={4}
        enableLinkGradient={true}
        linkOpacity={0.3}
        linkHoverOpacity={0.8}
        linkHoverOthersOpacity={0.05}
        labelPosition="outside"
        labelOrientation="horizontal"
        labelPadding={20}
        labelTextColor="hsl(var(--muted-foreground))"
        theme={{
          labels: { text: { fontSize: 10, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em' } },
          tooltip: { container: { background: 'hsl(var(--popover))', color: 'hsl(var(--popover-foreground))', borderRadius: '12px', border: '1px solid hsl(var(--border))', boxShadow: '0 20px 40px rgba(0,0,0,0.4)' } }
        }}
      />
    </div>
  )
}