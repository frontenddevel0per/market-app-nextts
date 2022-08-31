/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['detkishop.com']
  },
  experimental: {
    images: {
      allowFutureImage: true,
    },
  }
}

module.exports = nextConfig
