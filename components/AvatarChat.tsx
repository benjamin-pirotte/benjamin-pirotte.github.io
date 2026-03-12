'use client'

import { useRef, useState } from 'react'
import ContactModal from './ContactModal'

const SUGGESTIONS = [
  "What's your background?",
  'Are you available?',
  'What do you specialize in?',
]

const REPLIES: Record<string, string> = {
  "What's your background?":
    "I'm a Senior PM with 15+ years of experience — started as a front-end engineer, then moved into product at Collibra, Aaqua, and Soda. I specialize in B2B data products and AI features.",
  'Are you available?':
    "Yes, I'm currently open to new opportunities. Feel free to send me a message or reach out on LinkedIn!",
  'What do you specialize in?':
    'My sweet spot is B2B SaaS — especially data management, AI/ML product development, and enterprise go-to-market. I work best with technical teams building for both developer and business personas.',
}

interface Message {
  role: 'user' | 'assistant'
  text: string
}

export default function AvatarChat() {
  const cardRef = useRef<HTMLDivElement>(null)
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', text: "Hi 👋 I'm Benjamin. Ask me anything or pick a question below." },
  ])
  const [input, setInput] = useState('')
  const [contactOpen, setContactOpen] = useState(false)

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

  const sendMessage = (text: string) => {
    const trimmed = text.trim()
    if (!trimmed) return
    const reply = REPLIES[trimmed] ?? "I'll integrate a smart AI here soon — for now, feel free to email me directly!"
    setMessages(prev => [
      ...prev,
      { role: 'user', text: trimmed },
      { role: 'assistant', text: reply },
    ])
    setInput('')
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
        <div className="flex flex-col items-center py-7 border-b border-gray-100 bg-gray-50">
          <img
            src="/profile.png"
            alt="Benjamin Pirotte"
            className="w-24 h-24 rounded-full object-cover shadow-md"
          />
          <p className="mt-3 font-semibold text-gray-900">Benjamin Pirotte</p>
          <p className="text-xs text-gray-500 mt-0.5">Senior Product Manager</p>
        </div>

        {/* Chat */}
        <div className="flex flex-col p-4 gap-3">
          <div className="space-y-2 max-h-52 overflow-y-auto pr-1">
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
          </div>

          {/* Suggestion chips */}
          {messages.length <= 2 && (
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

          {/* Input */}
          <div className="flex gap-2 mt-1">
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => { if (e.key === 'Enter') sendMessage(input) }}
              placeholder="Type a message…"
              className="flex-1 text-sm border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:border-gray-400 transition-colors"
            />
            <button
              onClick={() => sendMessage(input)}
              className="bg-gray-900 text-white text-sm px-3 py-2 rounded-lg hover:bg-gray-700 transition-colors"
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
      </div>
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  )
}
