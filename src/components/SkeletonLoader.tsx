export default function SkeletonLoader() {
  return (
    <div className="group border border-gray-100 rounded-2xl p-4 flex flex-col gap-4 shadow-sm bg-white h-full animate-pulse transition-all">
      <div className="bg-gray-200 rounded-xl w-full aspect-square object-cover"></div>
      <div className="flex flex-col gap-3 mt-2">
        <div className="h-5 bg-gray-200 rounded-md w-3/4"></div>
        <div className="h-4 bg-gray-100 rounded-md w-full"></div>
        <div className="h-4 bg-gray-100 rounded-md w-5/6"></div>
      </div>
      <div className="mt-auto pt-4 flex justify-between items-center bg-white">
        <div className="h-7 bg-gray-200 rounded-md w-1/4"></div>
        <div className="h-10 bg-gray-200 rounded-lg w-1/3"></div>
      </div>
    </div>
  );
}
