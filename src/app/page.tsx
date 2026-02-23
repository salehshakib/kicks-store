import ProductList from "@/components/home/ProductList";
import CategorySection from "@/components/home/CategorySection";
import ReviewsSection from "@/components/home/ReviewsSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="container mx-auto px-4 md:px-8 pt-4 pb-12">
        <h1 className="text-[18vw] md:text-[12vw] font-black leading-[0.85] tracking-tighter text-center uppercase text-kicks-black mb-4 md:mb-8 relative z-10">
          Do it <br className="md:hidden" />{" "}
          <span className="text-kicks-blue">Right</span>
        </h1>

        <div className="relative w-full h-[70vh] md:h-[80vh] bg-kicks-black rounded-[32px] md:rounded-[48px] overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=2000&auto=format&fit=crop"
            alt="Hero Shoe"
            fill
            className="object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-1000"
            priority
          />

          {/* Top Left Vertical Ribbon */}
          <div className="absolute top-0 left-4 md:left-12 bg-kicks-black text-white px-2 py-6 rounded-b-xl flex items-center justify-center z-20">
            <span className="[writing-mode:vertical-rl] rotate-180 text-xs md:text-sm tracking-widest font-semibold uppercase">
              Nike product of the year
            </span>
          </div>

          {/* Bottom Left Content */}
          <div className="absolute bottom-6 left-6 md:bottom-12 md:left-12 flex flex-col gap-2 z-20 max-w-[80%] md:max-w-md">
            <h2 className="text-white text-4xl md:text-6xl font-black uppercase tracking-tight">
              Nike Air Max
            </h2>
            <p className="text-white/90 text-sm md:text-base font-medium leading-relaxed mb-2">
              Nike introducing the new air max for everyone&apos;s comfort
            </p>
            <button className="bg-kicks-blue text-white px-6 py-3 md:px-8 md:py-4 font-bold uppercase rounded-xl hover:bg-white hover:text-kicks-black transition-colors shadow-xl w-fit">
              Shop Now
            </button>
          </div>

          {/* Bottom Right Thumbnails */}
          <div className="absolute bottom-6 right-6 md:bottom-12 md:right-12 flex flex-col gap-3 md:gap-4 z-20">
            <div className="relative w-16 h-16 md:w-24 md:h-24 rounded-xl md:rounded-2xl border-2 border-white overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=400&auto=format&fit=crop"
                alt="Thumbnail 1"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-16 h-16 md:w-24 md:h-24 rounded-xl md:rounded-2xl border-2 border-white overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1605348532760-6753d2c43329?q=80&w=400&auto=format&fit=crop"
                alt="Thumbnail 2"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

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
