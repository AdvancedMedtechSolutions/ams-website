/* eslint-disable react-hooks/rules-of-hooks */
import Edge from "@/components/Products/Edge";
import Features from "@/components/Products/Features";
import Hero from "@/components/Products/Hero";
import NextGeneration from "@/components/Products/NextGeneration";
import ProductDescription from "@/components/Products/ProductDescription";
import Uncover from "@/components/Products/Uncover";
import { fadeUp } from "@/components/gsapAnimations";
import Layout from "@/components/Layout";
import { Media } from "@/components/media";
import Information from "@/components/Products/Information";
import BgVideo from "@/components/Layout/BgVideo";
import MetaData from "@/components/Metadata";
import { WebpageJsonLd } from "@/lib/json-ld";

const EdgeCard = {
  card1: {
    title: "Swage Point Integrity",
    src: "/assets/advalene/Lens.png",
    para: "Advanced Tipping",
  },
  card2: {
    title: "- the confidence to suture with ease",
    src: "/assets/advalene/advalene-tray.png",
    para: "ADVATRAY is a patented dispensing system designed to deliver ease of suture dispensing with minimal memory in the suture strand.",

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
    title: " Uniform diameter",
  },
  {
    src: "/assets/advalene/features2.png",
    title: " Minimal memory and reduced “pig-tailing”",
  },
  {
    src: "/assets/advalene/features3.png",
    title: " Isotactic polymer maximum strength",
  },
  {
    src: "/assets/advalene/features4.png",
    title: "Seamless knot, without fraying",
  },
];
const cardData = [
  {
    title: "Composition",
    description: "Polypropylene",
    svg: "/assets/advalene/composition.svg"
  },
  {
    title: "Colour",
    description: "Blue",
    svg: "/assets/advalene/color.svg"

  },
  {
    title: "Available Sizes",
    description: "U.S.P. 1 to 5-0",
    svg: "/assets/advalene/sizes.svg"

  },
  {
    title: "Coating",
    description:
      "None",
    svg: "/assets/advalene/coating.svg"

  },
  {
    title: "Tensile Strength",
    description: "Permanent",
    svg: "/assets/advalene/tensile.svg"

  },
  {
    title: "Absorption Profile",
    description: "Non Absorbable",
    svg: "/assets/advalene/absorption.svg"
  },
];
const advalene = () => {
  const metadata = {
    title: "Advalene – Polypropylene Monofilament Suture",
    description:
      "Advalene offers exceptional knot security and flexibility for long-term non-absorbable applications.",
    img: "advalene.png",
    alt: "Advalene – Polypropylene Monofilament Suture",
    slug: "advalene",
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
            src={"/assets/advalene/advalene-hero.png"}
            bgimg={"/assets/advalene/advalene-hero-bg.png"}
            para2={"Steady performance for superior confidence"}
            

          />
          <Information info={"ADVALENE suture is a monofilament non-absorbable sterile surgical suture composed of an isotactic crystalline stereoisomer of polypropylene, a synthetic linear polyolefin. ADVALENE suture is dyed with Phthalocyanine Blue to enhance visibility in tissue. ADVALENE suture is not absorbed nor is subjected to degradation or weakening by the action of tissue enzymes. Due to its relative biological inertness it is recommended for use where the least possible suture reaction is desired."} />
          <Edge
            sectionheading={"The ADVALENE Edge"}
            card1={EdgeCard.card1}
            card2={EdgeCard.card2}
            card3={EdgeCard.card3}
          />
          <Features features={featureData}
          />
          <ProductDescription data={cardData} />
          <NextGeneration />
          <Uncover />
        </main>
      </Layout>
      <Media greaterThan='tablet'>
        <BgVideo videoSrc={"/assets/bg-videos/advalene.mp4"} />
      </Media>
    </>
  );
};

export default advalene;
