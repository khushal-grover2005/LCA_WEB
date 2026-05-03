"use client"

import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from "recharts"

export function ValueRadar({ data, maxValues, simulation }: any) {
  // 1. Aggressively extract values
  const rawGwp = Number(data?.results?.gwp_total ?? data?.gwp_total ?? 0);
  const circularity = Number(data?.results?.circularity_index ?? data?.circularity_index ?? 0);
  const recycled = Number(data?.technical_profile?.recycled_content_pct ?? data?.recycled_content_est ?? 0);

  // 2. Safely calculate percentages
  const gwp = simulation ? rawGwp * 0.4 : rawGwp;
  const safeMaxGwp = Number(maxValues?.gwp) || 1; 
  
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

  const dynamicVisibleColor = circularity > 70 ? "#10B981" : circularity > 50 ? "#F59E0B" : "#EF4444"; 

  return (
    <ResponsiveContainer width="100%" height="100%">
      {/* ✨ FIX 1: Reduced outerRadius from 80% to 65% so the text labels don't get cut off at the edges */}
      <RadarChart cx="50%" cy="50%" outerRadius="65%" data={plotData}>
        
        {/* ✨ FIX 2: Hardcoded stroke to a semi-transparent white so the spider web is ALWAYS visible */}
        <PolarGrid stroke="rgba(255, 255, 255, 0.15)" strokeDasharray="3 3" />
        
        {/* ✨ FIX 3: Hardcoded text fill to a crisp off-white (#F8FAFC) for perfect readability */}
        <PolarAngleAxis 
            dataKey="metric" 
            tick={{ 
                fill: "#F8FAFC", 
                fontSize: 13, 
                fontWeight: 700, 
                letterSpacing: '0.05em' 
            }} 
        />
        
        <PolarRadiusAxis domain={[0, 100]} tick={false} axisLine={false} />
        
        <Radar
          name="Metal Score"
          dataKey="val"
          stroke={dynamicVisibleColor}
          fill={dynamicVisibleColor}
          fillOpacity={0.65} 
          isAnimationActive={true}
          animationDuration={1500}
        />
        
        <Tooltip 
          contentStyle={{ backgroundColor: '#0F172A', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', color: '#F8FAFC', fontWeight: 'bold' }} 
          itemStyle={{ color: dynamicVisibleColor }}
        />
      </RadarChart>
    </ResponsiveContainer>
  )
}