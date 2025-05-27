import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Benjamin Pirotte, Product leader',
  description: 'Product leader and builder specialized in B2B software and data management.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
