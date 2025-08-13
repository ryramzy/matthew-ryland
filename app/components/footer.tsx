'use client'

import Link from 'next/link'
import { 
  Linkedin, 
  Twitter, 
  Youtube, 
  Github, 
  Mail, 
  Phone, 
  MapPin,
  ArrowUp,
  Heart
} from 'lucide-react'

const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/matthew-r-72288390/',
    icon: Linkedin,
    color: 'from-blue-600 to-blue-700'
  },
  {
    name: 'Twitter',
    url: 'https://x.com/rammases2',
    icon: Twitter,
    color: 'from-sky-500 to-blue-600'
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/@ryramzy',
    icon: Youtube,
    color: 'from-red-600 to-red-700'
  },
  {
    name: 'GitHub',
    url: 'https://github.com/ryramzy',
    icon: Github,
    color: 'from-gray-700 to-gray-800'
  }
]

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'Bio', href: '/bio' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' }
]

const contactInfo = [
  {
    icon: MapPin,
    label: 'Location',
    value: 'Sacramento, California',
    href: '#'
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'mramsay0@gmail.com',
    href: 'mailto:mramsay0@gmail.com'
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+12092674701',
    href: 'tel:+12092674701'
  }
]

function ScrollToTop() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 p-3 bg-gradient-to-r from-warmGold to-softRed text-midnight rounded-full shadow-lg hover:shadow-glow transition-all duration-300 z-40 hover:scale-110 active:scale-95"
      aria-label="Scroll to top"
    >
      <ArrowUp size={20} />
    </button>
  )
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <>
      <footer className="relative bg-gradient-to-b from-midnight via-midnight/95 to-tealBlue/20 border-t border-tealBlue/20 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-r from-warmGold/5 via-transparent to-softRed/5 opacity-30" />
        
        <div className="container relative z-10">
          <div className="py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {/* Brand Section */}
              <div className="lg:col-span-1 animate-fade-in">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-warmGold to-softRed rounded-lg flex items-center justify-center">
                    <span className="text-midnight font-bold text-lg">MR</span>
                  </div>
                  <span className="text-2xl font-serif font-bold text-sandBeige">
                    Matthew Ryland
                  </span>
                </div>
                <p className="text-tealBlue/80 text-sm leading-relaxed mb-6">
                  Building bridges between communities, information, and opportunities through 
                  storytelling, innovation, and public service.
                </p>
                
                {/* Social Links */}
                <div className="flex space-x-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2 rounded-lg bg-gradient-to-r ${social.color} text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 active:scale-95`}
                      aria-label={social.name}
                    >
                      <social.icon size={18} />
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div className="lg:col-span-1 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <h3 className="text-lg font-semibold text-sandBeige mb-6">Quick Links</h3>
                <ul className="space-y-3">
                  {quickLinks.map((link, index) => (
                    <li key={link.name} className="animate-fade-in" style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
                      <Link
                        href={link.href}
                        className="text-tealBlue/80 hover:text-warmGold transition-colors duration-200 text-sm"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Information */}
              <div className="lg:col-span-1 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <h3 className="text-lg font-semibold text-sandBeige mb-6">Contact</h3>
                <ul className="space-y-3">
                  {contactInfo.map((info, index) => (
                    <li key={info.label} className="animate-fade-in" style={{ animationDelay: `${0.3 + index * 0.1}s` }}>
                      <a
                        href={info.href}
                        className="flex items-center space-x-3 text-tealBlue/80 hover:text-warmGold transition-colors duration-200 text-sm group"
                      >
                        <div className="p-1.5 rounded-md bg-tealBlue/20 group-hover:bg-warmGold/20 transition-colors duration-200">
                          <info.icon size={14} className="text-tealBlue group-hover:text-warmGold" />
                        </div>
                        <span>{info.value}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Newsletter Signup */}
              <div className="lg:col-span-1 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <h3 className="text-lg font-semibold text-sandBeige mb-6">Stay Updated</h3>
                <p className="text-tealBlue/80 text-sm mb-4">
                  Get insights on community building and innovation delivered to your inbox.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 bg-midnight/50 border border-tealBlue/20 rounded-lg text-sandBeige placeholder-tealBlue/60 focus:border-warmGold focus:outline-none text-sm transition-colors duration-200"
                  />
                  <button className="w-full px-4 py-2 bg-gradient-to-r from-warmGold to-softRed text-midnight font-semibold rounded-lg hover:shadow-glow transition-all duration-300 text-sm">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="pt-8 border-t border-tealBlue/20 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <div className="flex items-center space-x-2 text-tealBlue/60 text-sm">
                  <span>© {currentYear} Matthew Ryland. All rights reserved.</span>
                  <span>•</span>
                  <span>Made with</span>
                  <Heart size={14} className="text-softRed" />
                  <span>for community impact</span>
                </div>
                
                <div className="flex items-center space-x-6 text-sm">
                  <Link href="/privacy" className="text-tealBlue/60 hover:text-warmGold transition-colors duration-200">
                    Privacy Policy
                  </Link>
                  <Link href="/terms" className="text-tealBlue/60 hover:text-warmGold transition-colors duration-200">
                    Terms of Service
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </>
  )
}
