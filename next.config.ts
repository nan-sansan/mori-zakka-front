import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "8080", // 如果你有使用不同 port，請對應修改
        pathname: "/images/**",
      },
    ],
  },
};

export default nextConfig;
