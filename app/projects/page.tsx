import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

// This ensures the projects page is included in the static export
export function generateStaticParams() {
  return []
}

export default function ProjectsPage() {
  // Use the basePath from next.config.mjs
  const basePath = '/zylo-global';
  const projects = [
    {
      id: "luxury-fashion-brand",
      title: "Luxury Fashion Brand Campaign",
      category: "Campaigns",
      image: "/placeholder.svg?height=600&width=800",
      description:
        "A comprehensive social media campaign for a luxury fashion brand that increased engagement by 250%.",
    },
    {
      id: "tech-startup-strategy",
      title: "Tech Startup Social Strategy",
      category: "Strategy",
      image: "/placeholder.svg?height=600&width=800",
      description: "Complete social media strategy overhaul for a tech startup that led to 300% growth in followers.",
    },
    {
      id: "food-beverage-content",
      title: "Food & Beverage Content Series",
      category: "Content",
      image: "/placeholder.svg?height=600&width=800",
      description: "Creative content series for a food & beverage brand that generated 1.2M impressions.",
    },
    {
      id: "financial-services-rebrand",
      title: "Financial Services Rebrand",
      category: "Branding",
      image: "/placeholder.svg?height=600&width=800",
      description:
        "Complete social media rebrand for a financial services company that modernized their digital presence.",
    },
    {
      id: "travel-industry-campaign",
      title: "Travel Industry Campaign",
      category: "Campaigns",
      image: "/placeholder.svg?height=600&width=800",
      description: "Multi-platform campaign for a travel company that increased bookings by 45%.",
    },
    {
      id: "healthcare-brand-strategy",
      title: "Healthcare Brand Strategy",
      category: "Strategy",
      image: "/placeholder.svg?height=600&width=800",
      description:
        "Strategic social media approach for a healthcare provider that built trust and community engagement.",
    },
    {
      id: "retail-holiday-campaign",
      title: "Retail Holiday Campaign",
      category: "Campaigns",
      image: "/placeholder.svg?height=600&width=800",
      description: "Seasonal campaign for a retail chain that drove a 60% increase in holiday sales.",
    },
    {
      id: "automotive-content-series",
      title: "Automotive Content Series",
      category: "Content",
      image: "/placeholder.svg?height=600&width=800",
      description: "Engaging content series for an automotive brand that showcased new vehicle features.",
    },
    {
      id: "hospitality-brand-refresh",
      title: "Hospitality Brand Refresh",
      category: "Branding",
      image: "/placeholder.svg?height=600&width=800",
      description: "Social media brand refresh for a hotel chain that modernized their digital presence.",
    },
  ]

  return (
    <div className="bg-black min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center mb-12">
          <Link href={`${basePath}/#portfolio`}>
            <Button variant="outline" className="border-gold text-gold hover:bg-gold hover:text-black">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>

        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-8">
          Our <span className="gold-gradient">Portfolio</span>
        </h1>

        <p className="text-gray-300 max-w-3xl mb-12">
          Explore our complete collection of successful projects that have helped brands achieve remarkable growth and
          engagement across social platforms.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
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
                  <p className="text-gray-300 mb-4 text-sm">{project.description}</p>
                  <Link href={`${basePath}/projects/${project.id}/`}>
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
      </div>
    </div>
  )
}
