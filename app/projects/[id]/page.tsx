"use client"

import { useEffect, useRef, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { motion, useInView } from "framer-motion"
import { ArrowLeft, ArrowRight, ArrowUpRight, ExternalLink, Calendar, User, Briefcase, Code } from "lucide-react"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

// Datos de proyectos extendidos
const projectsData = [
  {
    id: 1,
    title: "Sitio Corporativo",
    client: "TechCorp Solutions",
    date: "Marzo 2023",
    category: "Diseño Web",
    description:
      "Diseño y desarrollo de sitio web corporativo con enfoque en la experiencia de usuario y conversión. La empresa buscaba una presencia digital que reflejara su identidad de marca y facilitara la comunicación con sus clientes potenciales.",
    challenge:
      "El cliente necesitaba una plataforma que comunicara efectivamente su propuesta de valor y generara leads cualificados, manteniendo un equilibrio entre diseño atractivo y rendimiento técnico.",
    solution:
      "Desarrollamos un sitio web responsive con un diseño limpio y moderno, implementando una arquitectura de información optimizada para la conversión. Integramos formularios estratégicamente ubicados y un sistema de seguimiento para medir la efectividad de las diferentes secciones.",
    results: [
      "Aumento del 45% en el tiempo de permanencia en el sitio",
      "Incremento del 60% en solicitudes de contacto",
      "Mejora del 35% en la tasa de conversión",
      "Reducción del 25% en la tasa de rebote",
    ],
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Supabase"],
    mainImage: "/project-corporate.png",
    gallery: [
      {
        image: "/project-corporate-detail-1.png",
        caption: "Página de inicio con animaciones personalizadas",
      },
      {
        image: "/project-corporate-detail-2.png",
        caption: "Sección de servicios con diseño interactivo",
      },
      {
        image: "/project-corporate-detail-3.png",
        caption: "Formulario de contacto optimizado para conversión",
      },
    ],
    testimonial: {
      quote:
        "El equipo de PiP entendió perfectamente nuestras necesidades y entregó un sitio web que no solo se ve increíble, sino que también genera resultados tangibles para nuestro negocio.",
      author: "María González",
      position: "Directora de Marketing, TechCorp Solutions",
    },
    featured: true,
  },
  {
    id: 2,
    title: "E-commerce Premium",
    client: "Luxury Brands Co.",
    date: "Enero 2023",
    category: "E-commerce",
    description: "Plataforma de comercio electrónico con diseño premium y funcionalidades avanzadas de compra.",
    challenge:
      "El cliente necesitaba una tienda online que reflejara la exclusividad de sus productos y ofreciera una experiencia de compra fluida y elegante.",
    solution:
      "Implementamos una plataforma e-commerce personalizada con un diseño minimalista y sofisticado, integrando pasarelas de pago seguras y un sistema de gestión de inventario eficiente.",
    results: [
      "Incremento del 75% en ventas online",
      "Reducción del 40% en abandonos de carrito",
      "Aumento del 50% en el valor medio del pedido",
      "Mejora del 60% en la tasa de conversión",
    ],
    technologies: ["Next.js", "Shopify", "Stripe", "Tailwind CSS"],
    mainImage: "/project-ecommerce.png",
    gallery: [
      {
        image: "/elegant-watch-shop.png",
        caption: "Página de producto con visualización detallada",
      },
      {
        image: "/minimalist-checkout.png",
        caption: "Proceso de checkout optimizado",
      },
      {
        image: "/placeholder.svg?height=600&width=800&query=mobile+ecommerce+app+interface+premium",
        caption: "Versión móvil de la tienda",
      },
    ],
    testimonial: {
      quote:
        "Nuestra tienda online ahora refleja perfectamente la exclusividad de nuestra marca. La experiencia de usuario es excepcional y nuestros clientes lo notan.",
      author: "Carlos Méndez",
      position: "CEO, Luxury Brands Co.",
    },
    featured: true,
  },
  // Los demás proyectos seguirían aquí...
]

export default function ProjectDetail() {
  const params = useParams()
  const router = useRouter()
  const [project, setProject] = useState<any>(null)
  const [activeImage, setActiveImage] = useState(0)
  const [relatedProjects, setRelatedProjects] = useState<any[]>([])
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  // Asegurar que la página se cargue desde el inicio
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    // Obtener el ID del proyecto de los parámetros de la URL
    const projectId = Number(params.id)

    // Buscar el proyecto correspondiente
    const foundProject = projectsData.find((p) => p.id === projectId)

    if (foundProject) {
      setProject(foundProject)

      // Encontrar proyectos relacionados (misma categoría, excluyendo el actual)
      const related = projectsData.filter((p) => p.category === foundProject.category && p.id !== projectId).slice(0, 3)

      setRelatedProjects(related)
    } else {
      // Si no se encuentra el proyecto, redirigir a la página de proyectos
      router.push("/projects")
    }
  }, [params.id, router])

  // Si el proyecto aún no se ha cargado, mostrar un estado de carga
  if (!project) {
    return (
      <div className="min-h-screen bg-[#0F0F0F] text-white flex items-center justify-center">
        <div className="animate-pulse flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-[#CCFF00]/20 flex items-center justify-center mb-4">
            <div className="w-6 h-6 rounded-full bg-[#CCFF00] animate-ping"></div>
          </div>
          <p className="text-white/70">Cargando proyecto...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#0F0F0F] text-white">
      <Navbar />

      <main className="pt-32 pb-20">
        {/* Hero section */}
        <section className="container mx-auto px-6 mb-16">
          <div className="flex flex-col md:flex-row items-start justify-between mb-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <Link
                href="/projects"
                className="inline-flex items-center text-white/70 hover:text-[#CCFF00] transition-colors mb-6"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Volver a proyectos
              </Link>
              <div className="flex items-center mb-4">
                <div className="h-1 w-10 bg-[#CCFF00] mr-3"></div>
                <p className="text-sm text-white/70">{project.category}</p>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">{project.title}</h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col space-y-4 md:items-end"
            >
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-[#1A1A1A] border border-white/10 hover:border-[#CCFF00]/50 px-6 py-3 rounded-full transition-colors"
              >
                Visitar sitio
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </motion.div>
          </div>

          {/* Imagen principal */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="rounded-2xl overflow-hidden mb-16"
          >
            <img
              src={project.mainImage || "/placeholder.svg"}
              alt={project.title}
              className="w-full h-auto object-cover rounded-2xl"
            />
          </motion.div>

          {/* Información del proyecto */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="md:col-span-8"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Sobre el proyecto</h2>
              <p className="text-white/70 text-lg mb-8">{project.description}</p>

              <div className="mb-12">
                <h3 className="text-xl font-bold mb-4">El desafío</h3>
                <p className="text-white/70 mb-8">{project.challenge}</p>

                <h3 className="text-xl font-bold mb-4">Nuestra solución</h3>
                <p className="text-white/70 mb-8">{project.solution}</p>

                <h3 className="text-xl font-bold mb-4">Resultados</h3>
                <ul className="list-disc list-inside text-white/70 space-y-2 mb-8">
                  {project.results.map((result: string, index: number) => (
                    <li key={index}>{result}</li>
                  ))}
                </ul>

                <h3 className="text-xl font-bold mb-4">Tecnologías utilizadas</h3>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.map((tech: string, index: number) => (
                    <span key={index} className="bg-[#1A1A1A] border border-white/10 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="md:col-span-4"
            >
              <div className="bg-[#1A1A1A] rounded-2xl p-6 border border-white/10 sticky top-32">
                <h3 className="text-xl font-bold mb-6">Detalles del proyecto</h3>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <Calendar className="w-5 h-5 text-[#CCFF00] mr-3 mt-1" />
                    <div>
                      <p className="text-sm text-white/50 mb-1">Fecha</p>
                      <p>{project.date}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <User className="w-5 h-5 text-[#CCFF00] mr-3 mt-1" />
                    <div>
                      <p className="text-sm text-white/50 mb-1">Cliente</p>
                      <p>{project.client}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Briefcase className="w-5 h-5 text-[#CCFF00] mr-3 mt-1" />
                    <div>
                      <p className="text-sm text-white/50 mb-1">Categoría</p>
                      <p>{project.category}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Code className="w-5 h-5 text-[#CCFF00] mr-3 mt-1" />
                    <div>
                      <p className="text-sm text-white/50 mb-1">Tecnologías</p>
                      <p>{project.technologies.join(", ")}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Galería de imágenes */}
        <section ref={ref} className="container mx-auto px-6 mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-3xl font-bold mb-8"
          >
            Galería del proyecto
          </motion.h2>

          <div className="relative">
            <div className="overflow-hidden rounded-2xl mb-4">
              <motion.img
                key={activeImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                src={project.gallery[activeImage].image}
                alt={project.gallery[activeImage].caption}
                className="w-full h-auto object-cover rounded-2xl"
              />
            </div>

            <p className="text-white/70 mb-6">{project.gallery[activeImage].caption}</p>

            <div className="flex space-x-4">
              <button
                onClick={() => setActiveImage((prev) => (prev === 0 ? project.gallery.length - 1 : prev - 1))}
                className="bg-[#1A1A1A] border border-white/10 hover:border-[#CCFF00]/50 w-12 h-12 rounded-full flex items-center justify-center transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>

              <button
                onClick={() => setActiveImage((prev) => (prev === project.gallery.length - 1 ? 0 : prev + 1))}
                className="bg-[#1A1A1A] border border-white/10 hover:border-[#CCFF00]/50 w-12 h-12 rounded-full flex items-center justify-center transition-colors"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        {project.testimonial && (
          <section className="container mx-auto px-6 mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className="bg-[#1A1A1A] rounded-2xl p-8 md:p-12 border border-white/10 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#CCFF00]/5 rounded-full blur-3xl"></div>

              <div className="relative z-10">
                <div className="text-4xl text-[#CCFF00] mb-6">"</div>
                <p className="text-xl md:text-2xl font-light mb-8">{project.testimonial.quote}</p>
                <div>
                  <p className="font-bold">{project.testimonial.author}</p>
                  <p className="text-white/70">{project.testimonial.position}</p>
                </div>
              </div>
            </motion.div>
          </section>
        )}

        {/* Proyectos relacionados */}
        {relatedProjects.length > 0 && (
          <section className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Proyectos relacionados</h2>
              <p className="text-white/70">Explora más trabajos similares</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProjects.map((relatedProject, index) => (
                <motion.div
                  key={relatedProject.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <Link href={`/projects/${relatedProject.id}`} className="block">
                    <div className="bg-[#1A1A1A] rounded-2xl overflow-hidden border border-white/10 hover:border-[#CCFF00]/50 transition-all duration-300">
                      <div className="relative overflow-hidden aspect-video">
                        <img
                          src={relatedProject.mainImage || "/placeholder.svg"}
                          alt={relatedProject.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>

                      <div className="p-6">
                        <div className="text-sm font-medium text-[#CCFF00] mb-2">{relatedProject.category}</div>
                        <h3 className="text-xl font-bold mb-3 group-hover:text-[#CCFF00] transition-colors">
                          {relatedProject.title}
                        </h3>

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
          </section>
        )}

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
