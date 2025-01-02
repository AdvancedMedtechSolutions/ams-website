/* eslint-disable react-hooks/rules-of-hooks */
import AdvastapLC2 from "@/components/Advastaplc/AdvastapLC2";
import AdvastapLC3 from "@/components/Advastaplc/AdvastapLC3";
import Closure from "@/components/Advastaplc/Closure";
import Closure2 from "@/components/Advastaplc/Closure2";
import Hero from "@/components/Advastaplc/Hero";
import LC2Carousel from "@/components/Advastaplc/LC2carousel";
import LC2Specifications from "@/components/Advastaplc/LC2Specifications";
import LC3Carousel from "@/components/Advastaplc/LC3carousel";
import LC3Specifications from "@/components/Advastaplc/LC3Specifications";
import Layout from "@/components/Layout";
import { fadeUp, paraAnim } from "@/components/gsapAnimations";
import MetaData from "@/components/Metadata";
import { WebpageJsonLd } from "@/lib/json-ld";

const advastaplc = () => {
  const metadata = {
    title: "Advastap LC – Linear Cutter Stapler",
    description:
      "Achieve superior tissue cutting and stapling precision with Advastap LC, a trusted linear cutter stapler.",
    img: "advastaplc.png",
    alt: "Advastap LC – Linear Cutter Stapler",
    slug: "endo-surgery/advastap-linear-cutter-stapler",
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
          <AdvastapLC2/>
          <Closure/>
          <LC3Carousel/>
          <LC3Specifications/>
          <AdvastapLC3/>
          <Closure2/>
          <LC2Carousel/>
          <LC2Specifications/>
        </main>
      </Layout>
    </>
  );
};

export default advastaplc;
