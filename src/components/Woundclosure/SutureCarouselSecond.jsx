import React from "react";
import Image from "next/image";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

const SutureCarouselSecond = () => {
  const slidesData = [
    {
      iconSrc: "/assets/woundclosure/advalene-box.png",
      title: "Polypropylene",
      cardColor: "from-blue-500/30",
      src: "/wound-care/advalene-polypropylene-suture",
    },
    {
      iconSrc: "/assets/woundclosure/advabond-box.png",
      title: "Polyester",
      cardColor: "from-orange-500/30",
      src: "/wound-care/advabond-polyester-suture",
    },
    {
      iconSrc: "/assets/woundclosure/advapacer-box.png",
      title: "316 Stainless Steel",
      cardColor: "from-yellow-500/40",
      src: "/cardiac-surgery/advapacer-316L-stainless-steel-sternotomy-suture",
    },
    {
      iconSrc: "/assets/woundclosure/advasyl-box.png",
      title: "Silk",
      cardColor: "from-blue-500/20",
      src: "/wound-care/advasyl-silk-suture",
    },
    {
      iconSrc: "/assets/woundclosure/advalon-box.png",
      title: "Polyamide",
      cardColor: "from-green-200/60",
      src: "/wound-care/advalon-polyamide-suture",
    },
    {
      iconSrc: "/assets/woundclosure/bondtape-box.png",
      title: "Polyester Tape Suture",
      cardColor: "from-yellow-500/30",
      src: "/wound-care/advabond-polyester-tape-suture",
    },
    {
      iconSrc: "/assets/woundclosure/advawax-box.png",
      title: "Bonewax",
      cardColor: "from-yellow-200/60",
      src: "/cardiac-surgery/advapacer-316L-stainless-steel-sternotomy-suture",
    },
  ];

  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const handleNext = () => {
    if (swiperRef.current) swiperRef.current.slideNext();
    
  };

  const handlePrev = () => {
    if (swiperRef.current) swiperRef.current.slidePrev();
    
  };
  const onSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  return (
    <section
      className="w-screen h-[63vw] overflow-hidden mobile:h-[210vw] mobile:py-[10%] relative tablet:py-[7%] tablet:h-[120vw] py-[7%]"
      id="suture-carousel-second"
    >
      <div className="w-full h-fit flex flex-col gap-[1.5vw] items-center mobile:gap-[5vw]">
        <h2 data-para-anim className="title-2 aeonik mobile:text-center">
          Non Absorbable Sutures
        </h2>
        <p
          data-para-anim
          className="content-p w-[50%] text-center !leading-[1.4] mobile:w-[85%] tablet:w-[70%]"
        >
          AMS Non-Absorbable Sutures provide superior tensile strength retention
          and a predictable absorption profile to meet your surgical needs and
          tissue healing requirements
        </p>
      </div>

      <div className="swiper-container mt-[10vw] tablet:w-[100vw] fadeUp relative mobile:mt-[15vw] tablet:mt-[12vw]">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={onSlideChange}
          spaceBetween={100}
          slidesPerView={5}
          loop={true}
          centeredSlides={true}
          roundLengths={true}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 0 },
            640: { slidesPerView: 1, spaceBetween: 0 },
            1280: { slidesPerView: 2.7, spaceBetween: 150 },
          }}
        >
          {slidesData.map((slide, index) => (
            <SwiperSlide key={index}>
              <Link href={slide.src}>
                <div
                  className={`w-full h-full flex flex-col justify-center items-center  ${
                    activeIndex === index ? "gap-[4vw]" : "gap-0"
                  } transition-all duration-500 ease`}
                >
                  <div
                    className={`absolute w-full h-[30vw] rounded-tl-[5vw] rounded-tr-[5vw] top-[5%] border border-white box-cards bg-gradient-to-b ${slide.cardColor} to-gray-50 mobile:w-[75vw] mobile:h-[80vw] mobile:top-[25%] tablet:top-[20%] tablet:w-[70vw] tablet:h-[50vw]`}
                  ></div>

                  <div
                    className={`w-fit h-[20vw] flex justify-center items-center mobile:h-[80vw] tablet:h-[30vw] cursor-grab z-[5] mobile:translate-y-[-10%] ${
                      activeIndex === index
                        ? "scale-[1.7] translate-y-[-10%] mobile:scale-[1] tablet:translate-y-0"
                        : "scale-[1]"
                    } transition-transform duration-500 ease`}
                  >
                    <div className="w-[28vw] h-[22.5vw] p-[3vw] mobile:w-[100vw] mobile:h-[90vw] tablet:w-[45vw] tablet:h-[35vw] tablet:p-[5vw] ">
                      <Image
                        src={slide.iconSrc}
                        alt="slide icon"
                        width={550}
                        height={550}
                        className="object-contain w-full h-full"
                      />
                    </div>
                  </div>
                  <div className="slider-circle-content w-[30vw] mobile:w-[90vw] tablet:w-[50vw] z-[10]">
                    <h3
                      className={`text-[1.4vw] font-light text-center mb-[1vw] mobile:text-[6.5vw] tablet:text-[3vw] tablet:translate-y-[10vw] mobile:translate-y-[-10vw] ${
                        activeIndex === index
                          ? "text-[2vw] translate-y-[-3vw] tablet:translate-y-[10vw]"
                          : ""
                      } transition-all duration-300`}
                    >
                      {slide.title}
                    </h3>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div
        className={`px-[1.2vw] py-[1.2vw] absolute z-[200] bottom-0 left-[53%] mobile:bottom-0 mobile:top-auto mobile:right-auto mobile:left-[62%] tablet:bottom-[3%] translate-x-[-65%] tablet:left-[55%] tablet:translate-y-[-70%] overflow-hidden mobile:p-[5vw] tablet:p-[2vw] rounded-full next-button cursor-pointer mobile:block group hover:text-white bg-white/50`}
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
        className={`px-[1.2vw] py-[1.2vw] bottom-0 left-[45%] absolute z-[200] mobile:bottom-0 mobile:top-auto mobile:left-[37%] mobile:right-auto translate-x-[-38%] tablet:left-[45%] tablet:bottom-[3%] tablet:translate-y-[-70%] bg-white/50 overflow-hidden mobile:p-[5vw] tablet:p-[2vw] rounded-full prev-button cursor-pointer mobile:block group hover:text-white`}
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
    </section>
  );
};

export default SutureCarouselSecond;
