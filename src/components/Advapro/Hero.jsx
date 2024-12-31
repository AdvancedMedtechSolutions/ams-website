/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import Image from "next/image";
const Hero = () => {
  return (
    <section
      className="w-screen h-screen relative overflow-hidden tablet:h-[80vh] "
      id="advaproHero"
    >
      <div className="w-full h-full mobile:h-screen ">
        <div className="absolute top-0 right-0 bottom-0 left-0 flex justify-between items-center mobile:flex-col mobile:top-[18%] mobile:left-[-5%] tablet:flex-col tablet:top-[22%] z-[10]">
          <div className=" absolute left-[12%] mobile:left-[13%] mobile:w-[100%] tablet:left-[15%]">
            <h1 data-para-anim className="text-[#38C5FF]  aeonik  leading-[1] hero-text font-light mobile:ml-[8%] ">
              <span
                className={`leading-[1.2] overflow-hidden uppercase text-[5.75vw] mobile:text-[13.2vw] tablet:text-[9vw] `}
              >
                ADVA PRO
              </span>
            </h1>
            <div className="w-[80%] h-[1px] bg-black/50 my-[5vw] hidden mobile:block lineDraw"></div>
            <div className="flex items-center mt-[0.2vw] tablet:mt-[1vw]">
              <p
                data-para-anim
                className=" text-[1.25vw] uppercase font-light text-[#1A1A1A] leading-[1.2] tracking-wide mobile:text-[4.6vw] mobile:tracking-widest  mobile:w-[80%] tablet:text-[2.5vw] tablet:tracking-widest tablet:max-w-full  mobile:text-center mobile:justify-center"
              >
                Sirolimus Eluting Coronary Stent System
              </p>
            </div>
          </div>

          <div className="w-[60%] h-[80%] absolute right-0 bottom-0 hero-container tablet:w-[100%]  mobile:top-[48%]  tablet:left-[12%]">
            <div className="w-full h-[50vw]  mobile:w-[100vw] mobile:h-[110vw] mobile:left-[-50%] relative tablet:w-[100vw] tablet:h-[80vw]">
              <Image
                src="/assets/advapro/advapro-hero.png"
                alt="advapro-hero-image"
                fill
                className=" hero-img object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-[100%] w-[100%] top-0 right-0 mobile:w-screen mobile:h-screen mobile:right-0 z-[1]">
        <Image
          src="/assets/advapro/advapro-bg-hero.png"
          fill
          priority={true}
          alt="advapro Hero bg"
          className="object-cover "
        />
      </div>
      
    </section>
  );
};

export default Hero;
