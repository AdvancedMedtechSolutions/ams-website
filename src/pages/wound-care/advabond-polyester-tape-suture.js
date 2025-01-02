/* eslint-disable react-hooks/rules-of-hooks */
import Hero from "@/components/Products/Hero";
import NextGeneration from "@/components/Products/NextGeneration";
import ProductDescription from "@/components/Products/ProductDescription";
import Uncover from "@/components/Products/Uncover";
import { fadeUp } from "@/components/gsapAnimations";
import Layout from "@/components/Layout";
import UmbilicalTape from "@/components/AdvabondTape/UmbilicalTape";
import { Media } from "@/components/media";
import BgVideo from "@/components/Layout/BgVideo";
import MetaData from "@/components/Metadata";
import { WebpageJsonLd } from "@/lib/json-ld";

const cardData1 = [
  {
    title: "Composition",
    description: "Polyester Fibre",
    svg: "/assets/advabondtape/composition.svg"
  },
  {
    title: "Colour",
    description: "White",
    svg: "/assets/advabondtape/color.svg"

  },
  {
    title: "Available Sizes",
    description: "Length 30 cm  |  Width 5 mm",
    svg: "/assets/advabondtape/sizes.svg"

  },
  {
    title: "Sterilization Method",
    description:
      "Gamma irradiation",
    svg: "/assets/advabondtape/sterilization.svg"

  },
  {
    title: "Tensile Strength",
    description: "Permanent",
    svg: "/assets/advabondtape/tensile.svg"

  },
  {
    title: "Absorption Profile",
    description: "Non Absorbable",
    svg: "/assets/advabondtape/absorption.svg"

  },
];
const cardData2 = [
  {
    title: "Composition",
    description: "100% Cotton",
    svg: "/assets/advabondtape/composition2.svg"
  },
  {
    title: "Colour",
    description: "White",
    svg: "/assets/advabondtape/color2.svg"
  },
  {
    title: "Available Sizes",
    description: "3 mm x 75 cm",
    svg: "/assets/advabondtape/sizes2.svg"
  },
  {
    title: "Construction",
    description:
      "Flat Braided, Non-Woven",
    svg: "/assets/advabondtape/construction.svg"

  },
  {
    title: "Foils/box",
    description: "12",
    svg: "/assets/advabondtape/box.svg"

  },
  {
    title: "Shelf life",
    description: "5 Years",
    svg: "/assets/advabondtape/shelf.svg"

  },
];
const bondtape = () => {
  const metadata = {
    title: "Bondtape – Surgical Skin Adhesive Tape",
    description:
      "Bondtape ensures secure wound closure with flexible adhesive tape for optimal patient comfort.",
    img: "bondtape.png",
    alt: "Bondtape – Surgical Skin Adhesive Tape",
    slug: "wound-care/advabond-polyester-tape-suture",
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
            margin={"mobile:!mt-[20vw]"}
            heading={"Advabond Tape"}
            className="text-[#F08144]"
            tagline={"Braided Polyester Tape Suture"}
            para1={
              "Non-absorbable braided polyester tape suture composed of polyethylene terephthalate "
            }
            src={"/assets/advabondtape/advabond-tape-hero.png"}
            bgimg={"/assets/advabondtape/advabond-hero-bg.png"}
            para2={"Sterilised Surgical Needled Suture"}
            overlay={"visible"}
          />
          <ProductDescription className={"text-[#F08144]"} data={cardData1} />
          <UmbilicalTape />
          <ProductDescription className={"text-[#79C0E4]"} data={cardData2} />
          <NextGeneration />
          <Uncover />
        </main>
      </Layout>
      <Media greaterThan='tablet'>
        <BgVideo videoSrc={"/assets/bg-videos/advabond.mp4"} />
      </Media>
    </>
  );
};

export default bondtape;
