import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  // Remove output: 'export' if present
  // This ensures dynamic routes work
};

export default nextConfig;
