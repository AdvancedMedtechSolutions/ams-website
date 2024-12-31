import Image from "next/image";
import React, { useState } from "react";
import { Media } from "../media";

const cardData = [
  {
    title: "Sharpness",
    description: "Exceptional Penetration.",
    detailedDescription: `Superior silicone coating a consistent penetration with each pass, reducing the potential for tissue trauma and providing precision you can rely on.`,
    imageSrc: "/assets/needle/Sharpness.webp",
  },
  {
    title: "Security",
    description: "Swage Integrity.",
    detailedDescription: `Advanced chamfering diminishes chance for suture fracturing at the swage, by rounding off the sharp edges of the barrel in the swage area of the needle. This attention to detail elevates the performance of our needles, ensuring superior quality in every procedure.`,
    imageSrc: "/assets/needle/Security.webp",
  },
  {
    title: "Strength",
    description: "Supreme Durability.",
    detailedDescription: `Experience the reliable performance of Advanced Needle Technologies' reinforced stainless steel. This groundbreaking material ensures exceptional high ductility, remarkable bending strength, and superior resistance to corrosion, establishing fresh benchmarks in the realm of needle performance.`,
    imageSrc: "/assets/needle/Strength.webp",
  },
  {
    title: "Dark Needle",
    description: "Non-reflective.",
    detailedDescription: `A dark non-reflective finish offers desired visualization, specially crafted for enhanced assurance and confidence in the operating zone.`,
    imageSrc: "/assets/needle/Dark-Needle.png",
  },
];

function FeatureCards() {

  return (
    <>
      <section id="feature-cards" className="pb-[10%] pt-[3%] h-[50vw] tablet:h-full mobile:h-full">
        <Media greaterThanOrEqual="desktop">
          <div className="container-lg flex flex-col w-full items-center gap-[5vw] justify-between">
            <h2
              className="aeonik title-2">
              Unmatched Precision With AMS Needles
            </h2>
            <div className="w-full flex justify-between">
              {cardData.map((card, index) => (
                <div
                  key={index}
                  className="w-[21vw] h-[26vw] relative border border-gray-200 rounded-[2vw] overflow-hidden glassmorphism group transition-all duration-700 ease-in-out origin-center fadeUp hover:h-[30vw]"
                >
                  <div className="w-full h-full relative px-[2.5vw] py-[2vw]">
                    <h4
                      className="text-[1.8vw] aeonik font-light group-hover:opacity-0 transition-all duration-300 ease-out"
                    >
                      {card.title}
                    </h4>
                    <p

                      className="text-[#143CA3] text-[1.2vw] group-hover:opacity-0 font-light"
                    >
                      {card.description}
                    </p>
                    <div className={`${index == 2 ? "" : "hidden"} absolute top-[40%] left-0 flex w-full justify-around text-[1.2vw] text-[#143CA3] group-hover:opacity-0 font-light `}>
                      <p>AMS</p>
                      <p>Others</p>
                    </div>
                    <div
                      className={`w-[20vw] h-[25vw] absolute  ${index >= 1 ? "top-[25%] left-[5%]" : "top-0 right-0"
                        }  ${index == 1 ? "!top-[10%] !w-[17vw] !right-0 !left-auto" : ""} ${index == 3 ? "!top-0" : ""}`}
                    >
                      <Image
                        src={card.imageSrc}
                        alt={`${card.title}-image`}
                        className={` ${index < 1 ? "object-cover" : "object-contain"
                          }`}
                        fill
                      />
                    </div>
                    <div className="absolute w-full h-full z-[5] glassmorphism top-0 left-0 rounded-[2vw] opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out">
                      <div className="w-full h-full flex flex-col gap-[1vw] px-[2.5vw] py-[2vw]">
                        <h4

                          className="text-[1.8vw] aeonik font-light"
                        >
                          {card.title}
                        </h4>
                        <div className="w-[3vw] h-[2px] bg-[#143CA3]"></div>
                        <p className="text-[1.2vw] font-light text-justify leading-[1.3]">
                          {card.detailedDescription}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Media>
        <Media lessThan="desktop">
          <div className=" py-[10%] tablet:py-[5%]">
            <div className="w-full flex flex-col gap-[12vw] tablet:gap-[8vw]">
              <div className="w-full flex justify-center">
                <h2 className="title-2 aeonik text-center px-[2vw] tablet:w-[80%] mobile:w-[95%]">
                  <span >
                    Unmatched Precision with AMS Needles
                  </span>
                </h2>
              </div>
              <div className="w-full mobile:overflow-scroll mobile:mt-[5vw] mobile:block hidden mobile:pr-[5%] tablet:overflow-scroll tablet:block tablet:pr-[5%] overflow-visible tablet:mt-0 ">
                <div className=" mobile:flex mobile:flex-nowrap mobile:w-fit mobile:gap-[5vw] mobile:ml-[6vw] mobile:h-fit tablet:flex tablet:flex-nowrap tablet:w-fit tablet:gap-[2vw] tablet:h-fit tablet:ml-[4vw] ">
                  {cardData.map((card, index) => (
                    <div
                      key={index}
                      className="w-[80vw] h-[100vw] relative border border-gray-200 rounded-[6vw] overflow-hidden glassmorphism group transition-all duration-700 origin-center fadeUp tablet:w-[40vw] tablet:rounded-[4vw] tablet:h-[50vw]"
                    >
                      <div className="w-full h-full relative px-[7vw] py-[5vw] tablet:px-[4vw]">
                        <span
                          className={`w-[10vw] h-[10vw] rounded-full  flex justify-center items-center bg-gray-500 text-white text-[10vw] leading-[1] font-light absolute top-[5%] right-[5%] tablet:w-[5vw] tablet:h-[5vw] tablet:text-[6vw] group-hover:opacity-0`}
                        >
                          <p className="font-thin">+</p>
                        </span>
                        <h4 className={`text-[8vw] aeonik font-light tablet:text-[4vw] group-hover:opacity-0 duration-200`} >
                          {card.title}
                        </h4>
                        <p className={`text-[#143CA3] text-[5vw] font-light tablet:text-[2.5vw] group-hover:opacity-0 duration-200`}>
                          {card.description}
                        </p>
                        <div className={`${index == 2 ? "" : "hidden"} absolute top-[40%] left-0 flex w-full justify-around mobile:text-[4vw] text-[#143CA3] group-hover:opacity-0 font-light `}>
                      <p>AMS</p>
                      <p>Others</p>
                    </div>
                        <div
                          className={`w-[80vw] h-full absolute tablet:w-[50vw] ${index >= 1 ? "top-[20%] left-[5%]" : "top-0 left-0"}`}
                        >
                          <Image
                            src={card.imageSrc}
                            alt={`${card.title}-image`}
                            className={`${index <= 1 ? "object-cover" : "object-contain"
                              }`}
                            fill
                          />
                        </div>
                        <div className="absolute w-full h-full z-[5] glassmorphism top-0 left-0 rounded-[6vw] opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out">
                          <div className="w-full h-full flex flex-col gap-[4vw] px-[7vw] py-[5vw] tablet:px-[4vw]">
                            <h4 className="text-[8vw] aeonik font-light tablet:text-[4vw]">
                              {card.title}
                            </h4>
                            <div className="w-[15vw] h-[1.2px] bg-[#143CA3] "></div>
                            <p className="text-[4.2vw] font-light tablet:text-[2vw]">
                              {card.detailedDescription}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Media>
      </section>
    </>
  );
}

export default FeatureCards;
