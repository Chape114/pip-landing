"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { Check, ArrowRight, MessageSquare, Target, Users, TrendingUp, FileText, Calendar, Star } from "lucide-react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

// Datos de la propuesta
const proposalData = {
  title: "¿Para qué caraj* necesito un comunicador?",
  subtitle: "Marca + Ventas + Continuidad",
  description: "Ofrezco un acompañamiento estratégico pensado para empresas que quieren ordenar su comunicación, verse mejor, vender más y construir relaciones comerciales duraderas.",
  
  // Ejes de trabajo
  workAxes: [
    {
      title: "Comunicación Institucional",
      description: "Para que tu marca exprese con claridad quién sos, qué hacés y por qué elegirte.",
      icon: MessageSquare,
      color: "bg-blue-500"
    },
    {
      title: "Comunicación Comercial", 
      description: "Para que cada punto de contacto con tus clientes (antes, durante y después de la venta) esté bien pensado y bien ejecutado.",
      icon: Target,
      color: "bg-green-500"
    }
  ],

  // Servicios incluidos
  services: [
    {
      title: "Optimización de ficha de Google y presencia digital básica",
      icon: Star,
      category: "Digital"
    },
    {
      title: "Redacción de textos institucionales y comerciales",
      icon: FileText,
      category: "Contenido"
    },
    {
      title: "Diseño de presentaciones, catálogos y materiales de venta",
      icon: FileText,
      category: "Diseño"
    },
    {
      title: "Kit de marca o presentación para distribuidores y nuevos clientes",
      icon: Users,
      category: "Marca"
    },
    {
      title: "Revisión de procesos de contacto, venta y seguimiento",
      icon: Target,
      category: "Procesos"
    },
    {
      title: "Automatizaciones simples (formularios, respuesta inicial, CRM básico)",
      icon: TrendingUp,
      category: "Automatización"
    },
    {
      title: "Acompañamiento estratégico en ferias o eventos empresariales",
      icon: Calendar,
      category: "Eventos"
    }
  ],

  // Proceso de trabajo
  process: [
    {
      step: "01",
      title: "Relevamiento inicial",
      description: "Análisis profundo de tu empresa, mercado y objetivos de comunicación"
    },
    {
      step: "02", 
      title: "Diagnóstico de puntos críticos",
      description: "Identificación de oportunidades y áreas de mejora en tu comunicación"
    },
    {
      step: "03",
      title: "Propuesta de mejora por etapas",
      description: "Plan estratégico personalizado con acciones priorizadas"
    },
    {
      step: "04",
      title: "Ejecución",
      description: "Desarrollo de textos, diseño, herramientas y automatizaciones"
    },
    {
      step: "05",
      title: "Seguimiento y evolución",
      description: "Acompañamiento mensual con ajustes y mejoras continuas"
    }
  ],

  // Resultados esperados
  results: [
    "Claridad y coherencia en todos tus canales de comunicación",
    "Procesos de venta más fluidos, profesionales y confiables",
    "Clientes que entienden lo que ofrecés y se sienten bien atendidos",
    "Materiales útiles para que vendas mejor y con menos fricción",
    "Una imagen de marca a la altura del valor que tu empresa ofrece",
    "Presencia sólida tanto online como en espacios comerciales presenciales"
  ],

  // Características del servicio
  features: {
    approach: "Trabajo de forma personalizada, con foco en el largo plazo.",
    methodology: "No aplico fórmulas genéricas ni entrego piezas sueltas.",
    focus: "Cada acción que propongo responde a un diagnóstico real, y cada paso que damos busca mejorar cómo comunicás y cómo vendés."
  }
}

