"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

export default function Clients() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const clients = [
    { name: "Coca-Cola", delay: 0.1 },
    { name: "Jeep", delay: 0.2 },
    { name: "Champion", delay: 0.3 },
    { name: "Gillette", delay: 0.4 },
    { name: "Netflix", delay: 0.5 },
  ]

  const testimonials = [
    {
      quote: "Lo necesitábamos y lo resolvieron rápido. Un equipo que realmente entiende lo que buscamos.",
      author: "Ana Martínez",
      company: "Café Urbano",
      delay: 0.1,
    },
    {
      quote:
        "Nuestra web ahora refleja perfectamente nuestra marca. El diseño disruptivo nos diferencia de la competencia.",
      author: "Carlos Rodríguez",
      company: "Estudio Creativo",
      delay: 0.2,
    },
  ]

  return (
    <section id="clientes" ref={ref} className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex items-center mb-4">
            <div className="h-1 w-10 bg-[#CCFF00] mr-3"></div>
            <p className="text-sm text-white/70">Our Clients</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Trusted by <span className="text-[#CCFF00]">leading</span> brands
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12 mb-20">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: client.delay }}
              className="flex items-center justify-center"
            >
              <div className="bg-[#1A1A1A] rounded-2xl p-6 w-full h-24 flex items-center justify-center border border-white/10">
                <span className="text-xl font-bold text-white/70">{client.name}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: testimonial.delay + 0.3 }}
              className="bg-[#1A1A1A] rounded-2xl p-8 border border-white/10"
            >
              <div className="text-4xl text-[#CCFF00] mb-6">"</div>
              <p className="text-xl font-light mb-8">{testimonial.quote}</p>
              <div>
                <p className="font-bold">{testimonial.author}</p>
                <p className="text-white/70">{testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
