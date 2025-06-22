"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, TrendingUp, Heart, Award, BarChart3 } from "lucide-react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"

// Datos de los steps
const stepsData = [
  {
    id: 1,
    title: "¿Para qué quiero un Comunicador?",
    content: "Es muy probable que te hayas hecho esta pregunta apenas te contacté.\nEmpecemos por algunos conflictos que pueden resultarte familiares...",
    conflicts: [
      "La web está desactualizada, pero nadie sabe cómo arreglarla.",
      "No tenemos una presentación para mandarle a un cliente nuevo.",
      "Todos explicamos distinto lo que hacemos.",
      "Nos cuesta que nos entiendan cuando vendemos.",
      "El cliente pregunta y tardamos un día en responderle.",
      "Tenemos mil catálogos distintos, todos desordenados.",
      "Fuimos a un evento sin saber qué decir ni qué mostrar.",
      "Nos buscan en Google y no aparecemos o salimos mal."
    ]
  },
  {
    id: 2,
    title: "¿Cuándo necesito un Comunicador?",
    content: "Tal vez nunca pensaste en incorporar un Comunicador a tu empresa.\nY tiene lógica: tu rubro no vende por redes, no hace campañas, no vive del marketing. Pero...",
    questions: [
      "¿Qué pasa cuando un cliente te busca y no te encuentra?",
      "¿Cuando nadie sabe explicar bien qué hacés?",
      "¿Cuando cada vendedor responde distinto?",
      "¿Cuando vas a un evento y no sabés qué mostrar?"
    ],
    conclusion: "Ahí es donde entro como Comunicador. No para hacer marketing. Sino para ordenar, clarificar y profesionalizar la forma en que tu empresa se presenta, se expresa y se vincula."
  },
  {
    id: 3,
    title: "¿Qué puedo hacer como Comunicador para tu empresa?",
    benefits: [
      "Ordenar lo que decís y cómo lo decís",
      "Mejorar la forma en que tu empresa se muestra al mundo",
      "Ayudar a que tus clientes entiendan qué hacés y por qué elegirte",
      "Crear materiales profesionales, claros y coherentes",
      "Fortalecer tu identidad como marca sin perder tu esencia",
      "Optimizar canales de contacto y flujos de venta",
      "Mejorar la experiencia del cliente en cada punto de contacto",
      "Automatizar procesos de comunicación y seguimiento"
    ]
  },
  {
    id: 4,
    title: "¿Qué marca la diferencia con las empresas líderes del rubro?",
    content: "La identidad.\nY no, no estoy hablando de un logo bonito ni una paleta de colores llamativas.",
    explanation: "Es la forma en que una empresa le dice al mundo qué hace, cómo lo hace y qué la diferencia del resto. Las empresas que comunican con claridad y coherencia son las que generan confianza, construyen reputación y venden mejor.",
    conclusion: "Eso no te lo da pagar más. Te lo da el orden. Te lo da saber sentar las bases."
  },
  {
    id: 5,
    title: "¿Cuál es el próximo punto de inflexión para crecer?",
    subtitle: "Muchas empresas ya tienen:",
    assets: [
      "Producción sólida",
      "Clientes activos",
      "Canales básicos de venta",
      "Presencia digital básica"
    ],
    insight: "Pero llega un momento donde no alcanza con hacer más. Hay que comunicar mejor.",
    strategy: "Y ahí es donde mi trabajo se vuelve estratégico: Creo las condiciones para que la empresa pueda crecer con identidad, presencia y confianza."
  },
  {
    id: 6,
    title: "¿Qué puedo hacer por tu empresa?",
    services: {
      institucional: {
        title: "Comunicación Institucional",
        items: [
          "Redacción de textos institucionales (quiénes somos, historia, visión)",
          "Optimización de presencia digital (ficha de Google, sitio web, buscadores)",
          "Diseño de presentación institucional y materiales para eventos o visitas",
          "Construcción de relato y narrativa de marca",
          "Asesoramiento en identidad verbal y tono comunicacional"
        ]
      },
      comercial: {
        title: "Comunicación Comercial",
        items: [
          "Redacción de textos comerciales claros y funcionales",
          "Creación de catálogos digitales y fichas técnicas",
          "Organización del flujo de contacto con potenciales clientes",
          "Mensajes de contacto, seguimiento y posventa",
          "Comunicación con distribuidores y clientes actuales",
          "Acompañamiento en estrategias de fidelización"
        ]
      }
    }
  },
  {
    id: 7,
    title: "¿Qué resultados podés esperar?",
    results: [
      "Una imagen profesional y coherente",
      "Clientes que entienden y valoran tu propuesta",
      "Procesos de venta más claros y eficaces",
      "Materiales comerciales que representan tu verdadero valor",
      "Presencia sólida tanto online como presencial",
      "Bases firmes para cualquier acción futura (marketing, publicidad, expansión)"
    ]
  },
  {
    id: 8,
    title: "¿Qué me gustaría hacer por vos?",
    proposal: "Me gustaría tomar las riendas de tu presencia digital, de tu voz institucional y de la comunicación en cada etapa del proceso de venta.",
    goal: "¿Para qué? Para llevar todo eso al siguiente nivel: la profesionalización de una comunicación unificada, clara y coherente.",
    conclusion: "Porque cuando todo lo que decís como empresa está alineado —desde una ficha de Google hasta una respuesta comercial—, no solo se te entiende mejor… se te elige con más confianza."
  }
]

