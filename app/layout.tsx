import type { Metadata, Viewport } from "next"
import { Inter, Fraunces, JetBrains_Mono } from "next/font/google"
import { Toaster } from "@/components/ui/sonner"
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
    <html lang="en" className={`${inter.variable} ${fraunces.variable} ${jetbrains.variable}`}>
      {/* ✨ UPDATED: Added min-h-screen, text-foreground, and relative positioning */}
      <body className="font-sans antialiased bg-background text-foreground min-h-screen relative z-0">
        
        {/* ✨ ADDED: The Global Ambient Background (Applies to EVERY page!) */}
        <div className="fixed inset-0 bg-ore opacity-40 pointer-events-none -z-10" />
        <div className="fixed inset-0 bg-grid opacity-20 pointer-events-none -z-10" />
        
        {children}
        
        <Toaster position="top-right" richColors closeButton />
      </body>
    </html>
  )
}