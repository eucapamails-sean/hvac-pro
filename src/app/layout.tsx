import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Orlando HVAC Pros | Same-Day AC Repair & Installation',
  description: 'Orlando\'s trusted HVAC company. Same-day AC repair, emergency service, new installations. Licensed & insured. Call (407) 555-COOL for a free quote.',
  keywords: 'AC repair Orlando, HVAC Orlando, air conditioning repair, AC installation Orlando, emergency HVAC',
  openGraph: {
    title: 'Orlando HVAC Pros | Same-Day AC Repair & Installation',
    description: 'Orlando\'s trusted HVAC company. Same-day AC repair, emergency service, new installations.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}