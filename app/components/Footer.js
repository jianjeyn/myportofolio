"use client"

import Link from "next/link"
import { Linkedin, Instagram, Github } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t-2 border-foreground bg-background">
      <div className="max-w-6xl mx-auto px-4 py-8 md:py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Left - Name & Year */}
          <div className="flex items-center gap-8">
            <h3 className="text-xl font-black flex items-center gap-2">
              <span className="text-2xl">✦</span> Jihan Aqilah
            </h3>
            <p className="text-sm text-muted-foreground">
              Portfolio {new Date().getFullYear()}
            </p>
          </div>

          {/* Right - Social Media */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/jianaqilah"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition group"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 group-hover:scale-110 transition" />
            </a>
            <a
              href="https://www.linkedin.com/in/jihan-aqilah-hartono/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition group"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 group-hover:scale-110 transition" />
            </a>
            <a
              href="https://github.com/jianjeyn"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition group"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 group-hover:scale-110 transition" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}