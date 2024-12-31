
import { Helmet } from 'react-helmet';
import config from '../../package.json';
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
  
  export function WebpageJsonLd({metadata = {}}) {
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