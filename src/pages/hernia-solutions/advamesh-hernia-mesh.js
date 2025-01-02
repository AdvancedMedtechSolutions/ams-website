/* eslint-disable react-hooks/rules-of-hooks */
import Hero from "@/components/Advamesh/Hero";
import Macroporous from "@/components/Advamesh/Macroporous";
import MacroporousSpecifications from "@/components/Advamesh/MacroporousSpecifications";
import MidWeight from "@/components/Advamesh/MidWeight";
import MidWeightSpecifications from "@/components/Advamesh/MidWeightSpecifications";
import Polypropylene from "@/components/Advamesh/Polypropylene";
import PolypropyleneSpecifications from "@/components/Advamesh/PolypropyleneSpecifications";
import Layout from "@/components/Layout";
import MetaData from "@/components/Metadata";
import { fadeUp, paraAnim } from "@/components/gsapAnimations";
import { WebpageJsonLd } from "@/lib/json-ld";


const advamesh = () => {
  const metadata = {
    title: "Advamesh – Surgical Mesh for Hernia Repair",
    description:
      "Advamesh provides durable and flexible solutions for effective hernia repair and tissue support.",
    img: "advamesh.png",
    alt: "Advamesh – Surgical Mesh for Hernia Repair",
    slug: "hernia-solutions/advamesh-hernia-mesh",
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
          <Macroporous />
          <MacroporousSpecifications />
          <MidWeight />
          <MidWeightSpecifications />
          <Polypropylene />
          <PolypropyleneSpecifications />
        </main>
      </Layout>
    </>
  );
};

export default advamesh;
