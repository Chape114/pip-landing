import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Proyectos cerrados y paquetes | PiP Studio",
  description:
    "Paquetes de trabajo con inicio y fin para PyMEs: diagnóstico comercial digital, definición del negocio, activación digital y captación activa. PiP Studio — comunicación y transformación digital.",
  openGraph: {
    title: "Proyectos cerrados y paquetes | PiP Studio",
    description:
      "Proyectos con entregables concretos: orden, claridad comercial, base digital y acciones acotadas. Sin humo, con criterio.",
    url: "https://www.pipstudio.com.ar/paquetes",
    siteName: "PiP Studio",
    locale: "es_AR",
    type: "website",
  },
}

export default function PaquetesLayout({ children }: { children: React.ReactNode }) {
  return children
}
