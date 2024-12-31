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
    <section className=" hero-container dark" id="hero">
      <div className="w-[100vw] h-[100vh] relative overflow-hidden tablet:h-[80vh] mobile:h-screen">
        <div className="w-screen h-screen absolute tablet:h-[80vh]">
          <Image
            data-speed="0.7"
            className="hero-img absolute object-cover"
            src="/assets/advagrip/advagrip-hero.png"
            alt="Hero Image"
            priority={true}
            fill
          />
        </div>
        
        <div className="w-[100vw] h-screen absolute top-[10%] right-[-20%] z-[20] tablet:h-[80vh] tablet:top-[20%] tablet:z-0 hero-needle mobile:h-[200vw] mobile:w-[250vw] mobile:z-[0] mobile:right-[-50%] mobile:top-[25%] mobile:scale-[0.78] ">
          <Image
            src="/assets/advagrip/advagrip-needle.png"
            fill
            className="object-contain rotate-[20deg] absolute fadeUp"
            alt="hero-needles"
          />
        </div>
        

        <div className="px-[12%] relative mobile:px-[5%]">
          <div className="flex h-dvh w-full flex-col  mt-[12vw] items-start tablet:h-[80vh] mobile:items-center mobile:mt-[30vw] tablet:mt-[25vw]">
            <div className=" mobile:flex mobile:flex-col mobile:items-center ">
              <h1
                
                className="text-[5.5vw] title-1  aeonik uppercase  leading-[1.25] mobile:text-center tablet:text-[9vw] fadeUp mobile:text-[15vw]"
              >
                <span className={`leading-[1.2] overflow-hidden grip-gradient text-white`}>
                  ADVAGRIP
                </span>
              </h1>
             
              <p
                className={` w-[50vw] mb-[4vw] tablet:max-w-[50vw] mobile:w-[80vw] mobile:my-[7vw] mobile:mb-[2vw] mobile:text-center `}
              >
                <span
                  data-para-anim
                  className={`text-[#FFFFFF] mobile:text-center tracking-space text-[1.2vw] font-light mobile:text-[5vw] mobile:tracking-normal tablet:text-[2vw]`}
                >
                KNOTLESS TISSUE CONTROL DEVICE
                </span>
              </p>
              <div className="w-screen h-full text-white aeonik relative mobile:static mobile:w-full">
                <p data-para-anim className="uppercase text-[14vw] tracking-wider opacity-10 font-light top-[-20%] absolute left-[-12%] mobile:hidden tablet:top-[80%]">advagrip</p>
                <p className="text-[2.5vw] font-light absolute top-[45%] left-0 mobile:static mobile:text-[5vw] mobile:text-center tablet:top-[130%] fadeUp">A <span className=" text-white grip-gradient">GRIP</span> Like No Other.</p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
