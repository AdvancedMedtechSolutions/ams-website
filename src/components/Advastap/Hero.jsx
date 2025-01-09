/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import Image from 'next/image';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Hero = () => {
  useGSAP(() => {
    if (globalThis.innerWidth > 1024) {
      const tl = gsap.timeline();
      tl.fromTo(
        ".hero-img",
        {
          xPercent: 100
        },
        {
          xPercent: 10,
          duration: 1.5,
          delay: 0.2,
          ease: "power3.out",
        }
      );
      tl.fromTo(".line", {
        scale: 0,
      }, {
        scale: 1,
        transformOrigin: "left",
        duration: 1,
        delay: -0.7,
        ease: "power3.out",
      })
    }
  });


  return (
    <section className='dark' id='advastapHero'>
      <div className="w-screen h-screen relative overflow-hidden mobile:h-screen tablet:h-[80vh]">
        <Image
          src="/assets/advastap/advastap-hero-bg.png"
          fill
          alt="advastap-hero"
          className="object-cover absolute"
        />
        <div className="absolute top-0 right-0 bottom-0 left-0 flex justify-between items-center mobile:flex-col mobile:top-[25%] tablet:flex-col tablet:top-[22%]">
          <div className="text-white absolute left-[12%]  mobile:left-[0%] mobile:w-[100%] tablet:left-[20%]">
            <h1 className=" text-[5.7vw] font-light leading-[1] aeonik uppercase mobile:text-[12.2vw] mobile:text-center tablet:text-[9vw] tablet:text-center">
              <span data-para-anim className="leading-[1] overflow-hidden text-[#FFFFFF]  mobile:w-full mobile:text-center">
                ADVASTAP HD
              </span>
            </h1>
            <div className='flex items-center mt-[2vw]'>
              <p data-para-anim className=" text-[1.25vw] uppercase leading-[1.2] tracking-[.4em]  mobile:text-[4.6vw] mobile:tracking-widest mobile:ml-[20%]  tablet:text-[3vw] tablet:tracking-widest tablet:max-w-full mobile:my-[7vw] mobile:text-center mobile:justify-center tablet:justify-center tablet:ml-[20%]">
                Hemorrhoid stapler
              </p>
              <span className="w-[5.2vw] h-[1px] bg-white line mobile:hidden tablet:hidden "></span>
            </div>
          </div>

          <div className="w-[75%] h-full relative left-[45%] right-0 hero-container mobile:rotate-[88deg] mobile:w-[180vw] mobile:h-[90%]  tablet:rotate-90 tablet:w-[100%] mobile:left-[5%] mobile:top-[30%] tablet:top-[25%] tablet:left-[5%]">
            <div className="w-full h-full">
              <Image
                src="/assets/advastap/advastap-hero.png"
                alt="side-image"
                fill
                className=" hero-img object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
