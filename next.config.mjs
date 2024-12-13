/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "l6afiyvvfi08b0ky.public.blob.vercel-storage.com",
      },
    ],
  },
};

export default nextConfig;
