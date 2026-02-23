/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // This allows all hostnames
      },
      {
        protocol: "http",
        hostname: "**", // Optional: Also allow non-SSL images
      },
      { protocol: "https", hostname: "placehold.co" },
      { protocol: "https", hostname: "i.imgur.com" },
      { protocol: "https", hostname: "api.escuelajs.co" },
      { protocol: "https", hostname: "placeimg.com" },
      { protocol: "https", hostname: "cloudflare-ipfs.com" },
      { protocol: "https", hostname: "avatars.githubusercontent.com" },
      { protocol: "https", hostname: "encrypted-tbn0.gstatic.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "i.pravatar.cc" },
    ],
  },
};

export default nextConfig;
