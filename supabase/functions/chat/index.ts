import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { message, history = [] } = await req.json()
    
    const openaiApiKey = Deno.env.get('OPENAI_API_KEY')
    if (!openaiApiKey) {
      throw new Error('OpenAI API key not found')
    }

    // System prompt for Kennedy Equity Assistant
    const systemPrompt = `You are the Kennedy Equity Assistant. You answer questions about Kennedy Equity, explain real estate equity basics, and help with property information.

Key information about Kennedy Equity:
- Real estate holding company focused on strategic acquisitions and property management
- Serves the Greater Austin metropolitan area
- Manages 400+ properties with $25M+ investment volume
- 5+ years in business with 98% client satisfaction
- Service areas include Austin Metro, North/South/East Austin suburbs
- Focus on residential, commercial, and association properties

You should help with:
1. Kennedy Equity questions and services
2. Real estate equity basics and education
3. Investment opportunities
4. Property listings and information
5. Information about Daniel Kennedy and the company

Be helpful, professional, and knowledgeable about real estate investment.`

    // Prepare messages for OpenAI
    const messages = [
      { role: "system", content: systemPrompt },
      ...history,
      { role: "user", content: message }
    ]

    // Call OpenAI API
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openaiApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: messages,
        max_tokens: 1000,
        temperature: 0.7,
      }),
    })

    if (!response.ok) {
      throw new Error(`OpenAI API error: ${response.statusText}`)
    }

    const data = await response.json()
    const reply = data.choices[0].message.content

    return new Response(
      JSON.stringify({ reply }),
      { 
        headers: { 
          ...corsHeaders, 
          'Content-Type': 'application/json' 
        } 
      }
    )

  } catch (error) {
    console.error('Error:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        status: 500,
        headers: { 
          ...corsHeaders, 
          'Content-Type': 'application/json' 
        } 
      }
    )
  }
})