import React from "react";
import Image from "next/image";
import { Media } from "../media";

const Hero = ({}) => {
  return (
    <section className="hero-container dark w-screen overflow-hidden" id="hero">
    <div className="w-[100vw] h-[100vh] relative overflow-hidden tablet:h-[80vh]">
        <Media greaterThanOrEqual="tablet">

      <Image
        className="hero-img top-0 left-0 right-0 bottom-0 object-cover h-full w-full absolute object-left"
        src="/assets/oem/oem-hero-image.png"
        alt="Hero Image"
        width={1920}
        height={1080}
        priority={true}
      />
        </Media>
      <Media lessThan="tablet">

      <Image src={"/assets/oem/oem-bg-hero-mobile.png"} alt="oem-mobile-bg" fill
      />
      </Media>
      
      <h1 className="hidden">AMS OEM</h1>
    </div>
    <div className="absolute w-[40vw] h-[20vw] top-[35%] left-[10%] mobile:w-[90vw] mobile:top-[40%] mobile:left-[3%] tablet:w-[60vw] tablet:left-[7%]" >
        <Image src={"/assets/oem/oem-hero-title.png"} alt="oem-hero-title" fill className="object-contain"/>

    </div>
  </section>
  );
};

export default Hero;