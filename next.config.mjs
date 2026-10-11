/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: "https",
                hostname: "placehold.co",
                // pathname: "/**/*"
            }
        ]
    }
};

export default nextConfig;
