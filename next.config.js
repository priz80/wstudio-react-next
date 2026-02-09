/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // важно для статической сборки
  basePath: '/wstudio-react-next',
  // assetPrefix: '/wstudio-react-next/', // Закомментировано, так как может мешать загрузке статики
};

module.exports = nextConfig;

