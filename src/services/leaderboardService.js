import { fetchAPI, API_ENDPOINTS } from '../config/api'

/**
 * Fetch top users from leaderboard
 * @param {number} limit - Number of top users to fetch (default: 10)
 * @param {number} page - Page number (default: 1)
 * @returns {Promise<Array>} Array of top users
 */
export const getTopUsers = async (limit = 10, page = 1) => {
  try {
    // The actual endpoint is /api/levels/leaderboard
    // Response format: { success: true, leaderboard: [...], userRank: ..., totalUsers: ..., pagination: {...} }
    const data = await fetchAPI(`${API_ENDPOINTS.LEADERBOARD}?limit=${limit}&page=${page}`)

    // The backend returns: { success, leaderboard, userRank, userRankPercentage, totalUsers, pagination }
    if (data?.success && Array.isArray(data.leaderboard)) {
      console.log("data.leaderboard", data.leaderboard)
      return data.leaderboard
    } else if (Array.isArray(data)) {
      console.log("data", data)
      return data
    } else if (data?.users && Array.isArray(data.users)) {
      console.log("data.users", data.users)
      return data.users
    } else if (data?.data && Array.isArray(data.data)) {
      console.log("data.data", data.data)
      return data.data
    } else if (data?.result && Array.isArray(data.result)) {
      console.log("data.result", data.result)
      return data.result
    }

    // If no array found, return empty array
    console.warn('Unexpected API response format:', data)
    return []
  } catch (error) {
    console.error('Error fetching top users:', error)
    throw error
  }
}

/**
 * Fetch leaderboard by category
 * @param {string} category - Category type (e.g., 'gp', 'coins', 'impact', 'referrals')
 * @param {number} limit - Number of users to fetch
 * @returns {Promise<Array>} Array of users ranked by category
 */
export const getLeaderboardByCategory = async (category = 'gp', limit = 10) => {
  try {
    const data = await fetchAPI(`${API_ENDPOINTS.LEADERBOARD}/${category}?limit=${limit}`)
    return data
  } catch (error) {
    console.error('Error fetching leaderboard by category:', error)
    throw error
  }
}

/**
 * Get user's current rank
 * @param {string} userId - User ID
 * @returns {Promise<Object>} User rank information
 */
export const getUserRank = async (userId) => {
  try {
    const data = await fetchAPI(`${API_ENDPOINTS.USER_RANK}/${userId}`)
    return data
  } catch (error) {
    console.error('Error fetching user rank:', error)
    throw error
  }
}

