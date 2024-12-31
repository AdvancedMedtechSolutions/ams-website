import React from 'react'
import Specifications from '../Specifications'

const SpecificationsInflation = () => {
  return (
    <>
    <Specifications
     textclass={"advastap-text"}
     bgimg={"/assets/accessories/specifications-bg.png"}
     heading={"Technical Specification"}
     color={"#A883D7"}>
      <div data-lenis-prevent className='w-full h-[70vh] overflow-y-scroll tablet:h-[53vh] tablet:overflow-y-hidden'>
       <div className="w-full  text-[1.25vw] font-light py-[3vw] text-[#4A4A4A]  mobile:py-[5vw] mobile:text-[4.5vw] tablet:text-[2.2vw]  mobile:mt-[4vw]  ">
          <div  className="flex w-full border-b border-[#DADADA]  mobile:flex-col mobile:gap-[3vw] mobile:py-[3vw]  ">
            <div className="flex-[0.5] p-[1vw] pb-0 font-light"> Precise inflation up to 30 ATM (440 PSI)
            </div>
          </div>
          <div className="flex w-full border-b border-[#DADADA]  mobile:flex-col mobile:gap-[3vw] mobile:py-[3vw] ">
            <div className="flex-[0.5] p-[1vw] pb-0 font-light"> Analog display, visual pressure control
            </div>
          </div>
          <div className="flex w-full border-b border-[#DADADA]  mobile:flex-col mobile:gap-[3vw] mobile:py-[3vw] ">
            <div className=" p-[1vw] pb-0 font-light">Self-locking mechanism for easy locking as well as gradual and rapid pressure
            </div>
          </div>
          <div className="flex w-full border-b border-[#DADADA]  mobile:flex-col mobile:gap-[3vw] mobile:py-[3vw] ">
            <div className=" p-[1vw] pb-0 font-light"> Stopcock: 3-way with OFF/ON control (500 PSI)

            </div>
          </div>
          <div className="flex w-full border-b border-[#DADADA]  mobile:flex-col mobile:gap-[3vw] mobile:py-[3vw] ">
            <div className=" p-[1vw] pb-0 font-light"> Screw type 
            </div>
          </div>
          <div className="flex w-full border-b border-[#DADADA]  mobile:flex-col mobile:gap-[3vw] mobile:py-[3vw] ">
            <div className=" p-[1vw] pb-0 font-light"> Material: Syringe body - polycarbonate, 	latex free

            </div>
          </div>
          <div className="flex w-full border-b border-[#DADADA]  mobile:flex-col mobile:gap-[3vw] mobile:py-[3vw] ">
            <div className=" p-[1vw] pb-0 font-light">Sterilization - ETO
            </div>
          </div>
          

        </div>
        <div><p className='text-[2.5vw] text-[#2A2A2A] font-light  leading-[1] py-[2vw] pt-[4vw] mobile:text-[8vw] mobile:text-center tablet:text-[3.7vw] '>Ordering Information</p></div>
        <div  data-lenis-prevent className="w-full text-[1.25vw] font-light py-[3vw] text-[#4A4A4A]   mobile:py-[5vw] mobile:text-[4.5vw] tablet:text-[2.5vw] mobile:overflow-x-scroll mobile:mt-[7vw] tablet:py-[4.5vw] ">
          <div className="flex w-full border-b border-[#DADADA] mobile:py-[3vw]  mobile:w-[180vw]">
            <div className=" p-[1vw] pb-0 font-light w-[10vw] mobile:w-[50vw]"> Code</div>
            <div className="  flex justfy-center gap-[6vw] tablet:gap-[1vw]">
              <div className="p-[1vw]  pb-0 font-light w-[10vw] text-center  mobile:w-[40vw] mobile:text-center tablet:w-[18vw]">
              Fluid barrel volume
              </div>
              <div className="p-[1vw] pb-0 font-light w-[12vw] text-center   mobile:w-[40vw] mobile:text-center tablet:w-[20vw]">
              Max pressure rate ATM/BAR
              </div>
              <div className="p-[1vw] pb-0 font-light w-[12vw] text-center  mobile:w-[40vw] mobile:text-center tablet:w-[19vw]">
              Extension tube length
              </div>
              <div className="p-[1vw] pb-0 font-light w-[8vw] text-center  mobile:w-[35vw] mobile:text-center tablet:w-[13vw]">
              Quantity per box
              </div>
            </div>
          </div>

          <div className="flex w-full border-b border-[#DADADA]  ">
            <div className=" p-[1vw] pb-0 w-[10vw] mobile:w-[50vw]">ABID6002
            </div>
            <div className=" flex justify-center gap-[6vw] tablet:gap-[1vw] ">
              <div className="p-[1vw] pb-0 w-[10vw] text-center  mobile:w-[25vw] mobile:text-center tablet:w-[18vw]">30 ml
              </div>
              <div className="p-[1vw] pb-0 w-[12vw] text-center  mobile:w-[40vw] mobile:text-center tablet:w-[20vw]">30
              </div>
              <div className="p-[1vw] pb-0 w-[12vw] text-center  mobile:w-[45vw] mobile:text-center tablet:w-[19vw]">9.84 in/ 25 cm
              </div>
              <div className="p-[1vw] pb-0 w-[8vw] text-center  mobile:w-[40vw] mobile:text-center tablet:w-[13vw]">1 unit
              </div>
            </div>
          </div>

         
        </div>
        </div>
      </Specifications>

    </>
  )
}

export default SpecificationsInflation