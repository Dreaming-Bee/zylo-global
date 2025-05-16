"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const PortfolioSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [activeFilter, setActiveFilter] = useState("All")

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

  const filters = ["All", "Branding", "Campaigns", "Strategy", "Content"]

  const projects = [
    {
      id: "luxury-fashion-brand",
      title: "Luxury Fashion Brand Campaign",
      category: "Campaigns",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: "tech-startup-strategy",
      title: "Tech Startup Social Strategy",
      category: "Strategy",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: "food-beverage-content",
      title: "Food & Beverage Content Series",
      category: "Content",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: "financial-services-rebrand",
      title: "Financial Services Rebrand",
      category: "Branding",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: "travel-industry-campaign",
      title: "Travel Industry Campaign",
      category: "Campaigns",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: "healthcare-brand-strategy",
      title: "Healthcare Brand Strategy",
      category: "Strategy",
      image: "/placeholder.svg?height=600&width=800",
    },
  ]

  const filteredProjects =
    activeFilter === "All" ? projects : projects.filter((project) => project.category === activeFilter)

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="py-20 md:py-32 bg-gradient-to-b from-black to-gray-900 opacity-0 translate-y-10 transition-all duration-1000 ease-out"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Our <span className="gold-gradient">Portfolio</span>
          </h2>
          <p className="text-gray-300">
            Explore our collection of successful projects that have helped brands achieve remarkable growth and
            engagement across social platforms.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"}
              onClick={() => setActiveFilter(filter)}
              className={
                activeFilter === filter
                  ? "bg-gold text-black hover:bg-gold-light"
                  : "border-gold text-gold hover:bg-transparent hover:text-gold-light"
              }
            >
              {filter}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group relative overflow-hidden rounded-lg">
              <div className="aspect-[4/3] relative">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 group-hover:bg-opacity-60"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-gold text-sm uppercase tracking-wider mb-2">{project.category}</span>
                  <h3 className="text-xl font-serif font-bold text-white mb-4">{project.title}</h3>
                  <Link href={`/projects/${project.id}`}>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-gold text-gold hover:bg-gold hover:text-black w-fit"
                    >
                      View Project
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link href="/projects">
            <Button className="bg-transparent hover:bg-transparent text-gold hover:text-gold-light border-2 border-gold hover:border-gold-light px-8 py-6 text-lg">
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default PortfolioSection
