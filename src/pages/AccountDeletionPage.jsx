import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const AccountDeletionPage = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Account Deletion Request – ScrapDig
          </h1>
          <p className="text-gray-600 italic mb-8">
            <strong>Last Updated:</strong> December 20, 2024
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-primary pb-2">
              1. Introduction
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              At ScrapDig, we respect your right to control your personal data. This page explains how you can request deletion of your ScrapDig account and associated data.
            </p>
            <p className="text-gray-700 leading-relaxed">
              If you wish to permanently delete your account and remove your personal information from our systems, please follow the process outlined below.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-primary pb-2">
              2. How to Request Account Deletion
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Users can request deletion of their ScrapDig account and associated data by:
            </p>
            
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <ol className="list-decimal list-inside space-y-3 text-gray-700">
                <li><strong className="text-primary">Sending an email to:</strong> <a href="mailto:support@yeslorvens.com" className="text-primary hover:underline">support@yeslorvens.com</a></li>
                <li><strong className="text-primary">Mentioning their registered email address</strong> associated with the ScrapDig account</li>
                <li><strong className="text-primary">Requesting account deletion</strong> in the email subject or body</li>
              </ol>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
              2.1 Email Requirements
            </h3>
            <p className="text-gray-700 mb-3">To process your deletion request, please include the following information in your email:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
              <li>Your registered email address used for the ScrapDig account</li>
              <li>Your full name (as registered in the account)</li>
              <li>Clear statement requesting account deletion</li>
              <li>Any additional verification information if requested by our support team</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-primary pb-2">
              3. Account Deletion Process
            </h2>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
              3.1 Verification
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Upon receiving your deletion request, our support team will:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
              <li>Verify your identity and account ownership</li>
              <li>Confirm the email address matches the registered account</li>
              <li>Process your deletion request securely</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
              3.2 Deletion Timeline
            </h3>
            <p className="text-gray-700 mb-3">After verification:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
              <li><strong className="text-primary">User account will be permanently deleted within 7 working days</strong> from the date of verification</li>
              <li>You will receive a confirmation email once the deletion process is complete</li>
              <li>After deletion, you will no longer be able to access your account or recover any data</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-primary pb-2">
              4. Data Deletion Details
            </h2>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
              4.1 Data That Will Be Deleted
            </h3>
            <p className="text-gray-700 mb-3">The following personal data will be permanently removed from our systems:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
              <li><strong className="text-primary">Personal Information:</strong> Name, email address, phone number</li>
              <li><strong className="text-primary">Account Data:</strong> Profile information, preferences, settings</li>
              <li><strong className="text-primary">Listings:</strong> All scrap listings and associated data</li>
              <li><strong className="text-primary">Activity Data:</strong> App usage history, recycling records</li>
              <li><strong className="text-primary">Referral Data:</strong> Referral codes and referral history</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
              4.2 Data Retention for Compliance
            </h3>
            <p className="text-gray-700 mb-3">
              <strong className="text-primary">Certain transactional or legal records may be retained for compliance purposes for up to 90 days.</strong>
            </p>
            <p className="text-gray-700 mb-3">This may include:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
              <li>Financial transaction records (for tax and legal compliance)</li>
              <li>Legal documentation required by law</li>
              <li>Records necessary for dispute resolution</li>
              <li>Data required for regulatory compliance</li>
            </ul>
            <p className="text-gray-700 italic text-sm">
              After the retention period, all retained data will be permanently deleted.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-primary pb-2">
              5. Important Considerations
            </h2>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
              5.1 Before Requesting Deletion
            </h3>
            <p className="text-gray-700 mb-3">Please consider the following before requesting account deletion:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
              <li><strong className="text-primary">Irreversible Action:</strong> Account deletion is permanent and cannot be undone</li>
              <li><strong className="text-primary">Data Loss:</strong> All your data, including recycling history, coins, and achievements will be permanently lost</li>
              <li><strong className="text-primary">Pending Transactions:</strong> Ensure all pending transactions are completed before deletion</li>
              <li><strong className="text-primary">Coins and Rewards:</strong> Any unused coins or rewards will be forfeited upon deletion</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
              5.2 Alternative Options
            </h3>
            <p className="text-gray-700 mb-3">If you don't want to permanently delete your account, consider:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
              <li>Deactivating your account temporarily (contact support for options)</li>
              <li>Updating your privacy settings</li>
              <li>Unsubscribing from notifications</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-primary pb-2">
              6. Contact Support
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              For questions about account deletion, the deletion process, or any concerns, please contact our support team:
            </p>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="space-y-2 text-gray-700">
                <p><strong className="text-primary">Email:</strong> <a href="mailto:support@yeslorvens.com" className="text-primary hover:underline">support@yeslorvens.com</a></p>
                <p className="text-sm text-gray-600 mt-4">
                  Our support team will respond to your account deletion request and any questions within 24-48 hours during business days.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-primary pb-2">
              7. Changes to This Policy
            </h2>
            <p className="text-gray-700 mb-3">ScrapDig may update this Account Deletion Policy from time to time. We will notify you of any changes by:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
              <li>Posting the updated policy in the app</li>
              <li>Updating the "Last Updated" date</li>
              <li>Sending you a notification for significant changes</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-primary pb-2">
              8. Acknowledgment
            </h2>
            <p className="text-gray-700">
              By requesting account deletion, you acknowledge that you understand the permanent nature of this action and that all your data will be removed in accordance with this policy and applicable data protection laws.
            </p>
          </section>

          <div className="mt-12 pt-8 border-t border-gray-200 text-center">
            <p className="text-gray-600 text-sm">
              © 2024 YesLorvens. All rights reserved.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default AccountDeletionPage

