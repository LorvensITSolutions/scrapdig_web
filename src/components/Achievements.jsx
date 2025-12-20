import React from 'react'
import { motion } from 'framer-motion'
// Import achievement badge images
import greenInitiator from '../assets/badges/green-initiator.png'
import ecoGuardian from '../assets/badges/eco-guardian.png'
import ecoCampusAmbassador from '../assets/badges/eco-campus-embassador.png'
import ecoVisionary from '../assets/badges/eco-visionary.png'
import ecoScavenger from '../assets/badges/eco-scavenger.png'

const Achievements = () => {
  const [selectedBadge, setSelectedBadge] = React.useState(null)

  // Only the 5 main level badges
  const achievements = [
    {
      id: 1,
      name: 'Green Initiator',
      badgeImage: greenInitiator,
      color: 'from-green-400 to-emerald-600',
      special: false
    },
    {
      id: 2,
      name: 'Eco Guardian',
      badgeImage: ecoGuardian,
      color: 'from-gray-400 to-slate-500',
      special: true
    },
    {
      id: 3,
      name: 'Eco Campus Ambassador',
      badgeImage: ecoCampusAmbassador,
      color: 'from-yellow-400 to-amber-500',
      special: false
    },
    {
      id: 4,
      name: 'Eco Visionary',
      badgeImage: ecoVisionary,
      color: 'from-slate-300 to-gray-400',
      special: false
    },
    {
      id: 5,
      name: 'Eco Scavenger',
      badgeImage: ecoScavenger,
      color: 'from-cyan-400 to-blue-500',
      special: true
    }
  ]


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="achievements" className="py-24 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-300/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Badge Showcase - Only 5 Badges */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12 justify-items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {achievements.map((achievement, index) => {
            const isSelected = selectedBadge === achievement.id;
            const delay = index * 0.1;
            
            return (
              <motion.div
                key={achievement.id}
                className="relative flex flex-col items-center justify-center cursor-pointer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ 
                  opacity: 1, 
                  scale: 1 
                }}
                viewport={{ once: true }}
                transition={{ 
                  delay: delay,
                  duration: 0.5,
                  ease: "easeOut"
                }}
                onClick={() => setSelectedBadge(isSelected ? null : achievement.id)}
              >
                {/* Badge Container */}
                <div className="relative">
                  {/* Badge Image - Rotates on Hover */}
                  <motion.img 
                    src={achievement.badgeImage} 
                    alt={`${achievement.name} Badge`}
                    className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 object-contain drop-shadow-lg transition-all duration-300"
                    whileHover={{ 
                      rotate: 360,
                      scale: 1.1,
                      transition: { 
                        rotate: { duration: 0.6, ease: "easeInOut" },
                        scale: { duration: 0.3 }
                      }
                    }}
                    animate={isSelected ? {
                      scale: 1.15,
                    } : {}}
                    transition={isSelected ? {
                      scale: { duration: 0.3 }
                    } : {}}
                  />
                  
                  {/* Subtle glow on hover */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${achievement.color} rounded-full blur-xl opacity-0`}
                    whileHover={{ opacity: 0.3 }}
                    style={{
                      width: '120%',
                      height: '120%',
                      margin: '-10%',
                      zIndex: -1
                    }}
                  />
                </div>
                
                {/* Badge Name - Always Visible */}
                <motion.div
                  className="mt-4 text-center"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: delay + 0.3 }}
                >
                  <h3 className={`text-base font-bold transition-colors duration-300 ${
                    isSelected ? 'text-primary' : 'text-gray-900'
                  }`}>
                    {achievement.name}
                  </h3>
                  {achievement.special && (
                    <span className="inline-block mt-1 px-2 py-0.5 text-xs font-semibold bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-full">
                      ⭐ Special
                    </span>
                  )}
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  )
}

export default Achievements

