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
    src: "/assets/advamryl/lens.png",
    para: "Advanced Tipping",
  },
  card2: {
    title: "- the confidence to suture with ease",
    src: "/assets/advamryl/advamryl-tray.png",
    para: " ADVATRAY is a patented dispensing system designed to deliver ease of suture dispensing with minimal memory in the suture strand.",
  },
  card3: {
    title: "Knot Pull Tensile Strength",
    src: "/assets/advamryl/advamryl-graph.png",
    para: " ",
  },
};
const featureData = [
  {
    src: "/assets/advamryl/feature-card1.png",
    title: " Smoother surface for minimal tissue drag & trauma",
  },
  {
    src: "/assets/advamryl/feature-card2.png",
    title: "Minimal memory for ease of handling",
  },
  {
    src: "/assets/advamryl/feature-card3.png",
    title: "Excellent knot security",
  },
  {
    src: "/assets/advamryl/feature-card4.png",
    title: "Excellent pliability & handling characteristics",
  },
];
const cardData = [
  {
    title: "Composition",
    description: "Glycolide and  ε-Caprolactone",
    svg: "/assets/advamryl/composition.svg"
  },
  {
    title: "Colour",
    description: "Undyed and Violet",
    svg: "/assets/advamryl/color.svg"

  },
  {
    title: "Available Sizes",
    description: "U.S.P. 2 to 6-0",
    svg: "/assets/advamryl/sizes.svg"

  },
  {
    title: "Coating",
    description:
      "None",
    svg: "/assets/advamryl/coating.svg"

  },
  {
    title: "Tensile Strength",
    description: "<div style='margin-left:10vw; display:flex; align-items-center; justify-content:center; gap:4vw; line-height:1;'><p> Dyed</p>  <p>Undyed</p></div><div style='display:flex; align-items:center; justify-content:center; gap:4vw; line-height:1;'><p style='padding:0.5vw'> 7 days </p>   <p>~60% </p>  <p> ~55%</p></div>     <div style='display:flex; align-items:center; justify-content:center; gap:4vw; line-height:1;'><p style='padding:0.5vw'> 14 days </p>   <p>~40% </p>  <p> ~20%</p></div>",
    svg: "/assets/advamryl/tensile.svg"

  },
  {
    title: "Absorption Profile",
    description: "Essentially complete up to 90 days",
    svg: "/assets/advamryl/absorption.svg"

  },
];

const advamryl = () => {
  const metadata = {
    title: "Advamryl Poliglecaprone 25 Suture – Monofilament Absorbable Suture",
    description:
      "Advamryl, a monofilament absorbable suture, ensures smooth tissue passage and dependable wound support.",
    img: "advamryl.png",
    alt: "Advamryl Poliglecaprone 25 Suture – Monofilament Absorbable Suture",
    slug: "wound-care/advamryl-poliglecaprone-25-suture",
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
            heading={"Advamryl"}
            className="text-[#E58D72]"
            tagline={"Monofilament Poliglecaprone 25"}
            para1={
              "Supreme handling performance for confidence in subcuticular skin closure"
            }
            src={"/assets/advamryl/advamryl-hero.png"}
            bgimg={"/assets/advamryl/advamryl-hero-bg.png"}
            para2={"Steady performance for superior confidence"}
            

          />
          <Information info={"ADVAMRYL suture is monofilament synthetic absorbable surgical suture prepared from a copolymer of Glycolide and epsilon-caprolactone. ADVAMRYL suture is colored violet to increase visibility and are also available undyed."} />
          <Edge
            sectionheading={" The ADVAMRYL Edge"}
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
        <BgVideo videoSrc={"/assets/bg-videos/interventional-cardiology.mp4"} />
      </Media>
    </>
  );
};

export default advamryl;
