'use client'

export default function TrustAndInteroperabilitySection() {
  const interops = [
    {
      title: "ABDM / ABHA Integration",
      desc: "Fully integrated with India's Ayushman Bharat Digital Mission. Enables consent-based query, linking, and routing of medical reports via ABHA health accounts.",
      icon: "🇮🇳"
    },
    {
      title: "HL7 FHIR Compliance",
      desc: "Implements standard Fast Healthcare Interoperability Resources schemas to represent observations, reports, diagnostic reports, and clinical resources.",
      icon: "🔥"
    },
    {
      title: "Legacy HL7 Support",
      desc: "Compatible with traditional HL7 v2/v3 messaging configurations, enabling direct interfaces with existing hospital infrastructure.",
      icon: "🔌"
    },
    {
      title: "Developer REST APIs",
      desc: "Robust, authenticated endpoints allowing clinics, diagnostic hubs, and external vendors to query clinical insights and post raw datasets securely.",
      icon: "⚙️"
    },
    {
      title: "PACS & Imaging Pathways",
      desc: "Interoperates with Picture Archiving and Communication Systems to receive DICOM metadata and integrate imaging observations with lab insights.",
      icon: "📷"
    },
    {
      title: "Secure Encrypted Exchange",
      desc: "End-to-end TLS transit and AES-256 rest encryption protocols, preventing unauthorized eavesdropping on clinical data channels.",
      icon: "🔒"
    }
  ]

  const trustPrinciples = [
    {
      title: "Privacy-First Architecture",
      desc: "Zero-knowledge design protocols ensure patient-identifiable data remains encrypted and decoupled from AI processing tokens."
    },
    {
      title: "Human-in-the-Loop Validation",
      desc: "Every AI-drafted diagnostic report, clinical consultation note, and patient-facing summary undergoes manual review by certified pathologists or medical practitioners."
    },
    {
      title: "Clinician Oversight Control",
      desc: "AI recommendations act exclusively as diagnostic decision assistance tools. Ultimate therapeutic decisions remain under 100% control of licensed clinicians."
    },
    {
      title: "End-to-End Auditability",
      desc: "Full cryptographically signed audit logs trace every step of data translation, processing, and clinician verification to verify compliance paths."
    }
  ]

  return (
    <section id="interoperability" className="py-24 sm:py-32 bg-[#F9FAFB] relative overflow-hidden scroll-mt-20">
      <div className="absolute inset-0 bg-cyber-radial-blue opacity-50 pointer-events-none z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Interoperability Sub-Section */}
        <div className="mb-28">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center px-4 py-1.5 mb-4 bg-blue-50 border border-blue-200/40 rounded-full">
              <span className="text-xs font-semibold text-blue-700 tracking-wider uppercase">Connected Networks</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-4">
              Differentiator: Interoperability
            </h2>
            <p className="text-gray-600">
              Vaidya Intelligence is built to connect. We support modern interoperability frameworks and standards to ensure frictionless health data exchange.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {interops.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-blue-400 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2 text-base">{item.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Responsible AI / Trust Sub-Section */}
        <div id="trust-framework" className="scroll-mt-24 border-t border-gray-200/60 pt-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center px-4 py-1.5 mb-4 bg-emerald-50 border border-emerald-200/40 rounded-full">
              <span className="text-xs font-semibold text-emerald-700 tracking-wider uppercase">Trust Framework</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-4">
              Responsible AI & Trust
            </h2>
            <p className="text-gray-600">
              Healthcare data requires absolute integrity. We govern our models with strict safety, compliance, and clinician oversight structures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {trustPrinciples.map((principle, idx) => (
              <div 
                key={idx}
                className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 hover:border-green-300 transition-all duration-300 flex items-start space-x-5"
              >
                <div className="w-10 h-10 rounded-full bg-green-50 border border-green-200 flex items-center justify-center flex-shrink-0 text-green-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2 text-base">{principle.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{principle.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
