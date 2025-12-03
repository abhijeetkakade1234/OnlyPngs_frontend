/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enable static export for Firebase Hosting
  images: {
    unoptimized: true, // Required for static export
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  trailingSlash: true, // Helps with Firebase routing
};

module.exports = nextConfig;

