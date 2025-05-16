import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ServicesSection from "@/components/services-section"
import PortfolioSection from "@/components/portfolio-section"
import TestimonialsSection from "@/components/testimonials-section"
import BlogSection from "@/components/blog-section"
import ContactSection from "@/components/contact-section"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <TestimonialsSection />
      <BlogSection />
      <ContactSection />
    </div>
  )
}
