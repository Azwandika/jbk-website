/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // local images in /public are allowed by default
    formats: ['image/avif', 'image/webp']
  }
}

export default nextConfig
