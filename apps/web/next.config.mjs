/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ["@workspace/ui"],
    allowedDevOrigins: ["sso-dev.uln.me"],
};

export default nextConfig;
