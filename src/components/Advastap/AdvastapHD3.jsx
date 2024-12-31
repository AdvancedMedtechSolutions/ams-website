/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import Image from 'next/image'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(useGSAP, ScrollTrigger);

const AdvastapHD2 = () => {
  useGSAP(() => {
    if(globalThis.innerWidth>1024){
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hd-container",
        scrub:true
      },
    });
    tl.fromTo(
      ".hd-img",
      {
        x:-250,
      },
      {
       x:0,
        duration: 1.5,
        delay: 0.1,
        ease: "power3.out",
      }
    );
}
  });
  return (
   <>
   <section id='advastap-hd2'>
    <div className='w-screen h-screen bg-[#020F20] overflow-hidden mobile:h-[85vh] tablet:h-[85vh]'>
        <div className='w-screen  bg-white relative  flex h-[80%] flex-col-reverse justify-between items-start pt-[4vw] mobile:py-[10vw] mobile:h-[70vh] tablet:h-[70vh] mobile:overflow-hidden'>
            <div className='w-full h-full scale-[1.6]  left-[-8%] relative hd-container top-[15%] mobile:w-full mobile:-rotate-[40deg] mobile:left-[0%] mobile:scale-[1.3] mobile:top-[10%] tablet:left-0 tablet:scale-[1]'>
            <Image 
            src="/assets/advastap/hd2.png"
            fill
            alt='advastap-about'
            className=' absolute object-contain hd-img mobile:object-contain
            tablet:object-contain'
            />
            </div>
            <div className=" absolute top-[15%] left-[8%] p-[2vw] mobile:w-full mobile:pl-0 tablet:w-full tablet:pl-0 mobile:left-0 mobile:static mobile:flex mobile:justify-center mobile:flex-col tablet:left-0 ">
            <h2 className="text-[4vw] aeonik  tracking-wide text-[#4A4A4A] leading-[1] mobile:text-[11.2vw] tablet:text-[7.5vw] mobile:text-center">
          <span data-para-anim className="leading-[1.3] overflow-hidden w-full mobile:w-full mobile:text-center tablet:w-full tablet:text-center">
          ADVASTAP HD II
          </span>
        </h2>
        <p className="mb-[4vw] text-[1.66vw] tracking-tighter leading-[1.2] mobile:max-w-full tablet:max-w-full mobile:my-[7vw] mobile:text-[4.75vw] flex items-center justify-start mobile:justify-center tablet:justify-center tablet:text-[3vw] tablet:tracking-wider">
          <span data-para-anim className="mobile:text-center uppercase tracking-widest mobile:tracking-normal">
          2-Row Hemorrhoid Stapler
          </span>
        </p>
          </div>

        </div>

        <div className="w-screen h-[18%] flex items-center justify-center">
      <div className="text-white text-[2.5vw] tracking-wider font uppercase gradient-text mobile:text-[4.1vw] tablet:text-[4.5vw]">
        <p>SAFE. SUPERIOR.</p>
        <span className="gradient-line"></span>
        <span className="gradient-line"></span>
        <p>PRECISELY INVASIVE.</p>
      </div>
    </div>
       

    </div>
   </section>
   </>
  )
}

export default AdvastapHD2;