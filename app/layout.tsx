import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "../components/theme-provider"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Diseño Web en Santa Fe | PiP Studio Comunicaciones",
  description:
    "Creamos sitios Next.js 100 % a medida para emprendedores y empresas de Sunchales, Rafaela y toda Santa Fe. Rediseño gratuito inicial.",
  keywords: [
    "diseño web para PyMEs",
    "páginas web Sunchales",
    "diseño web Santa Fe",
    "desarrollo web Next.js",
    "landing pages profesionales",
  ],
  metadataBase: new URL("https://www.pipstudio.com.ar"),
  openGraph: {
    title: "PiP Studio Comunicaciones",
    description:
      "Webs modernas, escalables y llave en mano para tu negocio en Santa Fe.",
    url: "https://www.pipstudio.com.ar",
    siteName: "PiP Studio Comunicaciones",
    locale: "es_AR",
    type: "website",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "/",              // Next.js resolverá a https://www.pipstudio.com.ar/
  },
  icons: { icon: "/favicon.png" },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="overflow-x-hidden">
        {/* Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-L1WHDD2923"
          strategy="afterInteractive"
        />
        <Script
          id="ga-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-L1WHDD2923', { page_path: window.location.pathname });
            `,
          }}
        />

        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>

        {/* Schema.org – Organización local */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "PiP Studio Comunicaciones",
              url: "https://www.pipstudio.com.ar",
              logo: "https://www.pipstudio.com.ar/logo.png",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Av. Belgrano 123",  // <-- completa
                addressLocality: "Sunchales",
                addressRegion: "Santa Fe",
                postalCode: "2322",
                addressCountry: "AR",
              },
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+54-3493-123456",
                  contactType: "customer service",
                  areaServed: "AR-S",
                  availableLanguage: ["Spanish"],
                },
              ],
              sameAs: [
                "https://www.instagram.com/pipstudio",
                "https://www.linkedin.com/company/pipstudio",
              ],
            }),
          }}
        />
      </body>
    </html>
  )
}
