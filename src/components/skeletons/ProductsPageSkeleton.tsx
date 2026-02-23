import ProductGridSkeleton from "./ProductGridSkeleton";

export default function ProductsPageSkeleton() {
  return (
    <div className="min-h-screen bg-kicks-gray-200">
      <div className="container pt-20 md:pt-40 pb-8 w-89.5 md:w-330 mx-auto animate-pulse">
        {/* Header */}
        <div className="flex flex-row items-center justify-between gap-4 mb-8">
          <div className="h-10 md:h-14 w-56 rounded-xl bg-kicks-gray-300" />
          <div className="h-5 w-14 rounded bg-kicks-gray-300" />
        </div>

        {/* Filter bar */}
        <div className="flex flex-col gap-4 mb-8">
          {/* Category pills */}
          <div className="flex gap-2 flex-wrap">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-9 w-20 rounded-lg bg-kicks-gray-300" />
            ))}
          </div>
          {/* Search + price row */}
          <div className="flex flex-col md:flex-row gap-3">
            <div className="flex-1 h-10 rounded-lg bg-kicks-gray-300" />
            <div className="flex gap-2">
              <div className="h-10 w-24 rounded-lg bg-kicks-gray-300" />
              <div className="h-10 w-4 rounded bg-kicks-gray-300" />
              <div className="h-10 w-24 rounded-lg bg-kicks-gray-300" />
            </div>
            <div className="h-10 w-24 rounded-lg bg-kicks-gray-300" />
          </div>
        </div>

        {/* Grid */}
        <ProductGridSkeleton count={10} />
      </div>
    </div>
  );
}
