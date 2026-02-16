/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/wstudio-react-next',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;