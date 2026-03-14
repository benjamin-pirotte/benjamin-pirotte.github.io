'use client'

import { useRef, useState, useEffect } from 'react'
import ContactModal from './ContactModal'

const SUPABASE_URL = 'https://oupxuaillphhvtdtmgih.supabase.co/functions/v1'

const SUGGESTIONS = [
  "What's your background?",
  'Are you available?',
  'What do you specialize in?',
]

const FREE_EMAIL_DOMAINS = new Set([
  'gmail.com', 'googlemail.com', 'yahoo.com', 'yahoo.co.uk', 'yahoo.fr', 'yahoo.de',
  'yahoo.es', 'yahoo.it', 'yahoo.co.jp', 'ymail.com', 'rocketmail.com',
  'hotmail.com', 'outlook.com', 'live.com', 'msn.com', 'live.co.uk', 'live.fr',
  'icloud.com', 'me.com', 'mac.com', 'aol.com',
  'protonmail.com', 'proton.me', 'pm.me',
  'tutanota.com', 'tutanota.de', 'tutamail.com', 'tuta.io',
  'mail.com', 'gmx.com', 'gmx.net', 'gmx.de',
  'yandex.com', 'yandex.ru', 'fastmail.com', 'fastmail.fm',
  'hey.com', 'zoho.com', 'inbox.com', 'mail.ru', 'yopmail.com',
])

interface Message {
  role: 'user' | 'assistant'
  text: string
}

type Stage = 'verifying' | 'chat'
type ChatMode = 'unverified' | 'awaiting-email' | 'email-sent' | 'verified'

const LS_KEY = 'bp_chat_email'

