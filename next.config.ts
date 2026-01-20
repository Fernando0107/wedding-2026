import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    // Optimize imports for better tree-shaking
    optimizePackageImports: ["framer-motion"],
  },
};

export default nextConfig;

