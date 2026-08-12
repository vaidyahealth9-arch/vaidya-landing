'use client'

export default function FeaturesSection() {
  const features = [
    {
      icon: "🌿",
      title: "Ayurvedic Therapies",
      description: "Traditional healing methods using natural herbs and holistic approaches for complete wellness.",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      icon: "🧘‍♀️",
      title: "Yoga Programs",
      description: "Comprehensive yoga sessions for physical strength, mental clarity, and spiritual growth.",
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      icon: "💆‍♀️",
      title: "Physiotherapy",
      description: "Modern therapeutic techniques combined with traditional wisdom for optimal recovery.",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      icon: "🌱",
      title: "Wellness Coaching",
      description: "Personalized guidance for lifestyle changes and sustainable health practices.",
      gradient: "from-orange-500 to-red-600"
    },
    {
      icon: "🍃",
      title: "Herbal Medicine",
      description: "Natural remedies and herbal supplements for preventive and curative care.",
      gradient: "from-teal-500 to-green-600"
    },
    {
      icon: "✨",
      title: "Mindfulness Training",
      description: "Meditation and mindfulness practices for mental health and emotional balance.",
      gradient: "from-indigo-500 to-purple-600"
    }
  ]

  return (
         <section id="treatments" className="py-16 sm:py-20 bg-gray-50 relative overflow-hidden">
       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         {/* Section Header */}
         <div className="text-center mb-12 sm:mb-16">
           <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-gray-900 mb-4 sm:mb-6">
             Holistic Wellness
             <span className="text-green-600 block">Treatments</span>
           </h2>
           <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
             Experience the perfect blend of ancient wisdom and modern science for your complete well-being
           </p>
         </div>

                 {/* Features Grid */}
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 px-4">
          {features.map((feature, index) => (
                         <div 
               key={index}
               className="group relative bg-white border-2 border-gray-200 rounded-xl p-6 sm:p-8 hover:border-green-500 transition-all duration-300 hover:transform hover:scale-105 shadow-sm hover:shadow-lg"
             >
               <div className="relative z-10">
                 {/* Icon */}
                 <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-green-200 transition-colors duration-300">
                   <span className="text-2xl sm:text-3xl">{feature.icon}</span>
                 </div>
                 
                 {/* Content */}
                 <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-3 sm:mb-4 group-hover:text-green-600 transition-colors duration-300">
                   {feature.title}
                 </h3>
                 <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                   {feature.description}
                 </p>
                
                {/* Hover effect */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-emerald-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </div>
            </div>
          ))}
        </div>

                 {/* CTA Section */}
         <div className="text-center">
                           <button className="px-8 sm:px-12 py-3 sm:py-4 bg-green-600 text-white rounded-full font-medium text-base sm:text-lg hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl">
             Start Your Journey
           </button>
         </div>
      </div>
    </section>
  )
} 