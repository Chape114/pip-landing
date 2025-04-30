"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  // Bloquear el scroll cuando el menú está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  // Detectar scroll y sección activa
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)

      // Detectar qué sección está actualmente en la vista
      const sections = ["inicio", "soluciones", "proceso", "contacto"]
      const scrollPosition = window.scrollY + 100 // Offset para mejor detección

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Inicio", href: "#inicio", id: "inicio" },
    { name: "Soluciones", href: "#soluciones", id: "soluciones" },
    { name: "Paso a paso", href: "#proceso", id: "proceso" },
    { name: "Contacto", href: "#contacto", id: "contacto" },
  ]

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setIsOpen(false)

    const targetId = href.replace("#", "")
    const element = document.getElementById(targetId)

    if (element) {
      // Animación de scroll suave
      window.scrollTo({
        top: element.offsetTop - 80, // Offset para compensar la altura del navbar
        behavior: "smooth",
      })

      // Actualizar la sección activa
      setActiveSection(targetId)
    }
  }

  // Variantes para la animación del botón burger
  const burgerVariants = {
    closed: {
      backgroundColor: "rgba(26, 26, 26, 1)",
    },
    open: {
      backgroundColor: "#CCFF00",
      transition: { duration: 0.3 },
    },
  }

  // Variantes para las líneas del botón burger
  const lineVariants = {
    closed: {
      stroke: "#CCFF00",
      pathLength: 1,
    },
    open: {
      stroke: "#0F0F0F",
      pathLength: 1,
      transition: { duration: 0.3 },
    },
  }

  return (
    <>
      {/* Header fijo */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 overflow-x-hidden transition-all duration-300 ${
          scrolled || isOpen ? "bg-[#0F0F0F]/90 backdrop-blur-md py-3" : "py-5"
        }`}
      >

        <div className="container mx-auto px-6 max-w-full overflow-x-hidden">
          <div className="flex items-center justify-between">
            <Link href="/#inicio" className="relative z-50" onClick={(e) => handleNavClick(e, "#inicio")}>
              <div className="flex items-center">
                <div className="h-8 w-auto">
                  <Image src="/logo-white.png" alt="PiP Studio Logo" width={60} height={30} className="h-full w-auto" />
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item, i) => (
                <div key={item.name} className="relative">
                  <Link
                    href={item.href}
                    className={`text-white/80 hover:text-[#CCFF00] transition-colors text-sm ${
                      activeSection === item.id ? "text-[#CCFF00]" : ""
                    }`}
                    onClick={(e) => handleNavClick(e, item.href)}
                  >
                    {item.name}
                    {activeSection === item.id && (
                      <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#CCFF00]" />
                    )}
                  </Link>
                </div>
              ))}
              <Link
                href="#soluciones"
                className="bg-[#CCFF00] text-black px-6 py-2 rounded-full text-sm font-medium hover:bg-white transition-colors"
                onClick={(e) => handleNavClick(e, "#soluciones")}
              >
                Get Started →
              </Link>
            </nav>

            {/* Mobile Menu Button - Versión mejorada con Framer Motion */}
            <motion.button
              className="md:hidden relative z-50 flex items-center justify-center"
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.95 }}
              initial="closed"
              animate={isOpen ? "open" : "closed"}
            >
              <motion.div
                className="w-10 h-10 max-w-full rounded-full flex items-center justify-center border border-white/10"
                variants={burgerVariants}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <motion.path
                    d="M4 6H20"
                    stroke="#CCFF00"
                    strokeWidth="2"
                    strokeLinecap="round"
                    variants={lineVariants}
                    animate={{
                      d: isOpen ? "M6 18L18 6" : "M4 6H20",
                      stroke: isOpen ? "#0F0F0F" : "#CCFF00",
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.path
                    d="M4 12H20"
                    stroke="#CCFF00"
                    strokeWidth="2"
                    strokeLinecap="round"
                    animate={{
                      opacity: isOpen ? 0 : 1,
                      x: isOpen ? 20 : 0,
                      stroke: isOpen ? "#0F0F0F" : "#CCFF00",
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.path
                    d="M4 18H20"
                    stroke="#CCFF00"
                    strokeWidth="2"
                    strokeLinecap="round"
                    variants={lineVariants}
                    animate={{
                      d: isOpen ? "M6 6L18 18" : "M4 18H20",
                      stroke: isOpen ? "#0F0F0F" : "#CCFF00",
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </svg>
              </motion.div>
            </motion.button>
          </div>
        </div>
      </header>

      {/* Menú móvil con animación mejorada */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-[#0F0F0F] z-30 md:hidden flex flex-col"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="flex-1 pt-24 px-6 overflow-y-auto">
              <div className="space-y-6">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    className="py-4 border-b border-white/10"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className={`text-white text-2xl font-bold flex items-center justify-between ${
                        activeSection === item.id ? "text-[#CCFF00]" : ""
                      }`}
                      onClick={(e) => handleNavClick(e, item.href)}
                    >
                      <div className="flex items-center">
                        <motion.div
                          className={`w-2 h-2 ${
                            activeSection === item.id ? "bg-[#CCFF00]" : "bg-white/50"
                          } rounded-full mr-3`}
                          animate={{ scale: activeSection === item.id ? [1, 1.2, 1] : 1 }}
                          transition={{
                            duration: 0.5,
                            repeat: activeSection === item.id ? Number.POSITIVE_INFINITY : 0,
                            repeatType: "reverse",
                          }}
                        />
                        {item.name}
                      </div>
                      <motion.div className="text-[#CCFF00]" whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                        →
                      </motion.div>
                    </Link>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="mt-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                <Link
                  href="#soluciones"
                  onClick={(e) => handleNavClick(e, "#soluciones")}
                  className="bg-[#CCFF00] text-black px-6 py-4 rounded-full inline-block font-medium w-full text-center"
                >
                  Get Started →
                </Link>
              </motion.div>

              {/* Elementos decorativos con animación */}
            </div>

            {/* Información de contacto en la parte inferior con animación */}
            <motion.div
              className="p-6 border-t border-white/10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.6 }}
            >
              <p className="text-white/50 text-sm">© 2023 PiP Studio. Todos los derechos reservados.</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
