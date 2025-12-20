// API Configuration
// Backend API URL: https://api.lorvensit.online
// All API routes are prefixed with /api
// Reference: https://api.lorvensit.online/

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://api.lorvensit.online'

// API Endpoints - Based on actual backend routes
// Public leaderboard endpoint (no authentication required)
export const API_ENDPOINTS = {
  LEADERBOARD: '/api/levels/leaderboard/public',
  TOP_USERS: '/api/levels/leaderboard/public', // Same endpoint with limit parameter
  USER_RANK: '/api/levels/leaderboard/public', // Same endpoint
  PARTNERS: '/api/partners/public', // Public partners endpoint (shopkeepers and dealers)
  PARTNER_BY_ID: '/api/partners/public', // Get single partner by ID
}

// Helper function to make API calls with better error handling
export const fetchAPI = async (endpoint, options = {}) => {
  // Remove trailing slash from base URL and leading slash from endpoint to avoid double slashes
  const baseUrl = API_BASE_URL.replace(/\/$/, '')
  const cleanEndpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`
  const url = `${baseUrl}${cleanEndpoint}`
  
  const defaultOptions = {
    headers: {
      'Content-Type': 'application/json',
    },
  }

  try {
    console.log('Fetching from:', url) // Debug log
    
    const response = await fetch(url, {
      ...defaultOptions,
      ...options,
      headers: {
        ...defaultOptions.headers,
        ...options.headers,
      },
    })

    if (!response.ok) {
      const errorText = await response.text()
      throw new Error(`API Error: ${response.status} ${response.statusText} - ${errorText}`)
    }

    const data = await response.json()
    return data
  } catch (error) {
    // More detailed error logging
    if (error.name === 'TypeError' && error.message.includes('Failed to fetch')) {
      const networkError = new Error(
        `Network Error: Cannot reach API at ${url}. ` +
        `Please check:\n` +
        `1. Is the API server running?\n` +
        `2. Is the URL correct? (Current: ${API_BASE_URL})\n` +
        `3. Are there CORS issues?\n` +
        `4. Is the endpoint path correct? (Current: ${endpoint})`
      )
      console.error('Network Error Details:', {
        url,
        baseUrl: API_BASE_URL,
        endpoint,
        error: error.message
      })
      throw networkError
    }
    
    console.error('API Error:', {
      url,
      error: error.message,
      stack: error.stack
    })
    throw error
  }
}

