import React from 'react'
import { motion } from 'framer-motion'
import heroImage from '../assets/web_2.png'

const Hero = () => {
  const stats = [
    { value: '5', label: 'Level System', icon: '🏆', gradient: 'from-yellow-400 to-orange-500', bg: 'from-yellow-50 to-orange-50' },
    { value: '100%', label: 'Eco-Friendly', icon: '🌱', gradient: 'from-green-400 to-emerald-500', bg: 'from-green-50 to-emerald-50' },
    { value: '∞', label: 'Rewards', icon: '💰', gradient: 'from-amber-400 to-yellow-500', bg: 'from-amber-50 to-yellow-50' },
    { value: '12+', label: 'Achievements', icon: '🎖️', gradient: 'from-purple-400 to-pink-500', bg: 'from-purple-50 to-pink-50' }
  ]

  return (
    <section className="w-full relative overflow-hidden bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 h-screen flex items-center">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 right-20 w-[500px] h-[500px] bg-emerald-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.25, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-teal-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/10 rounded-full blur-3xl"
        />
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left space-y-4 z-10"
          >
            <div className="space-y-3">
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="inline-block"
              >
                <motion.span 
                  className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 backdrop-blur-md border border-emerald-500/30 text-emerald-300 text-xs font-bold shadow-lg"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="mr-2 text-base">🌍</span>
                  India's #1 Recycling Platform
                  <motion.span
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="ml-2 text-emerald-400"
                  >
                    ✨
                  </motion.span>
                </motion.span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight"
              >
                <span className="text-white">Transform Waste into</span>
                <motion.span 
                  className="block bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ['0%', '100%', '0%'],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{
                    backgroundSize: '200% auto'
                  }}
                >
                  Wealth & Impact
                </motion.span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-base lg:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0"
              >
                ScrapDig is India's innovative recycling platform that rewards you for every scrap you recycle. Join thousands of eco-warriors building a sustainable future while earning coins, leveling up, and making a real environmental impact.
              </motion.p>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
            >
              <motion.a 
                href="#features"
                className="group relative bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-3 rounded-xl font-bold text-base overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-teal-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity"
                />
                <span className="relative z-10 flex items-center space-x-2">
                  <span>Explore Features</span>
                  <motion.svg 
                    className="w-4 h-4" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </motion.svg>
                </span>
              </motion.a>
              <motion.a 
                href="#how-it-works"
                className="bg-slate-800/50 backdrop-blur-md text-white border-2 border-emerald-500/50 px-6 py-3 rounded-xl font-bold text-base hover:border-emerald-400 transition-all duration-300 shadow-xl"
                whileHover={{ scale: 1.05, y: -2, borderColor: 'rgb(16, 185, 129)' }}
                whileTap={{ scale: 0.95 }}
              >
                How It Works
              </motion.a>
            </motion.div>

            {/* Enhanced Key Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-3 pt-4"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1, type: "spring", stiffness: 200 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="relative group text-center lg:text-left bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-md rounded-xl p-4 border border-emerald-500/30 hover:border-emerald-400/60 transition-all shadow-xl overflow-hidden"
                >
                  {/* Animated background gradient */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${stat.bg} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                  />
                  <div className="relative z-10">
                    <motion.div 
                      className="text-2xl mb-1"
                      animate={{ 
                        rotate: [0, 10, -10, 0],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity, 
                        repeatDelay: 2,
                        ease: "easeInOut"
                      }}
                    >
                      {stat.icon}
                    </motion.div>
                    <div className={`text-2xl font-extrabold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-1`}>
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-300 font-semibold">{stat.label}</div>
                  </div>
                  {/* Shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100"
                    animate={{ x: ['-100%', '200%'] }}
                    transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 100 }}
            className="relative lg:block hidden"
          >
            <div className="relative z-10">
              {/* Glow effect behind image */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-emerald-500/30 to-teal-500/30 rounded-3xl blur-2xl"
                animate={{
                  opacity: [0.3, 0.5, 0.3],
                  scale: [1, 1.05, 1]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-md rounded-2xl p-2 border border-emerald-500/30 shadow-2xl"
                whileHover={{ scale: 1.02 }}
              >
                <motion.img
        src={heroImage} 
                  alt="ScrapDig App - Recycle, Earn, Level Up"
                  className="w-full h-auto rounded-2xl"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
              
              {/* Enhanced Floating badges */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-4 -left-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl p-3 shadow-2xl border-2 border-yellow-300/50 backdrop-blur-sm"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <motion.div 
                  className="text-2xl mb-1"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  🏆
                </motion.div>
                <div className="text-xs font-bold text-white">Level Up</div>
                <div className="text-[10px] text-yellow-100">Earn Rewards</div>
                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-yellow-400/50 to-orange-500/50 rounded-xl blur-xl -z-10"
                  animate={{ opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
              
              <motion.div
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, -5, 5, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5
                }}
                className="absolute -bottom-4 -right-4 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-xl p-3 shadow-2xl border-2 border-emerald-300/50 backdrop-blur-sm"
                whileHover={{ scale: 1.1, rotate: -5 }}
              >
                <motion.div 
                  className="text-2xl mb-1"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  💰
                </motion.div>
                <div className="text-xs font-bold text-white">Earn Coins</div>
                <div className="text-[10px] text-emerald-100">Shop Products</div>
                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-emerald-400/50 to-teal-500/50 rounded-xl blur-xl -z-10"
                  animate={{ opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero

