import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/GREEN LOGO.png'

const Footer = () => {
  const quickLinks = [
    { label: "Features", href: "#features", isHash: true },
    { label: "How It Works", href: "#how-it-works", isHash: true },
    { label: "Levels & Badges", href: "#levels-badges", isHash: true },
    { label: "Achievements", href: "#achievements", isHash: true },
    { label: "Leaderboard", href: "#leaderboard", isHash: true },
    { label: "Contact", href: "#contact", isHash: true },
    { label: "Privacy Policy", href: "/privacy-policy", isHash: false },
    { label: "Refund & Cancellation Policy", href: "/refund-cancellation-policy", isHash: false }
  ]

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 text-white py-12 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-emerald-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img
                src={logo}
                alt="ScrapDig Logo"
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-gray-300 leading-relaxed">
              Making recycling rewarding and sustainable for everyone.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-emerald-400">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  {link.isHash ? (
                    <a href={link.href} className="hover:text-emerald-400 transition duration-200">
                      {link.label}
                    </a>
                  ) : (
                    <Link to={link.href} className="hover:text-emerald-400 transition duration-200">
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-emerald-400">Contact Info</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                Email: <a href="mailto:ScrapDigOfficial@gmail.com" className="hover:text-emerald-400 transition duration-200 hover:underline">ScrapDigOfficial@gmail.com</a>
              </li>
              <li>
                Phone: <a href="tel:+91 8143928266" className="hover:text-emerald-400 transition duration-200 hover:underline">+91 8143928266</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-emerald-500/30 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} YesLorvens. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

