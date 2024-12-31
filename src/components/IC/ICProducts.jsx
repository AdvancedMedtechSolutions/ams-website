import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import styles from "./styles.module.css";

const productContent = [
  {
    title: "ADVAGLIDE",
    src: "/assets/ic/adva-glide.png",
    para: "AMS has advanced the science of flow restoration to provide minimally invasive products.",
  },
  {
    title: "ADVAPRO",
    src: "/assets/ic/adva-pro.png",
    para: "AMS has advanced the science of flow restoration to provide minimally invasive products.",
  },
  {
    title: "Coronary Accessories",
    src: "/assets/ic/coronary-accessories.png",
    para: "AMS has advanced the science of flow restoration to provide minimally invasive products.",
  },
  {
    title: "Cardiovascular Stents",
    src: "/assets/ic/adva-glide.png",
    para: "Our stents are designed for optimal performance and patient outcomes.",
  },
];

const ProductCard = ({ title, src, para, index, activeSlide }) => {
  const isActive = index === activeSlide;

  return (
    <div
      className={`h-full border bg-white/50 border-[#DADADA] flex flex-col justify-between p-[3vw] pt-[1.5vw] rounded-[2.5vw] icProductCard transition-transform duration-500 ${
        isActive ? "!bg-transparent !border-transparent items-start w-[45vw] !h-[40vw]" : "items-center w-[20vw] h-[30vw] !delay-800"
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
        className={`absolute w-[23vw] h-[20vw]   transition-all duration-500 ease-in-out mt-[2vw] top-[20%] ic-card-image ${
          isActive ? "scale-[1.5] !top-[30%] !left-[30%]" : ""
        }`}
      >
        <Image src={src} fill alt="ic-products" className="object-contain"/>
      </div>
      <div>
        <p
          className={`text-[1.15vw] leading-[1.5] transition-opacity tracking-wider  duration-500  aeonik w-[90%] px-[1vw] ${
            isActive ? "visible" : "hidden"
          }`}
        >
          {para}
        </p>
      </div>
    </div>
  );
};

const ICProducts = () => {
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
    <section id="ic-products">
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
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="absolute left-[62%] bottom-[10%] flex items-center justify-center gap-[1vw]">
          <span className="bg-[#1A1A1A] h-[1px] w-[31vw]"></span>
          <p className="text-[2.9vw] aeonik font-light">
            {String(activeSlide + 1).padStart(2, "0")}
          </p>
        </div>

        <div
          className={`px-[1.2vw] py-[1.2vw] absolute z-[5] bottom-[10%] right-[38%] translate-x-[-65%] rounded-full next-button cursor-pointer bg-white/50 group hover:text-white`}
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
          className={`px-[1.2vw] py-[1.2vw] bottom-[10%] right-[45%] absolute z-[5] translate-x-[-38%] bg-white/50 rounded-full prev-button cursor-pointer group hover:text-white`}
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
    </section>
  );
};

export default ICProducts;
