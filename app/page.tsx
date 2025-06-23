"use client"

import Hero from "../components/hero"
import Services from "../components/services"
import PricingPlans from "../components/pricing-plans"
import Process from "../components/process"
import Contact from "../components/contact"
import FinalCta from "../components/final-cta"
import Footer from "../components/footer"
import Navbar from "../components/navbar"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0F0F0F] text-white">
      <Navbar />
      <Hero />
      <Services />
      <PricingPlans />
      <Process />
      <Contact />
      <FinalCta />
      <Footer />
    </div>
  )
}
