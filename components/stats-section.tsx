"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { LineChart, BarChart3, Zap } from "lucide-react"

export default function StatsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const stats = [
    {
      icon: LineChart,
      stat: "94%",
      statement: "de las primeras impresiones están relacionadas con el diseño",
      description:
        "Tu sitio web es a menudo la primera interacción que los clientes potenciales tienen con tu marca. Haz que cuente con un diseño que capture tu visión y valores únicos.",
      delay: 0.1,
    },
    {
      icon: BarChart3,
      stat: "75%",
      statement: "juzga la credibilidad basándose en el diseño web",
      description:
        "Un sitio web profesional genera confianza y credibilidad. Destácate de la competencia con un diseño que muestre tu experiencia y atención al detalle.",
      delay: 0.2,
    },
    {
      icon: Zap,
      stat: "3 segundos",
      statement: "para captar la atención de tu audiencia",
      description:
        "En un mundo de desplazamiento infinito, tu sitio web necesita causar un impacto inmediato. Nuestros diseños disruptivos aseguran que tu marca sea notada y recordada.",
      delay: 0.3,
    },
  ]

  return (
    <section ref={ref} className="py-24 md:py-32 bg-[#0F0F0F] relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex items-center mb-4">
            <div className="h-1 w-10 bg-[#CCFF00] mr-3"></div>
            <p className="text-sm text-white/70">Tu presencia online</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            No es solo una web. Es tu <span className="text-[#CCFF00]">identidad digital</span>
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: item.delay }}
              className="relative"
            >
              <div className="bg-[#1A1A1A] rounded-2xl p-8 md:p-10 border border-white/10 h-full group hover:border-[#CCFF00]/50 transition-all duration-300">
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-xl bg-[#CCFF00]/10 flex items-center justify-center mb-6 group-hover:bg-[#CCFF00]/20 transition-colors">
                    <item.icon className="w-7 h-7 text-[#CCFF00]" />
                  </div>

                  <div className="flex items-baseline gap-2 mb-2">
                    <h3 className="text-3xl md:text-4xl font-bold text-[#CCFF00]">{item.stat}</h3>
                    <div className="h-1 w-6 bg-[#CCFF00]"></div>
                  </div>

                  <p className="text-xl font-bold mb-4">{item.statement}</p>
                </div>

                <p className="text-white/70">{item.description}</p>

                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: "100%" } : { width: 0 }}
                  transition={{ duration: 1, delay: item.delay + 0.3 }}
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#CCFF00]/0 via-[#CCFF00] to-[#CCFF00]/0"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-[#CCFF00]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#CCFF00]/5 rounded-full blur-3xl"></div>

      {/* Decorative elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute top-20 right-20 w-16 h-16 border border-[#CCFF00]/20 rounded-full hidden md:block"
      ></motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="absolute bottom-20 left-20 w-24 h-24 border border-[#CCFF00]/10 rounded-full hidden md:block"
      ></motion.div>
    </section>
  )
}
