"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

const BlogSection = () => {
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

  const blogPosts = [
    {
      title: "7 Social Media Trends Dominating 2025",
      excerpt:
        "Explore the latest trends shaping the social media landscape and how brands can leverage them for growth.",
      date: "May 10, 2025",
      image: "/placeholder.svg?height=400&width=600",
      category: "Trends",
      slug: "social-media-trends-2025",
    },
    {
      title: "The Art of Creating Viral Content",
      excerpt:
        "Discover the science and strategy behind content that captures attention and drives massive engagement.",
      date: "April 28, 2025",
      image: "/placeholder.svg?height=400&width=600",
      category: "Content Strategy",
      slug: "art-of-viral-content",
    },
    {
      title: "Measuring ROI in Social Media Marketing",
      excerpt: "Learn how to effectively track and analyze the return on investment for your social media campaigns.",
      date: "April 15, 2025",
      image: "/placeholder.svg?height=400&width=600",
      category: "Analytics",
      slug: "measuring-social-media-roi",
    },
  ]

  return (
    <section
      id="blog"
      ref={sectionRef}
      className="py-20 md:py-32 bg-black opacity-0 translate-y-10 transition-all duration-1000 ease-out"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Latest from our <span className="gold-gradient">Blog</span>
          </h2>
          <p className="text-gray-300">
            Stay updated with the latest insights, trends, and strategies in social media marketing from our expert
            team.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg overflow-hidden group transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,215,0,0.3)]"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-gold text-black text-xs font-bold uppercase tracking-wider py-1 px-2 rounded">
                  {post.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-gray-400 text-sm mb-4">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{post.date}</span>
                </div>
                <h3 className="text-xl font-serif font-bold mb-3 group-hover:text-gold transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-gray-400 mb-6">{post.excerpt}</p>
                <Link
                  href={`#blog`}
                  className="inline-flex items-center text-gold hover:text-gold-light transition-colors duration-300"
                >
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link href="#blog">
            <Button className="bg-transparent hover:bg-transparent text-gold hover:text-gold-light border-2 border-gold hover:border-gold-light px-8 py-6 text-lg">
              View All Articles
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default BlogSection
