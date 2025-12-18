import React from 'react'
import logo from '../assets/GREEN LOGO.png'

const Footer = () => {
  const quickLinks = [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Contact", href: "#contact" },
    { label: "Privacy Policy", href: "#privacy-policy" }
  ]

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src={logo} 
                alt="ScrapDig Logo" 
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-gray-400">
              Making recycling rewarding and sustainable for everyone.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:text-white transition">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                Email: <a href="mailto:lorvensitsolutionspvtltd@gmail.com" className="hover:text-white transition hover:underline">lorvensitsolutionspvtltd@gmail.com</a>
              </li>
              <li>
                Phone: <a href="tel:+917013814030" className="hover:text-white transition hover:underline">+91 7013814030</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} ScrapDig. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

