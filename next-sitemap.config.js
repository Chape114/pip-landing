/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.pipstudio.com.ar', // ← sin “/” al final
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: 'weekly',
  priority: 0.7,
  transform: async (_, url) => {
    return {
      loc: url,
      lastmod: new Date().toISOString(),
      priority: url === 'https://www.pipstudio.com.ar/' ? 1.0 : 0.7,
      changefreq: 'weekly',
    }
  },
}
