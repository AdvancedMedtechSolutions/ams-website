/* eslint-disable react-hooks/rules-of-hooks */
import Edge from "@/components/Products/Edge";
import Features from "@/components/Products/Features";
import Hero from "@/components/Products/Hero";
import NextGeneration from "@/components/Products/NextGeneration";
import ProductDescription from "@/components/Products/ProductDescription";
import { fadeUp } from "@/components/gsapAnimations";
import Layout from "@/components/Layout";
import { Media } from "@/components/media";
import Information from "@/components/Products/Information";
import UncoverCV from "@/components/Products/UncoverCV";
import BgVideo from "@/components/Layout/BgVideo";
import { NextSeo } from "next-seo";
import MetaData from "@/components/Metadata";
import { WebpageJsonLd } from "@/lib/json-ld";

const EdgeCard = {
  card1: {
    title: "Augment Your Confidence",
    src: "/assets/advalene-cv/Lens.png",
    para: "Advanced Tipping",
  },
  card2: {
    title: "- the confidence to suture with ease",
    src: "/assets/advalene-cv/advalene-cv-tray.png",
    para: "ADVATRAY is a  patented dispensing system designed to deliver ease of suture dispensing with minimal memory in the suture strand.",
  },
  card3: {
    title: "Knot Pull Tensile Strength",
    src: "/assets/advalene/advalene-graph.png",
    para: "",
  },
};
const featureData = [
  {
    src: "/assets/advalene/features1.png",
    title: " Inert Monofilament Structure",
  },
  {
    src: "/assets/advalene/features2.png",
    title: "Minimal memory and reduced “pig-tailing”",
  },
  {
    src: "/assets/advalene/features3.png",
    title: "Isotactic polymer maximum strength",
  },
];
const cardData = [
  {
    title: "Composition",
    description: "Polypropylene",
    svg: "/assets/advalene-cv/composition.svg",
  },
  {
    title: "Colour",
    description: "Blue",
    svg: "/assets/advalene-cv/color.svg",
  },
  {
    title: "Available Sizes",
    description: "U.S.P. 1 to 5-0",
    svg: "/assets/advalene-cv/sizes.svg",
  },
  {
    title: "Coating",
    description: "None",
    svg: "/assets/advalene-cv/coating.svg",
  },
  {
    title: "Tensile Strength",
    description: "Permanent",
    svg: "/assets/advalene-cv/tensile.svg",
  },
  {
    title: "Absorption Profile",
    description: "Non Absorbable",
    svg: "/assets/advalene-cv/absorption.svg",
  },
];
const advalenecv = () => {
  const metadata = {
    title: "Advalene CV – Polypropylene Suture for Cardiology",
    description:
      "Durable and reliable, Advalene CV is designed for precision in cardiovascular surgeries.",
    img: "advalene-cv.png",
    alt: "Advalene CV – Polypropylene Suture for Cardiology",
    slug: "advalene-cv",
    date_published: "2020-01-01T00:00",
    date_modified: "2024-12-26T12:32",
  };
  fadeUp();

  return (
    <>
      <MetaData metadata={metadata}/>
      <WebpageJsonLd metadata={metadata}/>
      <Layout>
        <main>
          <Hero
            heading={"Advalene"}
            className="text-[#1680B7]"
            tagline={" Monofilament Polypropylene Blue"}
            para1={
              "  Reliable performance for confidence in contaminated wound closure"
            }
            src={"/assets/advalene-cv/advalene-cv-hero.png"}
            bgimg={"/assets/advalene/advalene-hero-bg.png"}
            para2={"With exceptional strength comes confidence that lasts"}
            
          />
          <Information
            info={
              "ADVALENE Cardiovascular suture is a monofilament synthetic non-absorbable, sterile surgical suture composed of an isotactic crystalline stereoisomer of polypropylene, synthetic linear polyolefin. The suture is dyed with Phthalocyanine Blue to enhance visibility in tissue. Due to its relative biological inertness it is recommended for use where the least possible suture reaction is desired. ADVALENE Cardiovascular Suture an ideal choice for anastomosis."
            }
          />
          <Edge
            sectionheading={"The ADVALENE Edge"}
            card1={EdgeCard.card1}
            card2={EdgeCard.card2}
            card3={EdgeCard.card3}
          />
          <Features features={featureData} />
          <ProductDescription data={cardData} />
          <NextGeneration />
          <UncoverCV />
        </main>
      </Layout>
      <Media greaterThan="tablet">
        <BgVideo videoSrc={"/assets/bg-videos/advalon.mp4"} />
      </Media>
    </>
  );
};

export default advalenecv;
