"use client";

import Image from "next/image";
import { useState } from "react";

export default function MobileCarousel({ images }: { images: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) return null;
  const cleanImages = images.map((img) => img.replace(/[\[\]"]/g, ""));

  return (
    <div className="md:hidden flex flex-col gap-3">
      {/* Main image */}
      <div
        className="relative w-full rounded-2xl overflow-hidden bg-kicks-gray-100"
        style={{ height: 273 }}
      >
        <Image
          src={cleanImages[currentIndex]}
          alt="Product view"
          fill
          className="object-cover"
          sizes="100vw"
          priority
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              "https://placehold.co/600x400?text=No+Image";
          }}
        />
      </div>

      {/* Thumbnail strip */}
      {cleanImages.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-1">
          {cleanImages.map((img, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`relative w-16 h-16 shrink-0 rounded-lg overflow-hidden transition-all cursor-pointer ${
                i === currentIndex
                  ? "ring-2 ring-kicks-black ring-offset-1"
                  : "opacity-60 hover:opacity-100"
              }`}
            >
              <Image
                src={img}
                alt={`Thumbnail ${i + 1}`}
                fill
                className="object-cover"
                sizes="64px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
