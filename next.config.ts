const nextConfig = {
  output: 'export', // Экспортируем как статические файлы
  distDir: 'out',  // Папка сборки — dist вместо .next
  trailingSlash: true, // Важно для GitHub Pages
};
module.exports = nextConfig;