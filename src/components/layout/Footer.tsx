import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-kicks-black text-kicks-gray-300 pt-16 pb-0 overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* KicksPlus Newsletter Banner */}
        <div className="bg-kicks-blue rounded-3xl p-8 md:p-12 mb-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-md">
            <h3 className="text-white text-3xl md:text-4xl font-black uppercase tracking-tighter leading-tight mb-2">
              Join our KicksPlus club &amp; get 15% off
            </h3>
            <p className="text-white/80 text-sm">
              Sign up for free! Join the community.
            </p>
            <div className="flex gap-3 mt-4">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 bg-white text-kicks-black placeholder:text-kicks-gray-300 px-4 py-3 rounded-xl font-medium text-sm outline-none focus:ring-2 focus:ring-white/50 max-w-xs"
              />
              <button className="bg-kicks-black text-white px-6 py-3 rounded-xl font-bold uppercase text-sm hover:bg-white hover:text-kicks-black transition-colors shrink-0">
                Submit
              </button>
            </div>
          </div>
          <div className="text-[6rem] md:text-[8rem] font-black text-white/20 tracking-tighter leading-none select-none hidden md:block">
            KICKS
            <span className="text-kicks-accent text-[1.5rem] align-super">
              ®
            </span>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-kicks-accent font-bold text-base mb-4 uppercase tracking-wider">
              About us
            </h3>
            <p className="text-sm leading-relaxed max-w-xs text-kicks-gray-300">
              We are the biggest hyperstore in the universe. We got you all
              cover with our exclusive collections and latest drops.
            </p>
          </div>
          <div>
            <h3 className="text-white font-bold text-base mb-4 uppercase tracking-wider">
              Categories
            </h3>
            <ul className="flex flex-col gap-3 text-sm">
              {[
                "Runners",
                "Sneakers",
                "Basketball",
                "Outdoor",
                "Golf",
                "Hiking",
              ].map((cat) => (
                <li key={cat}>
                  <Link href="/" className="hover:text-white transition-colors">
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold text-base mb-4 uppercase tracking-wider">
              Company
            </h3>
            <ul className="flex flex-col gap-3 text-sm">
              {["About", "Contact", "Blogs"].map((item) => (
                <li key={item}>
                  <Link href="/" className="hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold text-base mb-4 uppercase tracking-wider">
              Follow us
            </h3>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-kicks-blue hover:text-white transition-all"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-pink-500 hover:text-white transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-sky-500 hover:text-white transition-all"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-6 text-center text-xs text-kicks-gray-500">
          © All rights reserved
        </div>
      </div>

      {/* Giant Background KICKS Watermark */}
      <div className="w-full overflow-hidden pointer-events-none select-none">
        <p className="text-[20vw] font-black tracking-tighter text-white/5 leading-none text-center whitespace-nowrap">
          KICKS
        </p>
      </div>
    </footer>
  );
}
