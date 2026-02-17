import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import PrivacyPolicy from './pages/PrivacyPolicy'
import RefundCancellationPolicy from './pages/RefundCancellationPolicy'
import ReferralPage from './pages/ReferralPage'
import AccountDeletionPage from './pages/AccountDeletionPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/refund-cancellation-policy" element={<RefundCancellationPolicy />} />
        <Route path="/referral" element={<ReferralPage />} />
        <Route path="/account-deletion" element={<AccountDeletionPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
