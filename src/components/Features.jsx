import React from 'react'
import { motion } from 'framer-motion'

const Features = () => {
  const mainFeatures = [
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      title: "Scrap Recycling",
      description: "Recycle Metal, Plastic, Paper & E-waste with instant quotes",
      gradient: "from-emerald-500 via-teal-500 to-cyan-500",
      glowColor: "rgba(16, 185, 129, 0.3)",
      bgGradient: "from-emerald-50 to-teal-50"
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Rewards & Coins",
      description: "Earn coins and shop eco-friendly products",
      gradient: "from-amber-500 via-orange-500 to-yellow-500",
      glowColor: "rgba(249, 115, 22, 0.3)",
      bgGradient: "from-amber-50 to-orange-50"
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      title: "Gamified Levels",
      description: "Progress through 5 levels & compete on leaderboards",
      gradient: "from-purple-500 via-indigo-500 to-violet-500",
      glowColor: "rgba(168, 85, 247, 0.3)",
      bgGradient: "from-purple-50 to-indigo-50"
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Refer & Earn",
      description: "Earn 10 coins when friends reach Silver level",
      gradient: "from-blue-500 via-cyan-500 to-teal-500",
      glowColor: "rgba(59, 130, 246, 0.3)",
      bgGradient: "from-blue-50 to-cyan-50"
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "Impact Tracking",
      description: "Track CO2 saved, trees planted & your contribution",
      gradient: "from-green-500 via-emerald-500 to-teal-500",
      glowColor: "rgba(34, 197, 94, 0.3)",
      bgGradient: "from-green-50 to-emerald-50"
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
      title: "EcoStore",
      description: "Shop eco-friendly products with earned coins",
      gradient: "from-pink-500 via-rose-500 to-red-500",
      glowColor: "rgba(236, 72, 153, 0.3)",
      bgGradient: "from-pink-50 to-rose-50"
    }
  ]

  const additionalFeatures = [
    "Education Hub",
    "Real-Time Notifications",
    "Secure Platform"
  ]

  return (
    <section id="features" className="bg-gradient-to-br from-gray-50 via-white to-emerald-50/30 py-16 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 tracking-tight">
            Why Choose <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-600 bg-clip-text text-transparent">ScrapDig?</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need for sustainable recycling
          </p>
        </motion.div>

        {/* Main Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {mainFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5, type: "spring" }}
              whileHover={{ y: -12, scale: 1.02, rotateY: 2 }}
              className="group relative"
            >
              <div 
                className={`relative bg-gradient-to-br ${feature.bgGradient} rounded-3xl p-8 border-2 border-white/50 shadow-xl hover:shadow-2xl transition-all duration-500 h-full flex flex-col overflow-hidden`}
                style={{
                  boxShadow: `0 20px 60px ${feature.glowColor}, 0 0 0 1px rgba(255, 255, 255, 0.1) inset`
                }}
              >
                {/* Animated background glow on hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at center, ${feature.glowColor}, transparent 70%)`,
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

                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-full"></div>
                
                {/* Content */}
                <div className="relative z-10 flex flex-col items-center text-center h-full">
                  {/* Icon with enhanced styling */}
                  <motion.div 
                    className={`w-20 h-20 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                    whileHover={{ scale: 1.15, rotate: 10 }}
                    style={{
                      filter: 'drop-shadow(0 10px 30px rgba(0, 0, 0, 0.2))'
                    }}
                  >
                    <div className="text-white">
                      {feature.icon}
                    </div>
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-emerald-600 group-hover:to-teal-600 transition-all duration-300">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed flex-grow">
                    {feature.description}
                  </p>

                  {/* Arrow indicator on hover */}
                  <motion.div 
                    className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ x: -10 }}
                    whileHover={{ x: 0 }}
                  >
                    <svg className={`w-6 h-6 bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Features - Enhanced */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-4 pt-8 border-t-2 border-gray-200"
        >
          {additionalFeatures.map((feature, index) => (
            <motion.span
              key={index}
              whileHover={{ scale: 1.05, y: -2 }}
              className="px-6 py-3 bg-gradient-to-r from-white to-gray-50 backdrop-blur-md border-2 border-emerald-200/50 hover:border-emerald-400/70 text-gray-800 hover:text-emerald-700 rounded-full text-sm font-semibold transition-all duration-300 cursor-default shadow-md hover:shadow-lg"
            >
              {feature}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Features

