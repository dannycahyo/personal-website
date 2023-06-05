/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Example => https://unsplash.com/photos/cw-cj_nFa14
    // https://images.unsplash.com/photo-1515187029135-18ee286d815b
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

module.exports = nextConfig;
