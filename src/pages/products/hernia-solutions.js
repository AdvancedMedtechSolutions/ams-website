/* eslint-disable react-hooks/rules-of-hooks */
import Portfolio from "@/components/Endo/Portfolio";
import Product from "@/components/Hernia/Product";
import Genesis from "@/components/layoutComponents/Genesis";
import PortfolioSwiper from "@/components/layoutComponents/PortfolioSwiper";
import React from "react";
import Layout from "@/components/Layout";
import { fadeUp, paraAnim } from "@/components/gsapAnimations";
import { Media } from "@/components/media";
import Hero from "@/components/Hernia/Hero";
import BgVideo from "@/components/Layout/BgVideo";
import MetaData from "@/components/Metadata";
import { WebpageJsonLd } from "@/lib/json-ld";

export default function hernia() {
  const content = {
    heading: "Redefining Hernia Surgery",
    smallpara:
      "Each polypropylene mesh is meticulously crafted to deliver exceptional strength, resilience, and biocompatibility, with a strong focus on infection resistance. Our advanced solutions support seamless tissue integration, reducing recurrence rates and elevating surgical outcomes. From open to minimally invasive surgeries, including robotic-assisted techniques, we provide versatile solutions tailored to a wide range of hernia repair needs, from inguinal to ventral procedures.",
    bigpara:
      "By leveraging inhouse technologies, AMS enhances the effectiveness of every repair while prioritizing patient comfort and swift recovery. We remain committed to adapting and designing products that meet evolving surgical demands, ensuring the best possible results for both surgeons and patients.",
    src: "/assets/hernia/hernia-redefine.jpg",
  };
  const slidesData = [
    {
      title: "A Partner in Your Success ",
      src: "/assets/hernia/portfolio-1.png",
      srcsmall: "/assets/hernia/small1.png",
      heading: "<span style='color: #2a2a2a;'>Enhancing Recovery And Comfort</span>",
      para: "<span style='color: #2a2a2a;'>Our ADVAMESH portfolio is crafted to improve patient recovery by providing superior support, flexibility and encouraging natural tissue integration. ADVAMESH is engineered for better conformity and lower recurrence rates, facilitating a more comfortable and efficient healing process.</span>",
    },
    {
      src: "/assets/hernia/portfolio-2.png",
      srcsmall: "/assets/hernia/small2.png",
      heading: "Excellence In Every Detail",
      para: "At AMS, our proprietary ADVAMESH Knitting Technology exemplifies our commitment to innovation and excellence in hernia repair solutions. This advanced in-house capability enables us to engineer high-quality, precision-knit polypropylene mesh tailored to meet diverse surgical requirements.",
    },
    {
      src: "/assets/hernia/portfolio-3.png",
      srcsmall: "/assets/hernia/small3.png",
      heading: "Empowering Surgical Success",
      para: "With AMS's comprehensive range of hernia solutions, surgeons can perform repairs with greater confidence, precision, and efficiency. Our evidence-based designs and commitment to product superiority enhance the ease of surgery. These advanced tools not only streamline surgical practice but also support better outcomes, enabling surgeons to provide exceptional care and help patients get back to life faster.",
    },
  ];
  const metadata = {
    title: "Hernia Solutions – Reliable Surgical Solutions",
    description:
      "Hernia repair meshes for enhanced durability and patient safety in surgical procedures.",
    img: "hernia.png",
    alt: "Hernia Solutions – Reliable Surgical Solutions",
    slug: "products/hernia-solutions",
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
          <Hero />
          <Genesis
            content={content}
            sParaWidth={"w-[30%] ml-[5%] mobile:ml-0 tablet:ml-0"}
            bParaWidth={"w-[60%]"}
          />
          <PortfolioSwiper slidesData={slidesData} textclass={"text-[#FFFFFF]"} width={"w-[35%] tablet:w-[50%]"} />
          <Product />
          <Portfolio currentlink={"/products/hernia-solutions"} sectionheading={"Our Advanced Therapies"} />
        </main>
      </Layout>
      <Media greaterThan='tablet'>
        <BgVideo videoSrc={"/assets/bg-videos/endo.mp4"} />
      </Media>
    </>
  );
}
