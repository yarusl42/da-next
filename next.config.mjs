/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
    reactRemoveProperties: { properties: ['^data-new-gr-c-s-check-loaded$', '^data-gr-ext-installed$'] }
  },
  webpack: (config) => {
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