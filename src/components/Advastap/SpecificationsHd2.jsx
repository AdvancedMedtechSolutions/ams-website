import React from "react";
import Specifications from "../Specifications";
import Image from "next/image";

const SpecificationsHd2 = () => {
  return (
    <>
      <Specifications
        textclass={"gradient-text"}
        bgimg={"/assets/advastap/specifications-bg.png"}
        heading={"Technical Specification"}
        color={"#275F7B"}
      >
        <div
          data-lenis-prevent
          className="w-full  h-[70vh] text-[1.25vw] font-light py-[2vw]  text-[#4A4A4A] overflow-y-scroll mobile:py-[5vw] mobile:text-[4.5vw] tablet:text-[2.5vw]  mobile:overflow-x-scroll  mobile:overflow-scroll mobile:mt-[7vw] mobile:h-[50vh] tablet:h-[50vh]"
        >
          <div className="flex w-full border-b border-[#DADADA] gap-[5vw] mobile:w-[180vw] tablet:w-[100vw]">
            <div className="w-[20vw] p-[1vw]  pb-0  font-light tablet:w-[30vw] mobile:w-[70vw]">
              Reorder code
            </div>
            <div className=" flex justify-start  gap-[5vw]  mobile:w-[100vw]">
              <div className=" w-[20vw] p-[1vw]  pb-0  font-light  mobile:w-[100vw] tablet:w-[25vw]">
                ADVAPPH-33R3
              </div>
              <div className=" w-[20vw] p-[1vw] pb-0 font-light  mobile:w-[100vw]  tablet:w-[25vw]">
                ADVAPPH-34R3
              </div>
            </div>
          </div>

          <div className="flex w-full border-b border-[#DADADA] gap-[5vw] mobile:w-[160vw] tablet:w-[100vw]">
            <div className="w-[20vw] p-[1vw] pb-0 mobile:w-[70vw] tablet:w-[30vw]">Pin row construction</div>
            <div className=" flex justify-start  gap-[5vw]  mobile:w-[80vw] mobile:justify-center mobile:gap-[24vw]">
              <div className="p-[1vw] w-[20vw] pb-0 mobile:w-[35vw]  mobile:pl-[2.5vw] tablet:w-[25vw]" >
                3 Row
              </div>
              <div className="p-[1vw] pb-0  w-[20vw] mobile:w-[37vw]  mobile:pl-[2.5vw] tablet:w-[25vw]">
                3 Row
              </div>
            </div>
          </div>

          <div className="flex w-full border-b border-[#DADADA] gap-[5vw] mobile:w-[180vw] tablet:w-[100vw]">
            <div className="w-[20vw] p-[1vw] pb-0 mobile:w-[70vw] tablet:w-[30vw]">Pin material</div>
            <div className=" flex justify-start  gap-[5vw] mobile:w-[100vw]">
              <div className="p-[1vw] pb-0 w-[20vw]   mobile:w-[80vw] tablet:w-[25vw]">Titanium Grade 1</div>
              <div className="p-[1vw] pb-0  w-[20vw] mobile:w-[80vw] tablet:w-[25vw]">
                Titanium Grade 1
              </div>
            </div>
          </div>

          <div className="flex w-full border-b border-[#DADADA] gap-[5vw] mobile:w-[180vw] tablet:w-[100vw]">
            <div className="w-[20vw] p-[1vw] pb-0 mobile:w-[70vw] tablet:w-[30vw]">Pins Per Cartridge</div>
            <div className=" flex justify-start  gap-[5vw] mobile:w-[100vw]">
              <div className="p-[1vw]  pb-0 w-[20vw]  mobile:w-[80vw] tablet:w-[25vw]">48</div>
              <div className="p-[1vw]  pb-0   w-[20vw] mobile:w-[80vw] tablet:w-[25vw]">48 </div>
            </div>
          </div>

          <div className="flex w-full border-b border-[#DADADA] gap-[5vw] mobile:w-[180vw] tablet:w-[100vw]">
            <div className="w-[20vw] p-[1vw]  pb-0 mobile:w-[70vw] tablet:w-[30vw]">Staple height</div>
            <div className=" flex  justify-start  gap-[5vw] mobile:w-[100vw]">
              <div className="p-[1vw]  pb-0 w-[20vw]  mobile:w-[80vw] tablet:w-[25vw]">3.8 ±0.3 mm</div>
              <div className="p-[1vw]  pb-0  w-[20vw] mobile:w-[80vw] tablet:w-[25vw]">
                3.8 ±0.3 mm
              </div>
            </div>
          </div>

          <div className="flex w-full border-b border-[#DADADA] gap-[5vw] mobile:w-[180vw] tablet:w-[100vw]">
            <div className="w-[20vw] p-[1vw]  pb-0 mobile:w-[70vw] tablet:w-[30vw]">Closed staple shape</div>
            <div className=" flex justify-start  gap-[5vw] mobile:w-[100vw] ">
              <div className="p-[1vw]  pb-0 w-[20vw] flex gap-[1vw]  pb-0  mobile:w-[80vw] mobile:gap-[3vw] tablet:w-[25vw]"><p>B Form</p> <Image src="/assets/advastap/bform.png" height={36} width={36} alt="bform" className="mobile:w-[7vw] mobile:h-[7vw] tablet:h-[4vw] tablet:w-[4vw]"/></div>
              <div className="p-[1vw]  pb-0 w-[20vw] flex gap-[1vw]  pb-0  mobile:w-[80vw] mobile:gap-[3vw] tablet:w-[25vw]"><p>B Form</p> <Image src="/assets/advastap/bform.png" height={36} width={36} alt="bform" className="mobile:w-[7vw] mobile:h-[7vw] tablet:h-[4vw] tablet:w-[4vw]"/></div>
            </div>
          </div>

          <div className="flex w-full border-b border-[#DADADA] gap-[5vw] mobile:w-[180vw] tablet:w-[100vw]">
            <div className="w-[20vw] p-[1vw]  pb-0 mobile:w-[70vw] tablet:w-[30vw]"> Housing Capacity (cc)</div>
            <div className=" flex justify-start   gap-[5vw] mobile:w-[100vw]">
              <div className="p-[1vw]  pb-0 w-[20vw]   mobile:w-[80vw] tablet:w-[25vw] ">15 </div>
              <div className="p-[1vw]  pb-0   w-[20vw] mobile:w-[80vw] tablet:w-[25vw]">17</div>
            </div>
          </div>

          <div className="flex w-full border-b border-[#DADADA] gap-[5vw] mobile:w-[180vw] tablet:w-[100vw]">
            <div className="w-[20vw] p-[1vw]  pb-0 mobile:w-[70vw] tablet:w-[30vw]">Inner Lumen Diameter</div>
            <div className=" flex justify-start  gap-[5vw] mobile:w-[100vw] ">
              <div className="p-[1vw]  pb-0  w-[20vw] mobile:w-[80vw] tablet:w-[25vw]">22.3 mm</div>
              <div className="p-[1vw]  pb-0  w-[20vw] mobile:w-[80vw] tablet:w-[25vw]">23.7 mm</div>
            </div>
          </div>
          <div className="flex w-full border-b border-[#DADADA] gap-[5vw] mobile:w-[180vw] tablet:w-[100vw]">
            <div className="w-[20vw] p-[1vw]  pb-0 mobile:w-[70vw] tablet:w-[30vw]">Quantity/Box</div>
            <div className=" flex justify-start  gap-[5vw] mobile:w-[100vw] ">
              <div className="p-[1vw]  pb-0 w-[20vw]   mobile:w-[80vw] tablet:w-[25vw]">1</div>
              <div className="p-[1vw]  pb-0   w-[20vw] mobile:w-[80vw] tablet:w-[25vw]">1</div>
            </div>
          </div>
          <div className="flex w-full border-b border-[#DADADA] gap-[5vw] mobile:w-[180vw] tablet:w-[100vw]">
            <div className="w-[20vw] p-[1vw]  pb-0 mobile:w-[70vw] tablet:w-[30vw]">Shelf life</div>
            <div className=" flex justify-start  gap-[5vw] mobile:w-[100vw] ">
              <div className="p-[1vw]  pb-0 w-[20vw]  mobile:w-[80vw] tablet:w-[25vw]">3 years</div>
              <div className="p-[1vw]  pb-0   w-[20vw] mobile:w-[80vw] tablet:w-[25vw]">3 years</div>
            </div>
          </div>
          <div className="flex w-full border-b border-[#DADADA] gap-[5vw] mobile:w-[180vw] tablet:w-[100vw]">
            <div className="w-[20vw] p-[1vw]  pb-0 mobile:w-[70vw] tablet:w-[30vw]">Usability</div>
            <div className=" flex justify-start  gap-[5vw] mobile:w-[100vw] ">
              <div className="p-[1vw]  pb-0 w-[20vw]  mobile:w-[80vw] tablet:w-[25vw]">Single-use</div>
              <div className="p-[1vw]  pb-0   w-[20vw] mobile:w-[80vw] tablet:w-[25vw]">
                Single-use
              </div>
            </div>
          </div>
        </div>
      </Specifications>
    </>
  );
};

export default SpecificationsHd2;
