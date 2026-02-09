/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // важно для статической сборки
  // basePath: '/wstudio-react-next',
  // assetPrefix: '/wstudio-react-next/', // Временно отключён для локальной разработки, можно включить при сборке
};

module.exports = nextConfig;

