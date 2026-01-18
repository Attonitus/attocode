"use client"

import { useState, useEffect } from "react"
import { useLocation, type Country } from "@/lib/location-context"

const REGIONS: { label: string; value: Country; flag: string }[] = [
    { label: "México", value: "MX", flag: "🇲🇽" },
    { label: "Perú", value: "PE", flag: "pe" },
    { label: "Colombia", value: "CO", flag: "co" },
    { label: "Argentina", value: "AR", flag: "ar" },
    { label: "Ecuador", value: "EC", flag: "ec" },
    { label: "Chile", value: "CL", flag: "cl" },
    { label: "Estados Unidos", value: "US", flag: "🇺🇸" },
    { label: "Europa", value: "EU", flag: "🇪🇺" },
    { label: "Otro", value: "OTHER", flag: "🌍" },
]
export function LocationModal() {
    const { setCountry, country } = useLocation()
    const [isOpen, setIsOpen] = useState(false)
    const [hasSelection, setHasSelection] = useState(false)

    useEffect(() => {
        // Show modal if no country selected yet
        if (!country) {
            setIsOpen(true)
        }
    }, [country])

    const handleSelect = (selectedCountry: Country) => {
        setCountry(selectedCountry)
        setIsOpen(false)
    }

    if (!isOpen) {
        return null
    }

    return (
        <div className="fixed z-100 inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 py-6">
            <div className="bg-black border border-white/20 rounded-lg p-8 max-w-md w-full max-h-[90vh] overflow-y-auto ">
                <span className="text-2xl font-bold mb-6">¿De dónde nos visitas?</span>

                <p className="text-white/60 mb-6">Selecciona tu ubicación para ver los precios en tu moneda local:</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {REGIONS.map((region) => (
                        <button
                            key={region.value}
                            onClick={() => handleSelect(region.value)}
                            aria-label={`Seleccionar región ${region.label} para cambiar precios`}
                            className="w-full p-4 border border-white/20 rounded-lg transition
                 hover:border-white hover:bg-white/5
                 flex flex-col sm:flex-row items-center sm:items-start
                 gap-2 sm:gap-3"
                        >
                            <span className="text-sm shrink-0">{region.flag}</span>
                            <span className="font-semibold text-center sm:text-left leading-tight">
                                {region.label}
                            </span>
                        </button>
                    ))}
                </div>

                <p className="text-white/80 text-xs mt-6 text-center">
                    Puedes cambiar esto en cualquier momento en la página
                </p>
            </div>
        </div>
    )
}