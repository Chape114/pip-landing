"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUpRight, ChevronDown, Plus, X, Compass, Layers, Radio, Zap } from "lucide-react"
import { Inter } from "next/font/google"
import Lenis from "lenis"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

const inter = Inter({ subsets: ["latin"] })

const WA = "https://wa.me/5493493415669"
const waText = (t: string) => `${WA}?text=${encodeURIComponent(t)}`

const headerLinks = [
  { label: "Sitio", href: "/" },
  { label: "Enfoque", href: "#logica" },
  { label: "El camino", href: "#el-camino" },
  { label: "Paquetes", href: "#paquetes-principales" },
  { label: "Tu situación", href: "#tu-situacion" },
  { label: "Complementos", href: "#complementos" },
]

const caminoSteps = [
  {
    id: "leer",
    title: "Lectura",
    line: "Entender el negocio y el contexto real.",
    body: "Se trabaja sobre lo que la empresa hace, cómo vende y qué dice hoy en digital. Sin supuestos livianos.",
    Icon: Compass,
  },
  {
    id: "orden",
    title: "Criterio",
    line: "Ordenar la oferta y los mensajes con lógica comercial.",
    body: "Se traduce lo complejo en algo explicable, jerárquico y usable antes de producir piezas sueltas.",
    Icon: Layers,
  },
  {
    id: "base",
    title: "Activación",
    line: "Abrir una puerta de entrada clara y funcional.",
    body: "Un canal o pieza concreta para que alguien que no te conozca pueda encontrarte, entenderte y consultarte.",
    Icon: Radio,
  },
  {
    id: "sprint",
    title: "Aceleración",
    line: "Acciones acotadas para generar oportunidades.",
    body: "Cuando la base está razonablemente ordenada, se puede salir a buscar conversaciones con foco y plazo.",
    Icon: Zap,
  },
] as const

type PackageDef = {
  id: string
  num: string
  title: string
  tagline: string
  forWho: string
  problem: string
  outcome: string
  detailLead: string
  scope: string[]
  notThis: string
  cta: string
  waPreset: string
}

