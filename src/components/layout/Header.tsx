import Link from "next/link";
import { Search, User, Menu, ChevronDown } from "lucide-react";
import CartBadge from "@/components/cart/CartBadge";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
        {/* Mobile Menu & Nav Links */}
        <div className="flex items-center gap-6 flex-1">
          <button className="lg:hidden p-2 -ml-2 text-kicks-black hover:bg-gray-50 rounded-lg">
            <Menu className="w-6 h-6" />
          </button>
          <nav className="hidden lg:flex gap-8 font-semibold text-kicks-black items-center">
            <Link
              href="/"
              className="hover:text-kicks-blue transition-colors relative group"
            >
              New Drops 🔥
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-kicks-blue transition-all group-hover:w-full"></span>
            </Link>
            <Link
              href="/"
              className="hover:text-kicks-blue transition-colors flex items-center gap-1"
            >
              Men <ChevronDown className="w-4 h-4" />
            </Link>
            <Link
              href="/"
              className="hover:text-kicks-blue transition-colors flex items-center gap-1"
            >
              Women <ChevronDown className="w-4 h-4" />
            </Link>
          </nav>
        </div>

        {/* Brand Logo */}
        <div className="flex-1 flex justify-center">
          <Link
            href="/"
            className="text-3xl lg:text-4xl font-black tracking-tighter text-kicks-black uppercase"
          >
            Kicks
          </Link>
        </div>

        {/* Utility Icons */}
        <div className="flex items-center justify-end gap-3 lg:gap-6 flex-1 text-kicks-black">
          <button className="hidden lg:block p-2 hover:bg-gray-100 rounded-full transition-colors">
            <Search className="w-6 h-6" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
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
