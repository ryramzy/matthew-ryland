import { MetadataRoute } from 'next'
import { baseUrl } from './sitemap'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/', '/admin/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
