"use client"

import { Chart } from "react-google-charts"
import { GlowingCard } from "@/components/ui/glowing-card"

export function SankeyChart({ data }: { data: any }) {
  // Transform standard node/link data into Google Charts format
  const chartData = [
    ["From", "To", "Weight"],
    ...data.links.map((link: any) => [
      data.nodes[link.source].name,
      data.nodes[link.target].name,
      link.value,
    ]),
  ]

  const options = {
    sankey: {
      node: {
        colors: ["#EA7834", "#50C878", "#94A3B8", "#1E293B"], // Copper, Emerald, Slate
        nodePadding: 30,
        label: { fontName: "Inter", fontSize: 12, color: "#94A3B8" },
      },
      link: {
        colorMode: "gradient",
        colors: ["rgba(234, 120, 52, 0.3)"],
      },
    },
    backgroundColor: "transparent",
    height: 350,
  }

  return (
    <GlowingCard className="h-full w-full">
      <h3 className="mb-4 font-serif text-lg font-semibold text-foreground">
        Material Flow Topology
      </h3>
      <Chart
        chartType="Sankey"
        width="100%"
        height="350px"
        data={chartData}
        options={options}
      />
    </GlowingCard>
  )
}

