"use client"

import { createContext, useContext, useState, ReactNode } from "react"

export type Country = "MX" | "US" | "EU" | "AR" | "CO" | "EC" | "PE" | "CL" | "OTHER"

interface LocationContextType {
    country: Country | null
    currency: string
    currencySymbol: string
    setCountry: (country: Country) => void
}

const LocationContext = createContext<LocationContextType | undefined>(undefined)

const PRICING_BY_COUNTRY: Record<Country, { currency: string; symbol: string }> = {
    MX: { currency: "MXN", symbol: "$" },
    PE: { currency: "PEN", symbol: "S.\ " },
    CO: { currency: "COP", symbol: "$" },
    AR: { currency: "ARS", symbol: "$" },
    EC: { currency: "USD", symbol: "$" },
    CL: { currency: "CLP", symbol: "$" },

    US: { currency: "USD", symbol: "$" },
    EU: { currency: "EUR", symbol: "€" },
    OTHER: { currency: "USD", symbol: "$" },
}

export function LocationProvider({ children }: { children: ReactNode }) {
    const [country, setCountry] = useState<Country | null>(null)

    const { currency, symbol } = country ? PRICING_BY_COUNTRY[country] : { currency: "USD", symbol: "$" }

    return (
        <LocationContext.Provider value={{ country, currency, currencySymbol: symbol, setCountry }}>
            {children}
        </LocationContext.Provider>
    )
}

export function useLocation() {
    const context = useContext(LocationContext)
    if (context === undefined) {
        throw new Error("useLocation must be used within LocationProvider")
    }
    return context
}
