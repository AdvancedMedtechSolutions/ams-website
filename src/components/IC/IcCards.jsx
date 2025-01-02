import React, { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import Image from "next/image";
import Link from "next/link";
import { Media } from "../media";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./styles.module.css";
import LinkButton from "../Button/LinkButton";

const productContent = [
  {
    title: "ADVA GLIDE",
    src: "/assets/ic/adva-glide.png",
    para: "AMS has advanced the science of flow restoration to provide minimally invasive products for use in Percutaneous Transluminal Coronary Angioplasty procedures for revascularisation of coronary arteries.",
    link:'/interventional-cardiology/adva-glide-ptca-coronary-balloon-semi-compliant'
   
  },
  {
    title: "ADVA PRO",
    src: "/assets/ic/adva-pro.png",
    para: "AMS has redefined the science of vascular restoration with ADVA PRO, a Sirolimus Eluting Coronary Stent System engineered for safety and precision",
    link:'/interventional-cardiology/adva-pro-coronary-sirolimus-stent'


  },
  {
    title: "Coronary Accessories",
    src: "/assets/ic/coronary-accessories.png",
    para: "At AMS, we understand that every detail matters in achieving optimal patient outcomes in interventional cardiology. Our comprehensive range of coronary accessories is designed to complement our primary devices, providing healthcare professionals with the tools they need for precision and efficiency in every procedure.",
    link:'/interventional-cardiology/coronary-accessories'

    
  },
  {
    title: "NC ADVA GLIDE",
    src: "/assets/ic/adva-glide.png",
    para: "AMS has advanced the science of flow restoration to provide minimally invasive products for use in Percutaneous Transluminal Coronary Angioplasty procedures for revascularisation of coronary arteries.",
    link:'/interventional-cardiology/adva-glide-nc-ptca-coronary-balloon-non-compliant'

   
  },
];
const ProductCard = ({ title, src, para, index, activeSlide, link }) => {
  const isActive = index === activeSlide;

  return (
    <div
      className={`h-full border bg-white/50 border-[#DADADA] flex flex-col justify-between p-[3vw] pt-[1.5vw] rounded-[2.5vw] icProductCard transition-transform duration-500 ${
        isActive
          ? "!bg-transparent !border-transparent items-start w-[45vw] !h-[46vw]"
          : "items-center w-[20vw] h-[30vw] !delay-800"
      }`}
    >
      <h3
        className={`font-light capitalize text-[#111111] aeonik ${
          isActive ? "text-[2.92vw]" : "text-[1.9vw] text-center"
        }`}
      >
        {title}
      </h3>
      <div
        className={`absolute w-[23vw] h-[20vw]   transition-all duration-500 ease-in-out mt-[2vw] top-[20%] ic-card-image 
           ${index % 3 == 1 &&!isActive ? "!top-[15%] ml-[3vw]" : ""} ${index%3==0&&!isActive?"!top-[15%]":""}
          ${
            isActive && index % 3 == 0
              ? "scale-[2.2] !top-[30%] !left-[30%]"
              : ""
          } ${
          isActive && index % 3 == 1 ? "scale-[1.6] !top-[40%] !left-[30%]" : ""
        } ${isActive ? "scale-[1.5] !top-[30%] !left-[30%] " : ""}`}
      >
        <Image src={src} fill alt="ic-products" className="object-contain" />
      </div>
      <div className="px-[1vw]">
        <p
          className={`text-[1.15vw]  transition-opacity leading-[1.3] tracking-wide font-light  duration-500 w-full  ${
            isActive ? "visible" : "hidden"
          }`}
        >
          {para}
        </p>
        <div className={`pt-[1vw] ${
            isActive ? "visible" : "hidden"
          }`} >
        <LinkButton btnText={"See More"} link={`${link}`}/>
        </div>
      </div>
    </div>
  );
};

export default function IcCards() {
  const swiperRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

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

  const handleSlideChange = (swiper) => {
    setActiveSlide(swiper.realIndex);
  };

  return (
    <>
      <section className="" id="cards-carousel">
        <Media greaterThan="tablet">
          <div className="w-screen h-[45vw] px-[3%] relative">
            <div className="w-full h-full">
              <Swiper
                ref={swiperRef}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                loop={true}
                slidesPerView={3}
                spaceBetween={20}
                speed={700}
                centeredSlides={false} // Center the active slide
                className={`mySwiper w-full h-full ${styles.icProductSwiper}`}
                onSlideChange={handleSlideChange}
              >
                {productContent.map((product, index) => (
                  <SwiperSlide key={index}>
                    <ProductCard
                      title={product.title}
                      src={product.src}
                      para={product.para}
                      index={index}
                      activeSlide={activeSlide}
                      link={product.link}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="absolute left-[62%] bottom-[9%] flex items-center justify-center gap-[1vw]">
              <span className="bg-[#1A1A1A] h-[1px] w-[31vw]"></span>
              <p className="text-[2.9vw] aeonik font-light">
                {String(activeSlide + 1).padStart(2, "0")}
              </p>
            </div>

            <div
              className={`p-[1vw] absolute z-[5] bottom-[10%] right-[40%] translate-x-[-65%] rounded-full next-button cursor-pointer bg-white/50 group hover:text-white`}
              onClick={handleNext}
            >
              <span
                className={`bg-[#222222] w-[100%] h-[100%] absolute top-0 left-0 origin-center scale-0 rounded-full group-hover:scale-100 duration-300`}
              />
              <div className="w-[1.2vw] h-[1.2vw] relative z-[6]">
                <Image
                  src="/assets/home/arrow-right.png"
                  alt="arrow-right"
                  className={`object-cover group-hover:invert duration-300`}
                  fill
                />
              </div>
            </div>
            <div
              className={`p-[1vw] bottom-[10%] right-[45%] absolute z-[5] translate-x-[-38%] bg-white/50 rounded-full prev-button cursor-pointer group hover:text-white`}
              onClick={handlePrev}
            >
              <span
                className={`bg-[#222222] w-[100%] h-[100%] absolute top-0 left-0 origin-center scale-0 rounded-full group-hover:scale-100 duration-300`}
              />
              <div className="w-[1.2vw] h-[1.2vw] relative z-[6] rotate-180">
                <Image
                  src="/assets/home/arrow-left.png"
                  alt="arrow-left"
                  className={`object-cover group-hover:invert duration-300 rotate-180`}
                  fill
                />
              </div>
            </div>
          </div>
        </Media>
        <Media lessThan="desktop">
          <div className=" py-[5%]">
            <div className="w-full flex flex-col gap-[8vw] tablet:gap-[5vw]">
              <h2 data-para-anim className="aeonik title-2 text-center">
                Our IC Products
              </h2>

              <div className="w-full  mobile:mt-[5vw] mobile:fadeUp mobile:block hidden fadeUp tablet:overflow-scroll mobile:fadeUp tablet:block tablet:px-[5%] overflow-visible tablet:mt-0 ">
                <div className=" mobile:flex mobile:flex-col mobile:w-full mobile:items-center mobile:gap-[10vw] mobile:h-fit tablet:flex tablet:flex-nowrap tablet:w-fit tablet:gap-[2vw] tablet:h-fit ">
                  <Link
                    href={"/interventional-cardiology/adva-pro-coronary-sirolimus-stent"}
                    className="w-[85vw] h-[100vw] tablet:w-[45vw] tablet:h-[50vw] relative  overflow-hidden"
                  >
                    <div
                      className={`relative w-full h-full
                    transition-all duration-500 overflow-hidden flex flex-col px-[3vw] py-[4vw] rounded-[6vw] items-center justify-between border border-gray-200 bg-white/50 tablet:rounded-[4vw]`}
                    >
                      <h4
                        className={`aeonik font-light text-[8vw] text-center relative z-[7] tablet:text-[4.5vw] `}
                      >
                        Adva Pro
                      </h4>
                      <div className="w-[85vw] h-full relative">
                        <Image
                          src={`/assets/ic/ic-card-1.webp`}
                          fill
                          className={`object-contain scale-[1.8]`}
                          alt={`ic-card-1`}
                        />
                      </div>
                    </div>
                  </Link>
                  <Link
                    href={"/interventional-cardiology/adva-glide-ptca-coronary-balloon-semi-compliant"}
                    className="w-[85vw] h-[100vw] tablet:w-[45vw] tablet:h-[50vw] relative  overflow-hidden"
                  >
                    <div
                      className={`relative w-full h-full
                  transition-all duration-500 overflow-hidden flex flex-col px-[3vw] py-[4vw] rounded-[6vw] items-center justify-between border border-gray-200 bg-white/50  tablet:rounded-[4vw]`}
                    >
                      <h4
                        className={`aeonik font-light text-[8vw] text-center relative z-[7] tablet:text-[4.5vw] `}
                      >
                        Adva Glide
                      </h4>
                      <div className="w-[85vw] h-full relative ">
                        <Image
                          src={`/assets/ic/adva-glide.png`}
                          fill
                          className={`object-contain scale-[1.1] translate-y-[20%] tablet:scale-[1.2] mobile:mt-[-15vw] tablet:mt-[-5vw]`}
                          alt={`ic-card-2`}
                        />
                      </div>
                    </div>
                  </Link>
                  <Link
                    href={"/interventional-cardiology/coronary-accessories"}
                    className="w-[85vw] h-[100vw] tablet:w-[45vw] tablet:h-[50vw] relative  overflow-hidden"
                  >
                    <div
                      className={`relative w-full h-full
                  transition-all duration-500 overflow-hidden flex flex-col px-[5vw] py-[5vw] rounded-[6vw] items-center justify-between border border-gray-200 bg-white/50 tablet:rounded-[4vw]`}
                    >
                      <h4
                        className={`aeonik font-light text-[8vw] text-center relative z-[7] leading-[1.25] tablet:text-[4.5vw] `}
                      >
                        Coronary Accessories
                      </h4>
                      <div className="w-[85vw] h-full relative">
                        <Image
                          src={`/assets/ic/ic-card-3.webp`}
                          fill
                          className={`object-contain scale-[1.4] translate-y-[-10%] `}
                          alt={`ic-card-3`}
                        />
                      </div>
                    </div>
                  </Link>
                  <Link
                    href={"/interventional-cardiology/adva-glide-nc-ptca-coronary-balloon-non-compliant"}
                    className="w-[85vw] h-[100vw] tablet:w-[45vw] tablet:h-[50vw] relative  overflow-hidden"
                  >
                    <div
                      className={`relative w-full h-full
                  transition-all duration-500 overflow-hidden flex flex-col px-[3vw] py-[4vw] rounded-[6vw] items-center justify-between border border-gray-200 bg-white/50  tablet:rounded-[4vw]`}
                    >
                      <h4
                        className={`aeonik font-light text-[8vw] text-center relative z-[7] tablet:text-[4.5vw] `}
                      >
                       NC Adva Glide
                      </h4>
                      <div className="w-[85vw] h-full relative ">
                        <Image
                          src={`/assets/ic/adva-glide.png`}
                          fill
                          className={`object-contain scale-[1.1] translate-y-[20%] tablet:scale-[1.2] mobile:mt-[-15vw] tablet:mt-[-5vw]`}
                          alt={`ic-card-2`}
                        />
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Media>
      </section>
    </>
  );
}
