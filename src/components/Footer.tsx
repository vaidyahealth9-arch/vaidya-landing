'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-gradient-to-br from-gray-50 via-white to-green-50/30 border-t border-gray-200/60 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-40" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f0f9ff' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 sm:gap-12">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-8">
              <div className="flex items-center mb-6">
                <Image src="/logo.png" alt="Vaidya Health" width={48} height={48} className="h-12 w-auto mr-4" />
                <h3 className="text-3xl font-medium text-gray-900">
                  Vaidya Health
                </h3>
              </div>

            </div>
            
            {/* Decorative line */}
            <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-green-600 rounded-full mb-6"></div>
            
            {/* Contact info inline */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700 font-medium">info@vaidyahealth.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="relative">
            <div className="absolute -top-2 -left-2 w-8 h-8 bg-green-100 rounded-full opacity-60"></div>
            <h4 className="text-xl font-medium text-gray-900 mb-6 relative z-10">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <Link href="#products" className="text-gray-600 hover:text-green-600 transition-all duration-300 font-medium group flex items-center">
                  <span className="w-1 h-1 bg-green-400 rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                  What We Do
                </Link>
              </li>
              <li>
                <Link href="#integration" className="text-gray-600 hover:text-green-600 transition-all duration-300 font-medium group flex items-center">
                  <span className="w-1 h-1 bg-green-400 rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                  How We Do
                </Link>
              </li>

              <li>
                <Link href="#book" className="text-gray-600 hover:text-green-600 transition-all duration-300 font-medium group flex items-center">
                  <span className="w-1 h-1 bg-green-400 rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                  Get Started
                </Link>
              </li>
            </ul>
          </div>

          {/* Additional Info */}
          <div className="relative">
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-200 rounded-full opacity-40"></div>
            <h4 className="text-xl font-medium text-gray-900 mb-6 relative z-10">Connect</h4>
            <div className="space-y-4">
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-gray-200/50">
                <p className="text-gray-700 font-medium mb-2">Ready to integrate?</p>
                <p className="text-gray-600 text-sm">Connect your lab, patient, and doctor workflows with Vaidya LIMS, VaidyaOne, and Doctor Web.</p>
              </div>
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 border border-green-200/50">
                <p className="text-green-800 font-medium mb-2">24/7 Support</p>
                <p className="text-green-700 text-sm">We&apos;re here to help you every step of the way.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200/60 mt-12 sm:mt-16 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
                          <p className="text-gray-600 text-sm font-medium">
               {currentYear} Vaidya Health. All rights reserved.
              </p>

          </div>
        </div>
      </div>
    </footer>
  )
} 