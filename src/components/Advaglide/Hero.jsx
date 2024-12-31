/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="" id="advaglideHero">
      <div className="w-screen h-screen relative overflow-hidden mobile:h-screen tablet:h-[80vh]">
        <Image
          src="/assets/advaglide/advaglide-bg.png"
          fill
          alt="advaglide-hero"
          className="object-cover absolute"
        />
        <div className="absolute top-0 right-0 bottom-0 left-0 flex justify-between items-center mobile:flex-col mobile:top-[15%] tablet:flex-col tablet:top-[22%]">
          <div className=" absolute left-[12%] mobile:left-[13%] mobile:w-[100%] tablet:left-[15%] z-[10]">
            <h1
              data-para-anim
              className="font-light text-blue-400 text-[5.3vw] aeonik  leading-[1] relative mobile:left-[1%]"
            >
              <span
                className={`leading-[1.2] overflow-hidden uppercase text-[5.75vw] mobile:text-[13.2vw] tablet:text-[9vw] text-center`}
              >
                ADVA GLIDE
              </span>
            </h1>
            {/* <div className="w-[75%] h-[1px] bg-black/50 my-[4vw] hidden mobile:block lineDraw"></div> */}
            <div className=" mobile:w-full">
              <p
                data-para-anim
                className=" text-[1.25vw] uppercase leading-[1.2] tracking-wide font-light mobile:text-[4.6vw] mobile:tracking-[0.2em] tablet:text-[3vw] tablet:tracking-widest tablet:max-w-full   mobile:text-center mobile:justify-center mobile:w-[78%]"
              >
                PTCA BALLOON CATHETER SEMI COMPLIANT
              </p>
            </div>
            <div className="flex items-center justify-start ml-[-2vw] mobile:justify-start mobile:mt-[4vw] mobile:text-center mobile:ml-[4vw] ">
              <span className="w-[4.5vw] h-[2px] bg-black rotate-90  mobile:hidden tablet:w-[8vw] fadeUp"></span>
              <p className="max-w-[25vw] ml-[-1vw] mt-[4vw] mb-[4vw] text-[1.65vw] leading-[1.2] font-light mobile:text-[4.8vw] mobile:max-w-[70%] mobile:leading-[1.2] tablet:text-[2.5vw] tablet:max-w-[55%]">
                <span data-para-anim>
                  Pioneering The Next Frontier of PTCA Technology
                </span>
              </p>
            </div>
          </div>

          <div className="w-full h-full relative left-[10%] hero-container   tablet:w-[100%]  mobile:top-[25%] tablet:top-[0%] tablet:left-[10%]">
            <div className="w-[100vw] h-[50vw]  mobile:w-[150vw] mobile:h-[150vw] mobile:left-[-40%] mobile:rotate-[110deg] relative tablet:w-[100vw] tablet:h-[100vw] fadeUp">
              <Image
                src="/assets/advaglide/advaglide-hero-element.png"
                alt="side-image"
                fill
                priority={true}
                className=" hero-img object-contain mobile:rotate-[-105deg]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
