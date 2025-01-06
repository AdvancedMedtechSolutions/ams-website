import { NextSeo } from "next-seo";
import config from "../../../package.json";

export default function MetaData({ metadata }) {
  const { homepage = "" } = config;
  const { title, description, img, slug, alt } = metadata;

  return (
    <NextSeo
      title={title}
      description={description}
      openGraph={{
        url: `${homepage}/${slug}`,
        title: `${title}`,
        description: `${description}`,
        images: [
          {
            url: `${homepage}/assets/seo/${img}`,
            width: 1909,
            height: 949,
            alt: { alt },
            type: "image/png",
          },
        ],
        siteName: "AMS",
      }}
      canonical={`${homepage}/${slug}`}
      languageAlternates={[
        {
          hrefLang: "en-US",
          href: `${homepage}/${slug}`,
        },
      ]}
    />
  );
}
