import type { NextConfig } from "next";

const isGitHubActions = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isGitHubActions ? "/architecture-checkpoint" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
