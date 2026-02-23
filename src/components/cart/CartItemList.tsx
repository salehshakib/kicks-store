"use client";

import { useCartStore } from "@/store/cartStore";
import Image from "next/image";
import { Trash2, Plus, Minus } from "lucide-react";

export default function CartItemList() {
  const { items, updateQuantity, removeItem } = useCartStore();

  if (items.length === 0) {
    return (
      <div className="bg-kicks-gray-100 rounded-3xl p-12 text-center text-kicks-gray-500 font-medium h-full flex flex-col items-center justify-center min-h-[400px]">
        <ShoppingCartIcon className="w-16 h-16 text-kicks-gray-300 mb-4" />
        <p className="text-xl">Your bag is empty.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 w-full">
      {items.map((item) => {
        const imageUrl =
          item.images[0]?.replace(/[\[\]"]/g, "") ||
          "https://placehold.co/600x400?text=No+Image";

        return (
          <div
            key={item.id}
            className="flex gap-4 md:gap-6 bg-white p-4 rounded-3xl border border-kicks-gray-200"
          >
            {/* Image */}
            <div className="relative w-24 h-24 md:w-32 md:h-32 shrink-0 bg-kicks-gray-100 rounded-2xl overflow-hidden">
              <Image
                src={imageUrl}
                alt={item.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 96px, 128px"
              />
            </div>

            {/* Info */}
            <div className="flex flex-col flex-1 justify-between">
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h3 className="font-bold text-kicks-black uppercase text-sm md:text-lg line-clamp-2 md:line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="text-kicks-gray-500 text-sm mt-1">
                    {item.category.name}
                  </p>
                </div>
                <p className="font-bold text-kicks-blue whitespace-nowrap">
                  ${item.price}
                </p>
              </div>

              {/* Actions */}
              <div className="flex justify-between items-end mt-4">
                <div className="flex items-center gap-3 bg-kicks-gray-100 rounded-xl px-2 py-1 select-none">
                  <button
                    onClick={() =>
                      updateQuantity(item.id, Math.max(1, item.quantity - 1))
                    }
                    className="p-1.5 hover:bg-white rounded-lg transition-colors text-kicks-black"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="font-bold w-6 text-center text-kicks-black">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="p-1.5 hover:bg-white rounded-lg transition-colors text-kicks-black"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                <button
                  onClick={() => removeItem(item.id)}
                  className="p-2 text-kicks-gray-500 hover:text-red-500 hover:bg-red-50 rounded-xl transition-colors"
                  aria-label="Remove item"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function ShoppingCartIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  );
}
