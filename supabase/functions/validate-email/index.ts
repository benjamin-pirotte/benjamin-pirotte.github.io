import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
}

function generateKey(length = 32): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  const bytes = crypto.getRandomValues(new Uint8Array(length))
  return Array.from(bytes).map(b => chars[b % chars.length]).join('')
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: CORS_HEADERS })
  }

  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405, headers: CORS_HEADERS })
  }

  try {
    const { email, url } = await req.json()

    if (!email || !url) {
      return new Response(
        JSON.stringify({ error: 'email and url are required' }),
        { status: 400, headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' } }
      )
    }

    // Basic email format check
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return new Response(
        JSON.stringify({ error: 'Invalid email address' }),
        { status: 400, headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' } }
      )
    }

    const supabaseUrl = Deno.env.get('SUPABASE_URL')
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')
    const resendApiKey = Deno.env.get('resend')

    if (!supabaseUrl || !supabaseServiceKey) throw new Error('Supabase env vars not set')
    if (!resendApiKey) throw new Error('resend secret is not set')

    const supabase = createClient(supabaseUrl, supabaseServiceKey)

    const key = generateKey()

    // Upsert: if email already exists, refresh the key and reset approval
    const { error: dbError } = await supabase
      .from('email_validations')
      .upsert(
        { email, key, is_approved: false, created_at: new Date().toISOString() },
        { onConflict: 'email' }
      )

    if (dbError) throw new Error(`DB error: ${dbError.message}`)

    // Build confirmation link
    const confirmUrl = `${url}?email=${encodeURIComponent(email)}&key=${encodeURIComponent(key)}`

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Benjamin Pirotte <onboarding@resend.dev>',
        to: email,
        subject: 'Please confirm your email address',
        text: `Click the link below to confirm your email:\n\n${confirmUrl}`,
        html: `
          <p>Hi,</p>
          <p>Click the button below to confirm your email address:</p>
          <p style="margin: 24px 0;">
            <a href="${confirmUrl}"
               style="background:#111;color:#fff;padding:12px 24px;border-radius:6px;text-decoration:none;font-family:sans-serif;font-size:14px;">
              Confirm email
            </a>
          </p>
          <p style="color:#999;font-size:12px;">Or copy this link: ${confirmUrl}</p>
          <p style="color:#999;font-size:12px;">If you didn't request this, you can safely ignore this email.</p>
        `,
      }),
    })

    if (!res.ok) {
      const error = await res.text()
      throw new Error(`Resend API error: ${error}`)
    }

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' } }
    )
  } catch (err) {
    console.error(err)
    return new Response(
      JSON.stringify({ error: 'Failed to process request' }),
      { status: 500, headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' } }
    )
  }
})
