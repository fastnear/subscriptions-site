import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config, { isServer }) => {
    // Prevent CSS files from being loaded on the server side
    if (isServer) {
      config.module.rules.push({
        test: /\.css$/,
        use: "null-loader",
      });
    }
    return config;
  },
};

export default nextConfig;
