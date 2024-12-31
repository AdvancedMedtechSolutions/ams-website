/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import Image from 'next/image'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Hero = () => {
  useGSAP(() => {
    gsap.from(
      ".hero-img",
      {
        opacity:0,
        x:30,
        duration: 1.5,
        delay:0.5,
        ease: "power3.out",
      }
    );

    gsap.from('.lineSpan',{
      scale:0,
      duration:1,
      delay:0.5,
      transformOrigin:'left',
      ease: "power3.out",

    })
    gsap.from('.hero-text',{
      y:30,
      opacity:0,
      duration:1,
      ease:'power3.out',
      delay:0.5
    })
  
  });
  return (
    <section className='' id='advastapHero'>
      <div className="w-screen h-screen relative overflow-hidden mobile:h-screen tablet:h-[80vh]">
        <Image
          src="/assets/advastaplc/advastaplc-hero-bg.png"
          fill
          alt="advastap-hero"
          className="object-cover absolute"
        />
        <div className="absolute top-0 right-0 bottom-0 left-0 flex justify-between items-center mobile:flex-col mobile:top-[20%] tablet:flex-col tablet:top-[22%]">
          <div className=" absolute left-[12%] mobile:left-[10%] mobile:w-[100%] tablet:left-[15%] z-[10]">
          <h1 className="advastap-text text-white text-[5.3vw] aeonik  leading-[1] hero-text ">
                  <span 
                    className={`leading-[1.2] overflow-hidden uppercase text-[5.75vw] mobile:text-[13.2vw] tablet:text-[9vw]`}
                  >
                  ADVASTAP LC
                  </span>
                </h1>
                {/* <div className='w-[80%] h-[1px] bg-black/50 my-[4vw] hidden mobile:block lineDraw'></div> */}
            <div className='flex items-center mobile:w-[80%] mobile:justify-center  '>
            <p   className=" text-[1.25vw] uppercase leading-[1.2] font-light tracking-wider mobile:text-[4.6vw]   tablet:text-[3vw] tablet:max-w-full  flex items-center justify-start fadeUp mobile:text-center">
          Linear Cutter 
                </p>
              <span className="w-[10vw] h-[1px] ml-[1vw] bg-black line mobile:hidden tablet:hidden lineSpan"></span>
              </div>
          </div>

          <div className="w-[70%] h-full relative left-[46%] hero-container   tablet:w-[100%]  mobile:top-[15%] tablet:top-[10%] tablet:left-[20%] ">
            <div className="w-[80vw] h-[80vw]  mobile:w-[150vw] mobile:h-[150vw] mobile:left-[-90%] relative tablet:w-[100vw] tablet:h-[100vw]">
              <Image
                src="/assets/advastaplc/advastaplc-hero-element.png"
                alt="side-image"
                fill
                className="object-contain rotate-[-110deg] mobile:rotate-[-105deg] hero-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