const paquetes: PackageDef[] = [
  {
    id: "paquete-diagnostico",
    num: "01",
    title: "Diagnóstico Comercial Digital",
    tagline: "Ver con claridad qué frena al negocio en digital y qué conviene atacar primero.",
    forWho: "Equipos que sienten que “algo no cierra”: poca consulta, mensaje difuso, canales desalineados o decisiones a ciegas.",
    problem: "Muchas PyMEs invierten tiempo y dinero sin una foto integral de su situación comercial y digital.",
    outcome: "Un diagnóstico con lectura del negocio y su presencia actual, prioridades explícitas y un plan de acción ordenado.",
    detailLead: "Incluye revisión orientada a negocio (no a modas) y un documento de conclusiones accionables.",
    scope: [
      "Mapeo de oferta, públicos y recorrido comercial tal como está hoy.",
      "Revisión de presencia digital relevante (web, fichas, redes si aplican, WhatsApp organizacional, etc.).",
      "Detección de fricciones, vacíos y riesgos comerciales.",
      "Priorización: qué atender primero, qué puede esperar y qué no aporta.",
      "Plan de acción por etapas, alineado a recursos realistas de una PyME.",
    ],
    notThis: "No es un checklist genérico ni un “audit” decorativo: busca criterio para decidir.",
    cta: "Consultar este paquete",
    waPreset: "Hola, quiero avanzar con el Diagnóstico Comercial Digital de PiP Studio.",
  },
  {
    id: "paquete-definicion",
    num: "02",
    title: "Definición Comercial del Negocio",
    tagline: "Ordenar y traducir lo que hacés antes de implementar cualquier cosa.",
    forWho: "Industrias, servicios técnicos y negocios con oferta compleja que cuesta explicar en poco tiempo.",
    problem: "Cuando la oferta está desordenada, cualquier web o campaña hereda el mismo problema: confusión.",
    outcome: "Claridad sobre qué vendés, a quién, con qué promesa y qué pruebas usa el cliente para decidir.",
    detailLead: "Es trabajo de definición comercial y comunicación estratégica — no es “hacer marketing” ni diseño por diseño.",
    scope: [
      "Síntesis de líneas de producto/servicio y foco comercial.",
      "Definición o refinamiento de públicos y escenarios de compra.",
      "Propuesta de valor y mensajes maestros (qué decir, en qué orden).",
      "Criterios para hablar en web, fichas, correos y reuniones con coherencia.",
      "Entregables textuales y estructurales listos para pasar a diseño o desarrollo con terceros si hiciera falta.",
    ],
    notThis: "No reemplaza la excelencia operativa de la empresa: ordena la capa comercial que la sostiene.",
    cta: "Hablar de definición",
    waPreset: "Hola, necesito ordenar la definición comercial de mi negocio con PiP Studio.",
  },
  {
    id: "paquete-activacion",
    num: "03",
    title: "Activación Comercial Digital",
    tagline: "Una vía concreta para que alguien nuevo te encuentre, te entienda y te escriba.",
    forWho: "Empresas con buen trabajo de fondo pero sin una entrada digital clara, o con piezas sueltas que no conversan entre sí.",
    problem: "Estar “en internet” no alcanza si el camino hasta la consulta está roto o es confuso.",
    outcome: "Una activación acotada: un frente principal armado para generar consultas calificadas, sin depender de marketing masivo.",
    detailLead: "Se define un foco (por ejemplo: web institucional mínima viable, landing + WhatsApp, ficha optimizada, etc.) según tu caso.",
    scope: [
      "Definición del objetivo de captación y del mensaje mínimo viable.",
      "Arquitectura de la vía: qué ve el usuario, en qué orden y qué hace después.",
      "Requerimientos de contenido y piezas para implementar (copy, estructura, briefs).",
      "Coordinación con diseño/desarrollo si ya tenés proveedor, o encuadre para contratarlo.",
      "Criterios de medición simples: qué mirar para saber si la vía funciona.",
    ],
    notThis: "No promete viralidad: apunta a claridad, contacto y criterio.",
    cta: "Pedir activación",
    waPreset: "Hola, quiero revisar el paquete de Activación Comercial Digital con PiP Studio.",
  },
  {
    id: "paquete-captacion",
    num: "04",
    title: "Captación Comercial Activa",
    tagline: "Un sprint para salir a buscar conversaciones con foco, plazo y entregables.",
    forWho: "Negocios con base y mensaje razonablemente ordenados que necesitan movimiento comercial tangible.",
    problem: "Sin un disparador acotado, la captación se diluye o se confunde con “estar publicando”.",
    outcome: "Un plan de activación por tiempo limitado, con acciones concretas, responsables internos claros y seguimiento.",
    detailLead: "Es comercial y estratégico: se eligen pocos movimientos con intención, no una lista interminable de tareas.",
    scope: [
      "Definición del objetivo del sprint (por ejemplo: N consultas / reactivar cartera / abrir un vertical).",
      "Selección de palancas acotadas (contenido, mensajes directos, partners, fichas, email, etc.).",
      "Calendario ejecutable y criterios de calidad del mensaje.",
      "Plantillas y guiones base para no improvisar en cada contacto.",
      "Cierre con lectura de resultados y decisión sobre siguiente paso (con o sin continuidad).",
    ],
    notThis: "No es gestión mensual eterna: tiene inicio, foco y cierre.",
    cta: "Coordinar un sprint",
    waPreset: "Hola, quiero evaluar Captación Comercial Activa (sprint) con PiP Studio.",
  },
]

