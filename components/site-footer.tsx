import Image from "next/image"
import Link from "next/link"

type SiteFooterProps = {
  /** En páginas internas, los enlaces del sitio apuntan a `/#sección` en lugar de `#sección`. */
  fromInnerPage?: boolean
}

export function SiteFooter({ fromInnerPage = false }: SiteFooterProps) {
  const h = (hash: string) => (fromInnerPage ? `/${hash}` : hash)

  return (
    <footer className="bg-[#282828] text-white py-12 md:py-16 px-4 md:px-8 w-full">
      <div className="w-[98%] md:w-[80%] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8">
          <div>
            <div className="mb-4">
              <Link href="/">
                <Image
                  src="/pipstudio2/Logo pipstudio.png"
                  alt="pipstudio logo"
                  width={120}
                  height={40}
                  className="h-8 md:h-10 w-auto mb-3"
                />
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed">
                Comunicación y transformación digital para PyMEs | Sunchales, Santa Fe
              </p>
            </div>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              Transformación digital con sentido estratégico. Ayudamos a empresas con trayectoria a pasar de una presencia digital desordenada a un ecosistema coherente, profesional y funcional.
            </p>
            <div className="flex items-center gap-2 text-gray-300 text-sm">
              <span className="w-1 h-4 bg-[#CCFF00] rounded-full" />
              <span>Comunicación y marketing digital</span>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Navegación</h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2">
                <li>
                  <Link href={h("#soluciones-digitales")} className="text-gray-400 hover:text-[#CCFF00] transition-colors text-sm">
                    Soluciones Digitales
                  </Link>
                </li>
                <li>
                  <Link href={h("#sistema")} className="text-gray-400 hover:text-[#CCFF00] transition-colors text-sm">
                    Sistema
                  </Link>
                </li>
                <li>
                  <Link href="/paquetes" className="text-gray-400 hover:text-[#CCFF00] transition-colors text-sm">
                    Proyectos cerrados
                  </Link>
                </li>
                <li>
                  <Link href={h("#casos-de-exito")} className="text-gray-400 hover:text-[#CCFF00] transition-colors text-sm">
                    Casos de Éxito
                  </Link>
                </li>
                <li>
                  <Link href={h("#servicios")} className="text-gray-400 hover:text-[#CCFF00] transition-colors text-sm">
                    Servicios
                  </Link>
                </li>
                <li>
                  <Link href={h("#preguntas-frecuentes")} className="text-gray-400 hover:text-[#CCFF00] transition-colors text-sm">
                    Preguntas Frecuentes
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Servicios</h3>
            <ul className="space-y-2">
              <li className="text-gray-400 text-sm">Orden y creación de canales digitales</li>
              <li className="text-gray-400 text-sm">Contenidos técnicos y comerciales</li>
              <li className="text-gray-400 text-sm">Material comercial y soporte</li>
              <li className="text-gray-400 text-sm">Marca y coherencia visual</li>
              <li className="text-gray-400 text-sm">Producción audiovisual</li>
              <li className="text-gray-400 text-sm">Acompañamiento estratégico</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contacto</h3>
            <div className="space-y-4">
              <a
                href="https://wa.me/5493493415669"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-[#CCFF00] transition-colors text-sm group"
                aria-label="Contactar por WhatsApp"
              >
                <svg
                  className="w-5 h-5 text-[#CCFF00] group-hover:scale-110 transition-transform"
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
                <span>+54 9 3493 415669</span>
              </a>
              <a
                href="mailto:hacepip@gmail.com"
                className="flex items-center gap-2 text-gray-400 hover:text-[#CCFF00] transition-colors text-sm group"
                aria-label="Enviar email"
              >
                <svg
                  className="w-5 h-5 text-[#CCFF00] group-hover:scale-110 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>hacepip@gmail.com</span>
              </a>
              <div className="pt-2 border-t border-gray-700">
                <p className="text-gray-500 text-xs mb-2">Horario de atención:</p>
                <p className="text-gray-400 text-sm">Lunes a Viernes</p>
                <p className="text-gray-400 text-sm">9:00 - 18:00 hs</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 mb-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-500 text-sm text-center md:text-left">
              <p>© {new Date().getFullYear()} PiP Studio. Todos los derechos reservados.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link href="#" className="text-gray-500 hover:text-[#CCFF00] transition-colors">
                Política de Privacidad
              </Link>
              <span className="text-gray-700">|</span>
              <Link href="#" className="text-gray-500 hover:text-[#CCFF00] transition-colors">
                Términos y Condiciones
              </Link>
            </div>
          </div>
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "PiP Studio",
              description:
                "Transformación digital con sentido estratégico. Servicios de comunicación y marketing digital para empresas.",
              url: "https://www.pipstudio.com.ar",
              telephone: "+5493493415669",
              email: "hacepip@gmail.com",
              priceRange: "$$",
              areaServed: { "@type": "Country", name: "Argentina" },
              serviceType: [
                "Diseño web",
                "Marketing digital",
                "Comunicación digital",
                "Redes sociales",
                "Producción audiovisual",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+5493493415669",
                email: "hacepip@gmail.com",
                contactType: "customer service",
                availableLanguage: ["Spanish"],
              },
            }),
          }}
        />
      </div>
    </footer>
  )
}
