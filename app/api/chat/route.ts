import { groq } from '@ai-sdk/groq';
import { streamText } from 'ai';
import { createClient } from '@/lib/supabase/server'; 

export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    const supabase = await createClient();

    // 1. ABSOLUTE SECURITY CHECK (Mutual Exclusivity)
    const { data: { user }, error: authError } = await supabase.auth.getUser();
    if (authError || !user) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
    }

    // 2. ISOLATED DATA FETCH
    // This strictly pulls ONLY the data belonging to the logged-in user.
    const { data: predictions } = await supabase
      .from('predictions')
      .select('id, metal, production_route, gwp_total, circularity_index, created_at')
      .eq('user_id', user.id) 
      .order('created_at', { ascending: false });

    // 3. DATA SERIALIZATION FOR THE AI
    let contextData = "No predictions found in the database for this user.";
    if (predictions && predictions.length > 0) {
      contextData = predictions.map((p, i) => `
        [PREDICTION ID: ${p.id} | Date: ${new Date(p.created_at).toLocaleDateString()}]
        - Target Metal: ${p.metal || 'Unknown'}
        - Production Route: ${p.production_route || 'Unknown'}
        - Total GWP (Carbon Footprint): ${p.gwp_total ? Number(p.gwp_total).toFixed(2) : 'N/A'} kg CO₂/kg
        - Circularity Index: ${p.circularity_index ? Number(p.circularity_index).toFixed(2) : 'N/A'}
      `).join('\n');
    }

    // 4. THE MULTI-MODAL EXPERT PROMPT
    const systemPrompt = `
      You are the core intelligence of "MetalCycle", an elite Life Cycle Assessment (LCA) and Metallurgy AI.
      You have real-time access to the user's secure, isolated prediction database.
      
      Here is the user's ENTIRE LCA prediction history:
      <USER_DATA>
      ${contextData}
      </USER_DATA>
      
      YOUR OPERATING MODES:
      1. General Metallurgy Expert: Answer theoretical questions about metals, LCA methodologies, thermodynamics, and supply chains.
      2. Trend Analyst: If asked for summaries or statistics, calculate the averages (e.g., average GWP) and identify overarching trends across all provided <USER_DATA>.
      3. Prediction-Wise Investigator: If asked about a specific anomaly, highest carbon footprint, or a specific metal, scan the <USER_DATA>, isolate the exact prediction, and provide a deep-dive breakdown of why those numbers exist.
      4. Optimization Consultant: If asked for recommendations, synthesize their <USER_DATA> and provide highly specific, actionable engineering steps to lower their carbon footprint and improve circularity.

      STRICT GUARDRAILS (ZERO TOLERANCE):
      - DOMAIN RESTRICTION: You MUST ONLY answer questions related to metallurgy, materials science, LCA, sustainability, carbon footprints, supply chains, and the provided user data. 
      - If a user asks a question outside of this domain (e.g., coding, general history, recipes, weather, politics, pop culture), you MUST politely refuse and state: "I am a specialized LCA Assistant restricted to metallurgy and environmental impact analysis."
      - NEVER invent or hallucinate data. If the user asks about a metal they haven't predicted yet, explicitly tell them it is not in their database.
      - Output your responses in clean Markdown. Use bullet points, bold text for key metrics, and maintain a highly academic, engineering-focused tone.
    `;

    // 5. STREAM THE RESPONSE
    const result = await streamText({
      model: groq('llama-3.1-70b-versatile'), 
      system: systemPrompt,
      messages: messages.map((m: any) => ({
        role: m.role,
        content: m.content,
      })),
      temperature: 0.3, // Low temperature keeps it highly analytical and factual
    });

    return result.toTextStreamResponse();
    
  } catch (error) {
    console.error("Chat API Error:", error);
    return new Response(JSON.stringify({ error: "Failed to process chat request" }), { status: 500 });
  }
}