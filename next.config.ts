import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "pub-f155f595f2134bd79c1604322dd08db6.r2.dev",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
