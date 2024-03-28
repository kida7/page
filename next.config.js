/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "/page",
    output: "export",  // <=== enables static exports
    reactStrictMode: true,
  };
  
  module.exports = nextConfig;