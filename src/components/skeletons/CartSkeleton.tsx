export default function CartSkeleton() {
  return (
    <div className="min-h-screen bg-kicks-gray-200">
      <div className="container mx-auto px-4 md:px-8 pt-12 pb-8 md:pt-20 md:pb-16 max-w-[1400px] animate-pulse">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-2">
          <div className="h-8 w-56 rounded-lg bg-kicks-gray-300" />
          <div className="h-4 w-96 rounded bg-kicks-gray-300" />
          <div className="h-4 w-32 rounded bg-kicks-gray-300" />
        </div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
          {/* Bag card */}
          <div className="flex-1 w-full bg-white rounded-2xl p-4 md:p-6 flex flex-col gap-6">
            <div className="h-6 w-24 rounded bg-kicks-gray-200" />
            <div className="h-4 w-72 rounded bg-kicks-gray-200" />
            {[0, 1].map((i) => (
              <div
                key={i}
                className="flex gap-4 py-4 border-t border-kicks-gray-200"
              >
                <div className="w-24 h-24 rounded-xl bg-kicks-gray-200 shrink-0" />
                <div className="flex flex-col gap-2 flex-1">
                  <div className="h-5 w-48 rounded bg-kicks-gray-200" />
                  <div className="h-4 w-24 rounded bg-kicks-gray-200" />
                  <div className="h-4 w-32 rounded bg-kicks-gray-200" />
                  <div className="flex gap-2 mt-1">
                    <div className="h-8 w-24 rounded-lg bg-kicks-gray-200" />
                    <div className="h-8 w-28 rounded-lg bg-kicks-gray-200" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order summary */}
          <div className="w-full lg:w-80 bg-white rounded-2xl p-4 md:p-6 flex flex-col gap-4 shrink-0">
            <div className="h-6 w-36 rounded bg-kicks-gray-200" />
            {[0, 1, 2].map((i) => (
              <div key={i} className="flex justify-between">
                <div className="h-4 w-24 rounded bg-kicks-gray-200" />
                <div className="h-4 w-16 rounded bg-kicks-gray-200" />
              </div>
            ))}
            <div className="h-px bg-kicks-gray-200" />
            <div className="flex justify-between">
              <div className="h-5 w-12 rounded bg-kicks-gray-200" />
              <div className="h-5 w-20 rounded bg-kicks-gray-200" />
            </div>
            <div className="h-12 rounded-xl bg-kicks-gray-300 mt-2" />
          </div>
        </div>
      </div>
    </div>
  );
}
