'use client'

import { motion } from 'framer-motion'

interface StackItem {
  category: string
  technology: string
}

const stack: StackItem[] = [
  { category: 'LANGUAGES', technology: 'TypeScript' },
  { category: 'CLOUD', technology: 'AWS • GCP' },
  { category: 'AGENTIC AI', technology: 'LangChain' },
  { category: 'FRAMEWORK', technology: 'Next.js' },
  { category: 'INFRA', technology: 'Terraform' },
  { category: 'AI RESEARCH', technology: 'Applied ML' }
]

export function CoreStack() {
  return (
    <section className="section bg-streetBlack">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold font-serif text-crispWhite mb-4">
            Core Stack & Capabilities
          </h2>
          <div className="w-16 h-[1px] bg-border" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {stack.map((item, index) => (
            <motion.div
              key={item.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card group cursor-default"
            >
              <span className="text-[10px] text-silver tracking-[0.2em] uppercase font-mono block mb-3 opacity-60">
                {item.category}
              </span>
              <span className="text-lg text-crispWhite font-sans">
                {item.technology}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
