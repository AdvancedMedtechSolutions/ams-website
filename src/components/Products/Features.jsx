/* eslint-disable react-hooks/rules-of-hooks */
import React, { useRef, useState } from 'react';
import Image from 'next/image';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { paraAnim } from "../gsapAnimations";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";


gsap.registerPlugin(ScrollTrigger);

const FeatureCard = ({ src, title }) => {
  return (
    <div className='w-full  tablet:w-fit flex flex-col items-center justify-center feature-card group opacity-[0.2] cursor-pointer duration-500 transition-all ease  hover:opacity-[1] tablet:py-[5%] mobile:opacity-[1] tablet:opacity-[1] hover:scale-[1.05]'>
      <div className='h-[19vw] w-[19vw] mobile:w-[60vw] mobile:h-[50vw] tablet:w-[42vw] tablet:h-[25vw]'>
        <div className='w-full h-full relative'>
          <Image
            src={src}
            fill
            alt="Features"
            className='object-contain'
          />
        </div>
      </div>
      <div className='w-full  flex justify-center items-center '>
        <p data-para-anim className='text-[1.15vw] font-light  text-center w-[75%] mobile:text-[6vw] tablet:text-[2.5vw] mobile:w-[80%] tablet:w-[70%]'>
          {title}
        </p>
      </div>
    </div>
  );
};

const Features = ({ features }) => {
  paraAnim();

  const swiperRef = useRef(null);
  const [activeButton, setActiveButton] = useState("");

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
     
    }
  };

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    
    }
  };

  return (
    <section className='mobile:py-[10%] py-[5%] tablet:py-[8%]' id='features'>
        <div className='h-full w-screen container-lg tablet:h-full mobile:hidden'>
          <div className='h-full w-full border-[2px] border-[#ffffff] rounded-[2.5vw] py-[4vw] flex flex-col bg-white/50 items-center justify-center gap-[4vw] tablet:py-[5vw] tablet:h-[60%]'>
            <div>
              <h2
data-para-anim className='title-2 aeonik'>Key Features</h2>
            </div>
            <div className='flex items-center justify-evenly w-full feature-card-container tablet:flex-wrap tablet:justify-center tablet:items-start'>
              {features.map((feature, index) => (
                <FeatureCard key={index} src={feature.src} title={feature.title} />
              ))}
            </div>
          </div>
        </div>
     
        <div className='h-screen w-screen container-lg mobile:h-full relative hidden mobile:block'>
          <div className='mb-[10%] mobile:mb-[15vw]'>
            <h2 className='title-2 aeonik mobile:text-center'>Key Features</h2>
          </div>
          <div className='h-[120vw] w-full border rounded-[9vw] flex flex-col bg-white/50 items-center justify-center gap-[6vw] mobile:pt-[10vw]'>
            <Swiper
              navigation={false}
              modules={[Navigation]}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              spaceBetween={40}
              className="molecularSwiper mySwiper w-full h-full mobile:h-[100%] tablet:h-[100%]"
            >
              {features.map((feature, index) => (
                <SwiperSlide key={index}>
                  <FeatureCard src={feature.src} title={feature.title} />
                </SwiperSlide>
              ))}
            </Swiper>
            <div
              className={`absolute z-[5] bottom-[10%] left-[63%] translate-x-[-65%] overflow-hidden border bg-white/50 py-[5vw] px-[5vw] rounded-full next-button cursor-pointer group hover:text-white border-black/20 
            `}
              onClick={handleNext}
            >
              <span
                className={`bg-[#111111] w-[100%] h-[100%] z-[1] absolute top-0 left-0 origin-center scale-0 rounded-full  group-hover:scale-100 duration-300
               `}
              ></span>
              <div className="w-[1.6vw] h-[1.6vw] relative z-[6] mobile:w-[4.5vw] mobile:h-[4.5vw] tablet:w-[2.5vw] tablet:h-[2.5vw]">
                <Image
                  src="/assets/home/arrow-right.png"
                  alt="arrow-right"
                  className={`object-cover group-hover:invert transition-all duration-300 
                  `}
                  fill
                />
              </div>
            </div>
            <div
              className={`absolute z-[5] bottom-[10%] left-[37%] translate-x-[-38%] bg-white/50 overflow-hidden border py-[5vw] px-[5vw] rounded-full prev-button group cursor-pointer hover:text-white  border-black/20
             `}
              onClick={handlePrev}
            >
              <span
                className={`bg-[#111111] w-[100%] h-[100%] z-[1] absolute top-0 left-0 origin-center scale-0 rounded-full group-hover:scale-100 duration-300
               `}
              ></span>
              <div className="w-[1.6vw] h-[1.6vw] relative z-[6] mobile:w-[4.5vw] mobile:h-[4.5vw]">
                <Image
                  src="/assets/home/arrow-left.png"
                  alt="arrow-left"
                  className={`object-cover group-hover:invert transition-all duration-300 
                 `}
                  fill
                />
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};

export default Features;
