/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Disable image optimization during build
    unoptimized: true,
    // Add your domain for production
    domains: ['glascostainlesssteel.netlify.app'],
  },
  // Enable static export
  output: 'export',
  // Add base path if your site is not at the root
  // basePath: '/your-base-path',
}

module.exports = nextConfig