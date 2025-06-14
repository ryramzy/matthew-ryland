'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

interface Project {
  title: string
  description: string
  link: string
  icon: string
}

const projects: Project[] = [
  {
    title: 'Vngle',
    description: 'A decentralized news network empowering communities through local storytelling and citizen journalism.',
    link: 'https://vngle.com',
    icon: '📰'
  },
  {
    title: 'Global Democratization Research',
    description: 'Research and analysis on global democratization processes and their impact on communities worldwide.',
    link: '/research',
    icon: '🌍'
  },
  {
    title: 'Tech & Policy Solutions',
    description: 'Building innovative solutions at the intersection of technology and public policy.',
    link: '/solutions',
    icon: '⚡'
  }
]

export function Projects() {
  return (
    <section className="py-20 bg-midnight/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-sandBeige sm:text-4xl">
            Things I've Built
          </h2>
          <p className="mt-4 text-lg text-tealBlue">
            Projects that bridge gaps between communities, information, and opportunities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link
                href={project.link}
                className="block h-full p-6 bg-midnight/80 backdrop-blur-sm border border-tealBlue/20 rounded-lg hover:border-warmGold/50 transition-colors group"
              >
                <div className="text-4xl mb-4">{project.icon}</div>
                <h3 className="text-xl font-semibold text-sandBeige mb-2 group-hover:text-warmGold transition-colors">
                  {project.title}
                </h3>
                <p className="text-tealBlue">
                  {project.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 