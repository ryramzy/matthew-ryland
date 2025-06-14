import Link from 'next/link'
import { useState } from 'react'

// Header component for Matthew Ryland's website
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-midnight/80 backdrop-blur-sm border-b border-tealBlue/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold text-sandBeige">Matthew Ryland</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-sandBeige hover:text-warmGold transition-colors">
              Home
            </Link>
            <Link href="/bio" className="text-sandBeige hover:text-warmGold transition-colors">
              Bio
            </Link>
            <Link href="/blog" className="text-sandBeige hover:text-warmGold transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="text-sandBeige hover:text-warmGold transition-colors">
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-sandBeige hover:text-warmGold transition-colors"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Call Button - Hidden on Mobile */}
          <div className="hidden md:flex items-center">
            <a
              href="tel:+19164614837"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-sandBeige bg-softRed hover:bg-warmGold transition-colors"
            >
              Call Now
            </a>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                href="/"
                className="block px-3 py-2 rounded-md text-base font-medium text-sandBeige hover:text-warmGold hover:bg-midnight/50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/bio"
                className="block px-3 py-2 rounded-md text-base font-medium text-sandBeige hover:text-warmGold hover:bg-midnight/50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Bio
              </Link>
              <Link
                href="/blog"
                className="block px-3 py-2 rounded-md text-base font-medium text-sandBeige hover:text-warmGold hover:bg-midnight/50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 rounded-md text-base font-medium text-sandBeige hover:text-warmGold hover:bg-midnight/50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <a
                href="tel:+19164614837"
                className="block px-3 py-2 rounded-md text-base font-medium text-sandBeige bg-softRed hover:bg-warmGold transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Call Now
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
} 