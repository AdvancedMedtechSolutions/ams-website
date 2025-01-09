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
    src: "/assets/advapd/lens.png",
    para: "Advanced Tipping",
  },
  card2: {
    title: "- the confidence to suture with ease",
    src: "/assets/advapd/advapdtray.png",
    para: " ADVATRAY is a  patented dispensing system designed to deliver ease of suture dispensing with minimal memory in the suture strand.",
  },
  card3: {
    title: "Knot Pull Tensile Strength",
    src: "/assets/advapd/advapd-graph.png",
    para: "",
  },
};
const featureData = [
  {
    src: "/assets/advapd/feature-card1.png",
    title: " Excellent in-vivo strength retention",
  },
  {
    src: "/assets/advapd/feature-card2.png",
    title: "Minimal memory for ease of handling",
  },
  {
    src: "/assets/advapd/feature-card3.png",
    title: "Excellent knot security",
  },
  {
    src: "/assets/advapd/feature-card4.png",
    title: "Excellent pliability & handling characteristics",
  },
];
const cardData = [
  {
    title: "Composition",
    description: "Polydioxanone",
    svg: "/assets/advapd/composition.svg",
  },
  {
    title: "Colour",
    description: "Violet",
    svg: "/assets/advapd/color.svg",
  },
  {
    title: "Available Sizes",
    description: "U.S.P. 2 to 9-0",
    svg: "/assets/advapd/sizes.svg",
  },
  {
    title: "Coating",
    description: "None",
    svg: "/assets/advapd/coating.svg",
  },
  {
    title: "Tensile Strength",
    description: "~80% | 14 Days <br/> ~70% | 28 Days",
    svg: "/assets/advapd/tensile.svg",
  },
  {
    title: "Absorption Profile",
    description: "Essentially complete between 180 to 220 days",
    svg: "/assets/advapd/absorption.svg",
  },
];

const advapd = () => {
  const metadata = {
    title: "Advapd Polydioxanone Suture - Polydioxanone Absorbable Suture",
    description:
      "Long-term absorbable suture, Advapd ensures superior tensile strength and surgical reliability.",
    img: "advapd.png",
    alt: "Advapd Polydioxanone Suture - Polydioxanone Absorbable Suture",
    slug: "wound-care/advapd-polydioxanone-suture",
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
            heading={"AdvaPd"}
            className="text-[#A49EA3]"
            tagline={"Monofilament Polydioxanone"}
            para1={
              "Enduring performance for confidence in extended wound support"
            }
            src={"/assets/advapd/advapd-hero.png"}
            bgimg={"/assets/advapd/advapd-hero-background.png"}
            para2={"Steady performance for superior confidence"}
            
          />
          <Information
            info={
              "ADVAPD suture is a monofilament synthetic absorbable sterile surgical suture composed of a copolymer made from the Polyester and Polydioxanone. ADVAPD suture is available in violet form. These sutures are particularly useful where the combination of an absorbable suture and extended wound support (up to six weeks) is desirable."
            }
          />
          <Edge
            sectionheading={"The ADVAPD Edge"}
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
        <BgVideo videoSrc={"/assets/bg-videos/advapd.mp4"} />
      </Media>
    </>
  );
};

export default advapd;
