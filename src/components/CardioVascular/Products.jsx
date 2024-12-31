
import React, { useState, useEffect } from 'react';
import styles from "@/styles/cardiovascularProducts.module.css";
import Image from "next/image";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import PrimaryButton from '../Button/PrimaryButton';

gsap.registerPlugin(ScrollTrigger);

const slidesData = [
  {
    src: "/advabond-cv",
    title: "ADVABOND",
    para: "Braided Coated Polyester Green & White",
    imageSrc: "/assets/cardioVascular/advabond-1.png",
    description1: "The enduring and comprehensive solution for valve replacement and valve repair procedures providing excellent tensile strength for permanent support.",
    description2: "ADVAPLEDGET assures consistent performance providing smooth uniform construction for precise suture placement.",
    description3: "",
  },
  {
    src: "/advalene-cv",
    title: "ADVALENE",
    para: "Monofilament Polypropylene Blue",
    imageSrc: "/assets/cardioVascular/advalene-1.png",
    description1: "-The only Polypropylene with an advanced and unique dispensing system designed to deliver ease of suture dispensing with minimal memory in the suture strand.",
    description2: "Most inert monofilament structure makes ADVALENE Cardiovascular suture an ideal choice for anastomosis.",
    description3: "",
  },
  {
    src: "/advasteel-cv",
    title: "ADVASTEEL",
    para: "Monofilament Stainless Steel 316 LVM",
    imageSrc: "/assets/cardioVascular/advasteel-1.png",
    description1: "Excellent compatibility with body tissues for minimal tissue reactivity.",
    description2: "Advanced design with superior pliability conforming closely to contour of sternum.",
    description3: "High resistance to breakage during bend tightening by twisting with excellent knot security.",
  },
  {
    src: "/advapacer-and-wax",
    title: "ADVAWAX",
    para: "Braided Coated Polyester Green & White",
    imageSrc: "/assets/cardioVascular/advawax-1.png",
    description1: "ADVAWAX acts as a mechanical (tamponade) barrier helping in achieving local hemostasis of bone.",
    description2: "ADVAWAX minimizes formation of any foreign body or inflammatory reaction and delays bone regeneration.",
    description3: "ADVAWAX provides ease of application due to smooth consistency.",
  },
  {
    src: "/advapacer-and-wax",
    title: "ADVAPACER",
    para: "Multifilament 316L Stainless Steel",
    imageSrc: "/assets/cardioVascular/advapacer-1.png",
    description1: "Twisted 316L stainless steel wire, with blue Low Densile Polyethylene coating (sheathed), double needle in suture size 2-0, having a length of 60 cm.",
    description2: "Lead conductor resistant (14.50Ω/M)",
    description3: "",
  },
  {
    src: "/ligation-solutions",
    title: "ADVACLIP",
    para: "Titanium Clips",
    imageSrc: "/assets/cardioVascular/advaclip-1.png",
    description1: "Secure precision with ADVACLIP Titanium Clips, delivering reliable vascular and tissue occlusion with superior biocompatibility and minimal tissue reaction.",
    description2: "Designed for effective hemostasis, ADVACLIP is compatible with appliers tailored for Minimally Invasive Cardiac Surgery (MICS).",
    description3: "A color-coded system ensures easy size identification, enhancing efficiency and accuracy during procedures",
  },
];

const Products = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

const fadeOutAndUpdateIndex = (direction) => {
  // Fade out the current text
  gsap.to(".product-text", {
    opacity: 0,
    duration: 0.3,
    ease: "power3.out",
    stagger: 0.01,
    onComplete: () => {
      setCurrentIndex((prev) => {
        if (direction === "next") {
          return prev === slidesData.length - 1 ? 0 : prev + 1;
        } else if (direction === "prev") {
          return prev === 0 ? slidesData.length - 1 : prev - 1;
        }
      });
    },
  });
};

const fadeInNewText = () => {
  const productText = document.querySelectorAll(".product-text");
  gsap.fromTo(
    productText,
    {
      opacity: 0,
      y: 50,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
      stagger: 0.05,
    }
  );
};

useEffect(() => {
  fadeInNewText();
}, [currentIndex]);

const handlePrev = () => {
  fadeOutAndUpdateIndex("prev");
};

