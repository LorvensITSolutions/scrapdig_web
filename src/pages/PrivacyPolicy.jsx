import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const PrivacyPolicy = () => {
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
            Privacy Policy for ScrapDig
          </h1>
          <p className="text-gray-600 italic mb-8">
            <strong>Last Updated:</strong> December 10, 2024
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-primary pb-2">
              1. Introduction
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              ScrapDig ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application ("App").
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-primary pb-2">
              2. Information We Collect
            </h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
              2.1 Personal Information
            </h3>
            <p className="text-gray-700 mb-3">We collect information that you provide directly to us, including:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
              <li><strong className="text-primary">Account Information:</strong> Name, email address, phone number, date of birth</li>
              <li><strong className="text-primary">Profile Information:</strong> Profile picture, address, college name, shop name (for dealers)</li>
              <li><strong className="text-primary">Identity Information:</strong> PAN number, GST number (for dealers)</li>
              <li><strong className="text-primary">Payment Information:</strong> Payment method details, transaction history</li>
              <li><strong className="text-primary">Location Data:</strong> Address and location for scrap pickup/delivery services</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
              2.2 Automatically Collected Information
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
              <li><strong className="text-primary">Device Information:</strong> Device type, operating system, unique device identifiers</li>
              <li><strong className="text-primary">Usage Data:</strong> App usage patterns, features accessed, time spent in app</li>
              <li><strong className="text-primary">Technical Data:</strong> IP address, browser type, mobile network information</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
              2.3 Permissions We Request
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
              <li><strong className="text-primary">Camera:</strong> To take photos of scrap items</li>
              <li><strong className="text-primary">Storage/Photos:</strong> To access and save images</li>
              <li><strong className="text-primary">Notifications:</strong> To send you updates about orders, payments, and app features</li>
              <li><strong className="text-primary">Internet:</strong> To connect to our servers and provide app functionality</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-primary pb-2">
              3. How We Use Your Information
            </h2>
            <p className="text-gray-700 mb-3">We use the information we collect to:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
              <li><strong className="text-primary">Provide Services:</strong> Process scrap orders, manage pickups, handle payments</li>
              <li><strong className="text-primary">Account Management:</strong> Create and manage your account, authenticate users</li>
              <li><strong className="text-primary">Communication:</strong> Send notifications, updates, and respond to your inquiries</li>
              <li><strong className="text-primary">Improve Services:</strong> Analyze usage patterns to improve app functionality</li>
              <li><strong className="text-primary">Security:</strong> Detect and prevent fraud, unauthorized access, and other security issues</li>
              <li><strong className="text-primary">Referral Program:</strong> Track and manage referral rewards and level progressions</li>
              <li><strong className="text-primary">Legal Compliance:</strong> Comply with applicable laws and regulations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-primary pb-2">
              4. Data Storage and Security
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
              <li><strong className="text-primary">Local Storage:</strong> Some data (authentication tokens, user preferences) is stored locally on your device using secure storage mechanisms</li>
              <li><strong className="text-primary">Server Storage:</strong> Your personal information is stored on secure servers</li>
              <li><strong className="text-primary">Encryption:</strong> We use industry-standard encryption to protect your data during transmission</li>
              <li><strong className="text-primary">Access Control:</strong> Access to your personal information is restricted to authorized personnel only</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-primary pb-2">
              5. Data Sharing and Disclosure
            </h2>
            <p className="text-gray-700 mb-3">We do not sell your personal information. We may share your information only in the following circumstances:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
              <li><strong className="text-primary">Service Providers:</strong> With third-party service providers who assist in operating our app (payment processors, cloud storage providers)</li>
              <li><strong className="text-primary">Business Transfers:</strong> In connection with any merger, sale, or acquisition</li>
              <li><strong className="text-primary">Legal Requirements:</strong> When required by law or to protect our rights</li>
              <li><strong className="text-primary">With Your Consent:</strong> When you explicitly consent to sharing</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
              5.1 Third-Party Services
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
              <li><strong className="text-primary">Google Sign-In:</strong> We use Google authentication services</li>
              <li><strong className="text-primary">Firebase:</strong> For push notifications and analytics</li>
              <li><strong className="text-primary">Payment Processors:</strong> Razorpay, Cashfree for payment processing</li>
              <li><strong className="text-primary">Cloud Storage:</strong> For storing images and documents</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-primary pb-2">
              6. Your Rights and Choices
            </h2>
            <p className="text-gray-700 mb-3">You have the right to:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
              <li><strong className="text-primary">Access:</strong> Request access to your personal information</li>
              <li><strong className="text-primary">Correction:</strong> Update or correct your personal information through the app</li>
              <li><strong className="text-primary">Deletion:</strong> Request deletion of your account and personal information</li>
              <li><strong className="text-primary">Opt-Out:</strong> Unsubscribe from marketing communications</li>
              <li><strong className="text-primary">Data Portability:</strong> Request a copy of your data</li>
            </ul>
            <p className="text-gray-700">
              To exercise these rights, please contact us using the information provided in the Contact Us section.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-primary pb-2">
              7. Cookies and Tracking Technologies
            </h2>
            <p className="text-gray-700 mb-3">We use cookies and similar tracking technologies to:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
              <li>Remember your preferences</li>
              <li>Analyze app usage</li>
              <li>Improve user experience</li>
            </ul>
            <p className="text-gray-700">You can control cookie preferences through your device settings.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-primary pb-2">
              8. Children's Privacy
            </h2>
            <p className="text-gray-700">
              Our app is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-primary pb-2">
              9. Data Retention
            </h2>
            <p className="text-gray-700 mb-3">We retain your personal information for as long as necessary to:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
              <li>Provide our services</li>
              <li>Comply with legal obligations</li>
              <li>Resolve disputes</li>
              <li>Enforce our agreements</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-primary pb-2">
              10. International Data Transfers
            </h2>
            <p className="text-gray-700">
              Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place to protect your data.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-primary pb-2">
              11. Changes to This Privacy Policy
            </h2>
            <p className="text-gray-700 mb-3">We may update this Privacy Policy from time to time. We will notify you of any changes by:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
              <li>Posting the new Privacy Policy in the app</li>
              <li>Updating the "Last Updated" date</li>
              <li>Sending you a notification (for significant changes)</li>
            </ul>
          </section>

          <section className="mb-8 bg-gray-50 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-primary pb-2">
              12. Contact Us
            </h2>
            <p className="text-gray-700 mb-4">If you have questions about this Privacy Policy, please contact us:</p>
            <div className="space-y-2 text-gray-700">
              <p><strong className="text-primary">Email:</strong> <a href="mailto:lorvensitsolutionspvtltd@gmail.com" className="text-primary hover:underline">lorvensitsolutionspvtltd@gmail.com</a></p>
              <p><strong className="text-primary">Website:</strong> <a href="https://yeslorvens.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://yeslorvens.com</a></p>
              <p><strong className="text-primary">Address:</strong> Road NO.86, 1st Floor, Jubilee hills, Hyderabad, Telangana, India</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-primary pb-2">
              13. Consent
            </h2>
            <p className="text-gray-700">
              By using our app, you consent to our Privacy Policy and agree to its terms.
            </p>
          </section>

          <div className="mt-12 pt-8 border-t border-gray-200 text-center">
            <p className="text-gray-600 text-sm">
              © 2024 ScrapDig. All rights reserved.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default PrivacyPolicy

