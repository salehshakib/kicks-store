"use client";

import { useCartStore } from "@/store/cartStore";

export default function CartSummary() {
  const { totalPrice, items } = useCartStore();
  const subtotal = totalPrice();
  const itemCount = items.reduce((sum, i) => sum + i.quantity, 0);
  const delivery = items.length > 0 ? 6.99 : 0;
  const total = subtotal + delivery;

  return (
    <div className="bg-white rounded-2xl p-5 md:p-6 lg:sticky lg:top-28">
      <h2 className="text-xl font-semibold text-kicks-black font-rubik mb-5">
        Order Summary
      </h2>

      <div className="flex flex-col gap-3 text-sm font-open-sans">
        <div className="flex justify-between items-center text-kicks-black">
          <span className="font-semibold uppercase tracking-wide">
            {itemCount} {itemCount === 1 ? "Item" : "Items"}
          </span>
          <span className="font-semibold">${subtotal.toFixed(2)}</span>
        </div>

        <div className="flex justify-between items-center text-kicks-black">
          <span>Delivery</span>
          <span>${delivery === 0 ? "0.00" : delivery.toFixed(2)}</span>
        </div>

        <div className="flex justify-between items-center text-kicks-black">
          <span>Sales Tax</span>
          <span>-</span>
        </div>

        <div className="border-t border-kicks-gray-200 my-1" />

        <div className="flex justify-between items-center text-kicks-black">
          <span className="text-base font-bold font-rubik">Total</span>
          <span className="text-2xl font-bold font-rubik">
            ${total.toFixed(2)}
          </span>
        </div>
      </div>

      <button
        disabled={items.length === 0}
        className="w-full bg-kicks-black text-white py-3 rounded-lg font-semibold uppercase tracking-wide text-sm hover:bg-black/80 transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100 mt-5 cursor-pointer font-rubik"
      >
        Checkout
      </button>

      <button className="w-full text-center text-sm text-kicks-black/70 underline mt-3 cursor-pointer hover:text-kicks-black transition-colors font-open-sans">
        User a promo code
      </button>
    </div>
  );
}