const handleNext = () => {
  fadeOutAndUpdateIndex("next");
};


  const radius = 19;
  const totalSlides = slidesData.length;

  return (
    <section id="products" className="w-screen h-[60vw]  overflow-hidden relative mobile:h-[180vh] mt-[10%]">
      <div className="w-full h-full flex items-center justify-between pl-[5vw] mobile:flex-col-reverse tablet:flex-col-reverse">
        <div className="w-[50vw] h-[20%] flex flex-col justify-center product-text-container mobile:w-full mobile:h-[60vh] tablet:w-full tablet:h-[50vh] z-[10]">
          <div className="h-[10vw] mobile:flex mobile:flex-col mobile:items-center mobile:justify-center">
            <h2 className="title-2 product-text aeonik mobile:text-center mobile:ml-0 mobile:px-[5vw]">
              <span data-para-anim>{slidesData[currentIndex]?.title}</span>
            </h2>
            <p className="product-text overflow-hidden text-[2.2vw] aeonik font-light mobile:text-[7vw] mobile:text-center mobile:w-[90%] tablet:text-[3.5vw]">
              {slidesData[currentIndex]?.para}
            </p>
          </div>
          <div className="pt-[2vw] ">
            <p className="product-text  overflow-hidden content-p w-[85%] py-[1vw] mobile:w-full mobile:text-center mobile:px-[2vw] mobile:py-[3vw] tablet:text-[2.5vw] tablet:w-[95%]">
              {slidesData[currentIndex].description1}
            </p>
            <p className="product-text overflow-hidden content-p w-[85%] py-[1vw] mobile:w-full mobile:text-center mobile:px-[2vw] mobile:py-[3vw] tablet:text-[2.5vw] tablet:w-[95%]">
              {slidesData[currentIndex].description2}
            </p>
            <p className="product-text overflow-hidden content-p w-[85%] py-[1vw] mobile:w-full mobile:text-center mobile:px-[2vw] mobile:py-[3vw] tablet:text-[2.5vw] tablet:w-[95%]">
              {slidesData[currentIndex].description3}
            </p>
            <div className='fadeUp mt-[4vw]'>
              <PrimaryButton text={"Read More"} link={slidesData[currentIndex].src} />
            </div>
          </div>
        </div>
        <div className="w-[40vw] h-[50vw] overflow-hidden ">
          <div className='relative flex items-start justify-end h-screen w-screen'>
            <div className='absolute flex justify-center items-center h-full w-full'>
              {slidesData.map((slide, index) => {
                const angle = ((index - currentIndex) * (360 / totalSlides)) * (Math.PI / 180);
                const x = -radius * 1.1 * Math.cos(angle);
                const y = radius * Math.sin(angle);

                const isPrevious = (index === (currentIndex - 1 + totalSlides) % totalSlides);
                const isActive = index === currentIndex;
                const isNext = (index === (currentIndex + 1) % totalSlides);

                return (
                  <div
                    key={index}
                    className={`${styles.card} ${isActive ? styles.active : ''} ${isPrevious ? styles.previous : ''} ${isNext ? styles.next : ''}`}
                    style={{
                      transform: `translate(${x}vw, ${y}vw)`,
                      zIndex: isActive ? 3 : isPrevious || isNext ? 2 : 1,
                    }}
                  >
                    <img src={slide.imageSrc} alt={slide.title} className="w-full h-full object-contain flex  mobile:h-[40vw] mobile:w-[40vw]" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div
        className="px-[1.6vw] py-[1.6vw]  absolute z-[5] bottom-[20%] right-[23%] mobile:top-[45%] mobile:right-auto mobile:left-[62%] translate-x-[-65%] mobile:bottom-auto tablet:top-[10%] overflow-hidden mobile:p-[5vw] tablet:p-[2vw] rounded-full next-button cursor-pointer mobile:block group hover:text-white bg-white/50 tablet:right-0 tablet:bottom-auto"
        onClick={handleNext}
      >
        <span className={`bg-[#222222] w-[100%] h-[100%] z-[1] absolute top-0 left-0 origin-center scale-0 rounded-full group-hover:scale-100 group-hover:opacity-100 transition-all duration-300`} />
        <div className="w-[1.6vw] h-[1.6vw] relative z-[6] mobile:w-[4.5vw] mobile:h-[4.5vw] tablet:w-[2.5vw] tablet:h-[2.5vw]">
          <Image
            src="/assets/icons/arrow-forward.svg"
            alt="arrow-right"
            className="object-contain group-hover:invert transition-all duration-300"
            fill
          />
        </div>
      </div>

      <div
        className="px-[1.6vw] py-[1.6vw] top-[20%] right-[25%] absolute z-[999] mobile:bottom-auto mobile:right-auto mobile:top-[45%] mobile:left-[39%] translate-x-[-38%] tablet:top-[10%] bg-white/50 overflow-hidden mobile:p-[5vw] tablet:p-[2vw] rounded-full prev-button cursor-pointer mobile:block group hover:text-white"
        onClick={handlePrev}
      >
        <span className={`bg-[#222222] w-[100%] h-[100%] z-[1] absolute top-0 left-0 origin-center scale-0 rounded-full group-hover:scale-100 group-hover:opacity-100 transition-all duration-300`} />
        <div className="w-[1.6vw] h-[1.6vw] relative z-[6]  rotate-[120deg] mobile:w-[4.5vw] mobile:h-[4.5vw] tablet:w-[2.5vw] tablet:h-[2.5vw]">
          <Image
            src="/assets/icons/arrow-backward.svg"
            alt="arrow-left"
            className="object-contain group-hover:invert transition-all duration-300"
            fill
          />
        </div>
      </div>
      <div className="absolute w-[55vw] h-[60vw] top-0 right-[-10%] mobile:h-[50vh] mobile:w-[90vw] mobile:top-[10%] tablet:hidden">
        <Image
          src="/assets/cardioVascular/product-bg.png"
          fill
          alt="product-bg"
        />
      </div>
      <div className="absolute w-[110vw] h-[100%] top-0 left-0 z-0 mobile:bottom-0 mobile:top-[10%] mobile:w-full" >
        <Image
          src="/assets/cardioVascular/carousel-bg.png"
          fill
          alt="carousel-bg"
        />
      </div>
    </section>
  );
};

export default Products;
