"use client";

import Link from "next/link";
import { Search, User, ChevronDown, Menu } from "lucide-react";
import CartBadge from "@/components/cart/CartBadge";

export default function Header() {
  return (
    <header className="fixed top-4 md:top-8 left-0 right-0 z-50 transition-all duration-300 pointer-events-none">
      <div className="mx-auto w-[358px] md:w-[1320px] bg-kicks-off-white rounded-[12px] md:rounded-[24px] h-[52px] md:h-[96px] px-4 md:px-8 flex items-center justify-between shadow-sm border border-white/20 pointer-events-auto">
        {/* Left: Nav (Desktop) / Menu (Mobile) */}
        <div className="flex-1 flex items-center gap-6">
          <button className="lg:hidden p-2 -ml-2 text-kicks-black hover:bg-gray-200/50 rounded-lg">
            <Menu className="w-5 h-5" />
          </button>

          <nav className="hidden lg:flex items-center gap-8 font-semibold text-kicks-black text-sm uppercase tracking-wider font-rubik">
            <Link
              href="/"
              className="hover:text-kicks-blue transition-colors relative group"
            >
              New Drops 🔥
            </Link>
            <Link
              href="/"
              className="hover:text-kicks-blue transition-colors flex items-center gap-1"
            >
              Men <ChevronDown className="w-4 h-4 opacity-50" />
            </Link>
            <Link
              href="/"
              className="hover:text-kicks-blue transition-colors flex items-center gap-1"
            >
              Women <ChevronDown className="w-4 h-4 opacity-50" />
            </Link>
          </nav>
        </div>

        {/* Center: Brand Logo */}
        <div className="shrink-0">
          <Link
            href="/"
            className="text-xl md:text-[32px] font-bold font-rubik tracking-tighter text-kicks-black uppercase"
          >
            KICKS
          </Link>
        </div>

        {/* Right: Icons & Cart */}
        <div className="flex-1 flex items-center justify-end gap-2 md:gap-6 text-kicks-black">
          <button className="hidden sm:block p-2 hover:bg-gray-200/50 rounded-full transition-colors">
            <Search className="w-6 h-6" />
          </button>
          <button className="hidden sm:block p-2 hover:bg-gray-200/50 rounded-full transition-colors">
            <User className="w-6 h-6" />
          </button>
          <Link
            href="/cart"
            className="hover:opacity-80 transition-opacity ml-1"
          >
            <CartBadge />
          </Link>
        </div>
      </div>
    </header>
  );
}
