import ContactDetail from '@/components/Contact/ContactDetail';
import ContactList from '@/components/Contact/ContactList';
import Hero from '@/components/Contact/Hero';
import Locations from '@/components/Contact/Locations';
import { fadeUp, paraAnim } from '@/components/gsapAnimations';
import Layout from '@/components/Layout'
import BgVideo from '@/components/Layout/BgVideo';
import { Media } from '@/components/media';
import MetaData from '@/components/Metadata';
import { WebpageJsonLd } from '@/lib/json-ld';
import React from 'react'

const contact = () => {
  const metadata = {
    title: "Contact Us - Advanced MedTech Solutions",
    description:
      "Reach out to Advanced MedTech Solutions for inquiries, support, or collaborations. We are here to assist.",
    img: "contact-us.png",
    alt: "Contact Us - Advanced MedTech Solutions",
    slug: "contact-us",
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
          <ContactDetail />
          <ContactList />
          <Locations />
        </main>
      </Layout>
      <Media greaterThan='tablet'>
        <BgVideo videoSrc={"/assets/bg-videos/original-bg.mp4"} />
      </Media>
    </>
  )
}

export default contact
