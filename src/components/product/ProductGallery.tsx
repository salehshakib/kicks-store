import Image from "next/image";

export default function ProductGallery({ images }: { images: string[] }) {
  if (!images || images.length === 0) {
    return (
      <div className="w-full aspect-[4/3] md:aspect-square bg-kicks-gray-100 rounded-3xl flex items-center justify-center">
        <span className="text-kicks-gray-500 font-medium">
          No images available
        </span>
      </div>
    );
  }

  // Ensure Platzi API image strings are clean
  const cleanImages = images.map((img) => img.replace(/[\[\]"]/g, ""));

  return (
    <div className="hidden md:grid grid-cols-2 gap-4">
      {cleanImages.slice(0, 4).map((img, i) => (
        <div
          key={i}
          className="relative aspect-[4/5] bg-kicks-gray-100 rounded-3xl overflow-hidden group"
        >
          <Image
            src={img}
            alt={`Product view ${i + 1}`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
            sizes="50vw"
          />
        </div>
      ))}
    </div>
  );
}
