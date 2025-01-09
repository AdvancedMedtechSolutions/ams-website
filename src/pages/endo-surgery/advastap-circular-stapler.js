import Ergonomic from '@/components/AdvastapCS/Ergonomic'
import Hero from '@/components/AdvastapCS/Hero'
import Specifications from '@/components/AdvastapCS/AdvastapSpecifications'
import Layout from '@/components/Layout'
import SurgicalOutcomes from '@/components/SurgicalOutcomes'
import React from 'react'
import { fadeUp, paraAnim } from '@/components/gsapAnimations'
import MetaData from '@/components/Metadata'
import { WebpageJsonLd } from '@/lib/json-ld'

const surgicalData = [
  {
    img: "/assets/advastapcs/surgical-card1.png",
    para: "Promotes effective blood flow & tissue healing.",
    title: "Consistent Perfusion Across Staple Lines"
  },
  {
    img: "/assets/advastapcs/surgical-card2.png",
    para: "Adapts to a broad range of tissue thicknesses.",
    title: "Versatile Performance"
  },
  {
    img: "/assets/advastapcs/surgical-card3.png",
    para: "Minimal Leakage , fewer complications.",
    title: "Uniform Compression Strong Anastomosis"
  },
  {
    img: "/assets/advastapcs/surgical-card4.png",
    para: "Ensures long-term surgical success.",
    title: "Superior Hemostatic Effect"
  },

];
const advastapcs = () => {
  const metadata = {
    title: "Advastap CS – Circular Stapler for Gastrointestinal Use",
    description:
      "Advastap CS offers advanced circular stapling for reliable anastomosis in gastrointestinal surgeries.",
    img: "advastapcs.png",
    alt: "Advastap CS – Circular Stapler for Gastrointestinal Use",
    slug: "endo-surgery/advastap-circular-stapler",
    date_published: "2020-01-01T00:00",
    date_modified: "2024-12-26T12:32",
  };
  fadeUp();
  paraAnim();
  return (
    <>
      <MetaData metadata={metadata} />
      <WebpageJsonLd metadata={metadata} />
      <Layout>
        <main>
          <Hero />
          <Ergonomic />
          <SurgicalOutcomes data={surgicalData} tclass={""} />
          <Specifications />
        </main>
      </Layout>
    </>
  )
}

export default advastapcs;