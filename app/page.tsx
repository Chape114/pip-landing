import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import StatsSection from "@/components/stats-section"
import Services from "@/components/services"
import PricingPlans from "@/components/pricing-plans"
// import Projects from "@/components/projects"
// import Clients from "@/components/clients"
import Process from "@/components/process"
import CredibilitySection from "@/components/credibility-section"
import Contact from "@/components/contact"
import FinalCta from "@/components/final-cta"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <div className="min-h-screen bg-[#0F0F0F] text-white">
        <Navbar />
        <main>
          <Hero />
          <StatsSection />
          <Services />
          <PricingPlans />
          {/* <Projects /> */}
          {/* <Clients /> */}
          <Process />
          <CredibilitySection />
          <Contact />
          <FinalCta />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
