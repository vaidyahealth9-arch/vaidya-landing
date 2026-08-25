'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-[#F9FAFB] overflow-hidden bg-grid-pattern">
      {/* Premium Cyber/Clinical Light Backdrops */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyber-radial pointer-events-none z-0"></div>
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-cyber-radial-blue pointer-events-none z-0"></div>

      {/* Subtle flowing animated data lines */}
      <div className="absolute inset-0 pointer-events-none opacity-40 z-0">
        <svg className="w-full h-full min-h-[800px]" xmlns="http://www.w3.org/2000/svg">
          <path d="M-100 220 C 300 270, 400 120, 800 320 S 1200 480, 2000 420" fill="none" stroke="url(#cyber-grad-1)" strokeWidth="2.5" className="animate-data-flow" />
          <path d="M-50 480 C 400 420, 600 620, 1000 520 S 1500 320, 2100 380" fill="none" stroke="url(#cyber-grad-2)" strokeWidth="1.5" className="animate-data-flow" style={{ animationDelay: '-0.6s' }} />
          <defs>
            <linearGradient id="cyber-grad-1" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="cyber-grad-2" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#10b981" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#0891b2" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-36 md:pt-44 pb-20 sm:pb-28">
        {/* Headline Section */}
        <div className="text-center mb-16 sm:mb-24">
          <div className="inline-flex items-center px-4 py-1.5 mb-6 bg-green-50 border border-green-200/50 rounded-full shadow-sm">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
            <span className="text-xs font-semibold text-green-700 uppercase tracking-wider">Enterprise AI Infrastructure</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-none mb-6 animate-fade-in tracking-tight">
            The Intelligence Layer
            <span className="text-gradient-primary block mt-1 sm:mt-2">for Healthcare</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed animate-fade-in-delay px-4">
            AI-powered infrastructure that transforms fragmented healthcare data into structured, actionable clinical intelligence.
          </p>
          
          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-12 animate-fade-in-delay-2">
            <Link 
              href="#platform" 
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white bg-green-600 rounded-xl transition-all duration-300 hover:bg-green-700 hover:scale-105 shadow-md shadow-green-200 hover:shadow-lg"
            >
              Explore Platform
              <svg className="w-4.5 h-4.5 ml-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
            
            <Link 
              href="#book" 
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-gray-700 bg-white border border-gray-300 rounded-xl transition-all duration-300 hover:border-green-400 hover:text-green-600 hover:bg-green-50/50 hover:scale-105"
            >
              Book a Demo
              <svg className="w-4.5 h-4.5 ml-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Premium Device Showcase Mockup */}
        <div className="relative max-w-5xl mx-auto mb-10">
          {/* Desktop Showcase layout */}
          <div className="hidden md:block relative">
            <div className="relative mx-auto w-full max-w-[960px] h-[520px] border border-gray-300/80 rounded-2xl bg-white/80 shadow-2xl p-2.5 backdrop-blur-md overflow-hidden hover:border-green-400/50 transition-colors duration-500">
              <div className="w-full h-full border border-gray-100 rounded-xl overflow-hidden relative">
                <Image 
                  src="/LIMS.png" 
                  alt="Vaidya LIMS Interface" 
                  fill
                  sizes="960px"
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>

            {/* Mobile overlay floating on bottom-right */}
            <div className="absolute -bottom-8 right-8 z-20 transform translate-x-8 translate-y-4">
              <div className="w-[220px] h-[450px] border border-gray-200/80 rounded-[32px] bg-white/95 shadow-2xl p-2.5 backdrop-blur-md hover:border-green-400 transition-colors duration-500">
                <div className="w-full h-full border border-gray-100 rounded-[24px] overflow-hidden relative">
                  <Image 
                    src="/PHR.png" 
                    alt="VaidyaOne Companion app" 
                    fill
                    sizes="220px"
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Mobile responsive slider carousel */}
          <div className="md:hidden px-4">
            <div className="flex items-center justify-center mb-3">
              <span className="text-xs text-gray-500 mr-2 uppercase tracking-widest font-semibold">Swipe to view apps</span>
              <svg className="w-4 h-4 text-green-500 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
            
            <div className="flex space-x-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-none">
              <div className="flex-shrink-0 w-[85vw] snap-start">
                <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-xl">
                  <div className="w-full h-48 border border-gray-100 rounded-xl bg-gray-50 flex items-center justify-center mb-4 relative overflow-hidden">
                    <Image 
                      src="/LIMS.png" 
                      alt="Vaidya LIMS" 
                      fill
                      sizes="80vw"
                      className="object-cover object-top"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Vaidya LIMS Dashboard</h3>
                  <p className="text-sm text-gray-600 leading-normal">AI-native operating system for diagnostics. Full analytical insights and workflows.</p>
                </div>
              </div>

              <div className="flex-shrink-0 w-[85vw] snap-start">
                <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-xl">
                  <div className="w-[180px] h-[320px] mx-auto border border-gray-100 rounded-3xl bg-gray-50 flex items-center justify-center mb-4 relative overflow-hidden">
                    <Image 
                      src="/PHR.png" 
                      alt="VaidyaOne" 
                      fill
                      sizes="180px"
                      className="object-cover object-top"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1 text-center">VaidyaOne Companion</h3>
                  <p className="text-sm text-gray-600 leading-normal text-center">Your lifelong AI health companion, explaining biomarkers and longitudinal trends.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Subtle bottom separator */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
    </section>
  )
}