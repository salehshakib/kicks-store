import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types";

export default function ProductCard({ product }: { product: Product }) {
  // Use local images for the first 4 products as provided by the user
  const localImages: Record<number, string> = {
    1: "/products/p1.png",
    2: "/products/p2.png",
    3: "/products/p3.png",
    4: "/products/p4.png",
  };

  const imageUrl =
    localImages[product.id] ||
    (product.images[0]?.startsWith("http")
      ? product.images[0].replace(/[\[\]"]/g, "")
      : `https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=600&auto=format&fit=crop&sig=${product.id}`);

  const isNew = product.id % 2 === 0;
  const hasDiscount = product.id === 1 || product.id === 3;
  const originalPrice = hasDiscount
    ? Math.round(product.price * 1.15)
    : product.price;

  return (
    <div className="group flex flex-col bg-kicks-off-white rounded-[28px] p-2 md:p-3 transition-all hover:shadow-2xl hover:shadow-black/5 hover:-translate-y-1 relative">
      <Link
        href={`/product/${product.id}`}
        className="block relative w-full aspect-square md:aspect-4/3 rounded-[24px] overflow-hidden bg-white"
      >
        {/* Badges */}
        <div className="absolute top-0 left-0 z-10 flex flex-col items-start">
          {isNew && (
            <span className="bg-kicks-blue text-white text-[10px] md:text-xs font-bold px-4 py-3 rounded-br-2xl uppercase tracking-wider font-rubik">
              New
            </span>
          )}
          {hasDiscount && (
            <span className="bg-kicks-accent text-kicks-black text-[10px] md:text-xs font-bold px-4 py-3 rounded-br-2xl uppercase tracking-wider font-rubik">
              15% OFF
            </span>
          )}
        </div>

        <Image
          src={imageUrl}
          alt={product.title}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-contain p-4 group-hover:scale-110 transition-transform duration-700 mix-blend-multiply"
        />
      </Link>

      {/* Content */}
      <div className="flex flex-col flex-1 p-2 md:p-3 mt-2">
        <h3 className="font-bold text-lg md:text-2xl text-kicks-black uppercase line-clamp-1 mb-4 font-rubik leading-tight">
          {product.title}
        </h3>

        <div className="mt-auto">
          <Link
            href={`/product/${product.id}`}
            className="w-full bg-kicks-black text-white font-bold uppercase tracking-wide py-3 md:py-4 rounded-lg hover:bg-blue-700 transition-all block text-center text-sm md:text-base font-rubik"
          >
            VIEW PRODUCT -{" "}
            <span className="text-kicks-accent">${product.price}</span>
            {hasDiscount && (
              <span className="ml-2 line-through text-white/40 text-xs">
                ${originalPrice}
              </span>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
}
