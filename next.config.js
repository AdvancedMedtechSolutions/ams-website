const feed = require('./plugins/feed');
const sitemap = require('./plugins/sitemap');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [{ loader: "@svgr/webpack", options: { icon: true } }],
    });
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'wordpress.amsltd.com',
      }
    ],
  },
  async redirects() {
    return [
      {
        source: '/about',
        destination: '/about-us',
        permanent: true,
      },
      {
        source: '/about/leadership',
        destination: '/about-us',
        permanent: true,
      },
      {
        source: '/about/our-promise',
        destination: '/about-us',
        permanent: true,
      },
      {
        source: '/ama',
        destination: '/advanced-medtech-academy-ama',
        permanent: true,
      },
      {
        source: '/oem',
        destination: '/products/oem',
        permanent: true,
      },
      {
        source: '/news',
        destination: '/newsroom',
        permanent: true,
      },
      {
        source: '/specialties',
        destination: '/',
        permanent: true,
      },
      {
        source: '/arab-health',
        destination: '/ams-at-arab-health-2025',
        permanent: true,
      },
      {
        source: '/news/2023/arab-health',
        destination: '/ams-at-arab-health-2025',
        permanent: true,
      },
      {
        source: '/knotless-tissue-control-device',
        destination: '/wound-care/advagrip-knotless-barbed-suture',
        permanent: true,
      },
      {
        source: '/r&d/suture-needle-technology',
        destination: '/r-and-d/suture-needle-technology',
        permanent: true,
      },
      {
        source: '/news-detail/:slug',
        destination: '/newsroom',
        permanent: true,
      },
      {
        source: '/news-detail/:slug',
        destination: '/newsroom',
        permanent: true,
      },
    ]
  },
  env: {
    POSTS_PRERENDER_COUNT: "10",
    WORDPRESS_GRAPHQL_ENDPOINT: process.env.WORDPRESS_GRAPHQL_ENDPOINT,
    WORDPRESS_PLUGIN_SEO: process.env.WORDPRESS_PLUGIN_SEO,
  },
};

module.exports = () => {
  const plugins = [feed, sitemap, withBundleAnalyzer];
  return plugins.reduce((acc, plugin) => plugin(acc), nextConfig);
};

/**
 * parseEnv
 * @description Helper function to check if a variable is defined and parse booelans
 */

function parseEnvValue(value, defaultValue) {
  if (typeof value === 'undefined') return defaultValue;
  if (value === true || value === 'true') return true;
  if (value === false || value === 'false') return false;
  return value;
}