"use client"

import Link from "next/link"
import Image from "next/image"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { useState, useEffect, useRef } from "react"
import { Mail, Phone, MapPin, Calendar, Linkedin, Instagram, Github } from "lucide-react"
import { translations } from "./i18n/translations"

export default function Home() {
  const [selectedNote, setSelectedNote] = useState(null)
  const [language, setLanguage] = useState('en')
  const [visibleElements, setVisibleElements] = useState(new Set())
  
  const heroRef = useRef(null)
  const aboutRef = useRef(null)
  const journeyRef = useRef(null)
  const cardRefs = useRef([])
  
  const t = translations[language]

  // Intersection Observer untuk scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements(prev => new Set([...prev, entry.target.dataset.animate]))
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
      }
    )

    // Observe hero section
    if (heroRef.current) {
      heroRef.current.dataset.animate = "hero"
      observer.observe(heroRef.current)
    }

    // Observe about section
    if (aboutRef.current) {
      aboutRef.current.dataset.animate = "about"
      observer.observe(aboutRef.current)
    }

    // Observe journey section
    if (journeyRef.current) {
      journeyRef.current.dataset.animate = "journey"
      observer.observe(journeyRef.current)
    }

    // Observe about cards
    cardRefs.current.forEach((card, index) => {
      if (card) {
        card.dataset.animate = `card-${index}`
        observer.observe(card)
      }
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  const journeyItems = [
    {
      id: 1,
      year: "2019",
      position: { top: "20%", left: "20%" },
      rotation: "-3deg",
      textOffset: { x: "16%", y: "5%" },
    },
    {
      id: 2,
      year: "2021",
      position: { top: "20%", left: "50%" },
      rotation: "2deg",
      textOffset: { x: "16%", y: "8%" },
    },
    {
      id: 3,
      year: "2022",
      position: { top: "20%", left: "80%" },
      rotation: "-2deg",
      textOffset: { x: "14%", y: "6%" },
    },
    {
      id: 4,
      year: "2023",
      position: { top: "40%", left: "20%" },
      rotation: "3deg",
      textOffset: { x: "16%", y: "7%" },
    },
    {
      id: 5,
      year: "2023",
      position: { top: "35%", left: "50%" },
      rotation: "-4deg",
      textOffset: { x: "16%", y: "5%" },
    },
    {
      id: 6,
      year: "2024",
      position: { top: "38%", left: "78%" },
      rotation: "2deg",
      textOffset: { x: "14%", y: "6%" },
    },
    {
      id: 7,
      year: "2025",
      position: { top: "52%", left: "40%" },
      rotation: "-2deg",
      textOffset: { x: "16%", y: "8%" },
    },
    {
      id: 8,
      year: "2025",
      position: { top: "55%", left: "72%" },
      rotation: "-3deg",
      textOffset: { x: "16%", y: "8%" },
    },
  ].map((item, index) => ({
    ...item,
    ...t.journey.items[index]
  }))

  return (
    <>
      <main className="min-h-screen bg-background text-foreground">
        <Header language={language} setLanguage={setLanguage} />

        {/* Hero Section with scroll animation */}
        <section 
          ref={heroRef}
          className={`max-w-6xl mx-auto px-4 py-8 md:py-4 transition-all duration-1000 ease-out ${
            visibleElements.has('hero') 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className={`space-y-8 transition-all duration-1000 ease-out delay-200 ${
              visibleElements.has('hero') 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 -translate-x-8'
            }`}>
              <div className="inline-block star-decoration">
                <Image
                  src="/assets/el1.png"
                  alt="Decoration"
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </div>

              <div>
                <h1 className="text-5xl md:text-6xl font-black leading-tight text-balance">
                  {t.hero.greeting}
                </h1>
              </div>

              <div className="w-64 h-6 bg-secondary rounded-sm"></div>

              <Link href="/portfolio" className="inline-block hover:scale-105 transition-transform">
                <Image
                  src="/assets/seeporto.png"
                  alt={t.hero.cta}
                  width={300}
                  height={80}
                  className="object-contain"
                />
              </Link>
            </div>

            <div className={`flex items-center justify-center relative transition-all duration-1000 ease-out delay-400 ${
              visibleElements.has('hero') 
                ? 'opacity-100 translate-x-0 scale-100' 
                : 'opacity-0 translate-x-8 scale-95'
            }`}>
              <div className="relative w-full max-w-2xl">
                <div className="relative w-full aspect-square">
                  <Image
                    src="/assets/frame2.png"
                    alt="Frame"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Me Section with scroll animation */}
        <section 
          id="about" 
          ref={aboutRef}
          className={`max-w-6xl mx-auto px-4 py-8 md:py-8 transition-all duration-1000 ease-out ${
            visibleElements.has('about') 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="sketch-box p-8 md:p-12 bg-card">
            <div className="space-y-8 md:space-y-12">
              <div className={`flex items-center gap-3 md:gap-4 transition-all duration-700 ease-out delay-200 ${
                visibleElements.has('about') 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-6'
              }`}>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-black">{t.about.title}</h2>
                <Image
                  src="/assets/el2.png"
                  alt="Decoration"
                  width={60}
                  height={60}
                  className="object-contain star-decoration w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Who I Am */}
                <div 
                  ref={el => cardRefs.current[0] = el}
                  className={`sketch-box p-6 md:p-8 bg-background border-2 border-foreground transition-all duration-700 ease-out ${
                    visibleElements.has('card-0') 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: '300ms' }}
                >
                  <h3 className="text-2xl font-bold mb-4">{t.about.whoIAm.title}</h3>
                  <p className="text-base leading-relaxed">{t.about.whoIAm.content}</p>
                </div>

                {/* Contacts */}
                <div 
                  ref={el => cardRefs.current[1] = el}
                  className={`sketch-box p-6 md:p-8 bg-background border-2 border-foreground transition-all duration-700 ease-out ${
                    visibleElements.has('card-1') 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: '400ms' }}
                >
                  <h3 className="text-2xl font-bold mb-4">{t.about.contact.title}</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <Mail className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-semibold">{t.about.contact.email}</p>
                          <a href="mailto:jihanaqilahhartono@gmail.com" className="text-xs text-muted-foreground hover:text-accent transition break-all">
                            jihanaqilahhartono@gmail.com
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Phone className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-semibold">{t.about.contact.phone}</p>
                          <a href="tel:+6281342121691" className="text-xs text-muted-foreground hover:text-accent transition">
                            +62 813 4212 1691
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-semibold">{t.about.contact.location}</p>
                          <p className="text-xs text-muted-foreground">{t.about.contact.locationValue}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Calendar className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-semibold">{t.about.contact.born}</p>
                          <p className="text-xs text-muted-foreground">{t.about.contact.bornValue}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-foreground/10">
                    <p className="text-sm font-semibold mb-2">{t.about.contact.connect}</p>
                    <div className="flex items-center gap-3">
                      <a href="https://www.instagram.com/jianaqilah" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition" aria-label="Instagram">
                        <Instagram className="w-5 h-5" />
                      </a>
                      <a href="https://www.linkedin.com/in/jihan-aqilah-hartono/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition" aria-label="LinkedIn">
                        <Linkedin className="w-5 h-5" />
                      </a>
                      <a href="https://github.com/jianjeyn" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition" aria-label="GitHub">
                        <Github className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Education */}
                <div 
                  ref={el => cardRefs.current[2] = el}
                  className={`sketch-box p-6 md:p-8 bg-background border-2 border-foreground transition-all duration-700 ease-out ${
                    visibleElements.has('card-2') 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: '500ms' }}
                >
                  <h3 className="text-2xl font-bold mb-4">{t.about.education.title}</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="font-bold text-accent">2023 - Present</p>
                      <p className="text-sm">{t.about.education.current}</p>
                      <p className="text-xs text-muted-foreground">{t.about.education.currentSchool}</p>
                    </div>
                    <div>
                      <p className="font-bold text-accent">2021 - 2023</p>
                      <p className="text-sm">{t.about.education.previous}</p>
                      <p className="text-xs text-muted-foreground">{t.about.education.previousSchool}</p>
                    </div>
                  </div>
                </div>

                {/* Programming Languages */}
                <div 
                  ref={el => cardRefs.current[3] = el}
                  className={`sketch-box p-6 md:p-8 bg-background border-2 border-foreground transition-all duration-700 ease-out ${
                    visibleElements.has('card-3') 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: '600ms' }}
                >
                  <h3 className="text-2xl font-bold mb-4">{t.about.programmingLanguages.title}</h3>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <span className="text-accent font-bold">•</span>
                      <div>
                        <p className="text-sm font-semibold">{t.about.programmingLanguages.python.name}</p>
                        <p className="text-xs text-muted-foreground">{t.about.programmingLanguages.python.desc}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-accent font-bold">•</span>
                      <div>
                        <p className="text-sm font-semibold">{t.about.programmingLanguages.javascript.name}</p>
                        <p className="text-xs text-muted-foreground">{t.about.programmingLanguages.javascript.desc}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-accent font-bold">•</span>
                      <div>
                        <p className="text-sm font-semibold">{t.about.programmingLanguages.others.name}</p>
                        <p className="text-xs text-muted-foreground">{t.about.programmingLanguages.others.desc}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-accent font-bold">•</span>
                      <div>
                        <p className="text-sm font-semibold">{t.about.programmingLanguages.database.name}</p>
                        <p className="text-xs text-muted-foreground">{t.about.programmingLanguages.database.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Frameworks & Tools */}
                <div 
                  ref={el => cardRefs.current[4] = el}
                  className={`sketch-box p-6 md:p-8 bg-background border-2 border-foreground transition-all duration-700 ease-out ${
                    visibleElements.has('card-4') 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: '700ms' }}
                >
                  <h3 className="text-2xl font-bold mb-4">{t.about.frameworks.title}</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <h4 className="font-bold text-accent mb-1 text-sm">{t.about.frameworks.webDev}</h4>
                      <ul className="space-y-1 text-xs">
                        <li>Next.js & React</li>
                        <li>Flask</li>
                        <li>Laravel</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-accent mb-1 text-sm">{t.about.frameworks.dataDevOps}</h4>
                      <ul className="space-y-1 text-xs">
                        <li>Apache Spark</li>
                        <li>Airflow</li>
                        <li>Docker</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-accent mb-1 text-sm">{t.about.frameworks.development}</h4>
                      <ul className="space-y-1 text-xs">
                        <li>VS Code</li>
                        <li>IntelliJ IDEA</li>
                        <li>Git & GitHub</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-accent mb-1 text-sm">{t.about.frameworks.designData}</h4>
                      <ul className="space-y-1 text-xs">
                        <li>Tableau</li>
                        <li>Figma</li>
                        <li>Canva</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Soft Skills */}
                <div 
                  ref={el => cardRefs.current[5] = el}
                  className={`sketch-box p-6 md:p-8 bg-background border-2 border-foreground transition-all duration-700 ease-out ${
                    visibleElements.has('card-5') 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: '800ms' }}
                >
                  <h3 className="text-2xl font-bold mb-4">{t.about.softSkills.title}</h3>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <span className="text-accent font-bold">•</span>
                      <div>
                        <p className="text-sm font-semibold">{t.about.softSkills.publicSpeaking.name}</p>
                        <p className="text-xs text-muted-foreground">{t.about.softSkills.publicSpeaking.desc}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-accent font-bold">•</span>
                      <div>
                        <p className="text-sm font-semibold">{t.about.softSkills.leadership.name}</p>
                        <p className="text-xs text-muted-foreground">{t.about.softSkills.leadership.desc}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-accent font-bold">•</span>
                      <div>
                        <p className="text-sm font-semibold">{t.about.softSkills.communication.name}</p>
                        <p className="text-xs text-muted-foreground">{t.about.softSkills.communication.desc}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-accent font-bold">•</span>
                      <div>
                        <p className="text-sm font-semibold">{t.about.softSkills.writing.name}</p>
                        <p className="text-xs text-muted-foreground">{t.about.softSkills.writing.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* My Journey Section with scroll animation */}
        <section 
          id="journey" 
          ref={journeyRef}
          className={`max-w-6xl mx-auto px-4 py-8 md:py-8 transition-all duration-1000 ease-out ${
            visibleElements.has('journey') 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="space-y-8 md:space-y-12">
            <div className={`flex items-center gap-3 md:gap-4 transition-all duration-700 ease-out delay-300 ${
              visibleElements.has('journey') 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-6'
            }`}>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-black">{t.journey.title}</h2>
              <Image
                src="/assets/el2.png"
                alt="Decoration"
                width={60}
                height={60}
                className="object-contain star-decoration w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20"
              />
            </div>

            <div className={`relative w-full min-h-[1200px] -mb-45 -mt-55 transition-all duration-1000 ease-out delay-500 ${
              visibleElements.has('journey') 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-95'
            }`}>
              <div className="absolute inset-0 transform rotate-1">
                <Image
                  src="/assets/bggreen.png"
                  alt="Green Board Background"
                  fill
                  className="object-cover rounded-2xl"
                  priority
                />
              </div>

              <div className="relative w-full h-full min-h-[1200px]">
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

                {journeyItems.map((item, index) => (
                  <div
                    key={item.id}
                    className={`absolute group transition-all duration-700 ease-out ${
                      visibleElements.has('journey') 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-8'
                    }`}
                    style={{
                      top: item.position.top,
                      left: item.position.left,
                      transform: `rotate(${item.rotation}) translateX(-50%)`,
                      zIndex: 10,
                      transitionDelay: `${700 + index * 100}ms`
                    }}
                  >
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
          </div>
        </section>

        <div className="hidden md:block fixed top-32 right-12 text-4xl star-decoration opacity-70">✨</div>
        <div className="hidden md:block fixed bottom-20 left-12 text-3xl star-decoration opacity-70">💫</div>
      </main>
      
      <Footer />
    </>
  )
}