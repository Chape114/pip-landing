"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function CredibilitySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section ref={ref} className="py-24 md:py-32 bg-[#1A1A1A] relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <div className="flex items-center justify-center mb-4">
              <div className="h-1 w-10 bg-[#CCFF00] mx-3"></div>
              <p className="text-sm text-white/70">Casos de éxito</p>
              <div className="h-1 w-10 bg-[#CCFF00] mx-3"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-[#CCFF00]">+10</span> marcas ya confiaron en PiP Studio
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-white/70 mb-12 leading-relaxed"
          >
            Ayudamos a emprendedores, PyMEs y negocios con visión a dar el primer paso hacia su presencia digital. Vos
            podés ser el próximo caso de éxito.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Link
              href="https://wa.me/5493493415669"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center border border-white/20 text-white hover:border-[#CCFF00] hover:text-[#CCFF00] px-6 py-3 rounded-full text-sm font-medium transition-colors group"
            >
              Sumate a las marcas que ya están creciendo
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Elementos decorativos */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#CCFF00]/20 to-transparent"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={isInView ? { opacity: 0.05, scale: 1 } : { opacity: 0, scale: 0 }}
        transition={{ duration: 1.5, delay: 0.2 }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-[#CCFF00]"
      ></motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={isInView ? { opacity: 0.03, scale: 1 } : { opacity: 0, scale: 0 }}
        transition={{ duration: 1.5, delay: 0.4 }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-[#CCFF00]"
      ></motion.div>

      {/* Efecto de resplandor */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#CCFF00]/5 rounded-full blur-3xl"></div>
    </section>
  )
}
