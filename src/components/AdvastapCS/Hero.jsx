import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

const Hero = () => {
  useGSAP(() => {
    gsap.from('.lineSpan',{
      scale:0,
      duration:1,
      delay:0.5,
      transformOrigin:'left',
      ease: "power3.out",
    });
    gsap.from('.hero-text',{
      y:30,
      opacity:0,
      duration:1.5,
      ease:'power3.out',
      delay:0.5
    })
  
  });
  return (
    <>
      <section className="hero  tablet:pr-[3%] relative" id="advastap-hero">
        <div className="px-[10%] hero-container overflow-hidden  mobile:pt-[30%] tablet:px-[5%] mobile:px-[8%]">
          <div className="  flex flex-col h-screen w-full justify-center items-start  mobile:h-[85vh] mobile:flex-col mobile:justify-start mobile:text-center mobile:gap-[2vw] tablet:h-[80vh] tablet:justify-start tablet:pt-[20vw]">
            <div className=" relative top-[5%]  mobile:w-full mobile:h-fit mobile:flex mobile:flex-col mobile:gap-0">
              <div className="mobile:w-full mobile:h-full mobile:flex  mobile:flex-col mobile:gap-[2vw] mobile:items-center">
                <h1 className="advastap-text text-white text-[5.3vw] aeonik  leading-[1] hero-text">
                  <span 
                    className={`leading-[1.2] overflow-hidden uppercase text-[5.75vw] mobile:text-[13.2vw] tablet:text-[9vw]`}
                  >
                  ADVASTAP CS
                  </span>
                </h1>
                {/* <div className="bg-black/50 w-[80%] h-[3px] mt-[3vw] hidden mobile:block lineDraw"></div> */}
                <p data-para-anim className="uppercase  text-[1.25vw] leading-[1] tracking-wider font-light mobile:text-[5vw] mobile:leading-[1.2] mobile:w-full mobile:text-center mobile:py-[5%] mobile:tracking-normal tablet:text-[2.5vw] tablet:w-[60%] tablet:tracking-normal tablet:py-[3%]">
                CIRCULAR STAPLER 3-row
                </p>
              </div>
              <div className="flex items-center justify-end w-[82%]  mt-[-0.55vw]  mobile:justify-center mobile:text-center mobile:ml-0 ">
                <span className="w-[12vw] h-[1px] bg-[#4A4A4A] mobile:hidden tablet:w-[15vw] lineSpan tablet:absolute tablet:left-[60%] tablet:top-[87%]"></span>
              </div>
            </div>
              <div className="w-[80vw] h-[20vw]  scale-[2.5] relative left-[-14%] bottom-[7%] pointer-events-none mobile:bottom-[-25%] mobile:w-[70vw]  mobile:h-[60vw] tablet:w-[55vw] tablet:h-[60vw] tablet:bottom-[10%] z-10 fadeUp ">
                <Image
                  className="object-contain mobile:rotate-[-45deg] "
                  src="/assets/advastapcs/circular-stapler.png"
                  alt="Hero Image"
                  priority={true}
                  fill
                />
              </div>
            

          </div>
        </div>
            <div className="absolute h-[100%] w-[100vw] top-0 left-0 z-[-1]">
                <Image src="/assets/endolc/hero-bg-1.png"
              fill
                alt="Advastap Hero bg"
                className="object-cover"/>
            </div>
            <div className="absolute h-[100%] w-[100vw] bottom-0 right-0 z-[-1]">
                <Image src="/assets/endolc/hero-bg-2.png"
               fill
                alt="Advastap Hero bg"
                className="object-cover z-[-1]"/>
            </div>
      </section>
    </>
  );
};

export default Hero;
