import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { LocationModal } from "@/components/LocationModal";
import Portfolio from "@/components/Portfolio";
import Pricing from "@/components/Pricing";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <main aria-label="Página principal de AttoCode" className="bg-black text-white overflow-hidden">
      <LocationModal />
      <Header />
      <Hero />
      <Pricing />
      <Portfolio />
      <Footer />
      <WhatsAppFloat />
    </main>
  )
}
