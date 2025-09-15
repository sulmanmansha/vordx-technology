import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  skipTrailingSlashRedirect: true,

  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
