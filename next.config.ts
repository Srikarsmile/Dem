import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 90],
  },
  allowedDevOrigins: [
    "http://192.168.1.4:3000",
    "http://192.168.1.4",
  ],
};

export default nextConfig;
