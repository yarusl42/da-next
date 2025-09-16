/****
 * next-sitemap configuration
 * Docs: https://github.com/iamvishnusankar/next-sitemap
 */

/** @type {import('next-sitemap').IConfig} */
const config = {
  // Set your production URL here or provide via env var SITE_URL
  siteUrl: process.env.SITE_URL || 'https://skynex.digital',

  // Generate robots.txt alongside sitemaps
  generateRobotsTxt: true,

  // Where to output the files (default: public)
  outDir: 'public',

  // Keep an index sitemap, but force a single-part by setting a high chunk size
  generateIndexSitemap: true,
  sitemapSize: 50000,

  // Ensure URLs are included even if pages are dynamic (force-dynamic) and not in the prerender manifest
  additionalPaths: async (config) => {
    const base = (process.env.SITE_URL || 'https://skynex.digital').replace(/\/$/, '');
    const routes = [
      '/',
      '/about',
      '/contact',
      '/projects',
      '/projects/example-project',
      '/services',
      '/services/web-design',
      '/services/seo',
      '/services/lead-generation',
      '/services/website-care',
    ];
    return routes.map((loc) => ({ loc }));
  },

  // Include all static routes by default; you can customize as needed
  // exclude: ['/admin/*'],
};

module.exports = config;
