/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Media } from "../media";
import LazyVideo from "../layoutComponents/LazyVideo";
import "swiper/css/navigation";

const Molecular = () => {

  const molecularLeft = useRef(null);
  const molecularRight = useRef(null);
  const molecularContainer = useRef(null);

  if (globalThis.innerWidth > 640) {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const ctx = gsap.context(() => {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: molecularContainer.current,
              pin: true,
              start: "top top",
              end: "+=2000 bottom",
              scrub: true,
            },
          });
          tl.to(molecularRight.current, { 
              yPercent: -75, 
              duration: 3, 
              ease: "none" 
            });
        });
        return () => ctx.revert();
    }, []);
  }

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
    <>
      <section className="molecular h-[100vh] overflow-hidden tablet:h-[100vh] mobile:h-full mt-[8%] tablet:mt-[15%] mobile:py-[20%] relative" id="molecular" ref={molecularContainer}>
        <div className="w-screen h-screen absolute z-[1] overflow-hidden mobile:h-[355vw] mobile:w-screen realative">
          <span className="absolute bg-white/25 top-0 left-0 right-0 bottom-0" />
          <LazyVideo
            poster={"/assets/about/about-molecular-poster.webp"}
            type="video/mp4"
            autoPlay
            loop
            videoSrc={"/assets/about/molecular-bg-video.mp4"}
            className='w-full h-full object-cover'
          />
          <div className="absolute w-full h-full top-0 left-0 bg-white/20"></div>
        </div>
        <div className="container-sm py-[15%] relative z-[2] w-full h-full px-[4vw] mobile:px-0 tablet:px-0">
          <div className="flex items-start justify-between w-full mobile:flex-col mobile:w-[100%] mobile:gap-[10vw]">
            <div className="molecular-left w-[50vw] space-y-[2.5vw] mobile:w-[100%] mobile:flex mobile:flex-col mobile:items-center mobile:justify-center mobile:gap-[5vw] mobile:text-center tablet:w-[50%]" ref={molecularLeft} >
              <div className="w-[58%] mobile:w-[100%] tablet:w-full">
                <h2 data-para-anim className="title-2 aeonik">
                  Molecular Foundations <br /> of AMS
                </h2>
              </div>
              <p className="content-p w-[75%] mobile:w-[100%]">
                <span data-para-anim>
                  Ethos and Culture.
                </span>
              </p>
            </div>

            <Media greaterThan="mobile">
              <div ref={molecularRight} className="molecular-right w-[37.5vw] flex flex-col gap-y-[2vw] tablet:w-[60%]">
                {cardData.map((card, index) => (
                  <MolecularCard
                    key={index}
                    symbol={card.symbol}
                    smalltitle={card.smalltitle}
                    title={card.title}
                    description={card.description}
                  />
                ))}
              </div>
            </Media>


            {/* Swiper for mobile view */}
            <div className="w-[47%] flex-col gap-y-[2vw] hidden mobile:flex mobile:flex-row mobile:w-[100%] mobile:h-full">
              <Swiper
                navigation={false}
                modules={[Navigation]}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                spaceBetween={40}
                className="molecularSwiper  mobile:h-[100%] tablet:h-[100%]"
              >
                {cardData.map((card, index) => (
                  <SwiperSlide key={index}>
                    <MolecularCard
                     index={index}
                      symbol={card.symbol}
                      title={card.title}
                      description={card.description}
                      smalltitle={card.smalltitle}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="absolute flex items-center justify-center gap-8 bottom-[-5%] w-full">
                <div onClick={handlePrev} className="px-[1.2vw] py-[1.2vw] z-[5] relative bg-white/50 overflow-hidden  mobile:p-[5vw] tablet:p-[2vw] rounded-full cursor-pointer mobile:block group hover:text-white border border-black/20">
                  <span className="bg-[#222222] w-[100%] h-[100%] z-[1] absolute top-0 left-0 origin-center scale-0 rounded-full group-hover:scale-100 duration-300" />
                  <div className="w-[1.2vw] h-[1.2vw] relative z-[6] mobile:w-[4.5vw] mobile:h-[4.5vw] tablet:w-[2.5vw] tablet:h-[2.5vw] rotate-180">
                    <Image
                      src="/assets/home/arrow-left.png"
                      alt="arrow-left"
                      className={`object-cover group-hover:invert duration-300 rotate-180`}
                      fill
                    />
                  </div>
                </div>
                <div onClick={handleNext} className="px-[1.2vw] py-[1.2vw] z-[5] relative overflow-hidden mobile:p-[5vw] tablet:p-[2vw] rounded-full cursor-pointer group hover:text-white bg-white/50 border border-black/20">
                  <span className="bg-[#222222] w-[100%] h-[100%] z-[1] absolute top-0 left-0 origin-center scale-0 rounded-full group-hover:scale-100 duration-300" />
                  <div className="w-[1.2vw] h-[1.2vw] relative z-[6] mobile:w-[4.5vw] mobile:h-[4.5vw] tablet:w-[2.5vw] tablet:h-[2.5vw]">
                    <Image
                      src="/assets/home/arrow-right.png"
                      alt="arrow-right"
                      className={`object-cover group-hover:invert duration-300`}
                      fill
                    />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Molecular;

const MolecularCard = ({ symbol, smalltitle, title, description }) => (
  <div className="molecular-card p-[3vw] bg-white/50 border rounded-[2.5vw] border-white backdrop-blur-sm mobile:w-[90vw] mobile:h-[165vw] mobile:px-[6vw] mobile:py-[12vw] mobile:flex mobile:flex-col mobile:gap-[3vw] mobile:items-center tablet:w-[45vw] tablet:h-full tablet:py-[4vw] mobile:rounded-[6vw]">
    <div className="w-[6vw] h-[6vw] bg-[#143CA3] text-white flex flex-col items-center justify-center mobile:w-[20vw] rounded-[0.8vw] mobile:h-[20vw] mobile:gap-0 tablet:w-[10vw] tablet:h-[10vw] fadeUp">
      <p className="text-[3.3vw] mobile:text-[12vw] tablet:text-[5vw]">{symbol}</p>
      <p className="text-[0.6vw] mt-[-1vw] mobile:text-[2.5vw] tablet:text-[1.2vw] mobile:hidden mobile:mt-[-3vw] text-center">{smalltitle}</p>
    </div>
    <h2 data-para-anim className="text-[2.5vw] mt-[1vw] mb-[1.5vw] font-light mobile:text-[7.4vw] tablet:mt-[3vw] tablet:text-[4vw] mobile:mt-[6vw] mobile:text-center">
      {title}
    </h2>
    <p className={`content-p tablet:text-[2.5vw] tablet:leading-[1.3] mobile:text-center fadeUp mobile:text-lg `} >{description}</p>
  </div>
);

const cardData = [
  {
    symbol: "Pa",
    title: "Patients at the Heart",
    smalltitle: "Patient",
    description: "Patients are at the heart of AMS, driving our commitment to relentless innovation. We believe in the endless possibilities of MedTech to transform healthcare, pushing boundaries to improve patient outcomes.",
  },
  {
    symbol: "Qu",
    title: "Quality First",
    smalltitle: "Quality",
    description: "At AMS, quality is built into our design. Through advanced technology, meticulous raw material selection, rigorous testing and processes, we ensure that each device meets the highest standards of safety and reliability—delivering trust and performance you can count on.",
  },
  {
    symbol: "In",
    title: "Life Enhancing Innovation",
    smalltitle: "Innovation",
    description: "AMS is at the forefront of a medical innovation landscape, consistently challenging the status quo through clinical research and development. Our commitment to scientific evidence and ground-breaking research fuels our drive to create innovative medical technologies. This relentless pursuit of advancement enables us to develop solutions that significantly enhance the quality of life for millions around the world. ",
  },
];

