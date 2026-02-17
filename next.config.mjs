/** @type {import('next').NextConfig} */
const repo = "v0-luxury-time-travel-landing-page";

const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,
};

export default nextConfig;
