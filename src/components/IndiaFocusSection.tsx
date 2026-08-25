'use client'

export default function IndiaFocusSection() {
  const cards = [
    {
      title: "Bridging Fragmented Sinks",
      desc: "India's health landscape spans over 100,000 diagnostic labs, local outpatient clinics, and major tertiary hospitals—nearly all operating in separate data silos. Vaidya Intelligence integrates these points into a unified observation stream."
    },
    {
      title: "Consent-Driven Portability",
      desc: "By aligning with the Ayushman Bharat Digital Mission (ABDM), patients link longitudinal records to their ABHA account. Doctors request secure permissioned access via standard authorization loops."
    },
    {
      title: "Localized AI Comprehension",
      desc: "AI translation engines convert dense clinical reports into patient-friendly summaries. Enables patients across tier-2 and tier-3 regions to understand biomarker alerts in their preferred language."
    }
  ]

  return (
    <section className="py-24 sm:py-32 bg-white relative overflow-hidden border-t border-gray-200/50">
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-cyber-radial pointer-events-none z-0"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Text block */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center px-4 py-1.5 bg-green-50 border border-green-200/50 rounded-full">
              <span className="text-xs font-semibold text-green-700 tracking-wider uppercase">India Focus</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight tracking-tight">
              Building the intelligence layer for India’s healthcare ecosystem
            </h2>
            
            <p className="text-gray-600 leading-relaxed text-base">
              The Indian healthcare network is vast but deeply disconnected. Vaidya Health bridges this digital divide, enabling diagnostic laboratories, local doctor clinics, and public hospitals to speak a single intelligent language.
            </p>
            
            {/* Map visual indicator */}
            <div className="p-5 bg-gray-50 border border-gray-200/60 rounded-2xl flex items-center space-x-4">
              <span className="text-2xl">🇮🇳</span>
              <div>
                <div className="font-bold text-gray-900 text-sm">ABDM Compliance Protocol</div>
                <div className="text-xs text-gray-500">Supporting National Health Authority standards</div>
              </div>
            </div>
          </div>

          {/* Grid blocks */}
          <div className="lg:col-span-7 space-y-6">
            {cards.map((card, idx) => (
              <div 
                key={idx}
                className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 hover:border-green-400 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="font-bold text-gray-900 mb-2.5 text-base sm:text-lg flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed pl-5">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
