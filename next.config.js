// const nextConfig = {
//   output: "export", // keep if you want static export
//   images: {
//     unoptimized: true, // disables Next.js image optimization API
//   },
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "files.stripe.com",
      },
    ],
  },
};

export default nextConfig;