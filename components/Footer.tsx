import { Mail, MessageCircle, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Footer() {
    return (
        <footer className="bg-black border-t border-white/10 py-16 px-6">
            <div className="max-w-7xl mx-auto space-y-12">
                {/* Main Content */}
                <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-4">
                        <Image
                            width={150}
                            height={150}
                            src={`/atto_code.svg`}
                            alt="Logo de Atto Code: Desarrollador Web"
                        />
                        <p className="text-white/60 max-w-sm">
                            Desarrollador web especializado en landing pages, e-commerce, SaaS y software a medida con Next.js.
                        </p>
                    </div>

                    {/* Contact Links */}
                    <div className="space-y-4">
                        <h4 className="font-semibold">Contacto</h4>
                        <div className="space-y-3">
                            <Link aria-label="Ponte en contacto en mi whatsapp" href="https://wa.me/5218716143589?text=Hola!%20quiero%20información%20sobre%20desarrollo%20web%20y%20una%20cotización" className="flex items-center gap-3 text-white/60 hover:text-white transition">
                                <MessageCircle size={20} />
                                <span>WhatsApp</span>
                            </Link>
                            <Link
                                aria-label="Ponte en contacto en mi correo electronico"
                                href="mailto:attocode.lat@gmail.com"
                                className="flex items-center gap-3 text-white/60 hover:text-white transition"
                            >
                                <Mail size={20} />
                                <span>Email</span>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Social Links */}
                <div className="border-t border-white/10 pt-8">
                    <div className="flex items-center gap-6">
                        <p className="text-white/60 text-sm">Síguenos:</p>
                        <div className="flex gap-4">
                            <Link aria-label="Ver perfil de Tiktok"
                                href="#" className="text-white/60 hover:text-white transition">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>
                            </Link>
                            <Link aria-label="Ver perfil de GitHub"
                                href="https://github.com/Attonitus" className="text-white/60 hover:text-white transition">
                                <Github size={20} />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-white/10 pt-8">
                    <p className="text-white/40 text-sm">© 2026 AttoCode.</p>
                </div>
            </div>
        </footer>
    )
}