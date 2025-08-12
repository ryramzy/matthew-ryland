'use client'

import { motion } from 'framer-motion'
import { 
  MapPin, 
  Mail, 
  Phone, 
  Calendar, 
  Award, 
  Users, 
  Target, 
  Lightbulb,
  TrendingUp,
  CheckCircle,
  ExternalLink,
  ArrowRight
} from 'lucide-react'
import { LucideIcon } from 'lucide-react'

interface Skill {
  name: string
  level: number
  category: string
  icon: LucideIcon
}

interface Experience {
  year: string
  title: string
  organization: string
  description: string
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

const experience: Experience[] = [
  {
    year: '2024',
    title: 'Community Bridge Platform',
    organization: 'Independent Project',
    description: 'Launched comprehensive platform connecting communities with resources and opportunities through innovative storytelling and data visualization.',
    category: 'community'
  },
  {
    year: '2023',
    title: 'Policy Innovation Hub',
    organization: 'Digital Policy Initiative',
    description: 'Developed digital platform for collaborative policy development, featuring real-time collaboration tools and stakeholder engagement systems.',
    category: 'policy'
  },
  {
    year: '2022',
    title: 'Digital Storytelling Initiative',
    organization: 'Community Engagement Project',
    description: 'Pioneered interactive storytelling approaches for community engagement and education, bridging traditional narratives with modern technology.',
    category: 'innovation'
  },
  {
    year: '2021',
    title: 'Accessibility First Movement',
    organization: 'Digital Inclusion Coalition',
    description: 'Led initiatives to ensure digital accessibility and inclusion across all platforms, advocating for WCAG 2.1 AA compliance.',
    category: 'tech'
  }
]

function SkillChip({ skill, index }: { skill: Skill; index: number }) {
  const categoryColors = {
    'Policy': 'from-softRed to-red-500',
    'Community': 'from-warmGold to-yellow-500',
    'Strategy': 'from-tealBlue to-blue-500',
    'Innovation': 'from-green-500 to-emerald-500',
    'Tech': 'from-purple-500 to-indigo-500'
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, y: -2 }}
      className="relative group"
    >
      <div className={`px-4 py-2 rounded-full bg-gradient-to-r ${categoryColors[skill.category as keyof typeof categoryColors]} text-white font-medium text-sm shadow-lg hover:shadow-xl transition-all duration-300`}>
        {skill.name}
        <span className="ml-2 text-xs opacity-80">({skill.level}%)</span>
      </div>
      
