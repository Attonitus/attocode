import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-12">
            {/* Background Grid Effect */}
            <div className="absolute inset-0 opacity-5">
                <svg aria-hidden="true" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-5xl text-center space-y-12">
                {/* Subtitle */}
                <div className="flex items-center justify-center gap-2 text-sm text-white/60 font-mono">
                    <span>//</span>
                    <span>Desarrollador Web | Sitios y Sistemas a Medida</span>
                </div>

                {/* Main Headline */}
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-tight">
                    Desarrollo web a medida para landing pages, e-commerce y SaaS
                </h1>

                <p className="max-w-2xl mx-auto text-lg text-white/70">
                    Desarrollo sitios web rápidos, optimizados para SEO y enfocados en conversión.
                    Trabajo con Next.js y React para crear landing pages, e-commerce y sistemas SaaS a medida.
                </p>

                {/* CTA Button */}
                <Link aria-label="Ver soluciones" href="#precios" className="inline-block px-8 py-4 bg-white text-black font-semibold hover:bg-white/90 transition duration-200 text-lg">
                    Ver Soluciones →
                </Link>

                {/* Scroll Indicator */}
                <div className="pt-8 flex flex-col items-center gap-4">
                    <p className="text-sm text-white/60 font-mono">Desliza para explorar</p>
                    <svg aria-hidden="true" className="w-6 h-6 text-white/40 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </div>
            </div>
        </section>
    )
}