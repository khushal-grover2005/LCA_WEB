import { streamText } from 'ai';
import { createClient } from '@/lib/supabase/server'; 
import { createGroq } from '@ai-sdk/groq';

// Initialize Groq ONCE at module level (reuse across requests)
const groq = createGroq({
  apiKey: process.env.GROQ_API_KEY || '', 
});

// 🔥 CRITICAL: 70B models need 60+ seconds. Vercel Pro supports up to 300 seconds
export const maxDuration = 60;

export async function POST(req: Request) {
  const startTime = Date.now();
  const requestId = Math.random().toString(36).slice(2, 9);
  
  try {
    // 🚨 API KEY VALIDATION
    if (!process.env.GROQ_API_KEY) {
      console.error(`[${requestId}] FATAL: GROQ_API_KEY missing from environment`);
      return new Response(JSON.stringify({ error: "Server Configuration Error" }), { status: 500 });
    }

    const { messages } = await req.json();
    
    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return new Response(JSON.stringify({ error: "Invalid request: messages array required" }), { status: 400 });
    }

    const supabase = await createClient();

    // 1. AUTHENTICATION
    const { data: { user }, error: authError } = await supabase.auth.getUser();
    if (authError || !user) {
      console.warn(`[${requestId}] Auth failed: ${authError?.message || 'No user'}`);
      return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
    }

    console.log(`[${requestId}] Starting chat stream for user: ${user.id}`);

    // 2. FETCH USER'S PREDICTIONS
    const { data: predictions, error: fetchError } = await supabase
      .from('predictions')
      .select('id, metal, production_route, gwp_total, circularity_index, created_at')
      .eq('user_id', user.id) 
      .order('created_at', { ascending: false });

    if (fetchError) {
      console.error(`[${requestId}] DB fetch error:`, fetchError);
    }

    // 3. BUILD CONTEXT
    let contextData = "No predictions found in the database for this user.";
    if (predictions && predictions.length > 0) {
      contextData = predictions.map((p) => `
        [PREDICTION ID: ${p.id} | Date: ${new Date(p.created_at).toLocaleDateString()}]
        - Target Metal: ${p.metal || 'Unknown'}
        - Production Route: ${p.production_route || 'Unknown'}
        - Total GWP (Carbon Footprint): ${p.gwp_total ? Number(p.gwp_total).toFixed(2) : 'N/A'} kg CO₂/kg
        - Circularity Index: ${p.circularity_index ? Number(p.circularity_index).toFixed(2) : 'N/A'}
      `).join('\n');
    }

    // 4. SYSTEM PROMPT
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

    // 5. STREAM WITH ENHANCED RELIABILITY
    const result = await streamText({
      model: groq('llama-3.1-70b-versatile'), 
      system: systemPrompt,
      messages: messages.map((m: any) => ({
        role: m.role,
        content: m.content,
      })),
      temperature: 0.3,
    });

    console.log(`[${requestId}] Stream initialized, returning response`);

    // 6. RETURN STREAM WITH PROPER HEADERS
    const response = result.toTextStreamResponse();
    
    // Log completion
    response.headers.set('X-Request-ID', requestId);
    response.headers.set('Cache-Control', 'no-cache, no-store, must-revalidate');
    
    // Track completion
    const endTime = Date.now();
    console.log(`[${requestId}] Stream response sent (setup time: ${endTime - startTime}ms)`);
    
    return response;
    
  } catch (error) {
    const duration = Date.now() - startTime;
    console.error(`[${requestId}] Error after ${duration}ms:`, error instanceof Error ? error.message : error);
    
    if (error instanceof Error && error.name === 'AbortError') {
      return new Response(
        JSON.stringify({ error: "Request timeout: Model response took too long" }), 
        { status: 504 }
      );
    }

    return new Response(
      JSON.stringify({ error: "Failed to process chat request" }), 
      { status: 500 }
    );
  }
}