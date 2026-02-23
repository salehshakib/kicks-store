import ProductList from "@/components/home/ProductList";
import CategorySection from "@/components/home/CategorySection";
import ReviewsSection from "@/components/home/ReviewsSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="container mx-auto pt-4 pb-12">
        <h1 className="text-4xl sm:text-5xl md:text-[223.5px] font-bold leading-tight md:leading-[265px] tracking-tight text-center uppercase text-kicks-black mt-16 md:mt-32 mb-4 md:mb-8 relative z-10 font-rubik">
          Do it <span className="text-kicks-blue">Right</span>
        </h1>

        <div className="relative w-[358px] md:w-[1320px] mx-auto h-[400px] sm:h-[500px] md:h-[750px] bg-kicks-black rounded-[24px] md:rounded-[64px] overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=2000&auto=format&fit=crop"
            alt="Hero Shoe"
            fill
            className="object-cover opacity-90 transition-all duration-1000"
            priority
          />

          {/* Top Left Vertical Ribbon - Hidden on Mobile */}
          <div className="hidden md:flex absolute top-[100px] md:top-[400px] left-0 w-[337px] h-[67px] bg-kicks-black text-kicks-gray-200 items-center justify-center z-20 -rotate-90 origin-top-left rounded-b-[16px]">
            <span className="text-base tracking-widest font-semibold uppercase font-rubik">
              Nike product of the year
            </span>
          </div>

          {/* Bottom Left Content (Frame 7) */}
          <div className="absolute bottom-4 sm:bottom-8 md:bottom-[48px] left-4 sm:left-6 md:left-[48px] flex flex-col gap-3 sm:gap-4 md:gap-6 z-20 max-w-[300px] sm:max-w-[400px] md:max-w-[490px]">
            <div className="flex flex-col gap-0">
              <h2 className="text-white text-2xl sm:text-4xl md:text-[74px] font-semibold uppercase leading-tight sm:leading-[48px] md:leading-[88px] font-rubik">
                Nike Air Max
              </h2>
              <p className="text-kicks-gray-200 text-xs sm:text-sm md:text-2xl font-semibold leading-tight sm:leading-[24px] md:leading-[33px] font-open-sans mt-2">
                Nike introducing the new air max for everyone&apos;s comfort
              </p>
            </div>
            <button className="bg-kicks-blue text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 font-medium uppercase rounded-lg hover:bg-white hover:text-kicks-black transition-colors shadow-xl w-fit text-xs sm:text-sm md:text-sm font-rubik tracking-[0.25px]">
              SHOP NOW
            </button>
          </div>

          {/* Bottom Right Thumbnails (Frame 11) - Hidden on Mobile */}
          <div className="hidden lg:flex absolute top-[382px] right-12 flex-col gap-4 z-20">
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

      <ProductList />

      {/* Categories */}
      <CategorySection />

      {/* Reviews */}
      <ReviewsSection />
    </>
  );
}
