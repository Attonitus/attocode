"use client"

import { useLocation, type Country } from "@/lib/location-context"
import { ChevronDown } from "lucide-react"
import { useState } from "react"

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

export function LocationSelector() {
    const { setCountry, country } = useLocation()
    const [isOpen, setIsOpen] = useState(false)

    const currentRegion = REGIONS.find((r) => r.value === country)

    return (
        <div className="relative flex justify-center items-center gap-4">
            Seleccione su país aquí:    
            <button
                aria-label="Selecciona tu país para mostrar precios en tu divisa"
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-4 py-2 border border-white/20 rounded-lg hover:border-white/40 transition text-sm"
            >
                <span>{currentRegion?.flag}</span>
                <span>{currentRegion?.label}</span>
                <ChevronDown className="w-4 h-4" />
            </button>

            {isOpen && (
                <div className="absolute top-full mt-2 right-0 bg-black border border-white/20 rounded-lg overflow-hidden z-40 min-w-48">
                    {REGIONS.map((region) => (
                        <button
                            key={region.value}
                            onClick={() => {
                                setCountry(region.value)
                                setIsOpen(false)
                            }}
                            className={`w-full px-4 py-3 text-left flex items-center gap-3 transition ${country === region.value
                                ? "bg-white/10 border-l-2 border-white"
                                : "hover:bg-white/5"
                                }`}
                        >
                            <span>{region.flag}</span>
                            <span>{region.label}</span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
}
