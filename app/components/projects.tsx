'use client'

import { motion } from 'framer-motion'

interface Experience {
  id: string
  category: string
  year: string
  title: string
  location: string
  description: string
  tags: string[]
  featured?: boolean
}

const experiences: Experience[] = [
  {
    id: 'motivated',
    category: 'CURRENT - EXECUTIVE ROLE',
    year: '2023 - Present',
    title: 'Motivated For Success',
    location: 'Atlanta, GA',
    description: 'Leading partner and CTO driving digital transformation strategy for a diverse portfolio of clients. Responsible for full-stack architecture decisions, cloud migration, and agentic AI integration across engagements.',
    tags: ['CLOUD ARCHITECTURE', 'AI STRATEGY', 'EXECUTIVE ADVISORY', 'FEATURED'],
    featured: true
  },
  {
    id: 'garry-payton',
    category: 'ENTERPRISE - LEGAL TECH',
    year: '2022',
    title: 'Garry A. Payton Law Firm',
    location: 'Remote',
    description: 'Architected and shipped a full-stack client intake and case management platform. Reduced administrative overhead by 60% through automated workflows and secure document handling.',
    tags: ['NEXT.JS', 'POSTGRESQL', 'PRISMA', 'AWS S3']
  },
  {
    id: 'elo',
    category: 'VENTURE - EDTECH',
    year: '2021 - 2023',
    title: 'Elo Language Platform',
    location: 'Global',
    description: 'Founder & Lead Engineer. Engineered a language-learning platform optimizing dialect-specific fluency and vocabulary retention. Deployed as containerized microservices on GCP.',
    tags: ['NEXT.JS', 'TYPESCRIPT', 'GCP CLOUD RUN', 'DOCKER']
  },
  {
    id: 'techmission',
    category: 'COMMUNITY - EDUCATION',
    year: '2020 - 2022',
    title: 'TechMission',
    location: 'Atlanta, GA',
    description: 'Founder & Organizer. Built an educational community bridging technical training with enterprise-level cloud deployment pipelines.',
    tags: ['COMMUNITY', 'CLOUD ENGINEERING', 'MENTORSHIP']
  },
  {
    id: 'mercor',
    category: 'AI RESEARCH',
    year: '2023',
    title: 'Mercor',
    location: 'Remote',
    description: 'AI Generalist Reviewer. Evaluated AI-generated logic and reasoning models under rigorous interdisciplinary parameters, focusing on public policy, law, and historical research.',
    tags: ['RLHF', 'AI ALIGNMENT', 'POLICY RESEARCH']
  },
  {
    id: 'vngle',
    category: 'STARTUP - OPERATIONS',
    year: '2016 - 2023',
    title: 'Vngle',
    location: 'Remote',
    description: 'Startup Operations & Media Innovation. Spent 7 years optimizing decentralized digital infrastructure and scaling operations for community-driven reporting platforms.',
    tags: ['OPERATIONS', 'DECENTRALIZED INFRA', 'STRATEGY']
  }
]

export function Projects() {
  return (
    <section id="work" className="section bg-streetBlack">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold font-serif text-crispWhite mb-4">
            Experience & Architecture
          </h2>
          <div className="w-16 h-[1px] bg-border" />
        </motion.div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`card flex flex-col group ${exp.featured ? 'border-l-4 border-l-silver' : ''}`}
            >
              {/* Card Header */}
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                <div>
                  <span className="text-xs text-silver tracking-widest uppercase font-mono block mb-2">
                    {exp.category}
                  </span>
                  <h3 className="text-2xl font-serif font-bold text-crispWhite">
                    {exp.title}
                  </h3>
                </div>
                <div className="mt-2 md:mt-0 text-left md:text-right">
                  <span className="text-xs text-silver tracking-widest font-mono block">
                    {exp.year}
                  </span>
                  <span className="text-xs text-silver font-mono block mt-1 opacity-70">
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-silver text-sm md:text-base leading-relaxed mb-8 max-w-4xl">
                {exp.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-3 mt-auto">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-[10px] sm:text-xs tracking-widest font-mono text-silver border border-border group-hover:border-silver/50 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
 