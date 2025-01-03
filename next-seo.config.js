// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: 'Advanced Medtech Solutions',
    description: "Transforming global healthcare with advanced, affordable medical solutions. Explore our innovative product range.",
    additionalMetaTags: [
        {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1.0, maximum-scale=5.0',
        },
    ],
    additionalLinkTags: [
        {
          rel: 'icon',
          type: "image/x-icon",
          href: '/favicon.ico',
        },
        {
          rel: 'preload',
          href: '/assets/fonts/aeonik/Aeonik-Light.woff2',
          as: 'font',
          type: 'font/woff2',
          crossOrigin: 'anonymous'
        },
        {
          rel: 'preload',
          href: '/assets/fonts/sofia-pro/Sofia-Pro-Light.woff2',
          as: 'font',
          type: 'font/woff2',
          crossOrigin: 'anonymous'
        },
        {
          rel: 'alternate',
          type: 'application/rss+xml',
          title: 'AMS Digital Feed',
          href: 'https://www.amsltd.com/feed.xml'
        },
      ],
    openGraph: {
        type: 'website',
        locale: 'en_US',
        images: [
            {
                url: 'https://www.amsltd.com/assets/seo/homepage.png',
                width: 1909,
                height: 949,
                alt: "AMS Og Image",
                type: "image/png",
            },
        ],
        siteName: 'AMS Ltd.',
    },
    twitter: {
        site: 'AMS Ltd.',
        cardType: 'summary_large_image',
    },
};