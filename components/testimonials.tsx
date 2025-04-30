"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [activeIndex, setActiveIndex] = useState(0)

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
    {
      quote: "Profesionales, creativos y eficientes. Lograron captar nuestra esencia y plasmarla en un diseño único.",
      author: "Laura Sánchez",
      company: "Consultora Digital",
      delay: 0.3,
    },
  ]

  return (
    <section ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="max-w-md mb-16"
        >
          <h2 className="text-5xl font-light mb-6">
            Lo que dicen <span className="font-bold">nuestros clientes</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5 md:col-start-1">
            <div className="space-y-6">
              {testimonials.map((testimonial, index) => (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.8, delay: testimonial.delay }}
                  className={`text-left w-full py-4 border-b border-[#1d1d1f]/10 transition-colors ${
                    activeIndex === index ? "border-[#0066FF]" : ""
                  }`}
                  onClick={() => setActiveIndex(index)}
                >
                  <div className="flex items-center justify-between">
                    <h3
                      className={`text-xl font-medium transition-colors ${
                        activeIndex === index ? "text-[#0066FF]" : "text-[#1d1d1f]"
                      }`}
                    >
                      {testimonial.author}
                    </h3>
                    <span
                      className={`text-2xl transition-transform ${activeIndex === index ? "rotate-45" : "rotate-0"}`}
                    >
                      +
                    </span>
                  </div>
                  <p className="text-sm text-[#1d1d1f]/60">{testimonial.company}</p>
                </motion.button>
              ))}
            </div>
          </div>

          <motion.div
            className="md:col-span-6 md:col-start-7"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              <div className="text-6xl font-serif text-[#0066FF] opacity-30 absolute -top-10 -left-8">"</div>
              <p className="text-2xl md:text-3xl font-light leading-relaxed mb-8">{testimonials[activeIndex].quote}</p>
              <div className="text-6xl font-serif text-[#0066FF] opacity-30 absolute -bottom-20 -right-8">"</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
