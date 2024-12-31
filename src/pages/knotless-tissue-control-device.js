/* eslint-disable react-hooks/rules-of-hooks */
import Edge2 from "@/components/Products/Edge2";
import NextGeneration from "@/components/Products/NextGeneration";
import Layout from "@/components/Layout";
import Hero from "@/components/Advagrip/Hero";
import TricCut from "@/components/Advagrip/TricCut";
import KeyFeatures from "@/components/Advagrip/KeyFeatures";
import Paradigm from "@/components/Advagrip/Paradigm";
import { Media } from "@/components/media";
import BgVideo from "@/components/Layout/BgVideo";
import { fadeUp } from "@/components/gsapAnimations";
import MetaData from "@/components/Metadata";
import { WebpageJsonLd } from "@/lib/json-ld";

const EdgeCard = {
  card1: {
    title: "Angled Trim",
    src: "/assets/advagrip/advagrip-edge-left.png",
    para: "",
  },
  card2: {
    title: "Superior Holding Strength",
    src: "/assets/advagrip/advagrip-edge-center.png",
  },
  card3: {
    title: "Closer Barb Spacing",
    src: "/assets/advagrip/advagrip-edge-right.png",
    para: "18 barbs/ cm",
  },
};
const FeatureCard = {
  card1: {
    src: "/assets/advagrip/advagrip-feature-1.png",
    title: "Secured wound closure,faster than conventional suture.",
  },
  card2: {
    src: "/assets/advagrip/advagrip-feature-2.png",
    title: "Unidirectional barbs with circumferential distribution.",
  },
  card3: {
    src: "/assets/advagrip/advagrip-feature-3.png",
    title: "Maintains consistent tension across the wound.",
  },

};

const advaGrip = () => {
  const metadata = {
    title: "Knotless Tissue Control Device – Advanced Wound Closure",
    description:
      "Achieve precision and efficiency with our knotless tissue control device for seamless wound management.",
    img: "knotless-tissue.png",
    alt: "Knotless Tissue Control Device – Advanced Wound Closure",
    slug: "knotless-tissue-control-device",
    date_published: "2020-01-01T00:00",
    date_modified: "2024-12-26T12:32",
  };
  fadeUp()
  return (
    <>
   <MetaData metadata={metadata}/>
   <WebpageJsonLd metadata={metadata} />
      <Layout>
        <main>
          <Hero />
          <TricCut />
          <Edge2 visibility={"!hidden"}
            className={"hidden"}
            sectionheading={"The ADVAGRIP Edge"}
            card1={EdgeCard.card1}
            card2={EdgeCard.card2}
            card3={EdgeCard.card3}
          />
          <KeyFeatures
            card1={FeatureCard.card1}
            card2={FeatureCard.card2}
            card3={FeatureCard.card3}

          />
          <Paradigm />

          <NextGeneration />
        </main>
      </Layout>
      <Media greaterThan='tablet'>
        <BgVideo videoSrc={"/assets/bg-videos/knotless.mp4"} />
      </Media>
    </>
  );
};

export default advaGrip;
