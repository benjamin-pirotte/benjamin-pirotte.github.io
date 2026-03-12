'use client'

import { useState } from 'react'
import Header from '@/components/Header'

export default function ContactPage() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    window.location.href = `mailto:benjamin.pirotte1@gmail.com?subject=Message from ${encodeURIComponent(email)}&body=${encodeURIComponent(message)}`
  }

  return (
    <>
      <Header />
      <main className="max-w-lg mx-auto px-6 py-20">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Get in touch</h1>
        <p className="text-gray-500 text-sm mb-8">
          Send me a message and I'll get back to you.
        </p>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Your email</label>
            <input
              type="email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-gray-400 transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Message</label>
            <textarea
              required
              rows={6}
              value={message}
              onChange={e => setMessage(e.target.value)}
              placeholder="What's on your mind?"
              className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-gray-400 transition-colors resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gray-900 text-white text-sm font-medium py-2.5 rounded-lg hover:bg-gray-700 transition-colors"
          >
            Send message
          </button>
        </form>
      </main>
    </>
  )
}
