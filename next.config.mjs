/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  compiler: {
    styledComponents: true,
    reactRemoveProperties: { properties: ['^data-new-gr-c-s-check-loaded$', '^data-gr-ext-installed$'] }
  },
  webpack: (config) => {
    // Treat any import with `?url` suffix as a raw asset URL and skip Next image loaders
    const urlRule = {
      resourceQuery: /url/,
      type: 'asset/resource',
      generator: { filename: 'static/media/[name].[hash][ext]' }
    };
    // Prepend at top-level
    config.module.rules.unshift(urlRule);
    // Also inject into Next's `oneOf` rules so it matches before next-image-loader
    for (const rule of config.module.rules) {
      if (rule && Array.isArray(rule.oneOf)) {
        rule.oneOf.unshift(urlRule);
      }
    }
    // Support importing audio assets (e.g., mp3) from src/
    config.module.rules.push({
      test: /\.(mp3|wav|ogg|svg)$/i,
      type: 'asset/resource',
      generator: {
        filename: 'static/media/[name].[hash][ext]'
      }
    });
    return config;
  }
};

export default nextConfig;