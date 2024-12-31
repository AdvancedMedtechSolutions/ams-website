/* eslint-disable react-hooks/rules-of-hooks */
import Features from "@/components/Products/Features";
import Hero from "@/components/Products/Hero";
import NextGeneration from "@/components/Products/NextGeneration";
import ProductDescription from "@/components/Products/ProductDescription";
import Uncover from "@/components/Products/Uncover";
import { fadeUp } from "@/components/gsapAnimations";
import Edge2 from "@/components/Products/Edge2";
import Layout from "@/components/Layout";
import { Media } from "@/components/media";
import Information from "@/components/Products/Information";
import BgVideo from "@/components/Layout/BgVideo";
import MetaData from "@/components/Metadata";
import { WebpageJsonLd } from "@/lib/json-ld";

const EdgeCard = {
  card1: {
    title: "Swage Point Integrity",
    src: "/assets/advalon/lens.png",
    para: "Advanced Tipping",
  },
  card2: {
    title: "Inert Polymer ",
    src: "/assets/advalon/advalon-edge2.png",
    para: "ADVATRAY is a patented dispensing system designed to deliver ease of suture dispensing with minimal memory in the suture strand.",
  
  },
  card3: {
    title: "Knot Pull Tensile Strength",
    src: "/assets/advalon/advalon-graph.png",
    para: "",
  },
};
const featureData = [
  {
    src: "/assets/advalon/features1.png",
    title: "Uniform diameter",
  },
  {
    src: "/assets/advalon/features2.png",
    title: "Elasticity to ensure compact and safe knotting",
  },
  {
    src: "/assets/advalon/features4.png",
    title: "Excellent and consistent knotting strength",
  },
];
const cardData = [
  {
    title: "Composition",
    description: "Polyamide",
    svg: "/assets/advalon/composition.svg"
  },
  {
    title: "Colour",
    description: "Black",
    svg: "/assets/advalon/color.svg"
  },
  {
    title: "Available Sizes",
    description: "U.S.P. 1 to 10-0",
    svg: "/assets/advalon/sizes.svg"

  },
  {
    title: "Coating",
    description:
      "None",
    svg: "/assets/advalon/coating.svg"

  },
  {
    title: "Tensile Strength",
    description: "Permanent",
    svg: "/assets/advalon/tensile.svg"

  },
  {
    title: "Absorption Profile",
    description: "Non Absorbable",
    svg: "/assets/advalon/absorption.svg"

  },
];

const advalon = () => {
  const metadata = {
    title: "Advalon – Nylon Monofilament Surgical Suture",
    description:
      "Choose Advalon for reliable, non-absorbable nylon sutures ideal for soft tissue closure.",
    img: "advalon.png",
    alt: "Advalon – Nylon Monofilament Surgical Suture",
    slug: "advalon",
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
            heading={"Advalon"}
            className="text-[#7FC18E]"
            tagline={"Monofilament Polyamide Black"}
            para1={
              "Appropriate choice for dermal closure and retention suturing"
            }
            src={"/assets/advalon/advalon-hero.png"}
            bgimg={"/assets/advalon/advalon-hero-bg.png"}
            para2={"Ideal selection for confidence in skin closure"}
            

          />
          <Information info={"ADVALON suture is a non-absorbable sterile surgical suture composed of the long chain aliphatic polymers Nylon 6-6.6. ADVALON suture elicits a minimal initial inflammatory reaction in tissues which is followed by gradual encapsulation of the suture by fibrous connective tissues. ADVALON suture is effective as a pull-out suture due to its lack of adherence to tissue."} />
          <Edge2
            sectionheading={"The ADVALON Edge"}
            card1={EdgeCard.card1}
            card2={EdgeCard.card2}
            card3={EdgeCard.card3}
            className={"hidden"}
          />
          <Features features={featureData}
          />
          <ProductDescription data={cardData} />
          <NextGeneration />
          <Uncover />
        </main>
      </Layout>
      <Media greaterThan='tablet'>
        <BgVideo videoSrc={"/assets/bg-videos/advalon.mp4"} />
      </Media>
    </>
  );
};

export default advalon;
