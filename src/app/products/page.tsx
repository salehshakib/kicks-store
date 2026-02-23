import { fetchProducts, fetchCategories } from "@/services/api";
import ProductCard from "@/components/product/ProductCard";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const PAGE_SIZE = 10;

interface PageProps {
  searchParams: Promise<{ page?: string; category?: string }>;
}

export default async function ProductsPage({ searchParams }: PageProps) {
  const { page: pageParam, category: categoryParam } = await searchParams;

  const currentPage = Math.max(1, parseInt(pageParam ?? "1", 10));
  const categoryId = categoryParam ? parseInt(categoryParam, 10) : undefined;
  const offset = (currentPage - 1) * PAGE_SIZE;

  const [products, categories] = await Promise.all([
    fetchProducts({ offset, limit: PAGE_SIZE, categoryId }),
    fetchCategories(),
  ]);

  const validCategories = categories.filter(
    (c) => c.image?.startsWith("http") && c.image.includes("."),
  );

  const hasPrev = currentPage > 1;
  const hasNext = products.length === PAGE_SIZE;

  const buildHref = (p: number, cat?: number) => {
    const params = new URLSearchParams();
    if (p > 1) params.set("page", String(p));
    if (cat) params.set("category", String(cat));
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

        {/* Category Filter */}
        <div className="flex gap-2 flex-wrap mb-8">
          <Link
            href={buildHref(1)}
            className={`px-4 py-2 rounded-lg text-sm font-semibold font-rubik uppercase tracking-wide transition-colors cursor-pointer ${
              !categoryId
                ? "bg-kicks-black text-white"
                : "bg-white text-kicks-black hover:bg-kicks-black hover:text-white"
            }`}
          >
            All
          </Link>
          {validCategories.map((cat) => (
            <Link
              key={cat.id}
              href={buildHref(1, cat.id)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold font-rubik uppercase tracking-wide transition-colors cursor-pointer ${
                categoryId === cat.id
                  ? "bg-kicks-black text-white"
                  : "bg-white text-kicks-black hover:bg-kicks-black hover:text-white"
              }`}
            >
              {cat.name}
            </Link>
          ))}
        </div>

        {/* Products Grid */}
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

        {/* Pagination */}
        {(hasPrev || hasNext) && (
          <div className="flex items-center justify-center gap-3 mt-12">
            {hasPrev ? (
              <Link
                href={buildHref(currentPage - 1, categoryId)}
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
                    href={buildHref(p, categoryId)}
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
                href={buildHref(currentPage + 1, categoryId)}
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
