import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types";

export default function ProductCard({ product }: { product: Product }) {
  const imageUrl =
    product.images[0]?.replace(/[\[\]"]/g, "") ||
    "https://placehold.co/600x400?text=No+Image";

  return (
    <div className="group flex flex-col bg-white rounded-3xl p-4 transition-all hover:bg-white hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1 relative">
      {/* Badge */}
      <div className="absolute top-6 left-6 z-10">
        <span className="bg-kicks-blue text-white text-xs font-bold px-3 py-1.5 rounded-br-xl uppercase tracking-wider">
          New
        </span>
      </div>

      {/* Image Container */}
      <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-kicks-gray-100 mb-4">
        <Image
          src={imageUrl}
          alt={product.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 mt-4">
        <h3 className="font-black text-base md:text-lg text-kicks-black uppercase line-clamp-2 leading-tight mb-4">
          {product.title}
        </h3>

        <div className="mt-auto">
          <Link
            href={`/product/${product.id}`}
            className="w-full bg-kicks-black text-white font-bold uppercase tracking-wide py-3 md:py-4 rounded-xl hover:bg-black transition-colors block text-center"
          >
            VIEW PRODUCT - ${product.price}
          </Link>
        </div>
      </div>
    </div>
  );
}
