"use client"

import { motion, useInView } from "framer-motion"
import { ArrowRight, ArrowUpRight, ChevronRight, Plus, X, ArrowUp } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Inter, MuseoModerno } from "next/font/google"
import { useRef, useEffect, useState } from "react"
import Lenis from "lenis"

const inter = Inter({ subsets: ["latin"] })

const museoModerno = MuseoModerno({ 
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-museo-moderno",
})

export default function SanCayetanoPage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const isHeroInView = useInView(heroRef, { once: true, margin: "-100px" })
  const mobileMenuRef = useRef<HTMLDivElement>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Cerrar menú móvil al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false)
      }
    }

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMobileMenuOpen])

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <div className={`${inter.className} bg-white text-black min-h-screen`}>
      {/* Header - Sticky en toda la web */}
      <header className="fixed top-0 left-0 w-full flex justify-center z-50">
        <motion.div 
          ref={mobileMenuRef}
          className="w-[98%] md:w-[80%] bg-[#e0e0e0] shadow-lg overflow-hidden px-4 md:px-8 rounded-b-[1.5rem]"
          initial={{
            borderRadius: "0 0 1.5rem 1.5rem",
          }}
          animate={{
            borderRadius: isMobileMenuOpen ? "0 0 1rem 1rem" : "0 0 1.5rem 1.5rem",
          }}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="py-2 md:py-3 flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/">
                <Image 
                  src="/pipstudio2/Logo pipstudio.png" 
                  alt="pipstudio logo" 
                  width={120} 
                  height={40} 
                  className="h-8 md:h-10 w-auto rounded-lg"
                  priority
                />
              </Link>
            </div>
            
            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-4 lg:gap-6">
              <motion.a 
                href="/#soluciones-digitales" 
                className="text-[#282828] text-xs md:text-sm font-medium relative overflow-hidden block h-5"
                whileHover="hover"
                initial="initial"
              >
                <motion.span
                  className="block"
                  variants={{
                    initial: { y: 0, opacity: 1 },
                    hover: { y: -20, opacity: 0 }
                  }}
                  transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  Soluciones digitales
                </motion.span>
                <motion.span
                  className="absolute top-0 left-0 block w-full"
                  variants={{
                    initial: { y: 20, opacity: 0 },
                    hover: { y: 0, opacity: 1 }
                  }}
                  transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  Soluciones digitales
                </motion.span>
              </motion.a>
              <motion.a 
                href="/#sistema" 
                className="text-[#282828] text-xs md:text-sm font-medium relative overflow-hidden block h-5"
                whileHover="hover"
                initial="initial"
              >
                <motion.span
                  className="block"
                  variants={{
                    initial: { y: 0, opacity: 1 },
                    hover: { y: -20, opacity: 0 }
                  }}
                  transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  Sistema
                </motion.span>
                <motion.span
                  className="absolute top-0 left-0 block w-full"
                  variants={{
                    initial: { y: 20, opacity: 0 },
                    hover: { y: 0, opacity: 1 }
                  }}
                  transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  Sistema
                </motion.span>
              </motion.a>
              <motion.a 
                href="/#casos-de-exito" 
                className="text-[#282828] text-xs md:text-sm font-medium relative overflow-hidden block h-5"
                whileHover="hover"
                initial="initial"
              >
                <motion.span
                  className="block"
                  variants={{
                    initial: { y: 0, opacity: 1 },
                    hover: { y: -20, opacity: 0 }
                  }}
                  transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  Casos de éxito
                </motion.span>
                <motion.span
                  className="absolute top-0 left-0 block w-full"
                  variants={{
                    initial: { y: 20, opacity: 0 },
                    hover: { y: 0, opacity: 1 }
                  }}
                  transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  Casos de éxito
                </motion.span>
              </motion.a>
              <motion.a 
                href="/#servicios" 
                className="text-[#282828] text-xs md:text-sm font-medium relative overflow-hidden block h-5"
                whileHover="hover"
                initial="initial"
              >
                <motion.span
                  className="block"
                  variants={{
                    initial: { y: 0, opacity: 1 },
                    hover: { y: -20, opacity: 0 }
                  }}
                  transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  Servicios
                </motion.span>
                <motion.span
                  className="absolute top-0 left-0 block w-full"
                  variants={{
                    initial: { y: 20, opacity: 0 },
                    hover: { y: 0, opacity: 1 }
                  }}
                  transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  Servicios
                </motion.span>
              </motion.a>
              <motion.a 
                href="/#preguntas-frecuentes" 
                className="text-[#282828] text-xs md:text-sm font-medium relative overflow-hidden block h-5"
                whileHover="hover"
                initial="initial"
              >
                <motion.span
                  className="block"
                  variants={{
                    initial: { y: 0, opacity: 1 },
                    hover: { y: -20, opacity: 0 }
                  }}
                  transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  Preguntas frecuentes
                </motion.span>
                <motion.span
                  className="absolute top-0 left-0 block w-full"
                  variants={{
                    initial: { y: 20, opacity: 0 },
                    hover: { y: 0, opacity: 1 }
                  }}
                  transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  Preguntas frecuentes
                </motion.span>
              </motion.a>
              <a
                href="https://wa.me/5493493415669"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#CCFF00] text-[#282828] py-1.5 md:py-2 px-4 md:px-5 rounded-full font-medium text-xs md:text-sm flex items-center gap-1.5 hover:bg-[#b8e600] transition-colors"
              >
                <span className="whitespace-nowrap">Hablemos!</span>
                <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 text-[#282828] flex-shrink-0" />
              </a>
            </nav>
            {/* Mobile menu button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden w-10 h-10 rounded-full bg-[#282828] flex items-center justify-center relative overflow-hidden"
            >
              <motion.div
                initial={false}
                animate={{
                  rotate: isMobileMenuOpen ? 90 : 0,
                  opacity: isMobileMenuOpen ? 0 : 1,
                  scale: isMobileMenuOpen ? 0 : 1,
                }}
                transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                className="absolute"
              >
                <Plus className="w-5 h-5 text-white" />
              </motion.div>
              <motion.div
                initial={false}
                animate={{
                  rotate: isMobileMenuOpen ? 0 : -90,
                  opacity: isMobileMenuOpen ? 1 : 0,
                  scale: isMobileMenuOpen ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                className="absolute"
              >
                <X className="w-5 h-5 text-white" />
              </motion.div>
            </button>
          </div>
          
          {/* Mobile Menu Content */}
          <motion.div
            initial={false}
            animate={{
              height: isMobileMenuOpen ? "auto" : 0,
              opacity: isMobileMenuOpen ? 1 : 0,
            }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-6 pt-4 space-y-4 border-t border-gray-300 mt-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ 
                  opacity: isMobileMenuOpen ? 1 : 0, 
                  x: isMobileMenuOpen ? 0 : -20 
                }}
                transition={{ duration: 0.4, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <Link href="/#soluciones-digitales" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center justify-between py-4 text-[#282828] hover:text-[#CCFF00] transition">
                  <span className="font-medium text-lg md:text-xl">Soluciones digitales</span>
                  <span className="text-gray-500 text-base md:text-lg">(02)</span>
                </Link>
              </motion.div>
              <div className="h-px bg-gray-300"></div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ 
                  opacity: isMobileMenuOpen ? 1 : 0, 
                  x: isMobileMenuOpen ? 0 : -20 
                }}
                transition={{ duration: 0.4, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <Link href="/#sistema" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center justify-between py-4 text-[#282828] hover:text-[#CCFF00] transition">
                  <span className="font-medium text-lg md:text-xl">Sistema</span>
                  <span className="text-gray-500 text-base md:text-lg">(03)</span>
                </Link>
              </motion.div>
              <div className="h-px bg-gray-300"></div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ 
                  opacity: isMobileMenuOpen ? 1 : 0, 
                  x: isMobileMenuOpen ? 0 : -20 
                }}
                transition={{ duration: 0.4, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <Link href="/#casos-de-exito" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center justify-between py-4 text-[#282828] hover:text-[#CCFF00] transition">
                  <span className="font-medium text-lg md:text-xl">Casos de éxito</span>
                  <span className="text-gray-500 text-base md:text-lg">(04)</span>
                </Link>
              </motion.div>
              <div className="h-px bg-gray-300"></div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ 
                  opacity: isMobileMenuOpen ? 1 : 0, 
                  x: isMobileMenuOpen ? 0 : -20 
                }}
                transition={{ duration: 0.4, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <Link href="/#servicios" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center justify-between py-4 text-[#282828] hover:text-[#CCFF00] transition">
                  <span className="font-medium text-lg md:text-xl">Servicios</span>
                  <span className="text-gray-500 text-base md:text-lg">(05)</span>
                </Link>
              </motion.div>
              <div className="h-px bg-gray-300"></div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ 
                  opacity: isMobileMenuOpen ? 1 : 0, 
                  x: isMobileMenuOpen ? 0 : -20 
                }}
                transition={{ duration: 0.4, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <Link href="/#preguntas-frecuentes" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center justify-between py-4 text-[#282828] hover:text-[#CCFF00] transition">
                  <span className="font-medium text-lg md:text-xl">Preguntas frecuentes</span>
                  <span className="text-gray-500 text-base md:text-lg">(06)</span>
                </Link>
              </motion.div>
              <div className="h-px bg-gray-300"></div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ 
                  opacity: isMobileMenuOpen ? 1 : 0, 
                  x: isMobileMenuOpen ? 0 : -20 
                }}
                transition={{ duration: 0.4, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                className="flex justify-start mt-6"
              >
                <a 
                  href="https://wa.me/5493493415669"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 border border-white bg-[#2a2a2a] hover:bg-[#333] px-4 md:px-6 py-2.5 md:py-3 rounded-full transition group text-sm md:text-base"
                >
                  <span className="text-white font-medium">Hablemos!</span>
                  <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 text-[#CCFF00]" />
                </a>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </header>

      {/* Hero Section */}
      <section ref={heroRef} className="pt-24 md:pt-28 pb-16 px-4 md:px-8 mt-16 md:mt-20">
        <div className="w-[98%] md:w-[80%] mx-auto">
          {/* Breadcrumb */}
          <motion.div 
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm text-gray-500">
              Home / Proyectos / San Cayetano
            </p>
          </motion.div>

          {/* Title */}
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-4"
            style={{ letterSpacing: '-0.08em' }}
            initial={{ opacity: 0, y: 20 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            San Cayetano Aberturas
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl text-gray-600 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Comunicación y transformación digital para PyMEs industriales
          </motion.p>

          {/* Project Info */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <div>
              <p className="text-sm text-gray-500 mb-2">Cliente</p>
              <p className="text-lg font-semibold">San Cayetano Aberturas · PyME industrial argentina</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-2">Duración</p>
              <p className="text-lg font-semibold">Colaboración continua</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-2">Año</p>
              <p className="text-lg font-semibold">2025 – Presente</p>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div 
            className="aspect-[21/9] rounded-2xl overflow-hidden mb-16"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isHeroInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div 
              className="w-full h-full"
              style={{
                backgroundImage: `url('/pipstudio2/Diseño sin título (11).png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            />
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="w-[98%] md:w-[80%] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center justify-center gap-3 mb-2">
                <div>
                  <p className="text-6xl md:text-7xl font-bold text-black">70%</p>
                </div>
                <div className="flex items-start pt-2">
                  <ArrowUp className="w-6 h-6 md:w-8 md:h-8 text-black" />
                </div>
              </div>
              <p className="text-sm text-gray-600">Mejora en comunicación</p>
            </motion.div>
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="flex items-center justify-center gap-3 mb-2">
                <div>
                  <p className="text-6xl md:text-7xl font-bold text-black">85%</p>
                </div>
                <div className="flex items-start pt-2">
                  <ArrowUp className="w-6 h-6 md:w-8 md:h-8 text-black" />
                </div>
              </div>
              <p className="text-sm text-gray-600">Aumento en presencia digital</p>
            </motion.div>
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center justify-center gap-3 mb-2">
                <div>
                  <p className="text-6xl md:text-7xl font-bold text-black">85%</p>
                </div>
                <div className="flex items-start pt-2">
                  <ArrowUp className="w-6 h-6 md:w-8 md:h-8 text-black" />
                </div>
              </div>
              <p className="text-sm text-gray-600">Satisfacción del cliente</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contexto del proyecto */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="w-[98%] md:w-[80%] mx-auto">
          <motion.div
            className="mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm text-gray-500">(01)</p>
          </motion.div>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ letterSpacing: '-0.08em' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Contexto del proyecto
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-700 mb-4 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Comunicación digital aplicada a una PyME industrial
          </motion.p>
          <motion.p 
            className="text-base text-gray-600 leading-relaxed max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            San Cayetano Aberturas es una PyME industrial con trayectoria, productos sólidos y conocimiento técnico real. Como ocurre en muchas empresas del sector, su principal desafío no estaba en lo productivo, sino en cómo comunicar, ordenar y mostrar digitalmente todo ese valor.
          </motion.p>
          <motion.p 
            className="text-base text-gray-600 leading-relaxed max-w-3xl mt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Desde PiP Studio abordamos el trabajo como un proceso de comunicación y transformación digital para PyMEs, enfocado en construir una base clara, coherente y funcional que acompañe al negocio y al proceso comercial.
          </motion.p>
        </div>
      </section>

      {/* Desafío */}
      <section className="py-16 px-4 md:px-8">
        <div className="w-[98%] md:w-[80%] mx-auto">
          <motion.div
            className="mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm text-gray-500">(02)</p>
          </motion.div>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ letterSpacing: '-0.08em' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Desafío
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-700 mb-4 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Cuando las ventas bajan y la comunicación no ayuda a revertirlo
          </motion.p>
          <motion.p 
            className="text-base text-gray-600 leading-relaxed max-w-3xl mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            En palabras de la propia empresa, el problema era concreto:
          </motion.p>
          <motion.blockquote 
            className="text-xl font-semibold text-gray-800 mb-6 pl-6 border-l-4 border-[#CCFF00]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            "Las ventas estaban en baja y seguían bajando."
          </motion.blockquote>
          <motion.p 
            className="text-base text-gray-600 leading-relaxed max-w-3xl mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Si bien San Cayetano contaba con buenos productos y experiencia, su comunicación digital no estaba alineada para acompañar ni sostener el proceso comercial. La información estaba dispersa, los productos no se explicaban correctamente y no existía una estrategia digital clara.
          </motion.p>
          <motion.p 
            className="text-base text-gray-600 leading-relaxed max-w-3xl mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Este escenario es habitual en PyMEs industriales:
          </motion.p>
          <motion.ul 
            className="list-disc list-inside space-y-2 text-base text-gray-600 max-w-3xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <li>buenos productos</li>
            <li>procesos que funcionan "más o menos"</li>
            <li>pero una presencia digital débil, desordenada o incoherente</li>
          </motion.ul>
          <motion.p 
            className="text-base text-gray-600 leading-relaxed max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            El resultado suele ser pérdida de oportunidades, desgaste interno y dificultad para competir en un mercado cada vez más digitalizado.
          </motion.p>
        </div>
      </section>

      {/* Enfoque de trabajo */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="w-[98%] md:w-[80%] mx-auto">
          <motion.div
            className="mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm text-gray-500">(03)</p>
          </motion.div>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ letterSpacing: '-0.08em' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Enfoque de trabajo
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-700 mb-4 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Estrategia digital antes que acciones aisladas
          </motion.p>
          <motion.p 
            className="text-base text-gray-600 leading-relaxed max-w-3xl mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            El trabajo de PiP Studio no se planteó como marketing tradicional ni como gestión de redes sociales. Se abordó como un proceso de estrategia digital y orden comunicacional, actuando como área de comunicación y marketing externa de la empresa.
          </motion.p>
          <motion.p 
            className="text-base text-gray-600 leading-relaxed max-w-3xl mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Las primeras etapas se centraron en:
          </motion.p>
          <motion.ul 
            className="list-disc list-inside space-y-2 text-base text-gray-600 max-w-3xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <li>Diagnóstico del negocio, productos y proceso comercial</li>
            <li>Ordenamiento de líneas, categorías y mensajes clave</li>
            <li>Definición de una narrativa técnica y comercial coherente</li>
            <li>Alineación entre identidad, contenidos y canales digitales</li>
          </motion.ul>
          <motion.p 
            className="text-base text-gray-600 leading-relaxed max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Este enfoque permitió sentar una base real de presencia digital para empresas, sobre la cual luego construir contenidos, web, catálogo y futuras acciones comerciales.
          </motion.p>
        </div>
      </section>

      {/* Solución implementada */}
      <section className="py-16 px-4 md:px-8">
        <div className="w-[98%] md:w-[80%] mx-auto">
          <motion.div
            className="mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm text-gray-500">(04)</p>
          </motion.div>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ letterSpacing: '-0.08em' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Solución implementada
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-700 mb-4 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Comunicación digital estructurada para una PyME industrial
          </motion.p>
          <motion.p 
            className="text-base text-gray-600 leading-relaxed max-w-3xl mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A partir del diagnóstico, se desarrolló una estructura digital integral que incluyó:
          </motion.p>
          <motion.ul 
            className="list-disc list-inside space-y-2 text-base text-gray-600 max-w-3xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <li>Organización estratégica de productos y líneas industriales</li>
            <li>Desarrollo de contenidos técnicos y comerciales claros</li>
            <li>Producción audiovisual alineada a la identidad de marca</li>
            <li>Construcción de una web pensada como herramienta comercial</li>
            <li>Creación de un catálogo digital funcional y escalable</li>
            <li>Integración de canales de contacto y consultas</li>
          </motion.ul>
          <motion.p 
            className="text-base text-gray-600 leading-relaxed max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Cada decisión respondió al contexto real de la empresa y a su mercado, evitando fórmulas genéricas. El objetivo fue profesionalizar la comunicación, no simplemente "tener presencia".
          </motion.p>
        </div>
      </section>

      {/* Resultados */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="w-[98%] md:w-[80%] mx-auto">
          <motion.div
            className="mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm text-gray-500">(05)</p>
          </motion.div>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ letterSpacing: '-0.08em' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Resultados
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-700 mb-4 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Una base digital sólida para crecer de forma sostenida
          </motion.p>
          <motion.p 
            className="text-base text-gray-600 leading-relaxed max-w-3xl mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Hoy San Cayetano cuenta con:
          </motion.p>
          <motion.ul 
            className="list-disc list-inside space-y-2 text-base text-gray-600 max-w-3xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <li>Una comunicación digital más clara, ordenada y coherente</li>
            <li>Productos mejor explicados y estructurados</li>
            <li>Contenidos alineados a su propuesta de valor</li>
            <li>Una presencia digital preparada para acompañar ventas y crecimiento</li>
          </motion.ul>
          <motion.p 
            className="text-base text-gray-600 leading-relaxed max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            El impacto no se mide en likes, sino en orden, claridad y eficiencia comercial, tres pilares clave de cualquier proceso de transformación digital para empresas.
          </motion.p>
        </div>
      </section>

      {/* Caso real */}
      <section className="py-16 px-4 md:px-8">
        <div className="w-[98%] md:w-[80%] mx-auto">
          <motion.div
            className="mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm text-gray-500">(06)</p>
          </motion.div>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ letterSpacing: '-0.08em' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Caso real de transformación digital en PyMEs
          </motion.h2>
          <motion.p 
            className="text-base text-gray-600 leading-relaxed max-w-3xl mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Este proyecto demuestra cómo una estrategia de comunicación y transformación digital para PyMEs industriales puede generar cambios reales cuando se trabaja desde el diagnóstico, el criterio y la coherencia, y no desde acciones aisladas.
          </motion.p>
          <motion.p 
            className="text-base text-gray-600 leading-relaxed max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            No se trata de hacer "más marketing", sino de hacer mejor comunicación, alineada al negocio.
          </motion.p>
        </div>
      </section>

      {/* Cierre estratégico */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="w-[98%] md:w-[80%] mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ letterSpacing: '-0.08em' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Cierre estratégico (SEO + posicionamiento)
          </motion.h2>
          <motion.p 
            className="text-base text-gray-600 leading-relaxed max-w-3xl mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            PiP Studio trabaja con PyMEs que tienen buenos productos, pero necesitan ordenar y profesionalizar su comunicación digital para obtener resultados reales.
          </motion.p>
          <motion.p 
            className="text-base text-gray-600 leading-relaxed max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Este caso refleja cómo abordamos la estrategia digital, la comunicación para empresas industriales y la construcción de presencia digital, actuando como parte del equipo y no como un proveedor externo.
          </motion.p>
        </div>
      </section>

      {/* Proyectos Recientes */}
      <section className="py-16 px-4 md:px-8">
        <div className="w-[98%] md:w-[80%] mx-auto">
          <div className="flex justify-between items-center mb-8">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold"
              style={{ letterSpacing: '-0.08em' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Proyectos Recientes.
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Link 
                href="/#casos-de-exito"
                className="bg-[#CCFF00] text-black px-6 py-3 rounded-lg font-medium hover:bg-[#b8e600] transition-colors inline-flex items-center gap-2"
              >
                Ver todos los proyectos
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              className="rounded-2xl overflow-hidden bg-[#EBEBEB] p-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="aspect-video bg-gray-800 rounded-xl mb-4">
                <div 
                  className="w-full h-full"
                  style={{
                    backgroundImage: `url('/pipstudio2/AGRO.png')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  }}
                />
              </div>
              <div className="px-2 pb-2">
                <h3 className="text-xl font-bold mb-2">Foglia Válvulas</h3>
                <p className="text-sm text-gray-600">
                  Presencia digital, material comercial y desarrollo de marca.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="rounded-2xl overflow-hidden bg-[#EBEBEB] p-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="aspect-video bg-gray-800 rounded-xl mb-4">
                <div 
                  className="w-full h-full"
                  style={{
                    backgroundImage: `url('/pipstudio2/Diseño sin título (11).png')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  }}
                />
              </div>
              <div className="px-2 pb-2">
                <h3 className="text-xl font-bold mb-2">San Cayetano Aberturas</h3>
                <p className="text-sm text-gray-600">
                  Presencia digital, sitio institucional y proyectos increíbles.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#282828] text-white py-12 md:py-16 px-4 md:px-8 w-full">
        <div className="w-[98%] md:w-[80%] mx-auto">
          {/* Contenedor principal del footer */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8">
            {/* Columna 1: Información de la empresa */}
            <div>
              <div className="mb-4">
                <Image 
                  src="/pipstudio2/Logo pipstudio.png" 
                  alt="pipstudio logo" 
                  width={120} 
                  height={40} 
                  className="h-8 md:h-10 w-auto mb-3"
                />
                <p className="text-gray-400 text-sm leading-relaxed">
                  Comunicación y transformación digital para PyMEs | Sunchales, Santa Fe
                </p>
              </div>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                Transformación digital con sentido estratégico. Ayudamos a empresas con trayectoria a pasar de una presencia digital desordenada a un ecosistema coherente, profesional y funcional.
              </p>
              <div className="flex items-center gap-2 text-gray-300 text-sm">
                <span className="w-1 h-4 bg-[#CCFF00] rounded-full"></span>
                <span>Comunicación y marketing digital</span>
              </div>
            </div>

            {/* Columna 2: Enlaces de navegación */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Navegación</h3>
              <nav aria-label="Footer navigation">
                <ul className="space-y-2">
                  <li>
                    <Link href="/#soluciones-digitales" className="text-gray-400 hover:text-[#CCFF00] transition-colors text-sm">
                      Soluciones Digitales
                    </Link>
                  </li>
                  <li>
                    <Link href="/#sistema" className="text-gray-400 hover:text-[#CCFF00] transition-colors text-sm">
                      Sistema
                    </Link>
                  </li>
                  <li>
                    <Link href="/#casos-de-exito" className="text-gray-400 hover:text-[#CCFF00] transition-colors text-sm">
                      Casos de Éxito
                    </Link>
                  </li>
                  <li>
                    <Link href="/#servicios" className="text-gray-400 hover:text-[#CCFF00] transition-colors text-sm">
                      Servicios
                    </Link>
                  </li>
                  <li>
                    <Link href="/#preguntas-frecuentes" className="text-gray-400 hover:text-[#CCFF00] transition-colors text-sm">
                      Preguntas Frecuentes
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            {/* Columna 3: Servicios */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Servicios</h3>
              <ul className="space-y-2">
                <li className="text-gray-400 text-sm">Orden y creación de canales digitales</li>
                <li className="text-gray-400 text-sm">Contenidos técnicos y comerciales</li>
                <li className="text-gray-400 text-sm">Material comercial y soporte</li>
                <li className="text-gray-400 text-sm">Marca y coherencia visual</li>
                <li className="text-gray-400 text-sm">Producción audiovisual</li>
                <li className="text-gray-400 text-sm">Acompañamiento estratégico</li>
              </ul>
            </div>

            {/* Columna 4: Contacto */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Contacto</h3>
              <div className="space-y-4">
                <a
                  href="https://wa.me/5493493415669"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-[#CCFF00] transition-colors text-sm group"
                  aria-label="Contactar por WhatsApp"
                >
                  <svg
                    className="w-5 h-5 text-[#CCFF00] group-hover:scale-110 transition-transform"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18.403 5.633A8.919 8.919 0 0 0 12.053 3c-4.948 0-8.976 4.027-8.978 8.977 0 1.582.413 3.126 1.198 4.488L3 21.116l4.759-1.249a8.981 8.981 0 0 0 4.29 1.093h.004c4.947 0 8.975-4.027 8.977-8.977a8.926 8.926 0 0 0-2.627-6.35m-6.35 13.812h-.003a7.446 7.446 0 0 1-3.798-1.041l-.272-.162-2.824.741.753-2.753-.177-.282a7.448 7.448 0 0 1-1.141-3.971c.002-4.114 3.349-7.461 7.465-7.461a7.413 7.413 0 0 1 5.275 2.188 7.42 7.42 0 0 1 2.183 5.279c-.002 4.114-3.349 7.462-7.461 7.462m4.093-5.589c-.225-.113-1.327-.655-1.533-.73-.205-.075-.354-.112-.504.112s-.58.729-.711.879-.262.168-.486.056-.947-.349-1.804-1.113c-.667-.595-1.117-1.329-1.248-1.554s-.014-.346.099-.458c.101-.1.224-.262.336-.393.112-.131.149-.224.224-.374s.038-.281-.019-.393c-.056-.113-.505-1.217-.692-1.666-.181-.435-.366-.377-.504-.383a9.65 9.65 0 0 0-.429-.008.826.826 0 0 0-.599.28c-.206.225-.785.767-.785 1.871s.804 2.171.916 2.321c.112.15 1.582 2.415 3.832 3.387.536.231.954.369 1.279.473.537.171 1.026.146 1.413.089.431-.064 1.327-.542 1.514-1.066.187-.524.187-.973.131-1.067-.056-.094-.207-.151-.43-.263"
                    />
                  </svg>
                  <span>+54 9 3493 415669</span>
                </a>
                <a
                  href="mailto:hacepip@gmail.com"
                  className="flex items-center gap-2 text-gray-400 hover:text-[#CCFF00] transition-colors text-sm group"
                  aria-label="Enviar email"
                >
                  <svg
                    className="w-5 h-5 text-[#CCFF00] group-hover:scale-110 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span>hacepip@gmail.com</span>
                </a>
                <div className="pt-2 border-t border-gray-700">
                  <p className="text-gray-500 text-xs mb-2">Horario de atención:</p>
                  <p className="text-gray-400 text-sm">Lunes a Viernes</p>
                  <p className="text-gray-400 text-sm">9:00 - 18:00 hs</p>
                </div>
              </div>
            </div>
          </div>

          {/* Línea divisoria */}
          <div className="border-t border-gray-700 pt-8 mb-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              {/* Copyright */}
              <div className="text-gray-500 text-sm text-center md:text-left">
                <p>© {new Date().getFullYear()} PiP Studio. Todos los derechos reservados.</p>
              </div>

              {/* Enlaces legales */}
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <Link href="#" className="text-gray-500 hover:text-[#CCFF00] transition-colors">
                  Política de Privacidad
                </Link>
                <span className="text-gray-700">|</span>
                <Link href="#" className="text-gray-500 hover:text-[#CCFF00] transition-colors">
                  Términos y Condiciones
                </Link>
              </div>
            </div>
          </div>

          {/* Schema.org JSON-LD para SEO */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                "name": "PiP Studio",
                "description": "Transformación digital con sentido estratégico. Servicios de comunicación y marketing digital para empresas.",
                "url": "https://www.pipstudio.com.ar",
                "telephone": "+5493493415669",
                "email": "hacepip@gmail.com",
                "priceRange": "$$",
                "areaServed": {
                  "@type": "Country",
                  "name": "Argentina"
                },
                "serviceType": [
                  "Diseño web",
                  "Marketing digital",
                  "Comunicación digital",
                  "Redes sociales",
                  "Producción audiovisual"
                ],
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+5493493415669",
                  "email": "hacepip@gmail.com",
                  "contactType": "customer service",
                  "availableLanguage": ["Spanish"]
                }
              }),
            }}
          />
        </div>
      </footer>
    </div>
  )
}

