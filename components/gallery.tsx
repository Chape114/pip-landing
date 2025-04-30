export default function Gallery() {
  return (
    <section id="trabajos" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Nuestros <span className="text-[#0066FF]">Trabajos</span>
          </h2>
          <p className="text-lg text-black/70 max-w-2xl mx-auto">Diseños que destacan y generan resultados</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="group relative overflow-hidden rounded-xl shadow-lg">
              <img
                src={`/sleek-digital-interface.png?key=7uxag&height=400&width=600&query=modern+website+design+${item}`}
                alt={`Proyecto de diseño web ${item}`}
                className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-[#0066FF] text-sm font-medium mb-1">Diseño Web</span>
                <h3 className="text-white text-xl font-bold">Proyecto {item}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
