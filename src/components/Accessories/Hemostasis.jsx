import React,{useEffect} from 'react'
import Image from 'next/image'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hemostasis = () => {
  useEffect(() => {
    if (globalThis.innerWidth > 0) {
      const ctx = gsap.context(() => {
        const content = document.querySelectorAll(".hcard-up");
        content.forEach((content) => {
          gsap.from(content, {
            scrollTrigger: {
              trigger:content,
              start: "top 80%",
              end: "bottom bottom",
            },
            opacity: 0,
            y: 50,
            ease: 'power3.out',
            duration: 0.7,
            stagger: 0.5,
          });
        });
      });
      return () => ctx.revert();
    }
  }, []);
  return (
    <section className="overflow-hidden relative hemostasis-container  mobile:py-[15%] tablet:py-[7%] pt-[7%]" id="hemostasis">
    <div className="w-screen h-full container-lg  mobile:h-[150vh] tablet:h-[60vh]">
      <div className="w-full h-full flex flex-col items-center justify-center relative  tablet:py-0 z-[10]">
        <div className="w-full h-full flex flex-col items-center justify-center mobile:mb-0 mobile:flex mobile:justify-start tablet:justify-start">
          <h2
data-para-anim
            className="title-2 aeonik text-center w-[60%] mobile:text-center mobile:w-[90%]"
          >
           Hemostasis valve
          </h2>
        </div>
        <div className="relative w-full h-full flex flex-col items-center justify-center">
          <div className="h-[43vw] w-[60vw] relative mobile:w-[160vw] mobile:h-[120vw] tablet:w-[100vw] tablet:h-[70vw] mobile:scale-[0.9] mobile:ml-[10%]">
            <Image
              src="/assets/accessories/hemostasis-valve.png"
              fill
              alt="Ergonomic Product"
              className="object-contain fadeUp mobile:rotate-[-45deg] "
            />
          </div>

        </div>
        <div className='mobile:w-full mobile:h-full mobile:flex mobile:flex-col mobile:gap-[5vw] mobile:justify-end'>

          <div className="absolute h-fit w-[28%] rounded-[1vw] px-[1vw] py-[1vw] glassmorphism-light flex flex-col items-start justify-center text-[#2A2A2A] left-[6%] top-[34%] hcard-up mobile:static mobile:w-[90vw] mobile:flex mobile:flex-col mobile:items-center mobile:py-[6vw] mobile:rounded-[4vw] tablet:w-[35%] tablet:px-[2vw] tablet:top-[25%]">
            <p  className="text-[1.67vw] font-light mobile:text-[6vw] mobile:text-center tablet:text-[2.5vw]">Maintains hemostasis during complex interventions</p>
            
          </div>
          <div className="absolute h-fit w-[20%] rounded-[1vw] px-[1vw] py-[1vw] glassmorphism-light flex flex-col items-start justify-center text-[#2A2A2A] right-[12%] top-[32%] hcard-up mobile:static mobile:w-[90vw] mobile:flex mobile:flex-col mobile:items-center mobile:py-[6vw] mobile:rounded-[4vw] tablet:w-[35%] tablet:px-[2vw] tablet:top-[27%]">
            <p  className="text-[1.67vw] font-light mobile:text-[6vw] mobile:text-center tablet:text-[2.5vw]">New generation of seal technology</p>
            
          </div>
          <div className="absolute  h-fit w-[25%] rounded-[1vw] px-[1vw] py-[1vw] glassmorphism-light flex flex-col items-start justify-center text-[#2A2A2A] right-[10%] bottom-[25%] hcard-up mobile:static mobile:w-[90vw] mobile:flex mobile:flex-col mobile:items-center mobile:py-[6vw] mobile:rounded-[4vw] tablet:w-[35%] tablet:px-[2vw]">
            <p  className="text-[1.67vw] font-light mobile:text-[6vw] mobile:text-center tablet:text-[2.5vw]">Promotes easy and single handed operation</p>
          </div>
          <div className="absolute  h-fit w-[20%] rounded-[1vw] px-[1vw] py-[1vw] glassmorphism-light flex flex-col items-start justify-center text-[#2A2A2A] left-[20%] bottom-[18%] hcard-up mobile:static mobile:w-[90vw] mobile:flex mobile:flex-col mobile:items-center mobile:py-[6vw] mobile:rounded-[4vw] tablet:w-[35%] tablet:px-[2vw] tablet:left-[10%]">
            <p  className="text-[1.67vw] font-light mobile:text-[6vw] mobile:text-center tablet:text-[2.5vw]">New generation of seal technology</p>
          </div>
        </div>

        
      </div>
    </div>
    <div className="absolute h-[100%] w-[100vw] top-0 left-0 z-[1] ">
          <Image
            src="/assets/advastapcs/ergonomic-bg.png"
            fill
            alt="Ergonomic bg"
            className="object-cover"
          />
        </div>
  </section>
  )
}

export default Hemostasis