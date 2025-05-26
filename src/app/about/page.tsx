export default function AboutPage() {
  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-blue-800 mb-8 text-center">Sobre Nosotros</h1>

      {/* Sección 1: Historia */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">Nuestra Historia</h2>
        <p className="text-gray-700">
          Fundada en 2020, <strong>MiEmpresa</strong> nació con la visión de transformar el mercado mediante la innovación tecnológica. Iniciamos como un pequeño equipo multidisciplinario, y gracias a nuestro compromiso con la calidad, hemos crecido hasta convertirnos en un referente en soluciones digitales y servicios especializados.
        </p>
      </section>

      {/* Sección 2: Valores */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">Nuestros Valores</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><strong>Innovación:</strong> Nos desafiamos a mejorar continuamente.</li>
          <li><strong>Compromiso:</strong> Cumplimos lo que prometemos.</li>
          <li><strong>Colaboración:</strong> Fomentamos el trabajo en equipo y el respeto mutuo.</li>
          <li><strong>Ética:</strong> Actuamos con integridad en todas nuestras operaciones.</li>
        </ul>
      </section>

      {/* Sección 3: Lo que hacemos */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">¿Qué Hacemos?</h2>
        <p className="text-gray-700 mb-4">
          Ofrecemos soluciones en las siguientes áreas:
        </p>
        <ul className="grid md:grid-cols-2 gap-4 list-disc list-inside text-gray-700">
          <li>Desarrollo de aplicaciones web personalizadas</li>
          <li>Sistemas de gestión empresarial y logística</li>
          <li>Soporte técnico e infraestructura digital</li>
          <li>Consultoría en transformación digital</li>
        </ul>
      </section>

      {/* Sección 4: Diferenciadores */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">¿Qué nos diferencia?</h2>
        <p className="text-gray-700">
          Nos destacamos por la atención al detalle, la cercanía con nuestros clientes y la capacidad de adaptación. Creamos relaciones de largo plazo, brindando soluciones escalables y sostenibles, alineadas con los objetivos de cada organización.
        </p>
      </section>
    </div>
  );
}
