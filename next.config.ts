import type { NextConfig } from "next";
// ai says we don't need to but didn't see .env.local getting picked up
import 'dotenv/config'


const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: ["fastnear.com", "*.fastnear.com", "*.near.page", "fastfs.io", "*.fastfs.io"],
    },
    optimizeServerReact: true,
    clientRouterFilter: true,
    clientRouterFilterRedirects: true,
    preloadEntriesOnStart: true,
    clientSegmentCache: true,
    imgOptConcurrency: 10,
    parallelServerCompiles: true,
    cssChunking: "strict",
    webpackMemoryOptimizations: true,
  },
  env: {
    PORT: process.env.PORT,
  },
  devIndicators: false,
};

export default nextConfig;
