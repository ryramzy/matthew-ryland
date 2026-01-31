import './globals.css'
import { Inter } from 'next/font/google'
import { SocialBar } from './components/social-bar'
import { PreloadResources } from './components/preload-resources'
import { Metadata } from 'next'
import { Header } from './components/header'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { baseUrl } from './sitemap'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Matthew Ryland - Builder, Strategist, Advocate',
    template: '%s | Matthew Ryland'
  },
  description: 'Builder, Strategist, and Advocate bridging gaps between communities, information, and opportunities through storytelling, innovation, and public service.',
  keywords: ['Matthew Ryland', 'Technology', 'Innovation', 'Public Service', 'Accessibility', 'Journalism', 'Policy'],
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
    type: 'website',
    locale: 'en_US',
    url: 'https://matthewryland.com',
    siteName: 'Matthew Ryland',
    title: 'Matthew Ryland - Builder, Strategist, Advocate',
    description: 'Builder, Strategist, and Advocate bridging gaps between communities, information, and opportunities.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Matthew Ryland - Builder, Strategist, Advocate',
    description: 'Builder, Strategist, and Advocate bridging gaps between communities, information, and opportunities.',
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
      <head>
        <PreloadResources />
      </head>
      <body className={`${inter.className} bg-midnight text-sandBeige min-h-screen flex flex-col`}>
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
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
