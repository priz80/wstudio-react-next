/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/wstudio-react-next',
  trailingSlash: false,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;