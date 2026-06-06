import type { Metadata, Viewport } from "next"
import { Inter, Fraunces, JetBrains_Mono } from "next/font/google"
import { Toaster } from "@/components/ui/sonner"
import { SiteNav } from "@/components/site-nav" // ✨ 1. Import the Navbar here
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
      <body className="font-sans antialiased bg-background text-foreground min-h-screen relative z-0 flex flex-col">
        
        {/* 1. The High-Tech Grid & Copper Ore Background */}
        <div className="fixed inset-0 bg-ore opacity-40 pointer-events-none -z-20" />
        <div className="fixed inset-0 bg-grid opacity-20 pointer-events-none -z-20" />
        
        {/* 2. The Ambient Glowing Orbs */}
        <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-32 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute bottom-10 right-0 h-[420px] w-[420px] rounded-full bg-accent/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-[280px] w-[280px] rounded-full bg-primary/5 blur-3xl" />
        </div>
        
        {/* ✨ 2. Place the Navbar outside of {children} so it never unmounts */}
        <SiteNav />

        {/* 3. The Page Content */}
        <div className="flex-1">
          {children}
        </div>
        
        <Toaster position="top-right" richColors closeButton />
      </body>
    </html>
  )
}