"use client"

import { Check } from "lucide-react"
import { useLocation } from "@/lib/location-context"
import { getPricingByCountry } from "@/lib/pricing-data"
import { LocationSelector } from "./LocationSelector"
import Link from "next/link"

export default function Pricing() {
    const { currencySymbol, country, currency } = useLocation()
    const plans = getPricingByCountry(country || "EU")

    return (
        <section id="precios" className="py-20 px-6 bg-black">
            <div className="max-w-7xl mx-auto space-y-16">
                {/* Section Title with Location Selector */}
                <div className="space-y-4">
                    <div className="flex justify-between items-start md:items-center gap-4 flex-col md:flex-row">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-black tracking-tight">Planes y Servicios</h2>
                            <p className="text-white/60 max-w-2xl mt-2">Soluciones adaptadas a tu presupuesto y necesidades</p>
                        </div>
                        <LocationSelector />
                    </div>
                </div>

                <p className="sr-only">
                    Servicios de desarrollo web: landing pages, tiendas online y software a medida.
                </p>

                {/* Pricing Cards */}
                <div className="grid md:grid-cols-3 gap-8">
                    {plans.map((plan) => (
                        <div
                            key={plan.title}
                            className={`p-8 rounded-lg border transition ${plan.featured ? "border-white bg-white/5" : "border-white/20 bg-white/2 hover:border-white/40"
                                }`}
                        >
                            {plan.featured && (
                                <div className="inline-block px-3 py-1 bg-white/10 text-xs font-semibold mb-4 rounded-full">
                                    Popular
                                </div>
                            )}

                            <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
                            <p className="text-white/60 text-sm mb-6">{plan.description}</p>

                            {plan.price && <div className="text-3xl font-black mb-6">{currencySymbol}{plan.price.toLocaleString()} {currency}</div>}

                            <Link
                                href={`https://wa.me/5218716143589?text=Hola!%20quiero%20información%20sobre%20desarrollo%20web%20y%20una%20cotización`}
                                className={`block w-full py-3 px-4 mb-8 font-semibold text-center transition ${plan.featured
                                    ? "bg-white text-black hover:bg-white/90"
                                    : "border border-white/40 hover:border-white hover:bg-white/5"
                                    }`}
                            >
                                {plan.cta}
                            </Link>

                            <div className="space-y-4">
                                {plan.features.map((feature) => (
                                    <div key={feature} className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-white/60 flex-shrink-0 mt-0.5" />
                                        <span className="text-sm text-white/80">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}