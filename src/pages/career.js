/* eslint-disable react-hooks/rules-of-hooks */
import Discover from "@/components/Career/Discover";
import Jobs from "@/components/Career/Jobs";
import Work from "@/components/Career/Work";
import Hero from "@/components/Career/Hero";
import Layout from "@/components/Layout";
import { fadeUp, paraAnim } from "@/components/gsapAnimations";
import { Media } from "@/components/media";
import BgVideo from "@/components/Layout/BgVideo";
import MetaData from "@/components/Metadata";
import { WebpageJsonLd } from "@/lib/json-ld";


export default function career() {
  const metadata = {
    title: "Career – Join Advanced MedTech Solutions",
    description:
      "Grow with us! Explore exciting career opportunities at Advanced MedTech Solutions and make an impact in healthcare.",
    img: "career.png",
    alt: "Career – Join Advanced MedTech Solutions",
    slug: "career",
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
          <Work />
          <Jobs />
          <Discover />
        </main>
      </Layout>
      <Media greaterThan='tablet'>
        <BgVideo videoSrc={"/assets/bg-videos/original-bg.mp4"} />
      </Media>
    </>
  );
}
