import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  // eslint: {
  //   ignoreDuringBuilds: true,
  // },
  images: {
    domains: ['127.0.0.1'], 
  },
};

export default nextConfig;
  