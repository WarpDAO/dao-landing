/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: [
      'image.cdn2.seaart.ai',
      'img.freepik.com',
      'images.unsplash.com',
      'theaipedia.io'
    ]
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;