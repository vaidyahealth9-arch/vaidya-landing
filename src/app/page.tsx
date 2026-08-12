import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import ProductsSection from '@/components/ProductsSection'
import IntegrationSection from '@/components/IntegrationSection'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F9FAFB]">
      <Navbar />
      <HeroSection />
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      <ProductsSection />
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      <IntegrationSection />
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      <ContactForm />
      <Footer />
    </main>
  )
}
