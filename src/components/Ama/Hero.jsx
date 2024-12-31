import React from "react";
import Image from "next/image";

const Hero = ({title ,src, content }) => {
  return (
    <section className={`hero-container dark`} id="hero">
      <div className="w-[100vw] h-[100vh] relative overflow-hidden tablet:h-[80vh]">
        <div className="w-full h-full absolute tablet:h-full mobile:static mobile:h-[75vw]">
          <Image
            className="hero-img object-cover h-full w-full"
            src={src}
            alt="Hero Image"
            priority={true}
            width={1920}
            height={1080}
          />
        </div>
        <div className="px-[12%] relative mobile:px-[5%]">
          <div className="flex h-dvh w-full flex-col justify-center items-start tablet:h-[80vh] mobile:justify-start mobile:pt-[10vw]">
            <div className={`w-full mobile:w-full tablet:w-full`}>
              <h1 className={`title-1 aeonik capitalize text-shadow leading-[1] mobile:text-center mobile:text-[11vw] mobile:!drop-shadow-none`} >
                <span data-para-anim className={`leading-[1.21] overflow-hidden text-[#FFFFFF] mobile:w-full mobile:text-center mobile:text-[#111111]`}>
                 {title}
                </span>
              </h1>
              <p className={` max-w-[30vw] mt-[3vw] mb-[4vw] content-p text-shadow-para mobile:text-center  mobile:max-w-[100%] tablet:max-w-[60vw] mobile:!drop-shadow-none mobile:my-[7vw] tablet:text-[2.5vw]`}>
                <span data-para-anim className={`text-[#FFFFFF] leading-[1.4] mobile:text-[#111111]`}>
                  {content}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;