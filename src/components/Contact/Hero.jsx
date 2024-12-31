import React from "react";
import Image from "next/image";

const Hero = () => {
 
  return (
    <section className=" hero-container dark" id="hero">
      <div className="w-[100vw] h-[100vh] relative overflow-hidden tablet:h-[80vh]">
        <div className="w-screen h-screen absolute tablet:h-full">
          <Image
            data-speed="0.7"
            className="hero-img absolute object-cover scale-[1.2]"
            src={"/assets/contact/contact-hero-bg.png"}
            alt="Hero Image"
            priority={true}
            fill
          />
        </div>

        <div className="px-[12%] relative mobile:px-[5%]">
          <div className="flex h-dvh w-full flex-col justify-center items-start tablet:h-[50vh] mobile:justify-start mobile:h-fit mobile:pt-[40vw]">
            <div className="w-full">
              <h1 className={`title-1 aeonik   leading-[1] tablet:text-[9vw]`}>
                <span
                 data-para-anim
                  className={`leading-[1.3] overflow-hidden uppercase text-[#FFFFFF] w-[80%] mobile:w-full mobile:text-center `}
                >
                  CONTACT US
                </span>
              </h1>
            
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
