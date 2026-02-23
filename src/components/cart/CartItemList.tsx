"use client";

import { useCartStore } from "@/store/cartStore";
import Image from "next/image";
import { Trash2, Heart } from "lucide-react";

export default function CartItemList() {
  const { items, removeItem } = useCartStore();

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <svg
          className="w-12 h-12 text-kicks-gray-300 mb-3"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="8" cy="21" r="1" />
          <circle cx="19" cy="21" r="1" />
          <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
        </svg>
        <p className="text-kicks-gray-500 font-medium">Your bag is empty.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col divide-y divide-kicks-gray-200">
      {items.map((item) => {
        const imageUrl =
          item.images[0]?.replace(/[\[\]"]/g, "") ||
          "https://placehold.co/400x400?text=No+Image";

        return (
          <div key={item.id} className="flex gap-4 py-5 first:pt-0">
            {/* Product Image */}
            <div className="relative w-24 h-24 md:w-28 md:h-28 shrink-0 bg-kicks-gray-100 rounded-xl overflow-hidden">
              <Image
                src={imageUrl}
                alt={item.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 96px, 112px"
              />
            </div>

            {/* Item Details */}
            <div className="flex flex-col flex-1 min-w-0 gap-1">
              {/* Top row: Name + Price */}
              <div className="flex justify-between items-start gap-2">
                <h3 className="font-bold text-kicks-black uppercase text-sm md:text-base leading-tight line-clamp-2 font-rubik">
                  {item.title}
                </h3>
                <p className="font-bold text-kicks-blue whitespace-nowrap text-sm md:text-base shrink-0">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>

              {/* Category */}
              <p className="text-xs md:text-sm text-kicks-gray-500 font-open-sans">
                {item.category.name}
              </p>

              {/* Color */}
              <p className="text-xs md:text-sm text-kicks-gray-500 font-open-sans">
                Enamel Blue/ University White
              </p>

              {/* Size + Quantity */}
              <div className="flex gap-3 mt-2">
                <div className="flex items-center gap-1.5 bg-kicks-gray-100 rounded-lg px-3 py-1.5 cursor-pointer">
                  <span className="text-xs font-semibold text-kicks-black font-rubik">
                    Size 10
                  </span>
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>
                <div className="flex items-center gap-1.5 bg-kicks-gray-100 rounded-lg px-3 py-1.5 cursor-pointer">
                  <span className="text-xs font-semibold text-kicks-black font-rubik">
                    Quantity {item.quantity}
                  </span>
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-1 mt-1">
                <button
                  className="p-2 text-kicks-gray-500 hover:text-kicks-blue transition-colors cursor-pointer"
                  aria-label="Add to wishlist"
                >
                  <Heart className="w-4 h-4" />
                </button>
                <button
                  onClick={() => removeItem(item.id)}
                  className="p-2 text-kicks-gray-500 hover:text-red-500 transition-colors cursor-pointer"
                  aria-label="Remove item"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
