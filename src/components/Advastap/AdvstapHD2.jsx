import React from 'react'
import Image from 'next/image'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(useGSAP, ScrollTrigger);

const AdvastapHD3 = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".about-container",
        scrub: true,
      },
    });
    tl.fromTo(
      ".about-img",
      {
        y: 250,
        x: 250
      },
      {
        y: 0,
        x: 0,
        duration: 1.5,
        delay: 0.1,
        ease: "power3.out",
      }
    );
  });
  return (
    <>
      <section id='advastap-hd3'>
        <div className="w-screen h-screen bg-[#020F20] overflow-hidden tablet:h-screen">
          <div className="w-screen h-[80%] bg-white relative overflow-hidden pt-[4vw] mobile:pt-[10vw] tablet:justify-center mobile:h-[85%] ">

            <div className="w-full h-full relative scale-[1.05]  about-container mobile:rotate-45 tablet:rotate-90 mobile:top-[10%] mobile:scale-[1.5] mobile:left-[15%] tablet:top-[15%] tablet:left-[10%]">
              <Image
                src="/assets/advastap/advastap-about.png"
                fill
                alt="advastap-about"
                className="absolute left-0 about-img object-contain"
              />
            </div>

            <div className="absolute top-[15%] right-[8%]  p-[2vw] mobile:w-full mobile:right-[0%] mobile:text-center tablet:w-full tablet:p-[4vw] tablet:top-[5%] tablet:text-center tablet:right-[0%] mobile:top-[10%]">
              <h2 className="text-[4vw] aeonik  tracking-wide text-[#4A4A4A] leading-[1] mobile:text-[11.2vw] tablet:text-[7.5vw]">
                <span data-para-anim className="leading-[1.3] overflow-hidden w-full mobile:w-full mobile:text-center tablet:w-full tablet:text-center">
                  ADVASTAP HD III
                </span>
              </h2>
              <p className="mb-[4vw] text-[1.66vw] leading-[1.2] mobile:max-w-full tablet:max-w-full mobile:text-[4.75vw] mobile:my-[7vw] flex items-center justify-start mobile:justify-center tablet:justify-center tablet:text-[3vw] tablet:tracking-wider">
                <span data-para-anim className="mobile:text-center uppercase tracking-widest mobile:tracking-normal">
                  3-Row Hemorrhoid Stapler
                </span>
              </p>
            </div>
          </div>
          <div className="w-screen h-[18%] flex items-center justify-center mobile:h-[15%]">
            <div className="text-white text-[2.5vw] tracking-wider font uppercase gradient-text mobile:text-[5vw] tablet:text-[4.5vw] ">
              <p>Raised to the</p>
              <span className="gradient-line"></span>
              <span className="gradient-line"></span>
              <p>power of three</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AdvastapHD3;