/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Можно добавить basePath, если репозиторий не корневой
  // basePath: '/your-repo-name',
  // trailingSlash: true, // опционально — чтобы пути были с / в конце
};

module.exports = nextConfig;