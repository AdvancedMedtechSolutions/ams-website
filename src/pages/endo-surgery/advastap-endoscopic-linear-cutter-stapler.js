import EndolcSpecifications from '@/components/Endolc/EndolcSpecifications'
import Hero from '@/components/Endolc/Hero'
import Precision from '@/components/Endolc/Precision'
import Stapling from '@/components/Endolc/Stapling'
import Layout from '@/components/Layout'
import React from 'react'
import { fadeUp, paraAnim } from '@/components/gsapAnimations'
import MetaData from '@/components/Metadata'
import { WebpageJsonLd } from '@/lib/json-ld'

const endolc = () => {
  const metadata = {
    title: "Endo LC – Endoscopic Linear Cutter Stapler",
    description:
      "Endo LC delivers exceptional precision and ease for minimally invasive surgical stapling.",
    img: "endolc.png",
    alt: "Endo LC – Endoscopic Linear Cutter Stapler",
    slug: "endo-surgery/advastap-endoscopic-linear-cutter-stapler",
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
              <Precision/>
              <Stapling/>
              <EndolcSpecifications/>
            </main>
          </Layout>
       
   </>
  )
}

export default endolc