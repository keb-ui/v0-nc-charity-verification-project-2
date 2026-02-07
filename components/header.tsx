"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Shield } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="absolute top-0 left-0 right-0 z-50 p-6">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Link href="/" className="flex items-center gap-2 text-white">
          <Shield className="w-6 h-6" />
          <span className="text-sm font-semibold tracking-wide">NC Charity Verification</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/about"
            className="text-white/90 hover:text-white transition-colors duration-300 text-sm font-medium"
          >
            About
          </Link>
          <Link
            href="/charities"
            className="text-white/90 hover:text-white transition-colors duration-300 text-sm font-medium"
          >
            Verified Charities
          </Link>
          <Link
            href="/resources"
            className="text-white/90 hover:text-white transition-colors duration-300 text-sm font-medium"
          >
            Resources
          </Link>
          <Link
            href="/contact"
            className="text-white/90 hover:text-white transition-colors duration-300 text-sm font-medium"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden absolute top-full left-0 right-0 bg-foreground/95 backdrop-blur-sm p-6 flex flex-col gap-4">
          <Link
            href="/about"
            className="text-white/90 hover:text-white transition-colors duration-300 text-sm font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/charities"
            className="text-white/90 hover:text-white transition-colors duration-300 text-sm font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            Verified Charities
          </Link>
          <Link
            href="/resources"
            className="text-white/90 hover:text-white transition-colors duration-300 text-sm font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            Resources
          </Link>
          <Link
            href="/contact"
            className="text-white/90 hover:text-white transition-colors duration-300 text-sm font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
        </nav>
      )}
    </header>
  )
}
