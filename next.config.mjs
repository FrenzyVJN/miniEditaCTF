/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ['http://10.123.195.183:3000', 'localhost:3000'],
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