export default function StepsPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [direction, setDirection] = useState(0)
  const [currentConflict, setCurrentConflict] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState(0)
  const [dragOffset, setDragOffset] = useState(0)

  // Asegurar que la página se cargue desde el inicio
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Scroll al top cada vez que cambia el step
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [currentStep])

  // Carrusel automático para el Step 1
  useEffect(() => {
    if (currentStep === 1 && !isDragging && stepsData[0]) {
      const interval = setInterval(() => {
        setCurrentConflict((prev) => (prev + 1) % (stepsData[0]?.conflicts?.length || 1))
      }, 3000) // Cambia cada 3 segundos

      return () => clearInterval(interval)
    }
  }, [currentStep, isDragging])

  // Funciones para el drag/swipe
  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true)
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX
    setDragStart(clientX)
    setDragOffset(0)
  }

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX
    const offset = clientX - dragStart
    setDragOffset(offset)
  }

  const handleDragEnd = () => {
    if (!isDragging || !stepsData[0]) return
    setIsDragging(false)
    
    // Determinar dirección del swipe
    if (Math.abs(dragOffset) > 50) { // Umbral mínimo para considerar swipe
      if (dragOffset > 0) {
        // Swipe hacia la derecha - anterior
        setCurrentConflict((prev) => 
          prev === 0 ? (stepsData[0]?.conflicts?.length || 1) - 1 : prev - 1
        )
      } else {
        // Swipe hacia la izquierda - siguiente
        setCurrentConflict((prev) => (prev + 1) % (stepsData[0]?.conflicts?.length || 1))
      }
    }
    
    setDragOffset(0)
  }

  const nextStep = () => {
    if (currentStep < stepsData.length) {
      setDirection(1)
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setDirection(-1)
      setCurrentStep(currentStep - 1)
    }
  }

  const currentStepData = stepsData[currentStep - 1]

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="text-center max-w-6xl mx-auto mb-20">
            <motion.h1 
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-5xl md:text-7xl font-bold mb-8 leading-tight"
            >
              ¿Para qué quiero un <span className="text-[#CCFF00]">Comunicador</span>?
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-lg md:text-2xl text-white/70 max-w-5xl mx-auto mb-16 leading-relaxed"
              style={{ whiteSpace: 'pre-line' }}
            >
              {currentStepData.content}
            </motion.p>
            
            {/* Carrusel de testimonios */}
            <div className="relative max-w-4xl mx-auto">
              <div className="overflow-hidden">
                <div 
                  className="h-32 md:h-48 flex items-center justify-center cursor-grab active:cursor-grabbing"
                  onMouseDown={handleDragStart}
                  onMouseMove={handleDragMove}
                  onMouseUp={handleDragEnd}
                  onMouseLeave={handleDragEnd}
                  onTouchStart={handleDragStart}
                  onTouchMove={handleDragMove}
                  onTouchEnd={handleDragEnd}
                >
                  <motion.div
                    key={currentConflict}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ 
                      opacity: 1, 
                      x: isDragging ? dragOffset : 0 
                    }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ 
                      duration: isDragging ? 0 : 0.8, 
                      ease: "easeInOut" 
                    }}
                    className="px-4 md:px-8 w-full flex justify-center"
                    style={{ userSelect: 'none' }}
                  >
                    <div className="relative group flex items-center justify-center">
                      {/* Texto del conflicto con signo de alerta */}
                      <div className="flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-4 max-w-4xl mx-auto px-4">
                        <div className="w-6 h-6 md:w-8 md:h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                          <span className="text-white font-bold text-sm md:text-lg">!</span>
                        </div>
                        <p className="text-lg md:text-2xl text-white/90 font-medium leading-relaxed group-hover:text-white transition-colors duration-300 text-center max-w-3xl">
                          "{currentStepData.conflicts?.[currentConflict] || ''}"
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
              
              {/* Indicadores de navegación */}
              <div className="flex justify-center space-x-3 mt-12">
                {currentStepData.conflicts?.map((_, index) => (
                  <motion.button
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                    onClick={() => setCurrentConflict(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                      index === currentConflict ? 'bg-[#CCFF00] scale-125' : 'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        )

      case 2:
        return (
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              {currentStepData.title}
            </h1>
            <p className="text-xl text-white/70 mb-16 leading-relaxed" style={{ whiteSpace: 'pre-line' }}>
              {currentStepData.content}
            </p>
            
            <div className="space-y-8 mb-16">
              {currentStepData.questions?.map((question, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="flex items-start space-x-6 group max-w-3xl mx-auto"
                >
                  {/* Número de la pregunta */}
                  <div className="w-12 h-12 bg-[#CCFF00] rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg mt-1">
                    <span className="text-black font-bold text-xl">{index + 1}</span>
                  </div>
                  
                  {/* Pregunta */}
                  <p className="text-2xl text-white/90 font-medium leading-relaxed group-hover:text-white transition-colors duration-300 text-left flex-1">
                    {question}
                  </p>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="mt-16 mb-20"
            >
              <div className="text-center max-w-4xl mx-auto">
                <h3 className="text-3xl font-bold text-[#CCFF00] mb-6">
                  Ahí es donde entro como Comunicador
                </h3>
                <div className="space-y-4">
                  <p className="text-xl text-white/70">
                    No para hacer marketing.
                  </p>
                  <p className="text-2xl text-white/90 font-semibold leading-relaxed">
                    Sino para ordenar, clarificar y profesionalizar la forma en que tu empresa se presenta, se expresa y se vincula.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )

      case 3:
        return (
          <div className="text-center max-w-6xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-12">
              {currentStepData.title}
            </h1>
            
            <div className="grid md:grid-cols-2 gap-6 mb-20">
              {currentStepData.benefits?.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="flex items-center space-x-4 group"
                >
                  <div className="w-10 h-10 bg-[#CCFF00] rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <span className="text-black font-bold text-sm">{index + 1}</span>
                  </div>
                  <p className="text-lg text-white/90 text-left group-hover:text-white transition-colors duration-300 leading-relaxed">
                    {benefit}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        )

      case 4:
        return (
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              {currentStepData.title}
            </h1>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8 mb-20"
            >
              <p className="text-2xl text-[#CCFF00] font-bold">
                La identidad.
              </p>
              <p className="text-2xl text-white font-bold">
                Y no, no estoy hablando de un logo bonito ni una paleta de colores llamativas.
              </p>
              
              <div className="bg-gradient-to-r from-blue-500/10 to-blue-600/10 border border-blue-500/30 rounded-2xl p-8">
                <p className="text-xl text-white/90 leading-relaxed mb-6">
                  {currentStepData.explanation}
                </p>
                
                {/* Estadísticas destacadas */}
                <div className="bg-gradient-to-br from-[#CCFF00]/15 via-[#CCFF00]/10 to-[#CCFF00]/5 border-2 border-[#CCFF00]/40 rounded-2xl p-8 mb-6 relative overflow-hidden">
                  {/* Efecto de brillo de fondo */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#CCFF00]/5 to-transparent opacity-50"></div>
                  
                  {/* Elementos decorativos */}
                  <div className="absolute top-2 right-2 w-3 h-3 bg-[#CCFF00] rounded-full opacity-60"></div>
                  <div className="absolute bottom-4 left-4 w-2 h-2 bg-[#CCFF00] rounded-full opacity-40"></div>
                  
                  <div className="relative z-10">
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center space-x-2 bg-[#CCFF00]/20 rounded-full px-4 py-2 mb-3">
                        <BarChart3 className="w-5 h-5 text-[#CCFF00]" />
                        <span className="text-sm text-[#CCFF00] font-bold uppercase tracking-wider">Datos que respaldan esta afirmación</span>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-center group"
                      >
                        <div className="relative">
                          <div className="text-4xl md:text-5xl font-black text-[#CCFF00] mb-2 group-hover:scale-110 transition-transform duration-300">
                            23%
                          </div>
                          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                            <TrendingUp className="w-2 h-2 text-white" />
                          </div>
                        </div>
                        <p className="text-sm text-white/90 font-medium mb-2">Aumento promedio en ingresos</p>
                        <p className="text-xs text-white/60">de marcas con comunicación clara</p>
                        <div className="mt-3 inline-flex items-center space-x-1 bg-white/10 rounded-full px-3 py-1">
                          <TrendingUp className="w-3 h-3 text-[#CCFF00]" />
                          <span className="text-xs text-white/70">Lucidpress</span>
                        </div>
                      </motion.div>
                      
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-center group"
                      >
                        <div className="relative">
                          <div className="text-4xl md:text-5xl font-black text-[#CCFF00] mb-2 group-hover:scale-110 transition-transform duration-300">
                            81%
                          </div>
                          <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                            <Heart className="w-2 h-2 text-white fill-current" />
                          </div>
                        </div>
                        <p className="text-sm text-white/90 font-medium mb-2">De clientes necesita confiar</p>
                        <p className="text-xs text-white/60">en una marca para comprarle</p>
                        <div className="mt-3 inline-flex items-center space-x-1 bg-white/10 rounded-full px-3 py-1">
                          <Award className="w-3 h-3 text-[#CCFF00]" />
                          <span className="text-xs text-white/70">Edelman</span>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="text-2xl text-[#CCFF00] font-semibold">
                {currentStepData.conclusion}
              </p>
            </motion.div>
          </div>
        )

      case 5:
        return (
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              {currentStepData.title}
            </h1>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8 mb-20"
            >
              <p className="text-2xl text-[#CCFF00] font-bold mb-6">
                {currentStepData.subtitle}
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {currentStepData.assets?.map((asset, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="bg-gradient-to-r from-purple-500/10 to-purple-600/10 border border-purple-500/30 rounded-2xl p-4 flex items-center"
                  >
                    <div className="w-8 h-8 bg-[#CCFF00] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-black font-bold text-sm">✓</span>
                    </div>
                    <p className="text-lg text-white/90 text-left">{asset}</p>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-12">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="text-center max-w-4xl mx-auto"
                >
                  <div className="bg-gradient-to-r from-[#CCFF00]/5 to-[#CCFF00]/10 border border-[#CCFF00]/20 rounded-3xl p-10 backdrop-blur-sm">
                    <h3 className="text-3xl font-bold text-[#CCFF00] mb-6">
                      ¿Cuál es el próximo paso?
                    </h3>
                    <div className="space-y-6">
                      <p className="text-2xl text-white/90 leading-relaxed">
                        Llega un momento donde no alcanza con hacer más.
                      </p>
                      <p className="text-3xl font-bold text-white">
                        Hay que comunicar mejor.
                      </p>
                      <div className="w-24 h-1 bg-[#CCFF00] mx-auto my-8"></div>
                      <p className="text-xl text-[#CCFF00] font-semibold leading-relaxed">
                        Y ahí es donde mi trabajo se vuelve estratégico:
                      </p>
                      <p className="text-2xl text-white/90 leading-relaxed">
                        Creo las condiciones para que la empresa pueda crecer con identidad, presencia y confianza.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        )

      case 6:
        return (
          <div className="text-center max-w-6xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-12">
              {currentStepData.title}
            </h1>
            
            <div className="grid lg:grid-cols-2 gap-8 mb-20">
              {/* Comunicación Comercial */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-br from-[#1A1A1A] to-[#0F0F0F] border border-[#CCFF00]/20 rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold text-[#CCFF00] mb-6">
                  {currentStepData.services?.comercial?.title}
                </h3>
                <div className="space-y-4 text-left">
                  {currentStepData.services?.comercial?.items?.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-center"
                    >
                      <div className="w-2 h-2 bg-[#CCFF00] rounded-full mr-4 flex-shrink-0"></div>
                      <p className="text-white/80">{item}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Comunicación Institucional */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-gradient-to-br from-[#1A1A1A] to-[#0F0F0F] border border-[#CCFF00]/20 rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold text-[#CCFF00] mb-6">
                  {currentStepData.services?.institucional?.title}
                </h3>
                <div className="space-y-4 text-left">
                  {currentStepData.services?.institucional?.items?.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-center"
                    >
                      <div className="w-2 h-2 bg-[#CCFF00] rounded-full mr-4 flex-shrink-0"></div>
                      <p className="text-white/80">{item}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        )

      case 7:
        return (
          <div className="text-center max-w-6xl mx-auto">
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-12">
              {currentStepData.title}
            </h1>
            
            <div className="grid lg:grid-cols-2 gap-8 mb-20">
              {/* Comunicación Comercial */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-br from-[#1A1A1A] to-[#0F0F0F] border border-[#CCFF00]/20 rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold text-[#CCFF00] mb-6">
                  Comunicación Comercial
                </h3>
                <div className="space-y-4 text-left">
                  {[
                    "Flujo de conversación optimizado acorde a tus clientes",
                    "Atracción de potenciales clientes gracias a la claridad del negocio",
                    "Clientes que entienden y valoran tu propuesta",
                    "Materiales comerciales que representan tu verdadero valor",
                    "Menos fricción en el proceso de venta",
                    "Más confianza para cerrar negocios y fidelizar"
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-center"
                    >
                      <div className="w-2 h-2 bg-[#CCFF00] rounded-full mr-4 flex-shrink-0"></div>
                      <p className="text-white/80">{item}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Comunicación Institucional */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-gradient-to-br from-[#1A1A1A] to-[#0F0F0F] border border-[#CCFF00]/20 rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold text-[#CCFF00] mb-6">
                  Comunicación Institucional
                </h3>
                <div className="space-y-4 text-left">
                  {[
                    "Imagen profesional, sólida y confiable",
                    "Presencia digital ordenada y coherente",
                    "Materiales de comunicación unificados y consistentes",
                    "Canales alineados con el propósito de la empresa",
                    "Voz institucional consistente en cada punto de contacto",
                    "Percepción de valor mejorada hacia la empresa"
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-center"
                    >
                      <div className="w-2 h-2 bg-[#CCFF00] rounded-full mr-4 flex-shrink-0"></div>
                      <p className="text-white/80">{item}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        )

      case 8:
        return (
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-12">
              {currentStepData.title}
            </h1>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8 mb-20"
            >
              <div className="bg-gradient-to-r from-[#CCFF00]/10 to-[#CCFF00]/5 border border-[#CCFF00]/30 rounded-2xl p-8">
                <p className="text-2xl text-white/90 mb-6 leading-relaxed">
                  {currentStepData.proposal}
                </p>
                <p className="text-xl text-[#CCFF00] font-semibold">
                  {currentStepData.goal}
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-[#1A1A1A] to-[#0F0F0F] border border-white/10 rounded-2xl p-8">
                <p className="text-xl text-white/80 leading-relaxed">
                  {currentStepData.conclusion}
                </p>
              </div>
            </motion.div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-[#0F0F0F] text-white relative">
      {/* Indicador de progreso */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <div className="bg-[#1A1A1A]/80 backdrop-blur-sm border-b border-white/10">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <span className="text-sm text-white/70">Paso {currentStep} de {stepsData.length}</span>
                <div className="w-32 bg-white/20 rounded-full h-2">
                  <div 
                    className="bg-[#CCFF00] h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(currentStep / stepsData.length) * 100}%` }}
                  ></div>
                </div>
              </div>
              <div className="text-sm text-white/70">
                {Math.round((currentStep / stepsData.length) * 100)}%
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contenido principal */}
      <main className="pt-32 pb-20 px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: direction * 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -direction * 100 }}
            transition={{ duration: 0.5 }}
            className="min-h-[calc(100vh-12rem)] flex items-center justify-center"
          >
            {renderStepContent()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Navegación */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
        <div className="flex items-center space-x-4">
          {currentStep > 1 && (
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={prevStep}
              className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 backdrop-blur-sm border border-white/20"
            >
              <ChevronLeft className="w-5 h-5" />
              <span>Anterior</span>
            </motion.button>
          )}
          
          {currentStep < stepsData.length && (
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={nextStep}
              className="bg-[#CCFF00] hover:bg-[#CCFF00]/90 text-black px-8 py-3 rounded-full font-bold transition-all duration-300 flex items-center space-x-2 shadow-lg"
            >
              <span>Siguiente</span>
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          )}

          {currentStep === stepsData.length && (
            <motion.a
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              href="https://wa.me/543493415669?text=Hola! Me interesa seguir charlando sobre comunicación estratégica. ¿Podemos agendar una llamada?"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#CCFF00] hover:bg-[#CCFF00]/90 text-black px-8 py-3 rounded-full font-bold transition-all duration-300 flex items-center space-x-2 shadow-lg"
            >
              <span>¡Hablemos!</span>
              <FontAwesomeIcon icon={faWhatsapp} className="w-5 h-5" />
            </motion.a>
          )}
        </div>
      </div>
    </div>
  )
} 