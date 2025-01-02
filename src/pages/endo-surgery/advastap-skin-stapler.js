import Layout from "@/components/Layout";
import Carousel from "@/components/SkinStapler/Carousel";
import Closure from "@/components/SkinStapler/Closure";
import Hero from "@/components/SkinStapler/Hero";
import SkinStaplerSpecification from "@/components/SkinStapler/SkinStaplerSpecification";
import Think from "@/components/SkinStapler/Think";
import React from "react";
import { fadeUp, paraAnim } from "@/components/gsapAnimations";
import MetaData from "@/components/Metadata";
import { WebpageJsonLd } from "@/lib/json-ld";

const skinstapler = () => {
  const metadata = {
    title: "Skin Stapler – Quick and Secure Skin Closure",
    description:
      "Ensure fast and effective skin closure with our high-performance surgical skin stapler.",
    img: "skinstapler.png",
    alt: "Skin Stapler – Quick and Secure Skin Closure",
    slug: "endo-surgery/advastap-skin-stapler",
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
          <Think />
          <Closure />
          <Carousel />
          <SkinStaplerSpecification />
        </main>
      </Layout>
    </>
  );
};

export default skinstapler;
