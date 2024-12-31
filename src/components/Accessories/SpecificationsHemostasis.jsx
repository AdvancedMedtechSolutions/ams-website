import React from 'react'
import Specifications from '../Specifications'

const SpecificationsHemostasis = () => {
  return (
   <>
      <Specifications
        textclass={"advastap-text"}
        bgimg={"/assets/accessories/specifications-bg.png"}
        heading={"Technical Specification"}
        color={"#A883D7"}
      >
      <div data-lenis-prevent className="w-full text-[1.25vw] font-light py-[3vw] text-[#4A4A4A] overflow-y-auto mobile:text-[4.5vw] tablet:text-[2.5vw] mobile:overflow-x-scroll  mobile:py-[5vw]  tablet:py-[3.5vw]">
          <div className="flex w-full border-b border-[#DADADA]  mobile:w-[130vw]">
            <div className=" p-[1vw] pb-0 w-[20vw] font-light tablet:w-[25vw] mobile:w-[50vw]"> Code</div>
            <div className=" flex justify-start gap-[19vw] ">
              <div className="p-[1vw] pb-0 font-light  ">
              AHVS3000
              </div>
              <div className="p-[1vw] pb-0 font-light  ">
              AHVS3001
              </div>
            </div>
          </div>

          <div className="flex w-full border-b border-[#DADADA] mobile:w-[130vw]">
            <div className=" p-[1vw]  pb-0 w-[20vw] tablet:w-[25vw] mobile:w-[50vw]">Connector type
            </div>
            <div className=" flex justify-start gap-[20vw] mobile:gap-[22vw] ">
              <div className="p-[1vw] pb-0 ">Push-pull
              </div>
              <div className="p-[1vw] pb-0 "> Push-click
              </div>
            </div>
          </div>

          <div className="flex w-full border-b border-[#DADADA] mobile:w-[130vw]">
            <div className=" p-[1vw] pb-0 w-[20vw] tablet:w-[25vw] mobile:w-[50vw]">Quantity per pack</div>
            <div className=" flex justify-start gap-[25vw] tablet:gap-[30vw] mobile:gap-[38vw]">
              <div className="p-[1vw] pb-0 ">5</div>
              <div className="p-[1vw]  pb-0">5</div>
            </div>
          </div>

          <div className="flex w-full border-b border-[#DADADA] mobile:w-[130vw]">
            <div className=" p-[1vw] pb-0 w-[20vw] tablet:w-[25vw] mobile:w-[50vw]">Max pressure</div>
            <div className=" flex justify-start gap-[21.5vw] mobile:gap-[25vw] ">
              <div className="p-[1vw]   pb-0">500 PSI</div>
              <div className="p-[1vw] pb-0 ">500 PSI</div>
            </div>
          </div>
          <div className="flex w-full border-b border-[#DADADA] mobile:w-[130vw]">
            <div className=" p-[1vw] pb-0 w-[20vw] tablet:w-[25vw] mobile:w-[50vw]">Shelf life</div>
            <div className=" flex justify-start gap-[22vw] mobile:gap-[26vw] ">
              <div className="p-[1vw]  pb-0">3 Years</div>
              <div className="p-[1vw]  pb-0">3 Years</div>
            </div>
          </div>
        </div>
      </Specifications>
   </>
  )
}

export default SpecificationsHemostasis