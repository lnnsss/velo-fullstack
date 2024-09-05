/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "t2.genius.com",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "images.genius.com",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "i.pinimg.com",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "www.thissongslaps.com",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "mywebicons.ru",
                port: "",
                pathname: "/**",
            },
        ],
    },
};

export default nextConfig;