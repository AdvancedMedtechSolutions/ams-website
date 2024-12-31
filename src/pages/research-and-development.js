/* eslint-disable react-hooks/rules-of-hooks */
import Genesis from "@/components/layoutComponents/Genesis";
import Hero from "@/components/Rnd/Hero";
import PortfolioSwiper from "@/components/layoutComponents/PortfolioSwiper";
import Portfolio from "@/components/Endo/Portfolio";
import Layout from "@/components/Layout";
import { Media } from "@/components/media";
import BgVideo from "@/components/Layout/BgVideo";
import { fadeUp, paraAnim } from "@/components/gsapAnimations";
import Discover from "@/components/Rnd/Discover";
import MetaData from "@/components/Metadata";
import { WebpageJsonLd } from "@/lib/json-ld";

export default function rnd() {

  fadeUp();
  paraAnim();

  const hero = {
    title: "Pioneering MedTech Research and Development",
    src: "/assets/rnd/rnd-hero-bg.png",
    content: "At AMS, we’re setting new standards in medical research and development. Our advanced R&D facility, located in the heart of a thriving innovation hub, is where science technology and groundbreaking research come together to address the most pressing health challenges of our time.",
  };

  const content = {
    heading: "Innovating for Tomorrow",
    smallpara: "Our R&D center stands as a testament to our commitment to advancing medical technology. Equipped with the latest in research and engineering tools, this facility is designed to foster collaboration among our top scientists, engineers, and healthcare innovators. Here, we are dedicated to developing solutions that push the boundaries of what's possible in medical technology.",
    bigpara: "At AMS, our R&D efforts are driven by the vision of creating transformative technologies that improve patient outcomes and enhance the quality of life worldwide.",
    src: "/assets/rnd/rnd-genesis-img.webp",
  };
  
  const slidesData = [
    {
      title: "Vision for Enhanced Care",
      src: "/assets/rnd/rnd-carousel-img-1.png",
      srcsmall: "/assets/rnd/small1.png",
      heading: "A Hub of Innovation",
      para: "We innovate in surgical and cardiovascular devices, providing clinicians with trusted, high-performance devices.",
    },
    {
      src: "/assets/rnd/rnd-carousel-img-2.png",
      srcsmall: "/assets/rnd/small2.png",
      heading: "Collaborative Innovation",
      para: "We are committed to fostering flexible and holistic partnerships with R&D innovators globally, focusing on swift development and execution in manufacturing to deliver transformative solutions directly to healthcare practitioners.",
    },
    {
      src: "/assets/rnd/rnd-carousel-img-3.png",
      srcsmall: "/assets/rnd/small3.png",
      heading: "Future of Possibility",
      para: "We are shaping the next generation of therapies that will redefine healthcare and deliver better outcomes for patients across the globe.",
    },
  ];
  const metadata = {
    title: "R&D – Innovating Healthcare Technologies",
    description:
      "Driving innovation through extensive research and development in medical technologies.",
    img: "rnd.png",
    alt: "R&D – Innovating Healthcare Technologies",
    slug: "research-and-development",
    date_published: "2020-01-01T00:00",
    date_modified: "2024-12-26T12:32",
  };
  return (
    <>
      <MetaData metadata={metadata}/>
      <WebpageJsonLd metadata={metadata}/>
      <Layout>
        <main>
          <Hero
            title={hero.title}
            src={hero.src}
            content={hero.content}
          />
          <Genesis content={content} />
          <PortfolioSwiper slidesData={slidesData} textclass={"text-[#FFFFFF]"} width={"w-[35%] tablet:w-[50%]"} />
          {/* <Innovation /> */}
          <Discover />
          <Portfolio sectionheading={"Our Advanced Portfolio"} />
        </main>
      </Layout>
      <Media greaterThan='tablet'>
        <BgVideo videoSrc={"/assets/bg-videos/endo.mp4"} />
      </Media>
    </>
  );
}
