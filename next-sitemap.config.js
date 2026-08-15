// next-sitemap.config.js
module.exports = {
  siteUrl: 'https://wstudio.tech', // ЗАМЕНИТЕ НА ВАШ ДОМЕН
  generateRobotsTxt: true, // Опционально: создает robots.txt
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
  // Если у вас есть статические страницы, они будут добавлены автоматически
  // Если есть динамические, их нужно добавить вручную (см. ниже)
}