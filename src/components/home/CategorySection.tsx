import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { fetchCategories } from "@/services/api";

export default async function CategorySection() {
  const allCategories = await fetchCategories();
  console.log("Categories:", allCategories);

  // Filter to only categories with valid image URLs, show 2
  const categories = allCategories
    .filter((c) => c.image?.startsWith("http") && c.image.includes("."))
    .slice(0, 2);

  if (categories.length === 0) return null;

  return (
    <section className="bg-kicks-black py-24 text-white overflow-hidden">
      <div className="w-[358px] md:w-[1320px] mx-auto">
        <h2 className="text-[32px] md:text-[74px] font-bold text-white uppercase mb-12 tracking-tight leading-[1.1] md:leading-[95%] font-rubik">
          Categories
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/categories/${category.slug ?? category.id}`}
              className="group relative h-[450px] md:h-[600px] rounded-[32px] md:rounded-[48px] overflow-hidden bg-kicks-gray-100"
            >
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover mix-blend-multiply opacity-90 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-x-6 bottom-6 md:inset-x-10 md:bottom-10 z-20 flex justify-between items-end">
                <h3 className="text-3xl md:text-4xl font-black uppercase text-kicks-black leading-tight tracking-tight font-rubik">
                  {category.name}
                </h3>
                <div className="w-10 h-10 md:w-12 md:h-12 bg-kicks-black rounded-lg flex items-center justify-center text-white group-hover:bg-kicks-blue transition-colors shrink-0">
                  <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
