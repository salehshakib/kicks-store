"use client";

import { useCartStore } from "@/store/cartStore";
import { Product } from "@/types";
import { ShoppingCart } from "lucide-react";

interface AddToCartButtonProps {
  product: Product;
  variant?: "primary" | "secondary";
  className?: string;
  showIcon?: boolean;
}

export default function AddToCartButton({
  product,
  variant = "primary",
  className = "",
  showIcon = false,
}: AddToCartButtonProps) {
  const addItem = useCartStore((state) => state.addItem);

  const baseStyles =
    "font-bold uppercase tracking-wide transition-all active:scale-95 flex items-center justify-center gap-3";

  const variants = {
    primary: "bg-kicks-black text-white hover:bg-black/90",
    secondary: "bg-kicks-blue text-white hover:bg-blue-700",
  };

  return (
    <button
      onClick={(e) => {
        e.preventDefault(); // Prevent navigation if inside a Link wrapper
        addItem(product);
      }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {showIcon && <ShoppingCart className="w-5 h-5" />}
      Add to Cart
    </button>
  );
}
