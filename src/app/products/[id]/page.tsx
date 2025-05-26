export const dynamicParams = true; // fuerza compatibilidad

export default async function ProductDetail({ params }: any) {
  const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);
  const product = await res.json();

  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6 flex flex-col md:flex-row gap-6">
        <img
          src={product.image}
          alt={product.title}
          className="w-64 h-64 object-contain mx-auto"
        />
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <p className="text-sm text-gray-400 mb-2">Categoría: {product.category}</p>
          <p className="text-2xl font-bold text-green-700">${product.price}</p>
        </div>
      </div>
    </div>
  );
}
