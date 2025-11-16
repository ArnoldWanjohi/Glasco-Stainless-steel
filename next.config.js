/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Add basePath if your site is hosted in a subdirectory
  // basePath: '/your-repo-name',
}

module.exports = nextConfig