export default function PropuestaPage() {
  const [showFullContent, setShowFullContent] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  // Asegurar que la página se cargue desde el inicio
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Pre-página
  if (!showFullContent) {
    return (
      <div className="min-h-screen bg-[#0F0F0F] text-white relative overflow-hidden">
        {/* Elementos decorativos flotantes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-20 left-10 w-4 h-4 bg-[#CCFF00]/30 rounded-full"
          />
          <motion.div
            animate={{
              y: [0, 30, 0],
              x: [0, 10, 0]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute top-40 right-20 w-6 h-6 bg-[#CCFF00]/20 rounded-full"
          />
          <motion.div
            animate={{
              y: [0, -15, 0],
              rotate: [0, -3, 0]
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute bottom-40 left-20 w-3 h-3 bg-[#CCFF00]/40 rounded-full"
          />
          <motion.div
            animate={{
              y: [0, 25, 0],
              x: [0, -15, 0]
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3
            }}
            className="absolute bottom-20 right-10 w-5 h-5 bg-[#CCFF00]/25 rounded-full"
          />
        </div>

        <main className="relative z-10 flex items-center justify-center min-h-screen px-6">
          <motion.div 
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-center max-w-4xl"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="mb-8"
            >
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            >
              ¿Para qué necesito un <span className="text-[#CCFF00]">Comunicador</span>?
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
            >
              <button
                onClick={() => setShowFullContent(true)}
                className="bg-[#CCFF00] text-black px-12 py-5 rounded-full font-bold text-lg hover:bg-[#CCFF00]/90 transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-[#CCFF00]/20"
              >
                Entrar
              </button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.1 }}
              className="text-white/60 mt-8 text-sm"
            >
            </motion.p>
          </motion.div>
        </main>
      </div>
    )
  }

  // Contenido completo de la propuesta
  return (
    <div className="min-h-screen bg-[#0F0F0F] text-white">
      <main className="pt-20 pb-20">
        {/* Hero section */}
        <section className="container mx-auto px-6 mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
            className="text-center"
          >

            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              ¿Para qué caraj* necesito un comunicador?
            </h1>

            <p className="text-xl text-white/70 max-w-4xl mx-auto mb-12">
              Es muy probable que te hayas hecho esta pregunta apenas te contacté. Empecemos por algunos conflictos que pueden resultarte familiares...
            </p>
            
            {/* Conflictos impactantes */}
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    text: "La web está desactualizada, pero nadie sabe cómo arreglarla.",
                    icon: "🌐",
                    color: "from-red-500/20 to-red-600/20",
                    border: "border-red-500/30"
                  },
                  {
                    text: "No tenemos una presentación para mandarle a un cliente nuevo.",
                    icon: "📄",
                    color: "from-orange-500/20 to-orange-600/20",
                    border: "border-orange-500/30"
                  },
                  {
                    text: "Todos explicamos distinto lo que hacemos.",
                    icon: "🗣️",
                    color: "from-yellow-500/20 to-yellow-600/20",
                    border: "border-yellow-500/30"
                  },
                  {
                    text: "Nos cuesta que nos entiendan cuando vendemos.",
                    icon: "💸",
                    color: "from-green-500/20 to-green-600/20",
                    border: "border-green-500/30"
                  },
                  {
                    text: "El cliente pregunta y tardamos un día en responderle.",
                    icon: "⏰",
                    color: "from-blue-500/20 to-blue-600/20",
                    border: "border-blue-500/30"
                  },
                  {
                    text: "Tenemos mil catálogos distintos, todos desordenados.",
                    icon: "📚",
                    color: "from-purple-500/20 to-purple-600/20",
                    border: "border-purple-500/30"
                  },
                  {
                    text: "Fuimos a una feria sin saber qué decir ni qué mostrar.",
                    icon: "🎪",
                    color: "from-pink-500/20 to-pink-600/20",
                    border: "border-pink-500/30"
                  },
                  {
                    text: "Nos buscan en Google y no aparecemos o salimos mal.",
                    icon: "🔍",
                    color: "from-indigo-500/20 to-indigo-600/20",
                    border: "border-indigo-500/30"
                  }
                ].map((conflict, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ 
                      duration: 0.8, 
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 100
                    }}
                    whileHover={{ 
                      scale: 1.05,
                      y: -10,
                      transition: { duration: 0.2 }
                    }}
                    className={`bg-gradient-to-br ${conflict.color} backdrop-blur-sm border ${conflict.border} rounded-2xl p-6 h-full relative group cursor-pointer transform transition-all duration-300 shadow-lg hover:shadow-2xl`}
                  >
                    {/* Efecto de brillo en hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                    
                    {/* Icono grande */}
                    <div className="text-4xl mb-4 text-center group-hover:scale-110 transition-transform duration-300">
                      {conflict.icon}
                    </div>
                    
                    {/* Texto del conflicto */}
                    <p className="text-white/90 text-sm leading-relaxed font-medium text-center group-hover:text-white transition-colors duration-300">
                      "{conflict.text}"
                    </p>
                    
                    {/* Efecto de borde brillante */}
                    <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#CCFF00]/50 transition-all duration-300"></div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Mensaje impactante debajo */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="mt-16"
            >
              <div className=" rounded-2xl p-8 max-w-4xl mx-auto">
                <h3 className="text-2xl md:text-3xl font-bold text-[#CCFF00] mb-4">
                  ¿Te suenan familiares estos problemas?
                </h3>
              </div>
            </motion.div>

            {/* Nueva sección: ¿Qué hago yo? */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="mt-16"
            >
              <div className="text-center max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-8">
                  Y entonces… <span className="text-[#CCFF00]">¿qué hago yo</span>?
                </h2>
                <div className="bg-gradient-to-r from-[#1A1A1A] to-[#0F0F0F] border border-[#CCFF00]/20 rounded-2xl p-8">
                  <p className="text-2xl md:text-3xl font-bold text-[#CCFF00] mb-6">
                    Trabajo sobre la comunicación de tu empresa.
                  </p>
                  <p className="text-xl text-white/80 leading-relaxed">
                    No desde el marketing, no desde la publicidad. Desde la base: <span className="text-white font-semibold">lo que decís, cómo lo decís y cómo se entiende</span>.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Ejes de trabajo */}
        <section className="container mx-auto px-6 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Trabajo sobre <span className="text-[#CCFF00]">dos ejes</span> complementarios
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {proposalData.workAxes.map((axis, index) => (
                <motion.div
                  key={axis.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-8 hover:border-[#CCFF00]/50 transition-colors relative"
                >
                  <div className="flex items-center mb-6">
                    <div className="bg-[#CCFF00] p-3 rounded-xl mr-4">
                      <axis.icon className="w-6 h-6 text-black" />
                    </div>
                    <h3 className="text-2xl font-bold">{axis.title}</h3>
                  </div>
                  <p className="text-white/70 text-lg">{axis.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Conector visual */}
        <div className="container mx-auto px-6 mb-8">
          <div className="flex justify-center">
            <div className="w-px h-12 bg-gradient-to-b from-[#CCFF00]/50 via-[#CCFF00] to-[#CCFF00]/50"></div>
          </div>
        </div>

        {/* Servicios */}
        <section className="container mx-auto px-6 mb-20">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                ¿Qué puedo hacer por tu empresa?
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Comunicación Institucional */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="bg-gradient-to-br from-[#1A1A1A] to-[#0F0F0F] border border-[#CCFF00]/20 rounded-2xl p-8 relative group"
              >
                {/* Efecto de borde superior */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#CCFF00]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="flex items-center mb-8">
                  <div className="bg-[#CCFF00] p-3 rounded-xl mr-4">
                    <MessageSquare className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#CCFF00]">Comunicación Institucional</h3>
                </div>
                
                <div className="space-y-4">
                  {[
                    "Redacción de textos institucionales",
                    "Diseño de kit de marca o presentación institucional",
                    "Optimización de la identidad verbal y visual",
                    "Unificación del mensaje en todos los canales",
                    "Asesoramiento para presencia en eventos y ferias empresariales",
                    "Mejora de la ficha de Google Business",
                    "Construcción de relato de marca y storytelling",
                    "Comunicación para relaciones institucionales o prensa",
                    "Apoyo a cultura organizacional e imagen empleadora",
                    "Presentación profesional en canales digitales"
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.2 + index * 0.05 }}
                      className="flex items-start group/item"
                    >
                      <div className="w-2 h-2 bg-[#CCFF00] rounded-full mt-2 mr-4 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-200"></div>
                      <p className="text-white/80 group-hover/item:text-white transition-colors duration-200">{item}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Comunicación Comercial */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-gradient-to-br from-[#1A1A1A] to-[#0F0F0F] border border-[#CCFF00]/20 rounded-2xl p-8 relative group"
              >
                {/* Efecto de borde superior */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-transparent to-[#CCFF00]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="flex items-center mb-8">
                  <div className="bg-[#CCFF00] p-3 rounded-xl mr-4">
                    <Target className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#CCFF00]">Comunicación Comercial</h3>
                </div>
                
                <div className="space-y-4">
                  {[
                    "Redacción de textos comerciales y de producto",
                    "Diseño de catálogos, fichas técnicas y PDFs para ventas",
                    "Optimización del flujo de contacto y atención al cliente",
                    "Creación de campañas de captación, venta o fidelización",
                    "Preparación de materiales de venta para stands o exposiciones",
                    "Automatización de presupuestos, pedidos o formularios de venta",
                    "Segmentación de base de clientes y comunicaciones personalizadas",
                    "Diseño de acciones posventa y de recompra",
                    "Activación de promociones y campañas estacionales",
                    "Seguimiento a leads o contactos sin cerrar"
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.05 }}
                      className="flex items-start group/item"
                    >
                      <div className="w-2 h-2 bg-[#CCFF00] rounded-full mt-2 mr-4 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-200"></div>
                      <p className="text-white/80 group-hover/item:text-white transition-colors duration-200">{item}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Metodología */}
        <section className="container mx-auto px-6 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-[#1A1A1A] to-[#0F0F0F] border border-white/10 rounded-3xl p-12"
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                ¿Cómo es mi <span className="text-[#CCFF00]">forma de trabajo</span>?
              </h2>
            </div>

            <div className="max-w-4xl mx-auto mb-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.1 }}
                className="relative"
              >
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-[#CCFF00] to-transparent"></div>
                <div className="pl-12 space-y-12">
                  <div className="relative">
                    <div className="absolute -left-16 top-2 w-3 h-3 bg-[#CCFF00] rounded-full"></div>
                    <p className="text-2xl md:text-3xl font-light text-white/90 leading-relaxed">
                      {proposalData.features.approach}
                    </p>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute -left-16 top-2 w-3 h-3 bg-[#CCFF00] rounded-full"></div>
                    <p className="text-2xl md:text-3xl font-light text-white/90 leading-relaxed">
                      {proposalData.features.methodology}
                    </p>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute -left-16 top-2 w-3 h-3 bg-[#CCFF00] rounded-full"></div>
                    <p className="text-2xl md:text-3xl font-light text-white/90 leading-relaxed">
                      {proposalData.features.focus}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold mb-8">Mi proceso incluye:</h3>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {proposalData.process.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="bg-[#0F0F0F] border border-white/10 rounded-xl p-6 h-full">
                    <div className="text-3xl font-bold text-[#CCFF00] mb-3">{step.step}</div>
                    <h4 className="text-lg font-bold mb-3">{step.title}</h4>
                    <p className="text-white/70 text-sm">{step.description}</p>
                  </div>
                  {index < proposalData.process.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                      <ArrowRight className="w-6 h-6 text-[#CCFF00]" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Resultados */}
        <section className="container mx-auto px-6 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                ¿Qué <span className="text-[#CCFF00]">resultados</span> busco conseguir?
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                {proposalData.results.map((result, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <div className="w-8 h-8 bg-[#CCFF00] rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-black font-bold text-sm">{index + 1}</span>
                    </div>
                    <p className="text-lg text-white/90 leading-relaxed">
                      {result}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* Estructura en niveles */}
        <section className="container mx-auto px-6 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                ¿Vas a invertir en <span className="text-[#CCFF00]">publicidad</span> sin tener claro qué estás diciendo?
              </h2>
            </div>

            <div className="max-w-4xl mx-auto mb-12">
              <p className="text-xl text-white/80 mb-6 leading-relaxed">
                Muchas empresas quieren "hacer marketing" o "salir en redes" cuando notan que necesitan más ventas o visibilidad.
              </p>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                Y está bien tener ese objetivo. Pero si antes no sentaste las bases de tu comunicación, lo más probable es que:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <p className="text-white/80">No se entienda lo que ofrecés</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <p className="text-white/80">No conectes con el tipo de cliente que realmente querés</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <p className="text-white/80">Gastes en campañas que no tienen retorno</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <p className="text-white/80">Culpen a la plataforma, al presupuesto o al cliente</p>
                </div>
              </div>

              <div className="bg-[#1A1A1A] border border-[#CCFF00]/20 rounded-2xl p-8 mb-8">
                <h3 className="text-2xl font-bold text-[#CCFF00] mb-4">¿Dónde está el error?</h3>
                <p className="text-lg text-white/80 mb-4">
                  En no haber hecho antes lo que debería hacerse primero:
                </p>
                <p className="text-xl font-semibold text-white">
                  ordenar, definir y construir tu identidad y tus mensajes como empresa.
                </p>
              </div>
            </div>

            {/* Gráfico de pirámide */}
            <div className="max-w-6xl mx-auto mb-12">
              <h3 className="text-3xl font-bold text-center mb-12">Estructura en niveles</h3>
              
              <div className="relative flex flex-col items-center">
                {/* Líneas conectoras de fondo */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-px h-full bg-gradient-to-b from-[#CCFF00]/30 via-[#CCFF00]/20 to-transparent"></div>
                </div>
                
                {/* Nivel 4 - Publicidad (más pequeño, arriba) */}
                <motion.div
                  initial={{ opacity: 0, y: -50, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="relative z-10 w-64 bg-gradient-to-br from-red-500/90 to-red-600/90 backdrop-blur-sm border border-red-400/50 rounded-2xl p-6 text-center shadow-2xl shadow-red-500/20 transform hover:scale-105 transition-all duration-300"
                >
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">4</span>
                  </div>
                  <div className="text-3xl mb-3">📢</div>
                  <h4 className="text-lg font-bold text-white mb-2">PUBLICIDAD</h4>
                  <p className="text-white/90 text-sm">Campañas, Anuncios, Redes pagas</p>
                </motion.div>

                {/* Conector */}
                <div className="w-px h-8 bg-gradient-to-b from-red-500/50 to-orange-500/50 my-2"></div>

                {/* Nivel 3 - Marketing */}
                <motion.div
                  initial={{ opacity: 0, y: -50, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="relative z-10 w-80 bg-gradient-to-br from-orange-500/90 to-orange-600/90 backdrop-blur-sm border border-orange-400/50 rounded-2xl p-6 text-center shadow-2xl shadow-orange-500/20 transform hover:scale-105 transition-all duration-300"
                >
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div className="text-3xl mb-3">🎯</div>
                  <h4 className="text-lg font-bold text-white mb-2">MARKETING</h4>
                  <p className="text-white/90 text-sm">Estrategia comercial, objetivos de captación</p>
                </motion.div>

                {/* Conector */}
                <div className="w-px h-8 bg-gradient-to-b from-orange-500/50 to-yellow-500/50 my-2"></div>

                {/* Nivel 2 - Comunicación */}
                <motion.div
                  initial={{ opacity: 0, y: -50, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="relative z-10 w-96 bg-gradient-to-br from-yellow-500/90 to-yellow-600/90 backdrop-blur-sm border border-yellow-400/50 rounded-2xl p-6 text-center shadow-2xl shadow-yellow-500/20 transform hover:scale-105 transition-all duration-300"
                >
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div className="text-3xl mb-3">💬</div>
                  <h4 className="text-lg font-bold text-white mb-2">COMUNICACIÓN</h4>
                  <p className="text-white/90 text-sm">Mensajes, tono, canales, identidad verbal y visual</p>
                </motion.div>

                {/* Conector */}
                <div className="w-px h-8 bg-gradient-to-b from-yellow-500/50 to-[#CCFF00]/50 my-2"></div>

                {/* Nivel 1 - Base Digital (más grande, abajo) */}
                <motion.div
                  initial={{ opacity: 0, y: -50, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="relative z-10 w-[28rem] bg-gradient-to-br from-[#CCFF00]/90 to-[#CCFF00]/80 backdrop-blur-sm border border-[#CCFF00]/70 rounded-2xl p-8 text-center shadow-2xl shadow-[#CCFF00]/30 transform hover:scale-105 transition-all duration-300"
                >
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#CCFF00] rounded-full flex items-center justify-center">
                    <span className="text-black font-bold text-sm">1</span>
                  </div>
                  <div className="text-4xl mb-4">🧱</div>
                  <h4 className="text-xl font-bold text-black mb-3">BASE DIGITAL ORGÁNICA</h4>
                  <p className="text-black/80 text-sm">Ficha de Google, Web, Catálogo, Materiales, Canales activos</p>
                </motion.div>

                {/* Efecto de brillo de fondo */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#CCFF00]/5 to-transparent rounded-full blur-3xl opacity-50"></div>
              </div>
            </div>

            {/* Enfoque explicado */}
            <div className="max-w-4xl mx-auto mb-12">
              <div className="bg-gradient-to-r from-[#1A1A1A] to-[#0F0F0F] border border-[#CCFF00]/20 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-[#CCFF00] mb-6 text-center">Tu enfoque explicado</h3>
                <div className="text-center">
                  <p className="text-xl text-white/90 mb-4 italic">
                    "Yo no vengo a hacer marketing ni publicidad.
                  </p>
                  <p className="text-xl text-white/90 mb-4 italic">
                    Vengo a crear las condiciones para que cuando lo hagas, funcione.
                  </p>
                  <p className="text-xl text-white/90 italic">
                    Trabajo desde la comunicación para que el día de mañana, cuando quieras invertir en visibilidad, esa inversión tenga sentido."
                  </p>
                </div>
              </div>
            </div>

            {/* Analogía */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-[#CCFF00] mb-4 text-center">🧠 ¿Querés una analogía?</h3>
                <p className="text-lg text-white/80 mb-4 leading-relaxed">
                  Publicar sin comunicar es como invitar gente a un local desordenado, mal iluminado y sin vendedor.
                </p>
                <p className="text-lg text-white/80 mb-4 leading-relaxed">
                  Van a entrar… y van a salir.
                </p>
                <p className="text-lg text-white/90 font-semibold leading-relaxed">
                  Yo te ayudo a tener ese local listo: claro, limpio, atractivo y con alguien que sepa qué decir.
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* CTA final */}
        <section className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center bg-gradient-to-r from-[#CCFF00]/10 to-[#CCFF00]/5 border border-[#CCFF00]/20 rounded-3xl p-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              ¿Listo para <span className="text-[#CCFF00]">transformar</span> tu comunicación?
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">
              Contactanos para discutir cómo podemos mejorar la comunicación de tu empresa y potenciar tus ventas
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/543493415669?text=Hola! Me interesa tu consultoría en comunicación estratégica. ¿Podemos agendar una llamada?"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#CCFF00] text-black px-8 py-4 rounded-full font-bold hover:bg-[#CCFF00]/90 transition-colors inline-block text-center"
              >
                <div className="flex items-center justify-center">
                  <span className="mr-2">¡Hablemos!</span>
                  <FontAwesomeIcon icon={faWhatsapp} className="w-4 h-4" />
                </div>
              </a>
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  )
} 