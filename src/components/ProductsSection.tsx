'use client'

import Image from 'next/image'

export default function ProductsSection() {
     return (
     <section id="products" className="py-24 sm:py-32 md:py-40 bg-white">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  {/* Vaidya LIMS Section - Minimal Design */}
         <div className="mb-24 sm:mb-32 md:mb-48">
           <div className="text-center mb-12 sm:mb-16 md:mb-20">
             <div className="inline-flex items-center px-6 sm:px-8 md:px-10 py-3 sm:py-4 mb-6 sm:mb-8 bg-white/90 backdrop-blur-xl border border-gray-200/60 rounded-2xl shadow-lg shadow-gray-200/50">
               <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mr-3 sm:mr-4"></div>
               <h2 className="text-lg sm:text-xl font-medium text-gray-800">
                 Transforming Diagnostics for the Digital Health Era
               </h2>
             </div>
                           <h3 className="text-2xl sm:text-3xl font-medium text-green-600 mb-3 sm:mb-4">Vaidya LIMS - Digital Lab Reports Platform</h3>
             <p className="text-lg sm:text-xl text-gray-600 mb-12 sm:mb-16 leading-relaxed max-w-3xl mx-auto px-4">
               A comprehensive lab management platform that streamlines diagnostics, enhances efficiency, and enables connected care
             </p>
          </div>

                       {/* Product Preview Cards */}
                       <div className="flex flex-col sm:flex-row justify-center space-y-6 sm:space-y-0 sm:space-x-6 md:space-x-12 mb-16 sm:mb-24 px-4">
                                     <div className="w-full sm:w-80 md:w-96 h-48 sm:h-56 border-2 border-gray-300 rounded-xl bg-white flex items-center justify-center hover:border-green-300 hover:scale-105 transition-all duration-300 shadow-sm hover:shadow-lg">
                          <div className="text-center px-4">
                            <div className="w-20 h-20 sm:w-28 sm:h-28 bg-blue-50/80 rounded-xl flex items-center justify-center mb-3 sm:mb-4 mx-auto backdrop-blur-sm hover:scale-110 transition-transform duration-300">
                              <Image src="/logo.png" alt="Vaidya LIMS" width={80} height={80} className="w-16 h-16 sm:w-20 sm:h-20" />
                            </div>
                            <span className="text-gray-700 font-medium text-base sm:text-lg">Vaidya LIMS - Digital Lab Reports Platform</span>
                            <p className="text-gray-500 text-xs sm:text-sm mt-2">Streamlined diagnostics and automated reporting</p>
                          </div>
                        </div>
                        <div className="w-full sm:w-80 md:w-96 h-48 sm:h-56 border-2 border-gray-300 rounded-xl bg-white flex items-center justify-center hover:border-green-300 hover:scale-105 transition-all duration-300 shadow-sm hover:shadow-lg">
                          <div className="text-center px-4">
                            <div className="w-20 h-20 sm:w-28 sm:h-28 bg-green-50/80 rounded-xl flex items-center justify-center mb-3 sm:mb-4 mx-auto backdrop-blur-sm hover:scale-110 transition-transform duration-300">
                              <Image src="/logo.png" alt="VaidyaOne" width={80} height={80} className="w-16 h-16 sm:w-20 sm:h-20" />
                            </div>
                            <span className="text-gray-700 font-medium text-base sm:text-lg">VaidyaOne - Unified Health Record Platform</span>
                            <p className="text-gray-500 text-xs sm:text-sm mt-2">Centralized patient health data management</p>
                          </div>
                        </div>
           </div>

                                {/* Subtle Side-by-Side Features Layout */}
           <div className="max-w-7xl mx-auto mb-24">
             <div className="grid grid-cols-1 xl:grid-cols-2 gap-16">
               {/* Left Column - Vaidya LIMS Features */}
               <div className="relative">
                 <div className="sticky top-8">
                   <div className="bg-white rounded-2xl p-8 border border-gray-200">
                                                     <div className="flex items-center mb-8">
                                  <div className="w-24 h-24 bg-green-50/80 rounded-xl flex items-center justify-center mr-6 backdrop-blur-sm">
                                    <Image src="/logo.png" alt="Vaidya LIMS" width={64} height={64} />
                                  </div>
                                  <div>
                                    <h3 className="text-xl font-medium text-gray-900">Vaidya LIMS - Digital Lab Reports Platform</h3>
                                    <p className="text-green-600 text-sm">Streamlined diagnostics and automated reporting</p>
                                  </div>
                                </div>
                     
                     <div className="space-y-6">
                       <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-gray-200 transition-colors">
                         <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                           <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                             <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"/>
                           </svg>
                         </div>
                         <div>
                           <h4 className="font-medium text-gray-900 mb-2 text-sm">Secure, Compliant Report Generation</h4>
                           <p className="text-gray-600 text-xs leading-relaxed">Create structured, high-quality reports and billing documents in seconds, with built-in end-to-end encryption and regulatory compliance.</p>
                         </div>
                       </div>
                       
                       <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-gray-200 transition-colors">
                         <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                           <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                             <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"/>
                           </svg>
                         </div>
                         <div>
                           <h4 className="font-medium text-gray-900 mb-2 text-sm">Complete Workflow Management</h4>
                           <p className="text-gray-600 text-xs leading-relaxed">From patient registration to final report delivery, manage every step with precision and speed. Automate key tasks, reduce manual errors, and ensure a smoother diagnostic journey.</p>
                         </div>
                       </div>
                       
                       <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-gray-200 transition-colors">
                         <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                           <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                             <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                           </svg>
                         </div>
                         <div>
                           <h4 className="font-medium text-gray-900 mb-2 text-sm">Interoperable Health Record Integration</h4>
                           <p className="text-gray-600 text-xs leading-relaxed">Connect effortlessly with VaidyaOne and doctor workflows to eliminate silos and enable real-time, secure data exchange.</p>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
               
               {/* Right Column - VaidyaOne Features */}
               <div className="relative">
                 <div className="sticky top-8">
                   <div className="bg-white rounded-2xl p-8 border border-gray-200">
                                                     <div className="flex items-center mb-8">
                                  <div className="w-24 h-24 bg-blue-50/80 rounded-xl flex items-center justify-center mr-6 backdrop-blur-sm">
                                    <Image src="/logo.png" alt="VaidyaOne" width={64} height={64} />
                                  </div>
                                  <div>
                                    <h3 className="text-xl font-medium text-gray-900">VaidyaOne - Unified Health Record Platform</h3>
                                    <p className="text-blue-600 text-sm">Centralized patient health data management</p>
                                  </div>
                                </div>
                     
                     <div className="space-y-6">
                       <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-gray-200 transition-colors">
                         <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                           <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                             <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"/>
                           </svg>
                         </div>
                         <div>
                           <h4 className="font-medium text-gray-900 mb-2 text-sm">Patient-Owned Digital Health Vault</h4>
                           <p className="text-gray-600 text-xs leading-relaxed">Secure, lifelong repository for all health records including lab reports, prescriptions, and imaging, accessible anytime, anywhere.</p>
                         </div>
                       </div>
                       
                       <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-gray-200 transition-colors">
                         <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                           <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                             <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"/>
                           </svg>
                         </div>
                         <div>
                           <h4 className="font-medium text-gray-900 mb-2 text-sm">AI-Powered Health Summaries</h4>
                           <p className="text-gray-600 text-xs leading-relaxed">Automatically generates simplified, structured summaries of medical history, conditions, and test results for better understanding and continuity of care.</p>
                         </div>
                       </div>
                       
                       <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-gray-200 transition-colors">
                         <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                           <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                             <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                           </svg>
                         </div>
                         <div>
                           <h4 className="font-medium text-gray-900 mb-2 text-sm">Health Trend Analytics</h4>
                           <p className="text-gray-600 text-xs leading-relaxed">Visualize longitudinal trends in vitals, lab values, and chronic conditions with AI-driven pattern detection and alerts.</p>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </div>


                     </div>
       </div>
     </section>
  )
} 