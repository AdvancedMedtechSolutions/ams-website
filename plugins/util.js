/* eslint-disable no-unused-vars */
const fs = require("fs");
const { gql, ApolloClient, InMemoryCache } = require("@apollo/client");
const RSS = require("rss");
const prettier = require("prettier");

const config = require("../package.json");

/**
 * createFile
 */

async function createFile(file, process, directory, location, verbose = false) {
  try {
    mkdirp(directory);
    verbose && console.log(`[${process}] Created directory ${directory}`);
    await promiseToWriteFile(location, file);
    verbose &&
      console.log(`[${process}] Successfully wrote file to ${location}`);
  } catch (e) {
    throw new Error(`[${process}] Failed to create file: ${e.message}`);
  }
}

/**
 * promiseToWriteFile
 */

function promiseToWriteFile(location, content) {
  return new Promise((resolve, reject) => {
    fs.writeFile(location, content, (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve();
    });
  });
}

/**
 * mkdirp
 */

function mkdirp(directory) {
  const split = directory.split("/");
  let temp = ".";

  split.forEach((dir) => {
    temp = `${temp}/${dir}`;

    if (!fs.existsSync(temp)) {
      fs.mkdirSync(temp);
    }
  });
}

/**
 * createApolloClient
 */

function createApolloClient(url) {
  return new ApolloClient({
    uri: url,
    cache: new InMemoryCache(),
  });
}

/**
 * getAllPosts
 */

async function getAllPosts(apolloClient, process, verbose = false) {
  const query = gql`
    {
      posts(first: 10000) {
        edges {
          node {
            title
            excerpt
            slug
            date
            postsFields {
              customTitle
            }
          }
        }
      }
    }
  `;

  let posts = [];

  try {
    const data = await apolloClient.query({ query });
    const nodes = [...data.data.posts.edges.map(({ node = {} }) => node)];

    posts = nodes.map((post) => {
      const data = { ...post };

      if (data.excerpt) {
        const regExHtmlTags = /(<([^>]+)>)/g;
        data.excerpt = data.excerpt.replace(regExHtmlTags, "");
      }

      return data;
    });

    verbose &&
      console.log(
        `[${process}] Successfully fetched posts from ${apolloClient.link.options.uri}`
      );
    return {
      posts,
    };
  } catch (e) {
    throw new Error(
      `[${process}] Failed to fetch posts from ${apolloClient.link.options.uri}: ${e.message}`
    );
  }
}

/**
 * getSiteMetadata
 */

async function getSiteMetadata(apolloClient, process, verbose = false) {
  const query = gql`
    {
      generalSettings {
        description
        language
        title
      }
    }
  `;

  let metadata = {};

  try {
    const data = await apolloClient.query({ query });
    metadata = { ...data.data.generalSettings };

    if (!metadata.language || metadata.language === "") {
      metadata.language = "en";
    } else {
      metadata.language = metadata.language.split("_")[0];
    }

    verbose &&
      console.log(
        `[${process}] Successfully fetched metadata from ${apolloClient.link.options.uri}`
      );
    return {
      metadata,
    };
  } catch (e) {
    throw new Error(
      `[${process}] Failed to fetch metadata from ${apolloClient.link.options.uri}: ${e.message}`
    );
  }
}

/**
 * getFeedData
 */

async function getFeedData(apolloClient, process, verbose = false) {
  const metadata = await getSiteMetadata(apolloClient, process, verbose);
  const posts = await getAllPosts(apolloClient, process, verbose);
  return {
    ...metadata,
    ...posts,
  };
}

/**
 * getSitemapData
 */

async function getSitemapData(apolloClient, process, verbose = false) {
  const posts = await getAllPosts(apolloClient, process, verbose);

  return {
    ...posts,
  };
}

/**
 * generateFeed
 */

function generateFeed({ posts = [], metadata = {} }) {
  const { homepage = "" } = config;

  const feed = new RSS({
    title: metadata.title || "",
    description: metadata.description,
    site_url: homepage,
    feed_url: `${homepage}/feed.xml`,
    copyright: `${new Date().getFullYear()} ${metadata.title}`,
    language: metadata.language,
    pubDate: new Date(),
  });

  posts.map((post) => {
    feed.item({
      title: post.postsFields.customTitle || post.title,
      guid: `${homepage}/${post.slug}`,
      url: `${homepage}/${post.slug}`,
      date: post.date,
      description: post.excerpt,
    });
  });

  return feed.xml({ indent: true });
}

/**
 * generateSitemap
 */

