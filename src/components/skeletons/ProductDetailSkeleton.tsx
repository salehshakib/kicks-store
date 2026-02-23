export default function ProductDetailSkeleton() {
  return (
    <div className="min-h-screen bg-kicks-gray-200">
      <div className="container mx-auto px-4 md:px-8 pt-12 pb-6 md:pt-20 md:pb-12 max-w-[1400px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-start animate-pulse">
          {/* Left: image gallery */}
          <div className="flex flex-col gap-4">
            <div className="w-full aspect-square rounded-2xl bg-kicks-gray-300" />
            <div className="flex gap-3">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="w-20 h-20 rounded-xl bg-kicks-gray-300"
                />
              ))}
            </div>
          </div>

          {/* Right: details */}
          <div className="flex flex-col gap-5">
            {/* Badge */}
            <div className="h-7 w-28 rounded-lg bg-kicks-gray-300" />
            {/* Title */}
            <div className="h-9 w-3/4 rounded-lg bg-kicks-gray-300" />
            {/* Price */}
            <div className="h-8 w-24 rounded-lg bg-kicks-gray-300" />

            {/* Color label + swatches */}
            <div className="flex flex-col gap-2">
              <div className="h-4 w-12 rounded bg-kicks-gray-300" />
              <div className="flex gap-2">
                {[0, 1].map((i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full bg-kicks-gray-300"
                  />
                ))}
              </div>
            </div>

            {/* Size grid */}
            <div className="flex flex-col gap-2">
              <div className="h-4 w-10 rounded bg-kicks-gray-300" />
              <div className="flex gap-2 flex-wrap">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div
                    key={i}
                    className="w-12 h-10 rounded-lg bg-kicks-gray-300"
                  />
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-3">
              <div className="flex-1 h-12 rounded-xl bg-kicks-gray-300" />
              <div className="w-12 h-12 rounded-xl bg-kicks-gray-300" />
            </div>
            <div className="h-12 rounded-xl bg-kicks-gray-300" />

            {/* About */}
            <div className="flex flex-col gap-2 mt-2">
              <div className="h-4 w-36 rounded bg-kicks-gray-300" />
              <div className="h-3 w-full rounded bg-kicks-gray-300" />
              <div className="h-3 w-5/6 rounded bg-kicks-gray-300" />
              <div className="h-3 w-4/6 rounded bg-kicks-gray-300" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
