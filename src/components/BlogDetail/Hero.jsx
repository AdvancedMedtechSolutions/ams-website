import React from "react";
import Image from "next/image";

const Hero = ({img,dark}) => {
  return (
    <section className={`hero-container ${dark}`} id="hero">
    <div className="w-[100vw] h-[100vh] relative overflow-hidden tablet:h-[80vh]">
      <div className="w-full h-full absolute tablet:h-full">
        <Image
          className="hero-img object-cover h-full w-full z-[1] brightness-90"
          src={img}
          alt="Hero Image"
          priority={true}
          width={1920}
          height={1080}
        />
      </div>
      
    </div>
  </section>
  );
};

export default Hero;