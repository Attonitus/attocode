"use client"

import Link from "next/link"

export default function WhatsAppFloat() {
    const phone = "5218716143589"
    const message = "Hola, quiero más información"

    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(
        message
    )}`

    return (
        <Link
            href={whatsappUrl}
            target="_blank"
            aria-label="Contactame por WhatsApp"
            className="fixed bottom-5 right-5 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition"
        >
            {/* Icono WhatsApp (SVG) */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                fill="currentColor"
                className="w-7 h-7"
            >
                <path d="M16 .4C7.4.4.4 7.3.4 15.9c0 2.8.7 5.6 2.2 8L0 32l8.4-2.2c2.3 1.2 4.9 1.9 7.6 1.9 8.6 0 15.6-7 15.6-15.6C31.6 7.3 24.6.4 16 .4zm0 28.7c-2.4 0-4.7-.6-6.7-1.9l-.5-.3-5 1.3 1.3-4.9-.3-.5c-1.4-2.1-2.1-4.5-2.1-7C2.7 8.6 8.7 2.6 16 2.6s13.3 6 13.3 13.3S23.3 29.1 16 29.1z" />
            </svg>
        </Link>
    )
}