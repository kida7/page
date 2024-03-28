/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "/github-page",
    output: "export",  // <=== enables static exports
    reactStrictMode: true,
  };
  
  module.exports = nextConfig;