export default function AvatarChat() {
  const cardRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const messagesContainerRef = useRef<HTMLDivElement>(null)

  const [stage, setStage] = useState<Stage>('verifying')
  const [chatMode, setChatMode] = useState<ChatMode>('unverified')
  const [confirmedEmail, setConfirmedEmail] = useState('')
  const [pendingFirstMessage, setPendingFirstMessage] = useState('')
  const [pendingAutoSend, setPendingAutoSend] = useState('')

  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', text: "Hi 👋 I'm Benjamin. Ask me anything or pick a question below." },
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [contactOpen, setContactOpen] = useState(false)

  // On mount: check localStorage or URL confirmation params
  useEffect(() => {
    const stored = localStorage.getItem(LS_KEY)
    if (stored) {
      setConfirmedEmail(stored)
      setChatMode('verified')
      setStage('chat')
      return
    }
    const params = new URLSearchParams(window.location.search)
    const email = params.get('email')
    const key = params.get('key')
    const msg = params.get('msg')
    if (email && key) {
      fetch(`${SUPABASE_URL}/confirm-email`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, key }),
      })
        .then(r => r.json())
        .then(data => {
          if (data.success) {
            localStorage.setItem(LS_KEY, email)
            setConfirmedEmail(email)
            window.history.replaceState({}, '', window.location.pathname)
            setChatMode('verified')
            if (msg) setPendingAutoSend(msg)
          }
          setStage('chat')
        })
        .catch(() => setStage('chat'))
    } else {
      setStage('chat')
    }
  }, [])

  // Auto-send pending message after email confirmation
  useEffect(() => {
    if (chatMode === 'verified' && pendingAutoSend) {
      setPendingAutoSend('')
      sendMessage(pendingAutoSend)
    }
  }, [chatMode, pendingAutoSend])

  // Auto-scroll chat to bottom
  useEffect(() => {
    const el = messagesContainerRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [messages, isTyping])

  // Particle canvas
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let lw = 0, lh = 0
    const resize = () => {
      const dpr = window.devicePixelRatio || 1
      lw = canvas.offsetWidth
      lh = canvas.offsetHeight
      canvas.width  = lw * dpr
      canvas.height = lh * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()
    window.addEventListener('resize', resize)

    const N = 38
    const CONNECT = 80
    type Pt = { x: number; y: number; vx: number; vy: number }
    const pts: Pt[] = Array.from({ length: N }, () => ({
      x:  Math.random() * lw,
      y:  Math.random() * lh,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
    }))

    let raf: number
    const draw = () => {
      raf = requestAnimationFrame(draw)
      ctx.clearRect(0, 0, lw, lh)
      for (const p of pts) {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0 || p.x > lw) p.vx *= -1
        if (p.y < 0 || p.y > lh) p.vy *= -1
      }
      for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
          const dx = pts[i].x - pts[j].x
          const dy = pts[i].y - pts[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < CONNECT) {
            ctx.beginPath()
            ctx.moveTo(pts[i].x, pts[i].y)
            ctx.lineTo(pts[j].x, pts[j].y)
            ctx.strokeStyle = `rgba(150,150,160,${(1 - dist / CONNECT) * 0.35})`
            ctx.lineWidth = 0.8
            ctx.stroke()
          }
        }
      }
      for (const p of pts) {
        ctx.beginPath()
        ctx.arc(p.x, p.y, 1.8, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(140,140,155,0.55)'
        ctx.fill()
      }
    }
    draw()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    card.style.transform = `perspective(800px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) translateZ(8px)`
  }

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = 'perspective(800px) rotateY(0deg) rotateX(0deg) translateZ(0px)'
    }
  }

  const addBotMessage = (text: string) =>
    setMessages(prev => [...prev, { role: 'assistant', text }])

  const sendMessage = async (text: string) => {
    const trimmed = text.trim()
    if (!trimmed || isTyping) return
    setMessages(prev => [...prev, { role: 'user', text: trimmed }])
    setInput('')

    // Verified: call AI
    if (chatMode === 'verified') {
      setIsTyping(true)
      try {
        const res = await fetch(`${SUPABASE_URL}/chat`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: confirmedEmail, message: trimmed }),
        })
        const data = await res.json()
        if (!res.ok) throw new Error(data.error ?? 'Something went wrong')
        addBotMessage(data.reply)
      } catch (err) {
        addBotMessage(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
      } finally {
        setIsTyping(false)
      }
      return
    }

    // First message from unverified user → ask for email
    if (chatMode === 'unverified') {
      setPendingFirstMessage(trimmed)
      setChatMode('awaiting-email')
      addBotMessage("Happy to answer! I just need to verify who you are first — what's your work email address?")
      return
    }

    // User provides email
    if (chatMode === 'awaiting-email') {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
        addBotMessage("That doesn't look like a valid email. Could you try again?")
        return
      }
      const domain = trimmed.split('@')[1]?.toLowerCase()
      if (FREE_EMAIL_DOMAINS.has(domain) && trimmed !== 'benjamin.pirotte1@gmail.com') {
        addBotMessage("Please use a company email — generic providers like Gmail or Yahoo aren't accepted.")
        return
      }
      setIsTyping(true)
      try {
        const confirmUrl = window.location.origin + window.location.pathname
        const res = await fetch(`${SUPABASE_URL}/validate-email`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: trimmed, url: confirmUrl, firstMessage: pendingFirstMessage }),
        })
        const data = await res.json()
        if (!res.ok) throw new Error(data.error ?? 'Something went wrong')
        setChatMode('email-sent')
        addBotMessage(`Got it! I sent a confirmation link to ${trimmed}. Click it and I'll answer your question right away.`)
      } catch (err) {
        addBotMessage(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
      } finally {
        setIsTyping(false)
      }
      return
    }

    // Email sent, waiting for confirmation
    if (chatMode === 'email-sent') {
      addBotMessage("Please check your inbox and click the confirmation link to unlock the chat.")
    }
  }

  return (
    <>
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ transition: 'transform 0.15s ease', transformStyle: 'preserve-3d' }}
        className="w-full bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden"
      >
        {/* Avatar */}
        <div className="relative flex flex-col items-center py-7 border-b border-gray-100 bg-gray-50 overflow-hidden">
          <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
          <img
            src="/profile.png"
            alt="Benjamin Pirotte"
            className="relative z-10 w-24 h-24 rounded-full object-cover shadow-md"
          />
          <p className="relative z-10 mt-3 font-semibold text-gray-900">Benjamin Pirotte</p>
          <p className="relative z-10 text-xs text-gray-500 mt-0.5">Product Management</p>
        </div>

        <div style={{ minHeight: '240px' }} className="flex flex-col justify-center">

        {/* Verifying: checking localStorage / URL params */}
        {stage === 'verifying' && (
          <div className="flex flex-col items-center gap-3 p-6 text-center">
            <svg className="animate-spin text-gray-400" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
            </svg>
            <p className="text-sm text-gray-500">Loading…</p>
          </div>
        )}

        {/* Chat */}
        {stage === 'chat' && (
          <div className="flex flex-col p-4 gap-3">
            <div ref={messagesContainerRef} className="space-y-2 max-h-52 overflow-y-auto pr-1">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className={`max-w-[85%] text-sm px-3 py-2 rounded-xl leading-snug ${
                      m.role === 'user'
                        ? 'bg-gray-900 text-white rounded-br-sm'
                        : 'bg-gray-100 text-gray-800 rounded-bl-sm'
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 text-gray-400 text-sm px-3 py-2 rounded-xl rounded-bl-sm">
                    <span className="inline-flex gap-0.5">
                      <span className="animate-bounce" style={{ animationDelay: '0ms' }}>·</span>
                      <span className="animate-bounce" style={{ animationDelay: '150ms' }}>·</span>
                      <span className="animate-bounce" style={{ animationDelay: '300ms' }}>·</span>
                    </span>
                  </div>
                </div>
              )}
            </div>

            {messages.length === 1 && (
              <div className="flex flex-wrap gap-1.5">
                {SUGGESTIONS.map(s => (
                  <button
                    key={s}
                    onClick={() => sendMessage(s)}
                    className="text-xs border border-gray-200 rounded-full px-3 py-1 text-gray-600 hover:border-gray-400 hover:text-gray-900 transition-colors"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            <div className="flex gap-2 mt-1">
              <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => { if (e.key === 'Enter') sendMessage(input) }}
                placeholder={chatMode === 'awaiting-email' ? 'your@company.com' : 'Type a message…'}
                disabled={isTyping || chatMode === 'email-sent'}
                className="flex-1 text-sm border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:border-gray-400 transition-colors disabled:opacity-50"
              />
              <button
                onClick={() => sendMessage(input)}
                disabled={isTyping || chatMode === 'email-sent'}
                className="bg-gray-900 text-white text-sm px-3 py-2 rounded-lg hover:bg-gray-700 transition-colors disabled:opacity-50"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>
            </div>

            <button
              onClick={() => setContactOpen(true)}
              className="text-xs text-gray-400 hover:text-gray-700 transition-colors mt-0.5 text-center"
            >
              Or send me an email →
            </button>
          </div>
        )}

        </div>{/* min-height wrapper */}
      </div>
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  )
}
