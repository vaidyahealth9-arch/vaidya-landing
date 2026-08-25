'use client'

import { useState } from 'react'

export default function AIDemoSection() {
  const [selectedDemo, setSelectedDemo] = useState('diabetes')

  const demos = {
    diabetes: {
      label: "Diabetes Tracker (HbA1c)",
      marker: "HbA1c (Glycated Hemoglobin)",
      dates: ["Oct 2025", "Jan 2026", "May 2026"],
      values: [7.8, 7.1, 6.3],
      unit: "%",
      target: "< 5.7%",
      status: "Improving Control",
      statusColor: "text-emerald-600 bg-emerald-50 border-emerald-200",
      trendSvg: (
        <svg viewBox="0 0 300 120" className="w-full h-full">
          {/* Grid lines */}
          <line x1="20" y1="20" x2="280" y2="20" stroke="#f3f4f6" strokeWidth="1" />
          <line x1="20" y1="60" x2="280" y2="60" stroke="#f3f4f6" strokeWidth="1" />
          <line x1="20" y1="100" x2="280" y2="100" stroke="#f3f4f6" strokeWidth="1" />
          {/* Trend line */}
          <path d="M 50 15 L 150 50 L 250 90" fill="none" stroke="#10b981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          {/* Points */}
          <circle cx="50" cy="15" r="5" fill="#ef4444" stroke="white" strokeWidth="1.5" />
          <circle cx="150" cy="50" r="5" fill="#f59e0b" stroke="white" strokeWidth="1.5" />
          <circle cx="250" cy="90" r="5" fill="#10b981" stroke="white" strokeWidth="1.5" />
          {/* Value Labels */}
          <text x="50" y="38" fill="#374151" fontSize="11" fontWeight="bold" textAnchor="middle">7.8%</text>
          <text x="150" y="72" fill="#374151" fontSize="11" fontWeight="bold" textAnchor="middle">7.1%</text>
          <text x="250" y="112" fill="#374151" fontSize="11" fontWeight="bold" textAnchor="middle">6.3%</text>
        </svg>
      ),
      interpretation: "Significant clinical improvement. Your blood glucose control has moved from the diabetic range (7.8%) toward pre-diabetic regulation (6.3%). This trend represents a 19.2% reduction in overall cardiovascular and renal microvascular risk factors.",
      actions: [
        "Maintain current low-glycemic dietary regime (complex carbohydrates).",
        "Retest fasting blood glucose and HbA1c in September 2026 (90 days).",
        "Monitor daily active minutes to support peripheral insulin sensitivity."
      ],
      insightSummary: "Glycemic regulation is stabilizing. Metformin dosage efficacy is high, clinical indicators show positive metabolic adaptation."
    },
    lipid: {
      label: "Lipid Panel (LDL)",
      marker: "LDL Cholesterol",
      dates: ["Nov 2025", "Feb 2026", "Jun 2026"],
      values: [165, 142, 115],
      unit: " mg/dL",
      target: "< 100 mg/dL",
      status: "Decreasing Risk",
      statusColor: "text-emerald-600 bg-emerald-50 border-emerald-200",
      trendSvg: (
        <svg viewBox="0 0 300 120" className="w-full h-full">
          <line x1="20" y1="20" x2="280" y2="20" stroke="#f3f4f6" strokeWidth="1" />
          <line x1="20" y1="60" x2="280" y2="60" stroke="#f3f4f6" strokeWidth="1" />
          <line x1="20" y1="100" x2="280" y2="100" stroke="#f3f4f6" strokeWidth="1" />
          <path d="M 50 15 L 150 48 L 250 85" fill="none" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="50" cy="15" r="5" fill="#ef4444" stroke="white" strokeWidth="1.5" />
          <circle cx="150" cy="48" r="5" fill="#f59e0b" stroke="white" strokeWidth="1.5" />
          <circle cx="250" cy="85" r="5" fill="#10b981" stroke="white" strokeWidth="1.5" />
          <text x="50" y="38" fill="#374151" fontSize="11" fontWeight="bold" textAnchor="middle">165</text>
          <text x="150" y="70" fill="#374151" fontSize="11" fontWeight="bold" textAnchor="middle">142</text>
          <text x="250" y="108" fill="#374151" fontSize="11" fontWeight="bold" textAnchor="middle">115</text>
        </svg>
      ),
      interpretation: "LDL cholesterol has decreased by 30.3% over the past 7 months, approaching your optimal target of < 100 mg/dL. This trajectory indicates a successful reduction in atherosclerotic cardiovascular disease (ASCVD) risk score levels.",
      actions: [
        "Continue dietary lipid controls and statin therapy as prescribed.",
        "Add dietary soluble fiber (oat bran, legumes) to further reduce absorption.",
        "Schedule follow-up lipid profile in December 2026."
      ],
      insightSummary: "Atherogenic lipoprotein burden is diminishing. Statin therapy and lifestyle intervention are achieving physiological goals."
    },
    kidney: {
      label: "Kidney Function (eGFR)",
      marker: "eGFR (Estimated Glomerular Filtration)",
      dates: ["Dec 2025", "Mar 2026", "Jul 2026"],
      values: [55, 68, 79],
      unit: " mL/min/1.73m²",
      target: "> 90",
      status: "Restoring Function",
      statusColor: "text-emerald-600 bg-emerald-50 border-emerald-200",
      trendSvg: (
        <svg viewBox="0 0 300 120" className="w-full h-full">
          <line x1="20" y1="20" x2="280" y2="20" stroke="#f3f4f6" strokeWidth="1" />
          <line x1="20" y1="60" x2="280" y2="60" stroke="#f3f4f6" strokeWidth="1" />
          <line x1="20" y1="100" x2="280" y2="100" stroke="#f3f4f6" strokeWidth="1" />
          {/* Trend line going UP is good for eGFR! */}
          <path d="M 50 95 L 150 62 L 250 30" fill="none" stroke="#6366f1" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="50" cy="95" r="5" fill="#ef4444" stroke="white" strokeWidth="1.5" />
          <circle cx="150" cy="62" r="5" fill="#f59e0b" stroke="white" strokeWidth="1.5" />
          <circle cx="250" cy="30" r="5" fill="#10b981" stroke="white" strokeWidth="1.5" />
          <text x="50" y="115" fill="#374151" fontSize="11" fontWeight="bold" textAnchor="middle">55</text>
          <text x="150" y="82" fill="#374151" fontSize="11" fontWeight="bold" textAnchor="middle">68</text>
          <text x="250" y="50" fill="#374151" fontSize="11" fontWeight="bold" textAnchor="middle">79</text>
        </svg>
      ),
      interpretation: "Glomerular filtration rate has rebounded from Stage 3a kidney dysfunction (55 mL/min) up to 79 mL/min, indicating restored renal clearance efficiency. The positive direction suggests effective management of hypertension and drug-induced stress factors.",
      actions: [
        "Maintain strict systolic blood pressure target under 130 mmHg.",
        "Ensure optimal hydration of 2.5L clean fluids daily.",
        "Avoid NSAIDs (ibuprofen, naproxen) which restrict renal blood flow."
      ],
      insightSummary: "Renal clearance capacity is recovering. Adequate hydration and blood pressure controls have mitigated active glomerular stress."
    }
  }

  const current = demos[selectedDemo as keyof typeof demos]

  return (
    <section className="py-24 sm:py-32 bg-[#F9FAFB] relative overflow-hidden border-t border-b border-gray-200/50">
      <div className="absolute inset-0 bg-cyber-radial opacity-60 pointer-events-none z-0"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Sub-Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-1.5 mb-4 bg-blue-50 border border-blue-200/40 rounded-full">
            <span className="text-xs font-semibold text-blue-700 tracking-wider uppercase">Tangible AI Demo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-4">
            Longitudinal Insight Engine
          </h2>
          <p className="text-gray-600">
            Click the panels below to see how Vaidya Intelligence extracts raw laboratory markers over time and structures them into plain-language clinical understanding.
          </p>
        </div>

        {/* Simulator Area */}
        <div className="max-w-5xl mx-auto bg-white border border-gray-200 rounded-3xl shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left panel: Controls & Data Trend */}
          <div className="lg:col-span-5 p-6 sm:p-8 bg-gray-50 border-b lg:border-b-0 lg:border-r border-gray-200/60 flex flex-col justify-between">
            <div>
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">Select Biomarker</h3>
              
              {/* Tab buttons */}
              <div className="space-y-3 mb-8">
                {Object.entries(demos).map(([key, data]) => (
                  <button
                    key={key}
                    onClick={() => setSelectedDemo(key)}
                    className={`w-full text-left px-5 py-4 rounded-xl border font-semibold text-sm transition-all duration-200 flex items-center justify-between ${
                      selectedDemo === key
                        ? "bg-white border-green-500 shadow-md text-green-700"
                        : "bg-transparent border-gray-200 text-gray-600 hover:bg-gray-100/50 hover:text-gray-900"
                    }`}
                  >
                    <span>{data.label}</span>
                    {selectedDemo === key && (
                      <span className="w-2 h-2 rounded-full bg-green-500"></span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Simulated Trend Plot */}
            <div className="bg-white border border-gray-200 p-4 rounded-2xl">
              <div className="flex items-center justify-between mb-4">
                <div className="text-xs font-bold text-gray-500">{current.marker}</div>
                <div className={`px-2 py-0.5 border rounded text-2xs font-semibold ${current.statusColor}`}>
                  {current.status}
                </div>
              </div>
              
              {/* Chart Plot box */}
              <div className="h-28 w-full bg-gray-50/50 rounded-lg flex items-center justify-center border border-gray-100 p-1">
                {current.trendSvg}
              </div>
              
              <div className="flex justify-between items-center mt-3 text-2xs text-gray-400 px-4">
                {current.dates.map((date, idx) => (
                  <span key={idx}>{date}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Right panel: AI Clinical Insight Output */}
          <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              {/* Box Title */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                  <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider">Vaidya AI Clinical Insight</h4>
                </div>
                <span className="text-2xs font-bold text-gray-400 bg-gray-100 px-2.5 py-1 rounded">
                  Format: Clinical Narrative
                </span>
              </div>

              {/* Gradient Banner Summary */}
              <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-100 rounded-2xl p-4 sm:p-5 mb-6">
                <h5 className="text-xs font-bold text-green-800 uppercase tracking-widest mb-1.5">Executive Summary</h5>
                <p className="text-sm sm:text-base font-medium text-gray-800 leading-snug">
                  &ldquo;{current.insightSummary}&rdquo;
                </p>
              </div>

              {/* Detailed narrative analysis */}
              <div className="space-y-6">
                <div>
                  <h5 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Physiological Interpretation</h5>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {current.interpretation}
                  </p>
                </div>

                <div>
                  <h5 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">AI-Drafted Action Recommendations</h5>
                  <ul className="space-y-2">
                    {current.actions.map((act, idx) => (
                      <li key={idx} className="flex items-start text-xs sm:text-sm text-gray-600">
                        <span className="text-green-500 mr-2 flex-shrink-0">✓</span>
                        <span className="leading-normal">{act}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Human in the loop footer tag */}
            <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center space-x-2 bg-emerald-50 text-emerald-800 border border-emerald-100 px-3.5 py-1.5 rounded-full text-2xs font-semibold">
                <svg className="w-3.5 h-3.5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Clinician-in-the-loop Active Verification</span>
              </div>
              <div className="text-2xs text-gray-400">
                Processed via Vaidya Medical LLM (v2.4)
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
