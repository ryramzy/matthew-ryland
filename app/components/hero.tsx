'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react'
import { Typewriter } from './typewriter'

// Floating shapes component
function FloatingShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated circles */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 bg-warmGold/20 rounded-full"
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-40 right-20 w-16 h-16 bg-softRed/20 rounded-full"
        animate={{
          y: [0, 15, 0],
          x: [0, -15, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-40 left-1/4 w-12 h-12 bg-tealBlue/20 rounded-full"
        animate={{
          y: [0, -25, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Animated squares */}
      <motion.div
        className="absolute top-1/3 right-1/3 w-8 h-8 bg-warmGold/15 rotate-45"
        animate={{
          rotate: [45, 225, 45],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Animated triangles */}
      <motion.div
        className="absolute bottom-20 right-10 w-0 h-0 border-l-[15px] border-r-[15px] border-b-[26px] border-l-transparent border-r-transparent border-b-softRed/20"
        animate={{
          y: [0, -15, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  )
}

// Contact info cards
function ContactCards() {
  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+12092674701',
      href: 'tel:+12092674701',
      color: 'from-warmGold to-softRed'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'mramsay0@gmail.com',
      href: 'mailto:mramsay0@gmail.com',
      color: 'from-tealBlue to-blue-600'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Sacramento, CA',
      href: '#',
      color: 'from-green-500 to-teal-500'
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
      {contactInfo.map((item, index) => (
        <motion.a
          key={item.label}
          href={item.href}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 + index * 0.1 }}
          whileHover={{ scale: 1.05, y: -5 }}
          className="group relative overflow-hidden rounded-xl bg-midnight/50 backdrop-blur-sm border border-tealBlue/20 p-4 hover:border-warmGold/40 transition-all duration-300"
        >
          <div className="flex items-center space-x-3">
            <div className={`p-2 rounded-lg bg-gradient-to-r ${item.color} text-white`}>
              <item.icon size={20} />
            </div>
            <div>
              <p className="text-xs text-tealBlue font-medium">{item.label}</p>
              <p className="text-sm text-sandBeige font-semibold group-hover:text-warmGold transition-colors">
                {item.value}
              </p>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-warmGold/5 to-softRed/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.a>
      ))}
    </div>
  )
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-midnight via-tealBlue/20 to-midnight">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-midnight/80 via-midnight/60 to-midnight/80" />
      
      {/* Floating shapes */}
      <FloatingShapes />
      
      {/* Main content */}
      <div className="container relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-sandBeige mb-6"
          >
            Matthew Ryland
          </motion.h1>
          
          {/* Subtitle with typewriter effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-medium text-tealBlue mb-4">
              I'm a{' '}
              <span className="text-warmGold font-semibold">
                <Typewriter 
                  words={['Builder', 'Strategist', 'Advocate', 'Innovator']}
                  loop={true}
                  cursor
                  cursorStyle='|'
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </span>
            </h2>
            <p className="text-lg md:text-xl text-sandBeige/80 max-w-3xl mx-auto leading-relaxed">
              Bridging gaps between communities, information, and opportunities through 
              storytelling, innovation, and public service.
            </p>
          </motion.div>

          {/* Contact cards */}
          <ContactCards />

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-warmGold to-softRed text-midnight font-bold rounded-xl hover:shadow-glow transition-all duration-300 text-lg"
              >
                Let's Connect
                <ArrowRight size={20} className="ml-2" />
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/bio"
                className="inline-flex items-center px-8 py-4 border-2 border-warmGold text-warmGold font-semibold rounded-xl hover:bg-warmGold hover:text-midnight transition-all duration-300 text-lg"
              >
                Learn More
              </Link>
            </motion.div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-tealBlue/40 rounded-full flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-warmGold rounded-full mt-2"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 