"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import Logo from "@/components/logo"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleNavClick = (id: string) => {
    setIsMenuOpen(false)

    // If we're on the homepage, scroll to the section
    if (window.location.pathname === "/" || window.location.pathname === "") {
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    } else {
      // If we're on another page, navigate to homepage with hash
      window.location.href = `/#${id}`
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black py-3 shadow-lg" : "bg-transparent py-5 md:py-8"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {[
              { name: "Home", id: "home" },
              { name: "About", id: "about" },
              { name: "Services", id: "services" },
              { name: "Portfolio", id: "portfolio" },
              { name: "Blog", id: "blog" },
              { name: "Contact", id: "contact" },
            ].map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.id)}
                className="text-white hover:text-gold transition-colors duration-300 font-medium"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white focus:outline-none" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-6 w-6 text-gold" /> : <Menu className="h-6 w-6 text-gold" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-black border-t border-gray-800 py-4">
          <nav className="container mx-auto px-4 flex flex-col space-y-4">
            {[
              { name: "Home", id: "home" },
              { name: "About", id: "about" },
              { name: "Services", id: "services" },
              { name: "Portfolio", id: "portfolio" },
              { name: "Blog", id: "blog" },
              { name: "Contact", id: "contact" },
            ].map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.id)}
                className="text-white hover:text-gold py-2 transition-colors duration-300 font-medium text-left"
              >
                {item.name}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
