"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowUpRight, Filter, ChevronDown } from "lucide-react"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

// Categorías de proyectos
const categories = ["Todos", "Diseño Web", "E-commerce", "Landing Page", "Plataforma Web", "Branding"]

// Datos de proyectos extendidos
const projectsData = [
  {
    id: 1,
    title: "Sitio Corporativo",
    category: "Diseño Web",
    description: "Diseño y desarrollo de sitio web corporativo con enfoque en la experiencia de usuario y conversión.",
    image: "/project-corporate.png",
    featured: true,
  },
  {
    id: 2,
    title: "E-commerce Premium",
    category: "E-commerce",
    description: "Plataforma de comercio electrónico con diseño premium y funcionalidades avanzadas de compra.",
    image: "/project-ecommerce.png",
    featured: true,
  },
  {
    id: 3,
    title: "Landing Page",
    category: "Landing Page",
    description:
      "Página de aterrizaje optimizada para conversión con diseño atractivo y llamadas a la acción efectivas.",
    image: "/project-landing.png",
    featured: true,
  },
  {
    id: 4,
    title: "Portal de Servicios",
    category: "Plataforma Web",
    description: "Portal web para gestión de servicios con interfaz intuitiva y experiencia de usuario optimizada.",
    image: "/project-portal.png",
    featured: true,
  },
  {
    id: 5,
    title: "Rediseño de Marca",
    category: "Branding",
    description: "Renovación completa de identidad visual para empresa de tecnología con presencia internacional.",
    image: "/interconnected-innovation.png",
    featured: false,
  },
  {
    id: 6,
    title: "Tienda Online de Moda",
    category: "E-commerce",
    description:
      "E-commerce especializado en moda con funcionalidades de filtrado avanzado y experiencia personalizada.",
    image: "/modern-fashion-ecommerce.png",
    featured: false,
  },
  {
    id: 7,
    title: "Aplicación Web Educativa",
    category: "Plataforma Web",
    description:
      "Plataforma educativa con sistema de gestión de contenidos y seguimiento de progreso para estudiantes.",
    image: "/modern-educational-dashboard.png",
    featured: false,
  },
  {
    id: 8,
    title: "Landing Page Producto SaaS",
    category: "Landing Page",
    description: "Página de aterrizaje para producto SaaS con enfoque en la captación de leads y conversión.",
    image: "/streamlined-saas-landing.png",
    featured: false,
  },
  {
    id: 9,
    title: "Portal Inmobiliario",
    category: "Plataforma Web",
    description: "Plataforma web para búsqueda y gestión de propiedades inmobiliarias con mapa interactivo.",
    image: "/modern-real-estate-portal.png",
    featured: false,
  },
  {
    id: 10,
    title: "Sitio Web para Restaurante",
    category: "Diseño Web",
    description: "Diseño web para restaurante con sistema de reservas online y menú digital interactivo.",
    image: "/elegant-dining-website.png",
    featured: false,
  },
  {
    id: 11,
    title: "Identidad Visual Startup",
    category: "Branding",
    description: "Desarrollo de identidad visual completa para startup tecnológica, incluyendo logo y guía de estilo.",
    image: "/sleek-startup-identity.png",
    featured: false,
  },
  {
    id: 12,
    title: "Marketplace Digital",
    category: "E-commerce",
    description: "Plataforma marketplace para conectar compradores y vendedores con sistema de pagos integrado.",
    image: "/modern-marketplace-interface.png",
    featured: false,
  },
]

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("Todos")
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  // Asegurar que la página se cargue desde el inicio
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Filtrar proyectos según la categoría seleccionada
  const filteredProjects =
    selectedCategory === "Todos"
      ? projectsData
      : projectsData.filter((project) => project.category === selectedCategory)

  return (
    <div className="min-h-screen bg-[#0F0F0F] text-white">
      <Navbar />

      <main className="pt-32 pb-20">
        {/* Hero section */}
        <section className="container mx-auto px-6 mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex items-center mb-4">
              <div className="h-1 w-10 bg-[#CCFF00] mr-3"></div>
              <p className="text-sm text-white/70">Nuestro Portafolio</p>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Proyectos <span className="text-[#CCFF00]">destacados</span>
            </h1>
            <p className="text-lg text-white/70 max-w-2xl mb-8">
              Explorá nuestra colección de trabajos y descubrí cómo transformamos ideas en experiencias digitales
              impactantes.
            </p>
          </motion.div>

          {/* Filtros para móvil */}
          <div className="md:hidden mb-8">
            <button
              className="flex items-center space-x-2 bg-[#1A1A1A] border border-white/10 px-4 py-3 rounded-full"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
              <Filter size={18} />
              <span>Filtrar por: {selectedCategory}</span>
              <ChevronDown size={18} className={`transition-transform ${isFilterOpen ? "rotate-180" : ""}`} />
            </button>

            {isFilterOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mt-2 bg-[#1A1A1A] border border-white/10 rounded-xl p-2 absolute z-20 left-6 right-6"
              >
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`block w-full text-left px-4 py-3 rounded-lg ${
                      selectedCategory === category ? "bg-[#CCFF00] text-black" : "hover:bg-white/5"
                    }`}
                    onClick={() => {
                      setSelectedCategory(category)
                      setIsFilterOpen(false)
                    }}
                  >
                    {category}
                  </button>
                ))}
              </motion.div>
            )}
          </div>

          {/* Filtros para desktop */}
          <div className="hidden md:flex space-x-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-6 py-3 rounded-full transition-colors ${
                  selectedCategory === category
                    ? "bg-[#CCFF00] text-black"
                    : "bg-[#1A1A1A] border border-white/10 hover:border-[#CCFF00]/50"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* Projects grid */}
        <section ref={ref} className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Link href={`/projects/${project.id}`} className="block">
                  <div className="bg-[#1A1A1A] rounded-2xl overflow-hidden border border-white/10 hover:border-[#CCFF00]/50 transition-all duration-300">
                    <div className="relative overflow-hidden aspect-video">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      {project.featured && (
                        <div className="absolute top-4 left-4 bg-[#CCFF00] text-black text-xs font-medium px-3 py-1 rounded-full">
                          Destacado
                        </div>
                      )}
                    </div>

                    <div className="p-6">
                      <div className="text-sm font-medium text-[#CCFF00] mb-2">{project.category}</div>
                      <h3 className="text-xl font-bold mb-3 group-hover:text-[#CCFF00] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-white/70 mb-6">{project.description}</p>

                      <div className="flex items-center text-sm font-medium text-white group-hover:text-[#CCFF00] transition-colors">
                        Ver proyecto
                        <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mensaje si no hay proyectos */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-white/70">No se encontraron proyectos en esta categoría.</p>
              <button
                className="mt-4 px-6 py-3 bg-[#CCFF00] text-black rounded-full"
                onClick={() => setSelectedCategory("Todos")}
              >
                Ver todos los proyectos
              </button>
            </div>
          )}
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-6 mt-24">
          <div className="bg-[#1A1A1A] rounded-3xl p-8 md:p-16 border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#CCFF00]/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#CCFF00]/5 rounded-full blur-3xl"></div>

            <div className="relative z-10 max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para crear tu próximo proyecto?</h2>
              <p className="text-white/70 text-lg mb-8">
                Transformamos tus ideas en experiencias digitales únicas que destacan y generan resultados.
              </p>
              <Link
                href="#contacto"
                className="inline-flex items-center bg-[#CCFF00] text-black px-8 py-4 rounded-full font-medium hover:bg-white transition-colors"
              >
                Contactanos
                <ArrowUpRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
