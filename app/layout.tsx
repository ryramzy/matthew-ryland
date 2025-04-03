import './global.css'
import type { Metadata } from 'next'
import { Navbar } from './components/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { baseUrl } from './sitemap'

export const metadata: Metadata = {
  title: 'Matthew Ryland Law Firm',
  description: 'Experienced legal representation for your needs.',
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
    <html lang="en">
      <body className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Navbar />
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  )
}
