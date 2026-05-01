"use client"
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from "recharts"

export function ValueRadar({ data, maxValues, simulation }: any) {
  const gwp = simulation ? data.results.gwp_total * 0.4 : data.results.gwp_total

  const plotData = [
    { 
      metric: "GWP", 
      val: (1 - (gwp / maxValues.gwp)) * 100,
      full: gwp.toFixed(2),
      unit: " kg"
    },
    { 
      metric: "Circularity", 
      val: data.results.circularity_index, 
      full: data.results.circularity_index.toFixed(1),
      unit: ""
    },
    { 
      metric: "Recycled %", 
      val: data.technical_profile?.recycled_content_pct || 0, 
      full: (data.technical_profile?.recycled_content_pct || 0).toFixed(1),
      unit: "%"
    }
  ]

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={plotData}>
        <PolarGrid stroke="hsl(var(--border))" strokeDasharray="4 4" />
        <PolarAngleAxis dataKey="metric" tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 11, fontWeight: 700 }} />
        <PolarRadiusAxis domain={[0, 100]} tick={false} axisLine={false} />
        <Radar
          name="Metal Score"
          dataKey="val"
          stroke="hsl(var(--primary))"
          fill="hsl(var(--primary))"
          fillOpacity={0.4}
          isAnimationActive={true}
          animationDuration={1500}
        />
        <Tooltip 
          contentStyle={{ backgroundColor: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: '12px', fontWeight: 'bold' }} 
        />
      </RadarChart>
    </ResponsiveContainer>
  )
}