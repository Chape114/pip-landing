"use client"

import { motion, useInView } from "framer-motion"
import { ArrowRight, ArrowUpRight, ChevronRight, ChevronDown, Ghost, Users, Lightbulb, Heart, Circle, Plus, X, Instagram, Facebook } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Image from "next/image"
import Link from "next/link"
import { Inter, MuseoModerno } from "next/font/google"
import { useEffect, useLayoutEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import Lenis from "lenis"

const inter = Inter({ subsets: ["latin"] })

const museoModerno = MuseoModerno({ 
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-museo-moderno",
})

const servicios = [
  { num: "1", text: "Diagnóstico", description: "Analizamos tu situación actual, identificamos oportunidades y definimos el punto de partida para tu estrategia de comunicación digital.", tags: ["Análisis de mercado", "Auditoría digital", "Benchmarking"] },
  { num: "2", text: "Definición estratégica", description: "Creamos un plan de acción claro y realista, alineado con tus objetivos de negocio y recursos disponibles.", tags: ["Plan estratégico", "Roadmap", "KPIs"] },
  { num: "3", text: "Arquitectura digital", description: "Diseñamos y construimos la estructura digital de tu marca: sitio web, perfiles, canales y herramientas necesarias.", tags: ["Diseño web", "Branding", "UX/UI"] },
  { num: "4", text: "Ejecución constante", description: "Implementamos y mantenemos activa tu comunicación digital con contenido estratégico y de calidad.", tags: ["Contenido", "Redes sociales", "Email marketing"] },
  { num: "5", text: "Optimización y foco", description: "Medimos resultados, ajustamos estrategias y enfocamos esfuerzos en lo que realmente funciona para tu negocio.", tags: ["Analytics", "A/B Testing", "Optimización"] },
  { num: "6", text: "Escalabilidad", description: "Preparamos tu comunicación para crecer contigo, con sistemas y procesos que se adaptan a tu evolución.", tags: ["Automatización", "Sistemas", "Procesos"] },
  { num: "7", text: "Acompañamiento", description: "Te acompañamos en cada paso, brindando soporte continuo y asesoramiento estratégico cuando lo necesites.", tags: ["Soporte", "Consultoría", "Mentoría"] },
  { num: "8", text: "Evolución continua", description: "Tu comunicación se mantiene actualizada y relevante, evolucionando junto con tu negocio y el mercado.", tags: ["Innovación", "Tendencias", "Actualización"] },
]


const preguntasFrecuentes = [
  { 
    text: "¿Con qué empresas trabajo?", 
    description: "Trabajo principalmente con PyMEs que cuentan con buenos productos o servicios, pero que necesitan ordenar, profesionalizar y hacer crecer su comunicación digital.\n\nSon empresas que deciden transformarse digitalmente, que valoran la estrategia, el diseño con criterio y la ejecución constante.\nEspecialmente trabajo con empresas industriales y de servicios que buscan resultados reales y una presencia digital coherente, no acciones aisladas." 
  },
  { 
    text: "¿Qué servicios ofrezco?", 
    description: "Ofrezco un servicio integral de comunicación y transformación digital para PyMEs.\nMi trabajo abarca desde el diagnóstico estratégico hasta la ejecución y el acompañamiento continuo, actuando como el área de comunicación y marketing de la empresa.\n\nIncluye, según cada caso:\n\n• Estrategia y definición digital\n• Arquitectura y orden de canales digitales\n• Diseño web y presencia online\n• Branding y coherencia de marca\n• Contenidos técnicos, educativos y comerciales\n• Optimización continua y soporte estratégico\n\nTodo orientado a construir una presencia digital funcional y alineada al negocio." 
  },
  { 
    text: "¿Cuál es el plazo mínimo de trabajo?", 
    description: "El plazo mínimo depende del punto de partida de cada empresa, pero en la mayoría de los casos trabajo con procesos de al menos 3 meses.\n\nLa transformación digital y la comunicación estratégica requieren tiempo, análisis y continuidad.\nEste enfoque permite ordenar la estructura digital, ejecutar con criterio y optimizar acciones para lograr resultados consistentes y sostenibles, no soluciones rápidas sin impacto real." 
  },
  { 
    text: "¿Podemos colaborar de forma remota?", 
    description: "Sí. Trabajo principalmente de forma remota, colaborando con empresas de distintas localidades y regiones.\n\nLa cercanía no depende de la ubicación física, sino de una comunicación clara, procesos definidos y acompañamiento constante.\nUtilizamos herramientas digitales para reuniones, seguimiento y ejecución, manteniendo una colaboración fluida y profesional en todo momento." 
  },
  { 
    text: "¿Podemos colaborar por proyectos puntuales?", 
    description: "Sí, es posible trabajar por proyectos puntuales como sitios web, material comercial o reordenamiento de canales digitales.\n\nSin embargo, cuando el objetivo es una transformación digital real, siempre recomiendo un acompañamiento continuo, ya que permite mantener coherencia, optimizar resultados y acompañar el crecimiento del negocio en el tiempo.\n\nMi enfoque prioriza procesos sólidos antes que acciones aisladas." 
  },
]

const serviciosCards = [
  {
    id: "canales",
    title: "Orden y creación de canales digitales",
    description: "Analizo el estado actual del negocio y ordeno, optimizo o creo los canales digitales necesarios, según el contexto y los objetivos reales de cada empresa.",
    subtitle: "Los canales principales suelen ser:",
    items: ['Sitio web', 'Redes sociales (principalmente Facebook e Instagram)', 'Ficha de Google Business', 'WhatsApp organizacional', 'Correos electrónicos institucionales'],
    conclusion: "No solo los pongo en marcha: los integro para que todos hablen el mismo idioma y funcionen como un sistema, no como islas."
  },
  {
    id: "contenidos",
    title: "Contenidos técnicos, educativos y comerciales",
    description: "Desarrollo contenidos especializados y contextualizados para cada empresa y cada canal:",
    items: ['Explicación clara de productos y servicios', 'Contenido técnico y educativo', 'Material orientado a ventas y postventa'],
    conclusion: "Todo el contenido responde a una lógica: ordenar la comunicación, generar confianza y facilitar la venta."
  },
  {
    id: "material",
    title: "Material comercial y soporte al negocio",
    description: "Acompaño a la empresa con materiales y acciones que fortalecen su comunicación comercial:",
    items: ['Material gráfico y digital para ventas', 'Catálogos, presentaciones y piezas institucionales', 'Acompañamiento en ferias, eventos y conferencias', 'Publicidad en redes sociales y medios tradicionales']
  },
  {
    id: "marca",
    title: "Marca, coherencia y profesionalización",
    description: "Trabajo sobre la identidad visual y la voz de marca, creando u organizando:",
    items: ['Manuales de marca', 'Lineamientos visuales y de comunicación', 'Criterios claros para mantener coherencia en el tiempo'],
    conclusion: "La marca deja de depender de \"quién sube algo\" y empieza a comunicar con criterio."
  },
  {
    id: "audiovisual",
    title: "Producción audiovisual aplicada al negocio",
    description: "Realizo fotografía y filmaciones profesionales de productos, servicios y procesos, pensadas para:",
    items: ['Redes sociales', 'Web', 'Material comercial', 'Presentaciones institucionales'],
    conclusion: "No es contenido decorativo: es contenido que explica y vende."
  },
  {
    id: "acompañamiento",
    title: "Acompañamiento estratégico",
    description: "Además de ejecutar, pienso el negocio:",
    items: ['Detecto oportunidades de mejora', 'Sugiero acciones digitales concretas', 'Aporto mirada externa con criterio comercial y comunicacional'],
    conclusion: "Trabajo como si fuera parte de la empresa, no como un proveedor externo."
  }
]

export default function HomePage() {
  const headerRef = useRef<HTMLDivElement>(null)
  const h1Ref = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const ghostRef = useRef<HTMLDivElement>(null)
  const noiseCanvasRef = useRef<HTMLCanvasElement>(null)
  const [openAccordionItem, setOpenAccordionItem] = useState<string | undefined>(undefined)
  const [openFAQItem, setOpenFAQItem] = useState<string | undefined>(undefined)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [expandedServiceCards, setExpandedServiceCards] = useState<Set<string>>(new Set())
  const [isMounted, setIsMounted] = useState(false)
  const [hoveredAccordionItem, setHoveredAccordionItem] = useState<number | null>(null)
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  // Detectar montaje del cliente para evitar problemas de hidratación
  useEffect(() => {
    setIsMounted(true)
  }, [])


  // Generar ruido en canvas
  useEffect(() => {
    if (noiseCanvasRef.current) {
      const canvas = noiseCanvasRef.current
      const ctx = canvas.getContext('2d')
      if (!ctx) return

      const width = window.innerWidth
      const height = window.innerHeight
      canvas.width = width
      canvas.height = height

      const imageData = ctx.createImageData(width, height)
      const data = imageData.data

      for (let i = 0; i < data.length; i += 4) {
        const value = Math.random() * 255
        data[i] = value     // R
        data[i + 1] = value // G
        data[i + 2] = value // B
        data[i + 3] = 30    // Alpha (muy bajo para sutil)
      }

      ctx.putImageData(imageData, 0, 0)
    }
  }, [])

  useEffect(() => {
    // Inicializar Lenis para scroll suave
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

    // Función para animar elementos cuando entran en viewport
    const animateOnScroll = (element: HTMLElement | null, animation: () => void, immediate = false) => {
      if (!element) return

      // Si es inmediato (hero section), animar directamente
      if (immediate) {
        // Pequeño delay para asegurar que el DOM esté listo
        setTimeout(() => animation(), 100)
        return
      }

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              animation()
              observer.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.1, rootMargin: '50px' }
      )

      observer.observe(element)
    }

    // Animación del header (inmediata ya que está visible desde el inicio)
    animateOnScroll(headerRef.current, () => {
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          {
            opacity: 0,
            y: -30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
          }
        )
      }
    }, true)

    // Animación del h1 (inmediata)
    animateOnScroll(h1Ref.current, () => {
      if (h1Ref.current) {
        gsap.fromTo(
          h1Ref.current,
          {
            opacity: 0,
            y: 50,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            delay: 0.2,
          }
        )
      }
    }, true)

    // Animación de la bajada (subtitle) (inmediata)
    animateOnScroll(subtitleRef.current, () => {
      if (subtitleRef.current) {
        gsap.fromTo(
          subtitleRef.current,
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            delay: 0.4,
          }
        )
      }
    }, true)

    // Animación del botón (inmediata)
    animateOnScroll(buttonRef.current, () => {
      if (buttonRef.current) {
        gsap.fromTo(
          buttonRef.current,
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            delay: 0.6,
          }
        )
      }
    }, true)

    // Animación del fantasma (inmediata)
    animateOnScroll(ghostRef.current, () => {
      if (ghostRef.current) {
        gsap.fromTo(
          ghostRef.current,
          {
            opacity: 0,
            scale: 0.8,
          },
          {
            opacity: 0.15,
            scale: 1,
            duration: 1.2,
            ease: "power2.out",
            delay: 0.8,
          }
        )
      }
    }, true)

    // Cleanup de Lenis
    return () => {
      lenis.destroy()
    }
  }, [])

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

  return (
    <div className={`min-h-screen bg-[#282828] ${inter.className}`}>
      {/* Hero Section */}
          <section className="relative bg-[#141414] w-full min-h-screen h-screen text-white flex flex-col justify-center overflow-hidden">
            {/* Noise/Texture Effect */}
            <canvas
              ref={noiseCanvasRef}
              className="absolute inset-0 pointer-events-none z-0"
              style={{
                mixBlendMode: 'overlay',
                opacity: 0.2,
              }}
            />
            <motion.div
              className="absolute inset-0 pointer-events-none z-0"
              animate={{
                opacity: [0.15, 0.25, 0.15],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                background: 'radial-gradient(circle at 50% 50%, rgba(204, 255, 0, 0.03) 0%, transparent 70%)',
              }}
            />
        {/* Header - Sticky en toda la web */}
        <header className="fixed top-0 left-0 w-full flex justify-center z-50" suppressHydrationWarning>
          <motion.div 
            ref={mobileMenuRef}
            className="w-[98%] md:w-[80%] bg-[#e0e0e0] shadow-lg overflow-hidden px-4 md:px-8 rounded-b-[1.5rem]"
            initial={{
              borderRadius: "0 0 1.5rem 1.5rem",
            }}
            animate={isMounted ? {
              borderRadius: isMobileMenuOpen ? "0 0 1rem 1rem" : "0 0 1.5rem 1.5rem",
            } : {
              borderRadius: "0 0 1.5rem 1.5rem",
            }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          >
              <div className="py-2 md:py-3 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center">
                  <Image 
                    src="/pipstudio2/Logo pipstudio.png" 
                    alt="pipstudio logo" 
                    width={120} 
                    height={40} 
                    className="h-8 md:h-10 w-auto rounded-lg"
                    priority
                  />
                </div>
                
                {/* Navigation */}
                <nav className="hidden md:flex items-center gap-4 lg:gap-6">
                  <a 
                    href="#soluciones-digitales" 
                    className="text-[#282828] text-xs md:text-sm font-medium relative block h-5 overflow-hidden group"
                  >
                    <div className="relative">
                      <span className="block group-hover:-translate-y-5" style={{ transition: 'transform 0.4s cubic-bezier(0.25, 0.1, 0.25, 1)' }}>
                        Soluciones digitales
                      </span>
                      <span className="block absolute top-0 left-0 w-full translate-y-5 group-hover:translate-y-0" style={{ transition: 'transform 0.4s cubic-bezier(0.25, 0.1, 0.25, 1)' }}>
                        Soluciones digitales
                      </span>
                    </div>
                  </a>
                  <a 
                    href="#sistema" 
                    className="text-[#282828] text-xs md:text-sm font-medium relative block h-5 overflow-hidden group"
                  >
                    <div className="relative">
                      <span className="block group-hover:-translate-y-5" style={{ transition: 'transform 0.4s cubic-bezier(0.25, 0.1, 0.25, 1)' }}>
                        Sistema
                      </span>
                      <span className="block absolute top-0 left-0 w-full translate-y-5 group-hover:translate-y-0" style={{ transition: 'transform 0.4s cubic-bezier(0.25, 0.1, 0.25, 1)' }}>
                        Sistema
                      </span>
                    </div>
                  </a>
                  <a 
                    href="#casos-de-exito" 
                    className="text-[#282828] text-xs md:text-sm font-medium relative block h-5 overflow-hidden group"
                  >
                    <div className="relative">
                      <span className="block group-hover:-translate-y-5" style={{ transition: 'transform 0.4s cubic-bezier(0.25, 0.1, 0.25, 1)' }}>
                        Casos de éxito
                      </span>
                      <span className="block absolute top-0 left-0 w-full translate-y-5 group-hover:translate-y-0" style={{ transition: 'transform 0.4s cubic-bezier(0.25, 0.1, 0.25, 1)' }}>
                        Casos de éxito
                      </span>
                    </div>
                  </a>
                  <a 
                    href="#servicios" 
                    className="text-[#282828] text-xs md:text-sm font-medium relative block h-5 overflow-hidden group"
                  >
                    <div className="relative">
                      <span className="block group-hover:-translate-y-5" style={{ transition: 'transform 0.4s cubic-bezier(0.25, 0.1, 0.25, 1)' }}>
                        Servicios
                      </span>
                      <span className="block absolute top-0 left-0 w-full translate-y-5 group-hover:translate-y-0" style={{ transition: 'transform 0.4s cubic-bezier(0.25, 0.1, 0.25, 1)' }}>
                        Servicios
                      </span>
                    </div>
                  </a>
                  <a 
                    href="#preguntas-frecuentes" 
                    className="text-[#282828] text-xs md:text-sm font-medium relative block h-5 overflow-hidden group"
                  >
                    <div className="relative">
                      <span className="block group-hover:-translate-y-5" style={{ transition: 'transform 0.4s cubic-bezier(0.25, 0.1, 0.25, 1)' }}>
                        Preguntas frecuentes
                      </span>
                      <span className="block absolute top-0 left-0 w-full translate-y-5 group-hover:translate-y-0" style={{ transition: 'transform 0.4s cubic-bezier(0.25, 0.1, 0.25, 1)' }}>
                        Preguntas frecuentes
                      </span>
                    </div>
                  </a>
                  <a
                    href="https://wa.me/5493493415669"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#CCFF00] text-[#282828] py-1.5 md:py-2 px-4 md:px-5 rounded-full font-medium text-xs md:text-sm flex items-center gap-1.5 whitespace-nowrap"
                  >
                    Hablemos!
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
                    <Link href="#soluciones-digitales" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center justify-between py-4 text-[#282828] hover:text-[#CCFF00] transition">
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
                    <Link href="#sistema" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center justify-between py-4 text-[#282828] hover:text-[#CCFF00] transition">
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
                    <Link href="#casos-de-exito" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center justify-between py-4 text-[#282828] hover:text-[#CCFF00] transition">
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
                    <Link href="#servicios" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center justify-between py-4 text-[#282828] hover:text-[#CCFF00] transition">
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
                    <Link href="#preguntas-frecuentes" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center justify-between py-4 text-[#282828] hover:text-[#CCFF00] transition">
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
        
        {/* Content - Left aligned */}
        <div className="relative z-10 w-[98%] md:w-[80%] mx-auto px-4 md:px-8 pt-16 md:pt-24">
          <h1 ref={h1Ref} className="text-5xl sm:text-6xl md:text-5xl lg:text-[70px] xl:text-[95px] font-normal mb-6 md:mb-8 leading-[1.2] md:leading-[1.25] text-left" style={{ letterSpacing: '-0.08em', opacity: 1 }}>
            Comunicación y transformación{" "}
            <span className="hidden lg:inline"><br /></span>{" "}
            digital para <span className="text-[#CCFF00] font-semibold">PyMEs</span>
          </h1>
          <p ref={subtitleRef} className="text-lg md:text-xl lg:text-2xl text-white/80 mb-6 md:mb-8 max-w-3xl" style={{ opacity: 1 }}>
            El área de comunicación y marketing de empresas que deciden profesionalizar su presencia digital.
          </p>
          <button 
            ref={buttonRef} 
            onClick={() => {
              const element = document.getElementById('soluciones-digitales')
              if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }
            }}
            className="flex items-center gap-2 border border-white bg-[#2a2a2a] hover:bg-[#333] px-4 md:px-6 py-2.5 md:py-3 rounded-full transition group text-sm md:text-base"
            style={{ opacity: 1 }}
          >
            <span className="text-white font-medium">Quiero saber más!</span>
            <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 text-[#CCFF00]" />
          </button>
        </div>
        
        {/* Ghost silhouette - Bottom right */}
        <div ref={ghostRef} className="absolute top-1/2 -translate-y-1/2 right-0 w-48 h-64 md:w-64 md:h-80 lg:w-80 lg:h-96 z-0 pointer-events-none" style={{ opacity: 0.15 }}>
          <div className="relative w-full h-full">
            <Image
              src="/pipstudio2/ccff00.png"
              alt="Ghost"
              fill
              className="object-contain object-right"
              priority
            />
          </div>
        </div>
      </section>

      {/* Soluciones digitales Section */}
      <section id="soluciones-digitales" className="bg-white text-black w-full pt-16 pb-16 px-4 md:px-8">
        <div className="w-[98%] md:w-[80%] mx-auto flex flex-col">
          <motion.div 
            className="flex justify-between items-start mb-4"
            initial={isMounted ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
            whileInView={isMounted ? { opacity: 1, y: 0 } : undefined}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ opacity: isMounted ? undefined : 1 }}
          >
            <p className="text-sm text-gray-500">/Soluciones digitales</p>
            <p className="text-sm text-gray-500">(02)</p>
          </motion.div>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-10 gap-6 mb-4"
            initial={isMounted ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
            whileInView={isMounted ? { opacity: 1, y: 0 } : undefined}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ opacity: isMounted ? undefined : 1 }}
          >
            <div className="md:col-span-7">
              <h2 className="text-4xl sm:text-5xl md:text-4xl lg:text-5xl font-medium" style={{ letterSpacing: '-0.08em' }}>
                Soluciones digitales pensadas para ordenar, comunicar y hacer crecer negocios.
              </h2>
            </div>
            <div className="hidden md:block md:col-span-3">
              {/* Columna derecha del h2 - 30% */}
            </div>
          </motion.div>
          <motion.p 
            className="text-lg md:text-xl text-gray-600 mb-12"
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ opacity: 1 }}
          >
            Estrategia, diseño y ejecución alineadas a objetivos reales.
          </motion.p>

          <div className="rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Columna Izquierda */}
              <div className="flex flex-col gap-1 rounded-2xl overflow-hidden bg-[#EBEBEB] p-1">
              {/* Caja superior - Dark Gray */}
              <div
                className="text-white p-4 rounded-xl relative flex-1 flex flex-col justify-between overflow-hidden"
                style={{
                  backgroundImage: `url('/pipstudio2/Diseño sin título (8).png')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                {/* Overlay oscuro para legibilidad */}
                <div className="absolute inset-0 bg-[#2a2a2a]/80 rounded-xl"></div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-2">Comunicación con criterio</h3>
                  <p className="text-sm text-white/80 mb-6">Pensada desde el negocio, no desde la moda.</p>
                </div>
                <div className="flex justify-end relative z-10">
                  <a 
                    href="https://wa.me/5493493415669"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 border border-white bg-[#2a2a2a] hover:bg-[#333] px-4 md:px-6 py-2.5 md:py-3 rounded-full transition group text-sm md:text-base"
                  >
                    <span className="text-white font-medium">Hablemos!</span>
                    <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 text-[#CCFF00]" />
                  </a>
                </div>
              </div>

              {/* Caja inferior - White */}
              <div
                className="bg-white p-4 rounded-xl flex-1"
              >
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-gray-700 flex items-center justify-center mt-0.5 flex-shrink-0">
                      <Plus className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-700">Diagnóstico antes de ejecutar</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-gray-700 flex items-center justify-center mt-0.5 flex-shrink-0">
                      <Plus className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-700">Comunicación clara y directa</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-gray-700 flex items-center justify-center mt-0.5 flex-shrink-0">
                      <Plus className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-700">Enfoque estratégico</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-gray-700 flex items-center justify-center mt-0.5 flex-shrink-0">
                      <Plus className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-700">Ejecución constante</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-gray-700 flex items-center justify-center mt-0.5 flex-shrink-0">
                      <Plus className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-700">Acompañamiento real</span>
                  </li>
                </ul>
              </div>
            </div>

              {/* Columna Media - Tres cajas apiladas en verde lima */}
              <div className="flex flex-col gap-1 rounded-2xl overflow-hidden bg-[#EBEBEB] p-1">
              {/* Caja 1 - Trabajo colaborativo */}
              <div
                className="bg-[#CCFF00] text-black p-4 rounded-xl flex-1"
              >
                <Users className="w-6 h-6 mb-4 text-gray-800" />
                <h3 className="text-xl font-bold mb-3">Trabajo colaborativo</h3>
                <p className="text-sm text-black/70">
                  Me integro al proyecto como parte del equipo, entendiendo el negocio, los productos y el proceso comercial antes de comunicar.
                </p>
              </div>

              {/* Caja 2 - Soluciones que escalan */}
              <div
                className="bg-[#CCFF00] text-black p-4 rounded-xl flex-1"
              >
                <Lightbulb className="w-6 h-6 mb-4 text-gray-800" />
                <h3 className="text-xl font-bold mb-3">Soluciones que escalan</h3>
                <p className="text-sm text-black/70">
                  Diseñamos y ordenamos la estructura digital pensando en el presente, pero también en el crecimiento futuro del negocio.
                </p>
              </div>

              {/* Caja 3 - Decisiones con fundamento */}
              <div
                className="bg-[#CCFF00] text-black p-4 rounded-xl flex-1"
              >
                <Heart className="w-6 h-6 mb-4 text-gray-800" />
                <h3 className="text-xl font-bold mb-3">Decisiones con fundamento</h3>
                <p className="text-sm text-black/70">
                  Cada acción responde a un diagnóstico, objetivos claros y una estrategia digital alineada al negocio.
                </p>
              </div>
            </div>

              {/* Columna Derecha */}
              <div className="flex flex-col rounded-2xl overflow-hidden bg-[#EBEBEB] p-1">
                <div
                  className="h-full min-h-[280px] md:min-h-0 rounded-xl relative overflow-hidden"
                  style={{
                    backgroundImage: `url('/pipstudio2/Diseño sin título (9).png')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center 70%',
                    backgroundRepeat: 'no-repeat'
                  }}
                >
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sistema Section */}
      <section id="sistema" className="bg-white text-black pt-16 pb-16 px-4 md:px-8 w-full min-h-screen flex flex-col">
        <div className="w-full flex justify-center flex-1">
          <div className="w-[98%] md:w-[80%] flex flex-col justify-between h-full">
            {/* Lista de servicios */}
            <div className="flex-1 flex flex-col justify-center">
              <motion.div 
                className="bg-[#141414] rounded-xl p-6 md:p-12 lg:p-16 xl:p-20"
                initial={{ opacity: 1, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                style={{ opacity: 1 }}
              >
                {/* Header */}
                <motion.div 
                  className="flex justify-between items-start mb-8 md:mb-12 lg:mb-16"
                  initial={isMounted ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
                  whileInView={isMounted ? { opacity: 1, y: 0 } : undefined}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                  style={{ opacity: isMounted ? undefined : 1 }}
                >
                  <p className="text-xs md:text-sm text-gray-400">/Sistema</p>
                  <p className="text-xs md:text-sm text-gray-400">(03)</p>
                </motion.div>
                <Accordion 
                  type="single" 
                  collapsible 
                  className="w-full space-y-1 md:space-y-2"
                  value={openAccordionItem}
                  onValueChange={(value) => setOpenAccordionItem(value)}
                >
                  {servicios.map((item, idx) => {
                    const itemValue = `item-${idx}`
                    const isOpen = openAccordionItem === itemValue
                    const isHovered = hoveredAccordionItem === idx

                    return (
                      <AccordionItem key={idx} value={itemValue} className="border-none group/item">
                        <AccordionTrigger 
                          className="flex items-center justify-between py-2 md:py-3 hover:no-underline [&>svg]:hidden group w-full"
                          onMouseEnter={() => setHoveredAccordionItem(idx)}
                          onMouseLeave={() => setHoveredAccordionItem(null)}
                        >
                          <span className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[64px] text-white transition-transform duration-1000 ease-in-out whitespace-nowrap flex-1 min-w-0 text-left ${isOpen || isHovered ? 'translate-x-1 sm:translate-x-2 md:translate-x-4 lg:translate-x-8' : 'translate-x-0'}`} style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1)', letterSpacing: '-0.032em', fontWeight: 600 }}>
                            {item.text}
                          </span>
                          <div className="relative w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 flex items-center justify-center flex-shrink-0 ml-1 sm:ml-2 md:ml-4">
                            <span className={`text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[64px] font-semibold text-gray-400 absolute transition-all duration-1000 ease-in-out ${isOpen || isHovered ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}`} style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1)' }}>
                              {item.num}
                            </span>
                            <Plus className={`w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 text-gray-400 absolute transition-all duration-1000 ease-in-out ${isOpen ? 'opacity-0 scale-0 rotate-90' : isHovered ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-0 rotate-90'}`} style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1)' }} />
                            <X className={`w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 text-gray-400 absolute transition-all duration-1000 ease-in-out ${isOpen ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-0 rotate-90'}`} style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1)' }} />
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="pt-2 md:pt-3 pb-6 md:pb-8">
                            <div 
                              className={`ml-2 md:ml-4 lg:ml-6 xl:ml-8 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
                            >
                            <p className="text-white text-sm sm:text-base md:text-lg mb-6 md:mb-8 max-w-3xl leading-relaxed">
                              {item.description}
                            </p>
                            <div className="flex flex-wrap gap-2 md:gap-3">
                              {item.tags.map((tag, tagIdx) => (
                                <span key={tagIdx} className="bg-gray-600 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm">
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    )
                  })}
                </Accordion>
                
                {/* Botón Hablemos! */}
                <div className="flex justify-start mt-8 md:mt-10 lg:mt-12">
                  <a 
                    href="https://wa.me/5493493415669"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 md:gap-3 border border-white bg-[#2a2a2a] hover:bg-[#333] px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 rounded-full transition group text-sm md:text-base lg:text-lg"
                  >
                    <span className="text-white font-medium">Hablemos!</span>
                    <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-[#CCFF00]" />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Casos de éxito Section */}
      <section id="casos-de-exito" className="bg-white text-black pt-16 pb-16 px-4 md:px-8 w-full">
        <div className="w-[98%] md:w-[80%] mx-auto">
          <motion.div 
            className="flex justify-between items-start mb-4"
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ opacity: 1 }}
          >
            <p className="text-sm text-gray-500">/Casos de éxito</p>
            <p className="text-sm text-gray-500">(04)</p>
          </motion.div>
          <motion.h2 
            className="text-4xl sm:text-5xl md:text-4xl lg:text-5xl font-medium mb-12" 
            style={{ letterSpacing: '-0.08em', opacity: 1 }}
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Empresas que eligieron transformarse digitalmente.
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Caso 1 */}
            <Link 
              href="/proyectos/san-cayetano"
              className="flex flex-col rounded-2xl overflow-hidden bg-[#EBEBEB] hover:bg-[#141414] p-1 group cursor-pointer"
              style={{ transition: 'background-color 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)' }}
            >
              <div className="aspect-[4/3] bg-gray-800 rounded-xl overflow-hidden mb-4 relative">
                <div 
                  className="w-full h-full"
                  style={{
                    backgroundImage: `url('/pipstudio2/Diseño sin título (11).png')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  }}
                >
                </div>
              </div>
              <div className="px-2 pb-2">
                <div className="flex items-center justify-between mb-2 relative overflow-hidden">
                  <div className="relative overflow-hidden">
                    <h3 
                      className="text-xl font-bold text-black group-hover:-translate-y-full"
                      style={{ transition: 'transform 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)' }}
                    >San Cayetano Aberturas</h3>
                    <h3 
                      className="text-xl font-bold text-white absolute top-0 left-0 translate-y-full group-hover:translate-y-0"
                      style={{ transition: 'transform 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)' }}
                    >San Cayetano Aberturas</h3>
                  </div>
                  <div className="relative overflow-hidden">
                    <p 
                      className="text-xs text-gray-500 group-hover:-translate-y-full"
                      style={{ transition: 'transform 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)' }}
                    >2024 – Presente</p>
                    <p 
                      className="text-xs text-white absolute top-0 right-0 translate-y-full group-hover:translate-y-0"
                      style={{ transition: 'transform 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)' }}
                    >2024 – Presente</p>
                  </div>
                </div>
                <div className="relative overflow-hidden">
                  <p 
                    className="text-sm text-gray-600 group-hover:-translate-y-full"
                    style={{ transition: 'transform 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)' }}
                  >
                    Presencia digital, sitio institucional y proyectos increíbles.
                  </p>
                  <p 
                    className="text-sm text-white absolute top-0 left-0 translate-y-full group-hover:translate-y-0"
                    style={{ transition: 'transform 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)' }}
                  >
                    Presencia digital, sitio institucional y proyectos increíbles.
                  </p>
                </div>
              </div>
            </Link>

            {/* Caso 2 */}
            <div 
              className="flex flex-col rounded-2xl overflow-hidden bg-[#EBEBEB] hover:bg-[#141414] p-1 group"
              style={{ transition: 'background-color 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)' }}
            >
              <div className="aspect-[4/3] bg-gray-800 rounded-xl overflow-hidden mb-4 relative">
                <div 
                  className="w-full h-full"
                  style={{
                    backgroundImage: `url('/pipstudio2/AGRO.png')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center 30%',
                    backgroundRepeat: 'no-repeat'
                  }}
                >
                </div>
              </div>
              <div className="px-2 pb-2">
                <div className="relative overflow-hidden mb-2">
                  <h3 
                    className="text-xl font-bold text-black group-hover:-translate-y-full"
                    style={{ transition: 'transform 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)' }}
                  >Foglia Válvulas</h3>
                  <h3 
                    className="text-xl font-bold text-white absolute top-0 left-0 translate-y-full group-hover:translate-y-0"
                    style={{ transition: 'transform 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)' }}
                  >Foglia Válvulas</h3>
                </div>
                <div className="relative overflow-hidden">
                  <p 
                    className="text-sm text-gray-600 group-hover:-translate-y-full"
                    style={{ transition: 'transform 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)' }}
                  >
                    Presencia digital, material comercial y desarrollo de marca.
                  </p>
                  <p 
                    className="text-sm text-white absolute top-0 left-0 translate-y-full group-hover:translate-y-0"
                    style={{ transition: 'transform 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)' }}
                  >
                    Presencia digital, material comercial y desarrollo de marca.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="bg-white text-black py-16 px-4 md:px-8 w-full">
        <div className="w-[98%] md:w-[80%] mx-auto">
          <p className="text-sm text-gray-500 mb-4" style={{ opacity: 1 }}>/Partnership</p>
          <h2 className="text-4xl sm:text-5xl md:text-4xl lg:text-5xl font-medium mb-12" style={{ letterSpacing: '-0.08em', opacity: 1 }}>
            Partnership oficial
          </h2>
          
          <div className="rounded-2xl overflow-hidden bg-[#EBEBEB] hover:bg-[#141414] p-1 group transition-all duration-500" style={{ transition: 'background-color 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)' }}>
            <div className="bg-white group-hover:bg-[#141414] rounded-xl p-8 md:p-12 transition-all duration-500" style={{ transition: 'background-color 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)' }}>
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
                <motion.div 
                  className="flex-shrink-0"
                  initial={{ opacity: 1, scale: 1 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                  style={{ opacity: 1 }}
                >
                  <div className="rounded-xl p-6 md:p-8 relative">
                    <div className="relative w-full h-full">
                      <Image
                        src="/pipstudio2/Copia de Logo negro horizontal.png"
                        alt="Skater Elephant Logo"
                        width={280}
                        height={140}
                        className="w-auto h-auto max-w-full opacity-100 group-hover:opacity-0 transition-opacity duration-500 relative z-10"
                        style={{ backgroundColor: 'transparent' }}
                      />
                      <Image
                        src="/pipstudio2/Copia de Logo blanco horizontal (1).png"
                        alt="Skater Elephant Logo White"
                        width={280}
                        height={140}
                        className="w-auto h-auto max-w-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 absolute top-0 left-0 z-20"
                        style={{ backgroundColor: 'transparent' }}
                      />
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex-1 w-full"
                  initial={{ opacity: 1, y: 0 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                  style={{ opacity: 1 }}
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-1 h-6 bg-[#CCFF00] rounded-full"></div>
                      <h3 className="text-lg md:text-xl font-semibold text-black group-hover:text-[#CCFF00] transition-colors duration-500" style={{ transition: 'color 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)' }}>
                        Vinculación estratégica
                      </h3>
                    </div>
                    <p className="text-gray-700 group-hover:text-gray-300 leading-relaxed text-base md:text-lg transition-colors duration-500" style={{ transition: 'color 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)' }}>
                      PiP Studio mantiene una vinculación profesional con Skater Elephant, enfocada en el intercambio estratégico y la exploración de sinergias entre comunicación, producto y transformación digital.
                    </p>
                    <p className="text-gray-600 group-hover:text-gray-400 leading-relaxed text-sm md:text-base italic transition-colors duration-500" style={{ transition: 'color 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)' }}>
                      Una relación en etapa temprana, con mirada compartida y proyección futura.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios Section */}
      <section id="servicios" className="bg-white text-black w-full pt-16 pb-16 px-4 md:px-8">
        <div className="w-[98%] md:w-[80%] mx-auto flex flex-col">
          <div className="flex justify-between items-start mb-4">
            <p className="text-sm text-gray-500">/Servicios</p>
            <p className="text-sm text-gray-500">(05)</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-10 gap-6 mb-4">
            <div className="md:col-span-7">
              <h2 className="text-4xl sm:text-5xl md:text-4xl lg:text-5xl font-medium" style={{ letterSpacing: '-0.08em' }}>
                Transformación digital con sentido estratégico
              </h2>
            </div>
            <div className="hidden md:block md:col-span-3">
              {/* Columna derecha del h2 - 30% */}
            </div>
          </div>
          <p className="text-lg md:text-xl text-gray-600 mb-12">
            Estrategia, diseño y ejecución alineadas a objetivos reales.
          </p>

          <div className="rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Columna Izquierda */}
              <div className="flex flex-col gap-1 rounded-2xl overflow-hidden bg-[#EBEBEB] p-1">
              {/* Caja superior */}
              <div
                className={`p-4 rounded-xl relative flex flex-col justify-between overflow-hidden transition-colors duration-600 ${expandedServiceCards.has(serviciosCards[0].id) ? 'bg-white' : 'bg-[#2a2a2a]'}`}
                style={{
                  backgroundImage: expandedServiceCards.has(serviciosCards[0].id) ? 'none' : `url('/pipstudio2/Diseño sin título (8).png')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  transition: 'background-color 0.6s cubic-bezier(0.22, 1, 0.36, 1)'
                }}
              >
                {/* Overlay oscuro para legibilidad - solo cuando está cerrada */}
                {!expandedServiceCards.has(serviciosCards[0].id) && (
                  <div className="absolute inset-0 bg-[#2a2a2a]/80 rounded-xl"></div>
                )}
                <div className="relative z-10 flex flex-col">
                  <h3 className={`text-xl font-bold mb-6 transition-colors duration-600 ${expandedServiceCards.has(serviciosCards[0].id) ? 'text-black' : 'text-white'}`}>
                    {serviciosCards[0].title}
                  </h3>
                  
                  <div
                    className={`overflow-hidden transition-all duration-1200 ${expandedServiceCards.has(serviciosCards[0].id) ? 'max-h-[2000px]' : 'max-h-0'}`}
                    style={{
                      transition: 'max-height 1.2s cubic-bezier(0.22, 1, 0.36, 1)'
                    }}
                  >
                    <div
                      className={`mb-4 transition-opacity duration-300 ${expandedServiceCards.has(serviciosCards[0].id) ? 'opacity-100' : 'opacity-0'}`}
                    >
                      <p className={`text-sm mb-4 leading-relaxed ${expandedServiceCards.has(serviciosCards[0].id) ? 'text-gray-700' : 'text-gray-300'}`}>
                        {serviciosCards[0].description}
                      </p>
                      <p className={`text-xs mb-3 font-medium ${expandedServiceCards.has(serviciosCards[0].id) ? 'text-gray-600' : 'text-gray-400'}`}>
                        {serviciosCards[0].subtitle}
                      </p>
                      <ul className="space-y-2 mb-4">
                        {serviciosCards[0].items?.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <div className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${expandedServiceCards.has(serviciosCards[0].id) ? 'bg-gray-700' : 'bg-[#CCFF00]'}`}></div>
                            <span className={`text-xs ${expandedServiceCards.has(serviciosCards[0].id) ? 'text-gray-700' : 'text-gray-300'}`}>{item}</span>
                          </li>
                        ))}
                      </ul>
                      {serviciosCards[0].conclusion && (
                        <p className={`text-xs italic ${expandedServiceCards.has(serviciosCards[0].id) ? 'text-gray-600' : 'text-gray-400'}`}>
                          {serviciosCards[0].conclusion}
                        </p>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex justify-end mt-6">
                    <button 
                      onClick={() => {
                        setExpandedServiceCards(prev => {
                          const newSet = new Set(prev)
                          if (newSet.has(serviciosCards[0].id)) {
                            newSet.delete(serviciosCards[0].id)
                          } else {
                            newSet.add(serviciosCards[0].id)
                          }
                          return newSet
                        })
                      }}
                      className="relative w-8 h-8 md:w-10 md:h-10 flex items-center justify-center cursor-pointer"
                    >
                      <ChevronDown 
                        className={`w-5 h-5 md:w-6 md:h-6 absolute transition-all duration-500 ease-in-out ${expandedServiceCards.has(serviciosCards[0].id) ? 'opacity-0 scale-0 rotate-90 text-gray-600' : 'opacity-100 scale-100 rotate-0 text-[#CCFF00]'}`}
                        style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1)' }}
                      />
                      <X 
                        className={`w-5 h-5 md:w-6 md:h-6 absolute transition-all duration-500 ease-in-out ${expandedServiceCards.has(serviciosCards[0].id) ? 'opacity-100 scale-100 rotate-0 text-gray-600' : 'opacity-0 scale-0 rotate-90 text-[#CCFF00]'}`}
                        style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1)' }}
                      />
                    </button>
                  </div>
                </div>
              </div>

              {/* Caja inferior */}
              <div
                className={`p-4 rounded-xl flex flex-col overflow-hidden flex-1 relative transition-colors duration-600 ${expandedServiceCards.has(serviciosCards[1].id) ? 'bg-white' : 'bg-[#2a2a2a]'}`}
                style={{
                  backgroundImage: expandedServiceCards.has(serviciosCards[1].id) ? 'none' : `url('/pipstudio2/Diseño sin título (8).png')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  transition: 'background-color 0.6s cubic-bezier(0.22, 1, 0.36, 1)'
                }}
              >
                {/* Overlay oscuro para legibilidad - solo cuando está cerrada */}
                {!expandedServiceCards.has(serviciosCards[1].id) && (
                  <div className="absolute inset-0 bg-[#2a2a2a]/80 rounded-xl"></div>
                )}
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <h3 className={`text-xl font-bold mb-6 transition-colors duration-600 ${expandedServiceCards.has(serviciosCards[1].id) ? 'text-black' : 'text-white'}`}>
                    {serviciosCards[1].title}
                  </h3>
                  
                  <div
                    className={`overflow-hidden transition-all duration-1200 ${expandedServiceCards.has(serviciosCards[1].id) ? 'max-h-[2000px]' : 'max-h-0'}`}
                    style={{
                      transition: 'max-height 1.2s cubic-bezier(0.22, 1, 0.36, 1)'
                    }}
                  >
                    <div
                      className={`mb-4 transition-opacity duration-300 ${expandedServiceCards.has(serviciosCards[1].id) ? 'opacity-100' : 'opacity-0'}`}
                    >
                      <p className={`text-sm mb-4 leading-relaxed ${expandedServiceCards.has(serviciosCards[1].id) ? 'text-gray-700' : 'text-gray-300'}`}>
                        {serviciosCards[1].description}
                      </p>
                      <ul className="space-y-2 mb-4">
                        {serviciosCards[1].items?.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div className={`w-5 h-5 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0 ${expandedServiceCards.has(serviciosCards[1].id) ? 'bg-gray-700' : 'bg-[#CCFF00]'}`}>
                              <Plus className={`w-3 h-3 ${expandedServiceCards.has(serviciosCards[1].id) ? 'text-white' : 'text-black'}`} />
                            </div>
                            <span className={`text-sm ${expandedServiceCards.has(serviciosCards[1].id) ? 'text-gray-700' : 'text-gray-300'}`}>{item}</span>
                          </li>
                        ))}
                      </ul>
                      {serviciosCards[1].conclusion && (
                        <p className={`text-xs italic ${expandedServiceCards.has(serviciosCards[1].id) ? 'text-gray-600' : 'text-gray-400'}`}>
                          {serviciosCards[1].conclusion}
                        </p>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex justify-end mt-auto">
                    <button 
                      onClick={() => {
                        setExpandedServiceCards(prev => {
                          const newSet = new Set(prev)
                          if (newSet.has(serviciosCards[1].id)) {
                            newSet.delete(serviciosCards[1].id)
                          } else {
                            newSet.add(serviciosCards[1].id)
                          }
                          return newSet
                        })
                      }}
                      className="relative w-8 h-8 md:w-10 md:h-10 flex items-center justify-center cursor-pointer"
                    >
                      <ChevronDown 
                        className={`w-5 h-5 md:w-6 md:h-6 absolute transition-all duration-500 ease-in-out ${expandedServiceCards.has(serviciosCards[1].id) ? 'opacity-0 scale-0 rotate-90 text-gray-600' : 'opacity-100 scale-100 rotate-0 text-[#CCFF00]'}`}
                        style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1)' }}
                      />
                      <X 
                        className={`w-5 h-5 md:w-6 md:h-6 absolute transition-all duration-500 ease-in-out ${expandedServiceCards.has(serviciosCards[1].id) ? 'opacity-100 scale-100 rotate-0 text-gray-600' : 'opacity-0 scale-0 rotate-90 text-[#CCFF00]'}`}
                        style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1)' }}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>

              {/* Columna Media - Tres cajas apiladas */}
              <div className="flex flex-col gap-1 rounded-2xl overflow-hidden bg-[#EBEBEB] p-1">
              {/* Caja 1 - Material comercial */}
              <div
                className={`p-4 rounded-xl flex flex-col overflow-hidden relative transition-colors duration-600 ${expandedServiceCards.has(serviciosCards[2].id) ? 'bg-white' : 'bg-[#2a2a2a]'}`}
                style={{
                  backgroundImage: expandedServiceCards.has(serviciosCards[2].id) ? 'none' : `url('/pipstudio2/Diseño sin título (8).png')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  transition: 'background-color 0.6s cubic-bezier(0.22, 1, 0.36, 1)'
                }}
              >
                {/* Overlay oscuro para legibilidad - solo cuando está cerrada */}
                {!expandedServiceCards.has(serviciosCards[2].id) && (
                  <div className="absolute inset-0 bg-[#2a2a2a]/80 rounded-xl"></div>
                )}
                <div className="relative z-10 flex flex-col">
                  <h3 className={`text-xl font-bold mb-6 transition-colors duration-600 ${expandedServiceCards.has(serviciosCards[2].id) ? 'text-black' : 'text-white'}`}>
                    {serviciosCards[2].title}
                  </h3>
                  
                  <div
                    className={`overflow-hidden transition-all duration-1200 ${expandedServiceCards.has(serviciosCards[2].id) ? 'max-h-[2000px]' : 'max-h-0'}`}
                    style={{
                      transition: 'max-height 1.2s cubic-bezier(0.22, 1, 0.36, 1)'
                    }}
                  >
                    <div
                      className={`mb-4 transition-opacity duration-300 ${expandedServiceCards.has(serviciosCards[2].id) ? 'opacity-100' : 'opacity-0'}`}
                    >
                      <p className={`text-sm mb-4 leading-relaxed ${expandedServiceCards.has(serviciosCards[2].id) ? 'text-gray-700' : 'text-gray-300'}`}>
                        {serviciosCards[2].description}
                      </p>
                      <ul className="space-y-2 mb-4">
                        {serviciosCards[2].items?.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div className={`w-5 h-5 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0 ${expandedServiceCards.has(serviciosCards[2].id) ? 'bg-gray-700' : 'bg-[#CCFF00]'}`}>
                              <Plus className={`w-3 h-3 ${expandedServiceCards.has(serviciosCards[2].id) ? 'text-white' : 'text-black'}`} />
                            </div>
                            <span className={`text-sm ${expandedServiceCards.has(serviciosCards[2].id) ? 'text-gray-700' : 'text-gray-300'}`}>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex justify-end mt-6">
                    <button 
                      onClick={() => {
                        setExpandedServiceCards(prev => {
                          const newSet = new Set(prev)
                          if (newSet.has(serviciosCards[2].id)) {
                            newSet.delete(serviciosCards[2].id)
                          } else {
                            newSet.add(serviciosCards[2].id)
                          }
                          return newSet
                        })
                      }}
                      className="relative w-8 h-8 md:w-10 md:h-10 flex items-center justify-center cursor-pointer"
                    >
                      <ChevronDown 
                        className={`w-5 h-5 md:w-6 md:h-6 absolute transition-all duration-500 ease-in-out ${expandedServiceCards.has(serviciosCards[2].id) ? 'opacity-0 scale-0 rotate-90 text-gray-600' : 'opacity-100 scale-100 rotate-0 text-[#CCFF00]'}`}
                        style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1)' }}
                      />
                      <X 
                        className={`w-5 h-5 md:w-6 md:h-6 absolute transition-all duration-500 ease-in-out ${expandedServiceCards.has(serviciosCards[2].id) ? 'opacity-100 scale-100 rotate-0 text-gray-600' : 'opacity-0 scale-0 rotate-90 text-[#CCFF00]'}`}
                        style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1)' }}
                      />
                    </button>
                  </div>
                </div>
              </div>

              {/* Caja 2 - Marca, coherencia */}
              <div
                className={`p-4 rounded-xl flex flex-col overflow-hidden flex-1 relative transition-colors duration-600 ${expandedServiceCards.has(serviciosCards[3].id) ? 'bg-white' : 'bg-[#2a2a2a]'}`}
                style={{
                  backgroundImage: expandedServiceCards.has(serviciosCards[3].id) ? 'none' : `url('/pipstudio2/Diseño sin título (8).png')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  transition: 'background-color 0.6s cubic-bezier(0.22, 1, 0.36, 1)'
                }}
              >
                {/* Overlay oscuro para legibilidad - solo cuando está cerrada */}
                {!expandedServiceCards.has(serviciosCards[3].id) && (
                  <div className="absolute inset-0 bg-[#2a2a2a]/80 rounded-xl"></div>
                )}
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <h3 className={`text-xl font-bold mb-6 transition-colors duration-600 ${expandedServiceCards.has(serviciosCards[3].id) ? 'text-black' : 'text-white'}`}>
                    {serviciosCards[3].title}
                  </h3>
                  
                  <div
                    className={`overflow-hidden transition-all duration-1200 ${expandedServiceCards.has(serviciosCards[3].id) ? 'max-h-[2000px]' : 'max-h-0'}`}
                    style={{
                      transition: 'max-height 1.2s cubic-bezier(0.22, 1, 0.36, 1)'
                    }}
                  >
                    <div
                      className={`mb-4 transition-opacity duration-300 ${expandedServiceCards.has(serviciosCards[3].id) ? 'opacity-100' : 'opacity-0'}`}
                    >
                      <p className={`text-sm mb-4 leading-relaxed ${expandedServiceCards.has(serviciosCards[3].id) ? 'text-gray-700' : 'text-gray-300'}`}>
                        {serviciosCards[3].description}
                      </p>
                      <ul className="space-y-2 mb-4">
                        {serviciosCards[3].items?.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div className={`w-5 h-5 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0 ${expandedServiceCards.has(serviciosCards[3].id) ? 'bg-gray-700' : 'bg-[#CCFF00]'}`}>
                              <Plus className={`w-3 h-3 ${expandedServiceCards.has(serviciosCards[3].id) ? 'text-white' : 'text-black'}`} />
                            </div>
                            <span className={`text-sm ${expandedServiceCards.has(serviciosCards[3].id) ? 'text-gray-700' : 'text-gray-300'}`}>{item}</span>
                          </li>
                        ))}
                      </ul>
                      {serviciosCards[3].conclusion && (
                        <p className={`text-xs italic ${expandedServiceCards.has(serviciosCards[3].id) ? 'text-gray-600' : 'text-gray-400'}`}>
                          {serviciosCards[3].conclusion}
                        </p>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex justify-end mt-auto">
                    <button 
                      onClick={() => {
                        setExpandedServiceCards(prev => {
                          const newSet = new Set(prev)
                          if (newSet.has(serviciosCards[3].id)) {
                            newSet.delete(serviciosCards[3].id)
                          } else {
                            newSet.add(serviciosCards[3].id)
                          }
                          return newSet
                        })
                      }}
                      className="relative w-8 h-8 md:w-10 md:h-10 flex items-center justify-center cursor-pointer"
                    >
                      <ChevronDown 
                        className={`w-5 h-5 md:w-6 md:h-6 absolute transition-all duration-500 ease-in-out ${expandedServiceCards.has(serviciosCards[3].id) ? 'opacity-0 scale-0 rotate-90 text-gray-600' : 'opacity-100 scale-100 rotate-0 text-[#CCFF00]'}`}
                        style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1)' }}
                      />
                      <X 
                        className={`w-5 h-5 md:w-6 md:h-6 absolute transition-all duration-500 ease-in-out ${expandedServiceCards.has(serviciosCards[3].id) ? 'opacity-100 scale-100 rotate-0 text-gray-600' : 'opacity-0 scale-0 rotate-90 text-[#CCFF00]'}`}
                        style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1)' }}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>

              {/* Columna Derecha */}
              <div className="flex flex-col gap-1 rounded-2xl overflow-hidden bg-[#EBEBEB] p-1">
              {/* Caja superior */}
              <div
                className={`p-4 rounded-xl relative flex flex-col justify-between overflow-hidden transition-colors duration-600 ${expandedServiceCards.has(serviciosCards[4].id) ? 'bg-white' : 'bg-[#2a2a2a]'}`}
                style={{
                  backgroundImage: expandedServiceCards.has(serviciosCards[4].id) ? 'none' : `url('/pipstudio2/Diseño sin título (8).png')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  transition: 'background-color 0.6s cubic-bezier(0.22, 1, 0.36, 1)'
                }}
              >
                {/* Overlay oscuro para legibilidad - solo cuando está cerrada */}
                {!expandedServiceCards.has(serviciosCards[4].id) && (
                  <div className="absolute inset-0 bg-[#2a2a2a]/80 rounded-xl"></div>
                )}
                <div className="relative z-10 flex flex-col">
                  <h3 className={`text-xl font-bold mb-6 transition-colors duration-600 ${expandedServiceCards.has(serviciosCards[4].id) ? 'text-black' : 'text-white'}`}>
                    {serviciosCards[4].title}
                  </h3>
                  
                  <div
                    className={`overflow-hidden transition-all duration-1200 ${expandedServiceCards.has(serviciosCards[4].id) ? 'max-h-[2000px]' : 'max-h-0'}`}
                    style={{
                      transition: 'max-height 1.2s cubic-bezier(0.22, 1, 0.36, 1)'
                    }}
                  >
                    <div
                      className={`mb-4 transition-opacity duration-300 ${expandedServiceCards.has(serviciosCards[4].id) ? 'opacity-100' : 'opacity-0'}`}
                    >
                      <p className={`text-sm mb-4 leading-relaxed ${expandedServiceCards.has(serviciosCards[4].id) ? 'text-gray-700' : 'text-gray-300'}`}>
                        {serviciosCards[4].description}
                      </p>
                      <ul className="space-y-2 mb-4">
                        {serviciosCards[4].items?.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <div className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${expandedServiceCards.has(serviciosCards[4].id) ? 'bg-gray-700' : 'bg-[#CCFF00]'}`}></div>
                            <span className={`text-xs ${expandedServiceCards.has(serviciosCards[4].id) ? 'text-gray-700' : 'text-gray-300'}`}>{item}</span>
                          </li>
                        ))}
                      </ul>
                      {serviciosCards[4].conclusion && (
                        <p className={`text-xs italic ${expandedServiceCards.has(serviciosCards[4].id) ? 'text-gray-600' : 'text-gray-400'}`}>
                          {serviciosCards[4].conclusion}
                        </p>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex justify-end mt-6">
                    <button 
                      onClick={() => {
                        setExpandedServiceCards(prev => {
                          const newSet = new Set(prev)
                          if (newSet.has(serviciosCards[4].id)) {
                            newSet.delete(serviciosCards[4].id)
                          } else {
                            newSet.add(serviciosCards[4].id)
                          }
                          return newSet
                        })
                      }}
                      className="relative w-8 h-8 md:w-10 md:h-10 flex items-center justify-center cursor-pointer"
                    >
                      <ChevronDown 
                        className={`w-5 h-5 md:w-6 md:h-6 absolute transition-all duration-500 ease-in-out ${expandedServiceCards.has(serviciosCards[4].id) ? 'opacity-0 scale-0 rotate-90 text-gray-600' : 'opacity-100 scale-100 rotate-0 text-[#CCFF00]'}`}
                        style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1)' }}
                      />
                      <X 
                        className={`w-5 h-5 md:w-6 md:h-6 absolute transition-all duration-500 ease-in-out ${expandedServiceCards.has(serviciosCards[4].id) ? 'opacity-100 scale-100 rotate-0 text-gray-600' : 'opacity-0 scale-0 rotate-90 text-[#CCFF00]'}`}
                        style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1)' }}
                      />
                    </button>
                  </div>
                </div>
              </div>

              {/* Caja inferior */}
              <div
                className={`p-4 rounded-xl flex flex-col overflow-hidden flex-1 relative transition-colors duration-600 ${expandedServiceCards.has(serviciosCards[5].id) ? 'bg-white' : 'bg-[#2a2a2a]'}`}
                style={{
                  backgroundImage: expandedServiceCards.has(serviciosCards[5].id) ? 'none' : `url('/pipstudio2/Diseño sin título (8).png')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  transition: 'background-color 0.6s cubic-bezier(0.22, 1, 0.36, 1)'
                }}
              >
                {/* Overlay oscuro para legibilidad - solo cuando está cerrada */}
                {!expandedServiceCards.has(serviciosCards[5].id) && (
                  <div className="absolute inset-0 bg-[#2a2a2a]/80 rounded-xl"></div>
                )}
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <h3 className={`text-xl font-bold mb-6 transition-colors duration-600 ${expandedServiceCards.has(serviciosCards[5].id) ? 'text-black' : 'text-white'}`}>
                    {serviciosCards[5].title}
                  </h3>
                  
                  <div
                    className={`overflow-hidden transition-all duration-1200 ${expandedServiceCards.has(serviciosCards[5].id) ? 'max-h-[2000px]' : 'max-h-0'}`}
                    style={{
                      transition: 'max-height 1.2s cubic-bezier(0.22, 1, 0.36, 1)'
                    }}
                  >
                    <div
                      className={`mb-4 transition-opacity duration-300 ${expandedServiceCards.has(serviciosCards[5].id) ? 'opacity-100' : 'opacity-0'}`}
                    >
                      <p className={`text-sm mb-4 leading-relaxed ${expandedServiceCards.has(serviciosCards[5].id) ? 'text-gray-700' : 'text-gray-300'}`}>
                        {serviciosCards[5].description}
                      </p>
                      <ul className="space-y-2 mb-4">
                        {serviciosCards[5].items?.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div className={`w-5 h-5 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0 ${expandedServiceCards.has(serviciosCards[5].id) ? 'bg-gray-700' : 'bg-[#CCFF00]'}`}>
                              <Plus className={`w-3 h-3 ${expandedServiceCards.has(serviciosCards[5].id) ? 'text-white' : 'text-black'}`} />
                            </div>
                            <span className={`text-sm ${expandedServiceCards.has(serviciosCards[5].id) ? 'text-gray-700' : 'text-gray-300'}`}>{item}</span>
                          </li>
                        ))}
                      </ul>
                      {serviciosCards[5].conclusion && (
                        <p className={`text-xs italic ${expandedServiceCards.has(serviciosCards[5].id) ? 'text-gray-600' : 'text-gray-400'}`}>
                          {serviciosCards[5].conclusion}
                        </p>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex justify-end mt-auto">
                    <button 
                      onClick={() => {
                        setExpandedServiceCards(prev => {
                          const newSet = new Set(prev)
                          if (newSet.has(serviciosCards[5].id)) {
                            newSet.delete(serviciosCards[5].id)
                          } else {
                            newSet.add(serviciosCards[5].id)
                          }
                          return newSet
                        })
                      }}
                      className="relative w-8 h-8 md:w-10 md:h-10 flex items-center justify-center cursor-pointer"
                    >
                      <ChevronDown 
                        className={`w-5 h-5 md:w-6 md:h-6 absolute transition-all duration-500 ease-in-out ${expandedServiceCards.has(serviciosCards[5].id) ? 'opacity-0 scale-0 rotate-90 text-gray-600' : 'opacity-100 scale-100 rotate-0 text-[#CCFF00]'}`}
                        style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1)' }}
                      />
                      <X 
                        className={`w-5 h-5 md:w-6 md:h-6 absolute transition-all duration-500 ease-in-out ${expandedServiceCards.has(serviciosCards[5].id) ? 'opacity-100 scale-100 rotate-0 text-gray-600' : 'opacity-0 scale-0 rotate-90 text-[#CCFF00]'}`}
                        style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1)' }}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="preguntas-frecuentes" className="bg-white text-black py-16 px-4 md:px-8 w-full">
        <div className="w-[98%] md:w-[80%] mx-auto">
          <motion.div 
            className="flex justify-between items-start mb-4"
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ opacity: 1 }}
          >
            <p className="text-sm text-gray-500">/Preguntas frecuentes</p>
            <p className="text-sm text-gray-500">(06)</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              style={{ opacity: 1 }}
            >
              <h2 className="text-4xl sm:text-5xl md:text-4xl lg:text-5xl font-medium mb-4" style={{ letterSpacing: '-0.08em' }}>
                ¿Cómo podemos trabajar juntos?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Comunicación por sobre todo, cercanía y redes.
              </p>
              <a 
                href="https://wa.me/5493493415669"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-white bg-[#2a2a2a] hover:bg-[#333] px-4 md:px-6 py-2.5 md:py-3 rounded-full transition group text-sm md:text-base"
              >
                <span className="text-white font-medium">Hablemos!</span>
                <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 text-[#CCFF00]" />
              </a>
            </motion.div>
            <div className="flex flex-col gap-1 rounded-2xl overflow-hidden bg-[#EBEBEB] p-1">
              {preguntasFrecuentes.map((item, idx) => {
                const itemValue = `faq-${idx}`
                const isOpen = openFAQItem === itemValue
                return (
                  <div key={idx} className="bg-white rounded-xl overflow-hidden">
                    <button
                      onClick={() => setOpenFAQItem(isOpen ? undefined : itemValue)}
                      className="w-full flex items-center justify-between p-4 md:p-6 text-left hover:bg-gray-50 transition-colors duration-300"
                    >
                      <span className="text-[18px] font-medium text-black flex-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {idx + 1}. {item.text}
                      </span>
                      <div className="flex-shrink-0 ml-4">
                        <motion.div
                          animate={{ rotate: isOpen ? 45 : 0 }}
                          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                        >
                          <Plus className="w-5 h-5 md:w-6 md:h-6 text-black" />
                        </motion.div>
                      </div>
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}
                      style={{
                        transition: 'max-height 0.3s cubic-bezier(0.25, 0.1, 0.25, 1), opacity 0.3s cubic-bezier(0.25, 0.1, 0.25, 1)'
                      }}
                    >
                      <div className="px-4 md:px-6 pb-4 md:pb-6">
                        <p className="text-sm md:text-base text-gray-600 leading-relaxed whitespace-pre-line">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
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
                    <Link href="#soluciones-digitales" className="text-gray-400 hover:text-[#CCFF00] transition-colors text-sm">
                      Soluciones Digitales
                    </Link>
                  </li>
                  <li>
                    <Link href="#sistema" className="text-gray-400 hover:text-[#CCFF00] transition-colors text-sm">
                      Sistema
                    </Link>
                  </li>
                  <li>
                    <Link href="#casos-de-exito" className="text-gray-400 hover:text-[#CCFF00] transition-colors text-sm">
                      Casos de Éxito
                    </Link>
                  </li>
                  <li>
                    <Link href="#servicios" className="text-gray-400 hover:text-[#CCFF00] transition-colors text-sm">
                      Servicios
                    </Link>
                  </li>
                  <li>
                    <Link href="#preguntas-frecuentes" className="text-gray-400 hover:text-[#CCFF00] transition-colors text-sm">
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

