import React from "react";
import Specifications from "../Specifications";
import Image from "next/image";

const SpecificationsHd3 = ({ paddingBottom }) => {
  return (
    <>
      <Specifications
        paddingBottom={paddingBottom}
        textclass={"gradient-text"}
        bgimg={"/assets/advastap/specifications-bg.png"}
        heading={"Technical Specification"}
        color={"#275F7B"}
      >
        <div
          data-lenis-prevent
          className="w-full  h-[70vh] text-[1.25vw] font-light py-[2vw]  text-[#4A4A4A] overflow-y-scroll mobile:py-[5vw] mobile:text-[4.5vw] tablet:text-[2.5vw]  mobile:overflow-x-scroll  mobile:overflow-scroll mobile:mt-[7vw] tablet:h-[52vh] mobile:h-[55vh]"
        >
          <div className="flex w-full border-b border-[#DADADA] gap-[5vw] mobile:w-[180vw] tablet:w-[100vw]">
            <div className="w-[20vw] p-[1vw] pb-0  font-light tablet:w-[30vw] mobile:w-[70vw] capitalize">
              Reorder code
            </div>
            <div className=" flex justify-start  gap-[5vw] mobile:w-[100vw] ">
              <div className=" w-[20vw] p-[1vw] pb-0  font-light  mobile:w-[100vw] tablet:w-[25vw]">
                ADVAPPH-33

              </div>
              <div className="p-[1vw] pb-0  font-light  w-[20vw] mobile:w-[100vw]  tablet:w-[25vw]">
                ADVAPPH-34
              </div>
            </div>
          </div>

          <div className="flex w-full border-b border-[#DADADA] gap-[5vw] mobile:w-[160vw] tablet:w-[100vw]">
            <div className="w-[20vw] p-[1vw] pb-0  mobile:w-[70vw] tablet:w-[30vw] capitalize">Pin row construction</div>
            <div className=" flex justify-start  gap-[5vw]  mobile:w-[80vw] mobile:justify-center mobile:gap-[24vw]">
              <div className="p-[1vw] pb-0  w-[20vw]  mobile:w-[35vw] tablet:w-[25vw] mobile:pl-[2.5vw]">
                2 Row
              </div>
              <div className="p-[1vw] pb-0    w-[20vw] mobile:w-[37vw] tablet:w-[25vw] mobile:pl-[2.5vw]">
                2 Row
              </div>
            </div>
          </div>

          <div className="flex w-full border-b border-[#DADADA] gap-[5vw] mobile:w-[180vw] tablet:w-[100vw]">
            <div className=" p-[1vw] pb-0  w-[20vw] mobile:w-[70vw] tablet:w-[30vw] capitalize ">Pin material</div>
            <div className=" flex justify-start  gap-[5vw] mobile:w-[100vw]">
              <div className="p-[1vw] pb-0   w-[20vw] mobile:w-[80vw]  tablet:w-[25vw]">Titanium Grade 1</div>
              <div className="p-[1vw] pb-0    w-[20vw] mobile:w-[80vw]  tablet:w-[25vw]">
                Titanium Grade 1
              </div>
            </div>
          </div>

          <div className="flex w-full border-b border-[#DADADA] gap-[5vw] mobile:w-[180vw] tablet:w-[100vw]">
            <div className=" p-[1vw] pb-0  w-[20vw] mobile:w-[70vw] tablet:w-[30vw] ">Pins Per Cartridge</div>
            <div className=" flex justify-start  gap-[5vw] mobile:w-[100vw]">
              <div className="p-[1vw] pb-0  w-[20vw]  mobile:w-[80vw]  tablet:w-[25vw]">34</div>
              <div className="p-[1vw] pb-0    w-[20vw] mobile:w-[80vw]  tablet:w-[25vw]">34</div>
            </div>
          </div>

          <div className="flex w-full border-b border-[#DADADA] gap-[5vw] mobile:w-[180vw] tablet:w-[100vw]">
            <div className=" p-[1vw] pb-0  w-[20vw] mobile:w-[70vw] tablet:w-[30vw] capitalize">Staple height</div>
            <div className=" flex  justify-start  gap-[5vw] mobile:w-[100vw]">
              <div className="p-[1vw] pb-0  w-[20vw]  mobile:w-[80vw]  tablet:w-[25vw]">3.8 mm</div>
              <div className="p-[1vw] pb-0   w-[20vw] mobile:w-[80vw]  tablet:w-[25vw]">
                3.8 mm
              </div>
            </div>
          </div>

          <div className="flex w-full border-b border-[#DADADA] gap-[5vw] mobile:w-[180vw] tablet:w-[100vw]">
            <div className=" p-[1vw] pb-0  w-[20vw] mobile:w-[70vw] tablet:w-[30vw] capitalize">Closed staple shape</div>
            <div className=" flex justify-start  gap-[5vw] mobile:w-[100vw] ">
              <div className="p-[1vw] pb-0  w-[20vw] flex gap-[1vw]  mobile:w-[80vw] mobile:gap-[3vw]  tablet:w-[25vw]"><p>B Form</p> <Image src="/assets/advastap/bform.png" height={36} width={36} alt="bform" className="mobile:w-[7vw] mobile:h-[7vw] tablet:h-[4vw] tablet:w-[4vw]" /></div>
              <div className="p-[1vw] pb-0  w-[20vw] flex gap-[1vw] mobile:w-[80vw] mobile:gap-[3vw]  tablet:w-[25vw]"><p>B Form</p> <Image src="/assets/advastap/bform.png" height={36} width={36} alt="bform" className="mobile:w-[7vw] mobile:h-[7vw] tablet:h-[4vw] tablet:w-[4vw]" /></div>
            </div>
          </div>
          <div className="flex w-full border-b border-[#DADADA] gap-[5vw] mobile:w-[180vw] tablet:w-[100vw]">
            <div className=" p-[1vw] pb-0  w-[20vw] mobile:w-[70vw] tablet:w-[30vw] capitalize">Closed staple height</div>
            <div className=" flex justify-start   gap-[5vw] mobile:w-[100vw] ">
              <div className="p-[1vw] pb-0  w-[20vw]  mobile:w-[80vw] tablet:w-[25vw]">0.75 mm-1.5 mm</div>
              <div className="p-[1vw] pb-0    w-[20vw] mobile:w-[80vw]  tablet:w-[25vw]">0.75 mm-1.5 mm</div>
            </div>
          </div>

          <div className="flex w-full border-b border-[#DADADA] gap-[5vw] mobile:w-[180vw] tablet:w-[100vw]">
            <div className=" p-[1vw] pb-0  w-[20vw] mobile:w-[70vw] tablet:w-[30vw] "> Housing Capacity (cc)</div>
            <div className=" flex justify-start  gap-[5vw]  mobile:w-[100vw]">
              <div className="p-[1vw] pb-0  w-[20vw]   mobile:w-[80vw]  tablet:w-[25vw]">17.97
              </div>
              <div className="p-[1vw] pb-0    w-[20vw] mobile:w-[80vw]  tablet:w-[25vw]">21.86
              </div>
            </div>
          </div>

          <div className="flex w-full border-b border-[#DADADA] gap-[5vw] mobile:w-[180vw] tablet:w-[100vw]">
            <div className=" p-[1vw] pb-0  w-[20vw] mobile:w-[70vw] tablet:w-[30vw] ">Inner Lumen Diameter</div>
            <div className=" flex justify-start  gap-[5vw] mobile:w-[100vw] ">
              <div className="p-[1vw] pb-0  w-[20vw]  mobile:w-[80vw]  tablet:w-[25vw]">25.5 mm</div>
              <div className="p-[1vw] pb-0   w-[20vw] mobile:w-[80vw]  tablet:w-[25vw]">26.5 mm</div>
            </div>
          </div>
          <div className="flex w-full border-b border-[#DADADA] gap-[5vw] mobile:w-[180vw] tablet:w-[100vw]">
            <div className=" p-[1vw] pb-0  w-[20vw] mobile:w-[70vw] tablet:w-[30vw] ">Quantity/Box</div>
            <div className=" flex justify-start  gap-[5vw] mobile:w-[100vw] ">
              <div className="p-[1vw] pb-0  w-[20vw]  mobile:w-[80vw]  tablet:w-[25vw]">1</div>
              <div className="p-[1vw] pb-0    w-[20vw] mobile:w-[80vw]  tablet:w-[25vw]">1</div>
            </div>
          </div>
          <div className="flex w-full border-b border-[#DADADA] gap-[5vw] mobile:w-[180vw] tablet:w-[100vw]">
            <div className=" p-[1vw] pb-0  w-[20vw] mobile:w-[70vw] tablet:w-[30vw] capitalize">Shelf life</div>
            <div className=" flex justify-start  gap-[5vw] mobile:w-[100vw] ">
              <div className="p-[1vw] pb-0  w-[20vw]  mobile:w-[80vw]  tablet:w-[25vw]">3 years</div>
              <div className="p-[1vw] pb-0    w-[20vw] mobile:w-[80vw]  tablet:w-[25vw]">3 years</div>
            </div>
          </div>
          <div className="flex w-full border-b border-[#DADADA] gap-[5vw] mobile:w-[180vw] tablet:w-[100vw]">
            <div className=" p-[1vw] pb-0  w-[20vw] mobile:w-[70vw] tablet:w-[30vw] ">Usability</div>
            <div className=" flex justify-start gap-[5vw] mobile:w-[100vw] ">
              <div className="p-[1vw] pb-0  w-[20vw]  mobile:w-[80vw]  tablet:w-[25vw]">Single-use</div>
              <div className="p-[1vw] pb-0    w-[20vw] mobile:w-[80vw]  tablet:w-[25vw]">
                Single-use
              </div>
            </div>
          </div>
        </div>
      </Specifications>
    </>
  );
};

export default SpecificationsHd3;
