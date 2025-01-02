/* eslint-disable react-hooks/rules-of-hooks */
import AdvakitSpecifications from "@/components/Advakit/AdvakitSpecifications";
import Hernia from "@/components/Advakit/Hernia";
import Hero from "@/components/Advakit/Hero";
import Ortho from "@/components/Advakit/Ortho";
import Layout from "@/components/Layout";
import MetaData from "@/components/Metadata";
import { fadeUp, paraAnim } from "@/components/gsapAnimations";
import { WebpageJsonLd } from "@/lib/json-ld";

const advakit = () => {
  const metadata = {
    title: "Advakit – Comprehensive Surgical Kit",
    description:
      "Advakit provides a complete set of tools for efficient and precise surgical procedures.",
    img: "advakit.png",
    alt: "Advakit – Comprehensive Surgical Kit",
    slug: "wound-care/surgical-kits",
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
          <AdvakitSpecifications
            textclass={"reloads-text"}
            bgimg={"/assets/endolc/specifications-bg.png"}
            heading={"Specification"}
            color={"#FB4BCC"}
            link={"/infographics/advakit-csection.pdf"}
          />
          <Ortho />
         <AdvakitSpecifications
           textclass={"reloads-text"}
           bgimg={"/assets/endolc/specifications-bg.png"}
           heading={"Specification"}
           color={"#FB4BCC"}
           link={"/infographics/advakit-ortho.pdf"}/>
          <Hernia />
          <AdvakitSpecifications
            textclass={"reloads-text"}
            bgimg={"/assets/endolc/specifications-bg.png"}
            heading={"Specification"}
            color={"#FB4BCC"}
            link={"/infographics/advakit-hernia.pdf"}
          />
        </main>
      </Layout>
    </>
  );
};

export default advakit;