const situaciones = [
  {
    quote: "No tenés una base digital clara",
    hint: "Canales sueltos, mensajes distintos según el día o nadie sabe por dónde te contactan.",
    anchor: "#paquete-diagnostico",
    label: "Empezá por diagnóstico",
    packageTitle: "Diagnóstico Comercial Digital",
  },
  {
    quote: "Tu negocio es difícil de explicar",
    hint: "Tenés buen producto, pero cada vendedor lo cuenta distinto o la web no refleja lo que realmente vendés.",
    anchor: "#paquete-definicion",
    label: "Priorizá definición",
    packageTitle: "Definición Comercial del Negocio",
  },
  {
    quote: "Ya tenés algo armado, pero no genera oportunidades",
    hint: "Existe presencia, pero el recorrido hasta la consulta no funciona o no existe.",
    anchor: "#paquete-activacion",
    label: "Activá una vía",
    packageTitle: "Activación Comercial Digital",
  },
  {
    quote: "Querés salir a buscar clientes de forma más activa",
    hint: "La base está razonable y necesitás movimiento comercial con foco y plazo.",
    anchor: "#paquete-captacion",
    label: "Pensá en un sprint",
    packageTitle: "Captación Comercial Activa",
  },
]

const complementos = [
  "Participación en eventos, ferias y conferencias",
  "Rebranding (tercerizando diseño si hace falta, gestionado por PiP Studio)",
  "Armado de campañas comerciales",
  "Armado y organización de bases de datos de clientes y potenciales",
  "Producción de señalética interna",
  "Ploteos de vidrieras o ventanas",
  "Material comercial técnico",
  "Producción audiovisual aplicada a ventas",
  "Desarrollo web institucional o específico",
  "Catálogos digitales o ecommerce simplificado",
  "Optimización de Google Business Profile",
  "Organización del proceso comercial",
  "Lanzamiento de productos o líneas",
]

