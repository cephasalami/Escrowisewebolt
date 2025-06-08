/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.builder.io', 'images.unsplash.com'],
  },
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
  },
  // Enable SWC minification for faster builds
  swcMinify: true,
  // Optimize fonts
  optimizeFonts: true,
  // Improve page loading performance
  reactStrictMode: true,
  // Compress images
  compress: true,
}

export default nextConfig

