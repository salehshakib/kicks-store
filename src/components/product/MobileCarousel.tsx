"use client";

import Image from "next/image";
import { useState } from "react";

export default function MobileCarousel({ images }: { images: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) return null;
  const cleanImages = images.map((img) => img.replace(/[\[\]"]/g, ""));

  return (
    <div className="md:hidden flex flex-col gap-4">
      <div className="relative aspect-square w-full rounded-[32px] overflow-hidden bg-kicks-gray-100">
        <Image
          src={cleanImages[currentIndex]}
          alt={`Product view`}
          fill
          className="object-cover"
          sizes="100vw"
          priority
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              "https://placehold.co/600x600?text=Error";
          }}
        />
      </div>

      {cleanImages.length > 1 && (
        <div className="flex gap-3 overflow-x-auto hide-scrollbar snap-x pb-2">
          {cleanImages.map((img, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`relative w-20 h-20 shrink-0 rounded-2xl overflow-hidden snap-start transition-all ${
                i === currentIndex
                  ? "ring-2 ring-kicks-black ring-offset-2"
                  : "opacity-60 hover:opacity-100"
              }`}
            >
              <Image
                src={img}
                alt={`Thumbnail ${i + 1}`}
                fill
                className="object-cover"
                sizes="80px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
