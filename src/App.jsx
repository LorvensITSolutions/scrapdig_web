import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

const HomePage = lazy(() => import('./pages/HomePage'))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'))
const RefundCancellationPolicy = lazy(() => import('./pages/RefundCancellationPolicy'))
const ReferralPage = lazy(() => import('./pages/ReferralPage'))
const AccountDeletionPage = lazy(() => import('./pages/AccountDeletionPage'))

const PageLoader = () => (
  <div className="min-h-screen bg-white" aria-busy="true" aria-label="Loading page" />
)

const AnimatedRoutes = () => {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.15, ease: 'easeOut' }}
      >
        <Suspense fallback={<PageLoader />}>
          <Routes location={location}>
            <Route path="/" element={<HomePage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/refund-cancellation-policy" element={<RefundCancellationPolicy />} />
            <Route path="/referral" element={<ReferralPage />} />
            <Route path="/account-deletion" element={<AccountDeletionPage />} />
          </Routes>
        </Suspense>
      </motion.div>
    </AnimatePresence>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  )
}

export default App
