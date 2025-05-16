/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/zylo-global',
  assetPrefix: '/zylo-global',
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig

