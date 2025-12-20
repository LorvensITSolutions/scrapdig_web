import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { fetchAPI, API_ENDPOINTS } from '../config/api'

const Partners = () => {
  const [partners, setPartners] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [selectedType, setSelectedType] = useState('all') // 'all', 'shopkeeper', 'dealer'

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
          <div className="overflow-x-auto pb-4 scrollbar-hide -mx-4 sm:mx-0 px-4 sm:px-0">
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
                whileHover={{ y: -8 }}
                className="group relative bg-white/70 backdrop-blur-lg rounded-xl p-4 border border-white/50 shadow-lg hover:shadow-2xl hover:border-white/80 transition-all duration-300 flex flex-col flex-shrink-0 w-[280px] sm:w-[300px]"
              >
                {/* Glass effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent rounded-2xl pointer-events-none"></div>
                
                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  {/* Header with badges */}
                  <div className="flex items-start justify-between mb-3">
                    {/* Partner Type Badge */}
                    <div className={`px-2 py-0.5 rounded-lg text-[9px] font-semibold ${
                      partner.type === 'dealer'
                        ? 'bg-blue-500/10 text-blue-700 border border-blue-200'
                        : 'bg-purple-500/10 text-purple-700 border border-purple-200'
                    }`}>
                      {partner.type === 'dealer' ? '🏭 Dealer' : '🏪 Shopkeeper'}
                    </div>
                    
                    {/* Verified Badge */}
                    {partner.verified && (
                      <div className="flex items-center gap-1 px-1.5 py-0.5 bg-emerald-500/10 text-emerald-700 rounded-lg text-[9px] font-semibold border border-emerald-200">
                        <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Verified
                      </div>
                    )}
                  </div>

                  {/* Partner Image/Icon */}
                  <div className="flex justify-center mb-3">
                    <div className="relative">
                      {partner.picture ? (
                        <motion.img
                          src={partner.picture}
                          alt={partner.name}
                          className="w-20 h-20 rounded-full object-cover border-2 border-white shadow-xl"
                          whileHover={{ scale: 1.05 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        />
                      ) : (
                        <motion.div 
                          className={`w-20 h-20 rounded-full bg-gradient-to-br ${
                            partner.type === 'dealer' 
                              ? 'from-blue-500 to-cyan-500' 
                              : 'from-purple-500 to-pink-500'
                          } flex items-center justify-center text-3xl shadow-xl`}
                          whileHover={{ scale: 1.05 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          {partner.type === 'dealer' ? '🏭' : '🏪'}
                        </motion.div>
                      )}
                      {/* Rating Badge */}
                      {partner.rating && (
                        <motion.div 
                          className="absolute -bottom-1 -right-1 bg-gradient-to-r from-amber-400 to-orange-500 text-white px-1.5 py-0.5 rounded-full text-[9px] font-bold shadow-lg flex items-center gap-0.5 border-2 border-white"
                          whileHover={{ scale: 1.1 }}
                        >
                          <svg className="w-2 h-2" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          {partner.rating}
                        </motion.div>
                      )}
                    </div>
                  </div>

                  {/* Partner Info */}
                  <div className="text-center flex-grow flex flex-col">
                    <h3 className="text-sm font-bold text-gray-900 mb-1 group-hover:text-emerald-600 transition-colors truncate">
                      {partner.shopName}
                    </h3>
                    <p className="text-[10px] text-gray-600 mb-2 font-medium flex items-center justify-center gap-0.5">
                      <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="truncate">{partner.location}</span>
                    </p>
                    
                    {/* Description */}
                    <p className="text-[10px] text-gray-600 mb-2 line-clamp-2 leading-relaxed flex-grow">
                      {partner.description}
                    </p>

                    {/* Specialties */}
                    {partner.specialties.length > 0 && (
                      <div className="flex flex-wrap justify-center gap-1 mb-2">
                        {partner.specialties.slice(0, 2).map((specialty, idx) => (
                          <span
                            key={idx}
                            className="px-1.5 py-0.5 bg-white/80 backdrop-blur-sm text-gray-700 rounded-full text-[9px] font-medium border border-gray-200"
                          >
                            {specialty}
                          </span>
                        ))}
                        {partner.specialties.length > 2 && (
                          <span className="px-1.5 py-0.5 bg-white/80 backdrop-blur-sm text-gray-500 rounded-full text-[9px] font-medium border border-gray-200">
                            +{partner.specialties.length - 2}
                          </span>
                        )}
                      </div>
                    )}

                    {/* Stats */}
                    <div className="flex items-center justify-center gap-3 pt-2 mt-auto border-t border-gray-200/50">
                      <div className="text-center">
                        <div className="text-sm font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                          {partner.totalOrders.toLocaleString()}+
                        </div>
                        <div className="text-[9px] text-gray-500 font-medium">Orders</div>
                      </div>
                      <div className="w-px h-5 bg-gray-300/50"></div>
                      <div className="text-center">
                        <div className="text-sm font-bold bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                          {partner.rating || 'N/A'}
                        </div>
                        <div className="text-[9px] text-gray-500 font-medium">Rating</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
              )
            })}
            </motion.div>
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

