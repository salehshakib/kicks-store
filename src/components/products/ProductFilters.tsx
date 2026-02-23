"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useRef } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";

interface Category {
  id: number;
  name: string;
}

interface ProductFiltersProps {
  categories: Category[];
  currentCategory?: number;
  currentTitle?: string;
  currentPriceMin?: string;
  currentPriceMax?: string;
}

export default function ProductFilters({
  categories,
  currentCategory,
  currentTitle = "",
  currentPriceMin = "",
  currentPriceMax = "",
}: ProductFiltersProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const titleRef = useRef<HTMLInputElement>(null);
  const priceMinRef = useRef<HTMLInputElement>(null);
  const priceMaxRef = useRef<HTMLInputElement>(null);

  const hasFilters =
    currentTitle || currentPriceMin || currentPriceMax || currentCategory;

  const buildParams = (overrides: Record<string, string | undefined>) => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("page"); // reset to page 1 on filter change
    for (const [key, value] of Object.entries(overrides)) {
      if (value) {
        params.set(key, value);
      } else {
        params.delete(key);
      }
    }
    return params.toString();
  };

  const handleCategoryClick = (catId?: number) => {
    const qs = buildParams({ category: catId ? String(catId) : undefined });
    router.push(`/products${qs ? `?${qs}` : ""}`);
  };

  const handleApply = () => {
    const qs = buildParams({
      title: titleRef.current?.value || undefined,
      price_min: priceMinRef.current?.value || undefined,
      price_max: priceMaxRef.current?.value || undefined,
    });
    router.push(`/products${qs ? `?${qs}` : ""}`);
  };

  const handleClear = () => {
    router.push("/products");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleApply();
  };

  return (
    <div className="mb-8 flex flex-col gap-4">
      {/* Category pills */}
      <div className="flex gap-2 flex-wrap">
        <button
          onClick={() => handleCategoryClick(undefined)}
          className={`px-4 py-2 rounded-lg text-sm font-semibold font-rubik uppercase tracking-wide transition-colors cursor-pointer ${
            !currentCategory
              ? "bg-kicks-black text-white"
              : "bg-white text-kicks-black hover:bg-kicks-black hover:text-white"
          }`}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => handleCategoryClick(cat.id)}
            className={`px-4 py-2 rounded-lg text-sm font-semibold font-rubik uppercase tracking-wide transition-colors cursor-pointer ${
              currentCategory === cat.id
                ? "bg-kicks-black text-white"
                : "bg-white text-kicks-black hover:bg-kicks-black hover:text-white"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Search + Price row */}
      <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center">
        {/* Title search */}
        <div className="relative flex-1 min-w-0">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-kicks-gray-500 pointer-events-none" />
          <input
            ref={titleRef}
            type="text"
            placeholder="Search products…"
            defaultValue={currentTitle}
            onKeyDown={handleKeyDown}
            className="w-full bg-white border border-kicks-gray-300 rounded-lg pl-9 pr-4 py-2.5 text-sm font-open-sans text-kicks-black placeholder:text-kicks-gray-500 outline-none focus:ring-2 focus:ring-kicks-black/20 transition"
            aria-label="Search by product title"
          />
        </div>

        {/* Price range */}
        <div className="flex items-center gap-2 shrink-0">
          <SlidersHorizontal className="w-4 h-4 text-kicks-gray-500 shrink-0" />
          <input
            ref={priceMinRef}
            type="number"
            placeholder="Min $"
            defaultValue={currentPriceMin}
            onKeyDown={handleKeyDown}
            min={0}
            className="w-24 bg-white border border-kicks-gray-300 rounded-lg px-3 py-2.5 text-sm font-open-sans text-kicks-black placeholder:text-kicks-gray-500 outline-none focus:ring-2 focus:ring-kicks-black/20 transition"
            aria-label="Minimum price"
          />
          <span className="text-kicks-gray-500 text-sm font-open-sans">—</span>
          <input
            ref={priceMaxRef}
            type="number"
            placeholder="Max $"
            defaultValue={currentPriceMax}
            onKeyDown={handleKeyDown}
            min={0}
            className="w-24 bg-white border border-kicks-gray-300 rounded-lg px-3 py-2.5 text-sm font-open-sans text-kicks-black placeholder:text-kicks-gray-500 outline-none focus:ring-2 focus:ring-kicks-black/20 transition"
            aria-label="Maximum price"
          />
        </div>

        {/* Apply button */}
        <button
          onClick={handleApply}
          className="px-6 py-2.5 bg-kicks-black text-white text-sm font-semibold font-rubik uppercase tracking-wide rounded-lg hover:bg-kicks-blue transition-colors cursor-pointer shrink-0"
        >
          Apply
        </button>

        {/* Clear */}
        {hasFilters && (
          <button
            onClick={handleClear}
            className="flex items-center gap-1.5 px-4 py-2.5 bg-white border border-kicks-gray-300 text-kicks-black text-sm font-semibold font-rubik uppercase tracking-wide rounded-lg hover:border-kicks-black transition-colors cursor-pointer shrink-0"
            aria-label="Clear all filters"
          >
            <X className="w-3.5 h-3.5" />
            Clear
          </button>
        )}
      </div>
    </div>
  );
}
