/* eslint-disable react-hooks/rules-of-hooks */
import Portfolio from "@/components/Endo/Portfolio";
import Product from "@/components/Endo/Product";
import Genesis from "@/components/layoutComponents/Genesis";
import PortfolioSwiper from "@/components/layoutComponents/PortfolioSwiper";
import Layout from "@/components/Layout";
import { fadeUp, paraAnim } from "@/components/gsapAnimations";
import { Media } from "@/components/media";
import Hero from "@/components/Endo/Hero";
import OtherProduct from "@/components/Endo/OtherProducts";
import BgVideo from "@/components/Layout/BgVideo";
import MetaData from "@/components/Metadata";
import { WebpageJsonLd } from "@/lib/json-ld";

export default function endo() {
  const content = {
    heading: "Redefining Endo Surgery",
    smallpara:
      "At AMS, we bring a new standard to endo surgery by addressing the unique demands of modern surgical practices. Our innovative product line of Surgical Stapling and Ligation Solutions are designed to ensure precision across a wide range of procedures. With a focus on ease of use, even in challenging anatomy, our technology empowers surgeons to confidently tackle complex procedures. We’re transforming surgical outcomes and advancing the future of minimally invasive and open surgeries.",
    bigpara:
      "Engineered to ensure precise, secure, and consistent performance, with integrated safety mechanisms to minimize risk. Surgeons can rely on our solutions to perform with confidence, ensuring every procedure is completed smoothly and without complications.",
    src: "/assets/endo/endo-redefine.png",
  };

  const slidesData = [
    {
      title: "Your Partner in Surgical Excellence",
      src: "/assets/endo/endo-slider-1.png",
      srcsmall: "/assets/endo/small1.png",
      heading: "The Future of Minimally Invasive Surgery",
      para: "With the ADVASTAP Series and ADVACLIP Technologies, AMS leads the way in delivering innovative stapling and ligation solutions that ensure uncompromising quality and precision to meet the demands of modern surgical procedures. Our unique 3-row stapler range, crafted with insight-driven design, sets a new benchmark in surgical care, empowering surgeons to perform at their best. We are redefining the possibilities of minimally invasive procedures",
    },
    {
      src: "/assets/endo/endo-slider-2.png",
      srcsmall: "/assets/endo/small2.png",
      heading: "Accelerating Optimal Outcomes",
      para: "At AMS, we are dedicated to providing surgical staplers designed to increase efficiency in the operating room and reduce complications. Our solutions aim to promote swift healing and long-term success.",
    },
    {
      src: "/assets/endo/endo-slider-3.png",
      srcsmall: "/assets/endo/small3.png",
      heading: "Why Surgeons Trust AMS",
      para: "From our forward-thinking design to their ability to handle the most complex surgical challenges, our staplers offer unparalleled performance and reliability. Designed for both efficiency and safety, ADVASTAP Series is the ultimate choice for advanced surgical procedures, setting new industry standards.",
    },
  ];
  const metadata = {
    title: "Endo Surgery – Minimally Invasive Devices",
    description:
      "Advanced endoscopic solutions for precise and minimally invasive medical procedures.",
    img: "endo.png",
    alt: "Endo Surgery – Minimally Invasive Devices",
    slug: "products/endo-surgery",
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
          <Genesis
            content={content}
            sParaWidth={"w-[30%] ml-[5%] mobile:ml-0 tablet:ml-0"}
            bParaWidth={"w-[55%]"}
          />
          <PortfolioSwiper
            slidesData={slidesData}
            textclass={"text-[#FFFFFF]"}
            width={"w-[35%] tablet:w-[50%]"}
          />
          <Product />
          <OtherProduct />
          <Portfolio
            currentlink={"/endo"}
            sectionheading={"Our Advanced Therapies"}
          />
        </main>
      </Layout>
      <Media greaterThan="tablet">
        <BgVideo videoSrc={"/assets/bg-videos/endo.mp4"} />
      </Media>
    </>
  );
}
