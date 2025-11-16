"use client"

import Link from "next/link"
import Image from "next/image"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { ArrowLeft } from "lucide-react"
import { useState } from "react"

export default function MyJourney() {
  const [selectedNote, setSelectedNote] = useState(null)

  const journeyItems = [
    {
      id: 1,
      title: "President English Club",
      year: "2019",
      category: "Leadership",
      position: { top: "20%", left: "20%" },
      rotation: "-3deg",
      textOffset: { x: "16%", y: "5%" },
      description: "Memimpin klub debat dan meningkatkan partisipasi siswa dalam kompetisi bahasa Inggris",
      details: "Mengembangkan English Club dari 15 menjadi 50+ anggota aktif",
    },
    {
      id: 2,
      title: "Runner-up Lomba Kuis Bahasa Jerman",
      year: "2021",
      category: "Achievement",
      position: { top: "20%", left: "50%" },
      rotation: "2deg",
      textOffset: { x: "16%", y: "8%" },
      description: "Menunjukkan passion pada pembelajaran bahasa",
      details: "Kompetisi tingkat regional bahasa Jerman",
    },
    {
      id: 3,
      title: "Volunteer Sahabat DIA Batch 8",
      year: "2022",
      category: "Community",
      position: { top: "20%", left: "80%" },
      rotation: "-2deg",
      textOffset: { x: "14%", y: "6%" },
      description: "International Event Organizer - 'Culture N Chill'",
      details: "Mengorganisir event dengan 20+ negara",
    },
    {
      id: 4,
      title: "Youth Climate Volunteer",
      year: "2023",
      category: "Impact",
      position: { top: "40%", left: "20%" },
      rotation: "3deg",
      textOffset: { x: "16%", y: "7%" },
      description: "Netzwerk Klima - Thailand",
      details: "Climate camp dengan 150+ youth dari 10 negara",
    },
    {
      id: 5,
      title: "Academic Visit Volunteer",
      year: "2023",
      category: "International",
      position: { top: "35%", left: "50%" },
      rotation: "-4deg",
      textOffset: { x: "16%", y: "5%" },
      description: "USIM to UPI",
      details: "Memfasilitasi visitasi akademik internasional",
    },
    {
      id: 6,
      title: "PKM-RSH Grant Winner",
      year: "2024",
      category: "Innovation",
      position: { top: "38%", left: "78%" },
      rotation: "2deg",
      textOffset: { x: "14%", y: "6%" },
      description: "EcoSCha - Web-Based Card Game",
      details: "Platform gamified untuk environmental education",
    },
    {
      id: 7,
      title: "UNESCO WIDE 2025",
      year: "2025",
      category: "Certification",
      position: { top: "55%", left: "62%" },
      rotation: "-3deg",
      textOffset: { x: "16%", y: "8%" },
      description: "Women in Digital Entrepreneurship",
      details: "Program pemberdayaan digital untuk women founders",
    },
  ]

  return (
    <>
      <main className="min-h-screen bg-background">
        <Header />

        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-4 py-4">
          <Link href="/" className="inline-flex items-center gap-2 text-foreground font-bold mb-6 hover:text-accent transition">
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>

          <div className="space-y-8 md:space-y-12">
            {/* Header */}
            <div className="flex items-center gap-3 md:gap-4">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-black">My Journey</h1>
              <Image
                src="/assets/el2.png"
                alt="Decoration"
                width={60}
                height={60}
                className="object-contain star-decoration w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20"
              />
            </div>
          </div>

          {/* Roadmap Board */}
          <div className="relative w-full min-h-[1200px] -mb-45 -mt-40">
            {/* Background Green Board - Rotated */}
            <div className="absolute inset-0 transform rotate-1">
              <Image
                src="/assets/bggreen.png"
                alt="Green Board Background"
                fill
                className="object-cover rounded-2xl"
                priority
              />
            </div>

            {/* Notes positioned on board */}
            <div className="relative w-full h-full min-h-[1200px]">
              {/* SATU LINE ASSET BESAR - Adjustable */}
              <div
                className="absolute"
                style={{
                  top: "20%",
                  left: "15%",
                  width: "70%",
                  height: "60%",
                  transform: "rotate(0deg)",
                  zIndex: 7,
                }}
              >
                <Image
                  src="/assets/line.png"
                  alt="Journey Connection Line"
                  fill
                  className="object-contain opacity-70"
                />
              </div>

              {/* Sticky Notes - z-index 10 */}
              {journeyItems.map((item) => (
                <div
                  key={item.id}
                  className="absolute group"
                  style={{
                    top: item.position.top,
                    left: item.position.left,
                    transform: `rotate(${item.rotation}) translateX(-50%)`,
                    zIndex: 10,
                  }}
                >
                  {/* Sticky Note - Hitbox sesuai dengan ukuran note */}
                  <div 
                    className="relative w-72 h-72 cursor-pointer"
                    onClick={() => setSelectedNote(selectedNote === item.id ? null : item.id)}
                  >
                    <Image
                      src="/assets/stnotes.png"
                      alt="Sticky Note"
                      fill
                      className={`object-contain transition-all duration-300 ${
                        selectedNote === item.id ? "scale-110" : "group-hover:scale-105"
                      }`}
                    />
                    
                    {/* Content with custom offset position */}
                    <div 
                      className="absolute flex flex-col justify-center"
                      style={{
                        top: item.textOffset.y,
                        left: item.textOffset.x,
                        right: item.textOffset.x,
                        bottom: item.textOffset.y,
                        padding: '1rem',
                      }}
                    >
                      <span className="text-xs font-bold text-accent mb-1">{item.year}</span>
                      <h3 className="text-sm font-black mb-1.5 leading-tight line-clamp-2">{item.title}</h3>
                      <span className="text-[9px] bg-foreground/10 px-1.5 py-0.5 rounded-full w-fit mb-1.5">
                        {item.category}
                      </span>
                      <p className="text-[9px] text-muted-foreground leading-tight line-clamp-3">
                        {item.description}
                      </p>

                      {selectedNote === item.id && (
                        <div className="mt-1.5 pt-1.5 border-t border-foreground/20">
                          <p className="text-[8px] text-foreground/80 leading-tight">{item.details}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}