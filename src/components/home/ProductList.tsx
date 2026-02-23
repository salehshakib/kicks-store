import { fetchProducts } from "@/services/api";
import ProductCard from "@/components/product/ProductCard";
import Link from "next/link";

export default async function ProductList() {
  const products = await fetchProducts({ limit: 4 });

  return (
    <section className="py-20 pt-4 md:py-37.5 md:pt-12.5">
      <div className="w-89.5 md:w-330 mx-auto ">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-12">
          <h2 className="text-[32px] md:text-[74px] font-bold text-kicks-black uppercase tracking-tight leading-[1.1] md:leading-[95%] max-w-2xl font-rubik">
            Don&apos;t miss out
            <br className="hidden md:block" /> new drops
          </h2>
          <Link
            href="/products"
            className="w-fit bg-kicks-blue text-white font-bold uppercase tracking-wide px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors shadow-lg text-sm md:text-base"
          >
            SHOP NEW DROPS
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
