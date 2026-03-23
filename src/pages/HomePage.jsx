import React, { Suspense, lazy, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ScrollToTop from '../components/ScrollToTop'

const Features = lazy(() => import('../components/Features'))
const HowItWorks = lazy(() => import('../components/HowItWorks'))
const LevelsBadges = lazy(() => import('../components/LevelsBadges'))
const HelpCenter = lazy(() => import('../components/HelpCenter'))
const Contact = lazy(() => import('../components/Contact'))
const Footer = lazy(() => import('../components/Footer'))

/** Lightweight placeholder — avoids extra animation work while chunks load */
const SectionFallback = () => (
  <div className="min-h-[80px] bg-gradient-to-b from-white to-gray-50/30" aria-hidden />
)

const HomePage = () => {
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) return

    const hash = location.hash.slice(1)
    const scrollToTarget = () => {
      const element = document.getElementById(hash)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return true
      }
      return false
    }

    // Retry: below-the-fold sections load asynchronously (lazy chunks)
    const t1 = setTimeout(scrollToTarget, 100)
    const t2 = setTimeout(scrollToTarget, 450)
    const t3 = setTimeout(scrollToTarget, 1000)

    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
    }
  }, [location.hash])

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Suspense fallback={<SectionFallback />}>
        <Features />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <HowItWorks />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <LevelsBadges />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <HelpCenter />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Contact />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Footer />
      </Suspense>
      <ScrollToTop />
    </div>
  )
}

export default HomePage
