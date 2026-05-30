import './globals.css'
import { Playfair_Display, DM_Sans, DM_Mono } from 'next/font/google'
import { SocialBar } from './components/social-bar'
import { PreloadResources } from './components/preload-resources'
import { Metadata, Viewport } from 'next'
import { Header } from './components/header'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { baseUrl } from './sitemap'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-playfair'
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm-sans'
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm-mono'
})

export const viewport: Viewport = {
  themeColor: '#0A0A0A',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export const metadata: Metadata = {
  title: {
    default: 'Matthew Ramsay - Global Systems Strategist | Cloud Architect',
    template: '%s | Matthew Ramsay'
  },
  description: 'Engineering at the intersection of cloud infrastructure, agentic AI, and global systems design. Building the future from first principles.',
  keywords: ['Matthew Ramsay', 'Cloud Architect', 'Global Systems Strategist', 'CTO', 'Agentic AI', 'Infrastructure'],
  authors: [{ name: 'Matthew Ramsay' }],
  creator: 'Matthew Ramsay',
  publisher: 'Matthew Ramsay',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Matthew Ramsay',
  },
  formatDetection: {
    email: false,
    address: false,
  },
  metadataBase: new URL('https://matthew-ryland.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://matthew-ryland.vercel.app',
    siteName: 'Matthew Ramsay',
    title: 'Matthew Ramsay - Global Systems Strategist | Cloud Architect',
    description: 'Engineering at the intersection of cloud infrastructure, agentic AI, and global systems design.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Matthew Ramsay - Global Systems Strategist | Cloud Architect',
    description: 'Engineering at the intersection of cloud infrastructure, agentic AI, and global systems design.',
    creator: '@ryramzyx',
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <PreloadResources />
        <link rel="apple-touch-icon" href="/icon.png" />
      </head>
      <body className={`${playfair.variable} ${dmSans.variable} ${dmMono.variable} bg-streetBlack text-silver min-h-screen flex flex-col antialiased`}>
        <main className="flex-auto min-w-0 flex flex-col px-4 md:px-0">
          <Header />
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
