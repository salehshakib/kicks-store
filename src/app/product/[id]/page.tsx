import { fetchProductById } from "@/services/api";
import { notFound } from "next/navigation";
import AddToCartButton from "@/components/cart/AddToCartButton";
import ProductGallery from "@/components/product/ProductGallery";
import MobileCarousel from "@/components/product/MobileCarousel";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductDetail({ params }: PageProps) {
  const resolvedParams = await params;
  const { id } = resolvedParams;
  let product;

  try {
    product = await fetchProductById(id);
    if (!product) notFound();
  } catch {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 md:px-8 py-8 md:py-16 max-w-[1400px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-start">
        {/* Left: Images */}
        <div className="sticky top-28">
          <ProductGallery images={product.images} />
          <MobileCarousel images={product.images} />
        </div>

        {/* Right: Details */}
        <div className="flex flex-col gap-8">
          <div>
            <span className="bg-kicks-gray-100 text-kicks-black px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider mb-4 inline-block">
              {product.category.name}
            </span>
            <h1 className="text-4xl md:text-5xl font-black uppercase text-kicks-black leading-[1.1] mb-4">
              {product.title}
            </h1>
            <p className="text-3xl font-bold text-kicks-blue">
              ${product.price}
            </p>
          </div>

          <div className="prose prose-lg text-kicks-gray-500">
            <p className="leading-relaxed">{product.description}</p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-4 mt-8 pt-8 border-t border-kicks-gray-200">
            <AddToCartButton
              product={product}
              variant="primary"
              className="w-full py-5 rounded-2xl text-lg"
              showIcon
            />
            <button className="w-full py-5 rounded-2xl text-lg font-bold uppercase tracking-wide bg-kicks-blue text-white hover:bg-blue-700 transition-all active:scale-95">
              Buy it now
            </button>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-bold uppercase tracking-wider mb-4 border-b border-kicks-gray-200 pb-2 text-kicks-black">
              About the Product
            </h3>
            <ul className="text-kicks-gray-500 space-y-2 font-medium">
              <li>• 100% Authentic Quality</li>
              <li>• Standard shipping within 2-4 business days</li>
              <li>• Free returns within 30 days</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
