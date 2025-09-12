/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  // output: "export",
  images: {
    unoptimized: true,
  },
  distDir: "out",
  skipTrailingSlashRedirect: true,
};

export default nextConfig;