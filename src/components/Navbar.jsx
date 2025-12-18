import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/GREEN LOGO.png'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('')
  const location = useLocation()

  useEffect(() => {
    // Check if we're on privacy policy page
    if (location.pathname === '/privacy-policy') {
      setActiveLink('privacy-policy')
      return
    }

    const handleScroll = () => {
      const sections = ['features', 'how-it-works', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveLink(section)
            return
          }
        }
      }

      // If at the top, clear active link
      if (window.scrollY < 100) {
        setActiveLink('')
      }
    }

    // Check hash on mount
    const hash = window.location.hash.slice(1)
    if (hash) {
      setActiveLink(hash)
    }

    const handleHashChange = () => {
      const hash = window.location.hash.slice(1)
      setActiveLink(hash)
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('hashchange', handleHashChange)
    handleScroll() // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [location.pathname])

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-white/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3">
            <Link 
              to="/"
              onClick={(e) => {
                if (location.pathname === '/') {
                  e.preventDefault()
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }
              }}
              className="relative cursor-pointer hover:opacity-80 transition-opacity"
            >
              <img 
                src={logo} 
                alt="ScrapDig Logo" 
                className="h-12 w-auto object-contain"
              />
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#features" 
              className={`transition font-medium text-sm ${
                activeLink === 'features' 
                  ? 'text-primary font-semibold border-b-2 border-primary pb-1' 
                  : 'text-gray-800 hover:text-primary'
              }`}
            >
              Features
            </a>
            <a 
              href="#how-it-works" 
              className={`transition font-medium text-sm ${
                activeLink === 'how-it-works' 
                  ? 'text-primary font-semibold border-b-2 border-primary pb-1' 
                  : 'text-gray-800 hover:text-primary'
              }`}
            >
              How It Works
            </a>
            <a 
              href="#contact" 
              className={`transition font-medium text-sm ${
                activeLink === 'contact' 
                  ? 'text-primary font-semibold border-b-2 border-primary pb-1' 
                  : 'text-gray-800 hover:text-primary'
              }`}
            >
              Contact
            </a>
            <Link 
              to="/privacy-policy" 
              className={`transition font-medium text-sm ${
                activeLink === 'privacy-policy' 
                  ? 'text-primary font-semibold border-b-2 border-primary pb-1' 
                  : 'text-gray-800 hover:text-primary'
              }`}
            >
              Privacy Policy
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-800 hover:bg-white/50 hover:text-primary transition"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2 backdrop-blur-md bg-white/90 rounded-lg mt-2 mb-2">
            <a 
              href="#features" 
              className={`block px-4 py-3 transition rounded-lg font-medium ${
                activeLink === 'features' 
                  ? 'bg-primary/20 text-primary font-semibold' 
                  : 'text-gray-800 hover:bg-primary/10 hover:text-primary'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#how-it-works" 
              className={`block px-4 py-3 transition rounded-lg font-medium ${
                activeLink === 'how-it-works' 
                  ? 'bg-primary/20 text-primary font-semibold' 
                  : 'text-gray-800 hover:bg-primary/10 hover:text-primary'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="#contact" 
              className={`block px-4 py-3 transition rounded-lg font-medium ${
                activeLink === 'contact' 
                  ? 'bg-primary/20 text-primary font-semibold' 
                  : 'text-gray-800 hover:bg-primary/10 hover:text-primary'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <Link 
              to="/privacy-policy" 
              className={`block px-4 py-3 transition rounded-lg font-medium ${
                activeLink === 'privacy-policy' 
                  ? 'bg-primary/20 text-primary font-semibold' 
                  : 'text-gray-800 hover:bg-primary/10 hover:text-primary'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Privacy Policy
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar

