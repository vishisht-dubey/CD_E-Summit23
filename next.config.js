/** @type {import('next').NextConfig} */
const nextConfig = {
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
// module.exports = {
//   images: {
//     domains: ['flowbite.s3.amazonaws.com'],
//   },
// }

module.exports = nextConfig;
