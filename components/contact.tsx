"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { MessageSquare, Mail, ArrowUpRight } from "lucide-react"
import Image from "next/image"

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="contacto" ref={ref} className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="md:col-span-5"
          >
            <div className="flex items-center mb-4">
              <div className="h-1 w-10 bg-[#CCFF00] mr-3"></div>
              <p className="text-sm text-white/70">Contacto</p>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Trabajemos <span className="text-[#CCFF00]">juntos</span>
            </h2>
            <p className="text-white/70 text-lg mb-12 max-w-md">
              Estamos listos para convertir tus ideas en una experiencia web excepcional. Contáctanos directamente a
              través de WhatsApp o email.
            </p>

            <div className="space-y-6">
              <a
                href="https://wa.me/5493493415669"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-[#CCFF00] text-black px-6 py-4 rounded-xl hover:bg-white transition-colors w-full md:w-auto"
              >
                <MessageSquare className="mr-3 h-5 w-5" />
                <span className="font-medium">Contactar por WhatsApp</span>
                <ArrowUpRight className="ml-auto h-5 w-5" />
              </a>

              <a
                href="mailto:hacepip@gmail.com"
                className="flex items-center bg-[#1A1A1A] border border-white/10 hover:border-[#CCFF00] text-white px-6 py-4 rounded-xl hover:text-[#CCFF00] transition-colors w-full md:w-auto"
              >
                <Mail className="mr-3 h-5 w-5" />
                <span className="font-medium">hacepip@gmail.com</span>
                <ArrowUpRight className="ml-auto h-5 w-5" />
              </a>

              <div className="pt-8 border-t border-white/10 mt-12">
                <h3 className="text-xl font-bold mb-2">Ubicación</h3>
                <p className="text-white/70">Sunchales, Santa Fe - Argentina 🇦🇷</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-7"
          >
            <div className="relative">
              {/* Mockup de teléfono */}
              <div className="relative z-10 mx-auto max-w-[320px]">
                {/* Marco del teléfono */}
                <div
                  className="relative z-10 bg-[#1A1A1A] rounded-[44px] p-3 border-[8px] border-[#2A2A2A] shadow-[0_0_15px_rgba(0,0,0,0.5),inset_0_0_10px_rgba(255,255,255,0.05)]"
                  style={{
                    boxShadow: "0 10px 30px rgba(0,0,0,0.8), inset 0 1px 1px rgba(255,255,255,0.05)",
                  }}
                >
                  {/* Botones laterales */}
                  <div className="absolute -left-[12px] top-[100px] w-[3px] h-[30px] bg-[#2A2A2A] rounded-l-lg"></div>
                  <div className="absolute -left-[12px] top-[140px] w-[3px] h-[60px] bg-[#2A2A2A] rounded-l-lg"></div>
                  <div className="absolute -right-[12px] top-[120px] w-[3px] h-[40px] bg-[#2A2A2A] rounded-r-lg"></div>

                  {/* Dynamic Island */}
                  <div className="absolute top-[10px] left-1/2 transform -translate-x-1/2 w-[95px] h-[32px] bg-black rounded-[20px] z-20 flex justify-center items-center overflow-hidden">
                    {/* Cámara y sensores */}
                    <div className="absolute left-[25px] w-[6px] h-[6px] rounded-full bg-[#333333] ring-[0.5px] ring-[#222222]/50"></div>
                    <div className="absolute right-[25px] w-[8px] h-[8px] rounded-full bg-[#333333] ring-[0.5px] ring-[#222222]/50 flex items-center justify-center">
                      <div className="w-[4px] h-[4px] rounded-full bg-[#222222]"></div>
                    </div>
                  </div>

                  {/* Pantalla del teléfono con conversación de WhatsApp */}
                  <div className="relative overflow-hidden rounded-[36px] aspect-[9/19.5] bg-[#0F0F0F]">
                    {/* Reflejo de pantalla */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none z-30"></div>

                    {/* Contenido de la pantalla - Conversación de WhatsApp */}
                    <div className="absolute inset-0 overflow-hidden">
                      {/* Barra de estado */}
                      <div className="flex justify-between items-center px-5 py-2 bg-[#075E54] z-50 sticky top-0">
                        <div className="text-xs text-white">9:41</div>
                        <div className="flex space-x-1">
                          <div className="w-4 h-2 bg-white rounded-sm"></div>
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                      </div>

                      {/* Cabecera de WhatsApp */}
                      <div className="bg-[#075E54] px-4 py-2 flex items-center">
                        <div className="flex items-center">
                          <svg
                            className="w-4 h-4 text-white mr-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 19l-7-7m0 0l7-7m-7 7h18"
                            />
                          </svg>
                          <div className="w-8 h-8 rounded-full bg-[#D9D9D9] mr-3 flex items-center justify-center">
                            <div className="h-4 w-auto">
                              <Image
                                src="/logo-black.png"
                                alt="PiP Studio Logo"
                                width={20}
                                height={10}
                                className="h-full w-auto"
                              />
                            </div>
                          </div>
                          <div>
                            <p className="text-xs font-medium text-white">PiP Studio</p>
                            <p className="text-[10px] text-white/70">En línea</p>
                          </div>
                        </div>
                        <div className="ml-auto flex space-x-3">
                          <svg
                            className="w-4 h-4 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                          </svg>
                          <svg
                            className="w-4 h-4 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                            />
                          </svg>
                        </div>
                      </div>

                      {/* Fondo de chat */}
                      <div className="bg-[#ECE5DD] h-full p-3">
                        {/* Mensaje recibido */}
                        <div className="bg-white rounded-lg p-2 mb-2 max-w-[80%] shadow-sm">
                          <p className="text-[10px] text-[#303030]">
                            ¡Hola! ¿En qué podemos ayudarte con tu proyecto web?
                          </p>
                          <p className="text-right text-[8px] text-[#8C8C8C]">9:30</p>
                        </div>

                        {/* Mensaje enviado */}
                        <div className="bg-[#DCF8C6] rounded-lg p-2 mb-2 max-w-[80%] ml-auto shadow-sm">
                          <p className="text-[10px] text-[#303030]">
                            Hola! Me interesa crear un sitio web para mi negocio
                          </p>
                          <p className="text-right text-[8px] text-[#8C8C8C]">9:31</p>
                        </div>

                        {/* Mensaje recibido */}
                        <div className="bg-white rounded-lg p-2 mb-2 max-w-[80%] shadow-sm">
                          <p className="text-[10px] text-[#303030]">
                            ¡Genial! Podemos ayudarte con un diseño personalizado que refleje la identidad de tu marca
                          </p>
                          <p className="text-right text-[8px] text-[#8C8C8C]">9:32</p>
                        </div>

                        {/* Mensaje enviado */}
                        <div className="bg-[#DCF8C6] rounded-lg p-2 mb-2 max-w-[80%] ml-auto shadow-sm">
                          <p className="text-[10px] text-[#303030]">¿Cuáles son los planes disponibles?</p>
                          <p className="text-right text-[8px] text-[#8C8C8C]">9:33</p>
                        </div>

                        {/* Mensaje recibido */}
                        <div className="bg-white rounded-lg p-2 max-w-[80%] shadow-sm">
                          <p className="text-[10px] text-[#303030]">
                            Tenemos planes desde emprendedores hasta empresas. ¿Te gustaría agendar una llamada para
                            discutir tu proyecto?
                          </p>
                          <p className="text-right text-[8px] text-[#8C8C8C]">9:34</p>
                        </div>

                        {/* Barra de chat */}
                        <div className="absolute bottom-0 left-0 right-0 bg-[#F0F0F0] p-2 flex items-center">
                          <div className="bg-white rounded-full flex-1 flex items-center px-3 py-1">
                            <svg
                              className="w-4 h-4 text-[#8C8C8C]"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                            <span className="text-[10px] text-[#8C8C8C] ml-2">Mensaje</span>
                          </div>
                          <div className="ml-2 w-6 h-6 rounded-full bg-[#075E54] flex items-center justify-center">
                            <svg
                              className="w-3 h-3 text-white"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Botón home */}
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-1/3 h-1 bg-[#333] rounded-full"></div>
                </div>

                {/* Sombra y efectos */}
                <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-[70%] h-[20px] bg-black/40 blur-xl rounded-full"></div>
              </div>

              {/* Elementos decorativos */}
              <div className="absolute top-1/4 -right-10 w-20 h-20 rounded-full bg-[#CCFF00]/20 blur-xl"></div>
              <div className="absolute bottom-1/4 -left-10 w-16 h-16 rounded-full bg-[#CCFF00]/10 blur-xl"></div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute top-1/2 left-0 w-64 h-64 bg-[#CCFF00]/10 rounded-full blur-3xl"></div>
    </section>
  )
}
