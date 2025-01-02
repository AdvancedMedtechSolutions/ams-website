/* eslint-disable react-hooks/rules-of-hooks */
import Genesis from "@/components/layoutComponents/Genesis";
import Offerings from "@/components/Oem/Offerings";
import FormOem from "@/components/Oem/FormOem";
import Layout from "@/components/Layout";
import { fadeUp, paraAnim } from "@/components/gsapAnimations";
import { Media } from "@/components/media";
import BgVideo from "@/components/Layout/BgVideo";
import Hero from "@/components/Oem/Hero";
import MetaData from "@/components/Metadata";
import { WebpageJsonLd } from "@/lib/json-ld";

export default function oem() {

  const content = {
    heading: "Trust Has a New Name",
    smallpara: "With a comprehensive range of services, we guarantee excellence at every step, regardless of the scale or complexity of your project. We understand that entering the market is a multifaceted journey, requiring meticulous planning, design, and compliance. From innovative product development and precision manufacturing to rigorous quality assurance and regulatory adherence, AMS is committed to turning your vision into reality.",
    bigpara: "AMS OEM features a dedicated team specializing in R&D and engineering, delivering medical device solutions tailored to OEM needs with unparalleled expertise. Our focus on performance, flexibility, and reliability drives innovation in medical technology.",
    src: "/assets/oem/oem-genesis-bg.png",
  };
  const metadata = {
    title: "OEM – Custom Medical Solutions",
    description:
      "Partner with us for custom OEM solutions designed to meet unique healthcare needs.",
    img: "oem.png",
    alt: "OEM – Custom Medical Solutions",
    slug: "products/oem",
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
          <Hero/>
          
          <Genesis content={content} />
          <Offerings />
          <FormOem />
        </main>
      </Layout>
      <Media greaterThan='tablet'>
        <BgVideo videoSrc={"/assets/bg-videos/endo.mp4"} />
      </Media>
    </>
  );
}
