import { MetadataRoute } from 'next'
import { getBlogPosts } from '@/app/blog/utils'

export const baseUrl = 'https://matthewryland.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/bio',
    '/blog',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  let blogs = getBlogPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }))

  return [...routes, ...blogs]
}
