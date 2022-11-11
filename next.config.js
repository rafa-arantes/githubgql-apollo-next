/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    loader: "custom",
    path: "https://avatars.githubusercontent.com/u",
    domains: ["avatars.githubusercontent.com"],
  },
}

module.exports = nextConfig
