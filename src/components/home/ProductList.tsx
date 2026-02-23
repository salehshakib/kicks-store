import { fetchProducts } from "@/services/api";
import ProductCard from "@/components/product/ProductCard";
import Link from "next/link";

export default async function ProductList() {
  const products = await fetchProducts();

  return (
    <section className="py-20 md:py-[150px]">
      <div className="w-[358px] md:w-[1320px] mx-auto ">
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
          {products?.slice(0, 4).map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
