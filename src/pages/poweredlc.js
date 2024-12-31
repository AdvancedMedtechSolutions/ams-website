import Layout from "@/components/Layout";
import Ergonomic from "@/components/PoweredLC/Ergonomic";
import Hero from "@/components/PoweredLC/Hero";
import PoweredlcSpecifications from "@/components/PoweredLC/PoweredlcSpecifications";
import SurgicalOutcomes from "@/components/SurgicalOutcomes";
import React from "react";
import { fadeUp, paraAnim } from "@/components/gsapAnimations";
import MetaData from "@/components/Metadata";
import { WebpageJsonLd } from "@/lib/json-ld";

const surgicalData = [
  {
    img: "/assets/poweredlc/surgical-card1.png",
    para: "Uniform Pressure ensures consistent staple line formation.",
    title: "Versatile Performance",
  },
  {
    img: "/assets/poweredlc/surgical-card2.png",
    para: "Fewer leaks and enhanced staple formation.",
    title: "Minimal Anastomotic Leakage",
  },
  {
    img: "/assets/poweredlc/surgical-card3.png",
    para: "Consistent results in challenging tissues.",
    title: "Decreased Recurrence Rates",
  },
  {
    img: "/assets/poweredlc/surgical-card4.png",
    para: "Reduced slippage during firing.",
    title: "Decreased Recurrence Rates",
  },
  {
    img: "/assets/poweredlc/surgical-card5.png",
    para: "Wider tapered pockets for improved capture.",
    title: "Decreased Recurrence Rates",
  },
  {
    img: "/assets/poweredlc/surgical-card6.png",
    para: "B-form stapling for greater efficiency.",
    title: "Decreased Recurrence Rates",
  },
];
const poweredlc = () => {
  const metadata = {
    title: "Powered LC – Advanced Surgical Stapler",
    description:
      "Experience enhanced control and efficiency with Powered LC, an advanced surgical stapler.",
    img: "poweredlc.png",
    alt: "Powered LC – Advanced Surgical Stapler",
    slug: "poweredlc",
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
          <Ergonomic />
          <SurgicalOutcomes data={surgicalData} tclass={"hidden"} />
          <PoweredlcSpecifications />
        </main>
      </Layout>
    </>
  );
};

export default poweredlc;
