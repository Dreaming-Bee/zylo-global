"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

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
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-4">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-gray-900 z-0"></div>

      {/* Content */}
      <div
        ref={sectionRef}
        className="container mx-auto text-center z-10 opacity-0 translate-y-10 transition-all duration-1000 ease-out"
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
          <Button size="lg" className="bg-gold hover:bg-gold-light text-black font-medium px-8 py-6 text-lg glow">
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="border-gold text-gold hover:bg-transparent hover:text-gold-light border-2 px-8 py-6 text-lg transition-all duration-300"
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
          <p className="text-sm uppercase tracking-widest text-gray-400 mb-6">Trusted by leading brands</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {["Nike", "Apple", "Google", "Amazon", "Microsoft"].map((brand) => (
              <div key={brand} className="text-gray-500 font-serif text-xl md:text-2xl">
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
