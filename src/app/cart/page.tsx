import CartItemList from "@/components/cart/CartItemList";
import CartSummary from "@/components/cart/CartSummary";
import { fetchProducts } from "@/services/api";
import ProductCard from "@/components/product/ProductCard";
import { Product } from "@/types";

export default async function CartPage() {
  let relatedProducts: Product[] = [];
  try {
    const allProducts = await fetchProducts();
    relatedProducts = allProducts.slice(0, 4);
  } catch {
    relatedProducts = [];
  }

  return (
    <div className="min-h-screen bg-kicks-gray-200">
      <div className="container mx-auto px-4 md:px-8 py-8 md:py-12 max-w-[1400px]">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-semibold text-kicks-black font-rubik">
            Saving to celebrate
          </h1>
          <p className="text-xs md:text-sm text-kicks-black/70 font-open-sans mt-1">
            Enjoy up to 60% off thousands of styles during the End of Year sale
            - while supplies last. No code needed.
          </p>
          <button className="text-sm font-semibold underline text-kicks-black/70 mt-1 cursor-pointer hover:text-kicks-black transition-colors font-open-sans">
            Join us or Sign-in
          </button>
        </div>

        {/* Main Layout */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
          {/* Left: Bag */}
          <div className="flex-1 w-full">
            <div className="bg-white rounded-2xl p-4 md:p-6">
              <h2 className="text-xl font-semibold text-kicks-black font-rubik mb-1">
                Your Bag
              </h2>
              <p className="text-sm text-kicks-black/70 font-open-sans mb-6">
                Items in your bag not reserved- check out now to make them
                yours.
              </p>
              <CartItemList />
            </div>
          </div>

          {/* Right: Summary */}
          <div className="w-full lg:w-[380px] shrink-0">
            <CartSummary />
          </div>
        </div>
      </div>

      {/* You May Also Like */}
      {relatedProducts.length > 0 && (
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
