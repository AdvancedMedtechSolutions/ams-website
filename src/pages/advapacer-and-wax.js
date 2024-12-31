/* eslint-disable react-hooks/rules-of-hooks */
// import Hero from "@/components/Products/Hero";
import NextGeneration from "@/components/Products/NextGeneration";
import ProductDescription from "@/components/Products/ProductDescription";
import { fadeUp, paraAnim } from "@/components/gsapAnimations";
import Layout from "@/components/Layout";
import Advawax from "@/components/Advawax/Advawax";
import { Media } from "@/components/media";
import Information from "@/components/Products/Information";
import UncoverCV from "@/components/Products/UncoverCV";
import BgVideo from "@/components/Layout/BgVideo";
import MetaData from "@/components/Metadata";
import { WebpageJsonLd } from "@/lib/json-ld";
import Hero from "@/components/Products/Hero";

const cardData1 = [
  {
    title: "Composition",
    description: "Stainless Steel",
    svg: "/assets/advapacer/composition.svg",
  },
  {
    title: "Colour Dual",
    description: "Blue & Orange",
    svg: "/assets/advapacer/color.svg",
  },
  {
    title: "Available Sizes",
    description: "U.S.P. 2-0",
    svg: "/assets/advapacer/sizes.svg",
  },
  {
    title: "Coating",
    description: "LDPE",
    svg: "/assets/advapacer/coating.svg",
  },
  {
    title: "Tensile Strength",
    description: "Permanent",
    svg: "/assets/advapacer/tensile.svg",
  },
  {
    title: "Absorption Profile",
    description: "Non Absorbable",
    svg: "/assets/advapacer/absorption.svg",
  },
];
const cardData2 = [
  {
    title: "Composition",
    description: "Bees Wax and Isopropyl Myristate.",
    svg: "/assets/advapacer/composition.svg",
  },
  {
    title: "Colour",
    description: "White",
    svg: "/assets/advapacer/color.svg",
  },
  {
    title: "Available Sizes",
    description: "ADVAW810",
    svg: "/assets/advapacer/sizes.svg",
  },
  {
    title: "Coating",
    description: "62 GSM - Siliconized",
    svg: "/assets/advapacer/coating.svg",
  },
  {
    title: "Tensile Strength",
    description: "Permanent",
    svg: "/assets/advapacer/tensile.svg",
  },
  {
    title: "Weight (g)",
    description: "Minimum 2.5",
    svg: "/assets/advapacer/absorption.svg",
  },
];

const advapacer = () => {
  const metadata = {
    title: "Advapacer and Wax – Bone Wax for Hemostasis",
    description:
      "Advapacer and Wax delivers effective hemostasis and surgical support with high-quality bone wax.",
    img: "advapacer.png",
    alt: "Advapacer and Wax – Bone Wax for Hemostasis",
    slug: "advapacer-and-wax",
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
          <Hero
            heading={"ADVAPACER"}
            className="text-[#CBA82A]"
            tagline={" Multifilament 316L Stainless Steel"}
            para1={
              "  Supreme performance for ultimate confidence in sternum closure"
            }
            src={"/assets/advapacer/advapacer-hero.png"}
            bgimg={"/assets/advapacer/advapacer-bg.png"}
            para2={"Monofilament Non-Absorbable Surgical Suture"}
            
          />
          <Information
            info={
              "ADVAPACER is a twisted 316L stainless steel wire, featuring a dual coating of blue and blue-orange Low Densile Polyethylene (sheathed) for enhanced durability. The advanced coating offers smooth handling and minimizes tissue trauma, making it ideal for various surgical applications requiring precision and durability. "
            }
          />
          <ProductDescription data={cardData1} />
          <Advawax />
          <Information
            info={
              "ADVAWAX is a non-absorbable, biocompatible material designed to control bleeding from bone surfaces by acting as a mechanical tamponade. It provides excellent malleability and ease of application due to its ultra-soft consistency. ADVAWAX minimizes inflammatory reactions and is ideal for achieving local hemostasis."
            }
          />
          <ProductDescription data={cardData2} />
          <NextGeneration />
          <UncoverCV />
        </main>
      </Layout>
      <Media greaterThan="tablet">
        <BgVideo videoSrc={"/assets/bg-videos/advapacer-advawax.mp4"} />
      </Media>
    </>
  );
};

export default advapacer;
