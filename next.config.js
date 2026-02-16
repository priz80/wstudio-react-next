// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Экспорт в статический сайт (генерирует папку out)
  output: 'export',

  // Базовый путь — важно для GitHub Pages
  basePath: '/wstudio-react-next',

  // Отключаем строгий режим React (опционально, но безопаснее при миграции)
  reactStrictMode: false,

  // Убираем ВСЕ устаревшие experimental флаги
  // serverActions, serverComponents, appDir — больше не настраиваются здесь
};

module.exports = nextConfig;