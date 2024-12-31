import React from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(useGSAP, ScrollTrigger);


const Stapling = () => {
  useGSAP(()=>{
    gsap.to(
      ".sline-draw",
      {
        scrollTrigger: {
          trigger: "stapling-container",
          start: "top top",
          end: "bottom top",
        },
        rotate:-5,
        delay:2.3,
        ease: "power3.out",
      }
    );
    gsap.to(
      ".sline-draw",
      {
        scrollTrigger: {
          trigger: "stapling-container",
          start: "top top",
          end: "bottom top",
        },
        scale:1,
        opacity:1,
        transformOrigin: "right",
        duration: 1.5,
        delay:2.6,
        ease: "power3.out",
      }
    );
  })
 
  return (
    <>
      <section className="overflow-hidden relative mobile:py-[20%] py-[7%] tablet:py-[10%] " id="stapling">
        <div className="w-screen stapling-container overflow-hidden h-full pl-[12vw] mobile:h-full tablet:h-[70%] mobile:pl-0 tablet:pl-[7vw]">
          <div className=" flex flex-col items-center justify-center ">
            <div className="w-full h-full mobile:mb-[10vw] mobile:flex mobile:justify-center ">
              <h2
data-para-anim className="title-2 aeonik mobile:text-center">Smart Stapling</h2>
            </div>

            <div className="w-full mobile:flex-col mobile:gap-[10vw]">
                <div className="w-full h-[70%] flex items-center justify-between  mobile:flex-col mobile:gap-[10vw]">
                    <p data-para-anim className="font-light text-[2.5vw] text-[#2A2A2A] mobile:order-1 leading-[1.2] mobile:text-[9vw] mobile:text-center mobile:leading-[1.2] tablet:text-[3.5vw] tablet:w-[60%]">
                    Surgeon-Modulated Articulation
                    <span  data-para-anim className="block text-[1.25vw] font-light leading-[1.2] mobile:text-[4vw] mobile:text-center mobile:mt-[2vw] mobile:w-[80%] tablet:text-[2.5vw]">
                    Flexible reach for precise and accurate positioning in challenging surgical procedures.   </span>
                    </p>
                    <div className="flex flex-col h-[100%] w-[30%] items-center justify-center pr-[30%] mobile:pr-0 tablet:pr-[10%]">
                <div  className="relative h-[18vw] w-[14vw] mobile:w-[55vw] mobile:h-[80vw] tablet:w-[35vw] tablet:h-[35vw] fadeUp">
                    <Image src="/assets/endolc/stapling-pro-1.png" fill alt="stapling" className="object-fill "/>
                </div>
                    </div> 
                </div>
                <div className="w-full h-[70%] flex items-center justify-between  mobile:flex-col mobile:mt-[70vh] ">
                    <div className="mobile:order-1 mobile:mt-[-25vh]">

                    <p  data-para-anim className="font-light text-[2.5vw] text-[#2A2A2A] mobile:text-[9vw] mobile:text-center mobile:leading-[1.2] tablet:text-[3.5vw]">
                    Smart Locking Mechanism</p> 
                    <p  data-para-anim className="block text-[1.55vw] font-light leading-[1.2] mobile:text-[4vw] mobile:text-center tablet:text-[2.5vw]">
                    with audible click. </p>
                    </div>
                    
                   
                <div className="relative h-[20vw] w-[50vw] scale-[2] bottom-[10%] fadein mobile:w-[80vw] mobile:h-[50vw] mobile:bottom-[35%] mobile:absolute mobile:right-[-5%] tablet:w-[30vw] tablet:h-[30vw] fadeUp">
                    <Image src="/assets/endolc/stapling-pro-2.png" fill alt="stapling" className="object-contain mobile:rotate-[60deg]  fadein  "/>
                </div>  
                </div>

                <div className="w-full h-fit mt-[5vw] items-start justify-between  flex  mobile:h-full mobile:mt-[10vw] mobile:px-[5vw] flex-col mobile:items-center mobile:gap-[3vw] tablet:mt-[10vw] ">
                    <p  data-para-anim className="font-light text-[2.5vw] text-[#2A2A2A] mobile:text-[9vw] mobile:leading-[1.2] text-center tablet:text-[3.5vw]">
                   Dedicated Reloads for Every Procedures</p>
                    <p  data-para-anim className="block text-[1.25vw] font-light leading-[1.2] mobile:text-[4vw] mobile:text-center tablet:text-[2.5vw]">
                    Experience seamless peformance with our specialized reloads, designed to enhance efficiency without the need to change cartridges. </p>
                      
                </div>
  
            </div>
            
          </div>
        </div>
        <span className="w-[45vw] h-[1.5px] bg-[#b7b7b7] absolute top-[52%] scale-0 opacity-0  sline-draw left-[46%] mobile:hidden tablet:hidden"></span>
        <span className=" hidden mobile:block tablet:block w-[45vw] h-[1.5px] bg-[#b7b7b7] absolute top-[67%] left-[54%] mobile:-rotate-12 tablet:top-[58%] tablet:w-[35vw] tablet:-rotate-12 tablet:left-[50%]"></span>
        <div className="absolute h-[100%] w-[100vw] bottom-0 z-[-1]">
                <Image src="/assets/endolc/stapling-bg.png"
               fill
                alt="Stapling bg"
                className="object-cover z-[-1]"/>
            </div>
      </section>
    </>
  );
};

export default Stapling;