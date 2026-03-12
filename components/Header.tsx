'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import ContactModal from './ContactModal'

export default function Header() {
  const pathname = usePathname()
  const [contactOpen, setContactOpen] = useState(false)

  const navLink = (href: string, label: string) => (
    <Link
      href={href}
      className={`text-sm font-medium transition-colors hover:text-gray-900 ${
        pathname === href ? 'text-gray-900' : 'text-gray-500'
      }`}
    >
      {label}
    </Link>
  )

  return (
    <>
      <header className="sticky top-0 z-50 bg-white">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">

          <Link href="/" className="text-base text-gray-900 tracking-tight">
            Benjamin Pirotte
          </Link>
          <nav className="flex items-center gap-7">
            {navLink('/', 'Home')}
            {navLink('/blog', 'Blog')}
            <button
              onClick={() => setContactOpen(true)}
              className="text-sm font-medium bg-gray-900 text-white px-4 py-1.5 rounded-full hover:bg-gray-700 transition-colors"
            >
              Let's talk
            </button>
            <a
              href="https://linkedin.com/in/benjaminpirotte"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-400 hover:text-gray-900 transition-colors flex items-center justify-center w-7 h-7 rounded-full border border-gray-300 hover:border-gray-600"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
          </nav>
        </div>
        <div className="border-t border-gray-200" />
      </header>
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  )
}
