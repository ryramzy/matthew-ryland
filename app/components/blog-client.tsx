'use client'

import { motion } from 'framer-motion'
import { Calendar, ArrowRight, Search } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { formatDate } from '../blog/date-utils'

interface BlogPost {
  metadata: {
    title: string
    publishedAt: string
    summary: string
  }
  slug: string
}

interface BlogClientProps {
  posts: BlogPost[]
}

const categories = ['All', 'Technology', 'Development', 'Tools']

function BlogCard({ post, index }: { post: BlogPost; index: number }) {
  const categoryColors: Record<string, string> = {
    'Technology': 'from-tealBlue to-blue-500',
    'Development': 'from-warmGold to-yellow-500',
    'Tools': 'from-softRed to-red-500',
  }

  const category = 'Technology' // Default category, could be extracted from metadata if needed

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="group bg-gradient-to-br from-midnight/90 to-tealBlue/20 rounded-2xl border border-tealBlue/20 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500"
    >
      {/* Featured Image */}
      <div className="relative h-48 overflow-hidden">
        <div className="w-full h-full bg-gradient-to-br from-tealBlue/30 to-warmGold/20 flex items-center justify-center">
          <span className="text-tealBlue/60 text-sm">Blog Post</span>
        </div>
        
        {/* Category badge */}
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 bg-gradient-to-r ${categoryColors[category] || 'from-tealBlue to-blue-500'} text-white text-xs font-bold rounded-full`}>
            {category}
          </span>
        </div>
        
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Meta information */}
        <div className="flex items-center space-x-4 text-xs text-tealBlue/60 mb-3">
          <div className="flex items-center space-x-1">
            <Calendar size={14} />
            <span>{formatDate(post.metadata.publishedAt)}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-sandBeige mb-3 group-hover:text-warmGold transition-colors duration-300 line-clamp-2">
          {post.metadata.title}
        </h3>

        {/* Excerpt */}
        <p className="text-tealBlue/80 text-sm leading-relaxed mb-4 line-clamp-3">
          {post.metadata.summary}
        </p>

        {/* Read More Button */}
        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center text-warmGold hover:text-softRed font-medium text-sm transition-colors duration-200"
        >
          Read More
          <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform duration-200" />
        </Link>
      </div>

      {/* Hover glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-warmGold/5 to-softRed/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
    </motion.article>
  )
}

export function BlogClient({ posts }: BlogClientProps) {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredPosts = posts.filter(post => {
    const matchesCategory = selectedCategory === 'All' // Category filtering can be added later if needed
    const matchesSearch = post.metadata.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         (post.metadata.summary || '').toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-midnight via-tealBlue/10 to-midnight">
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-sandBeige mb-6">
              Blog & <span className="gradient-text">Insights</span>
            </h1>
            <p className="text-xl text-tealBlue/80 max-w-3xl mx-auto leading-relaxed">
              Exploring the intersection of community building, policy innovation, and digital transformation. 
              Insights, strategies, and stories that drive meaningful change.
            </p>
          </motion.div>

          {/* Search and Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto mb-12"
          >
            <div className="bg-gradient-to-r from-midnight/80 to-tealBlue/20 rounded-2xl p-6 border border-tealBlue/20">
              {/* Search Bar */}
              <div className="relative mb-6">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-tealBlue/60" size={20} />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-midnight/50 border border-tealBlue/20 rounded-xl text-sandBeige placeholder-tealBlue/60 focus:border-warmGold focus:outline-none transition-colors duration-200"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      selectedCategory === category
                        ? 'bg-gradient-to-r from-warmGold to-softRed text-midnight shadow-glow'
                        : 'bg-midnight/50 text-tealBlue hover:text-warmGold border border-tealBlue/20 hover:border-warmGold/40'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* All Posts */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold text-sandBeige mb-8 text-center">
              Latest <span className="gradient-text">Posts</span>
            </h2>
            
            {filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPosts.map((post, index) => (
                  <BlogCard key={post.slug} post={post} index={index} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-tealBlue/60 text-lg">No posts found matching your criteria.</p>
              </div>
            )}
          </motion.div>

          {/* Newsletter Signup */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-20"
          >
            <div className="bg-gradient-to-r from-midnight/80 to-tealBlue/20 rounded-2xl p-8 border border-tealBlue/20 text-center">
              <h3 className="text-2xl font-bold text-sandBeige mb-4">
                Stay Updated
              </h3>
              <p className="text-tealBlue/80 mb-6 max-w-2xl mx-auto">
                Get the latest insights on community building, policy innovation, and digital transformation delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-midnight/50 border border-tealBlue/20 rounded-xl text-sandBeige placeholder-tealBlue/60 focus:border-warmGold focus:outline-none transition-colors duration-200"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-warmGold to-softRed text-midnight font-bold rounded-xl hover:shadow-glow transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
