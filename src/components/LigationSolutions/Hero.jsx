import React from 'react'
import Image from 'next/image'
const Hero = () => {
   
  return (
       <section className={` hero-container mobile:mb-[15%]`} id="hero">
          <div className="w-[100vw] h-[100vh] relative overflow-hidden tablet:h-[80vh]">
            <div className="w-full h-full absolute tablet:h-full">
              <Image
                className="hero-img object-cover h-full w-full mobile:object-[-150vw]"
                src="/assets/ligation/ligation-hero-bg.png"
                alt="Hero Image"
                priority={true}
                width={1920}
                height={1080}
              />
            </div>
            <div className="px-[12%] relative mobile:px-[5%]">
              <div className="flex h-dvh w-full flex-col justify-center items-start tablet:h-[60vh] mobile:justify-start mobile:pt-[35vw]">
                <div className={`w-[90%] mobile:w-full `}>
                  <h1
                    className={`title-1 w-full aeonik capitalize leading-[1] mobile:text-center overflow-hidden`}
                  >
                    <span data-para-anim className={`leading-[1.21] overflow-hidden text-[#507EBC] w-[80%] mobile:w-full mobile:text-center`}>
                    ADVACLIP
                    </span> 
                  </h1>
                  <p className={` max-w-[30vw]  mb-[4vw] text-[1.15vw] leading-[1.5]  aeonik tracking-wide mobile:text-center  mobile:max-w-[100%] tablet:max-w-[50vw] mobile:my-[7vw] tablet:text-[2.5vw] mobile:text-[4.2vw]`}>
                    <span data-para-anim className={`text-[#111111] uppercase leading-[1.4]`}>
                    Unmatched precision for superior hemostasis
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
  )
}

export default Hero