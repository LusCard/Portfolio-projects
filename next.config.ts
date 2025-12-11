import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/Portfolio-projects",
};

export default nextConfig;
