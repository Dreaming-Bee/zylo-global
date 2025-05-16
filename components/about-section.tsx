"use client"

import { useEffect, useRef, useState } from "react"
import { CheckCircle } from "lucide-react"

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entries[0].target)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const stats = [
    { value: "500+", label: "Clients Worldwide" },
    { value: "98%", label: "Client Retention" },
    { value: "15+", label: "Industry Awards" },
    { value: "250M+", label: "Social Impressions" },
  ]

  const values = [
    "Results-driven strategies",
    "Data-informed decisions",
    "Creative excellence",
    "Transparent communication",
    "Continuous innovation",
  ]

  return (
    <section id="about" ref={sectionRef} className="py-20 md:py-32 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              About <span className="gold-gradient">Zylo Global</span>
            </h2>

            <p className="text-gray-300 mb-6 leading-relaxed">
              Founded in 2015, Zylo Global has established itself as a premier social media marketing agency, helping
              brands transform their digital presence and achieve exceptional growth through strategic, data-driven
              approaches.
            </p>

            <p className="text-gray-300 mb-8 leading-relaxed">
              Our team of industry experts combines creative excellence with analytical precision to deliver campaigns
              that not only capture attention but drive measurable results for our clients across diverse industries.
            </p>

            <div className="space-y-3">
              {values.map((value, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-gold mr-3 flex-shrink-0" />
                  <span className="text-white">{value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`gold-border rounded-lg p-[1px] animate-stats ${`animate-delay-${index + 1}`}`}
              >
                <div className="gold-border-content rounded-lg p-6 text-center">
                  <div className="text-4xl md:text-5xl font-bold text-gold mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
