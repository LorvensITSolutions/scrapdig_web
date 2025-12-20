import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const HowItWorks = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const steps = [
    {
      number: 1,
      title: "Sign Up & Get Started",
      description: "Create your free account in seconds. Sign up with email or Google, complete your profile, and get your unique referral code.",
      color: "from-purple-500 via-pink-500 to-rose-500",
      glowColor: "rgba(168, 85, 247, 0.4)",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    {
      number: 2,
      title: "Collect & Categorize Scrap",
      description: "Gather your recyclable materials: Metal, Plastic, Paper, or E-waste. Take photos and get instant price quotes.",
      color: "from-blue-500 via-cyan-500 to-teal-500",
      glowColor: "rgba(59, 130, 246, 0.4)",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    {
      number: 3,
      title: "Schedule Pickup or Drop-Off",
      description: "Choose your preferred method: schedule a convenient pickup time or drop off at a nearby location.",
      color: "from-emerald-500 via-green-500 to-lime-500",
      glowColor: "rgba(16, 185, 129, 0.4)",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      number: 4,
      title: "Earn Coins & Green Points",
      description: "Get rewarded instantly! Earn coins for your scrap sale and Green Points (GP) for completing tasks.",
      color: "from-orange-500 via-amber-500 to-yellow-500",
      glowColor: "rgba(249, 115, 22, 0.4)",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      number: 5,
      title: "Complete Tasks & Level Up",
      description: "Engage with daily tasks like logging in, placing orders, and sharing your impact. Each task earns you GP.",
      color: "from-indigo-500 via-purple-500 to-violet-500",
      glowColor: "rgba(99, 102, 241, 0.4)",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    },
    {
      number: 6,
      title: "Refer Friends & Earn More",
      description: "Share your referral code with friends. When they reach Silver level, you automatically earn 10 coins.",
      color: "from-teal-500 via-cyan-500 to-blue-500",
      glowColor: "rgba(20, 184, 166, 0.4)",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      number: 7,
      title: "Shop in EcoStore",
      description: "Browse our eco-friendly product catalog and purchase sustainable products using your earned coins.",
      color: "from-yellow-400 via-orange-500 to-red-500",
      glowColor: "rgba(234, 179, 8, 0.4)",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      )
    },
    {
      number: 8,
      title: "Track Your Impact",
      description: "Monitor your environmental contribution in real-time. See CO2 saved, trees planted, and energy conserved.",
      color: "from-pink-500 via-rose-500 to-red-500",
      glowColor: "rgba(236, 72, 153, 0.4)",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    }
  ]

  // Auto-scroll carousel - slower speed
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(steps.length / 4))
    }, 8000) // Change slide every 8 seconds (slower)

    return () => clearInterval(interval)
  }, [steps.length])

  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-br from-gray-900 via-emerald-950 to-gray-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-700/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl font-bold text-white mb-6">
            How <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">ScrapDig</span> Works
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Follow these simple steps to start recycling and earning rewards
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          <div className="overflow-hidden rounded-3xl">
            <div 
              className="flex transition-transform duration-1000 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {/* Render slides with 4 cards each */}
              {[0, 1].map((slideIndex) => (
                <div key={slideIndex} className="min-w-full grid md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
                  {steps.slice(slideIndex * 4, slideIndex * 4 + 4).map((step, index) => (
                    <motion.div
                      key={step.number}
                      initial={{ opacity: 0, y: 30, scale: 0.9 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15, duration: 0.6, type: "spring" }}
                      className={`group relative bg-gradient-to-br ${step.color} rounded-3xl p-8 h-full cursor-pointer overflow-hidden`}
                      whileHover={{ scale: 1.08, y: -12, rotateY: 5 }}
                      style={{
                        boxShadow: `0 20px 60px ${step.glowColor}, 0 0 0 1px rgba(255, 255, 255, 0.1) inset`
                      }}
                    >
                      {/* Animated background glow */}
                      <motion.div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                          background: `radial-gradient(circle at center, ${step.glowColor}, transparent 70%)`,
                          filter: 'blur(40px)'
                        }}
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0, 0.3, 0]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />

                      {/* Number Badge */}
                      <motion.div 
                        className="absolute -top-5 -left-5 w-20 h-20 bg-white rounded-full flex items-center justify-center text-3xl font-bold shadow-2xl z-10"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <span className={`bg-gradient-to-br ${step.color} bg-clip-text text-transparent font-extrabold`}>
                          {step.number}
                        </span>
                      </motion.div>

                      {/* Icon with glow */}
                      <motion.div 
                        className="text-white mb-6 mt-6 relative z-10"
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        transition={{ duration: 0.3 }}
                        style={{
                          filter: 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.5))'
                        }}
                      >
                        {step.icon}
                      </motion.div>

                      {/* Content */}
                      <div className="relative z-10">
                        <h3 className="text-2xl font-extrabold text-white mb-4 leading-tight">
                          {step.title}
                        </h3>
                        <p className="text-white/95 leading-relaxed text-base font-medium">
                          {step.description}
                        </p>
                      </div>

                      {/* Decorative corner accent */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-full"></div>
                      
                      {/* Arrow indicator */}
                      <motion.div 
                        className="absolute bottom-6 right-6 text-white"
                        initial={{ opacity: 0, x: -10 }}
                        whileHover={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                        </svg>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center items-center mt-12 space-x-4">
            {[0, 1].map((slide) => (
              <button
                key={slide}
                onClick={() => setCurrentSlide(slide)}
                className={`h-2 rounded-full transition-all duration-500 ${
                  currentSlide === slide 
                    ? 'bg-gradient-to-r from-purple-400 to-pink-400 w-16 shadow-lg shadow-purple-500/50' 
                    : 'bg-white/20 hover:bg-white/40 w-3'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
