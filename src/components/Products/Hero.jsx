import Image from "next/image";
import React from "react";

const Hero = ({heading, tagline, para1, src,bgimg, para2, className = ""}) => {
  return (
    <>
      <section className="w-screen h-screen relative overflow-hidden" id="product-hero">
        <div className="container-lg ">
          <div className="w-full flex flex-col gap-[2vw] justify-center h-screen pl-[5vw] mobile:justify-start mobile:items-center mobile:text-center mobile:pl-0 mobile:pt-[30vw] mobile:gap-[5vw] tablet:justify-start tablet:pt-[20vw]">
            <div className="flex flex-col z-[10] mobile:gap-[5vw]">
              <h1 className={`text-[6vw] font-light uppercase mobile:text-[13.2vw] leading-[1] aeonik tablet:text-[8.5vw] fadeUp ${className}`}>
                {heading}
              </h1>
              <p data-para-anim className="text-[1.2vw] uppercase tracking-wide mobile:text-[4.5vw] mobile:normal-case tablet:text-[2.5vw] tablet:w-[90%]">
                {tagline}
              </p>
            </div>
            <div className="relative pl-[1vw] w-[38%] z-[10] mt-[3vw] mobile:pl-0 mobile:w-[90%] mobile:mt-0 tablet:w-[50%] tablet:pl-[2vw]">
              <span className="w-[2px] rounded-full h-[80%] absolute left-0 top-[50%] -translate-y-[50%] bg-black fadeUp mobile:hidden"></span>
              <p data-para-anim className="text-[1.6vw] font-light leading-[1.1] mobile:text-[4.5vw] mobile:font-light tablet:text-[2.5vw]">
                {para1}
              </p>
            </div>
            <div data-para-anim className="absolute font-light right-[10%] bottom-[5%] z-[10] text-[1.65vw] leading-[1.2] w-[35%] mobile:w-full mobile:static mobile:text-[4.5vw] mobile:font-light tablet:text-[3vw] tablet:bottom-[12%]">
              {para2}
            </div>
            <div >
              <div className="absolute z-[2] right-[7%] top-[20%] w-[40vw] h-[30vw] fadeUp mobile:bottom-0 mobile:top-auto mobile:w-[85vw] mobile:h-[100vw] mobile:right-[8%] tablet:w-[70vw] tablet:h-[50vw] tablet:top-auto tablet:bottom-[20%]">
                <Image
                  src={src}
                  alt="products-image"
                  className="object-contain"
                  fill
                />
              </div>
              <div className="absolute z-[1] right-[10%] top-[15%] w-[40vw] h-[40vw] fadeUp mobile:bottom-0 mobile:top-auto mobile:right-[10%] mobile:w-[90vw] mobile:h-[100vw] tablet:w-[80vw] tablet:h-[70vw] tablet:top-auto tablet:bottom-[10%]">
                <Image
                  src={bgimg}
                  alt="products-bg"
                  className="object-contain scale-[1.5]"
                  fill
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
