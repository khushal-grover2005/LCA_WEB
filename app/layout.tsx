import type { Metadata, Viewport } from "next"
import { Inter, Fraunces, JetBrains_Mono } from "next/font/google"
import { Toaster } from "@/components/ui/sonner"
import { SiteNav } from "@/components/site-nav" // ✨ Added import
import { SiteFooter } from "@/components/site-footer" // ✨ Added import
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
})
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
})

export const metadata: Metadata = {
  title: "MetalCycle — LCA Predictor for Metals",
  description:
    "Predict the environmental footprint and circularity of 20 metals across 68 production routes. AI-augmented Life Cycle Assessment with imputation, sankey flows, and dashboards.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon.png",
        href: "/icon.png",
      },
    ],
    apple: "/icon.png",
  },
}

export const viewport: Viewport = {
  themeColor: "#1a1d24",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable} ${jetbrains.variable} bg-background`}>
      {/* ✨ Added flex flex-col to keep footer at bottom */}
      <body className="font-sans antialiased flex min-h-screen flex-col">
        {/* ✨ Global Navbar */}
        <SiteNav /> 
        
        {/* ✨ Main content wrapper */}
        <main className="flex-1">
          {children}
        </main>

        {/* ✨ Global Footer[cite: 1] */}
        <SiteFooter />

        <Toaster position="top-right" richColors closeButton />
      </body>
    </html>
  )
}