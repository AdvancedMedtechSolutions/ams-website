import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const ProductDescription = ({ data }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".product-description-card",
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            end: "bottom 25%",

          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);
  return (
    <section
      className="mobile:pt-[10%] tablet:pb-[5%] py-[5%] mobile:overflow-hidden "
      id="product-description"
      ref={sectionRef}
    >
      <div className="w-screen h-full container-lg mobile:h-[70%] mobile:px-[3vw] mobile:py-[3vw]  tablet:h-full">
        <div className="flex flex-col items-center justify-center gap-[5vw]">
          <div className="mobile:mb-[8vw] tablet:mb-[5vw]">
            <h2
              data-para-anim
              className="title-2 aeonik mobile:text-center tablet:text-center"
            >
              Product Description
            </h2>
          </div>
          <div className="flex flex-wrap items-center gap-[3vw] product-description-card-container tablet:justify-between mobile:overflow-scroll mobile:flex-nowrap mobile:w-[100vw] mobile:gap-[5vw] mobile:p-[5vw]">
            {data.map((card, index) => (
              <div
                key={index}
                className="flex flex-col justify-between items-center w-[28vw] h-[16vw]   product-description-card border relative rounded-[2vw] bg-white/50 mobile:w-[75vw] mobile:h-[90vw] mobile:flex-shrink-0  mobile:rounded-[9vw] tablet:w-[43vw] tablet:h-[30vw] "
              >
                <div className="absolute top-5 right-7 w-[4.5vw] h-[4.5vw] flex justify-end items-center mobile:h-[20vw] mobile:w-[20vw]  mobile:left-[35%] mobile:top-[17%] tablet:w-[8vw] tablet:h-[8vw]">
                  <div className="w-full h-full relative">
                    <div
                      className={`w-[5vw] h-[5vw] mobile:h-[25vw] mobile:w-[25vw] tablet:w-[10vw] tablet:h-[10vw] relative`}
                    >
                      <Image className="w-full h-full "
                        src={card.svg} alt="product-icons" fill
                      />
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-[10%] left-[4%] px-[1vw] flex flex-col justify-start gap-[1vw] mobile:static mobile:w-full mobile:h-full mobile:justify-end mobile:pb-[10vw] mobile:px-[5vw] mobile:text-center">
                  <p

                    className="text-[1.65vw] font-medium mobile:text-[6vw] tablet:text-[3vw]"
                  >
                    {card.title}
                  </p>
                  <div
                    className="text-[1.5vw] font-light  mobile:text-[4vw] tablet:text-[2.5vw]"
                    dangerouslySetInnerHTML={{
                      __html: card.description,
                    }}
                  >
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDescription;
