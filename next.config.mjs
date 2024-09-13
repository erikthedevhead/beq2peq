/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/beq2peq", // Replace with your actual GitHub repository name
  images: {
    unoptimized: true, // Disable image optimization for static export
  },
};

export default nextConfig;
