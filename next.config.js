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
        source: '/about/careers',
        destination: '/career',
        permanent: true,
      },
      {
        source: '/about/manufacturing',
        destination: '/manufacturing',
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
      {
        source: '/products',
        destination: '/',
        permanent: true,
      },
      {
        source: '/product',
        destination: '/',
        permanent: true,
      },
      {
        source: '/advabond-cv',
        destination: '/cardiac-surgery/advabond-polyester-cardiovascular-suture',
        permanent: true,
      },
      {
        source: '/assets/frontend/:slug*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/app/webroot/:slug*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/products/advalene',
        destination: '/wound-care/advalene-polypropylene-suture',
        permanent: true,
      },
      {
        source: '/advamesh',
        destination: '/hernia-solutions/advamesh-hernia-mesh',
        permanent: true,
      },
      {
        source: '/advamesh',
        destination: '/hernia-solutions/advamesh-hernia-mesh',
        permanent: true,
      },
      {
        source: '/advacrylplus',
        destination: '/wound-care/coated-advacryl-plus-antibacterial-polyglactin-910-suture',
        permanent: true,
      },
      {
        source: '/ligation-solutions',
        destination: '/ligation-solutions/advaclip-ligation-clips',
        permanent: true,
      },
      {
        source: '/products/adva-wax',
        destination: '/cardiac-surgery/advapacer-316L-stainless-steel-sternotomy-suture',
        permanent: true,
      },
      {
        source: '/files/catalog/:slug*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/plugins',
        destination: '/',
        permanent: true,
      },
      {
        source: '/products/advalon',
        destination: '/wound-care/advalon-polyamide-suture',
        permanent: true,
      },
      {
        source: '/Pro',
        destination: '/interventional-cardiology/adva-pro-coronary-sirolimus-stent',
        permanent: true,
      },
      {
        source: '/products/advasyl',
        destination: '/wound-care/advasyl-silk-suture',
        permanent: true,
      },
      {
        source: '/Hernia',
        destination: '/products/hernia-solutions',
        permanent: true,
      },
      {
        source: '/products/advapd',
        destination: '/wound-care/advapd-polydioxanone-suture',
        permanent: true,
      },
      {
        source: '/products/advabond',
        destination: '/wound-care/advabond-polyester-suture',
        permanent: true,
      },
      {
        source: '/sub-category/advakit',
        destination: '/wound-care/surgical-kits',
        permanent: true,
      },
      {
        source: '/interventional-cardiology',
        destination: '/products/interventional-cardiology',
        permanent: true,
      },
      {
        source: '/content/nc-adva-glide',
        destination: '/interventional-cardiology/adva-glide-nc-ptca-coronary-balloon-non-compliant',
        permanent: true,
      },
      {
        source: '/interventional-cardiology',
        destination: '/products/interventional-cardiology',
        permanent: true,
      },
      {
        source: '/products/advalene-2',
        destination: '/cardiac-surgery/advalene-polypropylene-cardiovascular-suture',
        permanent: true,
      },
      {
        source: '/sub-category/cv-solutions',
        destination: '/products/cardiac-surgery',
        permanent: true,
      },
      {
        source: '/wound-care/advacryl-polyglcatin-910-suture',
        destination: '/wound-care/advacryl-polyglactin-910-suture',
        permanent: true,
      },
      {
        source: '/products/advabond-2',
        destination: '/cardiac-surgery/advabond-polyester-cardiovascular-suture',
        permanent: true,
      },
      {
        source: '/products/advacryl-rapid',
        destination: '/wound-care/advacryl-rapid-polyglactin-910-suture',
        permanent: true,
      },
      {
        source: '/blog',
        destination: '/newsroom',
        permanent: true,
      },
      {
        source: '/product/wound-closure',
        destination: '/products/wound-care',
        permanent: true,
      }
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