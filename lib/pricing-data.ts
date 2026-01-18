import type { Country } from "./location-context"

export interface PricingPlan {
  title: string
  description: string
  price?: number
  cta: string
  featured?: boolean
  features: string[]
}

const PRICING: Record<Country, PricingPlan[]> = {
  MX: [
    {
      title: "Landing Page",
      description: "Sitio web profesional optimizado para conversiones",
      price: 3000,
      cta: "Quiero mi página web profesional",
      features: [
        "Diseño responsivo",
        "Optimización SEO",
        "Seguridad SSL",
        "Hosting incluido (primer año)",
        "Integración WhatsApp",
      ],
    },
    {
      title: "E-commerce",
      description: "Tienda online completa con carrito de compras",
      price: 8000,
      cta: "Quiero mi tienda",
      featured: true,
      features: [
        "Pasarelas de Pago",
        "Catálogo de productos",
        "Procesamiento de pagos",
        "Gestión de inventario",
        "Seguridad SSL",
        "Soporte técnico",
        "Capacitación",
      ],
    },
    {
      title: "Software a Medida",
      description: "Soluciones personalizadas para tu negocio",
      cta: "Cotizar Proyecto",
      features: [
        "Desarrollo personalizado",
        "Arquitectura Cloud",
        "Consultoría técnica",
        "Soporte post-lanzamiento",
        "Arquitectura escalable",
      ],
    },
  ],
  PE: [
    {
      title: "Landing Page",
      description: "Sitio web profesional optimizado para conversiones",
      price: 500,
      cta: "Quiero mi página web profesional",
      features: [
        "Diseño responsivo",
        "Optimización SEO",
        "Seguridad SSL",
        "Hosting incluido (primer año)",
        "Integración WhatsApp",
      ],
    },
    {
      title: "E-commerce",
      description: "Tienda online completa con carrito de compras",
      price: 1500,
      cta: "Quiero mi tienda",
      featured: true,
      features: [
        "Pasarelas de Pago",
        "Catálogo de productos",
        "Procesamiento de pagos",
        "Gestión de inventario",
        "Seguridad SSL",
        "Soporte técnico",
        "Capacitación",
      ],
    },
    {
      title: "Software a Medida",
      description: "Soluciones personalizadas para tu negocio",
      cta: "Cotizar Proyecto",
      features: [
        "Desarrollo personalizado",
        "Arquitectura Cloud",
        "Consultoría técnica",
        "Soporte post-lanzamiento",
        "Arquitectura escalable",
      ],
    },
  ],
  CO: [
    {
      title: "Landing Page",
      description: "Sitio web profesional optimizado para conversiones",
      price: 500000,
      cta: "Quiero mi página web profesional",
      features: [
        "Diseño responsivo",
        "Optimización SEO",
        "Seguridad SSL",
        "Hosting incluido (primer año)",
        "Integración WhatsApp",
      ],
    },
    {
      title: "E-commerce",
      description: "Tienda online completa con carrito de compras",
      price: 1700000,
      cta: "Quiero mi tienda",
      featured: true,
      features: [
        "Pasarelas de Pago",
        "Catálogo de productos",
        "Procesamiento de pagos",
        "Gestión de inventario",
        "Seguridad SSL",
        "Soporte técnico",
        "Capacitación",
      ],
    },
    {
      title: "Software a Medida",
      description: "Soluciones personalizadas para tu negocio",
      cta: "Cotizar Proyecto",
      features: [
        "Desarrollo personalizado",
        "Arquitectura Cloud",
        "Consultoría técnica",
        "Soporte post-lanzamiento",
        "Arquitectura escalable",
      ],
    },
  ],
  AR: [
    {
      title: "Landing Page",
      description: "Sitio web profesional optimizado para conversiones",
      price: 200000,
      cta: "Quiero mi página web profesional",
      features: [
        "Diseño responsivo",
        "Optimización SEO",
        "Seguridad SSL",
        "Hosting incluido (primer año)",
        "Integración WhatsApp",
      ],
    },
    {
      title: "E-commerce",
      description: "Tienda online completa con carrito de compras",
      price: 600000,
      cta: "Quiero mi tienda",
      featured: true,
      features: [
        "Pasarelas de Pago",
        "Catálogo de productos",
        "Procesamiento de pagos",
        "Gestión de inventario",
        "Seguridad SSL",
        "Soporte técnico",
        "Capacitación",
      ],
    },
    {
      title: "Software a Medida",
      description: "Soluciones personalizadas para tu negocio",
      cta: "Cotizar Proyecto",
      features: [
        "Desarrollo personalizado",
        "Arquitectura Cloud",
        "Consultoría técnica",
        "Soporte post-lanzamiento",
        "Arquitectura escalable",
      ],
    },
  ],
  EC: [
    {
      title: "Landing Page",
      description: "Sitio web profesional optimizado para conversiones",
      price: 150,
      cta: "Quiero mi página web profesional",
      features: [
        "Diseño responsivo",
        "Optimización SEO",
        "Seguridad SSL",
        "Hosting incluido (primer año)",
        "Integración WhatsApp",
      ],
    },
    {
      title: "E-commerce",
      description: "Tienda online completa con carrito de compras",
      price: 400,
      cta: "Quiero mi tienda",
      featured: true,
      features: [
        "Pasarelas de Pago",
        "Catálogo de productos",
        "Procesamiento de pagos",
        "Gestión de inventario",
        "Seguridad SSL",
        "Soporte técnico",
        "Capacitación",
      ],
    },
    {
      title: "Software a Medida",
      description: "Soluciones personalizadas para tu negocio",
      cta: "Cotizar Proyecto",
      features: [
        "Desarrollo personalizado",
        "Arquitectura Cloud",
        "Consultoría técnica",
        "Soporte post-lanzamiento",
        "Arquitectura escalable",
      ],
    },
  ],
  CL: [
    {
      title: "Landing Page",
      description: "Sitio web profesional optimizado para conversiones",
      price: 130000,
      cta: "Quiero mi página web profesional",
      features: [
        "Diseño responsivo",
        "Optimización SEO",
        "Seguridad SSL",
        "Hosting incluido (primer año)",
        "Integración WhatsApp",
      ],
    },
    {
      title: "E-commerce",
      description: "Tienda online completa con carrito de compras",
      price: 350000,
      cta: "Quiero mi tienda",
      featured: true,
      features: [
        "Pasarelas de Pago",
        "Catálogo de productos",
        "Procesamiento de pagos",
        "Gestión de inventario",
        "Seguridad SSL",
        "Soporte técnico",
        "Capacitación",
      ],
    },
    {
      title: "Software a Medida",
      description: "Soluciones personalizadas para tu negocio",
      cta: "Cotizar Proyecto",
      features: [
        "Desarrollo personalizado",
        "Arquitectura Cloud",
        "Consultoría técnica",
        "Soporte post-lanzamiento",
        "Arquitectura escalable",
      ],
    },
  ],
  US: [
    {
      title: "Landing Page",
      description: "Sitio web profesional optimizado para conversiones",
      price: 600,
      cta: "Quiero mi página web profesional",
      features: [
        "Diseño responsivo",
        "Optimización SEO",
        "Seguridad SSL",
        "Hosting incluido (primer año)",
        "Integración WhatsApp",
      ],
    },
    {
      title: "E-commerce",
      description: "Tienda online completa con carrito de compras",
      price: 2000,
      cta: "Quiero mi tienda",
      featured: true,
      features: [
        "Pasarelas de Pago",
        "Catálogo de productos",
        "Procesamiento de pagos",
        "Gestión de inventario",
        "Seguridad SSL",
        "Soporte técnico",
        "Capacitación",
      ],
    },
    {
      title: "Custom Software",
      description: "Soluciones personalizadas para tu negocio",
      cta: "Cotizar Proyecto",
      features: [
        "Desarrollo personalizado",
        "Arquitectura Cloud",
        "Consultoría técnica",
        "Soporte post-lanzamiento",
        "Arquitectura escalable",
      ],
    },
  ],
  EU: [
    {
      title: "Landing Page",
      description: "Sitio web profesional optimizado para conversiones",
      price: 600,
      cta: "Quiero mi página web profesional",
      features: [
        "Diseño responsivo",
        "Optimización SEO",
        "Seguridad SSL",
        "Hosting incluido (primer año)",
        "Integración WhatsApp",
      ],
    },
    {
      title: "E-commerce",
      description: "Tienda online completa con carrito de compras",
      price: 2000,
      cta: "Quiero mi tienda",
      featured: true,
      features: [
        "Pasarelas de Pago",
        "Catálogo de productos",
        "Procesamiento de pagos",
        "Gestión de inventario",
        "Seguridad SSL",
        "Soporte técnico",
        "Capacitación",
      ],
    },
    {
      title: "Custom Software",
      description: "Soluciones personalizadas para tu negocio",
      cta: "Cotizar Proyecto",
      features: [
        "Desarrollo personalizado",
        "Arquitectura Cloud",
        "Consultoría técnica",
        "Soporte post-lanzamiento",
        "Arquitectura escalable",
      ],
    },
  ],
  OTHER: [
    {
      title: "Landing Page",
      description: "Sitio web profesional optimizado para conversiones",
      price: 600,
      cta: "Quiero mi página web profesional",
      features: [
        "Diseño responsivo",
        "Optimización SEO",
        "Seguridad SSL",
        "Hosting incluido (primer año)",
        "Integración WhatsApp",
      ],
    },
    {
      title: "E-commerce",
      description: "Tienda online completa con carrito de compras",
      price: 2000,
      cta: "Quiero mi tienda",
      featured: true,
      features: [
        "Pasarelas de Pago",
        "Catálogo de productos",
        "Procesamiento de pagos",
        "Gestión de inventario",
        "Seguridad SSL",
        "Soporte técnico",
        "Capacitación",
      ],
    },
    {
      title: "Custom Software",
      description: "Soluciones personalizadas para tu negocio",
      cta: "Cotizar Proyecto",
      features: [
        "Desarrollo personalizado",
        "Arquitectura Cloud",
        "Consultoría técnica",
        "Soporte post-lanzamiento",
        "Arquitectura escalable",
      ],
    },
  ],
}

export function getPricingByCountry(country: Country): PricingPlan[] {
  return PRICING[country] || PRICING.MX
}