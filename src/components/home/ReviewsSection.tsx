import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Sarah M.",
    avatar: "https://i.pravatar.cc/150?img=1",
    rating: 5,
    text: "I highly recommend shopping from kicks",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "James K.",
    avatar: "https://i.pravatar.cc/150?img=3",
    rating: 5,
    text: "I highly recommend shopping from kicks",
    image:
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Lena T.",
    avatar: "https://i.pravatar.cc/150?img=5",
    rating: 5,
    text: "I highly recommend shopping from kicks",
    image:
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=600&auto=format&fit=crop",
  },
];

export default function ReviewsSection() {
  return (
    <section className="bg-kicks-gray-100 py-20">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-5xl md:text-7xl font-black text-kicks-black uppercase tracking-tighter leading-none">
            Reviews
          </h2>
          <Link
            href="/"
            className="bg-kicks-blue text-white font-bold uppercase tracking-wide px-8 py-4 rounded-xl hover:bg-blue-700 transition-colors shadow-lg hidden md:block"
          >
            See All
          </Link>
        </div>

        {/* Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white rounded-3xl p-6 shadow-sm">
              {/* Top: name + avatar + stars */}
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="font-bold text-kicks-black uppercase tracking-wide text-sm">
                    Good Quality
                  </p>
                  <p className="text-kicks-gray-500 text-xs mt-0.5">
                    {review.text}
                  </p>
                  <div className="flex gap-0.5 mt-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-kicks-accent text-kicks-accent"
                      />
                    ))}
                    <span className="text-xs text-kicks-gray-500 ml-1 self-center">
                      {review.rating}.0
                    </span>
                  </div>
                </div>
                <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={review.avatar}
                    alt={review.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Review Images Grid */}
        <div className="grid grid-cols-3 gap-4 md:gap-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="relative aspect-4/3 rounded-2xl md:rounded-3xl overflow-hidden"
            >
              <Image
                src={review.image}
                alt={`Review image ${review.id}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
