import Hemostasis from "@/components/Accessories/Hemostasis";
import Hero from "@/components/Accessories/Hero";
import Inflation from "@/components/Accessories/Inflation";
import Manifold from "@/components/Accessories/Manifold";
import SpecificationsHemostasis from "@/components/Accessories/SpecificationsHemostasis";
import SpecificationsInflation from "@/components/Accessories/SpecificationsInflation";
import SpecificationsManifold from "@/components/Accessories/SpecificationsManifold";
import Layout from "@/components/Layout";
import React from "react";
import { fadeUp, paraAnim } from "@/components/gsapAnimations";
import MetaData from "@/components/Metadata";
import { WebpageJsonLd } from "@/lib/json-ld";

const accessories = () => {
  const metadata = {
    title: "Accessories – Supporting Surgical Solutions",
    description: "Explore essential surgical accessories designed to enhance precision and efficiency during procedures.",
    img: "accessories.png",
    alt:"Accessories – Supporting Surgical Solutions",
    slug: "interventional-cardiology/coronary-accessories",
    date_published: "2020-01-01T00:00",
    date_modified: "2024-12-26T12:32",
  }

  fadeUp();
  paraAnim();
  return (
    <>
    <MetaData metadata={metadata}/>
    <WebpageJsonLd metadata={metadata}/>
      <Layout>
        <main>
          <Hero />
          <Inflation />
          <SpecificationsInflation />
          <Hemostasis />
          <SpecificationsHemostasis />
          <Manifold />
          <SpecificationsManifold />
        </main>
      </Layout>
    </>
  );
};

export default accessories;
