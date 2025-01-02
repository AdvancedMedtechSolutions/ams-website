import Career from "@/components/Home/Career";
import Facility from "@/components/Home/Facility";
import Hero from "@/components/Home/Hero";
import Impact from "@/components/Home/Impact";
import dynamic from "next/dynamic";
import Layout from "@/components/Layout";
import { Media } from "@/components/media";
import BgVideo from "@/components/Layout/BgVideo";
import { fadeUp, paraAnim } from "@/components/gsapAnimations";
import MetaData from "@/components/Metadata";
import { WebpageJsonLd } from "@/lib/json-ld";

const Product = dynamic(() => import("@/components/Home/Product"), {
  loading: () => <p>Loading products...</p>
});

const Blog = dynamic(() => import("@/components/Home/Blog"), {
  loading: () => <p>Loading blog...</p>
});

export default function Home() {
  const metadata = {
    title: "Home - Advanced MedTech Solutions",
    description: "Transforming global healthcare with advanced, affordable medical solutions. Explore our innovative product range.",
    img: "homepage.png",
    alt:"Home - Advanced MedTech Solutions",
    slug: "",
    date_published: "2020-01-01T00:00",
    date_modified: "2024-12-26T12:32",
  }
  fadeUp();
  paraAnim();

  return (
    <>
   <MetaData metadata={metadata} />
   <WebpageJsonLd metadata={metadata}/>
      <Layout>
        <main>
          <Hero />
          <Product />
          <Impact />
          <Career />
          <Blog />
          <Facility />
        </main>
      </Layout>
      <Media greaterThan='tablet'>
        <BgVideo videoSrc={"/assets/bg-videos/original-bg.mp4"} />
      </Media>
    </>
  );
}
