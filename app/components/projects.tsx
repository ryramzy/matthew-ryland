'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, ArrowRight, Calendar, Tag } from 'lucide-react'

interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  date: string
  githubUrl?: string
  liveUrl?: string
  featured?: boolean
}

const projects: Project[] = [
  {
    id: 1,
    title: "Community Bridge Platform",
    description: "A comprehensive platform connecting local communities with resources, opportunities, and information through innovative storytelling and data visualization.",
    image: "/api/placeholder/400/250",
    tags: ["React", "Node.js", "MongoDB", "Data Visualization"],
    date: "2024",
    githubUrl: "https://github.com/ryramzy",
    liveUrl: "#",
    featured: true
  },
  {
    id: 2,
    title: "Policy Innovation Hub",
    description: "Digital platform for collaborative policy development, featuring real-time collaboration tools and stakeholder engagement systems.",
    image: "/api/placeholder/400/250",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Real-time"],
    date: "2024",
    githubUrl: "https://github.com/ryramzy",
    liveUrl: "#",
    featured: true
  },
  {
    id: 3,
    title: "Accessibility First CMS",
    description: "Content management system built with accessibility as a core principle, ensuring inclusive digital experiences for all users.",
    image: "/api/placeholder/400/250",
    tags: ["Accessibility", "React", "WCAG 2.1", "CMS"],
    date: "2023",
    githubUrl: "https://github.com/ryramzy",
    liveUrl: "#"
  },
  {
    id: 4,
    title: "Digital Storytelling Engine",
    description: "Interactive storytelling platform that combines narrative techniques with modern web technologies for engaging user experiences.",
    image: "/api/placeholder/400/250",
    tags: ["Storytelling", "WebGL", "Interactive", "Narrative"],
    date: "2023",
    githubUrl: "https://github.com/ryramzy",
    liveUrl: "#"
  }
]

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-midnight/90 to-tealBlue/20 border border-tealBlue/20 hover:border-warmGold/40 transition-all duration-500"
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <div className="w-full h-full bg-gradient-to-br from-tealBlue/30 to-warmGold/20 flex items-center justify-center">
          <span className="text-tealBlue/60 text-sm">Project Image</span>
        </div>
        
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Featured badge */}
        {project.featured && (
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-gradient-to-r from-warmGold to-softRed text-midnight text-xs font-bold rounded-full">
              Featured
            </span>
          </div>
        )}
        
        {/* Action buttons */}
        <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          {project.githubUrl && (
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-midnight/80 rounded-lg text-sandBeige hover:text-warmGold transition-colors"
            >
              <Github size={16} />
            </motion.a>
          )}
          {project.liveUrl && (
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-midnight/80 rounded-lg text-sandBeige hover:text-warmGold transition-colors"
            >
              <ExternalLink size={16} />
            </motion.a>
          )}
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        {/* Date */}
        <div className="flex items-center text-xs text-tealBlue/60 mb-3">
          <Calendar size={14} className="mr-1" />
          {project.date}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-sandBeige mb-3 group-hover:text-warmGold transition-colors duration-300">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-tealBlue/80 text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="px-3 py-1 bg-tealBlue/20 text-tealBlue text-xs rounded-full border border-tealBlue/30 hover:bg-warmGold/20 hover:border-warmGold/40 hover:text-warmGold transition-all duration-200"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* View Project Button */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="inline-flex items-center text-warmGold hover:text-softRed font-medium text-sm transition-colors duration-200"
        >
          View Project
          <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform duration-200" />
        </motion.div>
      </div>

      {/* Hover glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-warmGold/5 to-softRed/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
    </motion.div>
  )
}

export function Projects() {
  const featuredProjects = projects.filter(p => p.featured)
  const otherProjects = projects.filter(p => !p.featured)

  return (
    <section className="section bg-gradient-to-b from-midnight via-midnight/95 to-tealBlue/10">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-sandBeige mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-tealBlue/80 max-w-3xl mx-auto leading-relaxed">
            Explore my latest work in community building, policy innovation, and digital storytelling. 
            Each project represents a commitment to bridging gaps and creating meaningful impact.
          </p>
        </motion.div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Other Projects Grid */}
        {otherProjects.length > 0 && (
          <>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h3 className="text-2xl font-semibold text-sandBeige mb-4">
                More Projects
              </h3>
              <p className="text-tealBlue/70">
                Additional work showcasing various skills and approaches
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </>
        )}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-warmGold to-softRed text-midnight font-bold rounded-xl hover:shadow-glow transition-all duration-300 text-lg"
          >
            Let's Build Something Together
            <ArrowRight size={20} className="ml-2" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
} 