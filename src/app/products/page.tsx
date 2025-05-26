// src/app/products/page.tsx

export default async function ProductsPage() {
  const res = await fetch('https://fakestoreapi.com/products');
  const products = await res.json();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Catálogo de Productos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product: any) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-32 h-32 object-contain mx-auto mb-4"
            />
            <h2 className="text-lg font-semibold mb-2 line-clamp-2">{product.title}</h2>
            <p className="text-green-600 font-bold mb-2">${product.price}</p>
            <a
              href={`/products/${product.id}`}
              className="mt-auto text-blue-600 hover:underline text-sm text-center"
            >
              Ver detalles
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