function generateSitemap({ posts = [] }, nextConfig = {}) {
  const { homepage = "" } = config;
  const { trailingSlash } = nextConfig;
  const pages = [
    { slug: "about-us" },
    { slug: "manufacturing" },
    { slug: "advanced-medtech-academy-ama" },
    { slug: "career" },
    { slug: "newsroom" },
    { slug: "contact-us" },
    { slug: "research-and-development" },
    { slug: "r-and-d/suture-needle-technology" },
    { slug: "products/wound-care" },
    { slug: "products/endo-surgery" },
    { slug: "products/hernia-solutions" },
    { slug: "products/interventional-cardiology" },
    { slug: "products/cardiac-surgery" },
    { slug: "products/oem" },
    { slug: "wound-care/advacryl-polyglcatin-910-suture" },
    { slug: "wound-care/coated-advacryl-plus-antibacterial-polyglactin-910-suture" },
    { slug: "wound-care/advacryl-rapid-polyglactin-910-suture" },
    { slug: "wound-care/advamryl-poliglecaprone-25-suture" },
    { slug: "wound-care/advapd-polydioxanone-suture" },
    { slug: "wound-care/advacat-gut-suture-chromic-plain" },
    { slug: "wound-care/advalene-polypropylene-suture" },
    { slug: "wound-care/advabond-polyester-suture" },
    { slug: "wound-care/advalon-polyamide-suture" },
    { slug: "wound-care/advasyl-silk-suture" },
    { slug: "wound-care/advabond-polyester-tape-suture" },
    { slug: "wound-care/advagrip-knotless-barbed-suture" },
    { slug: "haemostats-gelatin-sponge" },
    { slug: "wound-care/surgical-kits" },
    { slug: "endo-surgery/advastap-hemorrhoid-stapler" },
    { slug: "endo-surgery/advastap-linear-cutter-stapler" },
    { slug: "endo-surgery/advastap-circular-stapler" },
    { slug: "endo-surgery/advastap-skin-stapler" },
    { slug: "endo-surgery/advastap-endoscopic-linear-cutter-stapler" },
    { slug: "endo-surgery/advastap-powered-linear-cutter-stapler" },
    { slug: "endo-surgery/advastap-endoscopic-reloads" },
    { slug: "ligation-solutions/advaclip-ligation-clips" },
    { slug: "hernia-solutions/advamesh-hernia-mesh" },
    { slug: "interventional-cardiology/adva-glide-ptca-coronary-balloon-semi-compliant" },
    { slug: "interventional-cardiology/adva-glide-nc-ptca-coronary-balloon-non-compliant" },
    { slug: "interventional-cardiology/adva-pro-coronary-sirolimus-stent" },
    { slug: "interventional-cardiology/coronary-accessories" },
    { slug: "cardiac-surgery/advabond-polyester-cardiovascular-suture" },
    { slug: "cardiac-surgery/advalene-polypropylene-cardiovascular-suture" },
    { slug: "cardiac-surgery/advasteel-sternotomy-cardiovascular-suture" },
    { slug: "cardiac-surgery/advapacer-316L-stainless-steel-sternotomy-suture" },
    { slug: "legal-pages/privacy-policy" },
    { slug: "legal-pages/terms-and-conditions" },
    { slug: "infographics/needle-brochure.pdf" },
    { slug: "infographics/advakit-csection.pdf" },
    { slug: "infographics/advakit-hernia.pdf" },
    { slug: "infographics/advakit-ortho.pdf" },
    { slug: "infographics/advastap-reloads.pdf" },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>${homepage}</loc>
        <priority>1</priority>
        <lastmod>${new Date().toISOString()}</lastmod>
      </url>
      ${pages
        .map((page) => {
          return `<url>
                  <loc>${homepage}/${page.slug}</loc>
                  <priority>0.9</priority>
                  <lastmod>${new Date().toISOString()}</lastmod>
                </url>
              `;
        })
        .join("")}
          ${posts
            .map((post) => {
              const modifiedDate = post.modified
                ? new Date(post.modified).toISOString()
                : new Date().toISOString();
              return `<url>
                        <loc>${homepage}/${post.slug}${trailingSlash ? "/" : ""}</loc>
                        <priority>0.7</priority>
                        <lastmod>${modifiedDate}</lastmod>
                      </url>
                  `;
            })
            .join("")}
    </urlset>
    `;

  const sitemapFormatted = prettier.format(sitemap, {
    printWidth: 120,
    parser: "html",
  });

  return sitemapFormatted;
}

/**
 * resolvePathname
 */

function resolvePublicPathname(outputDirectory, outputName) {
  const directory = outputDirectory.split("/");
  const index = directory.indexOf("public");
  const path = directory
    .map((path, i) => {
      // If actual folder is a 'public' direct subfolder and is not empty, add to pathname
      if (i > index && path) {
        return `/${path}`;
      }
    })
    .join("");

  return `${path}/${outputName}`;
}

/**
 * removeLastTrailingSlash
 */

function removeLastTrailingSlash(url) {
  if (typeof url !== "string") return url;
  return url.replace(/\/$/, "");
}

/**
 * terminalColor
 */

function terminalColor(text, level) {
  switch (level) {
    /** green */
    case "info":
    default:
      return `\x1b[32m${text}\x1b[0m`;
    /** yellow */
    case "warn":
      return `\x1b[33m${text}\x1b[0m`;
    /** red */
    case "error":
      return `\x1b[31m${text}\x1b[0m`;
  }
}

module.exports = {
  createFile,
  promiseToWriteFile,
  mkdirp,
  createApolloClient,
  getAllPosts,
  getSiteMetadata,
  getFeedData,
  generateFeed,
  getSitemapData,
  generateSitemap,
  removeLastTrailingSlash,
  resolvePublicPathname,
  terminalColor,
};
