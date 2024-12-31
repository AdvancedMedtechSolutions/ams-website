import React, { useState } from "react";
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

const EdgeCarousel = ({width, sectionHeading,}) => {
  const slidesData = [
    {
      src: "/assets/advaglide/advaglide-carousel-1.png",
    },
    {
      src: "/assets/advaglide/advaglide-carousel-2.png",
    },
    {
      src: "/assets/advaglide/advaglide-carousel-3.png",
    },
  ];
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <section
      id="portfolio-swiper"
      className="overflow-x-hidden py-[7%] pb-[12%] mobile:pt-[10%] bg-white/50"
    >
      <div className="w-full relative h-full flex items-center flex-col gap-[5vw]">
        <h2
data-para-anim className="title-2 aeonik font-light  tablet:text-[7vw] mobile:text-center">
         {sectionHeading}
        </h2>
        <div className="relative fadeUp rounded-[2vw]">
          <Media greaterThan="mobile">
            <div className="fadeUp">
              <Swiper
                slidesPerView={1}
                spaceBetween={0}
                loop={true}
                autoplay={{
                  delay: 1500,
                  disableOnInteraction: false,
                }}
                effect={"creative"}
                speed={1500}
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
                className={`rounded-[2vw] !w-[85vw]`}
                thumbs={{
                  swiper:
                    thumbsSwiper && !thumbsSwiper.destroyed
                      ? thumbsSwiper
                      : null,
                }}
              >
                <SwiperSlide>
                  <div className="w-[85vw] h-[45vw] relative rounded-[2vw] mobile:w-[90vw] mobile:h-[60vh] tablet:h-[60vw] bg-gray-50 overflow-hidden">
                    <div className="relative w-full h-full left-[10%]">
                      <Image
                        src={"/assets/advaglide/advaglide-carousel-1.png"}
                        fill
                        alt="advaglide-slide"
                        className=" mobile:object-cover object-contain"
                      />
                    </div>
                    <div className="absolute top-[50%] left-[8%] flex flex-col gap-[1vw]  mobile:top-[7%] mobile:left-[0%] mobile:items-center mobile:justify-center mobile:text-center tablet:top-[50%]">
                      <h2
                        className="text-black text-[2.2vw] aeonik font-light tablet:text-[4vw]"
                      >
                        Superior Navigability
                      </h2>
                      <p className="text-black text-[1.25vw] font-extralight w-[50%] mobile:text-[4.2vw] mobile:w-[80%] tablet:text-[2.2vw] tablet:w-[70%] tablet:leading-[1.3]">
                        Excellent force transmission during navigation is
                        achieved by balanced pushability and trackability along
                        with low profile balloon, kink resistant shaft and
                        lubricious coating.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="w-[85vw] h-[45vw] relative rounded-[2vw] mobile:w-[90vw] mobile:h-[60vh] tablet:h-[60vw] bg-gray-50 overflow-hidden">
                    <div className="left-[-25%] relative w-full h-full tablet:left-[-35%]">
                      <Image
                        src={"/assets/advaglide/advaglide-carousel-2.png"}
                        fill
                        alt="advaglide-slide"
                        className=" mobile:object-cover object-contain"
                      />
                    </div>
                    <div className="absolute top-[50%] left-[55%] flex flex-col gap-[1vw]  mobile:top-[7%] mobile:left-[0%] mobile:items-center mobile:justify-center mobile:text-center tablet:top-[30%] tablet:left-[55%]">
                      <h2 className="text-black text-[2.2vw] aeonik font-light mobile:text-[8.4vw] tablet:text-[4vw] mobile:leading-[1.25] mobile:mb-[5vw]">
                        Unsurpass Crossability
                      </h2>
                      <p className="text-black text-[1.25vw] font-extralight w-[80%] mobile:text-[4.2vw] mobile:w-[80%] tablet:text-[2.2vw] tablet:w-[90%] tablet:leading-[1.3]">
                        Thinnest balloon wall (0.008 mm) results in excellent
                        gliding and flexibility through tortuous coronary
                        anatomies.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="w-[85vw] h-[45vw] relative rounded-[2vw] mobile:w-[90vw] mobile:h-[60vh] tablet:h-[60vw] bg-gray-50 overflow-hidden">
                    <div className="relative w-full h-full left-[-20%]">
                      <Image
                        src={"/assets/advaglide/advaglide-carousel-3.png"}
                        fill
                        alt="advaglide-slide"
                        className=" mobile:object-cover object-contain"
                      />
                    </div>
                    <div className="absolute top-[50%] left-[45%] flex flex-col gap-[1vw]  mobile:top-[7%] mobile:left-[0%] mobile:items-center mobile:justify-center mobile:text-center tablet:top-[30%]">
                      <h2 className="text-black text-[2.2vw] aeonik font-light mobile:text-[8.4vw] tablet:text-[4vw] mobile:leading-[1.25] mobile:mb-[5vw]">
                        Novel Inner Tube
                      </h2>
                      <p className="text-black text-[1.25vw] font-extralight w-[80%] mobile:text-[4.2vw] mobile:w-[80%] tablet:text-[2.2vw] tablet:w-[70%] tablet:leading-[1.3]">
                        Patented design of inner tube at distal catheter segment
                        provides absolute freedom of guide wire movement on
                        occluded balloon at high inflation pressure (up to RBP)
                        and minimizes the risk of guide wire collapse.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div className={`absolute top-[90%] w-[${width}] left-[20%] endoSmallSwiperContainer`}>
              <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={20}
                slidesPerView={3}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className={` endosmallSwiper`}
              >
                {slidesData.map((slide, index) => (
                  <SwiperSlide key={index}>
                    <Image
                      src={slide.src}
                      className="rounded-[1.5vw] h-[8vw] cursor-pointer border border-gray-300 bg-gray-50 tablet:h-[10vw] object-cover tablet:!rounded-[1.5vw]"
                      width={290}
                      height={300}
                      alt="small swiper"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </Media>
        </div>
        <Media lessThan="tablet">
          <div className="w-full flex flex-col gap-[7vw]">
            <div className="w-[85vw] h-[160vw] flex flex-col relative justify-end items-center p-[8vw] pb-[12vw] gap-[5vw] aeonik bg-white/40 rounded-[9vw] overflow-hidden border fadeUp  ">
              <div className="w-full h-full absolute top-[-25%]">
                
                <Image
                src={"/assets/advaglide/advaglide-carousel-1.png"}
                fill
                alt="advaglide-slide"
                className=" object-contain"
              />
                </div>
              <h3 className="font-light text-[9.4vw] z-[10] text-center leading-[1.2]"> Superior Navigability</h3>
              <p className="text-[6vw] font-light text-center z-[10] leading-[1.4]">Excellent force transmission during navigation is achieved by balanced pushability and trackability along with low profile balloon, kink resistant shaft and lubricious coating.</p>
            </div>
            <div className="w-[85vw] h-[160vw] flex flex-col relative justify-end items-center p-[8vw] pb-[12vw] gap-[5vw] aeonik bg-white/40 rounded-[9vw] overflow-hidden border fadeUp ">
              <div className="w-full h-full absolute top-[-35%]">
                
                <Image
                src={"/assets/advaglide/advaglide-carousel-2.png"}
                fill
                alt="advaglide-slide"
                className=" object-contain"
              />
                </div>
              <h3 className="font-light text-[9.4vw] z-[10] text-center leading-[1.2]"> Unsurpass Crossability</h3>
              <p className="text-[6vw] font-light text-center z-[10] leading-[1.4]">Thinnest balloon wall (0.008 mm) results in excellent gliding and flexibility through tortuous coronary anatomies.</p>
            </div>
            <div className="w-[85vw] h-[160vw] flex flex-col relative justify-end items-center p-[5vw] pb-[12vw] gap-[5vw] aeonik bg-white/40 rounded-[9vw] overflow-hidden border fadeUp ">
              <div className="w-full h-full absolute top-[-35%]">
                
                <Image
                src={"/assets/advaglide/advaglide-carousel-3.png"}
                fill
                alt="advaglide-slide"
                className=" object-contain"
              />
                </div>
              <h3 className="font-light text-[9.4vw] z-[10] text-center leading-[1.2]"> Novel Inner Tube</h3>
              <p className="text-[6vw] font-light text-center z-[10] leading-[1.4]">Patented design of inner tube at distal catheter segment provides absolute freedom of guide wire movement on occluded balloon at high inflation pressure (up to RBP) and minimizes the risk of guide wire collapse.</p>
            </div>
          </div>
        </Media>
      </div>
    </section>
  );
};

export default EdgeCarousel;
