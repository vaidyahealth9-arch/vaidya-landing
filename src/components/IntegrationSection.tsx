'use client'

import Image from 'next/image'

export default function IntegrationSection() {
  const integrationFeatures = [
    {
      icon: "🔗",
      title: "End-to-End Integration",
      description: "Seamlessly connects diagnostics, clinical workflows, and health records through a unified digital infrastructure."
    },
    {
      icon: "🏥",
      title: "Standards-Based Interoperability",
      description: "Built for secure, standardized data exchange across clinical systems, labs, and patient-facing apps."
    },
    {
      icon: "📊",
      title: "Smart Health Analytics",
      description: "AI-enhanced features provide structured insights, support preventive care, and optimize operational decision-making."
    },
    {
      icon: "⚡",
      title: "Easy Onboarding",
      description: "Minimal setup time with intuitive interfaces — ideal for fast-paced clinical environments."
    }
  ]

  return (
    <section id="integration" className="py-24 sm:py-32 md:py-40 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 sm:mb-24 md:mb-32">
          <div className="inline-flex items-center px-6 sm:px-8 md:px-10 py-3 sm:py-4 mb-6 sm:mb-8 bg-white/90 backdrop-blur-xl border border-gray-200/60 rounded-2xl shadow-lg shadow-gray-200/50">
            <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mr-3 sm:mr-4"></div>
            <h2 className="text-lg sm:text-xl font-medium text-gray-800">
              Seamless Integration for Modern Healthcare
            </h2>
          </div>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
            Our platform provides comprehensive integration capabilities that connect all aspects of healthcare delivery
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 mb-16 sm:mb-24 md:mb-32 px-4">
          {integrationFeatures.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-xl flex items-center justify-center mb-8 mx-auto">
                {index === 0 && (
                  <svg className="w-10 h-10 text-green-600 transform hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd"/>
                  </svg>
                )}
                {index === 1 && (
                  <svg className="w-10 h-10 text-green-600 transform hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"/>
                  </svg>
                )}
                {index === 2 && (
                  <svg className="w-10 h-10 text-green-600 transform hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"/>
                  </svg>
                )}
                {index === 3 && (
                  <svg className="w-10 h-10 text-green-600 transform hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                )}
              </div>
              <h3 className="text-2xl font-medium text-gray-900 mb-6">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed text-lg">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 sm:p-12 md:p-16">
          <div className="text-center mb-12 sm:mb-16">
            <h3 className="text-2xl sm:text-3xl font-medium text-gray-900 mb-6 sm:mb-8">Connected Healthcare Ecosystem</h3>
            <p className="text-lg sm:text-xl text-gray-600 px-4">How Vaidya LIMS, VaidyaOne, and VaidyaMD (WIP) work together seamlessly</p>
          </div>

          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 sm:gap-10 items-start relative z-20">
              <div className="md:col-span-2 bg-white border border-gray-200 rounded-xl p-6 sm:p-8 text-center relative">
                <div className="w-24 h-24 sm:w-32 sm:h-32 bg-blue-50/80 rounded-xl flex items-center justify-center mb-4 sm:mb-6 mx-auto backdrop-blur-sm">
                  <Image src="/logo.png" alt="Vaidya LIMS" width={80} height={80} className="w-16 h-16 sm:w-20 sm:h-20 object-contain" />
                </div>
                <h4 className="font-medium text-gray-900 mb-3 text-base sm:text-lg">Vaidya LIMS</h4>
                <p className="text-gray-600 text-sm sm:text-base">Streamlined diagnostics and automated reporting</p>
              </div>

              <div className="md:col-span-1 flex justify-center items-center pt-10 md:pt-16">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-green-100 rounded-xl flex items-center justify-center border-2 border-green-200">
                    <svg className="w-10 h-10 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                    </svg>
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center animate-ping">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="md:col-span-2 bg-white border border-gray-200 rounded-xl p-6 sm:p-8 text-center relative">
                <div className="w-24 h-24 sm:w-32 sm:h-32 bg-green-50/80 rounded-xl flex items-center justify-center mb-4 sm:mb-6 mx-auto backdrop-blur-sm overflow-hidden">
                  <Image src="/logo.png" alt="VaidyaOne" width={80} height={80} className="w-16 h-16 sm:w-20 sm:h-20 object-contain" />
                </div>
                <h4 className="font-medium text-gray-900 mb-3 text-base sm:text-lg">VaidyaOne</h4>
                <p className="text-gray-600 text-sm sm:text-base">Centralized patient health data management</p>
              </div>
            </div>

            <div className="mt-8 sm:mt-10 flex justify-center relative z-20">
              <div className="w-full max-w-sm bg-white border border-gray-200 rounded-xl p-6 sm:p-8 text-center">
                <div className="w-24 h-24 sm:w-32 sm:h-32 bg-indigo-50/80 rounded-xl flex items-center justify-center mb-4 sm:mb-6 mx-auto backdrop-blur-sm">
                  <svg className="w-16 h-16 sm:w-20 sm:h-20 text-indigo-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2a7 7 0 00-7 7v3a5 5 0 002 4v2H5a1 1 0 000 2h14a1 1 0 000-2h-2v-2a5 5 0 002-4V9a7 7 0 00-7-7zm-5 10V9a5 5 0 1110 0v3a3 3 0 01-3 3h-4a3 3 0 01-3-3zm3 5h4v2h-4v-2z"/>
                  </svg>
                </div>
                <h4 className="font-medium text-gray-900 mb-3 text-base sm:text-lg">VaidyaMD (WIP)</h4>
                <p className="text-gray-600 text-sm sm:text-base">Clinician workspace for orders, reviews, and follow-ups</p>
              </div>
            </div>
          </div>

          <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4">
            <div className="flex items-start space-x-4">
              <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mt-3 shadow-sm"></div>
              <div>
                <h5 className="font-medium text-gray-900 mb-2 text-lg">Real-time Data Sync</h5>
                <p className="text-gray-600 leading-relaxed">Automatic synchronization between lab results, patient records, and clinician workflows</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mt-3 shadow-sm"></div>
              <div>
                <h5 className="font-medium text-gray-900 mb-2 text-lg">Secure Exchange</h5>
                <p className="text-gray-600 leading-relaxed">End-to-end encrypted data transfer with privacy-first workflows</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mt-3 shadow-sm"></div>
              <div>
                <h5 className="font-medium text-gray-900 mb-2 text-lg">Unified Experience</h5>
                <p className="text-gray-600 leading-relaxed">Seamless user experience across all platforms</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
