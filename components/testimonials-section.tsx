"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

const TestimonialsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

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

  const testimonials = [
    {
      quote:
        "Zylo Global transformed our social media presence completely. Their strategic approach and creative content have driven exceptional engagement and conversion rates for our brand.",
      name: "Kumari Perera",
      title: "Marketing Director, Luxury Retail Brand",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      quote:
        "Working with Zylo has been a game-changer for our startup. Their data-driven strategies helped us establish a strong social media presence from day one, resulting in rapid growth.",
      name: "Dinesh Jayawardena",
      title: "CEO, Tech Startup",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      quote:
        "The team at Zylo Global consistently delivers exceptional results. Their deep understanding of our industry and audience has made them an invaluable partner in our marketing efforts.",
      name: "Priyanka Bandara",
      title: "Brand Manager, Consumer Goods",
      image: "/placeholder.svg?height=200&width=200",
    },
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="py-20 md:py-32 bg-gray-900 opacity-0 translate-y-10 transition-all duration-1000 ease-out"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Client <span className="gold-gradient">Testimonials</span>
          </h2>
          <p className="text-gray-300">
            Hear what our clients have to say about their experience working with Zylo Global and the results we've
            delivered.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute -top-10 left-0 md:-left-10">
            <Quote className="h-20 w-20 text-gold opacity-20" />
          </div>

          <div className="bg-black border border-gray-800 rounded-lg p-8 md:p-12 relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="w-24 h-24 md:w-32 md:h-32 relative rounded-full overflow-hidden border-2 border-gold flex-shrink-0">
                <Image
                  src={testimonials[currentIndex].image || "/placeholder.svg"}
                  alt={testimonials[currentIndex].name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-lg md:text-xl text-gray-300 italic mb-6">"{testimonials[currentIndex].quote}"</p>
                <div>
                  <h4 className="text-xl font-serif font-bold text-gold">{testimonials[currentIndex].name}</h4>
                  <p className="text-gray-400">{testimonials[currentIndex].title}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="border-gold text-gold hover:bg-gold hover:text-black rounded-full h-12 w-12"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="border-gold text-gold hover:bg-gold hover:text-black rounded-full h-12 w-12"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection


