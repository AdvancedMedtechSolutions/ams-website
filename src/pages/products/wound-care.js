import Portfolio from "@/components/Endo/Portfolio";
import Layout from "@/components/Layout";
import BgVideo from "@/components/Layout/BgVideo";
import Genesis from "@/components/layoutComponents/Genesis";
import { Media } from "@/components/media";
import MetaData from "@/components/Metadata";
import Hero from "@/components/Woundclosure/Hero";
import SutureCarouselFirst from "@/components/Woundclosure/SutureCarouselFirst";
import SutureCarouselSecond from "@/components/Woundclosure/SutureCarouselSecond";
import { WebpageJsonLd } from "@/lib/json-ld";
import React from "react";

const woundClosure = () => {
  const metadata = {
    title: "Wound Care – Advanced Healing Solutions",
    description:
      "Explore wound care products designed to support effective healing and patient comfort.",
    img: "wound-care.png",
    alt: "Wound Care – Advanced Healing Solutions",
    slug: "products/wound-care",
    date_published: "2020-01-01T00:00",
    date_modified: "2024-12-26T12:32",
  };
  const content = {
    heading: "Seal of Confidence",
    smallpara:
      "Every surgery delivers a life changing impact for patients. Towards that purpose, our advanced surgical sutures are designed to offer unmatched precision, unparalleled strength and optimal efficiency. Poised to redefine the way surgery is done, our suture range maintains the integrity of closure with absolute strength retention while minimizing the risk of infection and tissue trauma. Developed at our state of art facility, Advanced MedTech Solutions suture range helps you achieve optimal patient outcomes by delivering consistent product performance pass after pass.",
    bigpara:
      "Our extensive portfolio of sutures includes products for a wide spectrum of general and specialized surgeries.",
    src: "/assets/woundclosure/wound-closure-genesis-bg.png",
  };
  return (
    <>
     <MetaData metadata={metadata}/>
     <WebpageJsonLd metadata={metadata}/>
      <Layout>
        <main>
          <Hero/>
          <Genesis
            content={content}
            sParaWidth={"w-[50%] ml-[5%] mobile:ml-0 tablet:ml-0"}
            bParaWidth={"w-[30%]"}
          />
          <SutureCarouselFirst />
          <SutureCarouselSecond />
          <Portfolio currentlink={"/products/wound-care"} sectionheading={"Our Advanced Portfolio"}/>
        </main>
      </Layout>
      <Media greaterThan='tablet'>
        <BgVideo videoSrc={"/assets/bg-videos/original-bg.mp4"} />
      </Media>
    </>
  );
};

export default woundClosure;
