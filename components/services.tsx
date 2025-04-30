"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const services = [
    {
      title: "Diseño estratégico y a medida",
      description:
        "Nada de plantillas. Diseñamos tu sitio alineado con tu marca, objetivos y personalidad. Lo que ves es lo que tu audiencia recordará.",
      icon: "🎨",
      color: "#CCFF00",
      delay: 0.1,
    },
    {
      title: "Tecnología que convierte",
      description:
        "Usamos tecnologías modernas que optimizan la velocidad, experiencia de usuario y posicionamiento. Tu web no solo se ve bien. Funciona.",
      icon: "⚡",
      color: "#9747FF",
      delay: 0.2,
    },
    {
      title: "Un socio, no un proveedor",
      description:
        "Desde el primer diseño hasta tu crecimiento digital. PiP Studio es tu aliado para que tu presencia online evolucione con vos.",
      icon: "🤝",
      color: "#CCFF00",
      delay: 0.3,
    },
  ]

  return (
    <section id="servicios" ref={ref} className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex items-center mb-4">
            <div className="h-1 w-10 bg-[#CCFF00] mr-3"></div>
            <p className="text-sm text-white/70">Our Expertise</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            No vendemos sitios web. <br />
            Creamos presencia. Posicionamos marcas.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: service.delay }}
              className="group"
            >
              <div className="bg-[#1A1A1A] rounded-2xl p-6 h-full border border-white/10 hover:border-[#CCFF00]/50 transition-all duration-300 flex flex-col">
                <div className="mb-6">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl"
                    style={{ backgroundColor: `${service.color}20` }}
                  >
                    {service.icon}
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-[#CCFF00] transition-colors">{service.title}</h3>

                <p className="text-white/70 mb-6 flex-grow">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6">¿Listo para impulsar tu negocio?</h3>
          <Link
            href="#contacto"
            className="bg-[#CCFF00] text-black px-8 py-4 rounded-full font-medium hover:bg-white transition-colors transform hover:scale-105 duration-300"
          >
            Solicitá tu propuesta
          </Link>
        </motion.div>
      </div>

      {/* Background elements */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#CCFF00]/5 rounded-full blur-3xl"></div>
    </section>
  )
}
