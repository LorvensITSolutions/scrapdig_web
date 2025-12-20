import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import logo from '../assets/logo_scrapdig_web.png'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('')
  const location = useLocation()
  const navigate = useNavigate()

  // Handle section navigation - navigate to home if on different route
  const handleSectionClick = (e, sectionId) => {
    e.preventDefault()
    
    if (location.pathname !== '/') {
      // If not on home page, navigate to home first
      navigate('/')
      // Wait for navigation, then scroll to section and update hash
      setTimeout(() => {
        const element = document.getElementById(sectionId)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
          // Update URL hash
          window.history.pushState(null, '', `/#${sectionId}`)
        }
      }, 200)
    } else {
      // If already on home page, just scroll
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        // Update URL hash
        window.history.pushState(null, '', `#${sectionId}`)
      }
    }
  }

  useEffect(() => {
    // Check if we're on policy pages
    if (location.pathname === '/privacy-policy') {
      setActiveLink('privacy-policy')
      return
    }
    if (location.pathname === '/refund-cancellation-policy') {
      setActiveLink('refund-cancellation-policy')
      return
    }

    const handleScroll = () => {
      const sections = ['features', 'how-it-works', 'levels-badges', 'achievements', 'leaderboard', 'partners', 'contact']
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
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-gradient-to-r from-slate-900/95 via-emerald-950/95 to-slate-900/95 border-b border-emerald-500/30 shadow-lg">
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
              onClick={(e) => handleSectionClick(e, 'features')}
              className={`transition font-medium text-sm ${
                activeLink === 'features' 
                  ? 'text-emerald-400 font-semibold border-b-2 border-emerald-400 pb-1' 
                  : 'text-gray-200 hover:text-emerald-400'
              }`}
            >
              Features
            </a>
            <a 
              href="#how-it-works" 
              onClick={(e) => handleSectionClick(e, 'how-it-works')}
              className={`transition font-medium text-sm ${
                activeLink === 'how-it-works' 
                  ? 'text-emerald-400 font-semibold border-b-2 border-emerald-400 pb-1' 
                  : 'text-gray-200 hover:text-emerald-400'
              }`}
            >
              How It Works
            </a>
            <a 
              href="#levels-badges" 
              onClick={(e) => handleSectionClick(e, 'levels-badges')}
              className={`transition font-medium text-sm ${
                activeLink === 'levels-badges' 
                  ? 'text-emerald-400 font-semibold border-b-2 border-emerald-400 pb-1' 
                  : 'text-gray-200 hover:text-emerald-400'
              }`}
            >
              Levels
            </a>

            <a 
              href="#leaderboard" 
              onClick={(e) => handleSectionClick(e, 'leaderboard')}
              className={`transition font-medium text-sm ${
                activeLink === 'leaderboard' 
                  ? 'text-emerald-400 font-semibold border-b-2 border-emerald-400 pb-1' 
                  : 'text-gray-200 hover:text-emerald-400'
              }`}
            >
              Leaderboard
            </a>
            <a 
              href="#partners" 
              onClick={(e) => handleSectionClick(e, 'partners')}
              className={`transition font-medium text-sm ${
                activeLink === 'partners' 
                  ? 'text-emerald-400 font-semibold border-b-2 border-emerald-400 pb-1' 
                  : 'text-gray-200 hover:text-emerald-400'
              }`}
            >
              Partners
            </a>
            <a 
              href="#contact" 
              onClick={(e) => handleSectionClick(e, 'contact')}
              className={`transition font-medium text-sm ${
                activeLink === 'contact' 
                  ? 'text-emerald-400 font-semibold border-b-2 border-emerald-400 pb-1' 
                  : 'text-gray-200 hover:text-emerald-400'
              }`}
            >
              Contact
            </a>
            <Link 
              to="/privacy-policy" 
              className={`transition font-medium text-sm ${
                activeLink === 'privacy-policy' 
                  ? 'text-emerald-400 font-semibold border-b-2 border-emerald-400 pb-1' 
                  : 'text-gray-200 hover:text-emerald-400'
              }`}
            >
              Privacy Policy
            </Link>
            <Link 
              to="/refund-cancellation-policy" 
              className={`transition font-medium text-sm ${
                activeLink === 'refund-cancellation-policy' 
                  ? 'text-emerald-400 font-semibold border-b-2 border-emerald-400 pb-1' 
                  : 'text-gray-200 hover:text-emerald-400'
              }`}
            >
              Refund Policy
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-200 hover:bg-emerald-500/20 hover:text-emerald-400 transition"
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
          <div className="md:hidden py-4 space-y-2 backdrop-blur-md bg-slate-800/95 border border-emerald-500/30 rounded-lg mt-2 mb-2">
            <a 
              href="#features" 
              onClick={(e) => {
                handleSectionClick(e, 'features')
                setIsMenuOpen(false)
              }}
              className={`block px-4 py-3 transition rounded-lg font-medium ${
                activeLink === 'features' 
                  ? 'bg-emerald-500/20 text-emerald-400 font-semibold' 
                  : 'text-gray-200 hover:bg-emerald-500/10 hover:text-emerald-400'
              }`}
            >
              Features
            </a>
            <a 
              href="#how-it-works" 
              onClick={(e) => {
                handleSectionClick(e, 'how-it-works')
                setIsMenuOpen(false)
              }}
              className={`block px-4 py-3 transition rounded-lg font-medium ${
                activeLink === 'how-it-works' 
                  ? 'bg-emerald-500/20 text-emerald-400 font-semibold' 
                  : 'text-gray-200 hover:bg-emerald-500/10 hover:text-emerald-400'
              }`}
            >
              How It Works
            </a>
            <a 
              href="#levels-badges" 
              onClick={(e) => {
                handleSectionClick(e, 'levels-badges')
                setIsMenuOpen(false)
              }}
              className={`block px-4 py-3 transition rounded-lg font-medium ${
                activeLink === 'levels-badges' 
                  ? 'bg-emerald-500/20 text-emerald-400 font-semibold' 
                  : 'text-gray-200 hover:bg-emerald-500/10 hover:text-emerald-400'
              }`}
            >
              Levels
            </a>

            <a 
              href="#leaderboard" 
              onClick={(e) => {
                handleSectionClick(e, 'leaderboard')
                setIsMenuOpen(false)
              }}
              className={`block px-4 py-3 transition rounded-lg font-medium ${
                activeLink === 'leaderboard' 
                  ? 'bg-emerald-500/20 text-emerald-400 font-semibold' 
                  : 'text-gray-200 hover:bg-emerald-500/10 hover:text-emerald-400'
              }`}
            >
              Leaderboard
            </a>
            <a 
              href="#partners" 
              onClick={(e) => {
                handleSectionClick(e, 'partners')
                setIsMenuOpen(false)
              }}
              className={`block px-4 py-3 transition rounded-lg font-medium ${
                activeLink === 'partners' 
                  ? 'bg-emerald-500/20 text-emerald-400 font-semibold' 
                  : 'text-gray-200 hover:bg-emerald-500/10 hover:text-emerald-400'
              }`}
            >
              Partners
            </a>
            <a 
              href="#contact" 
              onClick={(e) => {
                handleSectionClick(e, 'contact')
                setIsMenuOpen(false)
              }}
              className={`block px-4 py-3 transition rounded-lg font-medium ${
                activeLink === 'contact' 
                  ? 'bg-emerald-500/20 text-emerald-400 font-semibold' 
                  : 'text-gray-200 hover:bg-emerald-500/10 hover:text-emerald-400'
              }`}
            >
              Contact
            </a>
            <Link 
              to="/privacy-policy" 
              className={`block px-4 py-3 transition rounded-lg font-medium ${
                activeLink === 'privacy-policy' 
                  ? 'bg-emerald-500/20 text-emerald-400 font-semibold' 
                  : 'text-gray-200 hover:bg-emerald-500/10 hover:text-emerald-400'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Privacy Policy
            </Link>
            <Link 
              to="/refund-cancellation-policy" 
              className={`block px-4 py-3 transition rounded-lg font-medium ${
                activeLink === 'refund-cancellation-policy' 
                  ? 'bg-emerald-500/20 text-emerald-400 font-semibold' 
                  : 'text-gray-200 hover:bg-emerald-500/10 hover:text-emerald-400'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Refund Policy
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar

