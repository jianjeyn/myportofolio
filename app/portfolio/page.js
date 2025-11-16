"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { ArrowLeft, ExternalLink, X, ChevronLeft, ChevronRight } from "lucide-react"
import { translations } from "../i18n/translations"

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [language, setLanguage] = useState('en')
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const t = translations[language]

  const projects = t.portfolio.projects.map((project, index) => ({
    ...project,
    details: {
      ...project.details,
      images: [
        ["/assets/p11.png", "/assets/p12.png", "/assets/p13.png", "/assets/p14.png", "/assets/p15.png"],
        ["/assets/p25.png", "/assets/p-dashboard.png"],
        ["/assets/p-saham1.png"],
        ["/assets/p-recipe.png"],
        ["/assets/p-search1.png"],
        ["/assets/pjf1.png", "/assets/pjf2.png", "/assets/pjf3.png"],
        ["/assets/p-grafikom.png"]
      ][index] || []
    }
  }))

  const handleNextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.details.images.length - 1 ? 0 : prev + 1
      )
    }
  }

  const handlePrevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.details.images.length - 1 : prev - 1
      )
    }
  }

  const handleProjectClick = (project) => {
    setSelectedProject(project)
    setCurrentImageIndex(0)
  }

  return (
    <>
      <main className="min-h-screen bg-background">
        <Header language={language} setLanguage={setLanguage} /> 

        <section className="max-w-6xl mx-auto px-4 py-8 md:py-16">
          {/* Back button dengan slide-in sederhana */}
          <div className={`transform transition-all duration-500 ease-out ${
            isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
          }`}>
            <Link href="/" className="inline-flex items-center gap-2 text-foreground font-bold mb-8 hover:text-accent transition-colors duration-200">
              <ArrowLeft className="w-5 h-5" />
              {t.portfolio.backToHome}
            </Link>
          </div>

          <div className="space-y-8 md:space-y-12">
            {/* Title dengan fade in */}
            <div className={`transform transition-all duration-500 ease-out delay-100 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}>
              <div className="flex items-center gap-3 md:gap-4">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-black">{t.portfolio.title}</h1>
                <Image
                  src="/assets/el2.png"
                  alt="Decoration"
                  width={60}
                  height={60}
                  className="object-contain star-decoration w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20"
                />
              </div>
            </div>

            {/* Portfolio grid dengan animasi ringan */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className={`transform transition-all duration-500 ease-out ${
                    isLoaded 
                      ? 'translate-y-0 opacity-100' 
                      : 'translate-y-6 opacity-0'
                  }`}
                  style={{ transitionDelay: `${200 + index * 100}ms` }}
                >
                  <button
                    onClick={() => handleProjectClick(project)}
                    className="group block text-left w-full transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 ease-out focus:outline-none focus:ring-0"
                  >
                    <div className="relative w-full aspect-[4/3]">
                      {/* Frame */}
                      <div className="absolute inset-0">
                        <Image
                          src="/assets/portoframe.png"
                          alt="Frame"
                          fill
                          className="object-contain"
                          priority={index < 2}
                        />
                      </div>

                      {/* Content area */}
                      <div className="absolute inset-0 px-[20%] pt-[9%] pb-[16%] flex flex-col gap-1.5">
                        <div className="relative flex-[4] border-2 border-foreground bg-white overflow-hidden rounded-sm transition-all duration-300 group-hover:border-accent group-hover:shadow-md">
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                          
                          {/* Hover overlay ringan */}
                          <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/10 transition-colors duration-300" />
                        </div>
                        
                        {/* Text area */}
                        <div className="flex-[1] flex flex-col justify-center">
                          <div className="flex items-center justify-between gap-1 mb-0.5">
                            <h3 className="text-[11px] md:text-xs lg:text-sm font-bold group-hover:text-accent transition-colors duration-200 leading-none truncate">
                              {project.title}
                            </h3>
                            <ExternalLink className="w-3 h-3 md:w-3.5 md:h-3.5 flex-shrink-0 group-hover:text-accent transition-colors duration-200" />
                          </div>
                          <p className="text-[8px] md:text-[9px] lg:text-[10px] text-muted-foreground leading-tight line-clamp-1">
                            {project.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Modal dengan animasi clean */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm transition-all duration-200"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="bg-background border-4 border-foreground rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden sketch-box flex flex-col transform scale-95 animate-modalShow"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-background border-b-4 border-foreground p-6 flex items-center justify-between flex-shrink-0">
              <h2 className="text-2xl md:text-3xl font-black">{selectedProject.title}</h2>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 hover:bg-accent/10 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-0"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="overflow-y-auto flex-1 p-6 space-y-6">
              <div className="relative">
                <div className="relative aspect-video border-2 border-foreground rounded-lg overflow-hidden bg-card">
                  <Image
                    src={selectedProject.details.images[currentImageIndex]}
                    alt={`${selectedProject.title} ${currentImageIndex + 1}`}
                    fill
                    className="object-cover"
                    key={currentImageIndex}
                  />
                </div>

                {selectedProject.details.images.length > 1 && (
                  <>
                    <button
                      onClick={handlePrevImage}
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/90 hover:bg-accent border-2 border-foreground rounded-full p-2 transition-colors duration-200 focus:outline-none focus:ring-0"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={handleNextImage}
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/90 hover:bg-accent border-2 border-foreground rounded-full p-2 transition-colors duration-200 focus:outline-none focus:ring-0"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>

                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                      {selectedProject.details.images.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentImageIndex(idx)}
                          className={`h-2 rounded-full transition-all duration-200 focus:outline-none focus:ring-0 ${
                            idx === currentImageIndex 
                              ? 'bg-accent w-6' 
                              : 'bg-background/60 hover:bg-background w-2'
                          }`}
                        />
                      ))}
                    </div>

                    <div className="absolute top-4 right-4 bg-background/90 px-3 py-1 rounded-full text-sm font-bold border-2 border-foreground">
                      {currentImageIndex + 1} / {selectedProject.details.images.length}
                    </div>
                  </>
                )}
              </div>

              <div className="sketch-box p-4 bg-card">
                <h3 className="font-bold text-lg mb-2">{t.portfolio.modal.aboutProject}</h3>
                <p className="text-muted-foreground">{selectedProject.details.fullDescription}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="sketch-box p-4 bg-card">
                  <h3 className="font-bold mb-2">{t.portfolio.modal.role}</h3>
                  <p className="text-sm text-muted-foreground">{selectedProject.details.role}</p>
                </div>
                <div className="sketch-box p-4 bg-card">
                  <h3 className="font-bold mb-2">{t.portfolio.modal.duration}</h3>
                  <p className="text-sm text-muted-foreground">{selectedProject.details.duration}</p>
                </div>
              </div>

              <div className="sketch-box p-4 bg-card">
                <h3 className="font-bold mb-3">{t.portfolio.modal.technologiesUsed}</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.details.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-accent/20 border-2 border-foreground rounded-full text-sm font-bold hover:bg-accent/30 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {selectedProject.details.link !== "#" && (
                <Link
                  href={selectedProject.details.link}
                  target="_blank"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-accent text-background font-bold rounded-lg hover:bg-accent/90 transition-colors duration-200 focus:outline-none focus:ring-0"
                >
                  {t.portfolio.modal.viewLiveProject}
                  <ExternalLink className="w-4 h-4" />
                </Link>
              )}
            </div>
          </div>
        </div>
      )}

      <Footer />

      <style jsx>{`
        @keyframes modalShow {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(10px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .animate-modalShow {
          animation: modalShow 0.2s ease-out;
        }

        /* Remove pink focus outline and tap highlights */
        * {
          -webkit-tap-highlight-color: transparent;
          -webkit-touch-callout: none;
        }

        button:focus,
        button:active,
        a:focus,
        a:active {
          outline: none !important;
          box-shadow: none !important;
          -webkit-tap-highlight-color: transparent !important;
        }

        /* Remove any default button/link styling that might cause highlights */
        button {
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
        }
      `}</style>
    </>
  )
}