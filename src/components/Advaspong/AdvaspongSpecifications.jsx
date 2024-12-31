import React from 'react'
import Specifications from "../Specifications";

const AdvaspongSpecifications = ({}) => {
  return (
    <>
        <Specifications
        paddingBottom={"!pb-[7vw]"}
        textclass={"advastap-text"}
        bgimg={"/assets/advaspong/specifications-bg.png"}
        heading={"Specification"}
        color={"#A883D7"}
      >
          <div data-lenis-prevent className="w-full text-[1.25vw] font-light py-[3vw] text-[#4A4A4A] overflow-y-auto mobile:text-[4.5vw] tablet:text-[2.5vw] mobile:py-[5vw] tablet:py-[5vw] mobile:overflow-x-scroll  mobile:overflow-scroll mobile:mt-[7vw] ">
          <div className="flex w-full border-b border-[#DADADA] mobile:overflow-x-scroll mobile:w-[160vw]">
            <div className=" p-[1vw] pb-0 font-light w-[20vw] tablet:w-[20vw] mobile:w-[50vw]"> Product</div>
              <div className="p-[1vw] pb-0 font-light tablet:w-[60vw] mobile:w-[100vw]">
              Sterile Absorbable Haemostatic Gelatin Sponge
              </div>
          </div>

          <div className="flex w-full border-b border-[#DADADA] mobile:w-[160vw]">
            <div className=" p-[1vw] pb-0 w-[20vw] tablet:w-[20vw] mobile:w-[50vw]">Order code
            </div>
            <div className=" flex justify-start gap-[10vw] mobile:gap-[20vw] ">
              <div className="p-[1vw] pb-0 w-[15vw] tablet:w-[25vw] mobile:w-[40vw]">ADVASPG-S
              </div>
              <div className="p-[1vw]  pb-0  w-[15vw]  tablet:w-[25vw] mobile:w-[40vw] "> ADVASPG-R
              </div>
            </div>
          </div>

          <div className="flex w-full border-b border-[#DADADA] mobile:w-[160vw]">
            <div className=" p-[1vw] pb-0 w-[20vw] tablet:w-[20vw] mobile:w-[50vw]">Type</div>
            <div className=" flex justify-start gap-[10vw] mobile:gap-[20vw]">
              <div className="p-[1vw] pb-0  w-[15vw]  tablet:w-[25vw] mobile:w-[40vw]">Standard</div>
              <div className="p-[1vw] pb-0  w-[15vw]  tablet:w-[25vw] mobile:w-[40vw]">Regular</div>
            </div>
          </div>

          <div className="flex w-full border-b border-[#DADADA] mobile:w-[160vw]">
            <div className=" p-[1vw] pb-0 w-[20vw] tablet:w-[20vw] mobile:w-[50vw]">Material</div>
            <div className=" flex justify-start gap-[10vw] mobile:gap-[20vw]">
              <div className="p-[1vw] pb-0 w-[15vw]  tablet:w-[25vw] mobile:w-[40vw]">Purified Gelatin</div>
              <div className="p-[1vw] pb-0 w-[15vw]  tablet:w-[25vw] mobile:w-[40vw]">Purified Gelatin</div>
            </div>
          </div>
          <div className="flex w-full border-b border-[#DADADA] mobile:w-[160vw]">
            <div className=" p-[1vw]  pb-0 w-[20vw] tablet:w-[20vw] mobile:w-[50vw]">Dimensions</div>
            <div className=" flex justify-start gap-[10vw] mobile:gap-[20vw] ">
              <div className="p-[1vw] pb-0 w-[15vw]  tablet:w-[25vw] mobile:w-[40vw]">80 × 50 x 10 mm</div>
              <div className="p-[1vw]  pb-0 w-[15vw]  tablet:w-[25vw] mobile:w-[40vw]">70 × 50 x 10 mm</div>
            </div>
          </div>
          <div className="flex w-full border-b border-[#DADADA] mobile:w-[160vw]">
            <div className=" p-[1vw] pb-0 w-[20vw] tablet:w-[20vw] mobile:w-[50vw]"> No. of items / pack</div>
            <div className=" flex justify-start gap-[10vw] mobile:gap-[20vw]">
              <div className="p-[1vw] pb-0 w-[15vw]  tablet:w-[25vw] mobile:w-[40vw]">2</div>
              <div className="p-[1vw] pb-0 w-[15vw]  tablet:w-[25vw] mobile:w-[40vw]">2</div>
            </div>
          </div>
          <div className="flex w-full border-b border-[#DADADA] mobile:w-[160vw]">
            <div className=" p-[1vw] pb-0 w-[20vw] tablet:w-[20vw] mobile:w-[50vw]">Sterilization</div>
            <div className=" flex justify-start gap-[10vw] mobile:gap-[20vw]">
              <div className="p-[1vw] pb-0 w-[15vw]  tablet:w-[25vw] mobile:w-[40vw]">Gamma Radiation</div>
              <div className="p-[1vw] pb-0 w-[15vw]  tablet:w-[25vw] mobile:w-[40vw]">Gamma Radiation</div>
            </div>
          </div>
          <div className="flex w-full border-b border-[#DADADA] mobile:w-[160vw]">
            <div className=" p-[1vw]  pb-0 w-[20vw] tablet:w-[20vw] mobile:w-[50vw]">Shelf life</div>
            <div className=" flex justify-start gap-[10vw] mobile:gap-[20vw]">
              <div className="p-[1vw] pb-0 w-[15vw]  tablet:w-[25vw] mobile:w-[40vw]">3 Years</div>
              <div className="p-[1vw] pb-0  w-[15vw]  tablet:w-[25vw] mobile:w-[40vw]">3 Years</div>
            </div>
          </div>
        </div>
      </Specifications>
    </>
  )
}

export default AdvaspongSpecifications