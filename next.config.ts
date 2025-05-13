import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  compiler: {
    removeConsole: true,
  },

  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: "api.accredible.com",
      },
      {
        hostname: "images.credly.com",
      },
    ],
  },
};

export default nextConfig;
