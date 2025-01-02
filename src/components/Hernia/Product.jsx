/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import styles from "@/styles/hernia.module.css";
import Image from "next/image";
import { Media } from "../media";
gsap.registerPlugin(ScrollTrigger);

const ProductCard = ({ img, heading, className, rotate, arrowColor,id }) => {
 
  return (
    <>
      <div className={`${rotate}`}>
        <a  href={`/hernia-solutions/advamesh-hernia-mesh#${id}`}>
          <div className={`bg-white w-[25vw] h-[27vw] relative flex justify-center items-center  text-center text-[#fff] group overflow-hidden rounded-[20px] mobile:w-[85vw] mobile:h-[100vw] tablet:w-[40vw] tablet:h-[50vw]`}>
            <Image
              src={img}
              fill
              alt="portfolio-1"
              className=" scale-[1.3] group-hover:scale-[1.1] z-[0] transition-all duration-500 mobile:scale-[1.1]"
            />
            <div className={`flex justify-center flex-col gap-[1vw] items-center absolute z-[5] top-[70%] text-[#111111] ${className}  `}>
              <p
                className=" font-light text-[2vw] aeonik mobile:text-[7vw] tablet:text-[3vw]"
              >
                {heading}
              </p>
              <button className={`text-[#143CA3] text-[1.2vw] font-light flex items-center justify-center gap-[0.5vw] mobile:text-[5vw] mobile:gap-[2vw] tablet:text-[2vw] ${className}`}>See more
                <span className='w-[1.5vw] h-[1.5vw] overflow-hidden flex justify-center items-center pt-[4%] mobile:w-[5vw] mobile:h-[5vw]'>
                  <span className='w-[4vw] h-[1.3vw] flex translate-x-[-30%] group-hover:translate-x-[24%] transition-all ease-in-out duration-300 gap-[0.3vw] mobile:w-[15vw] mobile:h-[7vw] '>
                    <svg viewBox="0 0 22 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={`h-[1vw] w-[1.3vw] scale-[0.3] group-hover:scale-[1] transition-all mobile:scale-[1] mobile:w-[5vw] mobile:h-[5vw] ${arrowColor ? "fill-[#ffffff] " : ""}`}>
                      <g className={`btn-path ${arrowColor ? "fill-[#ffffff] " : ""}`} fill="#143CA3">
                        <path d="M13.6437 15.9303C13.4217 15.9303 13.1998 15.8485 13.0246 15.6733C12.6858 15.3345 12.6858 14.7738 13.0246 14.4351L19.496 7.96366L13.0246 1.49228C12.6858 1.15352 12.6858 0.592823 13.0246 0.254067C13.3633 -0.0846889 13.924 -0.0846889 14.2628 0.254067L21.3533 7.34455C21.6921 7.68331 21.6921 8.24401 21.3533 8.58277L14.2628 15.6733C14.0876 15.8485 13.8656 15.9303 13.6437 15.9303Z" fill="current-color" className={`${arrowColor ? "fill-[#ffffff] " : ""}`} />
                        <path d="M20.5356 8.83812L0.876093 8.83812C0.397162 8.83812 0 8.44096 0 7.96203C0 7.4831 0.397162 7.08594 0.876093 7.08594L20.5356 7.08594C21.0145 7.08594 21.4117 7.4831 21.4117 7.96203C21.4117 8.44096 21.0145 8.83812 20.5356 8.83812Z" fill="current-color" className={`${arrowColor ? "fill-[#ffffff] " : ""}`} />
                      </g>
                      <g className="btn-path" fill="#143CA3">
                        <path d="M13.6437 15.9303C13.4217 15.9303 13.1998 15.8485 13.0246 15.6733C12.6858 15.3345 12.6858 14.7738 13.0246 14.4351L19.496 7.96366L13.0246 1.49228C12.6858 1.15352 12.6858 0.592823 13.0246 0.254067C13.3633 -0.0846889 13.924 -0.0846889 14.2628 0.254067L21.3533 7.34455C21.6921 7.68331 21.6921 8.24401 21.3533 8.58277L14.2628 15.6733C14.0876 15.8485 13.8656 15.9303 13.6437 15.9303Z" fill="current-color" className={`${arrowColor ? "fill-[#ffffff] " : ""}`} />
                        <path d="M20.5356 8.83812L0.876093 8.83812C0.397162 8.83812 0 8.44096 0 7.96203C0 7.4831 0.397162 7.08594 0.876093 7.08594L20.5356 7.08594C21.0145 7.08594 21.4117 7.4831 21.4117 7.96203C21.4117 8.44096 21.0145 8.83812 20.5356 8.83812Z" fill="current-color" className={`${arrowColor ? "fill-[#ffffff] " : ""}`} />
                      </g>
                    </svg>
                    <svg viewBox="0 0 22 16" fill="#143CA3" xmlns="http://www.w3.org/2000/svg" className="h-[1vw] w-[1.3vw]  group-hover:scale-[0.3] transition-all mobile:w-[5vw] mobile:h-[5vw]">
                      <g className="btn-path" fill="current-color">
                        <path d="M13.6437 15.9303C13.4217 15.9303 13.1998 15.8485 13.0246 15.6733C12.6858 15.3345 12.6858 14.7738 13.0246 14.4351L19.496 7.96366L13.0246 1.49228C12.6858 1.15352 12.6858 0.592823 13.0246 0.254067C13.3633 -0.0846889 13.924 -0.0846889 14.2628 0.254067L21.3533 7.34455C21.6921 7.68331 21.6921 8.24401 21.3533 8.58277L14.2628 15.6733C14.0876 15.8485 13.8656 15.9303 13.6437 15.9303Z" fill="current-color" className={`${arrowColor ? "fill-[#ffffff] " : ""}`} />
                        <path d="M20.5356 8.83812L0.876093 8.83812C0.397162 8.83812 0 8.44096 0 7.96203C0 7.4831 0.397162 7.08594 0.876093 7.08594L20.5356 7.08594C21.0145 7.08594 21.4117 7.4831 21.4117 7.96203C21.4117 8.44096 21.0145 8.83812 20.5356 8.83812Z" fill="current-color" className={`${arrowColor ? "fill-[#ffffff] " : ""}`} />
                      </g>
                      <g className="btn-path" fill="#143CA3">
                        <path d="M13.6437 15.9303C13.4217 15.9303 13.1998 15.8485 13.0246 15.6733C12.6858 15.3345 12.6858 14.7738 13.0246 14.4351L19.496 7.96366L13.0246 1.49228C12.6858 1.15352 12.6858 0.592823 13.0246 0.254067C13.3633 -0.0846889 13.924 -0.0846889 14.2628 0.254067L21.3533 7.34455C21.6921 7.68331 21.6921 8.24401 21.3533 8.58277L14.2628 15.6733C14.0876 15.8485 13.8656 15.9303 13.6437 15.9303Z" fill="current-color" className={`${arrowColor ? "fill-[#ffffff] " : ""}`} />
                        <path d="M20.5356 8.83812L0.876093 8.83812C0.397162 8.83812 0 8.44096 0 7.96203C0 7.4831 0.397162 7.08594 0.876093 7.08594L20.5356 7.08594C21.0145 7.08594 21.4117 7.4831 21.4117 7.96203C21.4117 8.44096 21.0145 8.83812 20.5356 8.83812Z" fill="current-color" className={`${arrowColor ? "fill-[#ffffff] " : ""}`} />
                      </g>
                    </svg>
                  </span>
                </span>
              </button>
            </div>
          </div>
        </a>
      </div>
    </>
  )
}

const Product = () => {
  const sliderContainer = useRef(null);
  const wheelRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef([]);
  const productData = [
    {
      imgSrc: "/assets/hernia/product-1.png",
      heading: "Polypropylene Mesh",
      id:"polypropylene-mesh"
    },
    {
      imgSrc: "/assets/hernia/product-3.png",
      heading: "Medium Weight Mesh",
      id:"mid-weight-mesh"
    },
    {
      imgSrc: "/assets/hernia/product-2.png",
      heading: "Macroporous Mesh",
      id:"macroporous-mesh"
    },


  ];
  if (globalThis.innerWidth < 1024) {

  }
  else {
    useEffect(() => {
      const ctx = gsap.context(() => {
        const wheel = wheelRef.current;
        const images = gsap.utils.toArray(`.${styles.wheelCard}`);

        const setup = () => {
          const radius = wheel.offsetWidth / 1;
          const center = wheel.offsetWidth / 2;
          const total = images.length;
          const slice = (0.29 * Math.PI) / total;

          images.forEach((item, i) => {
            const angle = i * slice;
            const x = center + radius * Math.sin(angle);
            const y = center - radius * Math.cos(angle);

            gsap.set(item, {
              rotation: angle + 0.01 + "_rad",
              xPercent: -50,
              yPercent: -50,
              x: x,
              y: y,
            });
          });
        };

        setup();
        window.addEventListener("resize", setup);

        gsap.to(`.${styles.wheel}`, {
          rotate: () => -36,
          ease: "none",
          duration: images.length,
          scrollTrigger: {
            trigger: sliderContainer.current,
            start: "top top",
            end: "bottom top",
            pin: true,
            scrub: 0.2,
            invalidateOnRefresh: true,
            markers: false,
          },
        });


        return () => {
          window.removeEventListener("resize", setup);
        };
      }, sliderContainer);

      return () => {
        ctx.revert();
      };
    }, []);

  }


  return (
    <section
      id="products"
      ref={sliderContainer}
      className={`relative h-[110vh] ${styles.sliderContainer} overflow-x-hidden mobile:h-full pb-[5%] mobile:py-[10%] tablet:h-full`}
    >
      <Media greaterThan="tablet">
        <div className="flex flex-col w-full h-screen justify-between pb-[1%]">
          <div className='w-full flex justify-center'>
            <h2
              data-para-anim className="title-2 aeonik">
              <span>The Foundation of Durable Repair</span>
            </h2>
          </div>
          <div className={styles.header} ref={headerRef}></div>
          <div className={styles.sliderSection}>
            <div className={styles.wheel} ref={wheelRef}>
              {productData.map((product, i) => (
                <div
                  className={styles.wheelCard}
                  key={i}
                  ref={(el) => (cardsRef.current[i] = el)}
                >
                  <ProductCard
                    img={product.imgSrc}
                    heading={product.heading}
                    id={product.id}
                    arrowColor={`${i == 1 ? true : ""}`}
                    className={`${i == 1 ? "text-white #ffffff " : ""}`}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className='w-full product-base-text flex justify-center'>
            <p data-para-anim className='aeonik font-light uppercase tracking-widest text-[2.2vw] text-center'>advamesh range</p>
          </div>

        </div>

      </Media>
      <Media lessThan="desktop">

        <div className="">
          <div className="w-full flex flex-col gap-[10vw] tablet:gap-[7vw]">
            <div className='w-full flex justify-center'>
              <h2 className="title-2 aeonik text-center">
                <span data-para-anim>The Foundation of Durable Repair</span>
              </h2>
            </div>
            <div className="w-full mobile:overflow-scroll mobile:mt-[5vw] fadeUp mobile:block hidden tablet:overflow-scroll mobile:fadeUp tablet:block tablet:pr-[5%] overflow-visible tablet:mt-0">
              <div

                className=" mobile:flex mobile:flex-col mobile:w-full mobile:items-center mobile:gap-[12vw] mobile:h-fit tablet:flex tablet:flex-nowrap tablet:w-fit tablet:gap-[2vw] tablet:h-fit tablet:ml-[4vw]"
              >
                {productData.map((product, i) => (
                  <div
                    className="w-[85vw] h-[100vw] tablet:w-[40vw] tablet:h-[50vw] fadeUp"
                    key={i}

                  >
                    <ProductCard
                      img={product.imgSrc}
                      heading={product.heading}
                      id={product.id}
                      arrowColor={`${i == 1 ? true : ""}`}
                      className={`${i == 1? "text-white #ffffff " : ""}`}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className='w-full product-base-text flex justify-center '>
              <p data-para-anim className='aeonik font-light  uppercase tracking-widest text-[6vw] text-center tablet:text-[3vw] mobile:mt-[-5vw]'>advamesh range</p>
            </div>

          </div>

        </div>
      </Media>

    </section>
  );
};

export default Product;
