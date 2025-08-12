'use client'

import { motion } from 'framer-motion'
import { Target, Users, Lightbulb, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react'
import { LucideIcon } from 'lucide-react'

interface Skill {
  name: string
  level: number
  category: string
  icon: LucideIcon
}

interface TimelineItem {
  year: string
  title: string
  description: string
  icon: LucideIcon
  category: 'policy' | 'tech' | 'community' | 'innovation'
}

const skills: Skill[] = [
  { name: 'Policy Analysis', level: 95, category: 'Policy', icon: Target },
  { name: 'Community Building', level: 90, category: 'Community', icon: Users },
  { name: 'Strategic Planning', level: 88, category: 'Strategy', icon: TrendingUp },
  { name: 'Innovation Management', level: 85, category: 'Innovation', icon: Lightbulb },
  { name: 'Data Visualization', level: 82, category: 'Tech', icon: TrendingUp },
  { name: 'Stakeholder Engagement', level: 88, category: 'Community', icon: Users },
  { name: 'Digital Transformation', level: 80, category: 'Tech', icon: Lightbulb },
  { name: 'Research & Analysis', level: 92, category: 'Policy', icon: Target }
]

const timeline: TimelineItem[] = [
  {
    year: '2024',
    title: 'Community Bridge Platform',
    description: 'Launched comprehensive platform connecting communities with resources and opportunities.',
    icon: Users,
    category: 'community'
  },
  {
    year: '2023',
    title: 'Policy Innovation Hub',
    description: 'Developed digital platform for collaborative policy development and stakeholder engagement.',
    icon: Target,
    category: 'policy'
  },
  {
    year: '2022',
    title: 'Digital Storytelling Initiative',
    description: 'Pioneered interactive storytelling approaches for community engagement and education.',
    icon: Lightbulb,
    category: 'innovation'
  },
  {
    year: '2021',
    title: 'Accessibility First Movement',
    description: 'Led initiatives to ensure digital accessibility and inclusion across all platforms.',
    icon: CheckCircle,
    category: 'tech'
  }
]

function SkillBar({ skill, index }: { skill: Skill; index: number }) {
  const categoryColors = {
    'Policy': 'from-softRed to-red-500',
    'Community': 'from-warmGold to-yellow-500',
    'Strategy': 'from-tealBlue to-blue-500',
    'Innovation': 'from-green-500 to-emerald-500',
    'Tech': 'from-purple-500 to-indigo-500'
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="mb-6"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-3">
          <div className={`p-2 rounded-lg bg-gradient-to-r ${categoryColors[skill.category as keyof typeof categoryColors]} text-white`}>
            <skill.icon size={16} />
          </div>
          <span className="text-sandBeige font-medium">{skill.name}</span>
        </div>
        <span className="text-tealBlue text-sm font-semibold">{skill.level}%</span>
      </div>
      
      <div className="w-full bg-midnight/50 rounded-full h-2 border border-tealBlue/20">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
          viewport={{ once: true }}
          className={`h-full rounded-full bg-gradient-to-r ${categoryColors[skill.category as keyof typeof categoryColors]} shadow-lg`}
        />
      </div>
    </motion.div>
  )
}

function TimelineItem({ item, index }: { item: TimelineItem; index: number }) {
  const categoryColors = {
    'policy': 'from-softRed to-red-500',
    'community': 'from-warmGold to-yellow-500',
    'tech': 'from-tealBlue to-blue-500',
    'innovation': 'from-green-500 to-emerald-500'
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative"
    >
      {/* Timeline line */}
      {index < timeline.length - 1 && (
        <div className="absolute left-6 top-12 w-0.5 h-16 bg-gradient-to-b from-tealBlue/40 to-transparent" />
      )}
      
      <div className="flex items-start space-x-4">
        {/* Icon */}
        <div className={`p-3 rounded-full bg-gradient-to-r ${categoryColors[item.category]} text-white shadow-lg`}>
          <item.icon size={20} />
        </div>
        
        {/* Content */}
        <div className="flex-1 pt-1">
          <div className="flex items-center space-x-3 mb-2">
            <span className="text-warmGold font-bold text-lg">{item.year}</span>
            <span className="px-3 py-1 bg-midnight/50 text-tealBlue text-xs rounded-full border border-tealBlue/20">
              {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
            </span>
          </div>
          <h3 className="text-xl font-semibold text-sandBeige mb-2">{item.title}</h3>
          <p className="text-tealBlue/80 leading-relaxed">{item.description}</p>
        </div>
      </div>
    </motion.div>
  )
}

export function Approach() {
  return (
    <section className="section bg-gradient-to-b from-tealBlue/10 via-midnight to-midnight">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-sandBeige mb-6">
            My <span className="gradient-text">Approach</span>
          </h2>
          <p className="text-xl text-tealBlue/80 max-w-4xl mx-auto leading-relaxed">
            I believe in the power of thoughtful strategy, community engagement, and innovative thinking. 
            My approach combines deep policy understanding with cutting-edge technology to create lasting impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-sandBeige mb-8 flex items-center">
              <Target className="mr-3 text-warmGold" size={28} />
              Core Competencies
            </h3>
            
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} index={index} />
              ))}
            </div>

            {/* Skills CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <a
                href="/bio"
                className="inline-flex items-center text-warmGold hover:text-softRed font-semibold transition-colors duration-200"
              >
                View Full Skillset
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
            </motion.div>
          </motion.div>

          {/* Timeline Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-sandBeige mb-8 flex items-center">
              <TrendingUp className="mr-3 text-warmGold" size={28} />
              Recent Milestones
            </h3>
            
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <TimelineItem key={item.year} item={item} index={index} />
              ))}
            </div>

            {/* Timeline CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <a
                href="/bio"
                className="inline-flex items-center text-warmGold hover:text-softRed font-semibold transition-colors duration-200"
              >
                Explore Full Journey
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-midnight/80 to-tealBlue/20 rounded-2xl p-8 border border-tealBlue/20">
            <h3 className="text-2xl font-bold text-sandBeige mb-4">
              Ready to Collaborate?
            </h3>
            <p className="text-tealBlue/80 mb-6 max-w-2xl mx-auto">
              Let's discuss how we can work together to create meaningful impact in your community or organization.
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-warmGold to-softRed text-midnight font-bold rounded-xl hover:shadow-glow transition-all duration-300"
            >
              Start a Conversation
              <ArrowRight size={20} className="ml-2" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 