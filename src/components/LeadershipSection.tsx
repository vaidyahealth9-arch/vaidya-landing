'use client'

import Image from 'next/image'
import Link from 'next/link'

interface Founder {
  name: string
  role: string
  tagline: string
  badge: string
  badgeColor: string
  image: string
  bio: string
  highlights: string[]
  linkedin: string
  email: string
}

export default function LeadershipSection() {
  const founders: Founder[] = [
    {
      name: "Dr. Sai Shiva Tadkamalla",
      role: "Co-Founder & CEO",
      tagline: "Consultant Neurosurgeon • Healthcare Technology & ABDM",
      badge: "Consultant Neurosurgeon",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200/80",
      image: "/Sai_Shva.jpeg",
      bio: "Consultant Neurosurgeon and healthcare innovator with advanced training in skull-base, neuroendoscopic, and endoscopic spine surgery. As Co-Founder & CEO of Vaidya Health, he is focused on transforming India's fragmented healthcare and diagnostics ecosystem by connecting laboratory data, patient health records, and clinical decision-making through intelligent, interoperable digital health infrastructure.",
      highlights: [
        "Clinical Practice & Neurosurgery",
        "Healthcare Technology & Digital Health",
        "Healthcare Operations & ABDM / Interoperability"
      ],
      linkedin: "https://www.linkedin.com/in/tsaishiva",
      email: "mailto:tsaishiva@gmail.com"
    },
    {
      name: "Ranjith A V",
      role: "Co-Founder & CTO",
      tagline: "IIT Bombay • Full Stack, AI/ML & DevOps",
      badge: "IIT Bombay Alumnus",
      badgeColor: "bg-blue-50 text-blue-700 border-blue-200/80",
      image: "/Ranjith.jpeg",
      bio: "IIT Bombay alumnus with deep expertise spanning full-stack software architecture, scalable cloud infrastructure, DevOps, and applied AI/ML systems. As Co-Founder & CTO of Vaidya Health, Ranjith spearheads core technology and engineering—architecting high-throughput diagnostic platforms, multi-agent comprehension systems, and robust software infrastructure.",
      highlights: [
        "IIT Bombay (IITB)",
        "Full Stack & AI/ML Systems",
        "DevOps & Cloud Infrastructure"
      ],
      linkedin: "https://www.linkedin.com/in/ranjith-av-340003191?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      email: "mailto:ranjithnagarathna@gmail.com"
    }
  ]

  return (
    <section id="about" className="py-24 sm:py-32 bg-[#F9FAFB] relative overflow-hidden scroll-mt-20">
      {/* Decorative ambient gradients */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-cyber-radial pointer-events-none opacity-60 z-0"></div>
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-cyber-radial-blue pointer-events-none opacity-50 z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center px-4 py-1.5 mb-4 bg-emerald-50 border border-emerald-200/60 rounded-full">
            <span className="text-xs font-semibold text-emerald-700 tracking-wider uppercase">
              Leadership & Vision
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-5">
            Bridging Clinical Medicine & Deep Technology
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            Vaidya Health is built at the intersection of frontline surgical expertise and cutting-edge software architecture. 
            We are dedicated to creating India&apos;s unified intelligence backbone for diagnostics, clinical workflows, and patient care.
          </p>
        </div>

        {/* Founders Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 max-w-6xl mx-auto">
          {founders.map((founder, idx) => (
            <div
              key={idx}
              className="group relative bg-white border border-gray-200 rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-2xl hover:border-emerald-300 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header Row: Portrait & Identity Details */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-6">
                  {/* Portrait Container */}
                  <div className="relative w-36 h-48 sm:w-44 sm:h-52 rounded-2xl overflow-hidden shadow-md flex-shrink-0 border border-gray-200/90 group-hover:border-emerald-400 group-hover:shadow-emerald-500/10 group-hover:shadow-lg transition-all duration-300 bg-gray-950">
                    <Image
                      src={founder.image}
                      alt={founder.name}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 144px, 176px"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-50"></div>
                  </div>

                  {/* Name, Role & Badges */}
                  <div className="flex-1 text-center sm:text-left flex flex-col justify-center">
                    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-2.5">
                      <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full border ${founder.badgeColor}`}>
                        {founder.badge}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-2xl font-bold text-gray-900 mb-1 tracking-tight">
                      {founder.name}
                    </h3>
                    
                    <div className="text-emerald-700 font-semibold text-sm mb-1.5 flex items-center justify-center sm:justify-start gap-1.5">
                      <span>{founder.role}</span>
                      <span className="text-gray-300">•</span>
                      <span className="text-gray-500 font-normal text-xs">Vaidya Health</span>
                    </div>

                    <p className="text-xs text-gray-500 font-medium mb-4 leading-relaxed">
                      {founder.tagline}
                    </p>

                    {/* Social & Contact Actions */}
                    <div className="flex items-center justify-center sm:justify-start gap-3">
                      {founder.linkedin && (
                        <Link
                          href={founder.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          id={`founder-linkedin-${idx}`}
                          className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-600 hover:text-blue-600 hover:border-blue-300 hover:bg-blue-50/50 shadow-xs transition-all duration-200"
                          aria-label={`${founder.name} LinkedIn Profile`}
                        >
                          <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.2a1.66 1.66 0 0 0-1.66 1.66c0 .92.74 1.66 1.66 1.66.92 0 1.66-.74 1.66-1.66 0-.92-.74-1.66-1.66-1.66Z" />
                          </svg>
                        </Link>
                      )}

                      {founder.email && (
                        <Link
                          href={founder.email}
                          id={`founder-email-${idx}`}
                          className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-600 hover:text-emerald-600 hover:border-emerald-300 hover:bg-emerald-50/50 shadow-xs transition-all duration-200"
                          aria-label={`Email ${founder.name}`}
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>

                {/* Bio text */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {founder.bio}
                </p>
              </div>

              {/* Highlights & Tags */}
              <div className="pt-4 border-t border-gray-100">
                <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2.5">
                  Core Expertise & Background
                </div>
                <div className="flex flex-wrap gap-2">
                  {founder.highlights.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-xs font-medium px-3 py-1 rounded-lg bg-gray-50 text-gray-700 border border-gray-200/80 group-hover:bg-emerald-50/40 group-hover:border-emerald-200/60 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Founding Philosophy Banner */}
        <div className="mt-16 max-w-4xl mx-auto bg-gradient-to-r from-emerald-50/90 via-white to-blue-50/90 border border-emerald-200/60 rounded-3xl p-6 sm:p-8 text-center shadow-xs">
          <div className="max-w-2xl mx-auto">
            <div className="inline-flex items-center space-x-2 text-xs font-bold text-emerald-800 uppercase tracking-wider mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Our Shared Purpose</span>
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-3">
              Why We Built Vaidya Health
            </h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              Every day across India, millions of critical diagnostic insights remain trapped in isolated paper reports and siloed lab systems. 
              By joining surgical-grade clinical empathy with modern AI and ABDM-compliant architectures, 
              we are creating the connected intelligence layer that empowers practitioners, elevates diagnostic centers, and puts patients in control of their longitudinal health.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
