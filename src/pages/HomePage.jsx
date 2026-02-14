import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import HowItWorks from '../components/HowItWorks'
import LevelsBadges from '../components/LevelsBadges'
import Leaderboard from '../components/Leaderboard'
import Partners from '../components/Partners'
import Contact from '../components/Contact'
import HelpCenter from '../components/HelpCenter'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'

const HomePage = () => {
  const location = useLocation()

  useEffect(() => {
    // Handle hash navigation when page loads
    if (location.hash) {
      const hash = location.hash.slice(1) // Remove the #
      setTimeout(() => {
        const element = document.getElementById(hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 100) // Small delay to ensure page is rendered
    }
  }, [location.hash])

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <LevelsBadges />
      {/* <Leaderboard /> */}
      {/* <Partners /> */}
      <HelpCenter />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default HomePage

