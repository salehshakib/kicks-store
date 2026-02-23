import { fetchProducts, fetchCategories } from "@/services/api";
import ProductCard from "@/components/product/ProductCard";
import ProductFilters from "@/components/products/ProductFilters";
import ProductGridSkeleton from "@/components/skeletons/ProductGridSkeleton";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Suspense } from "react";

const PAGE_SIZE = 10;

interface PageProps {
  searchParams: Promise<{
    page?: string;
    category?: string;
    title?: string;
    price_min?: string;
    price_max?: string;
  }>;
}

export default async function ProductsPage({ searchParams }: PageProps) {
  const {
    page: pageParam,
    category: categoryParam,
    title,
    price_min,
    price_max,
  } = await searchParams;

  const currentPage = Math.max(1, parseInt(pageParam ?? "1", 10));
  const categoryId = categoryParam ? parseInt(categoryParam, 10) : undefined;
  const offset = (currentPage - 1) * PAGE_SIZE;

  const [products, categories] = await Promise.all([
    fetchProducts({
      offset,
      limit: PAGE_SIZE,
      categoryId,
      title,
      priceMin: price_min ? Number(price_min) : undefined,
      priceMax: price_max ? Number(price_max) : undefined,
    }),
    fetchCategories(),
  ]);

  const validCategories = categories.filter(
    (c) => c.image?.startsWith("http") && c.image.includes("."),
  );

  const hasPrev = currentPage > 1;
  const hasNext = products.length === PAGE_SIZE;

  const buildHref = (p: number) => {
    const params = new URLSearchParams();
    if (p > 1) params.set("page", String(p));
    if (categoryId) params.set("category", String(categoryId));
    if (title) params.set("title", title);
    if (price_min) params.set("price_min", price_min);
    if (price_max) params.set("price_max", price_max);
    const qs = params.toString();
    return `/products${qs ? `?${qs}` : ""}`;
  };

  return (
    <div className="min-h-screen bg-kicks-gray-200">
      <div className="container pt-20 md:pt-40 pb-8 w-[358px] md:w-[1320px] mx-auto ">
        {/* Header */}
        <div className="flex flex-row items-center justify-between gap-4 mb-8">
          <h1 className="text-3xl md:text-5xl font-bold uppercase text-kicks-black font-rubik leading-tight">
            All Products
          </h1>
          <p className="text-sm text-kicks-gray-500 font-open-sans">
            Page {currentPage}
          </p>
        </div>

        {/* Filters */}
        <Suspense
          fallback={
            <div className="flex flex-col gap-4 mb-8 animate-pulse">
              <div className="flex gap-2 flex-wrap">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div
                    key={i}
                    className="h-9 w-20 rounded-lg bg-kicks-gray-300"
                  />
                ))}
              </div>
              <div className="flex flex-col md:flex-row gap-3">
                <div className="flex-1 h-10 rounded-lg bg-kicks-gray-300" />
                <div className="flex gap-2">
                  <div className="h-10 w-24 rounded-lg bg-kicks-gray-300" />
                  <div className="h-10 w-24 rounded-lg bg-kicks-gray-300" />
                </div>
                <div className="h-10 w-24 rounded-lg bg-kicks-gray-300" />
              </div>
            </div>
          }
        >
          <ProductFilters
            categories={validCategories}
            currentCategory={categoryId}
            currentTitle={title}
            currentPriceMin={price_min}
            currentPriceMax={price_max}
          />
        </Suspense>

        {/* Products Grid */}
        <Suspense fallback={<ProductGridSkeleton count={PAGE_SIZE} />}>
          {products.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-24 text-center">
              <p className="text-xl font-semibold text-kicks-gray-500 font-rubik">
                No products found.
              </p>
              <Link
                href="/products"
                className="mt-4 text-sm underline text-kicks-black hover:text-kicks-blue transition-colors"
              >
                Clear filters
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </Suspense>

        {/* Pagination */}
        {(hasPrev || hasNext) && (
          <div className="flex items-center justify-center gap-3 mt-12">
            {hasPrev ? (
              <Link
                href={buildHref(currentPage - 1)}
                className="w-10 h-10 rounded-full border border-kicks-gray-300 flex items-center justify-center bg-white hover:bg-kicks-black hover:text-white hover:border-kicks-black transition-all cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </Link>
            ) : (
              <span className="w-10 h-10 rounded-full border border-kicks-gray-200 flex items-center justify-center text-kicks-gray-300 cursor-not-allowed">
                <ChevronLeft className="w-4 h-4" />
              </span>
            )}

            {/* Page numbers */}
            <div className="flex gap-2">
              {Array.from({ length: 3 }, (_, i) => {
                const p = Math.max(1, currentPage - 1) + i;
                const isActive = p === currentPage;
                return (
                  <Link
                    key={p}
                    href={buildHref(p)}
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold font-rubik transition-all cursor-pointer ${
                      isActive
                        ? "bg-kicks-black text-white"
                        : "bg-white text-kicks-black border border-kicks-gray-300 hover:bg-kicks-black hover:text-white hover:border-kicks-black"
                    }`}
                  >
                    {p}
                  </Link>
                );
              })}
            </div>

            {hasNext ? (
              <Link
                href={buildHref(currentPage + 1)}
                className="w-10 h-10 rounded-full border border-kicks-gray-300 flex items-center justify-center bg-white hover:bg-kicks-black hover:text-white hover:border-kicks-black transition-all cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </Link>
            ) : (
              <span className="w-10 h-10 rounded-full border border-kicks-gray-200 flex items-center justify-center text-kicks-gray-300 cursor-not-allowed">
                <ChevronRight className="w-4 h-4" />
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
