"use client";

import { useCartStore } from "@/store/cartStore";

export default function CartSummary() {
  const { totalPrice, items } = useCartStore();
  const subtotal = totalPrice();
  const delivery = items.length > 0 ? 15.0 : 0; // Flat dummy fee
  const total = subtotal + delivery;

  return (
    <div className="bg-white border text-kicks-black border-kicks-gray-200 rounded-3xl p-6 lg:p-8 sticky top-28">
      <h2 className="text-2xl font-black uppercase mb-6">Order Summary</h2>

      <div className="flex flex-col gap-4 text-kicks-gray-500 font-medium mb-6">
        <div className="flex justify-between items-center">
          <span>Subtotal ({items.length} items)</span>
          <span className="text-kicks-black">${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between items-center pb-6 border-b border-kicks-gray-200">
          <span>Delivery</span>
          <span className="text-kicks-black">
            {delivery === 0 ? "Free" : `$${delivery.toFixed(2)}`}
          </span>
        </div>
        <div className="flex justify-between items-center pt-2">
          <span className="text-lg font-bold text-kicks-black">Total</span>
          <span className="text-2xl font-black text-kicks-black">
            ${total.toFixed(2)}
          </span>
        </div>
      </div>

      <button
        disabled={items.length === 0}
        className="w-full bg-kicks-black text-white py-5 rounded-2xl font-bold uppercase tracking-wider text-lg hover:bg-black transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100"
      >
        Checkout
      </button>
    </div>
  );
}
