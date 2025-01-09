import React from 'react'
import Specifications from '../Specifications'
import Image from 'next/image'

const SkinStaplerSpecification = () => {
  return (
    <Specifications
    paddingBottom={"!pb-[7vw]"}
    textclass={"advastap-text"}
    bgimg={"/assets/advastaplc/closure-bg-1.png"}
    heading={"Technical Specification"}
    color={"#A883D7"}
  >
    <div className="w-full text-[1.25vw] font-light py-[2vw] text-[#4A4A4A] mobile:text-[4.5vw] tablet:text-[2.5vw] mobile:py-[5vw] mobile:mt-[4vw] tablet:py-[3.5vw]">
      <div className="flex w-full border-b border-[#DADADA] gap-[5vw] tablet:gap-[8vw] mobile:gap-[15vw]">
        <div className=" p-[1vw] pb-0 font-light w-[20vw] tablet:w-[30vw] mobile:w-[30vw]">
        Order code
        </div>
        <div className="p-[1vw] pb-0 font-light w-[30vw] tablet:w-[55vw] mobile:w-[70vw]">
        ADVASKN-35
        </div>
      </div>

      <div className="flex w-full border-b border-[#DADADA] gap-[5vw]   tablet:gap-[8vw] mobile:gap-[17vw]">
        <div className=" p-[1vw] pb-0 w-[20vw] tablet:w-[30vw] mobile:w-[30vw]">
        Description
        </div>

        <div className="p-[1vw]  pb-0 w-[30vw] tablet:w-[55vw] mobile:w-[70vw]">
        Skin stapler 35 wide
        </div>
      </div>

      <div className="flex w-full border-b border-[#DADADA] gap-[5vw]  tablet:gap-[8vw] mobile:gap-[17vw]">
        <div className=" p-[1vw] pb-0 w-[20vw] tablet:w-[30vw] mobile:w-[30vw]">
        Closed position
        </div>

        <div className="p-[1vw] pb-0 w-[30vw] tablet:w-[55vw] mobile:w-[70vw]">
          <Image src="/assets/skinstapler/closed.png" alt="closed"
          height={70} width={130} className=''/>
        </div>
      </div>

      <div className="flex w-full border-b border-[#DADADA] gap-[5vw]  tablet:gap-[8vw] mobile:gap-[17vw]">
        <div className=" p-[1vw] pb-0 w-[20vw] tablet:w-[30vw] mobile:w-[30vw]">
        Wire
        </div>

        <div className="p-[1vw] pb-0  w-[30vw] tablet:w-[55vw] mobile:w-[70vw]">
        0.56 mm
        </div>
      </div>

      <div className="flex w-full border-b border-[#DADADA] gap-[5vw]  tablet:gap-[8vw] mobile:gap-[17vw]">
        <div className=" p-[1vw] pb-0 w-[20vw] tablet:w-[30vw] mobile:w-[30vw]">
        Staple material
        </div>

        <div className="p-[1vw] pb-0  w-[30vw] tablet:w-[55vw] mobile:w-[70vw]">
        Medical grade stainless steel
        </div>
      </div>

      <div className="flex w-full border-b border-[#DADADA] gap-[5vw]  tablet:gap-[8vw] mobile:gap-[17vw]">
        <div className=" p-[1vw] pb-0 w-[20vw] tablet:w-[30vw] mobile:w-[30vw]">
        Units per box
        </div>

        <div className="p-[1vw]  pb-0 w-[30vw] tablet:w-[55vw] mobile:w-[70vw]">
         10
        </div>
      </div>

      <div className="flex w-full border-b border-[#DADADA] gap-[5vw]  tablet:gap-[8vw] mobile:gap-[17vw]">
        <div className=" p-[1vw] pb-0 w-[20vw] tablet:w-[30vw] mobile:w-[30vw]">
        Shelf life
        </div>

        <div className="p-[1vw] pb-0 w-[30vw] tablet:w-[55vw] mobile:w-[70vw]">
        3 years
        </div>
      </div>
    </div>
  </Specifications>
  )
}

export default SkinStaplerSpecification