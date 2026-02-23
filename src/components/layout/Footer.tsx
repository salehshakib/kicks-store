import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#E7E7E3] pt-12 md:pt-20 pb-8">
      <div className="max-w-[1320px] mx-auto  relative">
        {/* KicksPlus Newsletter Banner (The Blue Part sitting "on top") */}
        <div className="bg-kicks-blue rounded-[32px] md:rounded-[48px] p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 relative z-20 shadow-2xl overflow-hidden">
          <div className="max-w-xl z-20">
            <h3 className="text-white text-4xl md:text-[64px] font-bold uppercase tracking-tight leading-none mb-6 font-rubik">
              Join our KicksPlus club & get 15% off
            </h3>
            <p className="text-white/80 text-lg md:text-xl font-semibold font-open-sans mb-8">
              Sign up for free! Join the community.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 bg-transparent border border-white/30 text-white placeholder:text-white/50 px-5 py-4 rounded-lg font-medium outline-none focus:ring-2 focus:ring-white/50"
              />
              <button className="bg-kicks-black text-white px-8 py-4 rounded-lg font-bold uppercase hover:bg-white hover:text-kicks-black transition-colors shrink-0 font-rubik">
                Submit
              </button>
            </div>
          </div>

          {/* Newsletter Side Logo Graphic */}
          <div className="relative z-10 shrink-0 hidden lg:block">
            <div className="text-[120px] font-black text-white tracking-tighter leading-none flex items-start select-none font-rubik">
              KICKS
              <span className="bg-kicks-accent text-white size-8 rounded-full flex items-center justify-center text-4xl mt-4">
                +
              </span>
            </div>
          </div>
        </div>

        {/* Main Black Footer Section - sits behind/below with a negative margin to overlap */}
        <div className="bg-kicks-black rounded-[48px] overflow-hidden relative -mt-24 md:-mt-32 pt-32 md:pt-48 pb-20 md:pb-48 z-10">
          <div className="container mx-auto px-6 md:px-12 relative z-10">
            {/* Footer Links */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 mb-32">
              <div className="col-span-2 md:col-span-1">
                <h3 className="text-kicks-accent font-bold text-xl md:text-2xl mb-6 uppercase tracking-tight font-rubik">
                  About us
                </h3>
                <p className="text-lg leading-relaxed text-white font-semibold font-open-sans">
                  We are the biggest hyperstore in the universe. We got you all
                  cover with our exclusive collections and latest drops.
                </p>
              </div>

              <div>
                <h3 className="text-kicks-accent font-bold text-xl md:text-2xl mb-6 uppercase tracking-tight font-rubik">
                  Categories
                </h3>
                <ul className="flex flex-col gap-4 text-white font-semibold font-open-sans text-lg">
                  {[
                    "Runners",
                    "Sneakers",
                    "Basketball",
                    "Outdoor",
                    "Golf",
                    "Hiking",
                  ].map((cat) => (
                    <li key={cat}>
                      <Link
                        href="/"
                        className="hover:text-kicks-accent transition-colors"
                      >
                        {cat}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-kicks-accent font-bold text-xl md:text-2xl mb-6 uppercase tracking-tight font-rubik">
                  Company
                </h3>
                <ul className="flex flex-col gap-4 text-white font-semibold font-open-sans text-lg">
                  {["About", "Contact", "Blogs"].map((item) => (
                    <li key={item}>
                      <Link
                        href="/"
                        className="hover:text-kicks-accent transition-colors"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-kicks-accent font-bold text-xl md:text-2xl mb-6 uppercase tracking-tight font-rubik">
                  Follow us
                </h3>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="p-1 hover:text-kicks-accent transition-colors text-white"
                  >
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a
                    href="#"
                    className="p-1 hover:text-kicks-accent transition-colors text-white"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a
                    href="#"
                    className="p-1 hover:text-kicks-accent transition-colors text-white"
                  >
                    <Twitter className="w-6 h-6" />
                  </a>
                  <a
                    href="#"
                    className="p-1 hover:text-kicks-accent transition-colors text-white"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 0.61 2.89 2.89 0 0 1 2.31-4.51c.29 0 .56.04.82.11V8.44a7.29 7.29 0 0 0-7.29 7.29A7.29 7.29 0 0 0 10.4 23a7.29 7.29 0 0 0 7.29-7.29V9.11A8.97 8.97 0 0 0 22 13.06v-3.45a7.37 7.37 0 0 1-2.41-2.92Z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Massive Background KICKS Watermark - WHITE and overflow hidden as requested */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200%] overflow-hidden pointer-events-none select-none z-0 translate-y-1/2 mb-12">
            <p className="text-[30vw] font-black tracking-tighter text-white leading-none text-center whitespace-nowrap font-rubik uppercase">
              KICKS
            </p>
          </div>

          {/* Bottom bar Copyright */}
        </div>
        <div className="w-full bg-transparent text-center relative z-10 border-t border-white/10 pt-8 ">
          <p className="text-black text-base font-semibold font-open-sans">
            © All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
