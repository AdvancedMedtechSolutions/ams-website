import EdgeCarousel from "@/components/Advaglide/EdgeCarousel";
import Ergonomic from "@/components/Advaglide/Ergonomic";
import Sirolimus from "@/components/Advaglide/Sirolimus";
import Layout from "@/components/Layout";
import BgVideo from "@/components/Layout/BgVideo";
import { Media } from "@/components/media";
import React from "react";
import { fadeUp, paraAnim } from "@/components/gsapAnimations";
import MetaData from "@/components/Metadata";
import { WebpageJsonLd } from "@/lib/json-ld";
import Hero from "@/components/NCAdvaglide/Hero";
import NCAdvaGlideSpecifications from "@/components/NCAdvaglide/NCAdvaGlideSpecifications";

const ncadvaglide = () => {
  const metadata = {
    title: "NC-Advaglide – Lubricated Surgical Sutures",
    description:
      "Enhance precision and ease of use with Advaglide, lubricated sutures for smooth tissue passage.",
    img: "advaglide.png",
    alt: "Advaglide – Lubricated Surgical Sutures",
    slug: "advaglide",
    date_published: "2020-01-01T00:00",
    date_modified: "2024-12-26T12:32",
  };
  fadeUp();
  paraAnim();
  return (
    <>
      <MetaData metadata={metadata}/>
      <WebpageJsonLd metadata={metadata}/>
      <Layout>
        <main>
          <Hero/>
          <Ergonomic />
          <EdgeCarousel width={"55%"} sectionHeading={"NC ADVA GLIDE Edge"} />
          <NCAdvaGlideSpecifications/>
          <Sirolimus />
        </main>
      </Layout>
      <Media greaterThan="tablet">
        <BgVideo videoSrc={"/assets/bg-videos/original-bg.mp4"} />
      </Media>
    </>
  );
};

export default ncadvaglide;
