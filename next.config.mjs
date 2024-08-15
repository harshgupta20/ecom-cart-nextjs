/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['cdn.dummyjson.com'],
        minimumCacheTTL: 1500000,
      },
};

export default nextConfig;
