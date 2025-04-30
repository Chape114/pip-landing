"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { FileText, CheckCircle, ClipboardList, Palette, Zap, Wrench } from "lucide-react"

export default function Process() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const steps = [
    {
      number: "01",
      title: "Te enviamos un PDF con los servicios",
      description: "Recibirás un documento detallado con todas nuestras opciones y precios.",
      icon: FileText,
      delay: 0.1,
    },
    {
      number: "02",
      title: "Elegís el plan que mejor se ajusta a tu negocio",
      description: "Seleccionás la opción ideal según tus necesidades y presupuesto.",
      icon: CheckCircle,
      delay: 0.2,
    },
    {
      number: "03",
      title: "Completás un formulario con tus preferencias",
      description: "Nos contás sobre tu marca, objetivos y referencias visuales que te gustan.",
      icon: ClipboardList,
      delay: 0.3,
    },
    {
      number: "04",
      title: "Creamos la propuesta visual",
      description: "Desarrollamos el diseño inicial basado en tus requerimientos y preferencias.",
      icon: Palette,
      delay: 0.4,
    },
    {
      number: "05",
      title: "Ajustamos juntos y publicamos",
      description: "Refinamos el diseño según tus comentarios y lanzamos tu sitio web.",
      icon: Zap,
      delay: 0.5,
    },
    {
      number: "06",
      title: "Podés sumar mantenimiento mensual si lo necesitás",
      description: "Ofrecemos planes de soporte continuo para mantener tu sitio actualizado.",
      icon: Wrench,
      delay: 0.6,
    },
  ]

  return (
    <section id="proceso" ref={ref} className="py-24 md:py-32 bg-[#1A1A1A] relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex items-center mb-4">
            <div className="h-1 w-10 bg-[#CCFF00] mr-3"></div>
            <p className="text-sm text-white/70">Nuestro Proceso</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Cómo <span className="text-[#CCFF00]">trabajamos</span> juntos
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: step.delay }}
              className="relative"
            >
              <div className="bg-[#0F0F0F] rounded-2xl p-8 border border-white/10 hover:border-[#CCFF00]/50 transition-all duration-300 h-full group">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-[#CCFF00]/10 flex items-center justify-center mr-4 group-hover:bg-[#CCFF00]/20 transition-colors">
                    <step.icon className="w-6 h-6 text-[#CCFF00]" />
                  </div>
                  <div className="text-3xl font-bold text-[#CCFF00]">{step.number}</div>
                </div>

                <h3 className="text-xl font-bold mb-4 group-hover:text-[#CCFF00] transition-colors">{step.title}</h3>
                <p className="text-white/70">{step.description}</p>

                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: "100%" } : { width: 0 }}
                  transition={{ duration: 1, delay: step.delay + 0.3 }}
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#CCFF00]/0 via-[#CCFF00] to-[#CCFF00]/0"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Elemento decorativo */}
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-[#CCFF00]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#CCFF00]/5 rounded-full blur-3xl"></div>
      </div>
    </section>
  )
}
