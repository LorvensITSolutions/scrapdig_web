import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const HelpCenter = () => {
  const [openCategory, setOpenCategory] = useState(null)
  const [openQuestion, setOpenQuestion] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')

  const faqCategories = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600',
      questions: [
        {
          q: 'How do I create an account on ScrapDig?',
          a: 'Creating an account is easy! Download the ScrapDig app and click "Sign Up". You can register using your email address, phone number, or sign in with Google. Complete your profile with basic information and you\'re ready to start recycling!'
        },
        {
          q: 'What is a referral code and how do I get one?',
          a: 'Every user gets a unique referral code upon signing up. You can find it in your profile section or the "Refer & Earn" tab. Share this code with friends, and when they sign up using your code and reach Silver level, you\'ll automatically earn 10 coins!'
        },
        {
          q: 'Is ScrapDig available in my city?',
          a: 'ScrapDig is continuously expanding! Currently, we serve major cities across India. Check the app to see if pickup service is available in your area. You can also use the drop-off option if pickup isn\'t available yet.'
        },
        {
          q: 'What documents do I need to get started?',
          a: 'You don\'t need any special documents to get started! Just a valid phone number or email address to create your account. For scrap sales, you may need to provide your address for pickup scheduling.'
        }
      ]
    },
    {
      id: 'scrap-selling',
      title: 'Selling & Donating Scrap',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      color: 'from-emerald-500 to-teal-500',
      bgColor: 'bg-emerald-50',
      iconColor: 'text-emerald-600',
      questions: [
        {
          q: 'What types of scrap can I sell or donate?',
          a: 'You can sell or donate Metal, Plastic, Paper, E-waste (electronics), Glass, Textile, and other recyclable materials. Take clear photos of your scrap, provide a description, and select the appropriate category when creating a listing.'
        },
        {
          q: 'How do I schedule a pickup?',
          a: 'After creating your scrap listing, you\'ll be asked to provide available time slots. Select multiple dates and time windows that work for you. A dealer will review your listing and accept it, then you\'ll receive a confirmation with the scheduled pickup time.'
        },
        {
          q: 'Can I drop off my scrap instead of scheduling pickup?',
          a: 'Yes! You have the option to drop off your scrap at designated collection centers. When creating a listing, choose the "Drop-off" option instead of "Pickup". You\'ll receive the address and operating hours of the nearest center.'
        },
        {
          q: 'How is the price determined for my scrap?',
          a: 'Prices are determined based on the type of material, weight, quality, and current market rates. After a dealer accepts your listing, they\'ll provide a final quote. You can accept or negotiate the price before confirming the transaction.'
        },
        {
          q: 'What happens if my scrap weight differs from my estimate?',
          a: 'The final price is based on the actual weight measured during pickup. If the weight is significantly different from your estimate, the dealer will provide an updated quote before completing the transaction. You can choose to proceed or cancel.'
        },
        {
          q: 'How many images should I upload?',
          a: 'You can upload 1 to 10 images of your scrap. More clear images help dealers assess the quality and provide accurate quotes. Make sure images show the material clearly and from different angles.'
        }
      ]
    },
    {
      id: 'rewards-levels',
      title: 'Rewards & Levels',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'from-amber-500 to-orange-500',
      bgColor: 'bg-amber-50',
      iconColor: 'text-amber-600',
      questions: [
        {
          q: 'What are Coins and how do I earn them?',
          a: 'Coins are the currency you use to shop in our EcoStore. You earn coins by: selling scrap materials, completing level milestones, and earning referral rewards when friends reach Silver level. Coins can be used to purchase eco-friendly products.'
        },
        {
          q: 'What are Green Points (GP) and how do they differ from Coins?',
          a: 'Green Points (GP) are used for leveling up and tracking your environmental impact. You earn GP by completing tasks like daily logins, placing orders, sharing your impact, and more. Coins are for shopping, while GP helps you progress through levels (Bronze, Silver, Gold, Platinum, Diamond).'
        },
        {
          q: 'How does the level system work?',
          a: 'ScrapDig has 5 levels: Bronze (0-100 GP), Silver (100-225 GP), Gold (225-375 GP), Platinum (375-550 GP), and Diamond (550+ GP). As you complete tasks and earn GP, you\'ll level up automatically. Each level up rewards you with coins and unlocks special badges!'
        },
        {
          q: 'What tasks can I complete to earn Green Points?',
          a: 'Tasks include: Daily login (5 GP), Placing scrap orders (20 GP), Sharing your environmental impact (10 GP), Participating in events (15 GP), Hosting collection drives (25 GP), and more! Check the Tasks section in your app to see all available tasks and their rewards.'
        },
        {
          q: 'When do I receive my level completion bonus?',
          a: 'You receive your level completion bonus immediately when you level up. The bonus is automatically added to your coin balance, and you\'ll receive a notification confirming your level up and the bonus amount.'
        },
        {
          q: 'What badges can I unlock?',
          a: 'There are several badges you can earn: Eco Campus Ambassador, Eco Guardian, Eco Scavenger, Eco Visionary, and Green Initiator. Each badge represents different achievements and milestones in your recycling journey.'
        }
      ]
    },
    {
      id: 'referrals',
      title: 'Referrals',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600',
      questions: [
        {
          q: 'How does the referral system work?',
          a: 'When you share your referral code with friends, they can use it during sign-up. Once your referred friend reaches Silver level (100 GP), you automatically earn 10 coins as a reward. You can track pending and completed referrals in the "Refer & Earn" section.'
        },
        {
          q: 'When do I get my referral reward?',
          a: 'You receive your referral reward (10 coins) automatically when your referred friend reaches Silver level (100 GP). You\'ll get a notification when the reward is credited to your account. There\'s no need to claim it manually!'
        },
        {
          q: 'How many people can I refer?',
          a: 'There\'s no limit to how many people you can refer! The more friends you bring to ScrapDig, the more coins you can earn. Plus, we have milestone bonuses for 3rd, 5th, and 10th successful referrals!'
        },
        {
          q: 'Can I refer someone who already has an account?',
          a: 'No, referral rewards only apply to new users who sign up using your referral code. Each user can only be referred once during account creation.'
        },
        {
          q: 'How do I share my referral code?',
          a: 'You can share your referral code through WhatsApp, SMS, email, or social media directly from the app. The app provides one-tap sharing options with a pre-formatted message that includes your referral link.'
        }
      ]
    },
    {
      id: 'payments',
      title: 'Payments & Transactions',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600',
      questions: [
        {
          q: 'How do I receive payment for my scrap?',
          a: 'After your scrap is collected and weighed, the dealer will process the payment. You\'ll receive the payment directly in your registered account or via the payment method you selected during order creation. Payment is usually completed within 24-48 hours after pickup.'
        },
        {
          q: 'What payment methods are accepted?',
          a: 'ScrapDig supports multiple payment methods including UPI, bank transfer, digital wallets, and cash (in some cases). You can select your preferred payment method when creating your scrap listing.'
        },
        {
          q: 'What if I don\'t receive payment?',
          a: 'If you haven\'t received payment within 48 hours after pickup, please contact our support team. Make sure you\'ve provided the correct payment details. You can raise a complaint through the app or contact us at lorvensitsolutionspvtltd@gmail.com'
        },
        {
          q: 'Are there any fees or charges?',
          a: 'ScrapDig doesn\'t charge any fees for listing your scrap or processing transactions. The full amount quoted by the dealer goes directly to you. However, standard payment gateway charges may apply for digital transactions.'
        },
        {
          q: 'Can I cancel an order after it\'s been accepted?',
          a: 'Yes, you can cancel an order before the pickup is completed. However, frequent cancellations may affect your account rating. If you need to cancel, do so as early as possible to allow the dealer to adjust their schedule.'
        }
      ]
    },
    {
      id: 'ecostore',
      title: 'EcoStore',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
      color: 'from-teal-500 to-cyan-500',
      bgColor: 'bg-teal-50',
      iconColor: 'text-teal-600',
      questions: [
        {
          q: 'What can I buy in the EcoStore?',
          a: 'The EcoStore offers a wide range of eco-friendly products including reusable bags, water bottles, sustainable home products, organic items, and more. Browse through the catalog to see all available products that help you live more sustainably.'
        },
        {
          q: 'How do I purchase products using coins?',
          a: 'Simply browse the EcoStore, select the product you want, and add it to your cart. At checkout, you can use your earned coins to pay. If you don\'t have enough coins, you can pay the remaining amount using other payment methods.'
        },
        {
          q: 'Can I use coins and regular payment together?',
          a: 'Yes! If you don\'t have enough coins to cover the full price of a product, you can use your available coins and pay the remaining balance using UPI, card, or other payment methods.'
        },
        {
          q: 'What is the delivery time for EcoStore products?',
          a: 'Delivery times vary depending on your location and the product. Typically, orders are processed within 2-3 business days and delivered within 5-7 business days. You\'ll receive tracking information once your order ships.'
        }
      ]
    },
    {
      id: 'technical',
      title: 'Technical Issues',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      color: 'from-indigo-500 to-purple-500',
      bgColor: 'bg-indigo-50',
      iconColor: 'text-indigo-600',
      questions: [
        {
          q: 'The app is not loading or keeps crashing. What should I do?',
          a: 'Try these steps: 1) Close and restart the app, 2) Check your internet connection, 3) Clear app cache from your device settings, 4) Update the app to the latest version, 5) If issues persist, uninstall and reinstall the app. If problems continue, contact our support team.'
        },
        {
          q: 'I\'m having trouble uploading images of my scrap.',
          a: 'Make sure your images are clear, well-lit, and under 5MB each. Check your internet connection and try again. If the issue persists, try compressing your images or taking new photos with your camera. Ensure you\'ve given the app permission to access your photos.'
        },
        {
          q: 'I forgot my password. How do I reset it?',
          a: 'On the login screen, tap "Forgot Password" and enter your registered email or phone number. You\'ll receive a verification code to reset your password. Follow the instructions in the email or SMS to create a new password.'
        },
        {
          q: 'How do I update my profile information?',
          a: 'Go to your Profile section in the app, tap on "Edit Profile", make your changes, and save. You can update your name, phone number, email, address, and other details anytime.'
        },
        {
          q: 'I\'m not receiving notifications. How do I enable them?',
          a: 'Check your device settings to ensure ScrapDig has notification permissions enabled. Also, check the Notification settings within the app to make sure notifications are turned on for orders, rewards, and other important updates.'
        },
        {
          q: 'My coins or Green Points are not updating correctly.',
          a: 'Sometimes there\'s a slight delay in updates. Try refreshing the app by pulling down on the screen. If your balance still doesn\'t reflect correctly after a few minutes, contact support with details of the transaction or task completion.'
        }
      ]
    },
    {
      id: 'account',
      title: 'Account & Profile',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      color: 'from-rose-500 to-pink-500',
      bgColor: 'bg-rose-50',
      iconColor: 'text-rose-600',
      questions: [
        {
          q: 'Can I have multiple accounts?',
          a: 'No, each user should have only one account. Multiple accounts may lead to suspension. If you need to update your account details, you can do so in your profile settings.'
        },
        {
          q: 'How do I delete my account?',
          a: 'To delete your account, go to Profile Settings > Account Settings > Delete Account. Please note that this action is permanent and cannot be undone. All your data, coins, and progress will be lost.'
        },
        {
          q: 'Is my personal information safe?',
          a: 'Yes, we take your privacy seriously. All personal information is encrypted and stored securely. We only use your information to provide our services and never share it with third parties without your consent. Read our Privacy Policy for more details.'
        },
        {
          q: 'How do I change my phone number or email?',
          a: 'Go to Profile > Edit Profile, then update your phone number or email. You\'ll need to verify the new contact information through an OTP or verification email before the change is complete.'
        }
      ]
    }
  ]

  // Filter FAQs based on search query
  const filteredCategories = faqCategories.map(category => ({
    ...category,
    questions: category.questions.filter(
      qa =>
        qa.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
        qa.a.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.questions.length > 0)

  const toggleCategory = (categoryId) => {
    setOpenCategory(openCategory === categoryId ? null : categoryId)
    setOpenQuestion(null)
  }

  const toggleQuestion = (questionIndex) => {
    setOpenQuestion(openQuestion === questionIndex ? null : questionIndex)
  }

  return (
    <section id="help-center" className="py-24 bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-emerald-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            Help <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Center</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Find answers to commonly asked questions and get the help you need
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search for questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-12 pr-4 py-4 border border-gray-700 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-white placeholder-gray-400 bg-slate-800/50 backdrop-blur-md shadow-lg"
              />
            </div>
          </div>
        </motion.div>

        {/* FAQ Categories */}
        <div className="space-y-4">
          {filteredCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1, duration: 0.4 }}
              className="bg-slate-800/50 backdrop-blur-md rounded-2xl shadow-lg border border-emerald-500/20 overflow-hidden hover:shadow-xl hover:border-emerald-500/30 transition-all duration-300"
            >
              {/* Category Header */}
              <button
                onClick={() => toggleCategory(category.id)}
                className="w-full px-6 py-5 flex items-center justify-between hover:bg-slate-700/50 transition-colors duration-200"
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-xl ${category.bgColor} flex items-center justify-center ${category.iconColor} flex-shrink-0`}>
                    {category.icon}
                  </div>
                  <div className="text-left">
                    <h3 className="text-xl font-bold text-white">{category.title}</h3>
                    <p className="text-sm text-gray-400 mt-1">{category.questions.length} question{category.questions.length !== 1 ? 's' : ''}</p>
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: openCategory === category.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 ml-4"
                >
                  <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </motion.div>
              </button>

              {/* Category Questions */}
              <AnimatePresence>
                {openCategory === category.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4 space-y-3">
                      {category.questions.map((qa, qIndex) => {
                        const questionId = `${category.id}-${qIndex}`
                        const isOpen = openQuestion === questionId

                        return (
                          <div
                            key={qIndex}
                            className="border border-gray-700/50 rounded-xl overflow-hidden hover:border-emerald-500/50 transition-colors"
                          >
                            <button
                              onClick={() => toggleQuestion(questionId)}
                              className="w-full px-5 py-4 text-left flex items-start justify-between hover:bg-slate-700/30 transition-colors"
                            >
                              <span className="font-semibold text-white pr-4 flex-1">{qa.q}</span>
                              <motion.div
                                animate={{ rotate: isOpen ? 180 : 0 }}
                                transition={{ duration: 0.2 }}
                                className="flex-shrink-0"
                              >
                                <svg className={`w-5 h-5 ${isOpen ? 'text-emerald-400' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                              </motion.div>
                            </button>
                            <AnimatePresence>
                              {isOpen && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: 'auto', opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.2 }}
                                  className="overflow-hidden"
                                >
                                  <div className="px-5 pb-4 pt-2 bg-slate-700/30">
                                    <p className="text-gray-300 leading-relaxed">{qa.a}</p>
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        )
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Still Need Help Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="bg-slate-800/70 backdrop-blur-md rounded-2xl p-8 md:p-12 text-white shadow-2xl border border-emerald-500/30 relative overflow-hidden">
            {/* Subtle background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 via-teal-600/10 to-emerald-600/10 rounded-2xl"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">Still Have Questions?</h3>
              <p className="text-xl mb-6 text-gray-300 max-w-2xl mx-auto">
                Can't find what you're looking for? Our support team is here to help!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:lorvensitsolutionspvtltd@gmail.com"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-xl hover:from-emerald-600 hover:to-teal-600 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Contact Support
                </a>
                <a
                  href="tel:+918143928266"
                  className="inline-flex items-center justify-center px-8 py-4 bg-slate-700/50 backdrop-blur-md text-white font-semibold rounded-xl hover:bg-slate-700/70 transition-all duration-200 border-2 border-emerald-500/30 hover:border-emerald-500/50 hover:scale-105"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Us
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HelpCenter

