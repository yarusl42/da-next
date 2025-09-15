/**
 * Environment configuration for the multilingual website
 * This file provides default values for environment variables
 * and can be used as a reference for setting up production environments
 */

const isProd = process.env.NODE_ENV === 'production';
module.exports = {
  // Base domain for production (without protocol)
  BASE_DOMAIN: process.env.BASE_DOMAIN || 'futuretechschool.org',
  
  // Use HTTPS in production
  USE_HTTPS: isProd,
  
  // Site URL with protocol
  get SITE_URL() {
    const protocol = !this.USE_HTTPS ? 'http://' : 'https://';
    return process.env.SITE_URL || `${protocol}${this.BASE_DOMAIN}`;
  },
  
  // Domain URLs for each locale
  get DOMAIN_URLS() {
    const protocol = !this.USE_HTTPS ? 'http://' : 'https://';
    return {
      // Default locale (ru) uses the root domain
      ru: process.env.RU_DOMAIN || `${protocol}${this.BASE_DOMAIN}`,
      // Other locales use subdomains
      ukr: process.env.UKR_DOMAIN || `${protocol}ukr.${this.BASE_DOMAIN}`,
      en: process.env.EN_DOMAIN || `${protocol}en.${this.BASE_DOMAIN}`,
    };
  }
};
