import React, { useState } from "react";
import Image from "next/image";
import { paraAnim } from "../gsapAnimations";


const Edge = ({ sectionheading, card1, card2, card3, visibility }) => {
  paraAnim();
  const [activeCard, setActiveCard] = useState("card2");

  
  const handleHover = (card) => { 
    if(globalThis.innerWidth>1024){
    setActiveCard(card);
    }
  };


  return (
    <>
      <section className="overflow-hidden mobile:py-[10%] tablet:pt-[7%] tablet:pb-0 pt-[5%] pb-[5%]" id="edge1">
        <div className="w-screen h-full container-lg mobile:h-full tablet:h-[70%] tablet:mb-0">
          <div className="w-full h-full flex flex-col items-center justify-center gap-[5vw] tablet:justify-between">
            <div className="w-full h-full mobile:mb-[10vw] mobile:flex mobile:justify-center">
              <h2 data-para-anim className="title-2 aeonik text-center mobile:text-center">
                {sectionheading}
              </h2>
            </div>

            <div className="flex items-center justify-evenly gap-[1vw] w-full mobile:flex-col mobile:gap-[10vw]">
             
              <div
                className={`edge-card1 px-[3vw] py-[3vw] h-[41vw] w-[21vw] border flex flex-col  items-center justify-center gap-[5vw] rounded-[2vw] bg-white/50 duration-500 transition-all ease mobile:w-[90vw] mobile:gap-[10vw] mobile:h-full mobile:py-[15vw] mobile:rounded-[9vw] mobile:order-1 mobile:text-center tablet:h-[50vw] tablet:w-[23vw] ${
                  activeCard === "card1" ? "w-[43vw]" : ""
                }`}
                onMouseEnter={() => handleHover("card1")}
              >
                <div>
                  <h3 data-para-anim className="text-[2.5vw] font-extralight leading-[1.2] mobile:text-[8.2vw] tablet:text-[2.5vw]">
                    {card1.title}
                  </h3>
                </div>
                <div className={`w-[17.5vw] h-[12vw] mobile:h-[50vw] mobile:w-[65vw]  duration-500 transition-all ease   ${
                  activeCard === "card1" ? "scale-[1.5]" : "scale-[1]"
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

              {/* Card 2 */}
              <div
                className={`edge-card2 py-[3vw] px-[1vw] h-[41vw] w-[21vw] border flex flex-col  items-center overflow-hidden justify-center gap-[1vw] rounded-[2vw] bg-white/50 duration-500 transition-all ease mobile:w-[90vw] mobile:gap-[5vw] mobile:rounded-[9vw] mobile:py-[15vw] mobile:h-full mobile:text-center tablet:h-[50vw] ${
                  activeCard === "card2" ? "w-[43vw]" : ""
                }`}
                onMouseEnter={() => handleHover("card2")}
              >
                <div className="flex items-center justify-center mobile:flex-col mobile:gap-[5vw]">
                  <span
                    className={`block w-[10.75vw] h-[1.65vw] relative mr-[0.5vw] mobile:w-[36vw] mobile:h-[6vw] tablet:w-[20vw] tablet:h-[3vw] ${visibility}  duration-500 transition-all ease  ${
                      activeCard === "card2" ? "scale-[1]" : "scale-[0.8]"
                    }`}
                  >
                    <Image
                      src="/assets/advacryl/advatray-blue.png"
                      fill
                      alt="advatray"
                      className=""
                    />
                  </span>
                  <p data-para-anim
                    className={`text-[1.25vw] font-light mobile:text-[4.2vw]  duration-500 transition-all ease  ${
                      activeCard === "card2" ? "text-[1.5vw]" : ""
                    } tablet:text-[2vw]`}
                  >
                    {card2.title}
                  </p>
                </div>
                <div
                  className={`w-[35vw] h-[30vw] scale-[0.8] mobile:h-[50vw] mobile:w-[75vw] mobile:mt-[5vw]  duration-500 transition-all ease  ${
                    activeCard === "card2" ? "scale-[1]" : ""
                  }`}
                >
                  <div className="w-full h-full relative right-[-5%] mt-[2vw] mobile:mt-0 mobile:right-auto">
                    <Image
                      src={card2.src}
                      fill
                      alt="advacryl tray"
                      className="object-contain"
                    />
                  </div>
                </div>
                <div
                  className={`px-[1vw] py-[2vw] h-[10vw] flex justify-center items-center mobile:h-[25vw] mobile:w-[85vw]`}
                >
                  <p data-para-anim
                    className={`text-[1.65vw] font-light mobile:text-[5.5vw] tablet:text-[2vw]   duration-500 transition-all ease  ${
                      activeCard === "card2" ? "opacity-1" : "opacity-0"
                    }`}
                  >
                    {card2.para}
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div
                className={`edge-card3 px-[3vw] py-[3vw] h-[41vw] w-[21vw] border flex flex-col  items-center justify-center gap-[5vw] rounded-[2vw] bg-white/50 duration-500 transition-all ease mobile:w-[90vw] mobile:h-full mobile:py-[15vw] mobile:rounded-[9vw] mobile:gap-[10vw] mobile:text-center mobile:order-2 tablet:h-[50vw] tablet:w-[23vw] ${
                  activeCard === "card3" ? "w-[43vw]" : ""
                }`}
                onMouseEnter={() => handleHover("card3")}
              >
                <div>
                  <h3 data-para-anim className="text-[2.5vw] font-extralight leading-[1.2] mobile:text-[8.2vw] tablet:text-[2.5vw]">
                    {card3.title}
                  </h3>
                </div>
                <div className={`w-[17.5vw] h-[12vw] mobile:h-[50vw] mobile:w-[65vw]  duration-500 transition-all ease  ${
                  activeCard === "card3" ? "scale-[1.5]" : "scale-[1]"
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

export default Edge;
