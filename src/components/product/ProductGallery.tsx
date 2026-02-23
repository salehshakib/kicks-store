import Image from "next/image";

export default function ProductGallery({ images }: { images: string[] }) {
  if (!images || images.length === 0) {
    return (
      <div className="hidden md:flex w-full aspect-square bg-kicks-gray-100 rounded-2xl items-center justify-center">
        <span className="text-kicks-gray-500 font-medium">
          No images available
        </span>
      </div>
    );
  }

  const cleanImages = images.map((img) => img.replace(/[\[\]"]/g, ""));
  const mainImage = cleanImages[0];
  const thumbImages = cleanImages.slice(1, 4);

  return (
    <div className="hidden md:flex flex-col gap-3">
      {/* Main large image */}
      <div className="relative w-full aspect-[4/3] bg-kicks-gray-100 rounded-2xl overflow-hidden group">
        <Image
          src={mainImage}
          alt="Product main view"
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
          sizes="(max-width: 1400px) 50vw, 700px"
          priority
        />
      </div>
      {/* Thumbnail row */}
      {thumbImages.length > 0 && (
        <div className="flex gap-3">
          {thumbImages.map((img, i) => (
            <div
              key={i}
              className="relative w-16 h-16 lg:w-20 lg:h-20 bg-kicks-gray-100 rounded-lg overflow-hidden cursor-pointer group shrink-0"
            >
              <Image
                src={img}
                alt={`Product view ${i + 2}`}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="80px"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
