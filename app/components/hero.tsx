'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center section">
      {/* Subtle grid background for structural depth */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          {/* Top label */}
          <div className="flex items-center space-x-4 mb-8">
            <span className="text-xs tracking-widest text-silver uppercase font-mono">
              PORTFOLIO • 2026
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-crispWhite tracking-tight">
            Matthew<br />Ramsay
          </h1>

          {/* Role labels */}
          <div className="mb-8">
            <p className="text-sm md:text-base text-silver tracking-widest uppercase font-mono">
              GLOBAL SYSTEMS STRATEGIST • CLOUD ARCHITECT • CTO
            </p>
          </div>

          {/* Divider rule */}
          <div className="w-16 h-[1px] bg-border mb-8" />

          {/* Body copy */}
          <p className="text-lg md:text-xl text-silver font-sans max-w-2xl leading-relaxed mb-12">
            I architect systems that scale across borders — from cloud infrastructure to agentic AI pipelines. Executive partner with a builder's instinct and a strategist's lens.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 font-mono text-sm tracking-wider">
            <Link 
              href="#work"
              className="inline-flex items-center justify-center border border-border px-8 py-4 text-silver hover:border-silver hover:text-crispWhite transition-colors duration-300"
            >
              VIEW WORK
            </Link>
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center border border-border px-8 py-4 text-silver hover:border-silver hover:text-crispWhite transition-colors duration-300"
            >
              GET IN TOUCH
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
 