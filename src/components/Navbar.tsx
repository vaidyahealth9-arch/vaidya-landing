'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <nav className="static md:fixed md:top-4 md:left-1/2 md:transform md:-translate-x-1/2 z-50 bg-white/95 border border-gray-200/40 rounded-2xl shadow-lg shadow-gray-200/20 backdrop-blur-sm px-4 sm:px-6 md:px-8 lg:px-12 py-3 sm:py-4 w-full md:w-[95vw] md:max-w-6xl">
      <div className="flex items-center justify-between w-full">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/" className="hover:opacity-80 transition-opacity duration-200 flex items-center">
            <Image 
              src="/logo.png" 
              alt="Vaidya Health" 
              width={40} 
              height={40} 
              className="h-10 sm:h-12 md:h-14 w-auto mr-3"
              priority
              quality={100}
            />
            <span className="text-base sm:text-lg md:text-xl font-medium text-gray-900 hidden sm:block">
              Vaidya Health
            </span>
          </Link>
        </div>

        {/* Desktop Navigation Links - Centered */}
        <div className="hidden md:flex items-center space-x-8 lg:space-x-10 absolute left-1/2 transform -translate-x-1/2">
          <Link
            href="#products"
            className="group relative px-4 py-2 text-gray-600 hover:text-gray-900 transition-all duration-200 font-medium text-sm lg:text-base rounded-lg"
          >
            <span className="relative z-10">What We Do</span>
            <div className="absolute inset-0 bg-gray-100 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200 scale-95 group-hover:scale-100"></div>
          </Link>
          <Link
            href="#integration"
            className="group relative px-4 py-2 text-gray-600 hover:text-gray-900 transition-all duration-200 font-medium text-sm lg:text-base rounded-lg"
          >
            <span className="relative z-10">How We Do</span>
            <div className="absolute inset-0 bg-gray-100 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200 scale-95 group-hover:scale-100"></div>
          </Link>
          <Link
            href="#why-choose-us"
            className="group relative px-4 py-2 text-gray-600 hover:text-gray-900 transition-all duration-200 font-medium text-sm lg:text-base rounded-lg"
          >
            <span className="relative z-10">Why Choose Us</span>
            <div className="absolute inset-0 bg-gray-100 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200 scale-95 group-hover:scale-100"></div>
          </Link>
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden md:block flex-shrink-0">
          <Link
            href="#book"
            className="px-5 py-2.5 border border-gray-300 text-gray-700 rounded-lg font-medium text-sm lg:text-base transition-all duration-200 hover:border-green-400 hover:text-green-600 hover:bg-green-50"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          aria-label="Toggle mobile menu"
        >
          <svg
            className="w-6 h-6 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 pt-4 border-t border-gray-200/60">
          <div className="flex flex-col space-y-4">
            <Link
              href="#products"
              className="group relative px-4 py-2 text-gray-600 hover:text-gray-900 transition-all duration-200 font-medium text-base rounded-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="relative z-10">What We Do</span>
              <div className="absolute inset-0 bg-gray-100 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200 scale-95 group-hover:scale-100"></div>
            </Link>
            <Link
              href="#integration"
              className="group relative px-4 py-2 text-gray-600 hover:text-gray-900 transition-all duration-200 font-medium text-base rounded-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="relative z-10">How We Do</span>
              <div className="absolute inset-0 bg-gray-100 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200 scale-95 group-hover:scale-100"></div>
            </Link>
            <Link
              href="#why-choose-us"
              className="group relative px-4 py-2 text-gray-600 hover:text-gray-900 transition-all duration-200 font-medium text-base rounded-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="relative z-10">Why Choose Us</span>
              <div className="absolute inset-0 bg-gray-100 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200 scale-95 group-hover:scale-100"></div>
            </Link>
            <div className="pt-2">
              <Link
                href="#book"
                className="block w-full text-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium text-base transition-all duration-200 hover:border-green-400 hover:text-green-600 hover:bg-green-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
 