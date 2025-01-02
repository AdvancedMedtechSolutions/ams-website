import AdvaspongSpecifications from '@/components/Advaspong/AdvaspongSpecifications'
import Hero from '@/components/Advaspong/Hero'
import Redefining from '@/components/Advaspong/Redefining'
import { paraAnim } from '@/components/gsapAnimations'
import Layout from '@/components/Layout'
import MetaData from '@/components/Metadata'
import { WebpageJsonLd } from '@/lib/json-ld'
import React from 'react'

const advaspong = () => {
  const metadata = {
    title: "Advaspong – Absorbable Hemostatic Sponge",
    description:
      "Advaspong, an absorbable sponge, controls bleeding and supports efficient surgical procedures.",
    img: "advaspong.png",
    alt: "Advaspong – Absorbable Hemostatic Sponge",
    slug: "haemostats-gelatin-sponge",
    date_published: "2020-01-01T00:00",
    date_modified: "2024-12-26T12:32",
  };
  paraAnim();
  return (
 <>
  <MetaData metadata={metadata} />
  <WebpageJsonLd metadata={metadata}/>
    <Layout>
    <main>
     <Hero/>
     <Redefining/>
   <AdvaspongSpecifications/>
    </main>
  </Layout>
  </>
  )
}

export default advaspong