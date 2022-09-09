/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['placeimg.com']
  },
  experimental: {
    images: {
      allowFutureImage: true,
    },
  }
}

module.exports = nextConfig
