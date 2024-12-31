import React from 'react'
import Specifications from '../Specifications'

const AdvagripSpecifications = () => {
  return (
   <>
     <Specifications
        textclass={"advastap-text"}
        bgimg={"/assets/advaspong/specifications-bg.png"}
        heading={"Specification"}
        color={"#A883D7"}
      >
          <div data-lenis-prevent className="w-full text-[1.25vw] font-light py-[3vw] text-[#4A4A4A] overflow-y-auto mobile:text-[4.5vw] tablet:text-[2.5vw] mobile:py-[5vw] tablet:py-[5vw] mobile:overflow-x-scroll  mobile:overflow-scroll mobile:mt-[7vw] ">

          <div className="flex w-full border-b border-[#DADADA] mobile:w-[160vw]">
            <div className=" p-[1vw] pb-0 w-[20vw] text-[#4564AC] tablet:w-[20vw] mobile:w-[50vw]">Features
            </div>
            <div className=" flex justify-start gap-[10vw] mobile:gap-[20vw] ">
              <div className="p-[1vw] pb-0 w-[15vw] tablet:w-[25vw] mobile:w-[40vw]">Poliglecaprone 25
              </div>
              <div className="p-[1vw] pb-0 w-[15vw]  tablet:w-[25vw] mobile:w-[40vw] "> Polydioxanone
              </div>
            </div>
          </div>

          <div className="flex w-full border-b border-[#DADADA] mobile:w-[160vw]">
            <div className=" p-[1vw] pb-0 w-[20vw] text-[#4564AC] tablet:w-[20vw] mobile:w-[50vw]">Tensile Strength
            </div>
            <div className=" flex justify-start gap-[10vw] mobile:gap-[20vw]">
              <div className="p-[1vw] pb-0  w-[15vw]  tablet:w-[25vw] mobile:w-[40vw]">7 days - 60% <br/> 14 days - 40%</div>
              <div className="p-[1vw] pb-0  w-[15vw]  tablet:w-[25vw] mobile:w-[40vw]">14 days - 80% <br/>
28 days - 70% <br/>
42 days - 45 %</div>
            </div>
          </div>

          <div className="flex w-full border-b border-[#DADADA] mobile:w-[160vw]">
            <div className=" p-[1vw] pb-0 w-[20vw] text-[#4564AC] tablet:w-[20vw] mobile:w-[50vw]">Absorption Profile</div>
            <div className=" flex justify-start gap-[10vw] mobile:gap-[20vw]">
              <div className="p-[1vw] pb-0 w-[15vw]  tablet:w-[25vw] mobile:w-[40vw]">Upto 90 days
              </div>
              <div className="p-[1vw] pb-0 w-[15vw]  tablet:w-[25vw] mobile:w-[40vw]">180 - 220 days
              </div>
            </div>
          </div>
          <div className="flex w-full border-b border-[#DADADA] mobile:w-[160vw]">
            <div className=" p-[1vw]  pb-0 w-[20vw] text-[#4564AC] tablet:w-[20vw] mobile:w-[50vw]">Color</div>
            <div className=" flex justify-start gap-[10vw] mobile:gap-[20vw] ">
              <div className="p-[1vw] pb-0 w-[15vw]  tablet:w-[25vw] mobile:w-[40vw]">Undyed</div>
              <div className="p-[1vw] pb-0 w-[15vw]  tablet:w-[25vw] mobile:w-[40vw]">Violet</div>
            </div>
          </div>
          <div className="flex w-full border-b border-[#DADADA] mobile:w-[160vw]">
            <div className=" p-[1vw] pb-0 w-[20vw] text-[#4564AC] tablet:w-[20vw] mobile:w-[50vw]"> USP Size
            </div>
            <div className=" flex justify-start gap-[10vw] mobile:gap-[20vw]">
              <div className="p-[1vw] pb-0 w-[15vw]  tablet:w-[25vw] mobile:w-[40vw]">0 to 4-0 
              </div>
              <div className="p-[1vw] pb-0 w-[15vw]  tablet:w-[25vw] mobile:w-[40vw]">1 to 4-0 
              </div>
            </div>
          </div>
          <div className="flex w-full border-b border-[#DADADA] mobile:w-[160vw]">
            <div className=" p-[1vw] pb-0 w-[20vw] text-[#4564AC] tablet:w-[20vw] mobile:w-[50vw]">No. of Barbs/ inch</div>
            <div className=" flex justify-start gap-[10vw] mobile:gap-[20vw]">
              <div className="p-[1vw] pb-0 w-[15vw]  tablet:w-[25vw] mobile:w-[40vw]">46</div>
              <div className="p-[1vw]  pb-0 w-[15vw]  tablet:w-[25vw] mobile:w-[40vw]">46</div>
            </div>
          </div>
          <div className="flex w-full border-b border-[#DADADA] mobile:w-[160vw]">
            <div className=" p-[1vw] pb-0 w-[20vw] text-[#4564AC] tablet:w-[20vw] mobile:w-[50vw]">Indications
            </div>
            <div className=" flex justify-start gap-[5vw] mobile:gap-[20vw]">
              <div className="p-[1vw] pb-0 w-[20vw]  tablet:w-[25vw] mobile:w-[40vw]">Indicated for general soft tissue approximation purpose.</div>
              <div className="p-[1vw] pb-0  w-[20vw]  tablet:w-[25vw] mobile:w-[40vw]">Indicated for general soft tissue approximation purpose</div>
            </div>
          </div>
        </div>
      </Specifications>
   </>
  )
}

export default AdvagripSpecifications