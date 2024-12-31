/* eslint-disable react-hooks/rules-of-hooks */
import Edge from "@/components/Products/Edge";
import Features from "@/components/Products/Features";
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
import Hero from "@/components/Products/Hero";


const EdgeCard = {
  card1: {
    title: "Swage Point Integrity",
    src: "/assets/advacryl/magnifying-glass.png",
    para: "Advanced Tipping",
  },
  card2: {
    title: "- the confidence to suture with ease",
    src: "/assets/advacryl-plus/advacryl-plus-tray.png",
    para: " ADVATRAY is a patented dispensing system designed to deliver ease of suture dispensing with minimal memory in the suture strand.",
  },
  card3: {
    title: "Knot Pull Tensile Strength",
    src: "/assets/advacryl-plus/advacryl-plus-graph.png",
    para: "",
  },
};
const featureData = [
  {
    src: "/assets/advacryl/features1.png",
    title: " Excellent strength over the critical wound healing period",
  },
  {
    src: "/assets/advacryl/features2.png",
    title: " Tighter braided construction",
  },
  {
    src: "/assets/advacryl/features3.png",
    title: " Excellent handling",
  },
  {
    src: "/assets/advacryl/features4.png",
    title: "Excellent knot security",
  },
];
const cardData = [
  {
    title: "Composition",
    description: "90% Glycolide, 10% L-lactide",
    svg: "/assets/advacryl-plus/composition.svg",
  },
  {
    title: "Colour",
    description: "Undyed and Violet",
    svg: "/assets/advacryl-plus/color.svg",
  },
  {
    title: "Available Sizes",
    description: "U.S.P. 2 to 4-0",
    svg: "/assets/advacryl-plus/sizes.svg",
  },
  {
    title: "Coating",
    description:
      "Poly (glycolide-co-lactide) (Glacomer 37) and Calcium Stearate, Triclosan",
    svg: "/assets/advacryl-plus/coating.svg",
  },
  {
    title: "Tensile Strength",
    description: "~75% | 14 Days<br />~55% | 21 Days",
    svg: "/assets/advacryl-plus/tensile.svg",
  },
  {
    title: "Absorption Profile",
    description: "Essentially complete up to 80 days",
    svg: "/assets/advacryl-plus/absorption.svg",
  },
];

const advacrylplus = () => {
  const metadata = {
    title: "Advacryl Plus – Antibacterial Polyglactin Suture",
    description:
      "Explore Advacryl Plus, a Triclosan-coated antibacterial suture designed to reduce surgical site infections.",
    img: "advacrylplus.png",
    alt: "Advacryl Plus – Antibacterial Polyglactin Suture",
    slug: "advacrylplus",
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
           heading={"Advacryl Plus"}
           className="text-[#855EA6]"
           tagline={
             "Antibacterial with Triclosan Braided Coated Polyglactin 910"
           }
           para1={
             "Consistent performance for confidence in a variety of soft tissue approximation minimizing Surgical Site Infections (SSI)"
           }
           src={"/assets/advacryl-plus/advacryl-plus-hero.png"}
           bgimg={"/assets/advacryl/advacryl-hero-bg.png"}
           para2={"Steady performance for superior confidence"}
          
          
          />
          <Information
            info={
              "ADVACRYL PLUS suture is a braided synthetic absorbable sterile surgical suture composed of a copolymer made from 90% Glycolide and 10% L-lactide. ADVACRYL PLUS suture is Triclosan coated antibacterial absorbable surgical suture assures consistent performance for confidence in a variety of soft tissue approximation by minimizing Surgical Site Infections (SSI)."
            }
          />
          <Edge
            sectionheading={"The ADVACRYL PLUS Edge"}
            card1={EdgeCard.card1}
            card2={EdgeCard.card2}
            card3={EdgeCard.card3}
          />
          <Features features={featureData} />
          <ProductDescription data={cardData} />
          <NextGeneration />
          <Uncover />
        </main>
      </Layout>
      <Media greaterThan="tablet">
        <BgVideo videoSrc={"/assets/bg-videos/advacryl.mp4"} />
      </Media>
    </>
  );
};

export default advacrylplus;
