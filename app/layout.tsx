import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Benjamin Pirotte, Product leader',
  description: 'Product leader and builder specialized in B2B software and data management.',
  verification: {
    google: "W3FW7pgb7MeS_r5GzJX-jirzccWWEBbiWUFIelc1ue4",
  },
  icons: {
    icon: "/favicon.png",
  },
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
