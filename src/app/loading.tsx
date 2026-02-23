import ProductGridSkeleton from "@/components/skeletons/ProductGridSkeleton";
import CategorySkeleton from "@/components/skeletons/CategorySkeleton";

export default function HomeLoading() {
  return (
    <>
      {/* Hero skeleton */}
      <div className="container mx-auto pt-4 pb-12 animate-pulse">
        <div className="h-16 sm:h-24 md:h-64 w-3/4 mx-auto rounded-2xl bg-kicks-gray-300 mb-8" />
        <div className="relative w-89.5 md:w-330 mx-auto h-[400px] sm:h-[500px] md:h-[750px] bg-kicks-gray-300 rounded-[24px] md:rounded-[64px]" />
      </div>

      {/* Product list skeleton */}
      <section className="py-20 pt-4 md:py-37.5 md:pt-12.5">
        <div className="w-89.5 md:w-330 mx-auto animate-pulse">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-12">
            <div className="h-10 md:h-20 w-64 rounded-xl bg-kicks-gray-300" />
            <div className="h-12 w-44 rounded-lg bg-kicks-gray-300" />
          </div>
          <ProductGridSkeleton count={4} columns="grid-cols-2 lg:grid-cols-4" />
        </div>
      </section>

      {/* Category skeleton */}
      <CategorySkeleton />
    </>
  );
}
