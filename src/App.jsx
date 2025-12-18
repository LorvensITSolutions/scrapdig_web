import React, { useState, useEffect } from 'react'
import HomePage from './pages/HomePage'
import PrivacyPolicy from './pages/PrivacyPolicy'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1)
      if (hash === 'privacy-policy') {
        setCurrentPage('privacy-policy')
      } else {
        setCurrentPage('home')
      }
    }

    // Check initial hash
    handleHashChange()

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange)

    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  return currentPage === 'privacy-policy' ? <PrivacyPolicy /> : <HomePage />
}

export default App
