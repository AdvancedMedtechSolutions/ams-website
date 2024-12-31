/* eslint-disable react-hooks/rules-of-hooks */
import Connecting from '@/components/About/Connecting'
import DNA from '@/components/About/DNA'
import Hero from '@/components/About/Hero'
import Molecular from '@/components/About/Molecular'
import Genesis from '@/components/layoutComponents/Genesis'
import Layout from '@/components/Layout'
import { fadeUp, paraAnim } from '@/components/gsapAnimations'
import { Media } from '@/components/media'
import Leadership from '@/components/About/Leadership'
import BgVideo from '@/components/Layout/BgVideo'
import MetaData from '@/components/Metadata'
import { WebpageJsonLd } from '@/lib/json-ld'

export default function about() {

  const content = {
    heading: "Our Genesis",
    smallpara: "At AMS, each decision is guided by empathy and a passionate pursuit of medical advancements, ensuring that our contributions resonate with compassion and integrity. Our journey is defined by a steadfast commitment to pushing the boundaries of what's possible in healthcare, driven by the belief that every innovation has the potential to shape a brighter, healthier future for all.",
    bigpara: "The desire to make a difference in patients' lives led to the creation of Advanced MedTech Solutions. Our relentless pursuit of excellence drives us to transform patient care worldwide.",
    src: "/assets/about/genesis.png"
  }
  const metadata = {
    title: "About Us – Advanced MedTech Solutions",
    description: "Learn about Advanced MedTech Solutions mission to make quality healthcare affordable and accessible globally.",
    img: "about.png",
    alt:"About Us – Advanced MedTech Solutions",
    slug: "about",
    date_published: "2020-01-01T00:00",
    date_modified: "2024-12-26T12:32",
  }

  fadeUp();
  paraAnim();

  return (
    <>
   <MetaData metadata={metadata}/>
   <WebpageJsonLd metadata={metadata}/>
      <Layout>
        <main>
          <Hero />
          <Genesis content={content} />
          <DNA />
          <Leadership />
          <Molecular />
          <Connecting />
        </main>
      </Layout>
      <Media greaterThan='tablet'>
        <BgVideo videoSrc={"/assets/bg-videos/original-bg.mp4"} />
      </Media>
    </>
  )
}
