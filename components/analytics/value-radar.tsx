"use client"

import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from "recharts"

export function ValueRadar({ data, maxValues, simulation }: any) {
  // ✨ FIX: Safely extract values whether they are nested (live) or flat (database)
  const rawGwp = data?.results?.gwp_total ?? data?.gwp_total ?? 0;
  const circularity = data?.results?.circularity_index ?? data?.circularity_index ?? 0;
  const recycled = data?.technical_profile?.recycled_content_pct ?? data?.recycled_content_est ?? 0;

  const gwp = simulation ? rawGwp * 0.4 : rawGwp;
  const safeMaxGwp = maxValues?.gwp || 1; // Prevent division by zero

  const plotData = [
    { 
      metric: "GWP", 
      // ✨ FIX: Fallback to 0 if NaN, invert so lower GWP = higher score on radar
      val: Math.max(0, (1 - (gwp / safeMaxGwp)) * 100) || 0, 
      full: gwp.toFixed(2),
      unit: " kg"
    },
    { 
      metric: "Circularity", 
      val: circularity || 0, 
      full: (circularity || 0).toFixed(1),
      unit: ""
    },
    { 
      metric: "Recycled %", 
      val: recycled || 0, 
      full: (recycled || 0).toFixed(1),
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