import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
  // Transpile Sanity Studio dependencies
  transpilePackages: ['sanity', '@sanity/ui', '@sanity/vision'],
};

export default nextConfig;
