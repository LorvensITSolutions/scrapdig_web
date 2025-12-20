import React, { useState } from 'react'
import { motion } from 'framer-motion'
// Import level badge images
import bronzeBadge from '../assets/levelbadges/bronzebadge.png'
import silverBadge from '../assets/levelbadges/silverbadge.png'
import goldBadge from '../assets/levelbadges/goldbadge.png'
import platinumBadge from '../assets/levelbadges/platinumbadge.png'
import diamondBadge from '../assets/levelbadges/diamondbadge.png'
// Import achievement badge images
import greenInitiator from '../assets/badges/green-initiator.png'
import ecoGuardian from '../assets/badges/eco-guardian.png'
import ecoCampusAmbassador from '../assets/badges/eco-campus-embassador.png'
import ecoVisionary from '../assets/badges/eco-visionary.png'
import ecoScavenger from '../assets/badges/eco-scavenger.png'

const LevelsBadges = () => {
  const [showAchievementBadges, setShowAchievementBadges] = useState(false)
  
  const levels = [
    {
      name: 'Bronze',
      badgeName: 'Green Initiator',
      gpRange: '0-100 GP',
      coinsReward: '+10 Coins',
      color: 'from-amber-600 to-orange-600',
      bgColor: 'bg-amber-50',
      borderColor: 'border-amber-300',
      textColor: 'text-amber-700',
      levelBadge: bronzeBadge,
      achievementBadge: greenInitiator,
      description: 'Start your recycling journey! Complete your first tasks and earn Green Points to level up.',
      requirements: [
        'Sign up and complete profile',
        'Place your first scrap order',
        'Earn 100 Green Points'
      ]
    },
    {
      name: 'Silver',
      badgeName: 'Eco Guardian',
      gpRange: '100-225 GP',
      coinsReward: '+15 Coins',
      color: 'from-gray-400 to-slate-500',
      bgColor: 'bg-gray-50',
      borderColor: 'border-gray-300',
      textColor: 'text-gray-700',
      levelBadge: silverBadge,
      achievementBadge: ecoGuardian,
      description: 'Become an Eco Guardian! This is the milestone where referral rewards activate. Keep recycling!',
      requirements: [
        'Reach 100 Green Points',
        'Complete 5 scrap orders',
        'Unlock referral rewards'
      ],
      special: '⭐ Referral Trigger Level'
    },
    {
      name: 'Gold',
      badgeName: 'Eco Campus Ambassador',
      gpRange: '225-375 GP',
      coinsReward: '+20 Coins',
      color: 'from-yellow-400 to-amber-500',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-300',
      textColor: 'text-yellow-700',
      levelBadge: goldBadge,
      achievementBadge: ecoCampusAmbassador,
      description: 'You\'re making a real impact! As an Eco Campus Ambassador, you inspire others to recycle.',
      requirements: [
        'Reach 225 Green Points',
        'Complete 10 scrap orders',
        'Share your impact 3 times'
      ]
    },
    {
      name: 'Platinum',
      badgeName: 'Eco Visionary',
      gpRange: '375-550 GP',
      coinsReward: '+25 Coins',
      color: 'from-slate-300 to-gray-400',
      bgColor: 'bg-slate-50',
      borderColor: 'border-slate-300',
      textColor: 'text-slate-700',
      levelBadge: platinumBadge,
      achievementBadge: ecoVisionary,
      description: 'A true Eco Visionary! Your commitment to sustainability is inspiring. Lead by example!',
      requirements: [
        'Reach 375 Green Points',
        'Complete 20 scrap orders',
        'Refer 3 successful users'
      ]
    },
    {
      name: 'Diamond',
      badgeName: 'Eco Scavenger',
      gpRange: '550-750 GP',
      coinsReward: '+30 Coins',
      color: 'from-cyan-400 to-blue-500',
      bgColor: 'bg-cyan-50',
      borderColor: 'border-cyan-300',
      textColor: 'text-cyan-700',
      levelBadge: diamondBadge,
      achievementBadge: ecoScavenger,
      description: 'The ultimate achievement! As an Eco Scavenger, you\'re a recycling champion and environmental hero.',
      requirements: [
        'Reach 550 Green Points',
        'Complete 30 scrap orders',
        'Top 10 on leaderboard'
      ],
      special: '🏆 Highest Level'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="levels-badges" className="py-24 bg-gradient-to-br from-gray-50 via-white to-green-50 relative overflow-visible">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-300/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-6"
          >
            <span className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-primary to-emerald-600 text-white text-sm font-bold shadow-lg">
              🏆 Level System & Badges
            </span>
          </motion.div>
          <h2 className="text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Level Up Your <span className="text-primary">Recycling Journey</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Progress through 5 exciting levels, unlock exclusive badges, and earn rewards as you make a positive environmental impact
          </p>
        </motion.div>

        {/* Levels Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {levels.map((level, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.08, y: -15 }}
              className={`group relative ${level.bgColor} rounded-2xl p-8 border-2 ${level.borderColor} hover:shadow-2xl transition-all duration-300 transform hover:border-primary overflow-visible`}
            >
              {/* Special Badge */}
              {level.special && (
                <div className="absolute -top-3 -right-3 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg z-10">
                  {level.special}
                </div>
              )}

              {/* Level Badge Image - Large and Prominent */}
              <div className="text-center mb-4 relative">
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative inline-block"
                >
                  {/* Glow effect - animated */}
                  <motion.div
                    animate={{
                      scale: [1, 1.1],
                      opacity: [0.4, 0.7],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut"
                    }}
                    className={`absolute inset-0 bg-gradient-to-r ${level.color} rounded-full blur-xl`}
                    style={{ transform: 'scale(1.3)' }}
                  ></motion.div>
                  
                  {/* Level Badge - Large and Prominent */}
                  <motion.img 
                    src={level.levelBadge} 
                    alt={`${level.name} Level Badge`}
                    className="relative z-10 w-36 h-36 object-contain drop-shadow-2xl"
                    whileHover={{ 
                      scale: 1.2,
                      rotate: [0, -5, 5, -5, 0],
                    }}
                    transition={{ 
                      scale: { type: "spring", stiffness: 300 },
                      rotate: { duration: 0.5 }
                    }}
                  />
                  
                  {/* Achievement Badge Overlay - Smaller badge */}
                  <motion.div
                    className="absolute -bottom-3 -right-3 z-20"
                    whileHover={{ scale: 1.3, rotate: 20 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <img
                      src={level.achievementBadge}
                      alt={`${level.badgeName} Achievement Badge`}
                      className="w-20 h-20 object-contain drop-shadow-xl bg-white rounded-full p-1 border-2 border-primary"
                    />
                  </motion.div>
                  
                  {/* Shine effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -skew-x-12 group-hover:translate-x-full"></div>
                </motion.div>
                
                {/* Level Name Badge */}
                <div className={`mt-4 inline-block px-4 py-2 rounded-full bg-gradient-to-r ${level.color} text-white font-bold text-lg shadow-lg transform group-hover:scale-105 transition-transform`}>
                  {level.name}
                </div>
              </div>

              {/* Badge Name */}
              <h3 className={`text-xl font-bold ${level.textColor} text-center mb-2`}>
                {level.badgeName}
              </h3>

              {/* GP Range */}
              <div className="text-center mb-4">
                <div className="inline-flex items-center space-x-2 bg-white rounded-lg px-3 py-1.5 shadow-sm">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm font-semibold text-gray-700">{level.gpRange}</span>
                </div>
              </div>

              {/* Coins Reward */}
              <div className="text-center mb-4">
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-lg px-3 py-1.5 shadow-md">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm font-bold">{level.coinsReward}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-600 text-center mb-4 leading-relaxed">
                {level.description}
              </p>

              {/* Requirements */}
              <div className="space-y-2">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Requirements:</p>
                <ul className="space-y-1.5">
                  {level.requirements.map((req, idx) => (
                    <li key={idx} className="flex items-start text-xs text-gray-600">
                      <svg className={`w-4 h-4 ${level.textColor} mr-2 flex-shrink-0 mt-0.5`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom accent line */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${level.color} rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Level Progression Visual */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 bg-white rounded-2xl p-8 shadow-xl border-2 border-primary/20"
        >
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-gray-900">
              Level Progression Path
            </h3>
            
            {/* Toggle Switch */}
            <div className="flex items-center space-x-4">
              <span className={`text-sm font-semibold transition-colors duration-300 ${!showAchievementBadges ? 'text-primary' : 'text-gray-400'}`}>
                Level Badges
              </span>
              <button
                type="button"
                role="switch"
                aria-checked={showAchievementBadges}
                onClick={() => setShowAchievementBadges(!showAchievementBadges)}
                className={`relative inline-flex h-8 w-16 items-center rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 cursor-pointer ${
                  showAchievementBadges ? 'bg-primary' : 'bg-gray-300'
                }`}
              >
                <motion.span
                  className="inline-block h-6 w-6 transform rounded-full bg-white shadow-lg"
                  animate={{
                    x: showAchievementBadges ? 36 : 4
                  }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 500, 
                    damping: 30,
                    duration: 0.3
                  }}
                />
              </button>
              <span className={`text-sm font-semibold transition-colors duration-300 ${showAchievementBadges ? 'text-primary' : 'text-gray-400'}`}>
                Achievement Badges
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between relative">
            {/* Static Background Line - Full width connecting all badges */}
            <div className="absolute top-1/2 left-0 right-0 h-2 bg-gray-200 rounded-full transform -translate-y-1/2 z-0"></div>
            
            {/* Animated Progress Line - Connects from first to last badge */}
            <motion.div
              key={`line-${showAchievementBadges}`}
              className="absolute top-1/2 left-0 h-2 bg-gradient-to-r from-amber-600 via-gray-400 via-yellow-400 via-slate-300 to-cyan-400 rounded-full transform -translate-y-1/2 z-1"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 3, ease: "easeInOut" }}
            />
            
            {/* Animated Progress Dot - Travels from start to end */}
            <motion.div
              key={`dot-${showAchievementBadges}`}
              className="absolute top-1/2 h-4 w-4 bg-primary rounded-full transform -translate-y-1/2 z-20 shadow-lg"
              initial={{ left: "0%" }}
              animate={{ left: "100%" }}
              transition={{ duration: 3, ease: "easeInOut" }}
              style={{ transform: 'translate(-50%, -50%)' }}
            />
            
            {levels.map((level, index) => {
              // Calculate delay for each badge animation (staggered)
              const badgeDelay = (index * 0.6) + 0.2;
              const badgeDuration = 0.5;
              
              return (
                <motion.div 
                  key={`badge-container-${showAchievementBadges}-${index}`}
                  className="relative z-10 flex flex-col items-center"
                  initial={{ scale: 0.8, opacity: 0.5 }}
                  animate={{ 
                    scale: 1,
                    opacity: 1
                  }}
                  transition={{ 
                    delay: badgeDelay,
                    duration: badgeDuration,
                    ease: "easeOut"
                  }}
                  whileHover={{ scale: 1.15 }}
                >
                  {/* Glow effect when line reaches */}
                  <motion.div
                    key={`glow-${showAchievementBadges}-${index}`}
                    className={`absolute inset-0 bg-gradient-to-r ${level.color} rounded-full blur-xl`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ 
                      opacity: [0, 0.6, 0],
                      scale: [0.8, 1.3, 0.8]
                    }}
                    transition={{ 
                      delay: badgeDelay,
                      duration: badgeDuration + 0.2,
                      ease: "easeOut",
                      repeat: 1,
                      repeatType: "reverse"
                    }}
                    style={{ width: '120px', height: '120px', margin: '-40px' }}
                  />
                  
                  {/* Badge Image - Larger */}
                  <div className="relative">
                    <motion.img 
                      key={`${showAchievementBadges ? 'achievement' : 'level'}-${index}`}
                      src={showAchievementBadges ? level.achievementBadge : level.levelBadge} 
                      alt={showAchievementBadges ? `${level.badgeName} Achievement Badge` : `${level.name} Level Badge`}
                      className="w-32 h-32 md:w-40 md:h-40 object-contain drop-shadow-2xl"
                      initial={{ scale: 0.8, opacity: 0, rotate: -180 }}
                      animate={{ 
                        scale: 1,
                        opacity: 1,
                        rotate: 0
                      }}
                      whileInView={{
                        scale: [1, 1.2, 1]
                      }}
                      viewport={{ once: true }}
                      transition={{ 
                        rotate: { duration: 0.5, ease: "easeOut" },
                        scale: { 
                          duration: 0.4, 
                          ease: "easeOut",
                          delay: badgeDelay + badgeDuration * 0.3,
                          repeat: 1,
                          repeatType: "reverse"
                        },
                        opacity: { duration: 0.3 }
                      }}
                      whileHover={{ 
                        scale: 1.1,
                        rotate: showAchievementBadges ? 360 : -5,
                        transition: { rotate: { duration: 0.6 } }
                      }}
                    />
                    
                    {/* Pulse ring when line reaches */}
                    <motion.div
                      key={`ring-${showAchievementBadges}-${index}`}
                      className={`absolute inset-0 border-4 border-primary rounded-full`}
                      initial={{ scale: 1, opacity: 0 }}
                      animate={{ 
                        scale: [1, 1.5],
                        opacity: [0.8, 0]
                      }}
                      transition={{ 
                        delay: badgeDelay,
                        duration: badgeDuration + 0.3,
                        ease: "easeOut"
                      }}
                      style={{ margin: '-8px' }}
                    />
                  </div>
                  
                  {/* Level Info */}
                  <div className="text-center mt-4">
                    <p className="text-sm font-bold text-gray-900">
                      {showAchievementBadges ? level.badgeName : level.name}
                    </p>
                    {!showAchievementBadges && (
                      <>
                        <p className="text-xs text-gray-600 mt-1">{level.gpRange}</p>
                        <div className={`inline-block mt-2 px-3 py-1 rounded-full bg-gradient-to-r ${level.color} text-white text-xs font-semibold`}>
                          {level.coinsReward}
                        </div>
                      </>
                    )}
                    {showAchievementBadges && (
                      <p className="text-xs text-gray-600 mt-1">{level.name} Level</p>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default LevelsBadges

