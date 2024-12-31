import React from "react";
import Specifications from "../Specifications";

const SpecificationsManifold = () => {
  return (
    <>
      <Specifications
       paddingBottom={"!pb-[7vw]"}
        textclass={"advastap-text"}
        bgimg={"/assets/accessories/specifications-bg.png"}
        heading={"Technical Specification"}
        color={"#A883D7"}
      >
        <div className="w-full text-[1.25vw] font-light py-[2vw] text-[#4A4A4A] mobile:text-[4.5vw] tablet:text-[2.5vw] mobile:py-[5vw] mobile:mt-[4vw] tablet:py-[3.5vw]">
          <div className="flex w-full border-b border-[#DADADA] gap-[5vw] tablet:gap-[8vw] mobile:gap-[15vw]">
            <div className=" p-[1vw]  pb-0 font-light w-[20vw] tablet:w-[30vw] mobile:w-[30vw]">
              Package robustness
            </div>
            <div className="p-[1vw] pb-0 font-light w-[30vw] tablet:w-[55vw] mobile:w-[70vw]">
              Qualified
            </div>
          </div>

          <div className="flex w-full border-b border-[#DADADA] gap-[5vw]   tablet:gap-[8vw] mobile:gap-[17vw]">
            <div className=" p-[1vw] pb-0 w-[20vw] tablet:w-[30vw] mobile:w-[30vw]">
              Package leakage
            </div>

            <div className="p-[1vw] pb-0  w-[30vw] tablet:w-[55vw] mobile:w-[70vw]">
              Qualified
            </div>
          </div>

          <div className="flex w-full border-b border-[#DADADA] gap-[5vw]  tablet:gap-[8vw] mobile:gap-[17vw]">
            <div className=" p-[1vw] pb-0 w-[20vw] tablet:w-[30vw] mobile:w-[30vw]">
              Parts
            </div>

            <div className="p-[1vw] pb-0 w-[30vw] tablet:w-[55vw] mobile:w-[70vw]">
              Main body, Handles, Rotating connector
            </div>
          </div>

          <div className="flex w-full border-b border-[#DADADA] gap-[5vw]  tablet:gap-[8vw] mobile:gap-[17vw]">
            <div className=" p-[1vw] pb-0 w-[20vw] tablet:w-[30vw] mobile:w-[30vw]">
              Body material
            </div>

            <div className="p-[1vw] pb-0  w-[30vw] tablet:w-[55vw] mobile:w-[70vw]">
              ABS & PC
            </div>
          </div>

          <div className="flex w-full border-b border-[#DADADA] gap-[5vw]  tablet:gap-[8vw] mobile:gap-[17vw]">
            <div className=" p-[1vw] pb-0 w-[20vw] tablet:w-[30vw] mobile:w-[30vw]">
              Side ports
            </div>

            <div className="p-[1vw] pb-0  w-[30vw] tablet:w-[55vw] mobile:w-[70vw]">
              Three
            </div>
          </div>

          <div className="flex w-full border-b border-[#DADADA] gap-[5vw]  tablet:gap-[8vw] mobile:gap-[17vw]">
            <div className=" p-[1vw] pb-0 w-[20vw] tablet:w-[30vw] mobile:w-[30vw]">
              Pressure
            </div>

            <div className="p-[1vw] pb-0  w-[30vw] tablet:w-[55vw] mobile:w-[70vw]">
              550 PSI
            </div>
          </div>

          <div className="flex w-full border-b border-[#DADADA] gap-[5vw]  tablet:gap-[8vw] mobile:gap-[17vw]">
            <div className=" p-[1vw] pb-0 w-[20vw] tablet:w-[30vw] mobile:w-[30vw]">
              Valve type
            </div>

            <div className="p-[1vw] pb-0 w-[30vw] tablet:w-[55vw] mobile:w-[70vw]">
              Right OFF
            </div>
          </div>
          <div className="flex w-full border-b border-[#DADADA] gap-[5vw]  tablet:gap-[8vw] mobile:gap-[14vw]">
            <div className=" p-[1vw] pb-0 w-[20vw] tablet:w-[30vw] mobile:w-[30vw]">
              Sterilization
            </div>

            <div className="p-[1vw] pb-0 w-[30vw] tablet:w-[55vw] mobile:w-[70vw]">
              ETO
            </div>
          </div>
          <div className="flex w-full border-b border-[#DADADA] gap-[5vw]  tablet:gap-[8vw] mobile:gap-[17vw]">
            <div className=" p-[1vw] pb-0 w-[20vw] tablet:w-[30vw] mobile:w-[30vw]">
              Shelf life
            </div>

            <div className="p-[1vw] pb-0 w-[30vw] tablet:w-[55vw] mobile:w-[70vw]">
              3 Years
            </div>
          </div>
        </div>
      </Specifications>
    </>
  );
};

export default SpecificationsManifold;
