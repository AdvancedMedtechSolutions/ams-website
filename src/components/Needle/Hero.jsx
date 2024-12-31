import React from "react";
import Image from "next/image";
import { paraAnim } from "../gsapAnimations";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(useGSAP, ScrollTrigger);
const Hero = () => {
  paraAnim();
  
  return (
    <section className=" hero-container" id="hero">
      <div className="w-[100vw] h-[100vh] relative overflow-hidden tablet:h-[80vh]">
        <div className="w-screen h-screen absolute tablet:h-full">
          <Image data-speed="0.7"
            className="hero-img absolute object-cover"
            src="/assets/needle/needle-hero-bg.webp"
            alt="Hero Image"
            priority={true}
            fill
          />
        </div>
        
        <div className="w-[100vw] h-screen absolute top-[-5%] right-0 z-[20] tablet:h-[50vh] tablet:z-0 mobile:hidden hero-needle">
            <Image src="/assets/needle/hero-needles.png" fill className="object-cover absolute" alt="hero-needles"/>

        </div>
        <div className="w-[100vw] h-screen top-0 left-0 absolute hidden mobile:block">
          <Image src="/assets/needle/needle-hero-bg-mobile.webp" alt="needle-hero-mobile" className="object-cover" fill/>

        </div>

        <div className="px-[12%] relative mobile:px-[5%]">
          <div className="flex h-dvh w-full flex-col justify-center items-start tablet:h-[80vh] mobile:justify-start mobile:pt-[40%]">
            <div className="">
              <h1
                data-para-anim
                className="title-1 aeonik  leading-[1.2] mobile:text-center"
              >
                <span className={`leading-[1.2] overflow-hidden text-black `}>
                The Next Generation 
                </span>
                <br />
                <span className={`leading-[1.2] overflow-hidden text-black `}>
                of Needle Technology
                </span>
              </h1>
              <h1
                className="title-1 aeonik   leading-[1] hidden mobile:block tablet:block"
              >
                <span data-para-anim className={`leading-[1.25] overflow-hidden text-[#FFFFFF] text-center tablet:text-start `}>
                  
                </span>
              </h1>
              <p className={` max-w-[50vw] mt-[3vw] mb-[4vw] content-p mobile:max-w-[100%] tablet:max-w-[50vw] mobile:my-[7vw] mobile:text-center `}>
                <span data-para-anim className={`text-black `}>
                Advanced Needle Technologies uses the finest materials and advanced production processes to develop surgical needles that embody the highest levels of quality and performance.
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
