/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import Image from 'next/image'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(useGSAP, ScrollTrigger);

const AdvastapLC3 = () => {
  useGSAP(() => {
    if(globalThis.innerWidth>1024){
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hd-container",
        
      },
    });
    tl.fromTo(
      ".hd-img",
      {
        x:250,
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
   <section id='advastap-lc2' className='mobile:py-[15%] tablet:py-[10%]'>
    <div className='w-screen h-screen overflow-hidden mobile:h-full tablet:h-[85vh]'>
        <div className='w-screen relative  flex h-[80%] flex-col-reverse justify-between items-start mobile:h-[90vh] tablet:h-[70vh] mobile:overflow-hidden'>
            <div className='w-[80vw] h-[40vw] right-[-25%] relative hd-container  top-[20%] mobile:w-full mobile:-rotate-[110deg] mobile:left-0 mobile:scale-[1] tablet:w-[100vw] tablet:h-[70vw] tablet:top-0 tablet:rotate-[-20deg] mobile:top-[-30%] tablet:left-0 tablet:scale-[1]'>
            <Image 
            src="/assets/advastaplc/advastaplc2-element.png"
            fill
            alt='advastap-about'
            className=' object-contain hd-img scale-[2.1] rotate-[-152deg] mobile:object-contain mobile:scale-[3] mobile:rotate-[80deg] tablet:rotate-0 tablet:scale-[1.5]
            tablet:object-contain'
            />
            </div>
            <div className=" absolute top-[15%] left-[8%] p-[2vw] mobile:w-full mobile:pl-0 tablet:w-full tablet:pl-0 mobile:left-[10%] mobile:top-[3%] tablet:left-0 tablet:top-0">
            <h2 className="text-[4vw] aeonik  tracking-wide text-[#4A4A4A] leading-[1] mobile:text-[11.2vw] tablet:text-[7.5vw]">
          <span data-para-anim className="leading-[1.3] overflow-hidden w-full mobile:w-full mobile:text-center tablet:w-full tablet:text-center font-light ">
          ADVASTAP LC II
          </span>
        </h2>
        <p className="mb-[4vw] text-[1.66vw] tracking-tighter leading-[1.2] mobile:max-w-full tablet:max-w-full mobile:my-[5vw] mobile:text-[4.75vw] flex items-center justify-start tablet:justify-center tablet:text-[3vw] tablet:tracking-wider">
          <span data-para-anim className="mobile:text-center uppercase tracking-wide mobile:tracking-normal font-light mobile:w-[80%]">
          INNOVATION. SECURITY. CONSISTENCY.
          </span>
        </p>
          </div>

        </div>

        
       

    </div>
   </section>
   </>
  )
}

export default AdvastapLC3;