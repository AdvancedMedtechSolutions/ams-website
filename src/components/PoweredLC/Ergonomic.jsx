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
              start: "top 70%",
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
      <section
        className="overflow-hidden  mobile:py-[20%] relative tablet:py-[10%] py-[7%] "
        id="ergonomic"
      >
        <div className="w-screen h-full container-lg z-[5] mobile:h-full tablet:h-full ">
          <div className="w-full h-full flex flex-col items-center justify-center tablet:justify-start ">
            <div className="w-full h-full flex flex-col items-center justify-center mb-[7vw] tablet:mb-0 mobile:mb-[10vw] mobile:flex mobile:justify-center mobile:h-fit tablet:h-fit">
             <h2
data-para-anim
                className="title-2 aeonik text-center w-[60%] mobile:text-center mobile:w-[95%]"
              >
                Ergonomic Design For Comfortable Single-Hand Use
              </h2>
            </div>
            <div className=" h-[50vw] w-[80vw] mobile:h-full flex flex-col items-center justify-end tablet:w-full tablet:h-full">
             
                <div className=" w-full h-full flex flex-col items-center justify-center mobile:h-fit">
                  <div className="h-[50vw] w-[100vw] relative mobile:w-[200vw] mobile:h-[140vw] mobile:left-[25%] tablet:w-[100vw] tablet:h-[60vw] tablet:top-[-10%] tablet:left-0 fadeUp">
                    <Image
                      src="/assets/poweredlc/ergonomic-lc2.png"
                      fill
                      alt="Ergonomic Product"
                      className="object-contain"
                    />
                  </div>
                  <div className="mobile:flex mobile:flex-col mobile:gap-[5vw] tablet:flex tablet:flex-wrap tablet:gap-[2vw] tablet:order-1">

                  <div className="absolute w-fit h-fit rounded-[1vw] px-[1.5vw] py-[1vw] glassmorphism-light flex flex-col items-start justify-center text-[#2A2A2A] left-[12%] top-[35%] mobile:static mobile:w-[90vw] mobile:flex mobile:flex-col mobile:items-center mobile:py-[6vw] mobile:rounded-[4vw] mobile:px-[5vw] tablet:static tablet:w-[48.5%] tablet:h-[12vw] tablet:px-[2.5vw] ecard-up">
                    <p
                      data-para-anim
                      className="text-[1.67vw] font-light mobile:text-[6vw] tablet:text-[3vw]"
                    >
                      Rotating Knob:
                    </p>
                    <p
                      data-para-anim
                      className="text-[1.25vw] font-light mobile:text-[4vw] tablet:text-[2vw]"
                    >
                      Effortless reload angulation adjustment.
                    </p>
                  </div>
                  <div className="absolute w-fit h-fit rounded-[1vw] px-[1.5vw] py-[1vw] glassmorphism-light flex flex-col items-start justify-center text-[#2A2A2A] right-[20%] top-[35%] mobile:static mobile:w-[90vw] mobile:flex mobile:flex-col mobile:items-center mobile:py-[6vw] mobile:rounded-[4vw] mobile:px-[5vw] tablet:static tablet:w-[48.5%] tablet:h-[12vw] tablet:px-[2.5vw] ecard-up">
                    <p data-para-anim className="text-[1.67vw] font-light mobile:text-[6vw] tablet:text-[3vw]">
                      Smart Reload:
                    </p>
                    <p data-para-anim className="text-[1.25vw] font-light mobile:text-[4vw] tablet:text-[2vw]">
                      Convenient reload unload switch.
                    </p>
                  </div>
                  <div className="absolute w-fit h-fit rounded-[1vw] px-[1.5vw] py-[1vw] glassmorphism-light flex flex-col items-start justify-center text-[#2A2A2A] right-[25%] top-[55%] mobile:static mobile:w-[90vw] mobile:flex mobile:flex-col mobile:items-center mobile:py-[6vw] mobile:rounded-[4vw] mobile:px-[5vw] tablet:static tablet:w-[48.5%] tablet:h-[12vw] tablet:px-[2.5vw] ecard-up">
                    <p
                      data-para-anim
                      className="text-[1.67vw] font-light mobile:text-[6vw] tablet:text-[3vw]"
                    >
                      Battery Life:
                    </p>
                    <p
                      data-para-anim
                      className="text-[1.25vw] font-light mobile:text-[4vw] tablet:text-[2vw]"
                    >
                      {" "}
                      Efficient for up to multiple firings.
                    </p>
                  </div>
                  <div className="absolute w-[25%] h-fit rounded-[1vw] px-[1.5vw] py-[1vw] glassmorphism-light flex flex-col items-start justify-center text-[#2A2A2A] right-[15%] bottom-[15%] mobile:static mobile:w-[90vw] mobile:flex mobile:flex-col mobile:items-center mobile:py-[6vw] mobile:rounded-[4vw] tablet:static tablet:w-[48.5%] tablet:h-[12vw] tablet:px-[2.5vw] ecard-up">
                    <p
                      data-para-anim
                      className="text-[1.67vw] font-light mobile:text-[6vw] tablet:text-[3vw]"
                    >
                      User Controls:
                    </p>
                    <p
                      data-para-anim
                      className="text-[1.25vw] font-light mobile:text-[4vw] mobile:text-center tablet:text-[2vw]"
                    >
                      Safety button for firing; simple controls for jaw, close,
                      and fire functions.
                    </p>
                  </div>
                    <div className="absolute w-fit h-fit rounded-[1vw] px-[1.5vw] py-[1vw] glassmorphism-light flex flex-col items-start justify-center text-[#2A2A2A] left-[15%] top-[65%] mobile:static mobile:w-[90vw] mobile:flex mobile:flex-col mobile:items-center mobile:py-[6vw] mobile:rounded-[4vw] mobile:px-[5vw] tablet:static tablet:w-[48.5%] tablet:h-[12vw] tablet:px-[2.5vw] ecard-up">
                      <p data-para-anim className="text-[1.67vw] font-light mobile:text-[6vw] tablet:text-[3vw]">
                        Actuated Motor:
                      </p>
                      <p data-para-anim className="text-[1.25vw] font-light mobile:text-[4vw] mobile:text-center tablet:text-[2vw]">
                        Ensures precise firing across all tissue thickness.
                      </p>
                    </div>
                   
                      <div className="absolute w-fit h-fit rounded-[1vw] px-[1.5vw] py-[1vw] glassmorphism-light flex flex-col items-start justify-center text-[#2A2A2A] left-[20%] bottom-[10%] mobile:static mobile:w-[90vw] mobile:flex mobile:flex-col mobile:items-center mobile:py-[6vw] mobile:rounded-[4vw] mobile:px-[5vw] tablet:static tablet:w-[48.5%] tablet:h-[12vw] tablet:px-[2.5vw] ecard-up">
                        <p data-para-anim className="text-[1.67vw] font-light mobile:text-[6vw] tablet:text-[3vw]">
                          Atraumatic Tapered Tip:
                        </p>
                        <p data-para-anim className="text-[1.25vw] font-light mobile:text-[4vw] tablet:text-[2vw]">
                          {" "}
                          for delicate tissue management.
                        </p>
                      </div>
                  </div>
                  
                     
                    </div>
                  </div>
                </div>
               
              </div>
           
          

        
          <div className="absolute h-[100%] w-[100vw] z-[-1] top-0 left-0  ">
            
            <Image
              src="/assets/poweredlc/ergonomic-bg.png"
              fill
              alt="Ergonomic bg"
              className="object-cover"
            />
          </div>
      </section>
    </>
  );
};

export default Ergonomic;
