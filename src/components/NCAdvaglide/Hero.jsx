/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="" id="advaglideHero">
      <div className="w-screen h-screen relative overflow-hidden mobile:h-screen tablet:h-[80vh]">
        <Image
          src="/assets/nc-advaglide/nc-advaglide-hero-bg.png"
          fill
          alt="advaglide-hero"
          className="object-cover absolute"
        />
        <div className="absolute top-0 right-0 bottom-0 left-0 flex justify-between items-center mobile:flex-col mobile:top-[15%] tablet:flex-col tablet:top-[22%]">
          <div className=" absolute left-[12%] mobile:left-[0%] mobile:w-[100%] tablet:left-[15%] z-[10]">
            <h1
              data-para-anim
              className="font-light  text-[5.3vw] aeonik  leading-[1] relative mobile:left-[1%] flex justify-center items-center gap-[1vw]"
            >
                <span  className={`leading-[1.2] mr-[1vw] overflow-hidden uppercase text-[5.75vw] mobile:text-[13.2vw] tablet:text-[9vw] text-center text-[#FDD700] `}>
                    NC
                </span>
              <span
                className={`leading-[1.2] overflow-hidden uppercase text-[5.75vw] mobile:text-[13.2vw] tablet:text-[9vw] text-center text-[#2B3A8A]`}
              >
                ADVA GLIDE
              </span>
            </h1>
            {/* <div className="w-[75%] h-[1px] bg-black/50 my-[4vw] hidden mobile:block lineDraw mobile:ml-[10vw]"></div> */}
            <div className=" mobile:w-full mobile:ml-[10vw]">
              <p
                data-para-anim
                className=" text-[1.25vw] uppercase leading-[1.2] tracking-wide font-light mobile:text-[4.6vw] mobile:tracking-[0.2em] tablet:text-[3vw] tablet:tracking-widest tablet:max-w-full   mobile:text-center mobile:justify-center mobile:w-[78%]"
              >
                PTCA BALLOON CATHETER NON COMPLIANT
              </p>
            </div>
            <div className="flex items-center justify-start ml-[-2vw] mobile:justify-start mobile:mt-[4vw] mobile:text-center mobile:ml-[15vw] mobile:w-full">
              <span className="w-[4.5vw] h-[2px] bg-black rotate-90  mobile:hidden tablet:w-[8vw] fadeUp"></span>
              <p className="max-w-[25vw] ml-[-1vw] mt-[4vw] mb-[4vw] text-[1.65vw] leading-[1.2] font-light mobile:text-[4.8vw] mobile:max-w-[70%] mobile:leading-[1.2] tablet:text-[2.5vw] tablet:max-w-[55%]">
                <span data-para-anim>
                Pioneering The Next Frontier of PTCA Technology
                </span>
              </p>
            </div>
          </div>

          <div className="w-full h-full relative left-[35%] right:auto top-[22%] hero-container  tablet:w-[100%]  mobile:top-[25%] tablet:top-[30%] tablet:left-[0%]">
            <div className="w-[80vw] h-[45vw]  mobile:w-[150vw] mobile:h-[150vw] mobile:left-[-60%]  relative tablet:w-[100vw] tablet:h-[80vw] fadeUp">
              <Image
                src="/assets/nc-advaglide/nc-advaglide-hero.png"
                alt="side-image"
                fill
                priority={true}
                className=" hero-img object-contain mobile:scale-[0.8]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
