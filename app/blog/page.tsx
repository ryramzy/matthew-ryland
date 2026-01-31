import { getBlogPosts } from './utils'
import { BlogClient } from '../components/blog-client'

export default function BlogPage() {
  const allPosts = getBlogPosts().sort((a, b) => {
    if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
      return -1
    }
    return 1
  })

  return <BlogClient posts={allPosts} />
}
