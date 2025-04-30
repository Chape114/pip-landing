"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [activeProject, setActiveProject] = useState<number | null>(null)

  const projects = [
    {
      id: 1,
      title: "Sitio Corporativo",
      category: "Diseño Web",
      image: "/project-corporate.png",
      delay: 0.1,
    },
    {
      id: 2,
      title: "E-commerce Premium",
      category: "Tienda Online",
      image: "/project-ecommerce.png",
      delay: 0.2,
    },
    {
      id: 3,
      title: "Landing Page",
      category: "Conversión",
      image: "/project-landing.png",
      delay: 0.3,
    },
    {
      id: 4,
      title: "Portal de Servicios",
      category: "Plataforma Web",
      image: "/project-portal.png",
      delay: 0.4,
    },
  ]

  return (
    <section ref={ref} className="py-24 md:py-32 relative bg-[#1A1A1A]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex items-center mb-4">
            <div className="h-1 w-10 bg-[#CCFF00] mr-3"></div>
            <p className="text-sm text-white/70">Our Work</p>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 md:mb-0">
              Featured <span className="text-[#CCFF00]">Projects</span>
            </h2>
            <Link href="/projects" className="text-white hover:text-[#CCFF00] transition-colors flex items-center">
              View all projects <ArrowUpRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: project.delay }}
              className="group relative"
              onMouseEnter={() => setActiveProject(index)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <div className="overflow-hidden rounded-2xl border border-white/10 group-hover:border-[#CCFF00]/50 transition-all duration-300">
                <div className="relative">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto object-cover transition-transform duration-700"
                    animate={activeProject === index ? { scale: 1.05 } : { scale: 1 }}
                  />

                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6"
                    initial={{ opacity: 0 }}
                    animate={activeProject === index ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div>
                      <div className="text-sm font-medium text-[#CCFF00] mb-2">{project.category}</div>
                      <h3 className="text-2xl font-bold">{project.title}</h3>
                      <Link
                        href={`/projects/${project.id}`}
                        className="mt-4 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm hover:bg-[#CCFF00] hover:text-black transition-colors flex items-center inline-flex"
                      >
                        View project <ArrowUpRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </motion.div>
                </div>
              </div>

              <div className="mt-4 p-2">
                <div className="text-sm font-medium text-[#CCFF00]">{project.category}</div>
                <h3 className="text-xl font-bold">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
