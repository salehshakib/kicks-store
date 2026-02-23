import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Sarah M.",
    role: "Verified Buyer",
    avatar: "https://i.pravatar.cc/150?u=sarah",
    rating: 5,
    title: "Good Quality",
    text: "I highly recommend shopping from kicks. The quality is top notch and the delivery was fast!",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "James K.",
    role: "Verified Buyer",
    avatar: "https://i.pravatar.cc/150?u=james",
    rating: 5,
    title: "Amazing Comfort",
    text: "These are the most comfortable shoes I've ever owned. Perfect for daily wear.",
    image:
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Lena T.",
    role: "Verified Buyer",
    avatar: "https://i.pravatar.cc/150?u=lena",
    rating: 5,
    title: "Stylish & Durable",
    text: "Looks even better in person. I've been wearing them for a month and they still look new.",
    image:
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=600&auto=format&fit=crop",
  },
];

export default function ReviewsSection() {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-5xl md:text-7xl font-black text-kicks-black uppercase tracking-tighter leading-none">
            Reviews
          </h2>
          <Link
            href="/reviews"
            className="bg-kicks-blue text-white font-bold uppercase tracking-wide px-8 py-4 rounded-xl hover:bg-blue-700 transition-colors shadow-lg hidden md:block"
          >
            See All
          </Link>
        </div>

        {/* Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-[32px] p-6 shadow-xl shadow-black/5 flex flex-col h-full border border-gray-100"
            >
              {/* Header: User Info */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex gap-4">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-kicks-accent">
                    <Image
                      src={review.avatar}
                      alt={review.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-kicks-black text-lg">
                      {review.name}
                    </h4>
                    <p className="text-kicks-gray-500 text-xs uppercase tracking-widest">
                      {review.role}
                    </p>
                    <div className="flex gap-0.5 mt-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-kicks-accent text-kicks-accent"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 mb-8">
                <h5 className="font-black text-kicks-black uppercase text-xl mb-3">
                  {review.title}
                </h5>
                <p className="text-kicks-gray-500 text-base leading-relaxed line-clamp-4">
                  &quot;{review.text}&quot;
                </p>
              </div>

              {/* Lifestyle Image inside card */}
              <div className="relative aspect-square md:aspect-video w-full rounded-[24px] overflow-hidden bg-kicks-gray-100">
                <Image
                  src={review.image}
                  alt="Product review"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
