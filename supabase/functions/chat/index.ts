import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
}

const RATE_LIMIT_PER_HOUR = 20
const CONTEXT_MESSAGES = 20

const SYSTEM_PROMPT = `You are a virtual version of Benjamin Pirotte, a Senior Product Manager with 15+ years of experience. Benjamin started as a front-end engineer before moving into product management. He has worked at Collibra, Aaqua, and Soda, specializing in B2B data products and AI features.

Personality: thoughtful, direct, collaborative, and passionate about building products that bridge technical and business worlds. He works best with technical teams building for both developer and business personas.

Key expertise:
- B2B SaaS product management
- Data management and data governance products
- AI/ML product development and strategy
- Enterprise go-to-market strategy
- Technical product leadership (background as a front-end engineer)
- Working with both developer and business personas

Current status: Open to new opportunities.

When answering, speak in first person as Benjamin. Be concise and warm. If asked something personal that wasn't covered in this prompt, be honest and say you'd rather discuss it in person. If someone wants to connect, direct them to LinkedIn or the contact form on this site. Do not make up specific details like salary expectations, exact dates, or confidential company information.`

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: CORS_HEADERS })
  }

  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405, headers: CORS_HEADERS })
  }

  try {
    const { email, message } = await req.json()

    if (!email || !message) {
      return new Response(
        JSON.stringify({ error: 'email and message are required' }),
        { status: 400, headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' } }
      )
    }

    const supabaseUrl = Deno.env.get('SUPABASE_URL')
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')

    if (!supabaseUrl || !supabaseServiceKey) throw new Error('Supabase env vars not set')

    const supabase = createClient(supabaseUrl, supabaseServiceKey)

    // 1. Verify email is approved
    const { data: emailData, error: emailError } = await supabase
      .from('email_validations')
      .select('is_approved')
      .eq('email', email)
      .single()

    if (emailError || !emailData || !emailData.is_approved) {
      return new Response(
        JSON.stringify({ error: 'Email not verified. Please confirm your email first.' }),
        { status: 403, headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' } }
      )
    }

    // 2. Rate limit: count user messages in the last hour
    const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000).toISOString()
    const { count, error: countError } = await supabase
      .from('chat_messages')
      .select('id', { count: 'exact', head: true })
      .eq('email', email)
      .eq('role', 'user')
      .gte('created_at', oneHourAgo)

    if (countError) throw new Error(`Rate limit check failed: ${countError.message}`)

    if ((count ?? 0) >= RATE_LIMIT_PER_HOUR) {
      return new Response(
        JSON.stringify({ error: 'Rate limit exceeded. Please try again in an hour.' }),
        { status: 429, headers: { ...CORS_HEADERS, 'Content-Type': 'application/json', 'Retry-After': '3600' } }
      )
    }

    // 3. Fetch conversation history for context
    const { data: history, error: historyError } = await supabase
      .from('chat_messages')
      .select('role, content')
      .eq('email', email)
      .order('created_at', { ascending: false })
      .limit(CONTEXT_MESSAGES)

    if (historyError) throw new Error(`Failed to fetch history: ${historyError.message}`)

    const conversationHistory = (history ?? []).reverse()

    // 4. Store user message
    const { error: insertError } = await supabase
      .from('chat_messages')
      .insert({ email, role: 'user', content: message })

    if (insertError) throw new Error(`Failed to store message: ${insertError.message}`)

    // 5. Call Anthropic API (or mock for testing)
    let reply: string
    if (Deno.env.get('MOCK_AI') === 'true') {
      await new Promise(r => setTimeout(r, 600))
      reply = `[mock] You said: "${message}". This is a test response — the real AI is not being called.`
    } else {
      const anthropicKey = Deno.env.get('ANTHROPIC_API_KEY')
      if (!anthropicKey) throw new Error('Anthropic API key not set')

      const anthropicMessages = [
        ...conversationHistory.map((m: { role: string; content: string }) => ({
          role: m.role,
          content: m.content,
        })),
        { role: 'user', content: message },
      ]

      const anthropicRes = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'x-api-key': anthropicKey,
          'anthropic-version': '2023-06-01',
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          model: 'claude-opus-4-6',
          max_tokens: 1024,
          system: SYSTEM_PROMPT,
          messages: anthropicMessages,
        }),
      })

      if (!anthropicRes.ok) {
        const err = await anthropicRes.text()
        throw new Error(`Anthropic API error: ${err}`)
      }

      const anthropicData = await anthropicRes.json()
      reply = anthropicData.content?.[0]?.text ?? 'Sorry, I could not generate a response.'
    }

    // 6. Store assistant response
    await supabase
      .from('chat_messages')
      .insert({ email, role: 'assistant', content: reply })

    return new Response(
      JSON.stringify({ reply }),
      { status: 200, headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' } }
    )
  } catch (err) {
    console.error(err)
    return new Response(
      JSON.stringify({ error: 'Failed to process message' }),
      { status: 500, headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' } }
    )
  }
})
