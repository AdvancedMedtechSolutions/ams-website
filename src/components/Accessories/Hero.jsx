import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section id='accessoriesHero' className='dark'>
      <div className="w-screen h-screen relative overflow-hidden hero-container mobile:h-screen tablet:h-[80vh]">
        <Image
          src="/assets/accessories/accessories-hero-bg.png"
          fill
          priority={true}
          alt="accessories-hero"
          className="object-cover absolute hero-img"
        />
        <div className="absolute top-0 right-0 bottom-0 left-0 flex justify-between items-center mobile:flex-col mobile:top-[25%] tablet:flex-col tablet:top-[22%]">
          <div className="text-white absolute left-[12%] w-[50%]  mobile:left-[0%] mobile:w-[100%] tablet:left-[15%]">
            <h1 className=" text-[5.7vw] font-light leading-[1.2] aeonik  w-[100%] mobile:text-[12.2vw] mobile:text-center tablet:text-[9vw] ">
              <span data-para-anim className="leading-[1] overflow-hidden uppercase text-[#FFFFFF]  mobile:w-full mobile:text-center">
              CORONARY 
              ACCESSORIES
              </span>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
