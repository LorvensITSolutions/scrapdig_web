import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const RefundCancellationPolicy = () => {
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
            Refund & Cancellation Policy for ScrapDig
          </h1>
          <p className="text-gray-600 italic mb-8">
            <strong>Last Updated:</strong> December 20, 2024
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-primary pb-2">
              1. Introduction
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              ScrapDig ("we," "our," or "us") is committed to providing transparent and fair refund and cancellation policies. This Refund & Cancellation Policy explains the terms and conditions for refunds, cancellations, and related processes for transactions made through our mobile application ("App").
            </p>
            <p className="text-gray-700 leading-relaxed">
              By using our App, you agree to the terms outlined in this policy. Please read this policy carefully before making any transactions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-primary pb-2">
              2. General Refund Policy
            </h2>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
              2.1 Refund Eligibility
            </h3>
            <p className="text-gray-700 mb-3">Refunds may be processed in the following circumstances:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
              <li><strong className="text-primary">Failed Transactions:</strong> If a payment is deducted but the transaction fails to complete</li>
              <li><strong className="text-primary">Duplicate Payments:</strong> If the same payment is processed multiple times due to technical errors</li>
              <li><strong className="text-primary">Service Not Provided:</strong> If the service (scrap pickup, order delivery) is not provided as promised</li>
              <li><strong className="text-primary">Cancelled Orders:</strong> If an order is cancelled before processing or delivery</li>
              <li><strong className="text-primary">Technical Errors:</strong> If a payment is made due to a technical glitch or error in the App</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
              2.2 Non-Refundable Items
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
              <li>Completed scrap pickups where payment has been made to the seller</li>
              <li>Eco Store orders that have been delivered and accepted by the customer</li>
              <li>Virtual coins (points) that have been used or redeemed</li>
              <li>Processing fees charged by payment gateways (Razorpay)</li>
              <li>Services that have been fully utilized or consumed</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-primary pb-2">
              3. Payment Gateway Refunds
            </h2>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
              3.1 Razorpay/Cashfree Payments
            </h3>
            <p className="text-gray-700 mb-3">For payments made through payment gateways (Razorpay, Cashfree):</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
              <li><strong className="text-primary">Refund Processing Time:</strong> 5-7 business days after approval</li>
              <li><strong className="text-primary">Refund Method:</strong> Refunds will be credited to the original payment method used</li>
              <li><strong className="text-primary">Refund Amount:</strong> Full amount minus any processing fees (if applicable)</li>
              <li><strong className="text-primary">Bank Processing:</strong> Additional 2-3 business days may be required by your bank</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
              3.2 Refund Request Process
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4 mb-4">
              <li>Contact our support team via email or through the App</li>
              <li>Provide transaction details (Order ID, Payment ID, Amount, Date)</li>
              <li>Explain the reason for refund request</li>
              <li>Our team will review your request within 24-48 hours</li>
              <li>If approved, refund will be processed within 5-7 business days</li>
            </ol>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-primary pb-2">
              4. Virtual Coins (Points) Refunds
            </h2>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
              4.1 Points Refund Policy
            </h3>
            <p className="text-gray-700 mb-3">For virtual coins (points) in your wallet:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
              <li><strong className="text-primary">Unused Points:</strong> Points that have not been used can be refunded in certain circumstances</li>
              <li><strong className="text-primary">Used Points:</strong> Points that have been used for purchases cannot be refunded</li>
              <li><strong className="text-primary">Refund Method:</strong> Points refunds will be credited back to your wallet</li>
              <li><strong className="text-primary">Cash Conversion:</strong> Points cannot be converted to cash unless explicitly stated in special promotions</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
              4.2 Points Deduction
            </h3>
            <p className="text-gray-700 mb-3">Points may be deducted in the following cases:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
              <li>When you make a purchase using points</li>
              <li>When an order is cancelled after points have been used</li>
              <li>When a refund is processed, points will be restored to your wallet</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-primary pb-2">
              5. Order Cancellation
            </h2>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
              5.1 Eco Store Orders
            </h3>
            <p className="text-gray-700 mb-3">For orders placed in the Eco Store:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
              <li><strong className="text-primary">Before Processing:</strong> Orders can be cancelled free of charge before processing begins</li>
              <li><strong className="text-primary">After Processing:</strong> Cancellation may incur charges if the order has been processed</li>
              <li><strong className="text-primary">After Shipping:</strong> Orders cannot be cancelled once shipped, but may be returned (see Return Policy)</li>
              <li><strong className="text-primary">Refund Time:</strong> Refunds for cancelled orders will be processed within 5-7 business days</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
              5.2 Scrap Pickup Orders
            </h3>
            <p className="text-gray-700 mb-3">For scrap pickup requests:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
              <li><strong className="text-primary">Before Acceptance:</strong> Can be cancelled anytime before dealer accepts</li>
              <li><strong className="text-primary">After Acceptance:</strong> Cancellation may be subject to dealer's policy</li>
              <li><strong className="text-primary">After Pickup:</strong> Cannot be cancelled once scrap has been picked up</li>
              <li><strong className="text-primary">Payment Status:</strong> If payment was made, refund will be processed as per refund policy</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-primary pb-2">
              6. Cancellation Process
            </h2>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
              6.1 How to Cancel
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4 mb-4">
              <li>Go to the relevant section in the App (Orders, My Scraps, etc.)</li>
              <li>Select the order or service you wish to cancel</li>
              <li>Click on "Cancel" or "Cancel Order" button</li>
              <li>Provide reason for cancellation (if required)</li>
              <li>Confirm cancellation</li>
              <li>You will receive a confirmation email/SMS</li>
            </ol>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
              6.2 Cancellation Timeframe
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
              <li><strong className="text-primary">Eco Store Orders:</strong> Can be cancelled within 24 hours of placement (before processing)</li>
              <li><strong className="text-primary">Scrap Pickups:</strong> Can be cancelled anytime before dealer acceptance</li>
              <li><strong className="text-primary">After Processing:</strong> Cancellation may not be possible or may incur charges</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-primary pb-2">
              7. Refund Processing
            </h2>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
              7.1 Refund Timeline
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
              <li><strong className="text-primary">Request Review:</strong> 24-48 hours</li>
              <li><strong className="text-primary">Approval & Processing:</strong> 5-7 business days</li>
              <li><strong className="text-primary">Bank Processing:</strong> Additional 2-3 business days (for bank transfers)</li>
              <li><strong className="text-primary">Total Time:</strong> 7-10 business days from request approval</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
              7.2 Refund Methods
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
              <li><strong className="text-primary">Original Payment Method:</strong> Refunds will be credited to the same payment method used</li>
              <li><strong className="text-primary">Bank Transfer:</strong> For certain cases, refunds may be processed via bank transfer</li>
              <li><strong className="text-primary">Wallet Credit:</strong> In some cases, refunds may be credited to your ScrapDig wallet</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-primary pb-2">
              8. Dispute Resolution
            </h2>
            <p className="text-gray-700 mb-3">If you are not satisfied with a refund decision:</p>
            <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4 mb-4">
              <li>Contact our support team with detailed information about your dispute</li>
              <li>Provide all relevant transaction details, screenshots, and documentation</li>
              <li>Our team will review your case within 48-72 hours</li>
              <li>We will provide a resolution or escalate to higher management if needed</li>
              <li>Final decisions will be communicated via email or in-app notification</li>
            </ol>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-primary pb-2">
              9. Special Cases
            </h2>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
              9.1 Promotional Offers
            </h3>
            <p className="text-gray-700 mb-3">For transactions made during promotional offers:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
              <li>Refund policies may vary based on the specific terms of the promotion</li>
              <li>Please refer to the promotion's terms and conditions</li>
              <li>Promotional discounts or free items may not be refundable</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
              9.2 Force Majeure
            </h3>
            <p className="text-gray-700 mb-3">In case of events beyond our control (natural disasters, pandemics, etc.):</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
              <li>Refund processing may be delayed</li>
              <li>We will communicate any delays and provide updates</li>
              <li>We will make best efforts to process refunds as soon as possible</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-primary pb-2">
              10. Changes to This Policy
            </h2>
            <p className="text-gray-700 mb-3">We may update this Refund & Cancellation Policy from time to time. We will notify you of any changes by:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
              <li>Posting the new policy in the App</li>
              <li>Updating the "Last Updated" date</li>
              <li>Sending you a notification (for significant changes)</li>
            </ul>
            <p className="text-gray-700">
              Continued use of the App after changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section className="mb-8 bg-gray-50 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-primary pb-2">
              11. Contact Us
            </h2>
            <p className="text-gray-700 mb-4">For refund requests, cancellations, or questions about this policy, please contact us:</p>
            <div className="space-y-2 text-gray-700">
              <p><strong className="text-primary">Email:</strong> <a href="mailto:scrapdigofficial@gmail.com" className="text-primary hover:underline">scrapdigofficial@gmail.com</a></p>
              <p><strong className="text-primary">WhatsApp Channel:</strong> <a href="https://whatsapp.com/channel/0029VbC1utk84Om7YA561l3b" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Follow the ScrapDig - Earn from Waste channel on WhatsApp</a></p>
              <p><strong className="text-primary">Phone:</strong> <a href="tel:+918143928266" className="text-primary hover:underline">+91 8143928266</a></p>
            </div>
            <p className="text-gray-700 mt-4">
              <strong>Response Time:</strong> We aim to respond to all refund and cancellation requests within 24-48 hours during business days.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-primary pb-2">
              12. Acknowledgment
            </h2>
            <p className="text-gray-700">
              By using our App and making transactions, you acknowledge that you have read, understood, and agree to be bound by this Refund & Cancellation Policy.
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

export default RefundCancellationPolicy

