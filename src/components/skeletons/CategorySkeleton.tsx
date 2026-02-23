export default function CategorySkeleton() {
  return (
    <section className="bg-kicks-black py-24 overflow-hidden">
      <div className="w-89.5 md:w-330 mx-auto">
        {/* Heading */}
        <div className="h-16 md:h-24 w-72 bg-white/10 rounded-xl mb-12 animate-pulse" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {[0, 1].map((i) => (
            <div
              key={i}
              className="h-[450px] md:h-[600px] rounded-[32px] md:rounded-[48px] bg-white/10 animate-pulse"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
