export default function ProductCardSkeleton() {
  return (
    <div className="rounded-2xl overflow-hidden bg-white animate-pulse">
      {/* Image area */}
      <div className="relative w-full aspect-square bg-kicks-gray-200 rounded-2xl" />

      {/* Content */}
      <div className="p-3 flex flex-col gap-2 mt-1">
        {/* Badge */}
        <div className="h-5 w-12 bg-kicks-gray-200 rounded-md" />
        {/* Title */}
        <div className="h-4 w-4/5 bg-kicks-gray-200 rounded-md" />
        <div className="h-4 w-3/5 bg-kicks-gray-200 rounded-md" />
        {/* Price row */}
        <div className="flex justify-between items-center mt-2">
          <div className="h-5 w-16 bg-kicks-gray-200 rounded-md" />
          <div className="h-8 w-8 bg-kicks-gray-200 rounded-full" />
        </div>
      </div>
    </div>
  );
}
