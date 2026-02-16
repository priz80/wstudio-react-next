/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Генерация статики

  // Базовый путь — обязательно для GitHub Pages
  basePath: '/wstudio-react-next',

  // Важно: чтобы изображения и другие ассеты тоже использовали basePath
  assetPrefix: '/wstudio-react-next/',

  // Опционально: если используете trailing slash
  trailingSlash: false,
};

module.exports = nextConfig;