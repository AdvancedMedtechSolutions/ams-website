import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/pagination";
import {
  FreeMode,
  Thumbs,
  Navigation,
  EffectCreative,
  Autoplay,
} from "swiper/modules";
import Image from "next/image";
import { Media } from "../media";
import styles from './styles.module.css'

const PortfolioCard = ({ src, heading, para, textclass, className }) => {
  return (
    <div className="w-[85vw] h-[50vw] relative rounded-[10px] mobile:h-full mobile:w-full mobile:rounded-2xl mobile:overflow-hidden mobile:border-none tablet:w-[90vw] tablet:h-[70vw]">
      <Image src={src} width={1300} height={800} alt="portfolio Slider" className={`object-cover w-full h-full mobile:static mobile:h-[60vw] mobile:left-0 mobile:top-0 mobile:z-[-1] mobile:rounded-[5vw] ${className}`} />
      <div className="absolute top-[15%] left-[10%] flex flex-col gap-[2vw] w-[60%] tablet:w-[70%] tablet:top-[10%] mobile:w-full mobile:px-0 mobile:static mobile:z-[5] mobile:mt-[5vw] mobile:text-center" >
        <h2 
          className={`${textclass} text-[2.8vw] !font-light mobile:text-[8vw] tablet:text-[4vw] mobile:leading-[1.25] mobile:mb-[3vw] aeonik mobile:text-[#111111]`}
          dangerouslySetInnerHTML={{__html: heading}} />
        <p
          className={`${textclass} text-[1.3vw] font-light w-[80%] mobile:text-[4.2vw] tablet:text-[2.2vw] tablet:w-full tablet:leading-[1.3] mobile:w-full mobile:text-[#111111]`}
          dangerouslySetInnerHTML={{__html: para}}
          />
      </div>
    </div>
  );
};

const PortfolioSwiper = ({ slidesData, textclass, width, className }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
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
    <section id="portfolio-swiper" className="overflow-x-hidden bg-white/50 my-[7%] mt-[12%] tablet:mt-[15%] mobile:mt-[10%]">
      <div className="w-full ml-[10%] pb-[7%] relative h-full mobile:ml-[0%] mobile:pt-[10vw] mobile:pb-[15vw]">
        <div className="text-[1.25vw] text-[#2A2A2A] font-light rotate-[-90deg] absolute left-[-52%] portfolio-text flex items-center gap-[2vw] w-full top-[-10%] tablet:text-[2.5vw] tablet:top-[20%] tablet:left-[-55%]">
          <p className="text-end">{slidesData[0].title}</p>
        </div>
        <div className="mobile:block hidden w-full px-[5vw] text-center font-light text-[8vw] mb-[12vw] capitalize">
          <h2 data-para-anim>{slidesData[0].title}</h2>
        </div>
        <div className="relative rounded-bl-[10px] rounded-tl-[10px] overflow-hidden ">
          <Media greaterThan="mobile">
            <div className="">
              <Swiper
                slidesPerView={1}
                spaceBetween={0}
                // navigation={true}
                loop={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: true,
                }}
                effect={"creative"}
                speed={1000}
                creativeEffect={{
                  prev: {
                    shadow: true,
                    translate: ["-40%", 0, -1],
                  },
                  next: {
                    translate: ["100%", 0, 0],
                  },
                }}
                modules={[FreeMode, Thumbs, EffectCreative, Autoplay]}
                className={`${styles.endoSwiper} rounded-bl-[20px] rounded-tl-[20px] overflow-hidden`}
                thumbs={{
                  swiper:
                    thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
                }}
              >
                {slidesData.map((slide, index) => (
                  <SwiperSlide key={index}>
                    <PortfolioCard
                      src={slide.src}
                      heading={slide.heading}
                      para={slide.para}
                      textclass={textclass}
                      className={className}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </Media>

          <Media lessThan="tablet">
            <div className="relative">
              <Swiper
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                slidesPerView={1}
                spaceBetween={25}
                navigation={false}
                loop={true}
                speed={500}
                modules={[FreeMode, Thumbs, Autoplay]}
                className={`mySwiper mobile:!px-[5%]`}
                thumbs={{
                  swiper:
                    thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
                }}
              >
                {slidesData.map((slide, index) => (
                  <SwiperSlide key={index}>
                    <PortfolioCard
                      src={slide.src}
                      heading={slide.heading}
                      para={slide.para}
                      textclass={textclass}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Custom Next and Previous Buttons */}
              <div className="tablet:hidden mobile:w-full mobile:flex mobile:justify-center mobile:gap-8 mobile:mt-10">
                <button aria-label="previous slide" className="group z-[10] relative bg-white/50 overflow-hidden py-[5vw] px-[5vw] rounded-full prev-button cursor-pointer transition-colors duration-300 border border-gray-200" onClick={handlePrev}>
                  <span className={`bg-[#111111] w-[100%] h-[100%] z-[1] absolute top-0 left-0 origin-center scale-0 rounded-full group-focus:scale-100 group-focus:opacity-100 transition-all duration-300`} />
                  <div className="w-[1.6vw] h-[1.6vw] relative z-[6] mobile:w-[4.5vw] mobile:h-[4.5vw] tablet:w-[2.5vw] tablet:h-[2.5vw]">
                    <Image src="/assets/home/arrow-left.png" alt="arrow-left" className="group-hover:invert transition-all duration-300 group-focus:invert" width={20} height={20} />
                  </div>
                </button>
                <button aria-label="next-slide" className="group z-[10] relative overflow-hidden py-[5vw] px-[5vw] rounded-full next-button cursor-pointer bg-white/50 border border-gray-200" onClick={handleNext}>
                  <span className={`bg-[#111111] w-[100%] h-[100%] z-[1] absolute top-0 left-0 origin-center scale-0 rounded-full group-focus:scale-100 group-focus:opacity-100 transition-all duration-300`} />
                  <div className="w-[1.6vw] h-[1.6vw] relative z-[6] mobile:w-[4.5vw] mobile:h-[4.5vw] tablet:w-[2.5vw] tablet:h-[2.5vw]">
                    <Image src="/assets/home/arrow-right.png" alt="arrow-right" className="group-hover:invert transition-all duration-300 group-focus:invert" width={20} height={20} />
                  </div>
                </button>
              </div>
            </div>
          </Media>

          <Media greaterThanOrEqual="tablet">
            <div className={`absolute top-[78%] ${width} endoSmallSwiperContainer flex items-center justify-center tablet:left-0`}>
              <Swiper
                onSwiper={setThumbsSwiper}
                slidesPerView={slidesData.length}
                spaceBetween={20}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className={`${styles.endosmallSwiper}`}
              >
                {slidesData.map((slide, index) => (
                  <SwiperSlide key={index}>
                    <Image
                      src={slide.srcsmall}
                      className="rounded-[1.2vw] w-[11.5vw] h-[7vw] tablet:w-[15vw] tablet:h-[10vw] cursor-pointer border-[2px] border-white"
                      width={280}
                      height={280}
                      alt="small swiper"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </Media>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSwiper;
