"use client"

import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from "recharts"

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
      // ✨ CHANGED: Now uses the vibrant orange to match the radar center
      fill={GLOW_ORANGE} 
      fontSize={13}
      fontWeight={800} 
      textTransform="uppercase"
      letterSpacing="0.05em"
      style={{ 
        textShadow: `0px 0px 15px ${BRAND_ORANGE}90, 0px 0px 30px ${BRAND_ORANGE}50`,
      }}
    >
      {payload.value}
    </text>
  );
};

export function ValueRadar({ data, maxValues, simulation }: any) {
  const rawGwp = Number(data?.results?.gwp_total ?? data?.gwp_total ?? data?.response?.results?.gwp_total ?? 0);
  const circularity = Number(data?.results?.circularity_index ?? data?.circularity_index ?? data?.response?.results?.circularity_index ?? 0);
  const recycled = Number(data?.technical_profile?.recycled_content_pct ?? data?.recycled_content_est ?? data?.response?.technical_profile?.recycled_content_pct ?? 0);

  const gwp = simulation ? rawGwp * 0.4 : rawGwp;
  const safeMaxGwp = Number(maxValues?.gwp) || 1; 
  
  let gwpScore = (gwp / safeMaxGwp) * 100;
  
  const finalGwpShape = isNaN(gwpScore) ? 0 : Math.max(0, Math.min(100, gwpScore));
  const finalCircShape = isNaN(circularity) ? 0 : Math.max(0, Math.min(100, circularity));
  const finalRecShape = isNaN(recycled) ? 0 : Math.max(0, Math.min(100, recycled));

  const plotData = [
    { metric: "GWP", val: finalGwpShape, full: isNaN(gwp) ? "0.00" : gwp.toFixed(2), unit: " kg CO₂" },
    { metric: "Circularity", val: finalCircShape, full: isNaN(circularity) ? "0.0" : circularity.toFixed(1), unit: " / 100" },
    { metric: "Recycled", val: finalRecShape, full: isNaN(recycled) ? "0.0" : recycled.toFixed(1), unit: "%" }
  ]

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const point = payload[0].payload;
      return (
        <div 
          className="px-5 py-4 rounded-xl backdrop-blur-md"
          style={{ 
            backgroundColor: 'rgba(9, 9, 11, 0.95)', // Matches the dark zinc theme
            border: `1px solid ${BRAND_ORANGE}`, 
            boxShadow: `0 0 30px ${BRAND_ORANGE}50` 
          }}
        >
          <p className="text-muted-foreground font-bold text-[10px] uppercase tracking-[0.2em] mb-1 opacity-70">
            {point.metric}
          </p>
          <p style={{ color: GLOW_ORANGE }} className="text-3xl font-black tabular-nums">
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
            <stop offset="0%" stopColor={GLOW_ORANGE}>
              {/* ✨ ADDED: Throbbing opacity animation for the top of the gradient */}
              <animate attributeName="stop-opacity" values="0.95;0.6;0.95" dur="3s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor={BRAND_ORANGE}>
              {/* ✨ ADDED: Throbbing opacity animation for the bottom of the gradient */}
              <animate attributeName="stop-opacity" values="0.15;0.4;0.15" dur="3s" repeatCount="indefinite" />
            </stop>
          </linearGradient>

          <filter id="neonGlow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur result="blur">
              {/* ✨ ADDED: Throbbing blur radius (makes the light expand and contract) */}
              <animate attributeName="stdDeviation" values="6;16;6" dur="3s" repeatCount="indefinite" />
            </feGaussianBlur>
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        <PolarGrid 
          stroke={BRAND_ORANGE} 
          strokeOpacity={0.35} 
          strokeDasharray="4 4" 
        />
        
        <PolarAngleAxis 
          dataKey="metric" 
          tick={<CustomTick />} 
        />
        
        <PolarRadiusAxis 
          domain={[0, 100]} 
          tick={false} 
          axisLine={false} 
        />
        
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