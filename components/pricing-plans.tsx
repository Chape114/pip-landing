"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Check, Zap, BarChart, Globe, Gift, ArrowRight } from "lucide-react"

export default function PricingPlans() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const promoRef = useRef(null)
  const promoInView = useInView(promoRef, { once: true, amount: 0.6 })

  const plans = [
    {
      name: "Emprendedor",
      description: "Ideal para negocios que están comenzando y necesitan establecer su presencia digital.",
      icon: Zap,
      features: [
        "Diseño personalizado y a medida",
        "Estructura optimizada para conversión",
        "Responsive para todos los dispositivos",
        "Integración con redes sociales",
        "Catálogo de productos",
        "Pedidos por WhatsApp",
        "Optimización SEO básica",
        "Soporte post-lanzamiento",
      ],
      delay: 0.1,
      accent: "#CCFF00",
      whatsappLink:
        "https://wa.me/5493493415669?text=%C2%A1Hola%20PiP%20Studio!%20Estoy%20interesado%20en%20el%20Plan%20Emprendedor.%20Quisiera%20m%C3%A1s%20informaci%C3%B3n.%20%C2%A1Gracias!",
    },
    {
      name: "PyME",
      description: "Perfecto para empresas en crecimiento que buscan fortalecer su identidad digital.",
      icon: BarChart,
      features: [
        "Todo lo del plan Emprendedor",
        "Catálogo de productos/servicios",
        "Diseño con presencia institucional",
        "Animaciones y microinteracciones",
        "UX Writing estratégico",
        "Optimización SEO",
        "Dominio y hosting gratuitos",
        "Indexación en motores de búsqueda",
      ],
      delay: 0.2,
      accent: "#9747FF",
      highlighted: true,
      whatsappLink:
        "https://wa.me/5493493415669?text=%C2%A1Hola%20PiP%20Studio!%20Estoy%20interesado%20en%20el%20Plan%20PyME.%20Quisiera%20m%C3%A1s%20informaci%C3%B3n.%20%C2%A1Gracias!",
    },
    {
      name: "Empresarial",
      description: "Solución completa para empresas establecidas que requieren una presencia digital sofisticada.",
      icon: Globe,
      features: [
        "Todo lo del plan PyME",
        "Arquitectura web compleja",
        "Experiencia de usuario avanzada",
        "Sin límite de páginas",
        "Integraciones personalizadas",
        "Estrategia digital completa",
        "Soporte prioritario",
      ],
      delay: 0.3,
      accent: "#CCFF00",
      whatsappLink:
        "https://wa.me/5493493415669?text=%C2%A1Hola%20PiP%20Studio!%20Estoy%20interesado%20en%20el%20Plan%20Empresarial.%20Quisiera%20m%C3%A1s%20informaci%C3%B3n.%20%C2%A1Gracias!",
    },
  ]

  const promoCard = {
    title: "Rediseño gratuito",
    description: "¿Querés ver cómo se vería tu web con un diseño profesional, moderno y adaptado a tu negocio?",
    details:
      "Durante mayo, estoy ofreciendo a empresas de Sunchales una propuesta visual 100% personalizada y sin costo.",
    benefits: ["Sin compromiso de avanzar", "Entrega en menos de 72 hs", "Acceso privado al demo online"],
    note: "Ideal si tu web actual ya no representa lo que hacés, o si todavía no tenés sitio.",
    cta: "Pedí tu rediseño",
    whatsappLink:
      "https://wa.me/5493493415669?text=%C2%A1Hola%20PiP%20Studio!%20Me%20interesa%20el%20redise%C3%B1o%20visual%20sin%20costo%20de%20Mayo%202025.%20%C2%BFMe%20dar%C3%ADas%20m%C3%A1s%20informaci%C3%B3n%3F",
  }

  // Variantes de animación para la tarjeta promocional
  const promoVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  // Variantes para el efecto de brillo
  const glowVariants = {
    initial: { opacity: 0.3, scale: 0.8 },
    animate: {
      opacity: [0.3, 0.5, 0.3],
      scale: [0.8, 1, 0.8],
      transition: {
        duration: 4,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
      },
    },
  }

  // Variantes para los beneficios
  const benefitVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.3 + i * 0.1,
        duration: 0.5,
      },
    }),
  }

  // Variantes para el borde
  const borderVariants = {
    initial: {
      backgroundPosition: "0% 50%",
    },
    animate: {
      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      transition: {
        duration: 15,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
      },
    },
  }

  return (
    <section id="soluciones" ref={ref} className="py-24 md:py-32 bg-[#0F0F0F] relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex items-center mb-4">
            <div className="h-1 w-10 bg-[#CCFF00] mr-3"></div>
            <p className="text-sm text-white/70">Nuestros planes</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Soluciones <span className="text-[#CCFF00]">a medida</span> para cada etapa
          </h2>
          <p className="text-lg text-white/70 max-w-3xl">
            Cada negocio tiene necesidades únicas. Nuestros planes están diseñados para adaptarse a tu etapa actual y
            crecer con vos.
          </p>
        </motion.div>

        <div className="mb-16" ref={promoRef}>
          {/* Tarjeta promocional especial con animaciones mejoradas */}
          <motion.div
            variants={promoVariants}
            initial="hidden"
            animate={promoInView ? "visible" : "hidden"}
            className="relative"
          >
            <motion.div
              className="p-[2px] rounded-2xl overflow-hidden"
              variants={borderVariants}
              initial="initial"
              animate="animate"
              style={{
                background:
                  "linear-gradient(90deg, rgba(204,255,0,0.3) 0%, rgba(151,71,255,0.3) 50%, rgba(204,255,0,0.3) 100%)",
                backgroundSize: "200% 100%",
              }}
            >
              <div className="bg-[#1A1A1A] rounded-2xl p-8 md:p-10 h-full group transition-all duration-300 relative overflow-hidden">
                {/* Efecto de brillo animado */}
                <motion.div
                  className="absolute -top-24 -right-24 w-48 h-48 bg-[#CCFF00]/10 rounded-full blur-3xl"
                  variants={glowVariants}
                  initial="initial"
                  animate="animate"
                ></motion.div>

                <motion.div
                  className="absolute -bottom-24 -left-24 w-48 h-48 bg-[#9747FF]/10 rounded-full blur-3xl"
                  variants={glowVariants}
                  initial="initial"
                  animate="animate"
                  transition={{ delay: 1 }}
                ></motion.div>

                <div className="relative z-10">
                <div className="flex items-start gap-4 mb-6">
                <motion.div
                      initial={{ scale: 0 }}
                      animate={promoInView ? { scale: 1, rotate: [0, 10, 0] } : { scale: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#CCFF00]/20 to-[#9747FF]/20 flex items-center justify-center flex-shrink-0"
                      >
                      <Gift className="w-6 h-6 text-[#CCFF00]" />
                    </motion.div>
                    <div className="space-y-1">
                      <motion.h3
                        initial={{ opacity: 0, y: -20 }}
                        animate={promoInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="text-2xl font-bold mb-2 text-[#CCFF00]"
                      >
                        {promoCard.title}
                      </motion.h3>
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={promoInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="text-white/70 mb-8"
                      >
                        {promoCard.description}
                      </motion.p>
                    </div>

                  </div>

                  <motion.div
                    className="mb-6 p-6 bg-[#0F0F0F] rounded-xl border border-white/5"
                    initial={{ opacity: 0, y: 20 }}
                    animate={promoInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    <p className="text-white/80 mb-6">{promoCard.details}</p>

                    <div className="space-y-4">
                      {promoCard.benefits.map((benefit, i) => (
                        <motion.div
                          key={i}
                          className="flex items-start"
                          custom={i}
                          variants={benefitVariants}
                          initial="hidden"
                          animate={promoInView ? "visible" : "hidden"}
                        >
                          <div className="w-5 h-5 rounded-full bg-[#CCFF00]/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                            <Check className="w-3 h-3 text-[#CCFF00]" />
                          </div>
                          <p className="text-white/90">{benefit}</p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={promoInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="text-white/80 mb-6 font-medium"
                  >
                    {promoCard.note}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={promoInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                    className="mt-6"
                  >
                    <motion.a
                      href={promoCard.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-4 px-4 text-sm sm:text-base text-center break-words whitespace-normal rounded-xl font-medium transition-all flex flex-wrap justify-center items-center bg-[#CCFF00] text-black hover:bg-white group"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <svg
                        className="w-5 h-5 mr-2"
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
                      {promoCard.cta}
                      <motion.div
                        className="ml-2"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
                      >
                        <ArrowRight className="w-5 h-5" />
                      </motion.div>
                    </motion.a>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Planes regulares con animaciones mejoradas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: plan.delay + 0.3 }}
              className={`relative ${plan.highlighted ? "md:-mt-4 md:mb-4" : ""}`}
              whileHover={{ y: -10 }}
            >
              <div
                className={`bg-[#1A1A1A] rounded-2xl p-8 border ${
                  plan.highlighted ? `border-${plan.accent}` : "border-white/10"
                } h-full group hover:border-[#CCFF00]/50 transition-all duration-300`}
              >
                {plan.highlighted && (
                  <motion.div
                    className="absolute -top-4 left-0 right-0 flex justify-center"
                    initial={{ opacity: 0, y: -10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
                    transition={{ duration: 0.5, delay: plan.delay + 0.5 }}
                  >
                    <div className="bg-[#9747FF] text-white text-xs font-medium px-4 py-1 rounded-full">
                      Recomendado
                    </div>
                  </motion.div>
                )}

                <div className="mb-6 flex items-center">
                  <motion.div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mr-4"
                    style={{ backgroundColor: `${plan.accent}20` }}
                    whileHover={{ scale: 1.1, backgroundColor: `${plan.accent}30` }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <plan.icon className="w-6 h-6" style={{ color: plan.accent }} />
                  </motion.div>
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                </div>

                <p className="text-white/70 mb-8">{plan.description}</p>

                <div className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <motion.div
                      key={i}
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.5, delay: plan.delay + 0.6 + i * 0.05 }}
                    >
                      <Check className="w-5 h-5 text-[#CCFF00] mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-white/90">{feature}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <motion.a
                    href={plan.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3 rounded-xl font-medium transition-all flex items-center justify-center ${
                      plan.highlighted
                        ? "bg-[#CCFF00] text-black hover:bg-white"
                        : "bg-white/10 text-white hover:bg-white/20"
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <svg
                      className="w-5 h-5 mr-2"
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
                    Solicitá este plan
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background elements animados */}
      <motion.div
        className="absolute top-1/3 left-0 w-64 h-64 bg-[#CCFF00]/5 rounded-full blur-3xl"
        animate={{
          x: [0, 20, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
      ></motion.div>

      <motion.div
        className="absolute bottom-1/3 right-0 w-64 h-64 bg-[#9747FF]/5 rounded-full blur-3xl"
        animate={{
          x: [0, -20, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: 2 }}
      ></motion.div>

      {/* Elementos decorativos animados */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={isInView ? { opacity: 1, scale: 1, rotate: 360 } : { opacity: 0, scale: 0 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute top-20 right-20 w-16 h-16 border border-[#CCFF00]/20 rounded-full hidden md:block"
      ></motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={isInView ? { opacity: 1, scale: 1, rotate: -360 } : { opacity: 0, scale: 0 }}
        transition={{ duration: 1.5, delay: 0.7 }}
        className="absolute bottom-20 left-20 w-24 h-24 border border-[#CCFF00]/10 rounded-full hidden md:block"
      ></motion.div>
    </section>
  )
}
