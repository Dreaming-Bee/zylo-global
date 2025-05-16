"use client"

import { useEffect, useRef } from "react"
import { PenTool, TrendingUp, BarChart3, Lightbulb, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const ServicesSection = () => {
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

  const services = [
    {
      icon: <PenTool className="h-10 w-10 text-gold" />,
      title: "Content Creation",
      description: "Engaging, brand-aligned content that resonates with your audience across all social platforms.",
      link: "#contact",
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-gold" />,
      title: "Paid Advertising",
      description: "Strategic ad campaigns that maximize ROI and drive conversions through precise targeting.",
      link: "#contact",
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-gold" />,
      title: "Strategy Development",
      description: "Comprehensive social media strategies tailored to your business goals and target audience.",
      link: "#contact",
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-gold" />,
      title: "Analytics & Reporting",
      description:
        "In-depth performance analysis and actionable insights to continuously optimize your social presence.",
      link: "#contact",
    },
  ]

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-20 md:py-32 bg-black opacity-0 translate-y-10 transition-all duration-1000 ease-out"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Our Premium <span className="gold-gradient">Services</span>
          </h2>
          <p className="text-gray-300">
            We offer a comprehensive suite of social media marketing services designed to elevate your brand and drive
            meaningful engagement with your audience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-gray-900 rounded-lg p-8 transition-all duration-300 hover:bg-gray-800 border border-gray-800 hover:border-gold"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-serif font-bold mb-4 text-white group-hover:text-gold transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-400 mb-6">{service.description}</p>
              <Link href={service.link}>
                <Button
                  variant="link"
                  className="p-0 text-gold hover:text-gold-light group-hover:underline transition-all duration-300 flex items-center"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link href="#contact">
            <Button className="bg-gold hover:bg-gold-light text-black font-medium px-8 py-6 text-lg glow">
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
