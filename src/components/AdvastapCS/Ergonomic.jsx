import React,{useEffect} from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Ergonomic = () => {
  useEffect(() => {
    if (globalThis.innerWidth > 0) {
      const ctx = gsap.context(() => {
        const content = document.querySelectorAll(".ecard-up");
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
    <>
      <section className="overflow-hidden py-[7%]  mobile:pt-[15%] mobile:pb-[10%] relative" id="ergonomic">
        <div className="w-screen h-[60vw] container-lg  mobile:h-[340vw] tablet:h-[95vh] ">
          <div className="w-full h-full flex flex-col items-center justify-center relative mobile:justify-between ">
            <div className="w-full h-full flex flex-col items-center mobile:mb-[10vw] mobile:flex mobile:justify-between mobile:h-fit">
             <h2
data-para-anim
                className="title-2 aeonik text-center w-[60%] leading-[1.2] mobile:text-center mobile:w-[90%]"
              >
                Ergonomic Design For Comfortable Single-Hand Use
              </h2>
            </div>
            <div className="absolute w-full h-full flex flex-col items-center justify-center mobile:justify-end mobile:pb-[10%]">
              <div className="h-[50vw] w-[80vw] relative scale-[1] left-[10%] top-[15%] mobile:w-[150vw] mobile:top-[30%] mobile:left-[-30%] mobile:absolute  tablet:w-[100vw] pointer-events-none tablet:rotate-45 tablet:top-[15%] tablet:left-[10%] tablet:scale-[1.2] fadeUp">
                <Image
                  src="/assets/advastapcs/circular-stapler2.png"
                  fill
                  alt="Ergonomic Product"
                  className="object-cover mobile:rotate-[40deg] "
                />
              </div>
              <div className="mobile:flex mobile:flex-col mobile:gap-[3vw]">

              <div className="absolute w-[15%] h-fit rounded-[1.2vw] px-[2vw] py-[1.5vw] glassmorphism-light flex flex-col items-start justify-center text-[#2A2A2A] left-[10%] top-[28%] ecard-up  mobile:static mobile:w-[90vw] mobile:flex mobile:flex-col mobile:items-center mobile:py-[6vw] mobile:rounded-[4vw] mobile:px-[5vw] mobile:text-center  tablet:w-[30%] tablet:top-[25%] tablet:px-[3vw] tablet:py-[2vw] tablet:left-0">
                <p  className="text-[1.67vw] leading-[1.2] font-light  mobile:text-[6vw] tablet:text-[3vw]">Removable Anvil Design</p>     
              </div>
              <div className="absolute w-[18%] h-fit rounded-[1.2vw] px-[2vw] py-[1.5vw] glassmorphism-light flex flex-col items-start justify-center text-[#2A2A2A] right-[10%] top-[30%] ecard-up mobile:static mobile:w-[90vw] mobile:flex mobile:flex-col mobile:items-center mobile:py-[6vw] mobile:rounded-[4vw] mobile:px-[5vw] mobile:text-center tablet:w-[35%] tablet:px-[3vw] tablet:py-[2vw] tablet:top-[30%]">
                <p  className="text-[1.67vw] leading-[1.2] font-light mobile:text-[6vw] tablet:text-[3vw]">Deeper Housing Capacity</p>
                
              </div>
              <div className="absolute w-[20%] h-fit rounded-[1.2vw] px-[2vw] py-[1.5vw] glassmorphism-light flex flex-col items-start justify-center text-[#2A2A2A] right-[10%] bottom-[15%] ecard-up mobile:static mobile:w-[90vw] mobile:flex mobile:flex-col mobile:items-center mobile:py-[6vw] mobile:rounded-[4vw] mobile:px-[5vw] mobile:text-center tablet:w-[35%] tablet:px-[3vw] tablet:py-[2vw] tablet:bottom-[10%] tablet:right-[20%]">
                <p  className="text-[1.67vw] leadig-[1.2] font-light mobile:text-[6vw] tablet:text-[3vw]">Superior Hemostatic Effect</p>
              </div>
              <div className="absolute w-[15%] h-fit rounded-[1.2vw] px-[2vw] py-[1.5vw] glassmorphism-light flex flex-col items-start justify-center text-[#2A2A2A] right-[37%] top-[50%] ecard-up mobile:static mobile:w-[90vw] mobile:flex mobile:flex-col mobile:items-center mobile:py-[6vw] mobile:rounded-[4vw] mobile:px-[5vw] mobile:text-center tablet:w-[30%] tablet:right-[10%] tablet:px-[3vw] tablet:py-[2vw] ">
                <p  className="text-[1.67vw] leading-[1.2] font-light mobile:text-[6vw] tablet:text-[3vw]">High Staples per Firing</p>
              </div>
              <div className="absolute w-[20%] h-fit rounded-[1.2vw] px-[2vw] py-[1.5vw] glassmorphism-light flex flex-col items-start justify-center text-[#2A2A2A] left-[12%] top-[60%] ecard-up mobile:static mobile:w-[90vw] mobile:flex mobile:flex-col mobile:items-center mobile:py-[6vw] mobile:rounded-[4vw] mobile:px-[5vw] mobile:text-center tablet:w-[35%] tablet:px-[3vw] tablet:py-[2vw] tablet:top-[45%] tablet:left-[5%]">
                <p  className="text-[1.67vw] leading-[1.2] font-light mobile:text-[6vw] tablet:text-[3vw]">Adjustable Staple Height Control</p>
              </div>
              <div className="absolute w-[18%] h-fit rounded-[1.2vw] px-[2vw] py-[1.5vw] glassmorphism-light flex flex-col items-start justify-center text-[#2A2A2A] left-[30%] bottom-[10%] ecard-up mobile:static mobile:w-[90vw] mobile:flex mobile:flex-col mobile:items-center mobile:py-[6vw] mobile:rounded-[4vw] mobile:px-[5vw] mobile:text-center tablet:w-[30%] tablet:left-[10%] tablet:px-[3vw] tablet:py-[2vw] tablet:bottom-[20%]">
                <p  className="text-[1.67vw] leading-[1.2] font-light mobile:text-[6vw] tablet:text-[3vw]">Precise Staple Line Formation</p>
              </div>
           
            </div>

          </div>
        </div>
        </div>
            <div className="absolute h-[100%] w-[100vw] z-[-1] top-0 left-0">
              <Image
                src="/assets/advastapcs/ergonomic-bg.png"
                fill
                alt="Ergonomic bg"
                className="object-cover "
              />
            </div>
      </section>
    </>
  );
};

export default Ergonomic;
