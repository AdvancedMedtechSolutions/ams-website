/* eslint-disable react-hooks/rules-of-hooks */
import Layout from "@/components/Layout";
import Hero from "@/components/Advapro/Hero";
import Performance from "@/components/Advapro/Performance";
import SurgicalOutcomes from "@/components/Advapro/SurgicalOutcomes";
import AdvaproSpecifications from "@/components/Advapro/AdvaproSpecifications";
import { fadeUp, paraAnim } from "@/components/gsapAnimations";
import MetaData from "@/components/Metadata";
import { WebpageJsonLd } from "@/lib/json-ld";

const advapro = () => {
  const metadata = {
    title: "Advapro – Monofilament Polypropylene Mesh",
    description:
      "Advapro delivers reliable and strong polypropylene mesh for hernia repair and surgical support.",
    img: "advapro.png",
    alt: "Advapro – Monofilament Polypropylene Mesh",
    slug: "interventional-cardiology/adva-pro-coronary-sirolimus-stent",
    date_published: "2020-01-01T00:00",
    date_modified: "2024-12-26T12:32",
  };
  paraAnim();
  fadeUp();
  return (
    <>
     <MetaData metadata={metadata}/>
     <WebpageJsonLd metadata={metadata}/>
      <Layout>
        <main>
          <Hero />
          <Performance />
          <SurgicalOutcomes />
          <AdvaproSpecifications />
        </main>
      </Layout>
    </>
  );
};

export default advapro;
