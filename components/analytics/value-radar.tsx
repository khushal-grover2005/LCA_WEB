"use client"

import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from "recharts"

export function ValueRadar({ data, maxValues, simulation }: any) {
  // 1. Aggressively extract raw values
  const rawGwp = Number(data?.results?.gwp_total ?? data?.gwp_total ?? data?.response?.results?.gwp_total ?? 0);
  const circularity = Number(data?.results?.circularity_index ?? data?.circularity_index ?? data?.response?.results?.circularity_index ?? 0);
  const recycled = Number(data?.technical_profile?.recycled_content_pct ?? data?.recycled_content_est ?? data?.response?.technical_profile?.recycled_content_pct ?? 0);

  const gwp = simulation ? rawGwp * 0.4 : rawGwp;
  const safeMaxGwp = Number(maxValues?.gwp) || 1; 
  
  const gwpScore = Math.max(0, (1 - (gwp / safeMaxGwp)) * 100);

  const plotData = [
    { 
      metric: "GWP", 
      val: isNaN(gwpScore) ? 0 : gwpScore, 
      full: isNaN(gwp) ? "0.00" : gwp.toFixed(2), 
      unit: " kg CO₂"
    },
    { 
      metric: "Circularity", 
      val: isNaN(circularity) ? 0 : circularity, 
      full: isNaN(circularity) ? "0.0" : circularity.toFixed(1), 
      unit: " / 100"
    },
    { 
      metric: "Recycled %", 
      val: isNaN(recycled) ? 0 : recycled, 
      full: isNaN(recycled) ? "0.0" : recycled.toFixed(1), 
      unit: "%"
    }
  ]

  // ✨ UPGRADE: True Neon Hex Codes for maximum vibrancy
  const dynamicVisibleColor = circularity > 70 ? "#00FFA3" : circularity > 50 ? "#FFB000" : "#FF0055"; 

  // ✨ UPGRADE: CustomTick moved inside so it can use dynamicVisibleColor for the text and glow!
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
        fill={dynamicVisibleColor} // Text is now vibrant
        fontSize={13}
        fontWeight={800} // Extra bold
        textTransform="uppercase"
        letterSpacing="0.05em"
        style={{ 
          // Text casts its own colored glow
          textShadow: `0px 0px 15px ${dynamicVisibleColor}80, 0px 0px 30px ${dynamicVisibleColor}40`,
          filter: "brightness(1.2)"
        }}
      >
        {payload.value}
      </text>
    );
  };

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const point = payload[0].payload;
      return (
        <div 
          className="px-5 py-4 rounded-xl backdrop-blur-md"
          style={{ 
            backgroundColor: 'rgba(15, 23, 42, 0.95)', 
            border: `1px solid ${dynamicVisibleColor}`,
            boxShadow: `0 0 30px ${dynamicVisibleColor}60` // Stronger tooltip glow
          }}
        >
          <p className="text-[#F8FAFC] font-bold text-[10px] uppercase tracking-[0.2em] mb-1 opacity-70">
            {point.metric}
          </p>
          <p style={{ color: dynamicVisibleColor }} className="text-3xl font-black tabular-nums">
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
          <linearGradient id="radarGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={dynamicVisibleColor} stopOpacity={0.95} />
            <stop offset="100%" stopColor={dynamicVisibleColor} stopOpacity={0.15} />
          </linearGradient>
          <filter id="neonGlow" x="-30%" y="-30%" width="160%" height="160%">
            {/* Boosted the blur radius for a wider, softer glow */}
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* ✨ UPGRADE: The spider web itself is now tinted with the dynamic color and highly visible */}
        <PolarGrid 
          stroke={dynamicVisibleColor} 
          strokeOpacity={0.35} // Just enough to make the web pop without overpowering the fill
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
          stroke={dynamicVisibleColor}
          strokeWidth={4} // Even thicker bounding line
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