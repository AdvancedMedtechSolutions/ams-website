import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import "swiper/css/free-mode";
import { Scrollbar } from "swiper/modules";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import styles from './styles.module.css'

gsap.registerPlugin(useGSAP, ScrollTrigger);

const SurgicalCard = ({ img, para,title,tclass }) => {
  return (
    <>
     <div className="">
        <p  data-para-anim className={`text-[1.67vw] font-light w-[85%] ml-[2vw] h-[6vw] ${tclass} mobile:text-[8vw] mobile:w-[90%] mobile:h-[25vw] mobile:text-center tablet:text-[3vw] tablet:leading-[1.2] tablet:h-[10vw]`}>{title}</p>
        <div className="h-[24vw] w-[20vw] p-[1vw] rounded-[2.5vw] bg-white flex flex-col items-center justify-center gap-[1vw] mobile:w-[90vw] mobile:h-[110vw] mobile:rounded-[9vw] tablet:w-[43vw] tablet:h-[55vw] tablet:rounded-[4vw]">
          <div className="h-[80%] w-[100%] rounded-[2vw] flex items-center justify-center surgical-card-image mobile:rounded-[6vw] mobile:h-[67%] mobile:w-[95%] tablet:rounded-[3vw]">
            <div className="h-[44%] w-[45%] relative">
              <Image
                src={img}
                fill
                alt="surgical card"
                className="object-contain "
              />
            </div>
          </div>
          <div className=" aeonik font-light leading-[1.2] text-[1.25vw]  text-center h-[20%] mobile:text-[6vw] mobile:leading-[1.3] mobile:mt-[3vw] mobile:w-[90%] mobile:text-center mobile:h-[25%] tablet:text-[2.8vw]">
            <p data-para-anim >{para}</p>
          </div>
        </div>
      </div>
    </>
  );
};

const SurgicalOutcomes = ({data, tclass}) => {
  useGSAP(() => {
    if (globalThis.innerWidth > 1024) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".surgicalSwiper",
        },
      });
      tl.fromTo(
        ".surgicalSwiper .swiper-container",
        {
          xPercent: 70,
          opacity: 0.5,
        },
        {
          xPercent: 0,
          duration: 2,
          delay: 0.3,
          opacity: 1,
          ease: "power3.out",
        }
      );
    }
  });

  const swiperRef = useRef(null);
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
    <section id="surgical-outcomes" className="relative mobile:h-full mobile:py-[15%] mobile:pb-[35%] py-[8%] tablet:py-[10%]">
      <div className="w-screen h-full container-lg">
        <div className="w-full h-full flex flex-col items-center justify-center pb-[2vw] mobile:h-fit tablet:py-0 tablet:gap-[5vw]">
          <div className="w-full h-full flex flex-col items-center justify-center mb-[3vw] mobile:mb-[10vw] mobile:flex mobile:justify-center">
            <h2
             data-para-anim
              className="title-2 aeonik text-center mobile:text-center"
            >
              Elevate Your Surgical Outcomes
            </h2>
          </div>

          <div className="w-full h-full mt-[5vw] cursor-grab fadeUp">
            <Swiper
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              className={`mySwiper w-full h-full ${styles.surgicalSwiper}`}
              spaceBetween={20}
            scrollbar={true}
              modules={[Scrollbar]}
              breakpoints={{
                541: {
                  slidesPerView: 1,
                  spaceBetween: 30,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                1025: {
                  slidesPerView: 4,
                  spaceBetween: 50,
                },
              }}
            >
              {data.map((item, index) => (
                <SwiperSlide key={index} className="mobile:w-full mobile:h-full mobile:flex mobile:items-center">
                  <SurgicalCard img={item.img} para={item.para} title={item.title} tclass={tclass}/>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="w-full hidden mobile:block">
            <div
              className={`absolute z-[5] bottom-[5%] left-[65%] translate-x-[-65%] overflow-hidden py-[5vw] px-[5vw] rounded-full next-button cursor-pointer bg-white/50 `}
              onClick={handleNext}
            >
              <span
                className={`bg-[#111111] w-[100%] h-[100%] z-[1] absolute top-0 left-0 origin-center scale-0 rounded-full `}
              ></span>
              <div className="w-[1.6vw] h-[1.6vw] relative z-[6] mobile:w-[4.5vw] mobile:h-[4.5vw] tablet:w-[2.5vw] tablet:h-[2.5vw]">
                <Image
                  src="/assets/home/arrow-right.png"
                  alt="arrow-right"
                  className={`object-cover group-hover:invert transition-all duration-300 `}
                  fill
                />
              </div>
            </div>

            <div
              className={`absolute z-[5] bottom-[5%] left-[39%] translate-x-[-38%] bg-white/50 overflow-hidden py-[5vw] px-[5vw] rounded-full prev-button cursor-pointer`} 
              
              onClick={handlePrev}
            >
              <span
                className={`bg-[#111111] w-[100%] h-[100%] z-[1] absolute top-0 left-0 origin-center scale-0 rounded-full`}
                  
              ></span>
              <div className="w-[1.6vw] h-[1.6vw] relative z-[6] mobile:w-[4.5vw] mobile:h-[4.5vw]">
                <Image
                  src="/assets/home/arrow-left.png"
                  alt="arrow-left"
                  className={`object-cover group-hover:invert transition-all duration-300`}
                  fill
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-0 h-[100%] w-[100vw] z-[-1]">
        <Image
          src="/assets/poweredlc/surgical-bg.png"
          fill
          alt="surgical bg"
          className="object-cover"
        />
      </div>
    </section>
  );
};

export default SurgicalOutcomes;
