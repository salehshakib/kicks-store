import ProductList from "@/components/home/ProductList";
import CategorySection from "@/components/home/CategorySection";
import ReviewsSection from "@/components/home/ReviewsSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="container mx-auto px-4 md:px-8 pt-4 pb-12">
        <h1 className="text-[60px] md:text-[223.5px] font-bold leading-[71px] md:leading-[265px] tracking-tight text-center uppercase text-kicks-black mt-20 md:mt-32 mb-4 md:mb-8 relative z-10 font-rubik">
          Do it <span className="text-kicks-blue">Right</span>
        </h1>

        <div className="relative w-full h-[750px] md:h-[750px] bg-kicks-black rounded-[24px] md:rounded-[64px] overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=2000&auto=format&fit=crop"
            alt="Hero Shoe"
            fill
            className="object-cover opacity-90 transition-all duration-1000"
            priority
          />

          {/* Top Left Vertical Ribbon */}
          <div className="absolute top-[80px] -left-[85px] w-[237px] h-[67px] bg-kicks-black text-kicks-gray-200 py-6 rounded-b-2xl flex items-center justify-center z-20 -rotate-90">
            <span className="text-xs md:text-base tracking-widest font-semibold uppercase font-rubik">
              Nike product of the year
            </span>
          </div>

          {/* Bottom Left Content (Frame 7) */}
          <div className="absolute bottom-[48px] left-[48px] flex flex-col gap-6 z-20 max-w-[490px]">
            <div className="flex flex-col gap-0">
              <h2 className="text-white text-[74px] font-semibold uppercase leading-[88px] font-rubik">
                Nike Air Max
              </h2>
              <p className="text-kicks-gray-200 text-2xl font-semibold leading-[33px] font-open-sans mt-2">
                Nike introducing the new air max for everyone&apos;s comfort
              </p>
            </div>
            <button className="bg-kicks-blue text-white px-8 py-4 font-medium uppercase rounded-lg hover:bg-white hover:text-kicks-black transition-colors shadow-xl w-fit text-sm font-rubik tracking-[0.25px]">
              SHOP NOW
            </button>
          </div>

          {/* Bottom Right Thumbnails (Frame 11) */}
          <div className="absolute top-[382px] left-[1128px] flex flex-col gap-4 z-20">
            <div className="relative w-[160px] h-[160px] rounded-[32px] border-[3px] border-kicks-gray-200 overflow-hidden shadow-lg bg-kicks-gray-200">
              <Image
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=400&auto=format&fit=crop"
                alt="Thumbnail 1"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-[160px] h-[160px] rounded-[32px] border-[3px] border-kicks-gray-200 overflow-hidden shadow-lg bg-kicks-gray-200">
              <Image
                src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=400&auto=format&fit=crop"
                alt="Thumbnail 2"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Spacing adjustments between sections */}
      <div className="mt-[150px]">
        <ProductList />
      </div>

      {/* New Drops */}
      {/* Note: Suspense could wrap this if we wanted immediate page load + skeleton, but for now we block render until products fetched */}
      <ProductList />

      {/* Categories */}
      <CategorySection />

      {/* Reviews */}
      <ReviewsSection />
    </>
  );
}
