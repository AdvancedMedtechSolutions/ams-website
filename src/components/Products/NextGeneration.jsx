import React from 'react';
import PrimaryButton from "../Button/PrimaryButton";
import Image from 'next/image';

const NextGeneration = () => {

  return (
    <section className='mobile:pb-[10%] py-[5%]' id='next-generation'>
      <div className='container-lg fadeUp relative '>
        <div className='absolute inset-0 w-full h-full z-0'>
        <Image
        fill
          src="/assets/advacryl/needle-bg.png" 
          alt="Background" 
          className='object-cover rounded-[60px] tablet:rounded-[3vw] mobile:rounded-[7vw]'
          
        />
        </div>
        
        <div className='w-full h-full relative px-[3%] py-[10%] pb-[8%] flex justify-center gap-[4vw] flex-col  items-center  z-10 mobile:gap-[15vw] mobile:pb-[30%]'>
          <div className="tablet:w-full tablet:flex tablet:justify-center mobile:w-[75vw]">
            <h2
data-para-anim className="title-2 aeonik text-center z-10 tablet:text-[5vw] ">
              The Next Generation of Needle Technology
            </h2>
          </div>
          <div className='fadeUp z-10'>
            <PrimaryButton link="/r&d/suture-needle-technology" text="See More" />
          </div>
        </div>

      
        <div className='absolute inset-0 bg-white/50  group-hover:shadow-xl duration-300 rounded-[60px] tablet:rounded-[3vw] mobile:rounded-[7vw] z-5'></div>
      </div>
    </section>
  );
};

export default NextGeneration;
