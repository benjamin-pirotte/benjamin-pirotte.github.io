import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-roboto',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Benjamin Pirotte — Senior Product Manager',
  description: 'Senior Product Manager specialized in B2B data products, AI/ML features, and enterprise SaaS.',
  verification: {
    google: "W3FW7pgb7MeS_r5GzJX-jirzccWWEBbiWUFIelc1ue4",
  },
  icons: {
    icon: "/favicon.svg",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={roboto.variable}>
      <body className={`${roboto.className} bg-white text-gray-900`}>
        {children}
      </body>
    </html>
  )
}
