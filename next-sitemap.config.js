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

  generateIndexSitemap: false,
  // Include all static routes by default; you can customize as needed
  // exclude: ['/admin/*'],
};

module.exports = config;
