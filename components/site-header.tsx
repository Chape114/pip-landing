"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUpRight, Plus, X } from "lucide-react"

export type SiteHeaderLink = {
  label: string
  href: string
}

type SiteHeaderProps = {
  links: SiteHeaderLink[]
}

export function SiteHeader({ links }: SiteHeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false)
      }
    }
    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isMobileMenuOpen])

  const NavHoverLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <motion.a
      href={href}
      className="text-[#282828] text-xs md:text-sm font-medium relative overflow-hidden block h-5"
      initial="initial"
      animate="initial"
      whileHover="hover"
    >
      <motion.span
        className="block"
        variants={{
          initial: { y: 0, opacity: 1 },
          hover: { y: -20, opacity: 0 },
        }}
        transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {children}
      </motion.span>
      <motion.span
        className="absolute top-0 left-0 block w-full"
        variants={{
          initial: { y: 20, opacity: 0 },
          hover: { y: 0, opacity: 1 },
        }}
        transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {children}
      </motion.span>
    </motion.a>
  )

  return (
    <header className="fixed top-0 left-0 w-full flex justify-center z-50">
      <motion.div
        ref={mobileMenuRef}
        className="w-[98%] md:w-[80%] bg-[#e0e0e0] shadow-lg overflow-hidden px-4 md:px-8 rounded-b-[1.5rem]"
        initial={{ borderRadius: "0 0 1.5rem 1.5rem" }}
        animate={{ borderRadius: isMobileMenuOpen ? "0 0 1rem 1rem" : "0 0 1.5rem 1.5rem" }}
        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className="py-2 md:py-3 flex items-center justify-between gap-2">
          <div className="flex items-center min-w-0 shrink-0">
            <Link href="/">
              <Image
                src="/pipstudio2/Logo pipstudio.png"
                alt="PiP Studio — inicio"
                width={120}
                height={40}
                className="h-8 md:h-10 w-auto rounded-lg"
                priority
              />
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-3 lg:gap-4 xl:gap-5 flex-wrap justify-end max-w-[65%] 2xl:max-w-none">
            {links.map((item) => (
              <NavHoverLink key={item.href + item.label} href={item.href}>
                {item.label}
              </NavHoverLink>
            ))}
            <a
              href="https://wa.me/5493493415669"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#CCFF00] text-[#282828] py-1.5 md:py-2 px-3 md:px-5 rounded-full font-medium text-xs md:text-sm flex items-center gap-1.5 hover:bg-[#b8e600] transition-colors shrink-0"
            >
              <span className="whitespace-nowrap">Hablemos!</span>
              <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 text-[#282828] flex-shrink-0" />
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-10 h-10 rounded-full bg-[#282828] flex items-center justify-center relative overflow-hidden shrink-0"
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            <motion.div
              initial={false}
              animate={{
                rotate: isMobileMenuOpen ? 90 : 0,
                opacity: isMobileMenuOpen ? 0 : 1,
                scale: isMobileMenuOpen ? 0 : 1,
              }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="absolute"
            >
              <Plus className="w-5 h-5 text-white" />
            </motion.div>
            <motion.div
              initial={false}
              animate={{
                rotate: isMobileMenuOpen ? 0 : -90,
                opacity: isMobileMenuOpen ? 1 : 0,
                scale: isMobileMenuOpen ? 1 : 0,
              }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="absolute"
            >
              <X className="w-5 h-5 text-white" />
            </motion.div>
          </button>
        </div>

        <motion.div
          initial={false}
          animate={{
            height: isMobileMenuOpen ? "auto" : 0,
            opacity: isMobileMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="overflow-hidden md:hidden"
        >
          <div className="px-4 pb-6 pt-4 space-y-0 border-t border-gray-300 mt-2">
            {links.map((item, idx) => (
              <div key={item.href + item.label}>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{
                    opacity: isMobileMenuOpen ? 1 : 0,
                    x: isMobileMenuOpen ? 0 : -20,
                  }}
                  transition={{ duration: 0.4, delay: 0.05 * (idx + 1), ease: [0.25, 0.1, 0.25, 1] }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-between py-4 text-[#282828] hover:text-[#CCFF00] transition"
                  >
                    <span className="font-medium text-lg">{item.label}</span>
                    <span className="text-gray-500 text-base">
                      ({String(idx + 1).padStart(2, "0")})
                    </span>
                  </Link>
                </motion.div>
                <div className="h-px bg-gray-300" />
              </div>
            ))}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{
                opacity: isMobileMenuOpen ? 1 : 0,
                x: isMobileMenuOpen ? 0 : -20,
              }}
              transition={{ duration: 0.4, delay: 0.05 * (links.length + 1), ease: [0.25, 0.1, 0.25, 1] }}
              className="flex justify-start mt-6"
            >
              <a
                href="https://wa.me/5493493415669"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-white bg-[#2a2a2a] hover:bg-[#333] px-4 md:px-6 py-2.5 md:py-3 rounded-full transition text-sm md:text-base"
              >
                <span className="text-white font-medium">Hablemos!</span>
                <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 text-[#CCFF00]" />
              </a>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </header>
  )
}
