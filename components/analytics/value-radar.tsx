"use client"

import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from "recharts"

// ✨ THEME: Locked in to a premium, high-visibility Orange
const BRAND_ORANGE = "#FF6B00"; 
const GLOW_ORANGE = "#FF8A00";

const CustomTick = ({ payload, x, y }: any) => {
  let dx = 0;
  let dy = 0;

  if (payload.value === "GWP") dy = 10;
  if (payload.value.includes("Recycled")) dx = 28;
  if (payload.value === "Circularity") dx = -28;

  return (
    <text
      x={x}
      y={y}
      dx={dx}
      dy={dy}
      textAnchor="middle"
      fill="#F8FAFC" // Crisp white text for ultimate readability
      fontSize={13}
      fontWeight={800} 
      textTransform="uppercase"
      letterSpacing="0.05em"
      style={{ 
        // Text casts an orange glow to match the theme
        textShadow: `0px 0px 10px ${BRAND_ORANGE}90, 0px 0px 20px ${BRAND_ORANGE}50`,
      }}
    >
      {payload.value}
    </text>
  );
};

export function ValueRadar({ data, maxValues, simulation }: any) {
  // 1. Aggressively extract raw values
  const rawGwp = Number(data?.results?.gwp_total ?? data?.gwp_total ?? data?.response?.results?.gwp_total ?? 0);
  const circularity = Number(data?.results?.circularity_index ?? data?.circularity_index ?? data?.response?.results?.circularity_index ?? 0);
  const recycled = Number(data?.technical_profile?.recycled_content_pct ?? data?.recycled_content_est ?? data?.response?.technical_profile?.recycled_content_pct ?? 0);

  // 2. Safely calculate the values
  const gwp = simulation ? rawGwp * 0.4 : rawGwp;
  const safeMaxGwp = Number(maxValues?.gwp) || 1; 
  
  // ✨ THE BUG FIX: Strictly bounding all shape coordinates between 0 and 100.
  // This completely prevents Recharts from breaking and drawing a perfect triangle.
  let gwpScore = 100 - ((gwp / safeMaxGwp) * 100);
  
  // Guarantee absolute valid numbers for the shape points
  const finalGwpShape = isNaN(gwpScore) ? 0 : Math.max(0, Math.min(100, gwpScore));
  const finalCircShape = isNaN(circularity) ? 0 : Math.max(0, Math.min(100, circularity));
  const finalRecShape = isNaN(recycled) ? 0 : Math.max(0, Math.min(100, recycled));

  const plotData = [
    { 
      metric: "GWP", 
      val: finalGwpShape, // The internal 0-100 coordinate for the shape
      full: isNaN(gwp) ? "0.00" : gwp.toFixed(2), // The real numeric value for the user
      unit: " kg CO₂"
    },
    { 
      metric: "Circularity", 
      val: finalCircShape, 
      full: isNaN(circularity) ? "0.0" : circularity.toFixed(1), 
      unit: " / 100"
    },
    { 
      metric: "Recycled", 
      val: finalRecShape, 
      full: isNaN(recycled) ? "0.0" : recycled.toFixed(1), 
      unit: "%"
    }
  ]

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const point = payload[0].payload;
      return (
        <div 
          className="px-5 py-4 rounded-xl backdrop-blur-md"
          style={{ 
            backgroundColor: 'rgba(15, 23, 42, 0.95)', 
            border: `1px solid ${BRAND_ORANGE}`,
            boxShadow: `0 0 30px ${BRAND_ORANGE}50` // Strong orange glowing box
          }}
        >
          <p className="text-[#F8FAFC] font-bold text-[10px] uppercase tracking-[0.2em] mb-1 opacity-70">
            {point.metric}
          </p>
          <p style={{ color: BRAND_ORANGE }} className="text-3xl font-black tabular-nums">
            {point.full} <span className="text-sm font-normal opacity-70">{point.unit}</span>
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart 
        cx="50%" 
        cy="50%" 
        outerRadius="80%" 
        data={plotData}
        margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
      >
        <defs>
          {/* Stunning Orange Gradient Fade */}
          <linearGradient id="radarGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={GLOW_ORANGE} stopOpacity={0.95} />
            <stop offset="100%" stopColor={BRAND_ORANGE} stopOpacity={0.15} />
          </linearGradient>
          {/* Orange Neon Light Filter */}
          <filter id="neonGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* The spider web itself is tinted orange so it belongs to the theme */}
        <PolarGrid 
          stroke={BRAND_ORANGE} 
          strokeOpacity={0.35} 
          strokeDasharray="4 4" 
        />
        
        <PolarAngleAxis 
            dataKey="metric" 
            tick={<CustomTick />} 
        />
        
        <PolarRadiusAxis domain={[0, 100]} tick={false} axisLine={false} />
        
        <Radar
          name="Metal Score"
          dataKey="val"
          stroke={GLOW_ORANGE}
          strokeWidth={4} 
          fill="url(#radarGradient)" 
          filter="url(#neonGlow)" 
          isAnimationActive={true}
          animationDuration={1500}
        />
        
        <Tooltip content={<CustomTooltip />} cursor={false} />
      </RadarChart>
    </ResponsiveContainer>
  )
}