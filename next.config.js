/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['glascostainlesssteel.netlify.app'],
  },
  // Add basePath if your site is not at the root
  // basePath: '/your-base-path',
}

module.exports = nextConfig