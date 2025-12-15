/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: {
        unoptimized: true,
    },
    transpilePackages: ["@workspace/ui"],
    allowedDevOrigins: ["sso-dev.uln.me"],
};

export default nextConfig;
