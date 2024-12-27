import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    MAINTAINACE_MODE: process.env.MAINTAINACE_MODE,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
