"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header role="banner" className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-tight">
          <Image
            width={150}
            height={150}
            src={`/atto_code.svg`}
            alt="AttoCode - Desarrollador web"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav aria-label="Navegación principal" className="hidden md:flex items-center gap-8">
          <Link aria-label="Sección de precios" href="#precios" className="text-sm hover:text-white/70 transition">
            Precios
          </Link>
          <Link aria-label="Sección de proyectos" href="#proyectos" className="text-sm hover:text-white/70 transition">
            Proyectos
          </Link>
          <Link aria-label="Contacto directo en mi WhatsApp" target="_blank" href="https://wa.me/5218716143589?text=Hola!%20quiero%20información%20sobre%20desarrollo%20web%20y%20una%20cotización" className="text-sm hover:text-white/70 transition">
            Contacto
          </Link>
        </nav>


        {/* Mobile Menu Button */}
        <button aria-label="Abrir menú" onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-black border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          <Link aria-label="Sección de precios" href="#proyectos" className="text-sm hover:text-white/70 transition">
            Proyectos
          </Link>
          <Link aria-label="Sección de proyectos" href="#precios" className="text-sm hover:text-white/70 transition">
            Precios
          </Link>
          <Link aria-label="Contacto directo en mi WhatsApp"  target="_blank" href="https://wa.me/5218716143589?text=Hola!%20quiero%20información%20sobre%20desarrollo%20web%20y%20una%20cotización" className="text-sm hover:text-white/70 transition">
            Contacto
          </Link>
        </nav>
      )}
    </header>
  )
}
