import Layout from "@/components/Layout";
import AdvaclipCarousel from "@/components/LigationSolutions/AdvaclipCarousel";
import Hero from "@/components/LigationSolutions/Hero";
import Security from "@/components/LigationSolutions/Security";
import Unique from "@/components/LigationSolutions/Unique";
import React from "react";
import { paraAnim, fadeUp } from "@/components/gsapAnimations";
import MetaData from "@/components/Metadata";
import { WebpageJsonLd } from "@/lib/json-ld";
import LigationSpecifications from "@/components/LigationSolutions/LigationSpecification";

const ligationSolutions = () => {
  const metadata = {
    title: "Ligation Solutions – Surgical Clip Systems",
    description:
      "Discover secure and efficient ligation solutions with our advanced surgical clip systems.",
    img: "ligation-solutions.png",
    alt: "Ligation Solutions – Surgical Clip Systems",
    slug: "ligation-solutions/advaclip-ligation-clips",
    date_published: "2020-01-01T00:00",
    date_modified: "2024-12-26T12:32",
  };
  paraAnim();
  fadeUp();
  return (
    <>
      <MetaData metadata={metadata} />
      <WebpageJsonLd metadata={metadata} />
      <Layout>
        <main>
          <Hero />
          <Unique />
          <Security />
          <AdvaclipCarousel />
          <LigationSpecifications
            textclass={"reloads-text"}
            bgimg={"/assets/endolc/specifications-bg.png"}
            heading={"Specification"}
            color={"#FB4BCC"}
            link={"/infographics/ligation-advaclip.pdf"}
          />
        </main>
      </Layout>
    </>
  );
};

export default ligationSolutions;
