import { groq } from '@ai-sdk/groq';
import { streamText } from 'ai';
import { createClient } from '@/lib/supabase/server'; 

export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    
    
    const supabase = await createClient();

    // Securely verify the logged-in user
    const { data: { user }, error: authError } = await supabase.auth.getUser();
    if (authError || !user) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
    }

    // Fetch ONLY this user's latest predictions for AI context
    const { data: predictions } = await supabase
      .from('predictions')
      .select('metal, production_route, gwp_total, circularity_index, created_at')
      .order('created_at', { ascending: false })
      .limit(5);

    let contextData = "No recent predictions found.";
    if (predictions && predictions.length > 0) {
      contextData = predictions.map((p, i) => `
        Prediction ${i + 1} (${new Date(p.created_at).toLocaleDateString()}):
        - Metal: ${p.metal || 'Unknown'}
        - Route: ${p.production_route || 'Unknown'}
        - Total GWP: ${p.gwp_total ? Number(p.gwp_total).toFixed(2) : 'N/A'} kg CO₂/kg
        - Circularity Index: ${p.circularity_index ? Number(p.circularity_index).toFixed(2) : 'N/A'}
      `).join('\n');
    }

    const systemPrompt = `
      You are an elite, highly academic Life Cycle Assessment (LCA) and Metallurgy Expert System.
      Your primary role is to provide deep, technically accurate analysis regarding carbon footprints, supply chain flows, and material sustainability.
      
      Here is the user's recent LCA prediction history:
      ---
      ${contextData}
      ---
      
      STRICT GUARDRAILS (YOU MUST OBEY THESE):
      1. You must ONLY answer questions related to metallurgy, materials science, life cycle assessments (LCA), sustainability, carbon footprints, supply chains, and the provided prediction data.
      2. DOMAIN RESTRICTION: If a user asks a question outside of this domain (e.g., coding, general history, recipes, weather, politics, pop culture), you MUST politely refuse. State clearly that you are a specialized LCA Assistant restricted to metallurgy and environmental impact topics.
      3. Use the provided prediction data to give highly analytical, context-aware answers if the user asks about "my data", "my recent analyses", or "my highest carbon footprint".
      4. Provide thorough, deeply technical explanations. Use markdown formatting, bullet points, and engineering terminology where appropriate. Avoid shallow or generic advice.
    `;

    const result = await streamText({
      model: groq('llama-3.1-70b-versatile'), 
      system: systemPrompt,
      // ✨ FIX 2: Manually mapping the messages instead of using convertToCoreMessages
      messages: messages.map((m: any) => ({
        role: m.role,
        content: m.content,
      })),
      temperature: 0.3, 
    });

    return result.toTextStreamResponse();
    
  } catch (error) {
    console.error("Chat API Error:", error);
    return new Response(JSON.stringify({ error: "Failed to process chat request" }), { status: 500 });
  }
}