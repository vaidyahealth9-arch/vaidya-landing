'use client'

import { useState } from 'react'

export default function VaidyaIntelligenceSection() {
  const [activeStep, setActiveStep] = useState(0)

  const steps = [
    {
      title: "Capture",
      desc: "Ingests raw, unstructured healthcare data from diagnostic devices, EHRs, prescriptions, and wearables."
    },
    {
      title: "Structure",
      desc: "Standardizes and translates clinical variables into FHIR, HL7, and ABDM compliant schemas."
    },
    {
      title: "Understand",
      desc: "AI engines interpret biomarker trends, identify anomalies, and map correlations."
    },
    {
      title: "Predict",
      desc: "Models run risk screening to flag critical shifts, chronic patterns, and preventative care needs."
    },
    {
      title: "Act",
      desc: "Delivers plain-language summaries for patients and clinical-grade workspaces for providers."
    }
  ]

  const capabilities = [
    {
      title: "AI Clinical Copilot",
      icon: (
        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      desc: "Drafts medical notes, summarizes complex multi-page patient charts, and extracts crucial case summaries to reduce doctor cognitive load."
    },
    {
      title: "AI Lab Intelligence",
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 9.172V5L8 4z" />
        </svg>
      ),
      desc: "Enables AI-native operating workflows for diagnostics with automatic abnormality warnings, longitudinal tracker lines, and insight drafting."
    },
    {
      title: "AI Preventive Intelligence",
      icon: (
        <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      desc: "Identifies early risk factors and suggests customized screening paths, immunization calendars, and developmental milestone warnings."
    },
    {
      title: "AI Workflow Agents",
      icon: (
        <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      desc: "Operates background loops that automatically check results, follow up on outstanding patient checklists, and coordinate clinical alerts."
    }
  ]

  return (
    <section id="platform" className="py-24 sm:py-32 bg-white relative overflow-hidden scroll-mt-20">
      {/* Background radial effects */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-cyber-radial pointer-events-none z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center px-4 py-1.5 mb-4 bg-green-50 border border-green-200/50 rounded-full">
            <span className="text-xs font-semibold text-green-700 tracking-wider uppercase">Central Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-6">
            Introducing Vaidya Intelligence
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            Vaidya Health is building the intelligence layer for healthcare. We unify data sources across the ecosystem, feeding them through an intelligent computing layer that powers clinical applications.
          </p>
        </div>

        {/* Replaced Ecosystem Graphic - Flowing SVG Grid */}
        <div className="mb-24 bg-gray-50/50 border border-gray-200/60 rounded-3xl p-6 sm:p-10 lg:p-12 relative overflow-hidden shadow-sm">
          <div className="absolute inset-0 bg-grid-pattern opacity-50 z-0"></div>
          
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 text-center mb-10 relative z-10">
            The Healthcare Data Lifecycle
          </h3>

          <div className="relative z-10 w-full max-w-4xl mx-auto">
            {/* Desktop Ecosystem diagram */}
            <div className="hidden md:block">
              <svg className="w-full h-[280px]" viewBox="0 0 800 280" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* SVG Flow Paths */}
                {/* Source Nodes to Central Intelligence */}
                <path d="M 170 60 Q 300 60, 360 140" fill="none" stroke="#e5e7eb" strokeWidth="2.5" />
                <path d="M 170 60 Q 300 60, 360 140" fill="none" stroke="url(#active-flow-grad)" strokeWidth="3" className="animate-data-flow" />

                <path d="M 170 140 H 360" fill="none" stroke="#e5e7eb" strokeWidth="2.5" />
                <path d="M 170 140 H 360" fill="none" stroke="url(#active-flow-grad)" strokeWidth="3" className="animate-data-flow" style={{ animationDelay: '-0.3s' }} />

                <path d="M 170 220 Q 300 220, 360 140" fill="none" stroke="#e5e7eb" strokeWidth="2.5" />
                <path d="M 170 220 Q 300 220, 360 140" fill="none" stroke="url(#active-flow-grad)" strokeWidth="3" className="animate-data-flow" style={{ animationDelay: '-0.6s' }} />

                {/* Intelligence to Insights */}
                <path d="M 440 140 H 540" fill="none" stroke="#e5e7eb" strokeWidth="2.5" />
                <path d="M 440 140 H 540" fill="none" stroke="url(#active-flow-grad-2)" strokeWidth="3.5" className="animate-data-flow" />

                {/* Insights to Outputs */}
                <path d="M 590 140 Q 640 60, 710 60" fill="none" stroke="#e5e7eb" strokeWidth="2.5" />
                <path d="M 590 140 Q 640 60, 710 60" fill="none" stroke="url(#active-flow-grad-2)" strokeWidth="3" className="animate-data-flow" style={{ animationDelay: '-0.2s' }} />

                <path d="M 590 140 H 710" fill="none" stroke="#e5e7eb" strokeWidth="2.5" />
                <path d="M 590 140 H 710" fill="none" stroke="url(#active-flow-grad-2)" strokeWidth="3" className="animate-data-flow" style={{ animationDelay: '-0.5s' }} />

                <path d="M 590 140 Q 640 220, 710 220" fill="none" stroke="#e5e7eb" strokeWidth="2.5" />
                <path d="M 590 140 Q 640 220, 710 220" fill="none" stroke="url(#active-flow-grad-2)" strokeWidth="3" className="animate-data-flow" style={{ animationDelay: '-0.8s' }} />

                {/* Gradients */}
                <defs>
                  <linearGradient id="active-flow-grad" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#10b981" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="1" />
                  </linearGradient>
                  <linearGradient id="active-flow-grad-2" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="1" />
                    <stop offset="100%" stopColor="#10b981" stopOpacity="0.2" />
                  </linearGradient>
                </defs>

                {/* LEFT: Data Sources */}
                {/* Labs */}
                <g transform="translate(20, 35)">
                  <rect width="150" height="50" rx="8" fill="white" stroke="#e5e7eb" strokeWidth="1" />
                  <text x="75" y="30" fill="#374151" fontSize="13" fontWeight="600" textAnchor="middle">Diagnostic Labs</text>
                  <circle cx="150" cy="25" r="4" fill="#10b981" />
                </g>
                {/* Clinical Data */}
                <g transform="translate(20, 115)">
                  <rect width="150" height="50" rx="8" fill="white" stroke="#e5e7eb" strokeWidth="1" />
                  <text x="75" y="30" fill="#374151" fontSize="13" fontWeight="600" textAnchor="middle">Clinical Workspaces</text>
                  <circle cx="150" cy="25" r="4" fill="#10b981" />
                </g>
                {/* Patient Records */}
                <g transform="translate(20, 195)">
                  <rect width="150" height="50" rx="8" fill="white" stroke="#e5e7eb" strokeWidth="1" />
                  <text x="75" y="30" fill="#374151" fontSize="13" fontWeight="600" textAnchor="middle">Patient Records</text>
                  <circle cx="150" cy="25" r="4" fill="#10b981" />
                </g>

                {/* CENTER: Vaidya Intelligence */}
                <g transform="translate(360, 105)">
                  <rect width="80" height="70" rx="12" fill="#10b981" filter="url(#glow-filter)" />
                  <text x="40" y="34" fill="white" fontSize="11" fontWeight="bold" textAnchor="middle">VAIDYA</text>
                  <text x="40" y="48" fill="white" fontSize="9" fontWeight="bold" textAnchor="middle">INTELLIGENCE</text>
                  <circle cx="0" cy="35" r="5" fill="#3b82f6" />
                  <circle cx="80" cy="35" r="5" fill="#3b82f6" />
                </g>

                {/* RIGHT OF CENTER: AI Insights */}
                <g transform="translate(540, 115)">
                  <rect width="50" height="50" rx="25" fill="#e0f2fe" stroke="#3b82f6" strokeWidth="1.5" />
                  <text x="25" y="29" fill="#0369a1" fontSize="12" fontWeight="bold" textAnchor="middle">AI</text>
                  <circle cx="0" cy="25" r="4" fill="#3b82f6" />
                  <circle cx="50" cy="25" r="4" fill="#10b981" />
                </g>

                {/* RIGHT: Actions */}
                {/* Doctor */}
                <g transform="translate(630, 35)">
                  <rect width="150" height="50" rx="8" fill="white" stroke="#e5e7eb" strokeWidth="1" />
                  <text x="75" y="30" fill="#374151" fontSize="13" fontWeight="600" textAnchor="middle">Clinicians (VaidyaMD)</text>
                  <circle cx="0" cy="25" r="4" fill="#10b981" />
                </g>
                {/* Patient */}
                <g transform="translate(630, 115)">
                  <rect width="150" height="50" rx="8" fill="white" stroke="#e5e7eb" strokeWidth="1" />
                  <text x="75" y="30" fill="#374151" fontSize="13" fontWeight="600" textAnchor="middle">Patients (VaidyaOne)</text>
                  <circle cx="0" cy="25" r="4" fill="#10b981" />
                </g>
                {/* Healthcare Organization */}
                <g transform="translate(630, 195)">
                  <rect width="150" height="50" rx="8" fill="white" stroke="#e5e7eb" strokeWidth="1" />
                  <text x="75" y="30" fill="#374151" fontSize="13" fontWeight="600" textAnchor="middle">Hospitals & Networks</text>
                  <circle cx="0" cy="25" r="4" fill="#10b981" />
                </g>

                {/* Glow Filter */}
                <filter id="glow-filter" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </svg>
            </div>

            {/* Mobile Ecosystem Stack List */}
            <div className="md:hidden space-y-6">
              <div className="bg-white border border-gray-200 p-5 rounded-2xl">
                <div className="text-xs font-bold text-green-600 mb-2 uppercase tracking-wide">Step 1: Data Sources</div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 bg-gray-100 rounded-lg text-sm text-gray-700 font-medium">Labs</span>
                  <span className="px-3 py-1.5 bg-gray-100 rounded-lg text-sm text-gray-700 font-medium">Clinical Workspaces</span>
                  <span className="px-3 py-1.5 bg-gray-100 rounded-lg text-sm text-gray-700 font-medium">Patient Records</span>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="w-8 h-8 rounded-full bg-green-50 border border-green-200 flex items-center justify-center">
                  <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
              </div>

              <div className="bg-green-600 text-white p-6 rounded-2xl text-center shadow-lg shadow-green-100">
                <h4 className="font-bold text-lg mb-1">Vaidya Intelligence</h4>
                <p className="text-xs text-green-100">Central processing & AI compliance layer</p>
              </div>

              <div className="flex justify-center">
                <div className="w-8 h-8 rounded-full bg-green-50 border border-green-200 flex items-center justify-center">
                  <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
              </div>

              <div className="bg-white border border-gray-200 p-5 rounded-2xl">
                <div className="text-xs font-bold text-blue-600 mb-2 uppercase tracking-wide">Step 3: Outputs & Action</div>
                <div className="flex flex-col space-y-2">
                  <span className="p-2.5 bg-gray-50 rounded-lg text-sm text-gray-700 font-semibold border border-gray-100">Doctor Workspaces (VaidyaMD)</span>
                  <span className="p-2.5 bg-gray-50 rounded-lg text-sm text-gray-700 font-semibold border border-gray-100">Patient Companions (VaidyaOne)</span>
                  <span className="p-2.5 bg-gray-50 rounded-lg text-sm text-gray-700 font-semibold border border-gray-100">Hospital Networks</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* From Data to Intelligence - Flow timeline */}
        <div className="mb-24">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 text-center mb-10">
            From Data to Intelligence
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 max-w-5xl mx-auto">
            {steps.map((step, idx) => (
              <div 
                key={idx} 
                className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                  activeStep === idx 
                    ? "bg-white border-green-500 shadow-xl shadow-gray-100 scale-105" 
                    : "bg-gray-50/50 border-gray-200 hover:border-gray-300"
                }`}
                onClick={() => setActiveStep(idx)}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                    activeStep === idx ? "bg-green-600 text-white" : "bg-gray-200 text-gray-700"
                  }`}>
                    {idx + 1}
                  </span>
                  {idx < 4 && (
                    <span className="hidden md:block text-gray-300 text-xl font-bold">➔</span>
                  )}
                </div>
                <h4 className="font-bold text-gray-900 mb-2 text-base">{step.title}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* AI Capabilities Sub-Section */}
        <div id="ai-capabilities" className="scroll-mt-24">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-12">
            AI Infrastructure Capabilities
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {capabilities.map((cap, idx) => (
              <div key={idx} className="bg-gray-50/40 border border-gray-200/60 rounded-2xl p-6 sm:p-8 hover:border-green-300 transition-all duration-300 hover:shadow-lg flex items-start space-x-6">
                <div className="w-14 h-14 rounded-xl bg-white border border-gray-200 flex items-center justify-center flex-shrink-0 shadow-sm">
                  {cap.icon}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{cap.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{cap.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
