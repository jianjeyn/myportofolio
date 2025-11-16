"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { translations } from "../i18n/translations"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Header({ language, setLanguage }) {
  const pathname = usePathname()
  const t = translations[language].nav
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerOffset = 100
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  const handleSectionClick = (e, sectionId) => {
    if (pathname === '/') {
      e.preventDefault()
      scrollToSection(sectionId)
    }
    setIsMobileMenuOpen(false)
  }

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="border-b-4 border-foreground sticky top-0 z-50 relative">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/header1.png"
          alt="Header background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:block relative z-10 max-w-6xl mx-auto px-4 py-6">
        <div className="flex justify-center items-center gap-4">
          <div className="sketch-box bg-background inline-block">
            <nav className="flex items-center divide-x-3 divide-foreground">
              <div className="px-8 py-4 text-2xl font-black flex items-center gap-2">
                ✦ Jihan Aqilah Hartono
              </div>
              <Link 
                href="/" 
                className="px-8 py-4 text-base font-bold hover:text-accent transition"
              >
                {t.home}
              </Link>
              <Link 
                href="/#about"
                onClick={(e) => handleSectionClick(e, 'about')}
                className="px-8 py-4 text-base font-bold hover:text-accent transition"
              >
                {t.about}
              </Link>
              <Link 
                href="/#journey"
                onClick={(e) => handleSectionClick(e, 'journey')}
                className="px-8 py-4 text-base font-bold hover:text-accent transition"
              >
                {t.journey}
              </Link>
              <Link 
                href="/portfolio" 
                className="px-8 py-4 text-base font-bold hover:text-accent transition"
              >
                {t.portfolio}
              </Link>
            </nav>
          </div>

          {/* Language Switcher - Separate */}
          <div className="sketch-box bg-background inline-block px-4 py-4">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setLanguage('id')}
                className={`px-3 py-1 text-sm font-bold rounded transition ${
                  language === 'id' 
                    ? 'bg-accent text-background' 
                    : 'hover:bg-accent/20'
                }`}
              >
                ID
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 text-sm font-bold rounded transition ${
                  language === 'en' 
                    ? 'bg-accent text-background' 
                    : 'hover:bg-accent/20'
                }`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden relative z-10">
        <div className="flex items-center justify-between px-4 py-4">
          {/* Logo/Name */}
          <div className="sketch-box bg-background px-4 py-3">
            <h1 className="text-lg font-black">✦ Jihan</h1>
          </div>

          {/* Right side: Language + Hamburger */}
          <div className="flex items-center gap-2">
            {/* Language Switcher Mobile */}
            <div className="sketch-box bg-background px-3 py-2">
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => setLanguage('id')}
                  className={`px-2 py-1 text-xs font-bold rounded transition ${
                    language === 'id' 
                      ? 'bg-accent text-background' 
                      : 'hover:bg-accent/20'
                  }`}
                >
                  ID
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-2 py-1 text-xs font-bold rounded transition ${
                    language === 'en' 
                      ? 'bg-accent text-background' 
                      : 'hover:bg-accent/20'
                  }`}
                >
                  EN
                </button>
              </div>
            </div>

            {/* Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="sketch-box bg-background p-3 hover:bg-accent/10 transition"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-background border-b-4 border-foreground shadow-lg">
            <nav className="flex flex-col divide-y-2 divide-foreground">
              <Link 
                href="/" 
                onClick={handleLinkClick}
                className="px-6 py-4 text-base font-bold hover:bg-accent/10 transition active:bg-accent/20"
              >
                {t.home}
              </Link>
              <Link 
                href="/#about"
                onClick={(e) => handleSectionClick(e, 'about')}
                className="px-6 py-4 text-base font-bold hover:bg-accent/10 transition active:bg-accent/20"
              >
                {t.about}
              </Link>
              <Link 
                href="/#journey"
                onClick={(e) => handleSectionClick(e, 'journey')}
                className="px-6 py-4 text-base font-bold hover:bg-accent/10 transition active:bg-accent/20"
              >
                {t.journey}
              </Link>
              <Link 
                href="/portfolio" 
                onClick={handleLinkClick}
                className="px-6 py-4 text-base font-bold hover:bg-accent/10 transition active:bg-accent/20"
              >
                {t.portfolio}
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}