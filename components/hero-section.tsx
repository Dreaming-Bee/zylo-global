"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100")
            entry.target.classList.remove("translate-y-10")
          }
        })
      },
      { threshold: 0.1 },
    )

    const section = sectionRef.current
    if (section) {
      observer.observe(section)
    }

    return () => {
      if (section) {
        observer.unobserve(section)
      }
    }
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-4 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Hero background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-70 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-80 z-20"></div>
      </div>
      
      {/* Gold accent elements */}
      {/* <div className="absolute top-0 left-0 w-full h-1 bg-[#D4AF37] z-30"></div> */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1 bg-[#D4AF37] z-30"></div>

      {/* Content */}
      <div
        ref={sectionRef}
        className="container mx-auto text-center z-40 opacity-0 translate-y-10 transition-all duration-1000 ease-out"
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight">
          <span className="block">Elevate Your</span>
          <span className="gold-gradient">Social Media Presence</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
          We craft premium social media strategies that transform brands into industry leaders. Discover the Zylo
          difference.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <Button
            variant="outline"
            size="lg"
            className="bg-gold hover:bg-gold-light text-black font-medium px-8 py-6 text-lg glow"
            onClick={() => {
              const portfolioSection = document.getElementById("portfolio")
              if (portfolioSection) {
                portfolioSection.scrollIntoView({ behavior: "smooth" })
              }
            }}
          >
            Our Portfolio
          </Button>
        </div>

        <div className="mt-16 md:mt-24">
          <p className="text-sm uppercase tracking-widest text-[#D4AF37] mb-6">Trusted by leading brands</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {["Brand 1", "Brand 2", "Brand 3", "Brand 4", "Brand 5"].map((brand) => (
              <div key={brand} className="text-gray-300 font-serif text-xl md:text-2xl border-b border-[#D4AF37]/30">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection


