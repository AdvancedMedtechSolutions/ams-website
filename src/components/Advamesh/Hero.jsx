/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className='dark w-screen h-screen relative overflow-hidden  mobile:h-screen tablet:h-[80vh]' id='advameshHero'>
      <div className="w-full h-full ">
        <div className="absolute top-0 right-0 bottom-0 left-0 flex justify-between items-center w-full h-screen mobile:pt-[30vw] tablet:pt-[25vw] tablet:pl-[15vw]  mobile:flex-col tablet:flex-col">
          <div className=" absolute left-[12%] top-[30%]  mobile:w-[100%] mobile:static tablet:static mobile:text-center ">
            <h1
              className="text-white text-[5.3vw] aeonik  leading-[1] hero-text font-light mobile:mb-[4vw] overflow-hidden ">
              <span data-para-anim
                className={`leading-[1.2] overflow-hidden uppercase text-[5.75vw] mobile:text-[13.2vw] tablet:text-[9vw]`}
              >
                ADVAMESH
              </span>
            </h1>
            <div className='flex items-center mt-[0.2vw] w-screen'>
            <p data-para-anim className=" text-[1.1vw] uppercase font-light text-[#FFFFFF] leading-[1.2] tracking-wider mobile:text-[4.6vw]  mobile:w-full  tablet:text-[3vw] t tablet:max-w-[70%]  mobile:text-center mobile:justify-center">
            Advancing the Science of Tissue Reinforcement
                </p>
              </div>
          </div>
        </div>
      </div>
      <div className="absolute h-[100%] w-[100%] top-0 right-0  mobile:w-screen mobile:h-screen mobile:right-0 z-[-1]">
        <Image src="/assets/advamesh/advamesh-hero-bg.png"
          fill
          alt="advamesh Hero bg"
          className="object-cover object-top" />
      </div>
    </section>
  );
};

export default Hero;
