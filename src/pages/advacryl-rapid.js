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
    src: "/assets/advacryl-rapid/lens.png",
    para: "Advanced Tipping",
  },
  card2: {
    title: "- the confidence to suture with ease",
    src: "/assets/advacryl-rapid/edge-card2.png",
    para: "ADVATRAY is a  patented dispensing system designed to deliver ease of suture dispensing with minimal memory in the suture strand.",
  },
  card3: {
    title: "Knot Pull Tensile Strength",
    src: "/assets/advacryl-rapid/edge-card3.png",
    para: "",
  },
};
const featureData = [
  {
    src: "/assets/advacryl-rapid/feature-card1.png",
    title: "Excellent strength over the critical wound healing period",
  },
  {
    src: "/assets/advacryl-rapid/feature-card2.png",
    title: "Tighter braided construction",
  },
  {
    src: "/assets/advacryl-rapid/feature-card3.png",
    title: "Excellent knot security",
  },
  {
    src: "/assets/advacryl-rapid/feature-card4.png",
    title: "Excellent handling",
  },
];
const cardData = [
  {
    title: "Composition",
    description: "90% Glycolide, 10% L-lactide",
    svg: "/assets/advacryl-rapid/composition.svg"
  },
  {
    title: "Colour",
    description: "Undyed",
    svg: "/assets/advacryl-rapid/color.svg"
  },
  {
    title: "Available Sizes",
    description: "U.S.P. 1 to 5-0",
    svg: "/assets/advacryl-rapid/sizes.svg"
  },
  {
    title: "Coating",
    description:
      "Poly (glycolide-co-lactide) (Glacomer 37)",
    svg: "/assets/advacryl-rapid/coating.svg"
  },
  {
    title: "Tensile Strength",
    description: "~42%  |  5 Days <br/>  ~ 0%   |  10-14 Days",
    svg: "/assets/advacryl-rapid/tensile.svg"
  },
  {
    title: "Absorption Profile",
    description: "Essentially complete upto 42 days",
    svg: "/assets/advacryl-rapid/absorption.svg"
  },
];
const advacrylrapid = () => {
  const metadata = {
    title: "Advacryl Rapid – Fast Absorption Surgical Suture",
    description:
      "Advacryl Rapid offers quick absorption for short-term wound closure needs with high reliability.",
    img: "advacryl-rapid.png",
    alt: "Advacryl Rapid – Fast Absorption Surgical Suture",
    slug: "advacryl-rapid",
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

            heading={"ADVAcryl Rapid"}
            className="text-[#E41F30]"
            tagline={" BRAIDED COATED POLYGLACTIN 910 SURGICAL SUTURE"}
            para1={
              "  Accelerated performance for confidence in delicate tissue approximation"
            }
            src={"/assets/advacryl-rapid/advacryl-rapid-hero.png"}
            bgimg={"/assets/advacryl-rapid/advacryl-rapid-hero-bg.png"}
            para2={
              "Swift Confidence for Superior Predictability"
            }
            

          />
          <Information info={" ADVACRYL RAPID is a braided synthetic absorbable suture made of 90% glycolide and 10% L-lactide. ADVACRYL RAPID in comparison to ADVACRYL has a rapid loss of strength and absorption rate. The characteristic rapid loss of strength is achieved by use of a polymer material with a lower molecular weight than regular ADVACRYL (polyglactin 910) suture."} />
          <Edge
            sectionheading={" The ADVACRYL RAPID Edge"}
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
        <BgVideo videoSrc={"/assets/bg-videos/advarapid.mp4"} />
      </Media>
    </>
  );
};

export default advacrylrapid;
