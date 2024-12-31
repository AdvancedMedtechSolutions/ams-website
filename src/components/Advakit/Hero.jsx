/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className=' relative w-screen h-screen overflow-hidden mobile:h-[90vh] tablet:h-[80vh]' id='c-sectionHero'>
      <div className="w-full h-full  z-[10]">
        <div className="absolute top-0 right-0 bottom-0 left-0 flex justify-between items-center mobile:flex-col  tablet:flex-col tablet:top-[5%] z-[10]">
          <div className=" absolute left-[12%] top-[20%] mobile:left-0 mobile:w-[100%] tablet:left-[10%] mobile:top-[15%] ">
          <h1
 className="text-[#F14A92] text-[5.3vw] aeonik leading-[1] hero-text font-light z-[10] mobile:w-[70%] mobile:text-center mobile:ml-[17%] tablet:ml-[5%] overflow-hidden">
                  <span data-para-anim
                    className={`leading-[1.2] overflow-hidden capitalize  text-[5.75vw] mobile:text-[11.2vw] tablet:text-[9vw]`}
                  >
                ADVAKIT C-Section
                  </span>
                </h1>
            <div className='flex items-center mt-[0.2vw] tablet:px-[2vw] tablet:text-center tablet:py-[3vw] mobile:mt-[5vw] mobile:w-[78%] mobile:text-center mobile:ml-[10%]'>
            <p data-para-anim className=" text-[1.25vw] uppercase font-light text-[#1A1A1A] leading-[1.2] tracking-wide z-[10] mobile:text-[4.6vw]  tablet:text-[3vw]  tablet:max-w-full  mobile:text-center  tablet:text-center ">
            Supreme handling performance for complete ease and confidence in Caesarean surgeries
                </p>
              </div>
          </div>

        </div>
        <div className="absolute h-[35vw] w-[80vw] bottom-[-10%] left-[12%] mobile:bottom-[10%] mobile:scale-[2.5] mobile:left-[60%] tablet:bottom-[10%] tablet:scale-[1.2] z-[10]">
          <Image src="/assets/advakit/c-section-product.png" fill alt='C Section Product' className=''/>

        </div>
      </div>
      <div className="absolute h-[100%] w-[100%] top-0 right-0 mobile:w-[250vw] mobile:h-screen mobile:right-0 z-[1]">
                <Image src="/assets/advakit/c-section-bg.png"
              fill
                alt="advakit Hero bg"
                className="object-cover mobile:object-cover"/>
            </div>
    </section>
  );
};

export default Hero;
