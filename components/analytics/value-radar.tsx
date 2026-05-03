"use client"

import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from "recharts"

export function ValueRadar({ data, maxValues, simulation }: any) {
  // 1. Aggressively extract values, checking both nested and flattened database shapes
  const rawGwp = Number(data?.results?.gwp_total ?? data?.gwp_total ?? 0);
  const circularity = Number(data?.results?.circularity_index ?? data?.circularity_index ?? 0);
  const recycled = Number(data?.technical_profile?.recycled_content_pct ?? data?.recycled_content_est ?? 0);

  // 2. Safely calculate percentages
  const gwp = simulation ? rawGwp * 0.4 : rawGwp;
  const safeMaxGwp = Number(maxValues?.gwp) || 1; // Prevent division by zero
  
  // 3. Fallback to 0 if NaN, invert so lower GWP = higher score
  const gwpScore = Math.max(0, (1 - (gwp / safeMaxGwp)) * 100);

  const plotData = [
    { 
      metric: "GWP", 
      val: isNaN(gwpScore) ? 0 : gwpScore, 
      full: isNaN(gwp) ? "0.00" : gwp.toFixed(2),
      unit: " kg"
    },
    { 
      metric: "Circularity", 
      val: isNaN(circularity) ? 0 : circularity, 
      full: isNaN(circularity) ? "0.0" : circularity.toFixed(1),
      unit: ""
    },
    { 
      metric: "Recycled %", 
      val: isNaN(recycled) ? 0 : recycled, 
      full: isNaN(recycled) ? "0.0" : recycled.toFixed(1),
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