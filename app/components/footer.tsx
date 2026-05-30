'use client'

import Link from 'next/link'
import { Linkedin, Twitter, Github, Mail } from 'lucide-react'

const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/matthew-r-72288390/',
    icon: Linkedin,
  },
  {
    name: 'Twitter',
    url: 'https://x.com/ryramzyx',
    icon: Twitter,
  },
  {
    name: 'GitHub',
    url: 'https://github.com/ryramzy',
    icon: Github,
  }
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-streetBlack border-t border-border pt-16 pb-8">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          {/* Brand */}
          <div className="mb-8 md:mb-0">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-silver rounded flex items-center justify-center">
                <span className="text-streetBlack font-bold font-serif text-sm tracking-tighter">MR</span>
              </div>
              <span className="text-lg font-serif font-bold text-crispWhite tracking-tight">
                Matthew Ramsay
              </span>
            </Link>
            <p className="mt-4 text-silver text-sm max-w-xs font-mono">
              Global Systems Strategist • Cloud Architect • CTO
            </p>
          </div>

          {/* Social & Contact */}
          <div className="flex items-center space-x-6">
            <a href="mailto:mramsay0@gmail.com" className="text-silver hover:text-crispWhite transition-colors duration-300">
              <Mail size={20} />
            </a>
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-silver hover:text-crispWhite transition-colors duration-300"
                aria-label={social.name}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-xs font-mono text-silver opacity-60">
          <div>
            © {currentYear} Matthew Ramsay. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <Link href="/philosophy" className="hover:text-crispWhite transition-colors">Philosophy</Link>
            <Link href="/privacy" className="hover:text-crispWhite transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-crispWhite transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

