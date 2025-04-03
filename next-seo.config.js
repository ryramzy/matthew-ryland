module.exports = {
  title: 'Matthew Ryland Law Firm',
  description: 'Experienced legal representation for your needs.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://matthewryland.com',
    site_name: 'Matthew Ryland Law Firm',
    images: [
      {
        url: 'https://matthewryland.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Matthew Ryland Law Firm',
      },
    ],
  },
  twitter: {
    handle: '@matthewryland',
    site: '@matthewryland',
    cardType: 'summary_large_image',
  },
  facebook: {
    appId: 'your-facebook-app-id',
  },
  additionalMetaTags: [
    {
      name: 'theme-color',
      content: '#000000',
    },
  ],
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      href: '/apple-touch-icon.png',
      sizes: '180x180',
    },
    {
      rel: 'manifest',
      href: '/manifest.json',
    },
  ],
} 