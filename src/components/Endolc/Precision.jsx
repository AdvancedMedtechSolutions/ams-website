/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(useGSAP, ScrollTrigger);

const Precision = () => {
  useGSAP(() => {
    if (globalThis.innerWidth >= 1024) {
      gsap.from(".precision-img", {
        scrollTrigger: {
          trigger: "#precision",
          start: "top top",
          end: "bottom top",
        },
        scale: 1.1,
        yPercent: 20,
        opacity: 0,
        duration: 1.5,
        delay: 0,
        ease: "power3.out",
      });
      gsap.to(".line-draw", {
        scrollTrigger: {
          trigger: ".precision-container",
          start: "top top",
          end: "bottom top",
      
        },
        rotate: -18,
        delay: 0,
        ease: "power3.out",
      });
      gsap.to(".line-draw", {
        scrollTrigger: {
          trigger: ".precision-container",
          start: "top top",
          end: "bottom top",
        },
        scale: 1,
        opacity: 1,
        transformOrigin: "left",
        duration: 1.5,
        delay: 0.5,
        ease: "power3.out",
      });
      gsap.to(".line-draw2", {
        scrollTrigger: {
          trigger: ".precision-container",
          start: "top top",
          end: "bottom top",
      
        },
        rotate: 0,
        delay: 0,
        ease: "power3.out",
      });
      gsap.to(".line-draw2", {
        scrollTrigger: {
          trigger: ".precision-container",
          start: "top top",
          end: "bottom top",
        },
        scale: 1,
        opacity: 1,
        transformOrigin: "left",
        duration: 1.5,
        delay: 0.5,
        ease: "power3.out",
      });
    }
  });

  return (
    <>
      <section
        className="overflow-hidden relative mobile:py-[12%] pt-[7%] pb-[4%] precision-container"
        id="precision"
      >
        <div className="w-screen h-full container-lg  overflow-hidden  mobile:h-[130vh] tablet:h-[70%]">
          <div className="w-full h-full flex flex-col items-center justify-center relative mobile:static">
            <div className="w-full h-full mobile:mb-[10vw] mobile:flex mobile:justify-center">
             <h2
data-para-anim
                className="title-2 aeonik text-center mobile:text-center "
              >
                Unmatched precision for every procedure
              </h2>
            </div>

            <div className="flex items-center justify-evenly gap-[1vw] w-full mobile:flex-col mobile:gap-[10vw] overflow-hidden">
              <div className="h-[43vw] w-[85%] relative left-[-10%] mobile:absolute mobile:top-[40%] mobile:left-0 mobile:w-[170vw] mobile:h-[50vh] tablet:w-full tablet:left-0 tablet:h-[60vw] ">
                <Image
                  src="/assets/endolc/precision-product.png"
                  fill
                  alt="Precision Product"
                  className="object-contain mobile:rotate-[-20deg] precision-img "
                />
                <div className="absolute top-[30%] right-[-15%] mobile:top-[-25%] mobile:right-[48%] tablet:right-0">
                  <p
                    data-para-anim
                    className="font-light leading-[1.2] text-[2.5vw] text-[#2A2A2A] mobile:text-[9vw] mobile:w-[80vw] mobile:text-center mobile:leading-[1.2] tablet:text-[3vw]"
                  >
                    Sequential Firing Mechanism
                    <br/>
                    <span
                      data-para-anim
                      className="block text-[1.25vw] font-light mobile:text-[4vw] tablet:text-[2.2vw] "
                    >
                      simplifies operation.
                    </span>
                  </p>
                </div>
                <div className="absolute bottom-[20%] right-[2%] mobile:right-[20%] mobile:bottom-[-35%] mobile:w-full mobile:flex mobile:flex-col mobile:items-center">
                  <p
                    data-para-anim
                    className="font-light text-[2.5vw] leading-[1.2] text-[#2A2A2A] mobile:text-[9vw] mobile:leading-[1.2] tablet:text-[3vw]"
                  >
                    Enhanced Control
                  </p>
                  <p
                    data-para-anim
                    className="block text-[1.25vw] font-light mobile:text-[4vw] mobile:text-center tablet:text-[2.2vw]"
                  >
                    with compact reach.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute h-[100%] w-[130vw] bottom-0 mobile:left-0 z-[-1]">
          <Image
            src="/assets/endolc/precision-bg.png"
            fill
            alt="Precision bg"
            className="object-cover"
          />
        </div>
        <span className="dot absolute top-[63%] left-[32%] w-[0.8vw] h-[0.8vw] bg-[#B3B3B3] rounded-full mobile:hidden tablet:hidden"></span>
<span className="w-[26vw] h-[1.5px] bg-[#B3B3B3] absolute top-[64%] left-[32%] scale-0 line-draw mobile:hidden tablet:hidden transform-origin-left"></span>

<span className="dot absolute top-[75%] left-[28%] w-[0.8vw] h-[0.8vw] bg-[#B3B3B3] rounded-full mobile:hidden tablet:hidden"></span>
<span className="w-[28vw] h-[1.5px] bg-[#B3B3B3] absolute line-draw2 scale-0 top-[75.5%] left-[28%] mobile:hidden tablet:hidden transform-origin-left"></span>




        <span className="hidden h-[1.5px] bg-[#B3B3B3] absolute mobile:block tablet:block mobile:w-[70vw] mobile:-rotate-[105deg] mobile:top-[54%] mobile:left-[26%] tablet:left-[35%] tablet:w-[22vw] tablet:top-[60%] tablet:-rotate-45"></span>
        <span className="hidden  h-[1.5px] bg-[#B3B3B3] absolute  mobile:block tablet:block mobile:w-[40vw] mobile:rotate-[130deg] mobile:top-[78%] mobile:left-[28%] tablet:w-[36vw] tablet:left-[30%] tablet:top-[75%]"></span>
      </section>
    </>
  );
};

export default Precision;
