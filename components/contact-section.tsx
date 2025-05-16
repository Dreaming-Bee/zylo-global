"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, Instagram, Twitter, Linkedin, Facebook } from "lucide-react"

const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    console.log(formState)
    alert("Form submitted successfully!")
    setFormState({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
  }

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-gold" />,
      title: "Email Us",
      details: "info@zyloglobal.com",
      link: "mailto:info@zyloglobal.com",
    },
    {
      icon: <Phone className="h-6 w-6 text-gold" />,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: <MapPin className="h-6 w-6 text-gold" />,
      title: "Visit Us",
      details: "123 Madison Avenue, New York, NY 10001",
      link: "https://maps.google.com",
    },
  ]

  const socialLinks = [
    { icon: <Instagram className="h-5 w-5" />, link: "#" },
    { icon: <Twitter className="h-5 w-5" />, link: "#" },
    { icon: <Linkedin className="h-5 w-5" />, link: "#" },
    { icon: <Facebook className="h-5 w-5" />, link: "#" },
  ]

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 md:py-32 bg-gradient-to-b from-gray-900 to-black opacity-0 translate-y-10 transition-all duration-1000 ease-out"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Get in <span className="gold-gradient">Touch</span>
          </h2>
          <p className="text-gray-300">
            Ready to elevate your social media presence? Contact us today to discuss how we can help your brand achieve
            exceptional growth.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="gold-border rounded-lg p-[1px]">
              <div className="gold-border-content rounded-lg p-8">
                <h3 className="text-2xl font-serif font-bold mb-6 text-white">Send Us a Message</h3>
                <form onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="bg-gray-800 border-gray-700 focus:border-gold focus:ring-gold"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Your Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="bg-gray-800 border-gray-700 focus:border-gold focus:ring-gold"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      required
                      className="bg-gray-800 border-gray-700 focus:border-gold focus:ring-gold"
                      placeholder="How can we help you?"
                    />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      className="bg-gray-800 border-gray-700 focus:border-gold focus:ring-gold min-h-[150px]"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  <Button
                    type="submit"
                    className="bg-gold hover:bg-gold-light text-black font-medium px-8 py-6 text-lg w-full md:w-auto glow"
                  >
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </div>
            </div>
          </div>

          <div>
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-gold transition-all duration-300"
                >
                  <div className="flex items-start">
                    <div className="mr-4">{item.icon}</div>
                    <div>
                      <h4 className="text-lg font-medium text-white mb-2">{item.title}</h4>
                      <a href={item.link} className="text-gray-400 hover:text-gold transition-colors duration-300">
                        {item.details}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-medium text-white mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    className="bg-gray-800 hover:bg-gold text-white hover:text-black rounded-full p-3 transition-all duration-300"
                    aria-label="Social media link"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
