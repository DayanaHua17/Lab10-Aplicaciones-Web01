import { FaRocket, FaUsers, FaShieldAlt, FaHandshake } from 'react-icons/fa';

export default function HomePage() {
  return (
    <div className="bg-gray-100 text-gray-800">
      {/* Sección Hero */}
<section className="bg-slate-800 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Bienvenido a CreaTech</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Soluciones modernas, eficientes y sostenibles para tu negocio.
        </p>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvfbKoFSGcHPzXPAqr9c6ZifukmzqTZKxkWA&s"
          alt="Oficina"
          className="mt-8 rounded-lg mx-auto max-w-xl shadow-lg"
        />
      </section>

      {/* Misión y Visión */}
      <section className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold text-blue-700 mb-3">Nuestra Misión</h2>
          <p>
            Brindar productos y servicios que impacten positivamente en nuestros clientes mediante innovación constante, atención personalizada y responsabilidad social.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-blue-700 mb-3">Nuestra Visión</h2>
          <p>
            Ser líderes en el sector tecnológico y comercial, reconocidos por nuestra calidad, ética y compromiso con el desarrollo sostenible.
          </p>
        </div>
      </section>

      {/* Servicios con iconos */}
      <section className="bg-white py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div className="p-6 rounded shadow hover:shadow-md transition bg-gray-50">
            <FaRocket className="text-4xl text-blue-600 mx-auto mb-4" />
            <h3 className="font-semibold text-lg mb-2">Innovación</h3>
            <p>Desarrollo constante de nuevas soluciones tecnológicas.</p>
          </div>
          <div className="p-6 rounded shadow hover:shadow-md transition bg-gray-50">
            <FaUsers className="text-4xl text-blue-600 mx-auto mb-4" />
            <h3 className="font-semibold text-lg mb-2">Atención Personalizada</h3>
            <p>Nos enfocamos en las necesidades de cada cliente.</p>
          </div>
          <div className="p-6 rounded shadow hover:shadow-md transition bg-gray-50">
            <FaShieldAlt className="text-4xl text-blue-600 mx-auto mb-4" />
            <h3 className="font-semibold text-lg mb-2">Seguridad</h3>
            <p>Protección de datos y cumplimiento normativo garantizado.</p>
          </div>
          <div className="p-6 rounded shadow hover:shadow-md transition bg-gray-50">
            <FaHandshake className="text-4xl text-blue-600 mx-auto mb-4" />
            <h3 className="font-semibold text-lg mb-2">Alianzas Estratégicas</h3>
            <p>Colaboramos con líderes para brindar más valor.</p>
          </div>
        </div>
      </section>

      {/* Testimonio o Imagen final */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-2xl font-bold mb-4">Más que un proveedor, un aliado</h2>
        <p className="max-w-2xl mx-auto mb-6">
          En MiEmpresa construimos relaciones de confianza con nuestros clientes, entendiendo sus desafíos y acompañándolos en cada paso del crecimiento.
        </p>
        <img
          src="https://images.unsplash.com/photo-1591696205602-2f950c417cb9"
          alt="Equipo"
          className="mx-auto max-w-xl rounded shadow"
        />
      </section>
    </div>
  );
}
