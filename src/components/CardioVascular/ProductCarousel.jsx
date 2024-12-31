import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import gsap from "gsap";
import styles from './styles.module.css'
import PrimaryButton from '../Button/PrimaryButton';


const ProductCarousel = () => {
  const slidesData = [
    {
      title: "ADVABOND",
      para: "Braided Coated Polyester Green & White",
      imageSrc: "/assets/cardioVascular/advabond.png",
      description1: "The enduring and comprehensive solution for valve replacement and valve repair procedures providing excellent tensile strength for permanent support.",
      description2:"Silicone coating designed for excellent handling enabling superior pliability and knotting characteristics.",
      description3 : "ADVAPLEDGET assures consistent performance providing smooth uniform construction for precise suture placement.",
      src:"/advabond-cv"
    }   ,
    {
      title: "ADVALENE",
      para: "Monofilament Polypropylene Blue",
      imageSrc: "/assets/cardioVascular/advalene.png",
      description1: "-The only Polypropylene with an advanced and unique dispensing system designed to deliver ease of suture dispensing with minimal memory in the suture strand.",
      description2: "Most inert monofilament structure makes ADVALENE Cardiovascular suture an ideal choice for anastomosis.",
      description3 : "ADVAPRIME needles are specially designed with an engineered tip to maintain shape and sharpness pass after pass for the most challenging calcified lesions & fibrotic blood vessels.",
      src:"/advalene-cv"
    },
    {
      title: "ADVASTEEL",
      para: "Monofilament Stainless Steel 316 LVM",
      imageSrc: "/assets/cardioVascular/advasteel.png",
      description1: "Excellent compatibility with body tissues for minimal tissue reactivity.",
      description2:"Advanced design with superior pliability conforming closely to contour of sternum.",
      description3 : "High resistance to breakage during bend tightening by twisting with excellent knot security.",
      src:"/advasteel-cv"
    } ,
    {
      title: "ADVAWAX",
      para: "Braided Coated Polyester Green & White",
      imageSrc: "/assets/cardioVascular/advawax.png",
      description1: "ADVAWAX acts as a mechanical (tamponade) barrier helping in achieving local hemostasis of bone.",
      description2:"ADVAWAX minimizes formation of any foreign body or inflammatory reaction and delays bone regeneration.",
      description3 : "ADVAWAX provides ease of application due to smooth consistency.",
      src:"/advapacer-and-wax"
    }  ,
    {
      title: "ADVAPACER",
      para: "Multifilament 316L Stainless Steel",
      imageSrc: "/assets/cardioVascular/advapacer.png",
      description1: "Twisted 316L stainless steel wire, with blue Low Densile Polyethylene coating (sheathed), double needle in suture size 2-0, having a length of 60 cm.",
      description2:" Lead conductor resistant (14.50Ω/M)",
      description3 : "",
      src:"/advapacer-and-wax"

    } ,
    {
      src: "/ligation-solutions",
      title: "ADVACLIP",
      para: "Titanium Ligation Clip",
      imageSrc: "/assets/cardioVascular/advaclip.png",
      description1: "Secure precision with ADVACLIP Titanium Clips, delivering reliable vascular and tissue occlusion with superior biocompatibility and minimal tissue reaction.",
      description2: "Designed for effective hemostasis, ADVACLIP is compatible with appliers tailored for Minimally Invasive Cardiac Surgery (MICS).",
      description3: "A color-coded system ensures easy size identification, enhancing efficiency and accuracy during procedures.",
      src:"/ligation-solutions"

    },
         
  ];

  const [activeSlide, setActiveSlide] = useState(0);
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
  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setActiveSlide(currentIndex);
    if(globalThis.innerWidth>1023){
    gsap.to(".content-fade", {
      opacity: 0,
      y: 20,
      duration: 0.5,
      onComplete: () => {
        gsap.to(".content-fade", {
          opacity: 1,
          y: 0,
          duration: 0.5,
        });
      },
    });
    gsap.to(swiper.slides, {
      scale: 1.3,
      x: 20,
      width: "50vw",
      duration: 1,
      ease: "power3.out",
    });
    gsap.to(swiper.slides[swiper.activeIndex - 1], {
      scale: 0.8,
      x: -20,
      width: "40vw",
      duration: 2,
      ease: "power3.out",
    });
    gsap.to(swiper.slides[swiper.activeIndex + 1], {
      scale: 0.8,
      x: -20,
      width: "40vw",
      duration: 2,
      ease: "power3.out",
    });
  };
}


  return (
    <section id="productCarousel" className="relative w-screen overflow-hidden  mobile:h-[280vw] mobile:py-[10%] bg-white/30 mt-[7%]  mobile:mb-[15%] tablet:h-[100vh] mobile:mt-0 ">
      <div className="w-full h-full flex items-center justify-end pl-[5vw] mobile:gap-[25vw] mobile:flex-col-reverse tablet:flex-col-reverse mobile:pl-0">
        <div className="w-[50%] mobile:w-full mobile:h-[68vw] tablet:w-full tablet:h-[50vh]">
          <div className="mobile:flex mobile:flex-col mobile:items-center mobile:justify-center">
            <h2 className="title-2 aeonik mobile:text-center mobile:ml-0 mobile:px-[5vw] ">
              <span data-para-anim>{slidesData[activeSlide]?.title}</span>
            </h2>
            <p className="text-[2.2vw] font-light mobile:text-[5.5vw] mobile:text-center mobile:w-[85%] tablet:text-[3.5vw]">
              {slidesData[activeSlide]?.para}
            </p>
          </div> 
          <div className="pt-[2vw]">
            
            <p className="content-p w-[85%] py-[1vw] mobile:w-full mobile:text-center mobile:px-[5vw] mobile:py-[1.5vw] tablet:text-[2.5vw] tablet:w-[85%]">
              {slidesData[activeSlide].description1}
            </p>
            <p className=" content-p w-[85%] py-[1vw] mobile:w-full mobile:text-center mobile:px-[5vw] mobile:py-[1.5vw] tablet:text-[2.5vw] tablet:w-[85%]">
              {slidesData[activeSlide].description2}
            </p>
            <p className=" content-p w-[85%] py-[1vw] mobile:w-full mobile:text-center mobile:px-[5vw] mobile:py-[1.5vw] tablet:text-[2.5vw] tablet:w-[95%]">
              {slidesData[activeSlide].description3}
            </p>
            <div className='fadeUp mt-[4vw] flex items-center justify-center'>
              <PrimaryButton text={"Read More"} link={slidesData[activeSlide].src} />
            </div>
          </div>
        </div>
        <div className="w-[50vw] h-[50%] overflow-hidden mobile:w-full mobile:h-[40%] tablet:mt-[10%] tablet:w-full">
          <Swiper
            ref={swiperRef}
            spaceBetween={20}
            centeredSlides={true}
            className={`${styles.cardiovascularSwiper} w-full h-full absolute left-[30%] top-[3%] rounded-[30px] mobile:left-0 mobile:h-[50%] tablet:left-0 tablet:h-full mobile:pointer-events-none`}
            onSlideChange={handleSlideChange}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            breakpoints={{       
              541: {
                slidesPerView: 1,
                spaceBetween:50,
                
              },
              640:{
                  slidesPerView:1,
                  spaceBetween:30
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
          >
            {slidesData.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="absolute w-[40vw] h-[12vw] z-[10] mobile:h-[80vw] mobile:w-[90vw] left-[5%] tablet:w-[90vw] tablet:h-[55vw] tablet:left-0">
                  <Image src={slide.imageSrc} alt={slide.title} fill className="mobile:object-contain tablet:object-contain"/>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div
            className={`px-[1.2vw] py-[1.2vw] absolute z-[5] mobile:top-[38%] mobile:right-auto mobile:left-[64%] translate-x-[-65%] tablet:top-[58%] tablet:right-[2%] tablet:translate-y-[-70%] overflow-hidden mobile:p-[5vw] tablet:p-[2vw] rounded-full next-button cursor-pointer  mobile:block group hover:text-white bg-white/50`}
            onClick={handleNext}
          >
            <span
              className={`bg-[#222222] w-[100%] h-[100%] z-[1] absolute top-0 left-0 origin-center scale-0 rounded-full group-hover:scale-100 duration-300`}
            />
            <div className="w-[1.2vw] h-[1.2vw] relative z-[6] mobile:w-[4.5vw] mobile:h-[4.5vw] tablet:w-[2.5vw] tablet:h-[2.5vw]">
              <Image
                src="/assets/home/arrow-right.png"
                alt="arrow-right"
                className={`object-cover group-hover:invert duration-300`}
                fill
              />
            </div>
          </div>
          <div
            className={`px-[1.2vw] py-[1.2vw]  absolute z-[5] mobile:top-[38%] mobile:left-[40%] translate-x-[-38%]  tablet:top-[58%] tablet:right-[13%] tablet:translate-y-[-70%] bg-white/50 overflow-hidden  mobile:p-[5vw] tablet:p-[2vw] rounded-full prev-button cursor-pointer  mobile:block group hover:text-white`}
            onClick={handlePrev}
          >
            <span
              className={`bg-[#222222] w-[100%] h-[100%] z-[1] absolute top-0 left-0 origin-center scale-0 rounded-full group-hover:scale-100 duration-300`}
            />
            <div className="w-[1.2vw] h-[1.2vw] relative z-[6] mobile:w-[4.5vw] mobile:h-[4.5vw] tablet:w-[2.5vw] tablet:h-[2.5vw] rotate-180">
              <Image
                src="/assets/home/arrow-left.png"
                alt="arrow-left"
                className={`object-cover group-hover:invert duration-300 rotate-180`}
                fill
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute w-[46vw] h-[90vh] top-[10%] right-0 z-[-1] mobile:hidden tablet:hidden tablet:w-[100vw] tablet:right-[-10%] tablet:h-[80vw]">
        <Image
          src="/assets/cardioVascular/product-bg.png"
          fill
          alt="product-bg"
        />
      </div>
      <div className="absolute w-[110vw] h-[100%] top-0 left-0 z-[-2] mobile:bottom-0 mobile:top-0 mobile:w-full" >
        <Image
          src="/assets/cardioVascular/carousel-bg.png"
          fill
          className="mobile:object-cover"
          alt="carousel-bg"
        />
      </div>
    </section>
  );
};

export default ProductCarousel;
