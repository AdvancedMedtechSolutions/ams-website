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
    })
    gsap.from('.hero-text',{
      y:30,
      opacity:0,
      duration:1,
      ease:'power3.out',
      delay:0.5
    })
    gsap.from('.hero-img-1',{
      y:30,
      opacity:0,
      duration:1.5,
      delay:0.5,
      ease:"power3.out"
    })
    gsap.from('.hero-img-2',{
      y:30,
      opacity:0,
      duration:1.5,
      delay:0.5,
      ease:"power3.out"
    })
  });

  return (
    <>
      <section className="hero relative w-screen overflow-hidden" id="advastap-hero">
        <div className="px-[10%] hero-container overflow-hidden  mobile:pt-[10%] tablet:px-[5%] mobile:px-[8%]">
          <div className="  flex flex-col h-screen w-full justify-center items-start  mobile:h-[90vh]  mobile:flex-col mobile:justify-start mobile:text-center mobile:gap-[2vw] tablet:h-[80vh] tablet:justify-start tablet:pt-[15vw]">
            <div className=" relative top-[10%]  mobile:w-full mobile:h-fit mobile:flex mobile:flex-col mobile:gap-0">
              <div className="mobile:w-full mobile:h-full mobile:flex  mobile:flex-col mobile:gap-[2vw] mobile:items-center relative z-[1]">
                <h1 className="advastap-text text-white text-[5.3vw] aeonik leading-[1] hero-text">
                  <span 
                    className={`leading-[1.2] overflow-hidden uppercase text-[5.75vw] mobile:text-[13.2vw] tablet:text-[9vw]`}
                  >
                   ADVASTAP POWERED LC
                  </span>
                </h1>
                {/* <div className="hidden mobile:block w-[60%] h-[3px] mt-[3vw] bg-black/30 lineDraw"></div> */}

                <p data-para-anim className="uppercase  text-[1.25vw] leading-[1] tracking-wider font-light mobile:text-[5vw] mobile:leading-[1.2] mobile:w-[80%] mobile:text-center mobile:py-[5%] mobile:tracking-normal tablet:text-[2.5vw] tablet:w-[60%] tablet:tracking-normal tablet:py-[3%]">
                Powered Linear Cutter 3-row
                </p>
              </div>
              <div className="flex items-center justify-center ml-[-3.5vw] w-full   mt-[-0.5vw]  mobile:justify-center mobile:text-center mobile:ml-0 ">
                <span className="w-[12vw] h-[1px] bg-[#4A4A4A] mobile:hidden tablet:w-[15vw] lineSpan tablet:absolute tablet:top-[87%] tablet:left-[45%]"></span>
              </div>
            </div>
            <div className="flex items-center justify-center z-[5] mobile:flex-col-reverse mobile:right-0 mobile:top-[20%] tablet:top-[30%]">
              <div className="w-[80vw] h-[25vw]  scale-[2] relative right-[-55%] top-[-5%] mobile:top-[85%] mobile:left-[110%] mobile:w-[55vw] mobile:h-[55vw] tablet:w-[45vw] tablet:h-[45vw] pointer-events-none tablet:right-[-160%] tablet:top-[5%] mobile:scale-[1.8]">
                <Image
                  className="object-contain hero-img-1 rotate-[90]"
                  src="/assets/poweredlc/poweredlc-1.png"
                  alt="Hero Image"
                  priority={true}
                  fill
                />
              </div>
            </div>
            <div className="w-[80vw] h-[20vw]  scale-[1.3] left-[-25%] bottom-[5%] absolute  mobile:top-[25%] mobile:left-[10%] mobile:w-[80vw] mobile:h-[60vw] tablet:w-[55vw] tablet:h-[60vw] z-[0]  ">
                <Image
                  className="object-contain hero-img-2"
                  src="/assets/poweredlc/poweredlc.png"
                  alt="Hero Image"
                  priority={true}
                  fill
                />
              </div> 

          
          </div>
        </div>
        <div className="absolute h-[100%] w-[100vw] top-0 right-0">
                <Image src="/assets/poweredlc/hero-bg-1.png"
              fill
                alt="Advastap Hero bg"
                className="object-cover z-[-1]"/>
            </div>
            <div className="absolute h-[100%] w-[100vw] bottom-0 left-0">
                <Image src="/assets/poweredlc/hero-bg-2.png"
               fill
                alt="Advastap Hero bg"
                className="object-cover z-[-1]"/>
            </div>
      </section>
    </>
  );
};

export default Hero;
