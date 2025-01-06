import React, { useState } from "react";
import Image from "next/image";
import { paraAnim } from "../gsapAnimations";


const Edge3 = ({ sectionheading, card1, card2, card3, className, imgWidth }) => {
  paraAnim();
  const [activeCard, setActiveCard] = useState("card2");

  const handleHover = (card) => {
    if (globalThis.innerWidth > 1024) {
      setActiveCard(card);
    }
  };

  return (
    <>
      <section className="overflow-hidden mobile:py-[10%] py-[7%]" id="edge">
        <div className="w-screen h-full container-lg mobile:h-full tablet:h-[70%]">
          <div className="w-full h-full flex flex-col items-center justify-center gap-[5vw]">
            <div className="w-full h-full mobile:mb-[10vw] mobile:flex mobile:justify-center">
              <h2
                data-para-anim className="title-2 aeonik text-center mobile:text-center">{sectionheading}</h2>
            </div>

            <div className="flex items-center justify-evenly gap-[1vw] w-full mobile:flex-col mobile:gap-[10vw]">
              <div className={`edge-card1 px-[2vw] py-[3vw] h-[41vw] w-[21vw] duration-500 transition-all ease border flex flex-col items-center justify-center gap-[5vw] rounded-[2vw] bg-white/50  mobile:w-[90vw] mobile:gap-[10vw] mobile:h-full mobile:py-[15vw] mobile:rounded-[9vw] mobile:order-1 mobile:text-center tablet:h-[50vw] tablet:w-[23vw] ${activeCard === "card1" ? "w-[43vw]" : ""
                }`}
                onMouseEnter={() => handleHover("card1")}>
                <div>
                  <h3 data-para-anim className="text-[2.5vw] font-light  aeonik leading-[1.2] mobile:text-[8.2vw] tablet:text-[2.5vw]">
                    {card1.title}
                  </h3>
                </div>
                <div className={`w-[17.5vw] h-[12vw] mobile:h-[50vw] mobile:w-[65vw] duration-500 transition-all ease   ${activeCard === "card1" ? "scale-[1.5]" : "scale-[1]"
                  }`}>
                  <div className="w-full h-full relative">
                    <Image
                      src={card1.src}
                      fill
                      alt="Magnifying glass"
                      className="object-contain"
                    />
                  </div>
                </div>
                <div>
                  <p data-para-anim className="text-[1.65vw] font-light mobile:text-[5.5vw] tablet:text-[2vw]">
                    {card1.para}
                  </p>
                </div>
              </div>

              <div className={`edge-card2 py-[3vw] px-[1vw] h-[41vw] w-[21vw] duration-500 transition-all overflow-hidden ease border flex flex-col items-center justify-center gap-[5vw] rounded-[2vw] bg-white/50 mobile:w-[90vw] mobile:gap-[5vw] mobile:rounded-[9vw] mobile:py-[15vw] mobile:h-full  mobile:text-center tablet:h-[50vw] tablet:w-[50vw]  ${activeCard === "card2" ? "w-[43vw]" : ""
                }`}
                onMouseEnter={() => handleHover("card2")}>
                <div className="flex items-center justify-center mobile:flex-col mobile:gap-[5vw] px-[2vw]">
                  <p data-para-anim className="text-[2.5vw] font-light aeonik mobile:text-[8vw]  tablet:text-[2vw]">
                    {card2.title}
                  </p>
                </div>
                <div className={`w-[35vw] h-[30vw] mobile:h-[50vw] mobile:w-[75vw] mobile:mt-[5vw] relative`}>
                  <div className={`w-[25vw] h-[25vw] absolute top-[-35%] left-[14%] mobile:static tablet:static transition-all duration-500 ease-in-out  ${activeCard === "card2" ? "" : "static !h-[10vw] !w-[25vw] "
                    }`}>
                    <Image
                      src={card2.src}
                      fill
                      alt="advacryl tray"
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className={`mobile:w-[70%] ${className} tablet:w-[80%] duration-500 transition-all ease  ${activeCard === "card2" ? "opacity-1" : "opacity-0"
                  }`}>
                  <ul className="list-disc text-[1.15vw] font-light space-y-[0.5vw] mobile:text-[5.5vw] mobile:text-left tablet:text-[2vw]">
                    <li>{card2.list1}</li>
                    <li>{card2.list2}</li>
                    <li>{card2.list3}</li>
                  </ul>

                </div>
              </div>

              <div className={`edge-card3 px-[3vw] py-[3vw] h-[41vw] w-[21vw] duration-500 transition-all ease border flex flex-col items-center justify-center gap-[5vw] rounded-[2vw] bg-white/50 mobile:w-[90vw] mobile:h-full mobile:py-[15vw] mobile:rounded-[9vw] mobile:gap-[10vw] mobile:text-center mobile:order-2 tablet:h-[50vw] tablet:w-[23vw] ${activeCard === "card3" ? "w-[43vw]" : ""
                }`}
                onMouseEnter={() => handleHover("card3")}>
                <div>
                  <h3 data-para-anim className="text-[2.5vw] font-light aeonik leading-[1.2]  mobile:text-[8.2vw]  tablet:text-[2.5vw] ">
                    {card3.title}
                  </h3>
                </div>
                <div className={`w-[17.5vw] h-[12vw] mobile:h-[50vw] mobile:w-[65vw]  duration-500 transition-all ease  ${activeCard === "card3" ? "scale-[1.5]" : "scale-[1]"
                  }`}>
                  <div className="w-full h-full relative">
                    <Image
                      src={card3.src}
                      fill
                      alt="Advacryl-graph"
                      className="object-contain"
                    />
                  </div>
                </div>
                <div>
                  <p data-para-anim className="text-[1.65vw] font-light mobile:text-[5.5vw] tablet:text-[2vw]">
                    {card3.para}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Edge3;
