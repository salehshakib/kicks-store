import CartItemList from "@/components/cart/CartItemList";
import CartSummary from "@/components/cart/CartSummary";

export default function CartPage() {
  return (
    <div className="bg-[#FAFAFA] min-h-screen">
      <div className="container mx-auto px-4 md:px-8 py-12 lg:py-16 max-w-[1400px]">
        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-kicks-black mb-8">
          Saving to celebrate
        </h1>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
          <div className="flex-1 w-full">
            <div className="bg-kicks-gray-100 rounded-[32px] p-6 text-kicks-black mb-6">
              <p className="font-medium text-sm md:text-base">
                Enjoy <span className="font-bold">free shipping</span> on
                members orders above $50.
              </p>
            </div>

            <h2 className="text-2xl font-bold uppercase mb-6 text-kicks-black">
              Your Bag
            </h2>
            <CartItemList />
          </div>

          <div className="w-full lg:w-[400px] shrink-0">
            <CartSummary />
          </div>
        </div>
      </div>
    </div>
  );
}
