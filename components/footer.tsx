"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const currentYear = new Date().getFullYear()

  return (
    <footer ref={ref} className="py-8 md:py-10 bg-[#0F0F0F] relative overflow-hidden">
      {/* Línea superior con gradiente */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#CCFF00] to-transparent"></div>

      {/* Efecto de resplandor en la parte inferior */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-radial from-[#CCFF00]/5 to-transparent opacity-30"></div>

      {/* Círculos concéntricos */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={isInView ? { opacity: 0.05, scale: 1 } : { opacity: 0, scale: 0 }}
        transition={{ duration: 1.5, delay: 0.2 }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full border border-[#CCFF00]"
      ></motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Logo con animación */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="mb-4 flex flex-col items-center"
          >
            <div className="relative mb-3">
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [1, 0.8, 1],
                }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
                className="absolute inset-0 rounded-full bg-[#CCFF00]/10 blur-xl"
                style={{ width: "100px", height: "50px", left: "-10px", top: "-5px" }}
              ></motion.div>

              <div className="relative">
                <Image src="/logo-white.png" alt="PiP Studio Logo" width={80} height={40} className="h-10 w-auto" />
              </div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-white/70 max-w-md mx-auto text-sm"
            >
              Diseño web disruptivo que transforma negocios y crea experiencias digitales únicas.
            </motion.p>
          </motion.div>

          {/* Botón de contacto */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-4"
          >
            <Link
              href="https://wa.me/5493493415669"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-[#1A1A1A] border border-white/10 hover:border-[#CCFF00] text-white px-4 py-2 rounded-full hover:text-[#CCFF00] transition-colors group text-sm"
            >
              <svg
                className="w-4 h-4 mr-2 text-[#CCFF00] group-hover:animate-pulse"
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
              Contactanos por WhatsApp
            </Link>
          </motion.div>

          {/* Línea divisoria con efecto */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={isInView ? { width: "100%", opacity: 1 } : { width: 0, opacity: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent mb-4"
          ></motion.div>

          {/* Copyright y tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-full flex flex-col md:flex-row justify-center md:justify-between items-center gap-1"
          >
            <p className="text-white/50 text-xs">© {currentYear} PiP Estudio. Todos los derechos reservados.</p>

            <div className="flex items-center">
              <div className="h-1 w-4 bg-[#CCFF00] mx-2"></div>
              <p className="text-white/50 text-xs">Diseño web disruptivo</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Burbujas decorativas con animación - reducidas en tamaño y cantidad */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 0.2 } : { y: 50, opacity: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute bottom-10 left-[15%] w-6 h-6 rounded-full bg-[#CCFF00]/30"
      ></motion.div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 0.15 } : { y: 50, opacity: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute bottom-20 left-[75%] w-8 h-8 rounded-full bg-[#CCFF00]/20"
      ></motion.div>
    </footer>
  )
}
