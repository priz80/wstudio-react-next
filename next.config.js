/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // важно для статической сборки
  basePath: '/wstudio-react-next',
  assetPrefix: '/wstudio-react-next/styles/',
};

module.exports = nextConfig;

