"use client"

import Link from "next/link"
import Header from "../components/Header"

export default function About() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Header/Navigation */}
      <Header />
      {/* Content */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="space-y-12">
          <h1 className="text-5xl font-black">About Me</h1>

          <div className="space-y-6">
            <div className="sketch-box p-8 bg-card">
              <h2 className="text-2xl font-bold mb-4">Who I Am</h2>
              <p className="text-lg leading-relaxed">
                I'm a creative developer and designer passionate about building beautiful and functional digital
                experiences. With a background in both design and development, I bridge the gap between aesthetics and
                functionality.
              </p>
            </div>

            <div className="sketch-box p-8 bg-card">
              <h2 className="text-2xl font-bold mb-4">Skills</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-bold text-accent mb-2">Frontend</h3>
                  <ul className="space-y-1 text-sm">
                    <li>React / Next.js</li>
                    <li>TypeScript</li>
                    <li>Tailwind CSS</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-accent mb-2">Design</h3>
                  <ul className="space-y-1 text-sm">
                    <li>UI/UX Design</li>
                    <li>Figma</li>
                    <li>Web Animation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
