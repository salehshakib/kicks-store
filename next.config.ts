/** @type {import('next').NextConfig} */

import { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // This allows all hostnames
      },
      {
        protocol: "http",
        hostname: "**", // Optional: Also allow non-SSL images
      },
    ],
  },
};

export default nextConfig;
