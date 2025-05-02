"use client"

import { useRef, useEffect } from "react"
import { motion, useAnimation, useMotionValue, useTransform } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const phoneRef = useRef<HTMLDivElement>(null)
  const controls = useAnimation()
  const screenContentControls = useAnimation()

  // Valores para el efecto parallax del teléfono
  const phoneX = useMotionValue(0)
  const phoneY = useMotionValue(0)

  // Transformar el movimiento del mouse en rotación suave del teléfono
  const rotateX = useTransform(phoneY, [-100, 100], [5, -5])
  const rotateY = useTransform(phoneX, [-100, 100], [-5, 5])

  // Efecto para el seguimiento del mouse
  useEffect(() => {
    if (!phoneRef.current) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = phoneRef.current?.getBoundingClientRect()
      if (!rect) return

      // Calcular la posición relativa del mouse respecto al centro del teléfono
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      // Normalizar valores entre -100 y 100 para el efecto parallax
      const newX = ((e.clientX - centerX) / (rect.width / 2)) * 20
      const newY = ((e.clientY - centerY) / (rect.height / 2)) * 20

      // Aplicar los valores con un efecto de suavizado
      phoneX.set(newX)
      phoneY.set(newY)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [phoneX, phoneY])

  // Iniciar animaciones cuando el componente se monta
  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    })

    // Iniciar la secuencia de animación de scroll automático
    const startScreenAnimations = async () => {
      while (true) {
        // Scroll inicial
        await screenContentControls.start({
          y: 0,
          transition: { duration: 0 },
        })
        await new Promise((resolve) => setTimeout(resolve, 2000))

        // Scroll hacia abajo - sección de servicios
        await screenContentControls.start({
          y: -300,
          transition: { duration: 3, ease: "easeInOut" },
        })
        await new Promise((resolve) => setTimeout(resolve, 2000))

        // Scroll hacia abajo - sección de proyectos
        await screenContentControls.start({
          y: -600,
          transition: { duration: 3, ease: "easeInOut" },
        })
        await new Promise((resolve) => setTimeout(resolve, 2000))

        // Scroll hacia abajo - sección de proceso
        await screenContentControls.start({
          y: -900,
          transition: { duration: 3, ease: "easeInOut" },
        })
        await new Promise((resolve) => setTimeout(resolve, 2000))

        // Volver al inicio con una transición rápida
        await screenContentControls.start({
          opacity: 0,
          transition: { duration: 0.3 },
        })
        await screenContentControls.start({
          y: 0,
          transition: { duration: 0 },
        })
        await screenContentControls.start({
          opacity: 1,
          transition: { duration: 0.3 },
        })
      }
    }

    startScreenAnimations()
  }, [controls, screenContentControls])

  return (
    <section id="inicio" ref={heroRef} className="pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative z-10"
            >
              <div className="flex items-center mb-4">
                <div className="h-1 w-10 bg-[#CCFF00] mr-3"></div>
                <p className="text-sm text-white/70">Diseño web profesional que impulsa tu negocio</p>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                Sitios web <br />
                <span className="relative inline-block">hechos a medida</span> para{" "}
                <span className="text-[#CCFF00]">marcas con propósito</span>
              </h1>

              <p className="text-lg text-white/70 max-w-xl mb-8">
                Creamos experiencias digitales que rompen esquemas y conectan con tu audiencia de manera única.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="#soluciones"
                  className="bg-[#CCFF00] text-black px-8 py-4 rounded-full font-medium hover:bg-white transition-colors"
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById("soluciones")?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  ¡Quiero mi rediseño gratuito 🎁 →
                </Link>
              </div>
            </motion.div>

            {/* Decorative elements */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute -bottom-10 -left-4 w-20 h-20 rounded-full border border-[#CCFF00]/30"
            ></motion.div>
          </div>

          <div className="md:col-span-5 relative">
            <motion.div
              ref={phoneRef}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              style={{
                rotateX,
                rotateY,
                transformPerspective: 1000,
                transformStyle: "preserve-3d",
              }}
              className="relative mx-auto"
            >
              {/* Efecto de brillo detrás del teléfono */}
              <div className="absolute -inset-10 bg-gradient-radial from-[#CCFF00]/20 to-transparent opacity-70 blur-2xl"></div>

              {/* Mockup de iPhone */}
              <div className="relative z-10 mx-auto w-[280px] md:w-[320px]">
                {/* Marco del iPhone */}
                <div
                  className="relative z-10 bg-[#1A1A1A] rounded-[44px] p-3 border-[8px] border-[#2A2A2A] shadow-[0_0_15px_rgba(0,0,0,0.5),inset_0_0_10px_rgba(255,255,255,0.05)]"
                  style={{
                    boxShadow: "0 10px 30px rgba(0,0,0,0.8), inset 0 1px 1px rgba(255,255,255,0.05)",
                  }}
                >
                  {/* Botones laterales */}
                  <div className="absolute -left-[12px] top-[100px] w-[3px] h-[30px] bg-[#2A2A2A] rounded-l-lg"></div>
                  <div className="absolute -left-[12px] top-[140px] w-[3px] h-[60px] bg-[#2A2A2A] rounded-l-lg"></div>
                  <div className="absolute -right-[12px] top-[120px] w-[3px] h-[40px] bg-[#2A2A2A] rounded-r-lg"></div>

                  {/* Dynamic Island (en lugar del notch) */}
                  <motion.div
                    className="absolute top-[10px] left-1/2 transform -translate-x-1/2 w-[95px] h-[32px] bg-black rounded-[20px] z-20 flex justify-center items-center overflow-hidden"
                    animate={{ scale: [1, 0.98, 1] }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
                  >
                    {/* Cámara y sensores */}
                    <div className="absolute left-[25px] w-[6px] h-[6px] rounded-full bg-[#333333] ring-[0.5px] ring-[#222222]/50"></div>
                    <div className="absolute right-[25px] w-[8px] h-[8px] rounded-full bg-[#333333] ring-[0.5px] ring-[#222222]/50 flex items-center justify-center">
                      <div className="w-[4px] h-[4px] rounded-full bg-[#222222]"></div>
                    </div>

                    {/* Efecto de iluminación sutil */}
                    <div className="absolute inset-0 bg-gradient-to-b from-[#333333]/10 to-transparent pointer-events-none"></div>
                  </motion.div>

                  {/* Pantalla del iPhone con reflejo */}
                  <div className="relative overflow-hidden rounded-[36px] aspect-[9/19.5] bg-[#0F0F0F]">
                    {/* Reflejo de pantalla */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none z-30"></div>

                    {/* Contenido de la pantalla con animación de scroll */}
                    <div className="absolute inset-0 overflow-hidden">
                      {/* Barra de estado */}
                      <div className="flex justify-between items-center px-5 py-2 bg-transparent z-50 sticky top-0 bg-[#0F0F0F]/80 backdrop-blur-sm">
                        <div className="text-xs text-white">9:41</div>
                        <div className="flex space-x-1">
                          <div className="w-4 h-2 bg-white rounded-sm"></div>
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                      </div>

                      {/* Navbar móvil */}
                      <div className="sticky top-6 z-40 flex justify-between items-center px-4 py-3 bg-[#0F0F0F]/80 backdrop-blur-sm">
                        <div className="flex items-center">
                          <div className="h-5 w-auto">
                            <Image
                              src="/logo-white.png"
                              alt="PiP Studio Logo"
                              width={25}
                              height={12}
                              className="h-full w-auto"
                            />
                          </div>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-[#1A1A1A] border border-white/10 flex items-center justify-center">
                          <div className="w-4 h-3 flex flex-col justify-between">
                            <div className="w-full h-[1px] bg-white"></div>
                            <div className="w-3/4 h-[1px] bg-white ml-auto"></div>
                            <div className="w-full h-[1px] bg-white"></div>
                          </div>
                        </div>
                      </div>

                      {/* Contenido scrollable */}
                      <motion.div
                        className="px-4 pt-4 pb-20"
                        animate={screenContentControls}
                        style={{ willChange: "transform" }}
                      >
                        {/* Hero Section */}
                        <div className="mb-12">
                          <div className="flex items-center mb-2">
                            <div className="h-1 w-6 bg-[#CCFF00] mr-2"></div>
                            <p className="text-[10px] text-white/70">Diseño web profesional</p>
                          </div>
                          <h1 className="text-xl font-bold leading-tight mb-3">
                            Sitios web <span className="text-[#CCFF00]">hechos a medida</span> para marcas con propósito
                          </h1>
                          <p className="text-[11px] text-white/70 mb-4">
                            Creamos experiencias digitales que rompen esquemas y conectan con tu audiencia.
                          </p>
                          <div className="flex space-x-2">
                            <div className="bg-[#CCFF00] text-black px-3 py-1.5 rounded-full text-[10px] font-medium">
                              Get Started →
                            </div>
                            <div className="border border-white/20 text-white px-3 py-1.5 rounded-full text-[10px] font-medium">
                              Our Services
                            </div>
                          </div>

                          {/* Elemento decorativo con burbujas */}
                          <div className="relative mt-6 h-24 w-full overflow-hidden rounded-lg">
                            <motion.div
                              animate={{
                                x: [0, 5, 0, -5, 0],
                                y: [0, -5, 0, 5, 0],
                              }}
                              transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, repeatType: "mirror" }}
                              className="absolute top-2 right-2 w-8 h-8 rounded-full bg-[#CCFF00]/10"
                            ></motion.div>
                            <motion.div
                              animate={{
                                x: [0, -5, 0, 5, 0],
                                y: [0, 5, 0, -5, 0],
                              }}
                              transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, repeatType: "mirror" }}
                              className="absolute bottom-2 left-4 w-10 h-10 rounded-full border border-[#CCFF00]/20"
                            ></motion.div>
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                              className="absolute top-4 right-4 w-6 h-6 rounded-full border border-[#CCFF00]/30"
                            ></motion.div>
                          </div>
                        </div>

                        {/* Stats Section */}
                        <div className="mb-12">
                          <div className="flex items-center mb-3">
                            <div className="h-1 w-6 bg-[#CCFF00] mr-2"></div>
                            <p className="text-[10px] text-white/70">Tu presencia online</p>
                          </div>
                          <h2 className="text-lg font-bold mb-4">
                            No es solo una web. Es tu <span className="text-[#CCFF00]">identidad digital</span>
                          </h2>

                          {/* Stat Card */}
                          <div className="bg-[#1A1A1A] rounded-xl p-4 border border-white/10 mb-3">
                            <div className="w-8 h-8 rounded-lg bg-[#CCFF00]/10 flex items-center justify-center text-sm mb-3">
                              📊
                            </div>
                            <div className="flex items-baseline gap-1 mb-1">
                              <h3 className="text-sm font-bold text-[#CCFF00]">94%</h3>
                              <div className="h-0.5 w-3 bg-[#CCFF00]"></div>
                            </div>
                            <p className="text-[10px] font-bold mb-1">
                              de las primeras impresiones están relacionadas con el diseño
                            </p>
                            <p className="text-[9px] text-white/70">
                              Tu sitio web es a menudo la primera interacción que los clientes potenciales tienen con tu
                              marca.
                            </p>
                          </div>

                          {/* Stat Card */}
                          <div className="bg-[#1A1A1A] rounded-xl p-4 border border-white/10">
                            <div className="w-8 h-8 rounded-lg bg-[#CCFF00]/10 flex items-center justify-center text-sm mb-3">
                              ⚡
                            </div>
                            <div className="flex items-baseline gap-1 mb-1">
                              <h3 className="text-sm font-bold text-[#CCFF00]">3 segundos</h3>
                              <div className="h-0.5 w-3 bg-[#CCFF00]"></div>
                            </div>
                            <p className="text-[10px] font-bold mb-1">para captar la atención de tu audiencia</p>
                            <p className="text-[9px] text-white/70">
                              En un mundo de desplazamiento infinito, tu sitio web necesita causar un impacto inmediato.
                            </p>
                          </div>
                        </div>

                        {/* Services Section */}
                        <div className="mb-12">
                          <div className="flex items-center mb-3">
                            <div className="h-1 w-6 bg-[#CCFF00] mr-2"></div>
                            <p className="text-[10px] text-white/70">Our Expertise</p>
                          </div>
                          <h2 className="text-lg font-bold mb-4">
                            No vendemos sitios web. <span className="text-[#CCFF00]">Creamos presencia</span>
                          </h2>

                          {/* Service Card */}
                          <div className="bg-[#1A1A1A] rounded-xl p-4 border border-white/10 mb-3">
                            <div className="w-8 h-8 rounded-lg bg-[#CCFF00]/20 flex items-center justify-center text-sm mb-3">
                              🎨
                            </div>
                            <h3 className="text-sm font-bold mb-1">Diseño estratégico y a medida</h3>
                            <p className="text-[10px] text-white/70 mb-3">
                              Nada de plantillas. Diseñamos tu sitio alineado con tu marca, objetivos y personalidad.
                            </p>
                          </div>

                          {/* Service Card */}
                          <div className="bg-[#1A1A1A] rounded-xl p-4 border border-white/10">
                            <div className="w-8 h-8 rounded-lg bg-[#9747FF]/20 flex items-center justify-center text-sm mb-3">
                              🤝
                            </div>
                            <h3 className="text-sm font-bold mb-1">Un socio, no un proveedor</h3>
                            <p className="text-[10px] text-white/70 mb-3">
                              Desde el primer diseño hasta tu crecimiento digital. PiP Studio es tu aliado.
                            </p>
                          </div>
                        </div>

                        {/* Pricing Section */}
                        <div className="mb-12">
                          <div className="flex items-center mb-3">
                            <div className="h-1 w-6 bg-[#CCFF00] mr-2"></div>
                            <p className="text-[10px] text-white/70">Nuestros planes</p>
                          </div>
                          <h2 className="text-lg font-bold mb-4">
                            Soluciones <span className="text-[#CCFF00]">a medida</span> para cada etapa
                          </h2>

                          {/* Plan Card */}
                          <div className="bg-[#1A1A1A] rounded-xl p-4 border border-[#CCFF00] mb-3 relative">
                            <div className="absolute -top-2 right-4 bg-[#9747FF] text-white text-[8px] px-2 py-0.5 rounded-full">
                              Recomendado
                            </div>
                            <div className="flex items-center mb-2">
                              <div className="w-6 h-6 rounded-lg bg-[#CCFF00]/20 flex items-center justify-center text-[10px] mr-2">
                                ⚡
                              </div>
                              <h3 className="text-sm font-bold">PyME</h3>
                            </div>
                            <p className="text-[10px] text-white/70 mb-2">
                              Perfecto para empresas en crecimiento que buscan fortalecer su identidad digital.
                            </p>
                            <div className="flex items-center text-[9px] font-medium text-[#CCFF00]">
                              Solicitá este plan
                              <svg
                                className="ml-1 w-3 h-3"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M7 17L17 7M17 7H7M17 7V17"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>

                        {/* Process Section */}
                        <div className="mb-12">
                          <div className="flex items-center mb-3">
                            <div className="h-1 w-6 bg-[#CCFF00] mr-2"></div>
                            <p className="text-[10px] text-white/70">Nuestro Proceso</p>
                          </div>
                          <h2 className="text-lg font-bold mb-4">
                            Cómo <span className="text-[#CCFF00]">trabajamos</span> juntos
                          </h2>

                          {/* Process Step */}
                          <div className="bg-[#1A1A1A] rounded-xl p-4 border border-white/10 mb-3">
                            <div className="flex items-center mb-2">
                              <div className="w-6 h-6 rounded-full bg-[#CCFF00]/10 flex items-center justify-center mr-2">
                                <svg
                                  className="w-3 h-3 text-[#CCFF00]"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M13 2v7h7"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </div>
                              <div className="text-sm text-[#CCFF00] font-bold">01</div>
                            </div>
                            <h3 className="text-xs font-bold mb-1">Te enviamos un PDF con los servicios</h3>
                            <p className="text-[10px] text-white/70">
                              Recibirás un documento detallado con todas nuestras opciones y precios.
                            </p>
                          </div>

                          {/* Process Step */}
                          <div className="bg-[#1A1A1A] rounded-xl p-4 border border-white/10">
                            <div className="flex items-center mb-2">
                              <div className="w-6 h-6 rounded-full bg-[#CCFF00]/10 flex items-center justify-center mr-2">
                                <svg
                                  className="w-3 h-3 text-[#CCFF00]"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M22 11.08V12a10 10 0 1 1-5.93-9.14"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M22 4L12 14.01l-3-3"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </div>
                              <div className="text-sm text-[#CCFF00] font-bold">02</div>
                            </div>
                            <h3 className="text-xs font-bold mb-1">Elegís el plan que mejor se ajusta</h3>
                            <p className="text-[10px] text-white/70">
                              Seleccionás la opción ideal según tus necesidades y presupuesto.
                            </p>
                          </div>
                        </div>

                        {/* Contact Section */}
                        <div>
                          <div className="flex items-center mb-3">
                            <div className="h-1 w-6 bg-[#CCFF00] mr-2"></div>
                            <p className="text-[10px] text-white/70">Contacto</p>
                          </div>
                          <h2 className="text-lg font-bold mb-3">
                            Trabajemos <span className="text-[#CCFF00]">juntos</span>
                          </h2>
                          <p className="text-[10px] text-white/70 mb-4">
                            Estamos listos para convertir tus ideas en una experiencia web excepcional.
                          </p>

                          <div className="bg-[#CCFF00] text-black px-4 py-2 rounded-full text-xs font-medium inline-flex items-center">
                            Contactanos por WhatsApp
                            <svg
                              className="ml-1 w-3 h-3"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M7 17L17 7M17 7H7M17 7V17"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>

                  {/* Botón home con brillo */}
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-1/3 h-1 bg-[#333] rounded-full overflow-hidden">
                    <motion.div
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
                      className="absolute top-0 left-0 w-1/4 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    ></motion.div>
                  </div>
                </div>

                {/* Sombra y efectos */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "80%" }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="absolute -bottom-2 left-0 h-4 bg-[#CCFF00]"
                ></motion.div>

                {/* Sombra realista */}
                <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-[70%] h-[20px] bg-black/40 blur-xl rounded-full"></div>
              </div>

              {/* Elementos decorativos alrededor del teléfono */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="absolute -top-10 -right-10 w-20 h-20 rounded-full bg-[#CCFF00]/20 backdrop-blur-md"
              ></motion.div>

              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.4, duration: 0.5 }}
                className="absolute -bottom-6 right-12 w-12 h-12 rounded-full bg-[#CCFF00]"
              ></motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Background elements - Simple */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[#0F0F0F]"></div>
      </div>
    </section>
  )
}
