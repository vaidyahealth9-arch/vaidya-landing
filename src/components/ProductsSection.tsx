'use client'

import Image from 'next/image'

export default function ProductsSection() {
  const products = [
    {
      id: "lims",
      badge: "Diagnostics",
      title: "VaidyaLab",
      subtitle: "AI-native operating system for diagnostic laboratories",
      desc: "Replaces traditional static reports with a dynamic clinical system. Equips labs with automated biomarker extraction, instant pathology warnings, and longitudinal trend lines.",
      features: [
        {
          name: "AI-Assisted Automated Reporting",
          detail: "Automatically parses lab values, maps reference intervals, and drafts initial diagnostic summaries for pathologist review."
        },
        {
          name: "Longitudinal Trend Mapping",
          detail: "Connects current readings with historical records to construct longitudinal biomarker lines and track health shifts."
        },
        {
          name: "Hyper-Acute Abnormality Alerts",
          detail: "Identifies life-critical values instantly, triggering automated alerts to clinicians for immediate critical care."
        }
      ],
      iconBg: "bg-emerald-50",
      accentColor: "border-green-300 hover:border-green-500",
      textColor: "text-green-700 bg-green-50/50"
    },
    {
      id: "vaidyaone",
      badge: "Patient Portal",
      title: "VaidyaOne",
      subtitle: "Your lifelong AI health companion",
      desc: "Moves beyond simple health storage. Actively interprets and translates dense medical charts into conversational, patient-friendly insights for active wellness guidance.",
      features: [
        {
          name: "Conversational Report Translation",
          detail: "Converts complex clinical reports and chemical listings into simple, plain-language summaries anyone can understand."
        },
        {
          name: "Longitudinal Biomarker Insights",
          detail: "Visualizes and explains physiological trends over years, helping patients trace patterns in cholesterol, blood sugar, or thyroid levels."
        },
        {
          name: "Preventative Milestones & Alerts",
          detail: "Suggests age-appropriate screenings, pediatric milestones, and immunizations based on historical health data."
        }
      ],
      iconBg: "bg-blue-50",
      accentColor: "border-blue-300 hover:border-blue-500",
      textColor: "text-blue-700 bg-blue-50/50"
    },
    {
      id: "vaidyamd",
      badge: "Clinicians",
      title: "VaidyaMD",
      subtitle: "AI-powered clinical workspace",

      desc: "Intelligent medical workspace providing clinicians with consultation copilots, automated note generation, and context-aware clinical decision checklists.",
      features: [
        {
          name: "Consultation Audio Copilot",
          detail: "Listens to patient-clinician conversations to auto-draft structured SOAP notes and treatment proposals."
        },
        {
          name: "Interactive Patient Overviews",
          detail: "Extracts primary complaints, medication lists, and critical lab histories to present a unified patient summary."
        },
        {
          name: "AI-Native Screening Checklists",
          detail: "Recommends evidence-based preventative screenings and immunization checks in real time based on active charts."
        }
      ],
      iconBg: "bg-indigo-50",
      accentColor: "border-indigo-300 hover:border-indigo-500",
      textColor: "text-indigo-700 bg-indigo-50/50"
    }
  ]

  return (
    <section id="products" className="py-24 sm:py-32 bg-white relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center px-4 py-1.5 mb-4 bg-green-50 border border-green-200/50 rounded-full">
            <span className="text-xs font-semibold text-green-700 tracking-wider uppercase">Application Layer</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-4">
            Built on Vaidya Intelligence
          </h2>
          <p className="text-gray-600">
            Our platform supports specialized applications that leverage the central intelligence layer to power diagnostics, patient companion loops, and clinician workflows.
          </p>
        </div>

        {/* Product Cards Stack */}
        <div className="space-y-24">
          {products.map((product, idx) => (
            <div 
              key={product.id}
              className={`flex flex-col lg:flex-row gap-12 lg:gap-16 items-start ${
                idx % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Product Intro */}
              <div className="w-full lg:w-5/12 space-y-6">
                <div className="flex items-center space-x-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${product.textColor}`}>
                    {product.badge}
                  </span>
                  
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">{product.title}</h3>
                  <div className="text-lg font-semibold text-green-700 leading-snug">
                    {product.subtitle}
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed text-base">
                  {product.desc}
                </p>

                {/* Simulated Product Card Illustration */}
                <div className={`border border-gray-200 rounded-2xl p-6 ${product.iconBg} relative overflow-hidden shadow-sm`}>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                      <Image src={product.id === 'vaidyamd' ? '/VaidyaMd.png' : '/logo.png'} alt={product.title} width={36} height={36} className="rounded-lg object-contain" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-sm">{product.title}</div>
                      <div className="text-xs text-gray-400">Powered by Vaidya Intelligence</div>
                    </div>
                  </div>
                  <div className="w-full h-2 bg-white rounded-full overflow-hidden">
                    <div className="w-3/4 h-full bg-green-500 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Product Detailed Features */}
              <div className="w-full lg:w-7/12 space-y-6">
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Core Capabilities</h4>
                
                <div className="space-y-4">
                  {product.features.map((feature, fIdx) => (
                    <div 
                      key={fIdx} 
                      className="p-5 bg-gray-50 border border-gray-200/60 rounded-xl hover:bg-white hover:border-green-400 hover:shadow-md transition-all duration-300"
                    >
                      <h5 className="font-bold text-gray-900 mb-1.5 text-base flex items-center">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2.5"></span>
                        {feature.name}
                      </h5>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed pl-4">
                        {feature.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}