import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { getTopUsers } from '../services/leaderboardService'

const Leaderboard = () => {
  const [topUsers, setTopUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [showAll, setShowAll] = useState(false) // Toggle to show all users or just top 3

  // Map level names to display format
  const getLevelName = (level) => {
    const levelMap = {
      'bronze': 'Bronze',
      'silver': 'Silver',
      'gold': 'Gold',
      'platinum': 'Platinum',
      'diamond': 'Diamond'
    }
    return levelMap[level?.toLowerCase()] || level || 'Bronze'
  }

  // Map level to achievement badge name
  const getAchievementBadgeName = (level) => {
    const badgeMap = {
      'bronze': 'Green Initiator',
      'silver': 'Eco Guardian',
      'gold': 'Eco Campus Ambassador',
      'platinum': 'Eco Visionary',
      'diamond': 'Eco Scavenger'
    }
    return badgeMap[level?.toLowerCase()] || 'Green Initiator'
  }

  // Fetch leaderboard data on component mount
  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        setLoading(true)
        setError(null)
        
        // Fetch top 10 users
        // The API returns: { success: true, leaderboard: [...], userRank: ..., totalUsers: ..., pagination: {...} }
        const leaderboardData = await getTopUsers(10)
        
        // Transform API data to match component structure
        // Backend returns: { rank, userId, userName, userPicture, greenPoints, currentLevel }
        const transformedUsers = Array.isArray(leaderboardData) 
          ? leaderboardData.map((user, index) => {
              const userLevel = user.currentLevel || user.level
              return {
                rank: user.rank || index + 1,
                name: user.userName || user.name || 'Anonymous',
                level: getLevelName(userLevel),
                achievementBadgeName: getAchievementBadgeName(userLevel), // Achievement badge name
                gp: user.greenPoints || user.gp || 0,
                picture: user.userPicture || user.picture || '', // User profile picture
                userId: user.userId || null, // User ID (for future use)
                coins: 0, // Coins not returned by leaderboard endpoint, set to 0 or fetch separately
                achievements: 0, // Achievements not returned, set to 0 or fetch separately
                badge: user.rank === 1 ? '🏆' : user.rank === 2 ? '🥇' : user.rank === 3 ? '🥈' : '⭐',
                color: user.rank === 1 ? 'from-cyan-400 to-blue-500' 
                  : user.rank === 2 ? 'from-slate-300 to-gray-400'
                  : user.rank === 3 ? 'from-yellow-400 to-amber-500'
                  : 'from-amber-600 to-orange-600'
              }
            })
          : []
        
        setTopUsers(transformedUsers)
      } catch (err) {
        console.error('Failed to fetch leaderboard:', err)
        
        // More detailed error message
        let errorMessage = 'Failed to load leaderboard. '
        if (err.message.includes('Network Error') || err.message.includes('Failed to fetch')) {
          errorMessage += 'Cannot connect to the API server. Please check if the backend is running and the API URL is correct.'
        } else if (err.message.includes('404')) {
          errorMessage += 'Leaderboard endpoint not found. Please verify the API endpoint path.'
        } else if (err.message.includes('401') || err.message.includes('Unauthorized')) {
          errorMessage += 'Authentication required. The leaderboard endpoint requires user authentication.'
        } else if (err.message.includes('CORS')) {
          errorMessage += 'CORS error. Please check backend CORS settings.'
        } else {
          errorMessage += err.message || 'Please try again later.'
        }
        
        setError(errorMessage)
        // Keep empty array or show fallback data
        setTopUsers([])
      } finally {
        setLoading(false)
      }
    }

    fetchLeaderboard()
  }, [])

  const rankingCategories = [
    {
      name: 'Green Points',
      description: 'Ranked by total Green Points earned',
      icon: '🌱',
      color: 'from-green-400 to-emerald-600'
    },
    {
      name: 'Coins Earned',
      description: 'Top earners through recycling',
      icon: '💰',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      name: 'Impact Score',
      description: 'Environmental impact contribution',
      icon: '🌍',
      color: 'from-teal-400 to-cyan-500'
    },
    {
      name: 'Referrals',
      description: 'Most successful referrals',
      icon: '👥',
      color: 'from-purple-400 to-pink-500'
    }
  ]

  const getRankBadge = (rank) => {
    if (rank === 1) return '🥇'
    if (rank === 2) return '🥈'
    if (rank === 3) return '🥉'
    return `#${rank}`
  }

  const getRankColor = (rank) => {
    if (rank === 1) return 'from-yellow-400 via-amber-500 to-orange-500'
    if (rank === 2) return 'from-slate-400 via-gray-500 to-slate-600'
    if (rank === 3) return 'from-amber-500 via-orange-500 to-amber-600'
    return 'from-gray-200 to-gray-300'
  }

  return (
    <section id="leaderboard" className="py-24 bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 relative overflow-hidden">
      {/* Enhanced decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/8 rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 right-1/3 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
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
          <h2 className="text-5xl font-bold text-white mb-4 tracking-tight">
            Global <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Leaderboard</span>
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Compete with eco-warriors worldwide and climb the rankings as you recycle and make an impact
          </p>
        </motion.div>

        {/* Loading State */}
        {loading && (
          <div className="text-center py-20">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-16 h-16 border-4 border-emerald-500 border-t-transparent rounded-full mx-auto mb-4"
            />
            <p className="text-gray-300 text-lg">Loading leaderboard...</p>
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <div className="text-center py-20">
            <div className="bg-red-500/20 border border-red-500/50 rounded-xl p-6 max-w-2xl mx-auto">
              <div className="text-red-400 text-4xl mb-4">⚠️</div>
              <p className="text-red-300 text-lg mb-2 font-semibold">Connection Error</p>
              <p className="text-red-200 text-sm mb-4 whitespace-pre-line">{error}</p>
              <div className="space-y-2 mb-4 text-left bg-slate-800/50 p-4 rounded-lg">
                <p className="text-gray-300 text-xs font-semibold mb-2">Troubleshooting:</p>
                <ul className="text-gray-400 text-xs space-y-1 list-disc list-inside">
                  <li>Check if your backend API is running at: <code className="text-emerald-400">https://api.lorvensit.online</code></li>
                  <li>Verify the API endpoint: <code className="text-emerald-400">/api/levels/leaderboard</code></li>
                  <li>Note: This endpoint requires authentication. For a public website, you may need to create a public leaderboard endpoint.</li>
                  <li>Check browser console for detailed error messages</li>
                  <li>Ensure CORS is enabled on your backend</li>
                </ul>
              </div>
              <button
                onClick={() => {
                  setError(null)
                  setLoading(true)
                  // Retry fetch
                  const fetchLeaderboard = async () => {
                    try {
                      const data = await getTopUsers(10)
                      const transformedUsers = Array.isArray(data) 
                        ? data.map((user, index) => {
                            const userLevel = user.currentLevel || user.level
                            return {
                              rank: user.rank || user.position || index + 1,
                              name: user.userName || user.name || user.username || user.fullName || 'Anonymous',
                              level: getLevelName(userLevel),
                              achievementBadgeName: getAchievementBadgeName(userLevel),
                              gp: user.greenPoints || user.gp || user.totalGP || 0,
                              picture: user.userPicture || user.picture || '',
                              userId: user.userId || null,
                              coins: user.coins || user.totalCoins || user.coinBalance || 0,
                              achievements: user.achievements || user.achievementCount || 0,
                              badge: user.rank === 1 ? '🏆' : user.rank === 2 ? '🥇' : user.rank === 3 ? '🥈' : '⭐',
                              color: user.rank === 1 ? 'from-cyan-400 to-blue-500' 
                                : user.rank === 2 ? 'from-slate-300 to-gray-400'
                                : user.rank === 3 ? 'from-yellow-400 to-amber-500'
                                : 'from-amber-600 to-orange-600'
                            }
                          })
                        : []
                      setTopUsers(transformedUsers)
                      setError(null)
                    } catch (err) {
                      let errorMessage = 'Failed to load leaderboard. '
                      if (err.message.includes('Network Error') || err.message.includes('Failed to fetch')) {
                        errorMessage += 'Cannot connect to the API server.'
                      } else {
                        errorMessage += err.message || 'Please try again later.'
                      }
                      setError(errorMessage)
                    } finally {
                      setLoading(false)
                    }
                  }
                  fetchLeaderboard()
                }}
                className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-lg transition-colors"
              >
                Retry
              </button>
            </div>
          </div>
        )}

        {/* Leaderboard Content - Only show if not loading and has data */}
        {!loading && !error && topUsers.length > 0 && (
          <>

            {/* Top 3 Podium - Only show if we have at least 3 users */}
            {topUsers.length >= 3 && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-end justify-center gap-4 mb-16 max-w-4xl mx-auto"
              >
                {/* 2nd Place */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="flex-1 max-w-[200px]"
                >
                  <div className="bg-gradient-to-br from-slate-700/90 to-gray-800/90 backdrop-blur-md rounded-2xl p-6 shadow-2xl border-2 border-slate-500/50 text-center transform hover:scale-105 transition-all hover:shadow-emerald-500/20">
                    {/* User Picture */}
                    {topUsers[1]?.picture ? (
                      <div className="mb-3 flex justify-center">
                        <img 
                          src={topUsers[1].picture} 
                          alt={topUsers[1]?.name || 'User'} 
                          className="w-16 h-16 rounded-full object-cover border-2 border-slate-400 shadow-lg"
                        />
                      </div>
                    ) : (
                      <div className="text-5xl mb-3 drop-shadow-lg">🥈</div>
                    )}
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <span className="text-3xl">{topUsers[1]?.badge || '🥈'}</span>
                      <div className="text-2xl font-bold text-white">#2</div>
                    </div>
                    <div className="text-lg font-semibold text-white mb-2">{topUsers[1]?.name || 'N/A'}</div>
                    <div className="text-xs text-emerald-200 mb-1 font-semibold bg-emerald-500/20 px-2 py-1 rounded-full inline-block">
                      {topUsers[1]?.achievementBadgeName || getAchievementBadgeName(topUsers[1]?.level) || 'N/A'}
                    </div>
                    <div className="inline-block px-3 py-1 bg-gradient-to-r from-slate-400 to-gray-500 text-white rounded-full text-xs font-bold mb-2 shadow-lg">
                      {topUsers[1]?.gp || 0} GP
                    </div>
                    {topUsers[1]?.coins > 0 && (
                      <div className="text-sm font-semibold text-emerald-400">{topUsers[1]?.coins} Coins</div>
                    )}
                  </div>
                </motion.div>

                {/* 1st Place */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="flex-1 max-w-[250px]"
                >
                  <div className="bg-gradient-to-br from-yellow-400 via-amber-500 to-orange-500 rounded-2xl p-8 shadow-2xl border-4 border-yellow-300 text-center transform hover:scale-105 transition-all relative hover:shadow-yellow-500/50">
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-300 to-orange-400 text-yellow-900 px-4 py-1 rounded-full text-xs font-bold shadow-lg">
                      CHAMPION
                    </div>
                    {/* User Picture */}
                    {topUsers[0]?.picture ? (
                      <div className="mb-4 flex justify-center">
                        <img 
                          src={topUsers[0].picture} 
                          alt={topUsers[0]?.name || 'Champion'} 
                          className="w-20 h-20 rounded-full object-cover border-4 border-yellow-200 shadow-2xl"
                        />
                      </div>
                    ) : (
                      <div className="text-6xl mb-4 drop-shadow-2xl">👑</div>
                    )}
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <span className="text-4xl drop-shadow-lg">{topUsers[0]?.badge || '🏆'}</span>
                      <div className="text-3xl font-bold text-white drop-shadow-lg">#1</div>
                    </div>
                    <div className="text-xl font-bold text-white mb-2 drop-shadow-md">{topUsers[0]?.name || 'N/A'}</div>
                    <div className="text-xs text-yellow-100 mb-1 font-semibold bg-yellow-500/30 px-3 py-1 rounded-full inline-block shadow-md">
                      {topUsers[0]?.achievementBadgeName || getAchievementBadgeName(topUsers[0]?.level) || 'N/A'}
                    </div>
                    <div className="inline-block px-4 py-2 bg-white/30 backdrop-blur-sm text-white rounded-full text-sm font-bold mb-2 shadow-lg">
                      {topUsers[0]?.gp || 0} GP
                    </div>
                    {topUsers[0]?.coins > 0 && (
                      <div className="text-base font-bold text-white drop-shadow-md">{topUsers[0]?.coins} Coins</div>
                    )}
                  </div>
                </motion.div>

                {/* 3rd Place */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="flex-1 max-w-[200px]"
                >
                  <div className="bg-gradient-to-br from-amber-700/90 to-orange-800/90 backdrop-blur-md rounded-2xl p-6 shadow-2xl border-2 border-amber-500/50 text-center transform hover:scale-105 transition-all hover:shadow-amber-500/20">
                    {/* User Picture */}
                    {topUsers[2]?.picture ? (
                      <div className="mb-3 flex justify-center">
                        <img 
                          src={topUsers[2].picture} 
                          alt={topUsers[2]?.name || 'User'} 
                          className="w-16 h-16 rounded-full object-cover border-2 border-amber-400 shadow-lg"
                        />
                      </div>
                    ) : (
                      <div className="text-5xl mb-3 drop-shadow-lg">🥉</div>
                    )}
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <span className="text-3xl">{topUsers[2]?.badge || '🥉'}</span>
                      <div className="text-2xl font-bold text-white">#3</div>
                    </div>
                    <div className="text-lg font-semibold text-white mb-2">{topUsers[2]?.name || 'N/A'}</div>
                    <div className="text-xs text-amber-100 mb-1 font-semibold bg-amber-600/20 px-2 py-1 rounded-full inline-block">
                      {topUsers[2]?.achievementBadgeName || getAchievementBadgeName(topUsers[2]?.level) || 'N/A'}
                    </div>
                    <div className="inline-block px-3 py-1 bg-gradient-to-r from-yellow-500 to-amber-600 text-white rounded-full text-xs font-bold mb-2 shadow-lg">
                      {topUsers[2]?.gp || 0} GP
                    </div>
                    {topUsers[2]?.coins > 0 && (
                      <div className="text-sm font-semibold text-amber-300">{topUsers[2]?.coins} Coins</div>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            )}

            {/* View All Button and List */}
            {topUsers.length > 3 && (
              <>
                {/* View All / Show Less Button */}
                <div className="text-center mb-8">
                  <motion.button
                    onClick={() => setShowAll(!showAll)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl"
                  >
                    {/* Animated background */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-teal-500 via-cyan-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    
                    {/* Shimmer effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      animate={{ x: ['-100%', '200%'] }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 3, ease: "linear" }}
                    />
                    
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {showAll ? (
                        <>
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                          </svg>
                          <span>Show Less</span>
                        </>
                      ) : (
                        <>
                          <span>View All Top 10 Recyclers</span>
                          <motion.svg 
                            className="w-5 h-5" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                            animate={{ y: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </motion.svg>
                        </>
                      )}
                    </span>
                  </motion.button>
                </div>

                {/* Display users starting from rank 4 (skip top 3) - Show top 10 total */}
                {showAll && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-gradient-to-br from-slate-800/90 to-gray-900/90 backdrop-blur-md rounded-2xl shadow-2xl border-2 border-emerald-500/30 overflow-hidden mb-12"
                  >
                    <div className="p-6 bg-slate-900/50">
                      {topUsers.slice(3, 10).map((user, index) => {
                        const displayIndex = index + 3; // Actual index in the array
                        return (
                          <motion.div
                            key={user.rank || displayIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-center justify-between p-4 rounded-xl mb-3 bg-slate-700/60 hover:bg-slate-700/80 backdrop-blur-sm border border-slate-600/50 transition-all transform hover:scale-[1.02]"
                          >
                            <div className="flex items-center space-x-4">
                              {/* User Picture */}
                              {user.picture ? (
                                <img 
                                  src={user.picture} 
                                  alt={user.name || 'User'} 
                                  className="w-12 h-12 rounded-full object-cover border-2 border-emerald-400/50 shadow-lg"
                                />
                              ) : (
                                <div className="w-12 h-12 rounded-full flex items-center justify-center text-2xl bg-emerald-500/20">
                                  {getRankBadge(user.rank)}
                                </div>
                              )}
                               <div className="flex-1">
                                 <div className="flex items-center gap-2 flex-wrap">
                                   <span className="text-xl text-emerald-400">
                                     {user.badge || getRankBadge(user.rank)}
                                   </span>
                                   <div className="font-bold text-lg text-white">
                                     {user.name}
                                   </div>
                                 </div>
                                 <div className="flex items-center gap-2 mt-1 mb-1 flex-wrap">
                                   <div className="text-xs font-semibold text-emerald-300">
                                     {user.achievementBadgeName || getAchievementBadgeName(user.level)}
                                   </div>
                                   <span className="text-xs text-emerald-400/70">•</span>
                                   <div className="text-xs font-semibold text-emerald-300/80">
                                     {user.level}
                                   </div>
                                 </div>
                                 {user.achievements > 0 && (
                                   <div className="text-sm text-emerald-300/80">
                                     {user.achievements} Achievements
                                   </div>
                                 )}
                               </div>
                            </div>
                            <div className="text-right">
                              <div className="flex items-center justify-end gap-2 mb-1">
                                <span className="text-lg text-emerald-400">
                                  {user.badge || getRankBadge(user.rank)}
                                </span>
                                <div className="font-bold text-sm text-gray-400">
                                  Rank #{user.rank}
                                </div>
                              </div>
                              <div className="font-bold text-emerald-400">
                                {user.gp} GP
                              </div>
                              {user.coins > 0 && (
                                <div className="text-sm text-emerald-300/70">
                                  {user.coins} Coins
                                </div>
                              )}
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </>
            )}
          </>
        )}

        {/* Empty State - No data and not loading */}
        {!loading && !error && topUsers.length === 0 && (
          <div className="text-center py-20">
            <div className="bg-slate-800/50 border border-emerald-500/30 rounded-xl p-8 max-w-md mx-auto">
              <p className="text-gray-300 text-lg">No leaderboard data available yet.</p>
              <p className="text-gray-400 text-sm mt-2">Be the first to join and climb the ranks!</p>
            </div>
          </div>
        )}

        {/* Ranking Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {rankingCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-slate-800/90 to-gray-900/90 backdrop-blur-md rounded-xl p-6 shadow-xl border-2 border-emerald-500/30 text-center transform hover:scale-105 transition-all hover:shadow-emerald-500/20 hover:border-emerald-400/50"
            >
              <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-br ${category.color} flex items-center justify-center text-3xl mb-4 shadow-2xl`}>
                {category.icon}
              </div>
              <h4 className="text-lg font-bold text-white mb-2">{category.name}</h4>
              <p className="text-sm text-emerald-200/80">{category.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Leaderboard

