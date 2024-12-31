import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

const Hero = () => {
  useGSAP(() => {
    gsap.from(
      ".hero-img",
      {
        xPercent:10,
        opacity:0,
        duration: 1.5,
        delay:0.3,
        ease: "power3.out",
      });
      gsap.from('.hero-text',{
        y:30,
        opacity:0,
        duration:1,
        ease:'power3.out',
        delay:0.5
      })
  });
  return (
    <>
      <section className="hero tablet:pr-[3%] relative w-screen overflow-hidden" id="advastap-hero">
        <div className=" hero-container overflow-hidden  mobile:pt-[30%] tablet:px-[5%] mobile:px-[8%]">
          <div className="  flex flex-col h-screen w-screen justify-center items-start  mobile:h-[75vh] mobile:flex-col mobile:justify-start mobile:w-full mobile:text-center mobile:gap-[2vw] tablet:h-[80vh]">
            <div className=" absolute top-[30%] left-[10%] mobile:w-full mobile:h-fit mobile:flex mobile:flex-col mobile:gap-0 mobile:static">
              <div className=" flex-col mobile:w-full mobile:h-full mobile:flex  mobile:flex-col mobile:gap-[2vw]">
                <h1 className="advastap-text text-white text-[5.3vw] aeonik  leading-[1] hero-text">
                  <span 
                    className={`leading-[1.2] overflow-hidden uppercase text-[5.75vw] mobile:text-[13.2vw] tablet:text-[9vw]`}
                  >
                   ADVASTAP 
                  </span>
                </h1>
                <p data-para-anim className="text-[2.1vw] leading-[1.5] tracking-wide font-light mobile:text-[6vw] mobile:leading-[1.2] mobile:w-full mobile:text-center mobile:py-[2%] mobile:tracking-normal tablet:text-[2.5vw] tablet:w-[60%] tablet:tracking-normal tablet:py-[3%] mobile:uppercase">
                Skin Stapler
                </p>
              </div>
              
            </div>
            <div className="flex items-center justify-center z-[5] mobile:flex-col-reverse">
              <div className="w-[57vw] h-[39vw]   absolute right-[-5%] bottom-[15%] mobile:bottom-auto mobile:top-[40%] mobile:left-[30%] mobile:w-[80vw] mobile:h-[60vw] tablet:w-[50vw] tablet:h-[50vw] z-10 ">
                <Image
                  className="object-contain hero-img"
                  src="/assets/skinstapler/skin-stapler.png"
                  alt="Hero Image"
                  priority={true}
                  fill
                />
              </div>
            </div>
           
          </div>
        </div>
        <div className="absolute h-[100%] w-[100vw] top-0 right-0 z-[-1]">
                <Image src="/assets/skinstapler/hero-bg.png"
              fill
                alt="Advastap Hero bg"
                className="object-cover"/>
            </div>
      </section>
    </>
  );
};

export default Hero;
