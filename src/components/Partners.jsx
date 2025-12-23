import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { fetchAPI, API_ENDPOINTS } from '../config/api'

const Partners = () => {
  const [partners, setPartners] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [selectedType, setSelectedType] = useState('all') // 'all', 'shopkeeper', 'dealer'
  const scrollContainerRef = useRef(null)

  // Fetch partners data
  useEffect(() => {
    const fetchPartners = async () => {
      try {
        setLoading(true)
        setError(null)
        
        // Fetch partners from API
        const data = await fetchAPI(`${API_ENDPOINTS.PARTNERS}?limit=50`)
        
        // Transform API data to match component structure
        if (data?.success && Array.isArray(data.partners)) {
          const transformedPartners = data.partners.map(partner => ({
            id: partner.id,
            name: partner.name,
            type: partner.role, // API returns 'role' (shopkeeper/dealer)
            shopName: partner.shopName || partner.name,
            location: partner.location || 'Location not specified',
            rating: partner.rating || null,
            totalOrders: partner.totalOrders || 0,
            verified: partner.verified || false,
            picture: partner.picture || '',
            specialties: partner.specialties || [],
            description: partner.description || `A ${partner.role} committed to sustainable recycling.`,
            // Additional fields from API
            email: partner.email || '',
            phoneNumber: partner.phoneNumber || '',
            address: partner.address || '',
            fullAddress: partner.fullAddress || '',
            shopAddress: partner.shopAddress || {},
            gstNumber: partner.gstNumber || '',
            panNumber: partner.panNumber || ''
          }))
          
          setPartners(transformedPartners)
        } else {
          setPartners([])
        }
      } catch (err) {
        console.error('Failed to fetch partners:', err)
        setError('Failed to load partners. Please try again later.')
        setPartners([])
      } finally {
        setLoading(false)
      }
    }

    fetchPartners()
  }, [])

  // Filter partners based on selected type
  const filteredPartners = selectedType === 'all' 
    ? partners 
    : partners.filter(p => p.type === selectedType)

  // Navigation functions
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const cardWidth = 360 // w-[360px] on large screens
      const gap = 24 // gap-6
      const scrollAmount = cardWidth + gap
      scrollContainerRef.current.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const cardWidth = 360 // w-[360px] on large screens
      const gap = 24 // gap-6
      const scrollAmount = cardWidth + gap
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  // Reset scroll position when filter changes
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = 0
    }
  }, [selectedType])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
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
    <section id="partners" className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-emerald-50/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-emerald-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-teal-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-10 lg:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 px-2">
            Trusted <span className="text-primary">Eco Partners</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
            Meet our verified network of shopkeepers and dealers committed to sustainable recycling and fair trade practices
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center gap-2 sm:gap-3 mb-8 sm:mb-10 lg:mb-12 flex-wrap px-2"
        >
          {[
            { id: 'all', label: 'All Partners', icon: '🤝' },
            { id: 'shopkeeper', label: 'Shopkeepers', icon: '🏪' },
            { id: 'dealer', label: 'Dealers', icon: '🏭' }
          ].map((filter) => (
            <motion.button
              key={filter.id}
              onClick={() => setSelectedType(filter.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl font-medium text-xs sm:text-sm transition-all duration-300 ${
                selectedType === filter.id
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/30'
                  : 'bg-white/70 backdrop-blur-md text-gray-700 hover:bg-white/80 border border-white/50 shadow-md hover:shadow-lg'
              }`}
            >
              <span className="mr-1.5 sm:mr-2">{filter.icon}</span>
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Loading State */}
        {loading && (
          <div className="text-center py-20">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 border-4 border-emerald-500 border-t-transparent rounded-full mx-auto mb-3 sm:mb-4"
            />
            <p className="text-gray-600 text-sm sm:text-base md:text-lg">Loading partners...</p>
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <div className="text-center py-20">
            <div className="bg-red-500/20 border border-red-500/50 rounded-xl p-4 sm:p-5 md:p-6 max-w-md mx-auto">
              <p className="text-red-600 text-sm sm:text-base md:text-lg px-2">{error}</p>
            </div>
          </div>
        )}

        {/* Partners Grid - Horizontal Scrollable */}
        {!loading && !error && filteredPartners.length > 0 && (
          <div className="relative">
            {/* Left Navigation Button */}
            <button
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-8 md:-translate-x-12 z-20 bg-white/90 backdrop-blur-md hover:bg-white rounded-full p-3 sm:p-4 shadow-xl border border-gray-200 transition-all duration-300 group hover:scale-110"
              aria-label="Scroll left"
            >
              <svg 
                className="w-6 h-6 sm:w-8 sm:h-8 text-gray-700 group-hover:text-emerald-600 transition-colors" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Right Navigation Button */}
            <button
              onClick={scrollRight}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-8 md:translate-x-12 z-20 bg-white/90 backdrop-blur-md hover:bg-white rounded-full p-3 sm:p-4 shadow-xl border border-gray-200 transition-all duration-300 group hover:scale-110"
              aria-label="Scroll right"
            >
              <svg 
                className="w-6 h-6 sm:w-8 sm:h-8 text-gray-700 group-hover:text-emerald-600 transition-colors" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <div 
              ref={scrollContainerRef}
              className="overflow-x-auto pb-4 scrollbar-hide -mx-4 sm:mx-0 px-4 sm:px-0"
            >
              <motion.div
                key={selectedType} // Force re-animation when filter changes
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="flex gap-4 sm:gap-5 lg:gap-6 min-w-max"
              >
              {filteredPartners.map((partner, index) => {
              return (
              <motion.div
                key={partner.id}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.01 }}
                className="partner-card group relative flex flex-col flex-shrink-0 w-[320px] sm:w-[340px] lg:w-[360px]"
              >
                {/* ID Card with professional background */}
                <div className="relative rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 h-full flex flex-col overflow-hidden border-2 border-gray-200/50 backdrop-blur-sm">
                  {/* Professional Background with subtle pattern */}
                  <div className={`absolute inset-0 ${
                    partner.type === 'dealer'
                      ? 'bg-gradient-to-br from-slate-700 via-slate-600 to-slate-700'
                      : 'bg-gradient-to-br from-blue-700 via-blue-600 to-blue-700'
                  }`}>
                    {/* Subtle pattern overlay */}
                    <div className="absolute inset-0 opacity-10" style={{
                      backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)`
                    }}></div>
                    {/* Additional blur overlay for depth */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10"></div>
                  </div>
                  
                  {/* Top header section - ID card style */}
                  <div className={`relative z-10 px-6 py-4 backdrop-blur-md ${
                    partner.type === 'dealer'
                      ? 'bg-gradient-to-r from-slate-800/95 to-slate-700/95'
                      : 'bg-gradient-to-r from-blue-800/95 to-blue-700/95'
                  } border-b-2 border-white/10`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-lg">
                          <span className="text-xl">{partner.type === 'dealer' ? '🏭' : '🏪'}</span>
                        </div>
                        <div>
                          <div className="text-white/80 text-xs font-medium uppercase tracking-wider">ScrapDig Partner</div>
                          <div className="text-white text-sm font-bold">
                            {partner.type === 'dealer' ? 'Dealer' : 'Shopkeeper'}
                          </div>
                        </div>
                      </div>
                      {partner.verified && (
                        <div className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-500/25 backdrop-blur-md border border-emerald-400/40 rounded-lg shadow-lg">
                          <svg className="w-4 h-4 text-emerald-300" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-emerald-300 text-xs font-bold">VERIFIED</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Main content area - White/light background */}
                  <div className="relative z-10 bg-white flex-grow px-6 py-5 flex flex-col">
                    {/* Photo and info section */}
                    <div className="flex items-start gap-4 mb-5">
                      {/* Photo section */}
                      <div className="relative flex-shrink-0">
                        <div className="w-20 h-20 rounded-lg overflow-hidden border-4 border-gray-200 shadow-lg bg-gradient-to-br from-gray-100 to-gray-200">
                          {partner.picture ? (
                            <img
                              src={partner.picture}
                              alt={partner.name}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className={`w-full h-full flex items-center justify-center text-3xl ${
                              partner.type === 'dealer'
                                ? 'bg-gradient-to-br from-slate-400 to-slate-500'
                                : 'bg-gradient-to-br from-blue-400 to-blue-500'
                            }`}>
                              {partner.type === 'dealer' ? '🏭' : '🏪'}
                            </div>
                          )}
                        </div>
                        {/* Rating badge */}
                        {partner.rating && (
                          <div className="absolute -bottom-1 -right-1 bg-amber-500 text-white px-2 py-0.5 rounded-md text-xs font-bold shadow-lg flex items-center gap-1 border-2 border-white">
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            {partner.rating}
                          </div>
                        )}
                      </div>

                      {/* Info section */}
                      <div className="flex-grow min-w-0">
                        <h3 className="text-lg font-bold text-gray-900 mb-1 line-clamp-1 border-b-2 border-gray-200 pb-2">
                          {partner.shopName}
                        </h3>
                        <div className="space-y-1.5 mt-2">
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span className="line-clamp-1 text-xs">{partner.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="mb-4 pb-4 border-b border-gray-200">
                      <p className="text-xs text-gray-600 leading-relaxed line-clamp-2">
                        {partner.description}
                      </p>
                    </div>

                    {/* Specialties */}
                    {partner.specialties.length > 0 && (
                      <div className="mb-4">
                        <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Specialties</div>
                        <div className="flex flex-wrap gap-1.5">
                          {partner.specialties.slice(0, 3).map((specialty, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium border border-gray-200"
                            >
                              {specialty}
                            </span>
                          ))}
                          {partner.specialties.length > 3 && (
                            <span className="px-2 py-1 bg-gray-100 text-gray-500 rounded text-xs font-medium border border-gray-200">
                              +{partner.specialties.length - 3}
                            </span>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Stats footer - ID card style */}
                    <div className="mt-auto pt-4 border-t-2 border-gray-300 bg-gradient-to-r from-gray-50 to-white -mx-6 px-6 pb-2">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center">
                          <div className={`text-2xl font-extrabold ${
                            partner.type === 'dealer'
                              ? 'text-slate-700'
                              : 'text-blue-700'
                          } mb-1`}>
                            {partner.totalOrders.toLocaleString()}+
                          </div>
                          <div className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Total Orders</div>
                        </div>
                        <div className="text-center border-l-2 border-gray-200">
                          <div className="text-2xl font-extrabold text-amber-600 mb-1 flex items-center justify-center gap-1">
                            {partner.rating ? (
                              <>
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                {partner.rating}
                              </>
                            ) : (
                              <span className="text-gray-400">N/A</span>
                            )}
                          </div>
                          <div className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Rating</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
              )
            })}
              </motion.div>
            </div>
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && filteredPartners.length === 0 && (
          <div className="text-center py-20">
            <div className="bg-white/70 backdrop-blur-lg border border-white/50 rounded-xl sm:rounded-2xl p-6 sm:p-7 md:p-8 max-w-md mx-auto shadow-lg">
              <p className="text-gray-700 text-base sm:text-lg font-semibold">No partners found.</p>
              <p className="text-gray-500 text-xs sm:text-sm mt-2">Try selecting a different category.</p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Partners

