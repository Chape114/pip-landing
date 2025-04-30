"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Check, Zap, BarChart, Globe } from "lucide-react"

export default function PricingPlans() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

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
        "Formulario de contacto",
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
        "Blog integrado",
        "Animaciones y microinteracciones",
        "Estrategia de contenido",
        "Optimización SEO avanzada",
        "Integración con herramientas de marketing",
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
        "Múltiples idiomas",
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: plan.delay }}
              className={`relative ${plan.highlighted ? "md:-mt-4 md:mb-4" : ""}`}
            >
              <div
                className={`bg-[#1A1A1A] rounded-2xl p-8 border ${
                  plan.highlighted ? `border-${plan.accent}` : "border-white/10"
                } h-full group hover:border-[#CCFF00]/50 transition-all duration-300`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-0 right-0 flex justify-center">
                    <div className="bg-[#9747FF] text-white text-xs font-medium px-4 py-1 rounded-full">
                      Recomendado
                    </div>
                  </div>
                )}

                <div className="mb-6 flex items-center">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mr-4"
                    style={{ backgroundColor: `${plan.accent}20` }}
                  >
                    <plan.icon className="w-6 h-6" style={{ color: plan.accent }} />
                  </div>
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                </div>

                <p className="text-white/70 mb-8">{plan.description}</p>

                <div className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start">
                      <Check className="w-5 h-5 text-[#CCFF00] mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-white/90">{feature}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <a
                    href={plan.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3 rounded-xl font-medium transition-colors flex items-center justify-center ${
                      plan.highlighted
                        ? "bg-[#CCFF00] text-black hover:bg-white"
                        : "bg-white/10 text-white hover:bg-white/20"
                    }`}
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
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute top-1/3 left-0 w-64 h-64 bg-[#CCFF00]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-0 w-64 h-64 bg-[#9747FF]/5 rounded-full blur-3xl"></div>

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
