import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

const Hero = () => {
  useGSAP(() => {
    gsap.from(
      ".hero-img",
      {
        opacity:0,
        x:30,
        duration: 1.5,
        delay:0.5,
        ease: "power3.out",
      }
    );

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
  
  });
  return (
    <>
      <section className="hero  tablet:pr-[3%] relative" id="advastap-hero">
        <div className="px-[10%]  hero-container overflow-hidden w-screen  mobile:pt-[30%] tablet:px-[5%] mobile:px-[8%]">
          <div className="  flex flex-col h-screen w-full justify-center items-start  mobile:h-[90vh] mobile:flex-col mobile:justify-start mobile:text-center mobile:gap-[2vw] tablet:h-[80vh] mobile:static tablet:justify-start tablet:pt-[25vw]">
            <div className=" mobile:w-full mobile:h-fit mobile:flex mobile:flex-col mobile:gap-0">
              <div className="mobile:w-full mobile:h-full mobile:flex  mobile:flex-col mobile:gap-[2vw] mobile:items-center">
                <h1 className="advastap-text text-white text-[5.7vw] aeonik leading-[1] hero-text">
                  <span   
                    className={`leading-[1.2] overflow-hidden uppercase text-[5.75vw] mobile:text-[13.2vw] tablet:text-[9vw] `}
                  >
                    advastap ENDO LC
                  </span>
                </h1>
                {/* <div className="hidden mobile:block w-[60%] h-[3px] mt-[3vw] bg-black/30 lineDraw"></div> */}
                <p data-para-anim className="uppercase  text-[1.25vw] leading-[1] tracking-wider font-light mobile:text-[5vw] mobile:leading-[1.2] mobile:w-[70%] mobile:text-center mobile:py-[5%] mobile:tracking-normal tablet:text-[2.5vw] tablet:w-[60%] tablet:tracking-normal tablet:py-[3%]">
                Endoscopic Linear Cutter 3-row
                </p>
              </div>
              <div className="flex items-center justify-center  ml-[8.5vw] mt-[-0.5vw] w-fullmobile:w-full tablet:absolute tablet:left-[-29%] tablet:top-[40.5%]">
                <span className="w-[12vw] h-[1px] bg-[#4A4A4A] mobile:hidden tablet:w-[20vw] lineSpan mt-[-0.4vw]"></span>
              </div>
            </div>
            <div className="flex flex-col items-center justify-end z-[5] mobile:flex-col-reverse mobile:right-[5%] mobile:top-[20%]">

              <div className="w-[80vw] h-[20vw] scale-[1.6] relative top-[35%] left-[20%] pointer-events-none mobile:top-[120%] mobile:left-auto mobile:right-[-45%] mobile:w-[50vw] mobile:h-[35vw] tablet:w-[25vw] tablet:h-[25vw] tablet:top-[60%] tablet:left-[60%]  z-10  tablet:absolute ">
                <Image
                quality={100}
                  className=" object-contain  mobile:rotate-[30deg] tablet:shadow-none hero-img mobile:scale-[1.4]"
                  src="/assets/endolc/advastap-endolc.png"
                  alt="Hero Image"
                  priority={true}
                  fill
                />
              </div>
            </div>

          
          </div>
         
        </div>
        <div className="absolute h-[100%] w-[100%] top-0 right-[-15%] mobile:w-screen mobile:h-screen mobile:right-0 z-[-1]">
                <Image src="/assets/endolc/hero-bg-1.png"
              fill
                alt="Advastap Hero bg"
                className="object-cover "/>
            </div>
            <div className="absolute h-[100%] w-[100%] bottom-0 left-[-15%] z-[-1] mobile:left-0">
                <Image src="/assets/endolc/hero-bg-2.png"
               fill
                alt="Advastap Hero bg"
                className="object-cover"/>
            </div>
      </section>
    </>
  );
};

export default Hero;
