import { fetchProducts } from "@/services/api";
import ProductCard from "@/components/product/ProductCard";
import Link from "next/link";

export default async function ProductList() {
  const products = await fetchProducts();

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-12">
          <h2 className="text-5xl md:text-7xl font-black text-kicks-black uppercase tracking-tighter leading-none max-w-2xl">
            Don&apos;t miss out
            <br className="hidden md:block" /> new drops
          </h2>
          <Link
            href="/products"
            className="w-fit bg-kicks-blue text-white font-bold uppercase tracking-wide px-8 py-4 rounded-xl hover:bg-blue-700 transition-colors shadow-lg"
          >
            Shop New Drops
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {products?.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
