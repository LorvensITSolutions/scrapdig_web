import React, { useEffect, useState } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const ReferralPage = () => {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const referralCode = searchParams.get('code')
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0)
  }, [])

  const copyToClipboard = () => {
    if (referralCode) {
      navigator.clipboard.writeText(referralCode)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const shareLink = () => {
    const shareUrl = window.location.href
    if (navigator.share) {
      navigator.share({
        title: 'Join ScrapDig with my referral code!',
        text: `Join ScrapDig and help save the planet! Use my referral code: ${referralCode}`,
        url: shareUrl,
      }).catch(() => {
        // Fallback to copy
        navigator.clipboard.writeText(shareUrl)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      })
    } else {
      // Fallback to copy
      navigator.clipboard.writeText(shareUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50 to-teal-50">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-block mb-4"
          >
            <span className="text-6xl">🎁</span>
          </motion.div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            You've Been Invited!
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Join ScrapDig using the referral code below and start your eco-friendly journey. 
            When you reach Silver Level, your friend will earn rewards too!
          </p>
        </motion.div>

        {/* Referral Code Card */}
        {referralCode ? (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 mb-8 border-2 border-emerald-200"
          >
            <div className="text-center mb-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
                Your Referral Code
              </h2>
              <p className="text-gray-600">
                Use this code when signing up for ScrapDig
              </p>
            </div>

            {/* Code Display */}
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-6 mb-6 border-2 border-emerald-300">
              <div className="flex items-center justify-center space-x-4">
                <motion.div
                  className="text-4xl sm:text-5xl font-mono font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {referralCode}
                </motion.div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={copyToClipboard}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 sm:flex-none px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                {copied ? '✓ Copied!' : '📋 Copy Code'}
              </motion.button>
              <motion.button
                onClick={shareLink}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 sm:flex-none px-6 py-3 bg-white border-2 border-emerald-500 text-emerald-600 font-bold rounded-xl hover:bg-emerald-50 transition-all"
              >
                🔗 Share Link
              </motion.button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 mb-8 border-2 border-red-200"
          >
            <div className="text-center">
              <div className="text-5xl mb-4">⚠️</div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
                No Referral Code Found
              </h2>
              <p className="text-gray-600 mb-6">
                It looks like you accessed this page without a referral code.
              </p>
              <motion.button
                onClick={() => navigate('/')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold rounded-xl shadow-lg"
              >
                Go to Homepage
              </motion.button>
            </div>
          </motion.div>
        )}

        {/* How It Works */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 mb-8"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
            How Referrals Work
          </h2>
          <div className="space-y-6">
            {[
              {
                step: '1',
                icon: '📱',
                title: 'Download & Sign Up',
                description: 'Download the ScrapDig app and use the referral code when creating your account.',
              },
              {
                step: '2',
                icon: '♻️',
                title: 'Start Recycling',
                description: 'Begin recycling scrap materials and earning Green Points (GP) to level up.',
              },
              {
                step: '3',
                icon: '🏆',
                title: 'Reach Silver Level',
                description: 'When you reach Silver Level (100 GP), your friend automatically earns 10 coins!',
              },
              {
                step: '4',
                icon: '🎉',
                title: 'Keep Going!',
                description: 'Continue recycling and earning. Your friend can earn milestone bonuses too!',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="flex items-start space-x-4"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center text-2xl shadow-lg">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Download App CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl shadow-2xl p-8 text-center text-white"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg sm:text-xl mb-6 text-emerald-50">
            Download the ScrapDig app and use the referral code above to begin your journey!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="https://play.google.com/store/apps/details?id=com.scrapdig.app"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-emerald-600 font-bold rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              📱 Download on Google Play
            </motion.a>
            <motion.a
              href="https://apps.apple.com/app/scrapdig"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-emerald-600 font-bold rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              🍎 Download on App Store
            </motion.a>
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  )
}

export default ReferralPage

