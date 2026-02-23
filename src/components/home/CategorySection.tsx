import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function CategorySection() {
  return (
    <section className="bg-kicks-black py-24 text-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-[32px] md:text-[74px] font-bold text-white uppercase mb-12 tracking-tight leading-[1.1] md:leading-[95%] font-rubik">
          Categories
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {/* Card 1: Lifestyle */}
          <Link
            href="/categories/lifestyle"
            className="group relative h-[450px] md:h-[600px] rounded-[32px] md:rounded-[48px] overflow-hidden bg-kicks-gray-100"
          >
            <Image
              src="https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=2000&auto=format&fit=crop"
              alt="Lifestyle Shoes"
              fill
              className="object-cover mix-blend-multiply opacity-90 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-x-6 bottom-6 md:inset-x-10 md:bottom-10 z-20 flex justify-between items-end">
              <h3 className="text-3xl md:text-4xl font-black uppercase text-kicks-black leading-tight tracking-tight font-rubik">
                Lifestyle
                <br />
                Shoes
              </h3>
              <div className="w-10 h-10 md:w-12 md:h-12 bg-kicks-black rounded-lg flex items-center justify-center text-white group-hover:bg-kicks-blue transition-colors">
                <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6" />
              </div>
            </div>
          </Link>

          {/* Card 2: Basketball */}
          <Link
            href="/categories/basketball"
            className="group relative h-[450px] md:h-[600px] rounded-[32px] md:rounded-[48px] overflow-hidden bg-[#ECEEF0]"
          >
            <Image
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2000&auto=format&fit=crop"
              alt="Basketball Shoes"
              fill
              className="object-cover mix-blend-multiply opacity-90 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-x-6 bottom-6 md:inset-x-10 md:bottom-10 z-20 flex justify-between items-end">
              <h3 className="text-3xl md:text-4xl font-black uppercase text-kicks-black leading-tight tracking-tight font-rubik">
                Basketball
                <br />
                Shoes
              </h3>
              <div className="w-10 h-10 md:w-12 md:h-12 bg-kicks-black rounded-lg flex items-center justify-center text-white group-hover:bg-kicks-blue transition-colors">
                <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
