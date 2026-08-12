'use client'

import Image from 'next/image'

export default function HeroSection() {
  return (
         <section className="relative min-h-screen bg-[#F9FAFB] overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 md:pt-40 pb-24 sm:pb-32 md:pb-40">
                            {/* Top Section - Headline and CTA */}
                    <div className="text-center mb-20 sm:mb-40">
                                             <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-gray-900 leading-tight mb-6 sm:mb-8 animate-fade-in">
                         Reimagining Digital Health
                         <span className="text-green-600 block">for a Connected Tomorrow</span>
                       </h1>
                      <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 mb-8 sm:mb-12 max-w-4xl sm:max-w-5xl mx-auto leading-relaxed animate-fade-in-delay px-4">
                        Enable streamlined, interoperable care through secure data exchange and unified digital workflows
                      </p>
                       
                       {/* Get Started Button */}
                       <div className="mb-12 sm:mb-20">
                         <a href="#book" className="group relative inline-flex items-center justify-center px-6 py-3 text-base font-medium text-gray-700 bg-white border-2 border-gray-200 rounded-full overflow-hidden transition-all duration-500 ease-out hover:border-green-400 hover:text-green-600 hover:bg-green-50 hover:scale-105 hover:shadow-lg">
                           <span className="relative z-10 flex items-center space-x-2">
                             <span>Get Started Today</span>
                             <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                             </svg>
                           </span>
                           <div className="absolute inset-0 bg-gradient-to-r from-green-50 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
                         </a>
                       </div>
                    </div>

                                        {/* Device Mockups - Right after ZERO COST */}
                    <div className="mb-20 sm:mb-40">
          {/* Desktop Layout - Hidden on mobile */}
          <div className="hidden md:block relative">
                         {/* Desktop Window */}
             <div className="w-full max-w-[1100px] h-[500px] lg:h-[700px] border-2 border-gray-300 rounded-xl relative bg-white overflow-hidden p-2">
               {/* Desktop Image - Vaidya LIMS */}
               <Image 
                 src="/LIMS.png" 
                 alt="Vaidya LIMS" 
                 width={1100}
                 height={500}
                 className="w-full h-full object-contain"
                 style={{ objectPosition: 'center top' }}
               />
             </div>

                          {/* Phone Mockup positioned at bottom right */}
              <div className="absolute bottom-0 right-0 transform translate-x-1/4 translate-y-1/4">
                <div className="w-48 h-[480px] lg:w-72 lg:h-[560px] border border-gray-200 rounded-3xl bg-white overflow-hidden shadow-lg p-1.5">
                  {/* Mobile Image - VaidyaOne PHR */}
                  <Image 
                    src="/PHR.png" 
                    alt="VaidyaOne PHR" 
                    width={288}
                    height={540}
                    className="w-full h-full object-contain"
                    style={{ objectPosition: 'center top' }}
                  />
                </div>
              </div>
          </div>

          {/* Mobile Layout - Carousel with desktop then phone */}
          <div className="md:hidden px-4">
            {/* Carousel Title and Arrow Indicator */}
            <div className="flex items-center justify-center mb-4">
              <span className="text-sm text-gray-500 mr-2">Swipe to explore</span>
              <svg className="w-4 h-4 text-gray-400 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
            
            <div className="flex space-x-4 overflow-x-auto pb-4 snap-x snap-mandatory">
              {/* Desktop Mockup Slide */}
              <div className="flex-shrink-0 w-full max-w-sm snap-start">
                <div className="bg-white border-2 border-gray-300 rounded-lg p-4 shadow-lg">
                  <div className="w-full h-48 border border-gray-200 rounded-md bg-gray-50 flex items-center justify-center mb-4 p-2">
                      <Image 
                        src="/LIMS.png" 
                        alt="Vaidya LIMS" 
                      width={400}
                      height={300}
                      className="w-full h-full object-contain rounded-md"
                    />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Vaidya LIMS</h3>
                  <p className="text-sm text-gray-600">Comprehensive lab management interface with full dashboard capabilities</p>
                </div>
              </div>

              {/* Phone Mockup Slide */}
              <div className="flex-shrink-0 w-full max-w-sm snap-start">
                <div className="bg-white border-2 border-gray-300 rounded-lg p-4 shadow-lg">
                  <div className="w-32 h-72 border border-gray-200 rounded-lg bg-gray-50 flex items-center justify-center mx-auto mb-4 overflow-hidden p-1">
                    <Image 
                      src="/PHR.png" 
                      alt="VaidyaOne PHR" 
                      width={128}
                      height={256}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">VaidyaOne PHR</h3>
                  <p className="text-sm text-gray-600">Personal health records accessible on-the-go with AI insights</p>
                </div>
              </div>
            </div>
          </div>
        </div>

                                                         {/* Why Choose Section - Minimal Design */}
                     <div id="why-choose-us" className="mb-24 sm:mb-32 md:mb-40 scroll-mt-32">
                       <div className="text-center mb-12 sm:mb-20">
                         <div className="inline-flex items-center px-6 sm:px-8 py-3 mb-4 sm:mb-6 bg-white/90 backdrop-blur-xl border border-gray-200/60 rounded-2xl shadow-lg shadow-gray-200/50">
                           <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mr-3"></div>
                           <h2 className="text-base sm:text-lg font-medium text-gray-800">Why Choose VaidyaOne</h2>
                         </div>
                         <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
                           Integrated, intelligent and interoperable infrastructure for secure and connected healthcare systems
                         </p>
                       </div>
           
           {/* Minimal Features Layout */}
           <div className="max-w-5xl mx-auto px-4">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
               {/* Left Column */}
               <div className="space-y-8">
                 <div className="flex items-start space-x-4">
                   <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mt-3 flex-shrink-0 shadow-sm"></div>
                   <div>
                     <h3 className="font-medium text-gray-900 mb-2 text-lg">Clinical Intelligence</h3>
                     <p className="text-gray-600 leading-relaxed text-sm">Clinical data extraction and interpretation via advanced algorithms</p>
                   </div>
                 </div>
                 
                 <div className="flex items-start space-x-4">
                   <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mt-3 flex-shrink-0 shadow-sm"></div>
                   <div>
                     <h3 className="font-medium text-gray-900 mb-2 text-lg">Secure Automated Reports</h3>
                     <p className="text-gray-600 leading-relaxed text-sm">Fast & compliant report generation with end-to-end data security</p>
                   </div>
                 </div>
                 
                 <div className="flex items-start space-x-4">
                   <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mt-3 flex-shrink-0 shadow-sm"></div>
                   <div>
                     <h3 className="font-medium text-gray-900 mb-2 text-lg">AI-powered Preventive Guidance</h3>
                     <p className="text-gray-600 leading-relaxed text-sm">AI-driven recommendations for screenings, immunizations, nutrition, antenatal and paediatric milestones</p>
                   </div>
                 </div>
               </div>
               
               {/* Right Column */}
               <div className="space-y-8">
                 <div className="flex items-start space-x-4">
                   <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mt-3 flex-shrink-0 shadow-sm"></div>
                   <div>
                     <h3 className="font-medium text-gray-900 mb-2 text-lg">360° Health Dashboard</h3>
                     <p className="text-gray-600 leading-relaxed text-sm">Unified dashboard delivering comprehensive insights across the ecosystem</p>
                   </div>
                 </div>
                 
                 <div className="flex items-start space-x-4">
                   <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mt-3 flex-shrink-0 shadow-sm"></div>
                   <div>
                     <h3 className="font-medium text-gray-900 mb-2 text-lg">Real-time Data Sync</h3>
                     <p className="text-gray-600 leading-relaxed text-sm">Automatic synchronization between lab results and patient records</p>
                   </div>
                 </div>
                 
                 <div className="flex items-start space-x-4">
                   <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mt-3 flex-shrink-0 shadow-sm"></div>
                   <div>
                     <h3 className="font-medium text-gray-900 mb-2 text-lg">Seamless Integration</h3>
                     <p className="text-gray-600 leading-relaxed text-sm">Effortlessly connects diagnostics, clinician workflows, and patient-facing digital health systems</p>
                   </div>
                 </div>
               </div>
             </div>
           </div>
                   </div>
       </div>
       
       {/* Subtle Section Divider */}
       <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
     </section>
  )
} 