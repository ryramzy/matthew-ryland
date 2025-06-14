'use client'

import { motion } from 'framer-motion'

const approaches = [
  {
    title: 'Human-Centered Design',
    description: 'Putting people at the heart of every solution, ensuring technology serves human needs and values.',
    icon: '👥'
  },
  {
    title: 'Ethical Innovation',
    description: 'Building with integrity, considering the broader impact of technology on society and communities.',
    icon: '⚖️'
  },
  {
    title: 'Systems Thinking',
    description: 'Understanding complex relationships and creating solutions that address root causes.',
    icon: '🔄'
  }
]

export function Approach() {
  return (
    <section className="py-20 bg-midnight">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-sandBeige sm:text-4xl">
            My Approach
          </h2>
          <p className="mt-4 text-lg text-tealBlue">
            Building solutions that make a lasting impact
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {approaches.map((approach, index) => (
            <motion.div
              key={approach.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-midnight/80 backdrop-blur-sm border border-tealBlue/20 rounded-lg"
            >
              <div className="text-4xl mb-4">{approach.icon}</div>
              <h3 className="text-xl font-semibold text-sandBeige mb-2">
                {approach.title}
              </h3>
              <p className="text-tealBlue">
                {approach.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 