function scrollToId(id: string) {
  const el = document.getElementById(id.replace(/^#/, ""))
  el?.scrollIntoView({ behavior: "smooth", block: "start" })
}

export default function PaquetesPage() {
  const [expandedPackage, setExpandedPackage] = useState<string | null>(null)
  const [activeStep, setActiveStep] = useState<number>(0)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    })
    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
    return () => lenis.destroy()
  }, [])

  const sectionMotion = {
    initial: isMounted ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" as const },
    transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] as const },
  }

  return (
    <div className={`min-h-screen bg-white text-black ${inter.className}`}>
      <SiteHeader links={headerLinks} />

      {/* Hero */}
      <section
        className="relative bg-[#141414] text-white w-full min-h-[88vh] flex flex-col justify-end pb-16 md:pb-24 pt-28 md:pt-32 overflow-hidden"
        aria-labelledby="paquetes-hero-title"
      >
        <motion.div
          className="absolute inset-0 pointer-events-none z-0"
          animate={{ opacity: [0.12, 0.22, 0.12] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          style={{
            background: "radial-gradient(circle at 40% 30%, rgba(204, 255, 0, 0.06) 0%, transparent 65%)",
          }}
        />
        <div className="relative z-10 w-[98%] md:w-[80%] mx-auto px-4 md:px-8">
          <p className="text-sm text-white/50 mb-4">/ Proyectos cerrados</p>
          <h1
            id="paquetes-hero-title"
            className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-[4.25rem] font-medium leading-[1.12] md:leading-[1.15] mb-6 max-w-4xl"
            style={{ letterSpacing: "-0.08em" }}
          >
            Proyectos con inicio y fin.{" "}
            <span className="text-[#CCFF00]">Claridad comercial</span> como eje.
          </h1>
          <p className="text-lg md:text-xl text-white/75 max-w-2xl mb-10 leading-relaxed">
            PiP Studio también trabaja por paquetes cerrados: entregables concretos, plazos definidos y criterio estratégico. No todo
            negocio necesita una mensualidad para empezar: a veces necesita orden, definición o una base digital que funcione.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
            <a
              href={waText("Hola, quiero conversar sobre proyectos cerrados con PiP Studio.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#CCFF00] text-[#141414] px-6 py-3 rounded-full font-medium text-sm md:text-base hover:bg-[#b8e600] transition-colors"
            >
              Escribime por WhatsApp
              <ArrowUpRight className="w-5 h-5" />
            </a>
            <button
              type="button"
              onClick={() => scrollToId("paquetes-principales")}
              className="inline-flex items-center justify-center gap-2 border border-white/30 bg-[#2a2a2a] hover:bg-[#333] px-6 py-3 rounded-full font-medium text-sm md:text-base transition-colors text-white"
            >
              Ver paquetes principales
              <ChevronDown className="w-5 h-5 text-[#CCFF00]" />
            </button>
          </div>
        </div>
        <div className="pointer-events-none absolute bottom-6 right-4 md:right-[10%] opacity-[0.12] w-40 h-56 md:w-52 md:h-72">
          <Image src="/pipstudio2/ccff00.png" alt="" fill className="object-contain object-bottom" aria-hidden />
        </div>
      </section>

      {/* Cambio de lógica */}
      <section id="logica" className="bg-white pt-16 md:pt-24 pb-16 px-4 md:px-8 scroll-mt-24">
        <div className="w-[98%] md:w-[80%] mx-auto">
          <motion.div className="flex justify-between items-start mb-4" {...sectionMotion}>
            <p className="text-sm text-gray-500">/ Enfoque</p>
            <p className="text-sm text-gray-500">(02)</p>
          </motion.div>
          <motion.div className="grid grid-cols-1 md:grid-cols-10 gap-6 mb-6" {...sectionMotion}>
            <div className="md:col-span-7">
              <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-medium" style={{ letterSpacing: "-0.08em" }}>
                Muchas empresas no necesitan “marketing permanente” de entrada.
              </h2>
            </div>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
            initial={isMounted ? { opacity: 0, y: 16 } : false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="space-y-4 text-gray-700 text-base md:text-lg leading-relaxed">
              <p>
                Necesitan <strong className="text-black font-semibold">orden</strong>, una forma clara de explicar lo que hacen y una{" "}
                <strong className="text-black font-semibold">base digital</strong> que no las deje mal paradas cuando llega una consulta.
              </p>
              <p>
                PiP Studio trabaja con lógica por etapas: primero entender, después ordenar, luego activar una entrada comercial y recién
                ahí acelerar con acciones acotadas. Cada negocio llega en un punto distinto: el trabajo se adapta al momento, no al
                calendario de una agencia genérica.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden bg-[#EBEBEB] p-1">
              <div className="bg-[#141414] text-white rounded-xl p-6 md:p-8 h-full">
                <p className="text-xs uppercase tracking-wide text-white/50 mb-3">Para equipos que piensan en serio</p>
                <ul className="space-y-4">
                  {[
                    "PyMEs industriales y proveedoras.",
                    "Servicios técnicos o complejos de explicar.",
                    "Negocios que crecieron con boca a boca y hoy necesitan estructura.",
                    "Empresas con buen producto y mala traducción comercial.",
                  ].map((line) => (
                    <li key={line} className="flex gap-3 items-start">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#CCFF00] shrink-0" />
                      <span className="text-sm md:text-base text-white/85 leading-relaxed">{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* El camino */}
      <section id="el-camino" className="bg-[#282828] text-white py-16 md:py-24 px-4 md:px-8 scroll-mt-24">
        <div className="w-[98%] md:w-[80%] mx-auto">
          <motion.div className="flex justify-between items-start mb-4" {...sectionMotion}>
            <p className="text-sm text-white/45">/ El camino</p>
            <p className="text-sm text-white/45">(03)</p>
          </motion.div>
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-medium mb-4 max-w-3xl"
            style={{ letterSpacing: "-0.08em" }}
            {...sectionMotion}
          >
            Un recorrido lógico, sin saltarse etapas.
          </motion.h2>
          <motion.p className="text-white/65 text-base md:text-lg mb-10 max-w-2xl" {...sectionMotion}>
            Tocá cada etapa para ver qué significa en la práctica. Los paquetes se apoyan en esta secuencia; no todos los negocios arrancan
            en el mismo lugar.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 md:gap-4">
            {caminoSteps.map((step, idx) => {
              const Icon = step.Icon
              const active = activeStep === idx
              return (
                <button
                  key={step.id}
                  type="button"
                  onClick={() => setActiveStep(idx)}
                  className={`text-left rounded-2xl p-1 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CCFF00] focus-visible:ring-offset-2 focus-visible:ring-offset-[#282828] ${
                    active ? "bg-[#CCFF00]" : "bg-[#3a3a3a] hover:bg-[#444]"
                  }`}
                  aria-pressed={active}
                  aria-controls="camino-detalle"
                >
                  <div
                    className={`rounded-xl p-5 md:p-6 min-h-[200px] flex flex-col gap-3 ${
                      active ? "bg-[#141414] text-white" : "bg-[#2a2a2a] text-white"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span
                        className={`text-xs font-medium ${active ? "text-[#CCFF00]" : "text-white/45"}`}
                        aria-hidden
                      >
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <Icon className={`w-5 h-5 ${active ? "text-[#CCFF00]" : "text-white/50"}`} aria-hidden />
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold leading-tight">{step.title}</h3>
                    <p className={`text-sm leading-relaxed ${active ? "text-white/80" : "text-white/65"}`}>{step.line}</p>
                  </div>
                </button>
              )
            })}
          </div>

          <motion.div
            id="camino-detalle"
            key={activeStep}
            role="region"
            aria-live="polite"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            className="mt-8 rounded-2xl bg-[#141414] border border-white/10 p-6 md:p-8"
          >
            <p className="text-white/90 text-base md:text-lg leading-relaxed max-w-3xl">{caminoSteps[activeStep].body}</p>
          </motion.div>
        </div>
      </section>

      {/* Paquetes principales */}
      <section id="paquetes-principales" className="pt-16 md:pt-24 pb-8 px-4 md:px-8 scroll-mt-24">
        <div className="w-[98%] md:w-[80%] mx-auto">
          <motion.div className="flex justify-between items-start mb-4" {...sectionMotion}>
            <p className="text-sm text-gray-500">/ Paquetes principales</p>
            <p className="text-sm text-gray-500">(04)</p>
          </motion.div>
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-medium mb-4"
            style={{ letterSpacing: "-0.08em" }}
            {...sectionMotion}
          >
            Cuatro formas de trabajar con foco y entregables.
          </motion.h2>
          <motion.p className="text-gray-600 text-base md:text-lg mb-10 max-w-2xl" {...sectionMotion}>
            Compará de un vistazo. Expandí el que te represente: vas a ver para quién es, qué resuelve y qué se lleva el equipo.
          </motion.p>

          <div className="grid grid-cols-1 gap-3 md:gap-4">
            {paquetes.map((pkg) => {
              const open = expandedPackage === pkg.id
              return (
                <article
                  key={pkg.id}
                  id={pkg.id}
                  className="rounded-2xl overflow-hidden bg-[#EBEBEB] p-1 scroll-mt-28"
                >
                  <div
                    className={`rounded-xl relative overflow-hidden transition-all duration-700 ${
                      open ? "bg-white border border-gray-200" : "bg-[#2a2a2a]"
                    }`}
                    style={{
                      backgroundImage: open ? "none" : `url('/pipstudio2/Diseño sin título (8).png')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      transition:
                        "background-color 0.75s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.75s cubic-bezier(0.16, 1, 0.3, 1)",
                    }}
                  >
                    {!open && <div className="absolute inset-0 bg-[#2a2a2a]/85 rounded-xl pointer-events-none" aria-hidden />}

                    <div className="relative z-10">
                      {!open && (
                        <button
                          type="button"
                          onClick={() => setExpandedPackage(pkg.id)}
                          className="w-full flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-left px-4 py-4 md:px-6 md:py-5"
                          aria-expanded={false}
                          aria-controls={`${pkg.id}-panel`}
                        >
                          <div className="flex items-start gap-4">
                            <span className="text-2xl md:text-3xl font-semibold text-[#CCFF00] tabular-nums">{pkg.num}</span>
                            <div>
                              <h3 className="text-base md:text-lg font-semibold text-white leading-snug">{pkg.title}</h3>
                              <p className="text-sm text-white/70 mt-1 max-w-2xl">{pkg.tagline}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3 shrink-0 self-end sm:self-center">
                            <span className="text-xs text-white/50 hidden sm:inline">Ver detalle</span>
                            <ChevronDown className="w-5 h-5 text-[#CCFF00]" aria-hidden />
                          </div>
                        </button>
                      )}

                      {/* Misma animación que Servicios en la landing: grid 0fr → 1fr + opacity */}
                      <div
                        id={`${pkg.id}-panel`}
                        className={`grid transition-all duration-[650ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                        }`}
                        style={{
                          transition:
                            "grid-template-rows 0.65s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1)",
                        }}
                        aria-hidden={!open}
                      >
                        <div className="overflow-hidden min-h-0">
                          <div className={`p-5 md:p-8 ${!open ? "pointer-events-none" : ""}`}>
                            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-6">
                              <div>
                                <p className="text-sm text-[#CCFF00] font-medium mb-1">{pkg.num}</p>
                                <h3 className="text-2xl md:text-3xl font-bold text-black leading-tight">{pkg.title}</h3>
                                <p className="text-gray-600 mt-3 max-w-2xl text-base leading-relaxed">{pkg.tagline}</p>
                              </div>
                              <button
                                type="button"
                                onClick={() => setExpandedPackage(null)}
                                className="self-start w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 hover:bg-gray-50 transition-colors"
                                aria-label="Cerrar detalle del paquete"
                              >
                                <X className="w-5 h-5 text-gray-700" />
                              </button>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                              <div className="space-y-4">
                                <div>
                                  <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">Para quién</p>
                                  <p className="text-sm md:text-base text-gray-800 leading-relaxed">{pkg.forWho}</p>
                                </div>
                                <div>
                                  <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">Qué problema atiende</p>
                                  <p className="text-sm md:text-base text-gray-800 leading-relaxed">{pkg.problem}</p>
                                </div>
                                <div>
                                  <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">Qué se lleva el cliente</p>
                                  <p className="text-sm md:text-base text-gray-800 leading-relaxed">{pkg.outcome}</p>
                                </div>
                              </div>
                              <div className="rounded-xl bg-[#f7f7f7] border border-gray-100 p-5 md:p-6">
                                <p className="text-sm md:text-base text-gray-800 leading-relaxed mb-4">{pkg.detailLead}</p>
                                <ul className="space-y-2 mb-4">
                                  {pkg.scope.map((item) => (
                                    <li key={item} className="flex gap-2 items-start text-sm text-gray-700">
                                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-800 shrink-0" />
                                      <span>{item}</span>
                                    </li>
                                  ))}
                                </ul>
                                <p className="text-xs text-gray-500 italic border-t border-gray-200 pt-4">{pkg.notThis}</p>
                              </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-3 mt-8">
                              <a
                                href={waText(pkg.waPreset)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 bg-[#CCFF00] text-[#141414] px-5 py-2.5 rounded-full font-medium text-sm hover:bg-[#b8e600] transition-colors"
                              >
                                {pkg.cta}
                                <ArrowUpRight className="w-4 h-4" />
                              </a>
                              <button
                                type="button"
                                onClick={() => scrollToId("cierre")}
                                className="inline-flex items-center justify-center gap-2 border border-gray-300 bg-white hover:bg-gray-50 px-5 py-2.5 rounded-full font-medium text-sm text-gray-900 transition-colors"
                              >
                                Preferís mail o una llamada
                                <ArrowUpRight className="w-4 h-4 text-[#CCFF00]" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* Tu situación */}
      <section id="tu-situacion" className="py-16 md:py-20 px-4 md:px-8 bg-white scroll-mt-24">
        <div className="w-[98%] md:w-[80%] mx-auto">
          <motion.div className="flex justify-between items-start mb-4" {...sectionMotion}>
            <p className="text-sm text-gray-500">/ Tu situación</p>
            <p className="text-sm text-gray-500">(05)</p>
          </motion.div>
          <motion.h2 className="text-3xl sm:text-4xl md:text-5xl font-medium mb-4" style={{ letterSpacing: "-0.08em" }} {...sectionMotion}>
            No todos necesitan lo mismo.
          </motion.h2>
          <motion.p className="text-gray-600 text-base md:text-lg mb-10 max-w-2xl" {...sectionMotion}>
            Elegí la frase que más te resuena. Te llevamos al paquete que suele encajar mejor como siguiente paso.
          </motion.p>

          <div className="flex flex-col gap-3">
            {situaciones.map((row) => (
              <div
                key={row.quote}
                className="rounded-2xl overflow-hidden bg-[#EBEBEB] p-1 group hover:bg-[#141414] transition-colors duration-500"
                style={{ transition: "background-color 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)" }}
              >
                <div className="bg-white group-hover:bg-[#141414] rounded-xl p-5 md:p-7 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 transition-colors duration-500">
                  <div className="max-w-2xl">
                    <p className="text-lg md:text-xl font-semibold text-black group-hover:text-white transition-colors duration-500">
                      “{row.quote}”
                    </p>
                    <p className="text-sm md:text-base text-gray-600 group-hover:text-white/70 mt-2 leading-relaxed transition-colors duration-500">
                      {row.hint}
                    </p>
                    <p className="text-xs text-gray-500 group-hover:text-white/45 mt-3 transition-colors duration-500">
                      Paquete sugerido: <span className="font-medium">{row.packageTitle}</span>
                    </p>
                  </div>
                  <Link
                    href={row.anchor}
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToId(row.anchor)
                    }}
                    className="inline-flex items-center justify-center gap-2 shrink-0 bg-[#2a2a2a] group-hover:bg-[#CCFF00] text-white group-hover:text-black px-5 py-2.5 rounded-full text-sm font-medium transition-colors duration-500"
                  >
                    {row.label}
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Complementos */}
      <section id="complementos" className="py-16 md:py-24 px-4 md:px-8 bg-[#f4f4f4] scroll-mt-24">
        <div className="w-[98%] md:w-[80%] mx-auto">
          <motion.div className="flex justify-between items-start mb-4" {...sectionMotion}>
            <p className="text-sm text-gray-500">/ Proyectos complementarios</p>
            <p className="text-sm text-gray-500">(06)</p>
          </motion.div>
          <motion.h2 className="text-3xl sm:text-4xl md:text-5xl font-medium mb-4" style={{ letterSpacing: "-0.08em" }} {...sectionMotion}>
            Lo que no entra en un paquete, pero sí en un plan serio.
          </motion.h2>
          <motion.p className="text-gray-600 text-base md:text-lg mb-10 max-w-3xl" {...sectionMotion}>
            Además de los cuatro paquetes principales, hay trabajos puntuales que se cotizan según alcance. Se integran cuando tienen
            sentido comercial, no como lista de “extras” sin criterio.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {complementos.map((item) => (
              <div
                key={item}
                className="rounded-xl bg-white border border-gray-200 p-4 md:p-5 text-sm md:text-base text-gray-800 leading-snug hover:border-[#CCFF00]/60 hover:shadow-sm transition-all duration-300"
              >
                <div className="flex gap-3 items-start">
                  <div className="w-6 h-6 rounded-full bg-[#EBEBEB] flex items-center justify-center shrink-0 mt-0.5">
                    <Plus className="w-3.5 h-3.5 text-gray-700" aria-hidden />
                  </div>
                  <span>{item}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <a
              href={waText("Hola, tengo un proyecto complementario para cotizar con PiP Studio.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white bg-[#2a2a2a] hover:bg-[#333] px-5 py-2.5 md:py-3 rounded-full text-white text-sm font-medium transition-colors"
            >
              Cotizar un complemento
              <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 text-[#CCFF00]" />
            </a>
          </div>
        </div>
      </section>

      {/* Aclaración estratégica */}
      <section id="aclaracion" className="py-16 md:py-20 px-4 md:px-8 bg-white scroll-mt-24">
        <div className="w-[98%] md:w-[80%] mx-auto">
          <div className="rounded-2xl overflow-hidden bg-[#EBEBEB] p-1">
            <div className="bg-[#141414] text-white rounded-xl p-8 md:p-12 md:p-16">
              <motion.div className="flex justify-between items-start mb-6" {...sectionMotion}>
                <p className="text-sm text-white/45">/ Criterio</p>
                <p className="text-sm text-white/45">(07)</p>
              </motion.div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium mb-6 max-w-3xl" style={{ letterSpacing: "-0.06em" }}>
                Paquetes con nombre, trabajo con criterio.
              </h2>
              <ul className="space-y-4 text-white/80 text-base md:text-lg max-w-3xl leading-relaxed">
                <li className="flex gap-3">
                  <span className="text-[#CCFF00] font-bold">·</span>
                  <span>No vendemos fórmulas mágicas: cada proyecto parte de una necesidad real y un contexto real.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#CCFF00] font-bold">·</span>
                  <span>El objetivo no es llenar de tareas el calendario: es construir una base útil y mover comercialmente con sentido.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#CCFF00] font-bold">·</span>
                  <span>Después puede haber continuidad —y muchas veces la hay— pero no es condición para empezar bien.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Cierre */}
      <section
        id="cierre"
        className="py-20 md:py-28 px-4 md:px-8 bg-[#282828] text-white scroll-mt-24"
        aria-labelledby="cierre-title"
      >
        <div className="w-[98%] md:w-[80%] mx-auto text-center md:text-left">
          <p className="text-sm text-white/45 mb-4">/ Próximo paso</p>
          <h2 id="cierre-title" className="text-3xl sm:text-4xl md:text-5xl font-medium mb-6 max-w-3xl mx-auto md:mx-0" style={{ letterSpacing: "-0.08em" }}>
            A veces el primer paso no es ejecutar: es <span className="text-[#CCFF00]">entender u ordenar</span>.
          </h2>
          <p className="text-white/70 text-base md:text-lg max-w-2xl mx-auto md:mx-0 mb-10 leading-relaxed">
            Si tu negocio tiene buenas razones para existir pero la comunicación y la base digital no las acompañan, conversemos. Te
            respondo con honestidad sobre qué paquete —o qué mezcla— tiene más sentido.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            <a
              href={waText("Hola, quiero coordinar una conversación inicial con PiP Studio (proyectos cerrados).")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#CCFF00] text-[#141414] px-8 py-3.5 rounded-full font-medium text-base hover:bg-[#b8e600] transition-colors"
            >
              Escribime por WhatsApp
              <ArrowUpRight className="w-5 h-5" />
            </a>
            <a
              href="mailto:hacepip@gmail.com?subject=Consulta%20-%20proyectos%20cerrados%20PiP%20Studio"
              className="inline-flex items-center justify-center gap-2 border border-white/25 bg-[#2a2a2a] hover:bg-[#333] px-8 py-3.5 rounded-full font-medium text-base transition-colors text-white"
            >
              Enviar un correo
              <ArrowUpRight className="w-5 h-5 text-[#CCFF00]" />
            </a>
          </div>
          <p className="mt-10 text-sm text-white/45 max-w-xl mx-auto md:mx-0">
            También podés volver al sitio principal:{" "}
            <Link href="/" className="text-[#CCFF00] hover:underline underline-offset-4">
              pipstudio.com.ar
            </Link>
            .
          </p>
        </div>
      </section>

      <SiteFooter fromInnerPage />
    </div>
  )
}
