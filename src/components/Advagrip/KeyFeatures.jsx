/* eslint-disable react-hooks/rules-of-hooks */
import React, { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { paraAnim } from "../gsapAnimations";
import "swiper/css/navigation";

gsap.registerPlugin(ScrollTrigger);

const FeatureCard = ({ src, title }) => {
  return (
    <>
      <div className='w-full tablet:w-fit flex flex-col items-center justify-center feature-card group opacity-[1] tablet:py-[5%]'>
        <div className='h-[12vw] w-[12vw] mobile:w-[60vw] mobile:h-[40vw] tablet:w-[20vw] tablet:h-[25vw]'>
          <div className='w-full h-full relative fadeUp'>
            <Image
              src={src}
              fill
              alt="Features"
              className='object-contain'
            />
          </div>
        </div>
        <div className='w-full flex justify-center items-center mobile:mt-[5vw]'>
          <p data-para-anim className='text-[1.7vw] leading-[1.2] font-light text-center w-[78%]  mobile:text-[6.5vw] tablet:text-[2.5vw] mt-[2vw] mobile:w-full'>
            {title}
          </p>
        </div>
      </div>
    </>
  )
}

const KeyFeatures = ({ card1, card2, card3, card4 }) => {
  paraAnim();
  

  const swiperRef = useRef(null);
  const [activeButton, setActiveButton] = useState(" ");

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
      setActiveButton("next");
    }
  };

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
      setActiveButton("prev");
    }
  }

  return (
    <>
      <section className=' tablet:py-[10%] mt-[5%]' id='features'>
 

        <div className='h-screen w-screen tablet:h-full mobile:h-full '>
          <div className='h-[90%] w-full border flex flex-col bg-white/50 items-center justify-center gap-[7vw] tablet:py-[5vw] tablet:h-[60%] mobile:h-full mobile:py-[20%]'>
            <div className='mobile:w-[90%] tablet:w-[70%]'>
              <h2
data-para-anim className='title-2 aeonik mobile:text-center tablet:text-center'>Not All Barbed Sutures are Created Equal</h2>
            </div>
            <div className='flex items-center justify-evenly px-[5vw] w-full feature-card-container mobile:flex-col tablet:flex-wrap tablet:justify-center tablet:items-start mobile:gap-[20vw] mobile:mt-[15vw]'>
              <FeatureCard src={card1.src} title={card1.title} />
              <FeatureCard src={card2.src} title={card2.title} />
              <FeatureCard src={card3.src} title={card3.title} /> 
            </div>
          </div>
        </div>
      
        
      </section>
    </>
  )
}

export default KeyFeatures;
