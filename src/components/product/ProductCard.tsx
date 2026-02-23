import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types";

export default function ProductCard({ product }: { product: Product }) {
  const rawImage = product.images?.[0] ?? "";
  const imageUrl = rawImage.replace(/[\[\]"]/g, "").startsWith("http")
    ? rawImage.replace(/[\[\]"]/g, "")
    : `https://placehold.co/600x600?text=${encodeURIComponent(product.title)}`;

  return (
    <div className="group flex flex-col bg-white rounded-[28px] p-2 md:p-3 transition-all hover:shadow-2xl hover:shadow-black/5 hover:-translate-y-1 relative cursor-pointer">
      <Link
        href={`/product/${product.id}`}
        className="block relative w-full aspect-square rounded-[24px] overflow-hidden bg-kicks-gray-100"
      >
        {/* New badge */}
        <div className="absolute top-0 left-0 z-10">
          <span className="bg-kicks-blue text-white text-[11px] font-semibold px-3 py-2 rounded-br-2xl uppercase tracking-wider font-rubik">
            New
          </span>
        </div>

        <Image
          src={imageUrl}
          alt={product.title}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-cover group-hover:scale-110 transition-transform duration-700 mix-blend-multiply"
        />
      </Link>

      {/* Content */}
      <div className="flex flex-col flex-1 p-2 md:p-3 mt-2">
        <h3 className="font-bold text-sm md:text-base text-kicks-black uppercase line-clamp-2 mb-4 font-rubik leading-tight">
          {product.title}
        </h3>

        <div className="mt-auto">
          <Link
            href={`/product/${product.id}`}
            className="w-full bg-kicks-black text-white font-bold uppercase tracking-wide py-3 md:py-3.5 rounded-lg hover:bg-kicks-blue transition-all block text-center text-xs md:text-sm font-rubik"
          >
            VIEW PRODUCT -{" "}
            <span className="text-kicks-accent">${product.price}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
