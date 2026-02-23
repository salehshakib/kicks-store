"use client";

import { useCartStore } from "@/store/cartStore";
import { useEffect, useState } from "react";

export default function CartBadge() {
  const totalItems = useCartStore((state) => state.totalItems());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex h-7 w-7 md:h-8 md:w-8 items-center justify-center rounded-full bg-kicks-accent text-xs md:text-sm font-bold text-kicks-black tracking-tighter shadow-sm">
        0
      </div>
    );
  }

  return (
    <div className="flex h-7 w-7 md:h-8 md:w-8 items-center justify-center rounded-full bg-kicks-accent text-xs md:text-sm font-bold text-kicks-black tracking-tighter shadow-sm">
      {totalItems}
    </div>
  );
}
