/* eslint-disable react-hooks/rules-of-hooks */
import AdvastapHD3 from "@/components/Advastap/AdvastapHD3";
import AdvastapHD2 from "@/components/Advastap/AdvstapHD2";
import Hd2Carousel from "@/components/Advastap/Hd2Carousel";
import Hd3Carousel from "@/components/Advastap/Hd3Carousel";
import Hero from "@/components/Advastap/Hero";
import SpecificationsHd2 from "@/components/Advastap/SpecificationsHd2";
import SpecificationsHd3 from "@/components/Advastap/SpecificationsHd3";
import Layout from "@/components/Layout";
import MetaData from "@/components/Metadata";
import { WebpageJsonLd } from "@/lib/json-ld";
import { fadeUp, paraAnim } from "@/components/gsapAnimations";


const advastap = () => {
  fadeUp();
  paraAnim();
  const metadata = {
    title: "Advastap – Surgical Stapler for Efficient Closure",
    description:
      "Advastap provides reliable and efficient wound closure with precise surgical stapling solutions.",
    img: "advastap.png",
    alt: "Advastap – Surgical Stapler for Efficient Closure",
    slug: "endo-surgery/advastap-hemorrhoid-stapler",
    date_published: "2020-01-01T00:00",
    date_modified: "2024-12-26T12:32",
  };
  return (
    <>
     <MetaData metadata={metadata}/>
     <WebpageJsonLd metadata={metadata}/>
    
      <Layout>
        <main>
          <Hero />
          <AdvastapHD2 />
          <Hd2Carousel />
          <SpecificationsHd2 />
          <AdvastapHD3 />
          <Hd3Carousel />
          <SpecificationsHd3 paddingBottom={"!pb-[7vw]"} />
        </main>
      </Layout>
    </>
  );
};

export default advastap;
