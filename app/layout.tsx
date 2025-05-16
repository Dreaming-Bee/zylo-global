import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Zylo Global | Premium Social Media Marketing Agency",
  description:
    "Elevate your brand with Zylo Global's premium social media marketing services. We specialize in content creation, paid advertising, strategy, and analytics.",
  openGraph: {
    title: "Zylo Global | Premium Social Media Marketing Agency",
    description: "Elevate your brand with Zylo Global's premium social media marketing services.",
    type: "website",
    locale: "en_US",
    url: "https://zyloglobal.com",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${playfair.variable} ${inter.variable} font-sans bg-black text-white min-h-screen flex flex-col`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
