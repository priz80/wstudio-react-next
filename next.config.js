const nextConfig = {
  output: "export", // Экспортируем как статические файлы
  distDir: "out", // Папка сборки
   trailingSlash: true, // Важно для GitHub Pages
    basePath: "/wstudio-react-next", // ← Имя вашего репозитория только для деплоя
    assetPrefix: "/wstudio-react-next/", // Префикс для статики только для деплоя
};
module.exports = nextConfig;
