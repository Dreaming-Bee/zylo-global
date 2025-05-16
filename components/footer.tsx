import Link from "next/link"
import Logo from "@/components/logo"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    {
      title: "Company",
      links: [
        { label: "About Us", href: "#about" },
        { label: "Services", href: "#services" },
        { label: "Portfolio", href: "#portfolio" },
        { label: "Blog", href: "#blog" },
        { label: "Contact", href: "#contact" },
      ],
    },
    {
      title: "Services",
      links: [
        { label: "Content Creation", href: "#" },
        { label: "Paid Advertising", href: "#" },
        { label: "Strategy Development", href: "#" },
        { label: "Analytics & Reporting", href: "#" },
        { label: "Brand Development", href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Case Studies", href: "#" },
        { label: "Blog Articles", href: "#" },
        { label: "Guides & Ebooks", href: "#" },
        { label: "Webinars", href: "#" },
        { label: "FAQ", href: "#" },
      ],
    },
  ]

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-4 text-gray-400 max-w-md">
              Zylo Global is a premium social media marketing agency dedicated to helping brands achieve exceptional
              growth through strategic, data-driven approaches.
            </p>
            <div className="mt-6">
              <h4 className="text-white font-medium mb-3">Subscribe to our newsletter</h4>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="bg-gray-900 border-gray-800 focus:border-gold"
                />
                <Button className="bg-gold hover:bg-gold-light text-black">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {footerLinks.map((column, idx) => (
            <div key={idx}>
              <h4 className="text-white font-serif font-bold text-lg mb-4">{column.title}</h4>
              <ul className="space-y-3">
                {column.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <Link href={link.href} className="text-gray-400 hover:text-gold transition-colors duration-300">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">&copy; {currentYear} Zylo Global. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex gap-6">
            <Link href="#" className="text-gray-500 hover:text-gold text-sm transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-500 hover:text-gold text-sm transition-colors duration-300">
              Terms of Service
            </Link>
            <Link href="#" className="text-gray-500 hover:text-gold text-sm transition-colors duration-300">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
