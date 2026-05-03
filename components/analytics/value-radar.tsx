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

  // ✨ NEW: Dynamic Visibility color scheme based on the Circularity performance tone
  // High scores are vibrant emerald, medium are vibrant amber, low are vibrant red.
  // This provides maximum contract and follows semantic color meanings.
  const dynamicVisibleColor = circularity > 70 ? "#10B981" : circularity > 50 ? "#F59E0B" : "#EF4444"; 

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={plotData}>
        {/* ✨ PRO FIX: Much Brighter, legible labels with increased size, bolding, and uppercase */}
        <PolarAngleAxis 
            dataKey="metric" 
            tick={{ 
                fill: "hsl(var(--foreground))", 
                fontSize: 12, 
                fontWeight: 700, 
                textTransform: 'uppercase',
                letterSpacing: '0.05em' 
            }} 
        />
        
        {/* ✨ PRO FIX: Brighter, more defined dashed grid lines */}
        <PolarGrid stroke="hsl(var(--muted))" strokeDasharray="4 4" />
        
        <PolarRadiusAxis domain={[0, 100]} tick={false} axisLine={false} />
        
        {/* ✨ PRO FIX: High-contrast, dynamic color scheme with increased opacity for proper dynamic visibility */}
        <Radar
          name="Metal Score"
          dataKey="val"
          stroke={dynamicVisibleColor} // Vibrant Dynamic Color
          fill={dynamicVisibleColor} // Vibrant Dynamic Color
          fillOpacity={0.65} // Increased for a stronger presence
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