import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import VaidyaIntelligenceSection from '@/components/VaidyaIntelligenceSection'
import AIDemoSection from '@/components/AIDemoSection'
import ProductsSection from '@/components/ProductsSection'
import TrustAndInteroperabilitySection from '@/components/TrustAndInteroperabilitySection'
import IndiaFocusSection from '@/components/IndiaFocusSection'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F9FAFB]">
      <Navbar />
      
      <HeroSection />
      
      <VaidyaIntelligenceSection />
      
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      
      <AIDemoSection />
      
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      
      <ProductsSection />
      
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      
      <TrustAndInteroperabilitySection />
      
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      
      <IndiaFocusSection />
      
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      
      <ContactForm />
      
      <Footer />
    </main>
  )
}
