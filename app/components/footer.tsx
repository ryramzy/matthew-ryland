function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="bg-midnight/80 backdrop-blur-sm border-t border-tealBlue/20">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-sandBeige mb-4">Contact</h3>
            <div className="space-y-2 text-tealBlue">
              <p>Sacramento, California</p>
              <a
                href="mailto:mramsay0@gmail.com"
                className="hover:text-warmGold transition-colors"
              >
                mramsay0@gmail.com
              </a>
              <p>
                <a
                  href="tel:+19164614837"
                  className="hover:text-warmGold transition-colors"
                >
                  (916) 461-4837
                </a>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="text-lg font-semibold text-sandBeige mb-4">Quick Links</h3>
            <ul className="space-y-2 text-tealBlue">
              <li>
                <a href="/" className="hover:text-warmGold transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/bio" className="hover:text-warmGold transition-colors">
                  Bio
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:text-warmGold transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-warmGold transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right">
            <h3 className="text-lg font-semibold text-sandBeige mb-4">Connect</h3>
            <ul className="space-y-2 text-tealBlue">
              <li>
                <a
                  href="https://www.linkedin.com/in/matthew-r-72288390/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-warmGold transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/rammases2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-warmGold transition-colors"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@ryramzy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-warmGold transition-colors"
                >
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-tealBlue/20 text-center">
          <p className="text-tealBlue">
            © {new Date().getFullYear()} Matthew Ryland. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
