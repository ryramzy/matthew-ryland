import Link from 'next/link'

// Header component for Matthew Ryland's website
export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-midnight/80 backdrop-blur-sm border-b border-tealBlue/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold text-sandBeige">Matthew Ryland</span>
          </Link>

          {/* Navigation */}
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

          {/* Call Button */}
          <div className="flex items-center">
            <a
              href="tel:+19164614837"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-sandBeige bg-softRed hover:bg-warmGold transition-colors"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
    </header>
  )
} 