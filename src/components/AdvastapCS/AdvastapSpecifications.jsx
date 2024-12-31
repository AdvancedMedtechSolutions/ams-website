import React from "react";
import Specifications from "../Specifications";

const AdvastapSpecifications = () => {
  return (
    <>
      <Specifications
       paddingBottom={"!pb-[7vw]"}
        textclass={"advastap-text"}
        bgimg={"/assets/endolc/specifications-bg.png"}
        heading={"Technical Specification"}
        color={"#A883D7"}
      >
        <div data-lenis-prevent  className="w-full text-[1.25vw] font-light py-[2vw]  text-[#4A4A4A] overflow-y-auto mobile:py-[5vw] mobile:text-[4.5vw] tablet:text-[2.5vw]  mobile:overflow-x-scroll  mobile:overflow-scroll mobile:mt-[7vw] ">
          <div className="flex w-full border-b border-[#DADADA] mobile:w-[180vw] ">
            <div className="flex-[0.5] p-[1vw] pb-0 font-light tablet:w-[20vw]">Product Code</div>
            <div className="flex-1 flex justify-between mobile:w-[100vw]">
              <div className="p-[1vw] pb-0 font-light  mobile:w-[100vw] tablet:w-[20vw]">
                ADVACS-29R3
              </div>
              <div className="p-[1vw] pb-0 font-light  w-[20vw] mobile:w-[100vw]  tablet:w-[20vw]">
                ADVACS-32R3
              </div>
            </div>
          </div>

          <div className="flex w-full border-b border-[#DADADA] mobile:w-[160vw]">
            <div className="flex-[0.5] p-[1vw] pb-0 ">Product Description </div>
            <div className="flex-1 flex justify-between  mobile:w-[80vw] mobile:justify-center mobile:gap-[24vw]">
              <div className="p-[1vw] pb-0   mobile:w-[35vw] tablet:w-[20vw] mobile:pl-[2.5vw]">
                Circular Stapler 3-Row 29mm
              </div>
              <div className="p-[1vw] pb-0   w-[20vw] mobile:w-[37vw] tablet:w-[20vw] mobile:pl-[2.5vw]">
                Circular Stapler 3-Row 32mm
              </div>
            </div>
          </div>

          <div className="flex w-full border-b border-[#DADADA] mobile:w-[180vw]">
            <div className="flex-[0.5] p-[1vw] pb-0">Pin Row Construction</div>
            <div className="flex-1 flex justify-between mobile:w-[100vw]">
              <div className="p-[1vw] pb-0   mobile:w-[80vw]">3 Row</div>
              <div className="p-[1vw] pb-0   w-[20vw] mobile:w-[80vw]">3 Row</div>
            </div>
          </div>

          <div className="flex w-full border-b border-[#DADADA] mobile:w-[180vw]">
            <div className="flex-[0.5] p-[1vw] pb-0">Pins Per Cartridge</div>
            <div className="flex-1 flex justify-between mobile:w-[100vw]">
              <div className="p-[1vw] pb-0   mobile:w-[80vw]">36</div>
              <div className="p-[1vw] pb-0   w-[20vw] mobile:w-[80vw]">45</div>
            </div>
          </div>

          <div className="flex w-full border-b border-[#DADADA] mobile:w-[180vw]">
            <div className="flex-[0.5] p-[1vw] pb-0">Stapler Height</div>
            <div className="flex-1 flex  justify-between mobile:w-[100vw]">
              <div className="p-[1vw] pb-0  mobile:w-[80vw]">4.8mm</div>
              <div className="p-[1vw] pb-0  w-[20vw] mobile:w-[80vw]">5.0mm</div>
            </div>
          </div>

          <div className="flex w-full border-b border-[#DADADA] mobile:w-[180vw]">
            <div className="flex-[0.5] p-[1vw] pb-0">Closed Stapler Height</div>
            <div className="flex-1 flex justify-between mobile:w-[100vw] ">
              <div className="p-[1vw] pb-0   mobile:w-[80vw]">2.15÷0.2mm</div>
              <div className="p-[1vw] pb-0   w-[20vw] mobile:w-[80vw]">2.25£0.2mm</div>
            </div>
          </div>

          <div className="flex w-full border-b border-[#DADADA] mobile:w-[180vw]">
            <div className="flex-[0.5] p-[1vw] pb-0"> Housing Capacity</div>
            <div className="flex-1 flex justify-between  mobile:w-[100vw]">
              <div className="p-[1vw] pb-0   mobile:w-[80vw]">15 CC</div>
              <div className="p-[1vw] pb-0   w-[20vw] mobile:w-[80vw]">19 CC</div>
            </div>
          </div>

          <div className="flex w-full border-b border-[#DADADA] mobile:w-[180vw]">
            <div className="flex-[0.5] p-[1vw] pb-0">Inner Lumen Diameter</div>
            <div className="flex-1 flex justify-between mobile:w-[100vw] ">
              <div className="p-[1vw] pb-0  mobile:w-[80vw]">20mm</div>
              <div className="p-[1vw] pb-0  w-[20vw] mobile:w-[80vw]">22mm</div>
            </div>
          </div>
          <div className="flex w-full border-b border-[#DADADA] mobile:w-[180vw]">
            <div className="flex-[0.5] p-[1vw] pb-0">Quantity/Box</div>
            <div className="flex-1 flex justify-between mobile:w-[100vw] ">
              <div className="p-[1vw] pb-0   mobile:w-[80vw]">01</div>
              <div className="p-[1vw] pb-0   w-[20vw] mobile:w-[80vw]">01</div>
            </div>
          </div>
        </div>
      </Specifications>
    </>
  );
};

export default AdvastapSpecifications;
