"use client"

import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from "recharts"

// ✨ THE MAGIC FIX: A custom label renderer. 
// This manually nudges the text inward so it NEVER clips, 
// allowing us to make the spider web as massive as we want!
function CustomTick({ payload, x, y }: any) {
  let dx = 0;
  let dy = 0;

  // Nudge each label inward, away from the invisible SVG edges
  if (payload.value === "GWP") dy = 10; // Push down slightly
  if (payload.value.includes("Recycled")) dx = 28; // Push hard right
  if (payload.value === "Circularity") dx = -28; // Push hard left

  return (
    <text
      x={x}
      y={y}
      dx={dx}
      dy={dy}
      textAnchor="middle"
      fill="#F8FAFC"
      fontSize={12}
      fontWeight={700}
      textTransform="uppercase"
      letterSpacing="0.05em"
    >
      {payload.value}
    </text>
  );
}

export function ValueRadar({ data, maxValues, simulation }: any) {
  const rawGwp = Number(data?.results?.gwp_total ?? data?.gwp_total ?? 0);
  const circularity = Number(data?.results?.circularity_index ?? data?.circularity_index ?? 0);
  const recycled = Number(data?.technical_profile?.recycled_content_pct ?? data?.recycled_content_est ?? 0);

  const gwp = simulation ? rawGwp * 0.4 : rawGwp;
  const safeMaxGwp = Number(maxValues?.gwp) || 1; 
  
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
      // You can safely keep the % here now!
      metric: "Recycled %", 
      val: isNaN(recycled) ? 0 : recycled, 
      full: isNaN(recycled) ? "0.0" : recycled.toFixed(1),
      unit: "%"
    }
  ]

  const dynamicVisibleColor = circularity > 70 ? "#10B981" : circularity > 50 ? "#F59E0B" : "#EF4444"; 

  return (
    <ResponsiveContainer width="100%" height="100%">
      {/* ✨ INCREASED RADIUS: Blown up to 80% for a massive spider web */}
      <RadarChart 
        cx="50%" 
        cy="50%" 
        outerRadius="80%" 
        data={plotData}
        margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
      >
        <PolarGrid stroke="rgba(255, 255, 255, 0.15)" strokeDasharray="3 3" />
        
        {/* ✨ Triggering our custom inward-nudging labels */}
        <PolarAngleAxis 
            dataKey="metric" 
            tick={<CustomTick />} 
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