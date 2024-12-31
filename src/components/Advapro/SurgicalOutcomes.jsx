import React,{useEffect} from "react";
import "swiper/css";
import Image from "next/image";
import "swiper/css/free-mode";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SurgicalOutcomes = () => {
  useEffect(() => {
    if (globalThis.innerWidth > 0) {
      const ctx = gsap.context(() => {
        const content = document.querySelectorAll(".card-up");
        content.forEach((content) => {
          gsap.from(content, {
            scrollTrigger: {
              trigger:"#surgicalOutcomes",
              start: "top top",
              end: "bottom bottom",
            },
            opacity: 0,
            y: 50,
            ease: 'power3.out',
            duration: 1.5,
            stagger: 0.5,
          });
        });
      });
      return () => ctx.revert();
    }
  }, []);
  return (
    <section id="surgicalOutcomes" className="relative h-[55vw] w-screen overflow-hidden mobile:h-full mobile:py-[15%]  py-[8%] tablet:py-[10%] tablet:h-[80vh]">
      <div className="w-full h-full container-lg">
        <div className="w-full h-full flex flex-col items-start justify-start pb-[5vw] mobile:h-fit tablet:py-0 tablet:gap-[5vw] z-[10]">
          <div className=" text-center flex items-center justify-center w-full mobile:mb-[10vw] mobile:left-[22%] mobile:w-full mobile:top-[5%]">
            <h2
             data-para-anim
              className="title-2 aeonik text-center z-[10] mobile:text-center"
            >
              Elevate Your Surgical Outcomes
            </h2>
          </div>
          <div className="w-[80vw] h-[70vw] absolute top-[-10%] left-[20%] mobile:h-[90vw]  mobile:scale-[1.2] mobile:left-[20%] mobile:top-[10%] z-[10]">
                <Image src="/assets/advapro/surgical.png"
                fill
                alt="surgical-bg"/>
                </div>
          <div className=" flex items-start justify-start gap-[2vw] z-[5] w-full mt-[5vw] h-full tablet:flex-wrap mobile:flex-col mobile:items-center mobile:justify-center mobile:gap-[7vw] mobile:mt-[80vw]  tablet:justify-center tablet:gap-[5vw] tablet:mt-[26vw]">
            <div className="glassmorphism card-up w-[22vw] h-[15vw]  rounded-[2.5vw] border border-white p-[2vw] tablet:w-[38vw] tablet:h-[25vw] mobile:rounded-[7vw] mobile:w-[80vw] mobile:h-[50vw] mobile:p-[4vw]">
                <p className="aeonik text-[1.25vw] leading-[1.5] font-light text-justify w-full text-[#2A2A2A] tablet:text-[2.5vw] mobile:text-[5.6vw] mobile:text-center">ADVA GLIDE SD - Advanced Stent Delivery System, designed with Swiss + Technology</p>
            </div>
            <div className="glassmorphism card-up w-[22vw]  h-[15vw] rounded-[2.5vw] z-[5] border border-white p-[2vw] tablet:w-[38vw] tablet:h-[25vw] mobile:rounded-[7vw] mobile:w-[80vw] mobile:h-[50vw] mobile:p-[4vw]">
                <p className="aeonik text-[1.25vw] leading-[1.5] font-light text-justify w-full text-[#2A2A2A] tablet:text-[2.5vw] mobile:text-[5.6vw] mobile:text-center">ENHANCED Deliverability 
                Excellent force transmission from Hub to Tip Hydrophilic coating enhances navigation in tortuous vessels</p>
            </div>
            <div className="glassmorphism card-up w-[22vw]  h-[15vw] rounded-[2.5vw] border border-white p-[2vw] tablet:w-[38vw] tablet:h-[25vw] mobile:rounded-[7vw] mobile:w-[80vw] mobile:h-[50vw] mobile:p-[4vw]">
                <p className="aeonik text-[1.25vw] leading-[1.5] font-light text-justify w-full text-[#2A2A2A] tablet:text-[2.5vw] mobile:text-[5.6vw] mobile:text-center">PROPRIETORY Shaft Design Highly kink resistant and flexible shaft Balanced Push and Track performance</p>
            </div>
            <div className="glassmorphism card-up w-[22vw]  h-[15vw]  rounded-[2.5vw] border border-white p-[2vw] z-[5] tablet:w-[38vw] tablet:h-[25vw] mobile:rounded-[7vw] mobile:w-[80vw] mobile:h-[50vw] mobile:p-[4vw]">
                <p className="aeonik text-[1.25vw] leading-[1.5] font-light text-justify w-full text-[#2A2A2A] tablet:text-[2.5vw] mobile:text-[5.6vw] mobile:text-center">ENGINEERED for Navigation
                Smooth and Tapered tip design for challenging lesion access Assured confidence in crossing tortuous lesion</p>
            </div>
          </div>
          </div>
          </div>
          
                <div className="w-[100vw] h-[100%] absolute top-0 left-0 z-[1]">
                <Image src="/assets/advapro/surgical-bg-1.png"
                fill
                alt="surgical-bg"/>
                </div>
    </section>
  );
};

export default SurgicalOutcomes;
