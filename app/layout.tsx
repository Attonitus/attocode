import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google"
import { LocationProvider } from "@/lib/location-context";

import "./globals.css";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["400", "600", "700"] })

export const metadata: Metadata = {
  title: {
    default: "AttoCode | Desarrollo Web Profesional",
    template: "%s | AttoCode",
  },
  description:
    "AttoCode es un desarrollador web especializado en landing pages, e-commerce, SaaS y software a medida para negocios que buscan crecer online.",
  keywords: [
    "desarrollo web",
    "landing page",
    "ecommerce",
    "software a medida",
    "desarrollador web",
    "Next.js",
    "SaaS",
    "full stack"
  ],
  authors: [{ name: "AttoCode" }],
  creator: "AttoCode",
  metadataBase: new URL("https://attocode.lat"),
  openGraph: {
    title: "AttoCode | Desarrollo Web Profesional",
    description:
      "Creamos landing pages, e-commerce, saas y software a medida enfocados en conversión y crecimiento digital.",
    url: "https://attocode.lat",
    siteName: "AttoCode",
    images: [
      {
        url: "/atto_code.webp",
        width: 1200,
        height: 630,
        alt: "AttoCode - Desarrollo Web",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AttoCode | Desarrollo Web Profesional",
    description:
      "Landing pages, e-commerce y software a medida enfocados en resultados.",
    images: ["/atto_code.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  icons: {
    icon: "/atto_code.svg",
    apple: "/atto_code.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${spaceGrotesk.className} antialiased`}
      >

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Jesús Valenzuela",
              alternateName: "AttoCode",
              url: "https://attocode.lat",
              logo: "https://attocode.lat/atto_code.svg",
              description:
                "Desarrollador web especializado en landing pages, e-commerce, saas y software a medida.",
              worksFor: {
                "@type": "Organization",
                name: "Autónomo",
              },
              sameAs: [
                "https://www.tiktok.com/@attocode",
              ],
            }),
          }}
        />
        <LocationProvider>
          {children}
        </LocationProvider>
      </body>
    </html>
  );
}
