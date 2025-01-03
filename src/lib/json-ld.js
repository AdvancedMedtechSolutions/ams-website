
import { Helmet } from 'react-helmet';
import config from '../../package.json';
import { postPathBySlug } from './posts';

export function ArticleJsonLd({ post = {} }) {
  const { homepage = ''} = config;
  const { metaTitle, slug, date, modified, metaImage, metaDescription } = post;
  const path = postPathBySlug(slug);
  const datePublished = !!date && new Date(date);
  const dateModified = !!modified && new Date(modified);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${homepage}${path}`,
    },
    headline: metaTitle,
    image: [metaImage?.sourceUrl],
    datePublished: datePublished ? datePublished.toISOString() : '',
    dateModified: dateModified ? dateModified.toISOString() : datePublished.toISOString(),
    description: metaDescription,
    copyrightYear: datePublished ? datePublished.getFullYear() : '',
    author: {
      '@type': 'Person',
      name: 'AMS Team',
    },
    publisher: {
      '@type': 'Organization',
      name: "AMS Ltd.",
      logo: {
        '@type': 'ImageObject',
        url: `${homepage}/favicon.ico`,
      },
    },
  };

  return (
    <Helmet encodeSpecialCharacters={false}>
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  );
}

export function OrganizationJsonLd() {
  const { homepage = '' } = config;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${homepage}/#organization`,
    name: "AMS",
    description: "Transforming global healthcare with advanced, affordable medical solutions. Explore our innovative product range.",
    url: homepage,
    telephone: "+91 2667671302",
    email: "info@amsltd.com",
    address: {
      "@type": 'PostalAddress',
      streetAddress: ' P-21-22, 25-26 & 34-35, GIDC Manjusar, Ta. Savli',
      addressLocality: 'Vadodara, Gujarat, India',
      addressRegion: 'India',
      addressCountry: 'India',
    },
    logo: `${homepage}/favicon.ico`,
    sameAs: [
      "https://www.facebook.com/AdvancedMedTechSolutions",
      "https://www.linkedin.com/company/13193029/admin/dashboard/",
      "https://twitter.com/AmsMedTech",
      "https://www.instagram.com/officialamsltd/",
      "https://www.youtube.com/channel/UCRwHSaWfb2ciojSBz3dhrUw",
    ]
  };

  return (
    <Helmet encodeSpecialCharacters={false}>
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  );
}

export function WebsiteJsonLd() {
  const { homepage = '' } = config;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${homepage}/#website`,
    name: 'AMS',
    url: homepage,
    copyrightYear: new Date().getFullYear(),
    'inLanguage': "en-US",
    "publisher": [
      {
        "@id": `${homepage}/#organization`
      }
    ],
  };

  return (
    <Helmet encodeSpecialCharacters={false}>
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  );
}

export function ImageObjectJsonLd() {
  const { homepage = '' } = config;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    '@id': `${homepage}/assets/seo/homepage.png`,
    url: `${homepage}/assets/seo/homepage.png`,
    width: "1920",
    height: "1016",
    inLanguage: "en-US"
  };

  return (
    <Helmet encodeSpecialCharacters={false}>
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  );
}

export function WebpageJsonLd({ metadata = {} }) {
  const { homepage = '', faviconPath = '/favicon.ico' } = config;
  const { title, slug, description, date_published, date_modified } = metadata;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${homepage}/${slug}#webpage`,
    url: `${homepage}/${slug}`,
    name: `${title}`,
    description: `${description}`,
    datePublished: `${date_published}`,
    dateModified: `${date_modified}`,
    publisher: {
      "@type": "Organization",
      name: "AMS",
      logo: {
        "@type": "ImageObject",
        url: `${homepage}${faviconPath}`,
      }
    },
    "about": {
      "@id": `${homepage}/${slug}#organization`
    },
    "isPartOf": {
      "@id": `${homepage}/${slug}#website`
    },
    "inLanguage": "en_US",
  };

  return (
    <Helmet encodeSpecialCharacters={false}>
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  );
}

export function LocalBusiness() {

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Advanced MedTech Solutions",
    "image": "https://www.amsltd.com/assets/seo/homepage.png",
    "@id": "",
    "url": "https://www.amsltd.com/",
    "telephone": "+91 2667671302",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "P-21-22, 25-26 & 34-35, GIDC Manjusar, Ta. Savli",
      "addressLocality": "Vadodara",
      "postalCode": "391775",
      "addressCountry": "+91",
      "addressRegion": "+91"
    },
    "sameAs": [
      "https://www.facebook.com/AdvancedMedTechSolutions",
      "https://x.com/AmsMedTech",
      "https://www.instagram.com/officialamsltd/",
      "https://www.youtube.com/channel/UCRwHSaWfb2ciojSBz3dhrUw",
      "https://in.linkedin.com/company/advanced-medtech-solutions",
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "08:15",
        "closes": "18:15"
      }
    ]
  };

  return (
    <Helmet encodeSpecialCharacters={false}>
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  );
}