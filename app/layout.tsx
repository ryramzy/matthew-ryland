import './globals.css'
import { Inter } from 'next/font/google'
import { SocialBar } from './components/social-bar'
import type { Metadata } from 'next'
import { Navbar } from './components/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { baseUrl } from './sitemap'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Matthew Ryland',
  description: 'Builder, Strategist, Advocate',
  keywords: ['lawyer', 'attorney', 'legal', 'law firm'],
  authors: [{ name: 'Matthew Ryland' }],
  creator: 'Matthew Ryland',
  publisher: 'Matthew Ryland',
  formatDetection: {
    email: false,
    address: false,
  },
  metadataBase: new URL('https://matthewryland.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Matthew Ryland Law Firm',
    description: 'Experienced legal representation for your needs.',
    url: 'https://matthewryland.com',
    siteName: 'Matthew Ryland Law Firm',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Matthew Ryland Law Firm',
    description: 'Experienced legal representation for your needs.',
    creator: '@matthewryland',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-midnight text-sandBeige`}>
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Navbar />
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
        <SocialBar />
      </body>
    </html>
  )
}