      {/* Hover glow effect */}
      <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${categoryColors[skill.category as keyof typeof categoryColors]} opacity-20 blur-lg group-hover:opacity-40 transition-opacity duration-300`} />
    </motion.div>
  )
}

function ExperienceTimeline({ experience, index }: { experience: Experience; index: number }) {
  const categoryColors = {
    'policy': 'from-softRed to-red-500',
    'community': 'from-warmGold to-yellow-500',
    'tech': 'from-tealBlue to-blue-500',
    'innovation': 'from-green-500 to-emerald-500'
  }

  const categoryIcons = {
    'policy': Target,
    'community': Users,
    'tech': CheckCircle,
    'innovation': Lightbulb
  }

  const IconComponent = categoryIcons[experience.category]

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative"
    >
      {/* Timeline line */}
      {index < 3 && (
        <div className="absolute left-6 top-16 w-0.5 h-20 bg-gradient-to-b from-tealBlue/40 to-transparent" />
      )}
      
      <div className="flex items-start space-x-4">
        {/* Icon */}
        <div className={`p-3 rounded-full bg-gradient-to-r ${categoryColors[experience.category]} text-white shadow-lg`}>
          <IconComponent size={20} />
        </div>
        
        {/* Content */}
        <div className="flex-1 pt-1">
          <div className="flex items-center space-x-3 mb-2">
            <span className="text-warmGold font-bold text-lg">{experience.year}</span>
            <span className="px-3 py-1 bg-midnight/50 text-tealBlue text-xs rounded-full border border-tealBlue/20">
              {experience.category.charAt(0).toUpperCase() + experience.category.slice(1)}
            </span>
          </div>
          <h3 className="text-xl font-semibold text-sandBeige mb-1">{experience.title}</h3>
          <p className="text-warmGold/80 text-sm mb-2">{experience.organization}</p>
          <p className="text-tealBlue/80 leading-relaxed">{experience.description}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default function BioPage() {
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
              About <span className="gradient-text">Matthew Ryland</span>
            </h1>
            <p className="text-xl text-tealBlue/80 max-w-3xl mx-auto leading-relaxed">
              A passionate advocate for community empowerment, policy innovation, and digital transformation. 
              I believe in the power of thoughtful strategy and technology to create lasting positive impact.
            </p>
          </motion.div>

          {/* Main Bio Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-6xl mx-auto"
          >
            <div className="bg-gradient-to-br from-midnight/90 to-tealBlue/20 rounded-3xl border border-tealBlue/20 overflow-hidden shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8 lg:p-12">
                {/* Photo Section */}
                <div className="lg:col-span-1">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="relative"
                  >
                    <div className="w-full aspect-square rounded-2xl bg-gradient-to-br from-tealBlue/30 to-warmGold/20 flex items-center justify-center overflow-hidden">
                      <div className="text-center">
                        <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-warmGold to-softRed flex items-center justify-center">
                          <span className="text-4xl font-bold text-midnight">MR</span>
                        </div>
                        <p className="text-tealBlue/60 text-sm">Professional Photo</p>
                      </div>
                    </div>
                    
                    {/* Contact Info */}
                    <div className="mt-6 space-y-3">
                      <div className="flex items-center space-x-3 text-tealBlue/80">
                        <MapPin size={16} className="text-warmGold" />
                        <span>Sacramento, California</span>
                      </div>
                      <div className="flex items-center space-x-3 text-tealBlue/80">
                        <Mail size={16} className="text-warmGold" />
                        <span>mramsay0@gmail.com</span>
                      </div>
                      <div className="flex items-center space-x-3 text-tealBlue/80">
                        <Phone size={16} className="text-warmGold" />
                        <span>+12092674701</span>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Bio Content */}
                <div className="lg:col-span-2">
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    <h2 className="text-3xl font-bold text-sandBeige mb-6">
                      Building Bridges Between Communities & Opportunities
                    </h2>
                    
                    <div className="space-y-4 text-tealBlue/80 leading-relaxed">
                      <p>
                        I'm a dedicated professional focused on creating meaningful connections between communities, 
                        information, and opportunities. With a background spanning policy analysis, community building, 
                        and digital innovation, I've developed a unique approach that combines strategic thinking with 
                        practical implementation.
                      </p>
                      
                      <p>
                        My work centers around three core principles: understanding the human element in every challenge, 
                        leveraging technology to amplify human potential, and ensuring that solutions are accessible and 
                        inclusive for all members of our communities.
                      </p>
                      
                      <p>
                        Whether it's developing digital platforms for community engagement, creating policy frameworks 
                        that promote innovation, or building bridges between different stakeholder groups, I'm committed 
                        to solutions that create lasting positive impact.
                      </p>
                    </div>

                    {/* Skills Section */}
                    <div className="mt-8">
                      <h3 className="text-xl font-semibold text-sandBeige mb-4">Core Competencies</h3>
                      <div className="flex flex-wrap gap-3">
                        {skills.map((skill, index) => (
                          <SkillChip key={skill.name} skill={skill} index={index} />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-sandBeige mb-6">
              Professional <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-xl text-tealBlue/80 max-w-3xl mx-auto">
              A timeline of key milestones and achievements in my career
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-8">
            {experience.map((exp, index) => (
              <ExperienceTimeline key={exp.year} experience={exp} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-midnight/80 to-tealBlue/20 rounded-2xl p-8 border border-tealBlue/20">
              <h3 className="text-2xl font-bold text-sandBeige mb-4">
                Ready to Work Together?
              </h3>
              <p className="text-tealBlue/80 mb-6 max-w-2xl mx-auto">
                Let's discuss how we can collaborate to create meaningful impact in your community or organization.
              </p>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-warmGold to-softRed text-midnight font-bold rounded-xl hover:shadow-glow transition-all duration-300"
              >
                Get in Touch
                <ArrowRight size={20} className="ml-2" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 