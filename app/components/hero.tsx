'use client'

import Link from 'next/link'
import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react'
import { Typewriter } from '../components/typewriter'

// Floating shapes component (simplified without motion)
function FloatingShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated circles */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-warmGold/20 rounded-full animate-pulse" />
      <div className="absolute top-40 right-20 w-16 h-16 bg-softRed/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-40 left-1/4 w-12 h-12 bg-tealBlue/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
      
      {/* Animated squares */}
      <div className="absolute top-1/3 right-1/3 w-8 h-8 bg-warmGold/15 rotate-45 animate-pulse" style={{ animationDelay: '3s' }} />
      
      {/* Animated triangles */}
      <div className="absolute bottom-20 right-10 w-0 h-0 border-l-[15px] border-r-[15px] border-b-[26px] border-l-transparent border-r-transparent border-b-softRed/20 animate-pulse" style={{ animationDelay: '4s' }} />
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
        <a
          key={item.label}
          href={item.href}
          className="group relative overflow-hidden rounded-xl bg-midnight/80 backdrop-blur-md border border-tealBlue/20 p-4 hover:border-warmGold/40 transition-all duration-300 shadow-xl hover:scale-105 hover:-translate-y-1"
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
        </a>
      ))}
    </div>
  )
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/hero%20home.jpg)',
        }}
      />
      
      {/* Semi-transparent dark overlay with Gaussian blur */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      
      {/* Additional gradient overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-midnight/80 via-midnight/60 to-midnight/80" />
      
      {/* Floating shapes */}
      <FloatingShapes />
      
      {/* Main content */}
      <div className="container relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Main headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-sandBeige mb-6 drop-shadow-2xl animate-fade-in">
            Matthew Ryland
          </h1>
          
          {/* Subtitle with typewriter effect */}
          <div className="mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-2xl md:text-3xl font-medium text-tealBlue mb-4 drop-shadow-lg">
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
            <p className="text-lg md:text-xl text-sandBeige/90 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
              Bridging gaps between communities, information, and opportunities through 
              storytelling, innovation, and public service.
            </p>
          </div>

          {/* Contact cards */}
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <ContactCards />
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="hover:scale-105 transition-transform duration-300">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-warmGold to-softRed text-midnight font-bold rounded-xl hover:shadow-glow transition-all duration-300 text-lg shadow-xl"
              >
                Let's Connect
                <ArrowRight size={20} className="ml-2" />
              </Link>
            </div>
            
            <div className="hover:scale-105 transition-transform duration-300">
              <Link
                href="/bio"
                className="inline-flex items-center px-8 py-4 border-2 border-warmGold text-warmGold font-semibold rounded-xl hover:bg-warmGold hover:text-midnight transition-all duration-300 text-lg backdrop-blur-sm bg-midnight/20 shadow-xl"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-fade-in" style={{ animationDelay: '1s' }}>
            <div className="w-6 h-10 border-2 border-tealBlue/40 rounded-full flex justify-center animate-bounce">
              <div className="w-1 h-3 bg-warmGold rounded-full mt-2" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 