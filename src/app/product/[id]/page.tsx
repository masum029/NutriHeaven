
import Image from "next/image";
import Link from "next/link";
import products from "@/data/products.json";
import { notFound } from "next/navigation";

export default async function ProductDetail({ params }: { params: { id: string } | Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const id = resolvedParams.id;
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    notFound();
  }

  const discount = Math.round(((product.regularPrice - product.offerPrice) / product.regularPrice) * 100);
  const relatedProducts = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0,3);

  return (
    <div className="w-full">
      <div className="bg-gray-100 px-4 sm:px-6 lg:px-8 py-4">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-gray-600">
          <Link href="/" className="hover:text-primary transition">Home</Link>
          <span>/</span>
          <Link href="/#products" className="hover:text-primary transition">Products</Link>
          <span>/</span>
          <span className="text-primary font-semibold">{product.name}</span>
        </div>
      </div>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div className="flex items-center justify-center">
              <div className="relative w-full h-96 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl overflow-hidden group">
                <Image src={product.image} alt={product.name} fill className="object-cover" />
                <div className="absolute top-4 right-4 bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full text-lg font-bold shadow-lg">Save {discount}%</div>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <span className="inline-block w-fit px-3 py-1 bg-accent bg-opacity-20 text-accent font-semibold text-sm rounded-full mb-4">{product.category}</span>

              <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">{product.name}</h1>

              <div className="flex items-center gap-3 mb-6">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={`text-2xl ${i < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-300"}`}>★</span>
                  ))}
                </div>
                <div>
                  <span className="text-xl font-bold text-gray-900">{product.rating}</span>
                  <span className="text-gray-600 ml-2">({product.reviews} customer reviews)</span>
                </div>
              </div>

              <p className="text-lg text-gray-700 mb-8">{product.description}</p>

              <div className="mb-8 pb-8 border-b-2 border-gray-200">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-5xl font-black text-primary">${product.offerPrice.toFixed(2)}</span>
                  <span className="text-3xl text-gray-500 line-through">${product.regularPrice.toFixed(2)}</span>
                  <span className="text-xl font-bold text-green-600">Save ${(product.regularPrice - product.offerPrice).toFixed(2)}</span>
                </div>
                <p className="text-sm text-gray-600">Limited time offer - Stock is running out fast!</p>
              </div>

              <div className="flex gap-4 mb-8">
                <input type="number" defaultValue={1} min={1} max={10} className="w-20 px-4 py-3 border-2 border-gray-300 rounded-lg font-bold text-center" />
                <button className="flex-1 btn-primary text-lg font-bold">Add to Cart</button>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Why Choose This Product?</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2"><span className="text-primary font-bold">✓</span> 100% Organic & Natural</li>
                  <li className="flex items-center gap-2"><span className="text-primary font-bold">✓</span> Clinically Tested & Proven</li>
                  <li className="flex items-center gap-2"><span className="text-primary font-bold">✓</span> 60-Day Money Back Guarantee</li>
                  <li className="flex items-center gap-2"><span className="text-primary font-bold">✓</span> Free Shipping on Orders Over $50</li>
                </ul>
              </div>
            </div>
          </div>

          {relatedProducts.length > 0 && (
            <div className="mt-16 pt-12 border-t-2 border-gray-200">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Products</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedProducts.map((related) => (
                  <Link key={related.id} href={`/product/${related.id}`} className="card bg-white overflow-hidden group cursor-pointer hover:shadow-2xl">
                    <div className="relative w-full h-48 bg-gray-200 overflow-hidden">
                      <Image src={related.image} alt={related.name} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-gray-900 mb-2 group-hover:text-primary transition">{related.name}</h3>
                      <div className="flex justify-between items-center">
                        <span className="text-xl font-bold text-primary">${related.offerPrice.toFixed(2)}</span>
                        <span className="text-sm text-gray-500 line-through">${related.regularPrice.toFixed(2)}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
