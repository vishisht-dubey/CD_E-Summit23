/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  output: "standalone",
  reactStrictMode: true,
  images: {
    domains: ["flowbite.s3.amazonaws.com", "lh3.googleusercontent.com"],
    remotePatterns: [
      {
        hostname: "navbharattimes.indiatimes.com",
      },
    ],
  },
};

module.exports = nextConfig;
