"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function PrePage() {
  return (
    <div className="min-h-screen bg-[#0F0F0F] text-white flex items-center justify-center">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Líneas decorativas */}
          <div className="flex items-center justify-center mb-8">
            <div className="h-1 w-16 bg-[#CCFF00] mr-4"></div>
            <div className="w-4 h-4 bg-[#CCFF00] rounded-full"></div>
            <div className="h-1 w-16 bg-[#CCFF00] ml-4"></div>
          </div>

          {/* Título principal */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-6xl md:text-8xl font-bold mb-8 leading-tight"
          >
            ¿Para qué{" "}
            <span className="text-[#CCFF00] relative">
              cara**
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="absolute -bottom-2 left-0 w-full h-1 bg-red-500"
              ></motion.div>
            </span>{" "}
            necesito un{" "}
            <span className="text-[#CCFF00]">Comunicador</span>?
          </motion.h1>

          {/* Subtítulo */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-xl md:text-2xl text-white/70 mb-12 max-w-3xl mx-auto"
          >
            Si te estás haciendo esta pregunta, probablemente ya sabés la respuesta.
          </motion.p>

          {/* Botón principal */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <Link
              href="/steps"
              className="group inline-flex items-center bg-[#CCFF00] text-black px-12 py-6 rounded-full font-bold text-xl hover:bg-[#CCFF00]/90 transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-[#CCFF00]/20"
            >
              <span className="mr-3">Entrá que te enseño</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </motion.div>

          {/* Elementos decorativos flotantes */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
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
              className="absolute top-20 left-10 text-4xl opacity-20"
            >
              💬
            </motion.div>
            <motion.div
              animate={{ 
                y: [0, 20, 0],
                rotate: [0, -5, 0]
              }}
              transition={{ 
                duration: 8, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute top-40 right-20 text-3xl opacity-20"
            >
              🎯
            </motion.div>
            <motion.div
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, 3, 0]
              }}
              transition={{ 
                duration: 7, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: 2
              }}
              className="absolute bottom-40 left-20 text-3xl opacity-20"
            >
              📢
            </motion.div>
            <motion.div
              animate={{ 
                y: [0, 25, 0],
                rotate: [0, -3, 0]
              }}
              transition={{ 
                duration: 9, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: 3
              }}
              className="absolute bottom-20 right-10 text-4xl opacity-20"
            >
              🧱
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
