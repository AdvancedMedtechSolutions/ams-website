import React from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

const Think = () => {
  useGSAP(() => {
    if(globalThis.innerWidth<1025){
      gsap.from(".think-img", {
        scrollTrigger: {
          trigger: "#think",
          start: "top 60%",
          end: "bottom bottom",
        },
        xPercent: 5,
        opacity: 0,
        duration: 1.5,
        delay: 0.2,
        ease: "power3.out",
      });

    }
    else{

      gsap.from(".think-img", {
        scrollTrigger: {
          trigger: "#think",
          start: "top top",
          end: "bottom bottom",
        },
        xPercent: 5,
        opacity: 0,
        duration: 1.5,
        delay: 0.2,
        ease: "power3.out",
      });
    }
  });
  return (
    <section
      className="overflow-hidden py-[8vw]  mobile:py-[20%] h-full w-full relative"
      id="think"
    >
      <div className="w-screen h-full container-lg  mobile:h-[150vh] tablet:h-full ">
        <div className="w-full h-full flex flex-col items-center justify-center   ">
          <div className="w-full h-full flex flex-col items-center  justify-center mobile:mb-[10vw] mobile:flex mobile:justify-center mobile:h-fit">
            <h2
              data-para-anim
              className="title-2 aeonik text-center mobile:text-center"
            >
              Think Intelligent. Think ADVASTAP.
            </h2>
          </div>
          <div className="relative w-full h-full flex flex-col items-center justify-center mobile:justify-start">
            <div className="h-[30vw] w-[50vw] scale-[1] relative left-[30%] -top-[5%] mobile:w-[250vw] mobile:h-[120vw] tablet:w-[60vw] tablet:h-[60vw]">
              <Image
                src="/assets/skinstapler/skin-stapler2.png"
                fill
                alt="Ergonomic Product"
                className="object-contain think-img"
              />
            </div>
          </div>
          <div className="w-full h-full">
            <div className="absolute left-[10%] top-[35%] flex flex-col items-start justify-center gap-[1.5vw] mobile:static mobile:gap-[10vw] tablet:gap-[4vw]">
              {[
                "User Centric Intuitive Design",
                "Versatile Flexibility",
                "High Quality Construction",
                "Optimized Cosmesis",
              ].map((text, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center gap-[2vw] px-[1vw] pr-[3vw] rounded-[1vw]  border-transparent group cursor-pointer relative mobile:flex-col mobile:items-center  transition-all duration-500 ease mobile:w-full mobile:rounded-[4vw] think-content hover:border hover:border-[#3A87C8] hover:px-[3vw]"
                >
                  {/* SVG Border */}
                 
                  {/* Icon and Text */}
                  <Image
                    src="/assets/skinstapler/point.png"
                    height={35}
                    width={35}
                    alt="point"
                    className="fadeUp"
                  />
                  <p
                    data-para-anim
                    className="text-[1.67vw] font-light text-[#2A2A2A] group-hover:text-[2vw] transition-all duration-500 ease-inout mobile:text-[7.5vw] mobile:text-center mobile:group-hover:text-[7.5vw] tablet:text-[3vw] tablet:group-hover:text-[3vw]"
                  >
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Think;
