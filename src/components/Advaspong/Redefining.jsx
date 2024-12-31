import React,{useEffect} from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Redefining = () => {
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
      <section
        className="overflow-hidden  mobile:py-[17%] relative py-[7%] tablet:py-[10%]"
        id="ergonomic"
      >
        <div className="w-screen h-full container-lg z-[5] mobile:h-full tablet:h-[60vh] ">
          <div className="w-full h-full flex flex-col items-center justify-center tablet:justify-start ">
            <div className="w-full h-full flex flex-col items-center justify-center mobile:mb-[10vw] mobile:flex mobile:justify-center mobile:h-fit tablet:h-fit ">
             <h2
data-para-anim
                className="title-2 aeonik text-center  mobile:text-center mobile:w-[90%]"
              >
               ADVASPONG redefining wound care
              </h2>
            </div>
            <div className=" h-[50vw] w-[80vw] mobile:h-full flex flex-col items-center justify-end ">
             
                <div className=" w-full h-full flex flex-col items-center justify-center">
                  <div className="h-[38vw] w-[50vw] relative mobile:w-[100vw] mobile:h-[70vw] mobile:left-[5%] mobile:mt-[12vw] tablet:w-[70vw] tablet:h-[70vw] tablet:top-[30%]">
                    <Image
                      src="/assets/advaspong/advaspong-redefining.png"
                      fill
                      alt="Redefining Product"
                      className=" fadein"
                    />
                  </div>
                  <div className="mobile:flex mobile:flex-col mobile:gap-[5vw] mobile:mt-[15vw]">

                  <div className="absolute w-[36%] h-fit rounded-[1vw] px-[2vw] py-[1vw] glassmorphism-light flex flex-col items-start justify-center text-[#2A2A2A] left-[10%] top-[25%] mobile:static mobile:w-[90vw] mobile:flex mobile:flex-col mobile:items-center mobile:py-[6vw] mobile:rounded-[4vw] mobile:px-[5vw] ecard-up">
                    <p
                      data-para-anim
                      className="text-[1.55vw] font-light mobile:text-[4.5vw] tracking-wide mobile:text-center tablet:text-[2.5vw]"
                    >
                     Rapid platelet adhesion & aggregation,
                     achieve haemostasis within 2-3 minutes
                    </p>
                  </div>
                  <div className="absolute w-[30%] h-fit rounded-[1vw] px-[2vw] py-[1vw] glassmorphism-light flex flex-col items-start justify-center text-[#2A2A2A] right-[10%] top-[30%] mobile:static mobile:w-[90vw] mobile:flex mobile:flex-col mobile:items-center mobile:py-[6vw] mobile:rounded-[4vw] mobile:px-[5vw] ecard-up">
                    <p data-para-anim className="text-[1.55vw] font-light mobile:text-[4.5vw] tracking-wide mobile:text-center tablet:text-[2.5vw]">
                    Extraordinary blood absorption,
                    50-60 times its molecular weight
                    </p>
                  </div>
                    <div className="absolute w-[30%] h-fit rounded-[1vw] px-[2vw] py-[1vw] glassmorphism-light flex flex-col items-start justify-center text-[#2A2A2A] left-[15%] top-[62%] mobile:static mobile:w-[90vw] mobile:flex mobile:flex-col mobile:items-center mobile:py-[6vw] mobile:rounded-[4vw] mobile:px-[5vw] ecard-up">
                      <p data-para-anim className="text-[1.55vw] font-light mobile:text-[4.5vw] tracking-wide mobile:text-center tablet:text-[2.5vw]">
                      A biodegradable marvel, complete
                      absorption within 3-4 weeks
                      </p>
                    </div>
                   
                      <div className="absolute w-[32%] h-fit rounded-[1vw] px-[2vw] py-[1vw] glassmorphism-light flex flex-col items-start justify-center text-[#2A2A2A] right-[10%] bottom-[28%] mobile:static mobile:w-[90vw] mobile:flex mobile:flex-col mobile:items-center mobile:py-[6vw] mobile:rounded-[4vw] mobile:px-[5vw] tablet:bottom-[15%] ecard-up">
                        <p data-para-anim className="text-[1.55vw] font-light mobile:text-[4.5vw] tracking-wide mobile:text-center  tablet:text-[2.5vw]">
                        Maximizing delicate tissue protection,
                        minimizing sponge swelling effect
                        </p>
                      </div>
                  </div>
                  
                     
                    </div>
                  </div>
                </div>
               
              </div>
              <div className="w-[100vw] h-[100%] absolute top-0 left-0 z-[-1]">
                <Image src="/assets/advaspong/redefining-bg.png"
                fill
                alt="redefining-bg"/>
                </div>
      </section>
    </>
  );
};

export default Redefining;
