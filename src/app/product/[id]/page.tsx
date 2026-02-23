import { fetchProductById, fetchProducts } from "@/services/api";
import { notFound } from "next/navigation";
import AddToCartButton from "@/components/cart/AddToCartButton";
import ProductGallery from "@/components/product/ProductGallery";
import MobileCarousel from "@/components/product/MobileCarousel";
import ProductCard from "@/components/product/ProductCard";
import { Product } from "@/types";

interface PageProps {
  params: Promise<{ id: string }>;
}

const COLORS = [
  { name: "Shadow Navy", hex: "#253043" },
  { name: "Army Green", hex: "#707E6E" },
];

const SIZES = ["38", "39", "40", "41", "42", "43", "44", "45", "46", "47"];
const UNAVAILABLE_SIZES = ["39", "40"];

export default async function ProductDetail({ params }: PageProps) {
  const resolvedParams = await params;
  const { id } = resolvedParams;
  let product: Product;
  let relatedProducts: Product[];

  try {
    product = await fetchProductById(id);
    if (!product) notFound();
    relatedProducts = await fetchProducts({ limit: 8 });
    relatedProducts = relatedProducts
      .filter((p) => p.id !== product!.id)
      .slice(0, 4);
  } catch {
    notFound();
  }

  console.log({ product });

  return (
    <div className="min-h-screen bg-kicks-gray-200">
      {/* Product Section */}
      <div className="container pt-20 md:pt-40 pb-6  md:pb-12 w-[358px] md:w-[1320px] mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left: Images */}
          <div className="md:sticky md:top-28">
            <ProductGallery images={product.images} />
            <MobileCarousel images={product.images} />
          </div>

          {/* Right: Details */}
          <div className="flex flex-col gap-6">
            {/* Badge + Title + Price */}
            <div className="flex flex-col gap-2">
              <span className="bg-kicks-blue text-white px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider inline-block w-fit font-rubik">
                New Release
              </span>
              <h1 className="text-xl md:text-3xl font-semibold uppercase text-kicks-black leading-snug font-rubik">
                {product.title}
              </h1>
              <p className="text-2xl md:text-3xl font-semibold text-kicks-blue font-rubik">
                ${product.price.toFixed(2)}
              </p>
            </div>

            {/* Color Selector */}
            <div className="flex flex-col gap-2">
              <span className="text-base font-semibold text-kicks-black font-rubik">
                Color
              </span>
              <div className="flex gap-4">
                {COLORS.map((color, i) => (
                  <div
                    key={color.name}
                    className={`w-8 h-8 rounded-full cursor-pointer transition-all ${
                      i === 0
                        ? "ring-2 ring-offset-2 ring-kicks-black"
                        : "opacity-80 hover:opacity-100"
                    }`}
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                  />
                ))}
              </div>
            </div>

            {/* Size Selector */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <span className="text-base font-semibold text-kicks-black font-rubik">
                  Size
                </span>
                <button className="text-sm font-medium uppercase tracking-wide underline text-kicks-black cursor-pointer hover:text-kicks-blue transition-colors font-rubik">
                  Size Chart
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {SIZES.map((size) => {
                  const unavailable = UNAVAILABLE_SIZES.includes(size);
                  const isFirst = size === "38";
                  return (
                    <button
                      key={size}
                      disabled={unavailable}
                      className={`w-12 h-12 rounded-lg text-sm font-medium uppercase tracking-wide transition-all cursor-pointer font-rubik
                        ${
                          isFirst
                            ? "bg-kicks-black text-white"
                            : unavailable
                              ? "bg-kicks-gray-300 text-kicks-gray-500 cursor-not-allowed"
                              : "bg-white text-kicks-black hover:bg-kicks-black hover:text-white"
                        }`}
                    >
                      {size}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-3">
              <div className="flex gap-2">
                <AddToCartButton
                  product={product}
                  variant="primary"
                  className="flex-1 py-3 rounded-lg text-sm"
                  showIcon={false}
                />
                <button
                  className="w-12 h-12 bg-kicks-black text-white rounded-lg flex items-center justify-center hover:bg-kicks-black/80 transition-colors cursor-pointer shrink-0"
                  aria-label="Add to wishlist"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                </button>
              </div>
              <button className="w-full py-3 rounded-lg text-sm font-medium uppercase tracking-wide bg-kicks-blue text-white hover:bg-blue-700 transition-all active:scale-95 cursor-pointer font-rubik">
                Buy it now
              </button>
            </div>

            {/* About the Product */}
            <div className="flex flex-col gap-3">
              <h3 className="text-base font-semibold uppercase tracking-wide text-kicks-black font-rubik">
                About the Product
              </h3>
              <div className="text-kicks-gray-500 text-sm leading-relaxed font-open-sans space-y-2">
                <p className="font-semibold text-kicks-black">
                  Shadow Navy / Army Green
                </p>
                <p>{product.description}</p>
                <ul className="space-y-1 mt-2">
                  <li>
                    • This product is excluded from all promotional discounts
                    and offers.
                  </li>
                  <li>
                    • Pay over time in interest-free installments with Affirm,
                    Klarna or Afterpay.
                  </li>
                  <li>
                    • Join adiClub to get unlimited free standard shipping,
                    returns, &amp; exchanges.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* You May Also Like */}
      {relatedProducts && relatedProducts.length > 0 && (
        <div className="container mx-auto px-4 md:px-8 py-8 md:py-12 max-w-[1400px]">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl md:text-2xl font-bold uppercase text-kicks-black font-rubik">
              You may also like
            </h2>
            <div className="flex gap-2">
              <button className="w-9 h-9 rounded-full border border-kicks-gray-300 flex items-center justify-center hover:bg-kicks-black hover:text-white hover:border-kicks-black transition-all cursor-pointer">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              <button className="w-9 h-9 rounded-full border border-kicks-gray-300 flex items-center justify-center hover:bg-kicks-black hover:text-white hover:border-kicks-black transition-all cursor-pointer">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
