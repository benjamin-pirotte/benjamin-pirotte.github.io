'use client'

import { useEffect, useState } from 'react'

const HEADLINES = [
  <><span className="text-blue-600">Senior Product Manager</span> who takes ideas from 0→1 and keeps going.</>,
  <><span className="text-emerald-600">Product engineer</span> who can build and validate ideas fast; MVPs, prototypes, AI/LLM experiments.</>,
  <><span className="text-violet-600">Data Product Manager</span> with experience in data quality and data management.</>,
]

export default function RotatingHeadline() {
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setIndex(i => (i + 1) % HEADLINES.length)
        setVisible(true)
      }, 400)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div style={{ minHeight: '13rem', overflow: 'hidden', display: 'flex', alignItems: 'flex-end' }}>
      <h1
        className="text-4xl font-bold text-gray-900 leading-tight tracking-tight"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(8px)',
          transition: 'opacity 0.4s ease, transform 0.4s ease',
        }}
      >
        {HEADLINES[index]}
      </h1>
    </div>
  )
}
