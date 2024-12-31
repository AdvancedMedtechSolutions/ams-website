import React from 'react'
import Specifications from '../Specifications'
import Image from 'next/image'

const LC3Specifications = () => {
  return (
    <>
    <Specifications
      textclass={"reloads-text"}
      bgimg={"/assets/advastaplc/closure-bg-1.png"}
      heading={"Technical Specification"}
      color={"#FB4BCC"}
    >
    <div data-lenis-prevent className="w-full h-[70vh] text-[1.25vw] font-light mt-[3vw] text-[#4A4A4A]   overflow-y-scroll mobile:text-[4.5vw] tablet:text-[2.5vw] mobile:overflow-x-scroll   tablet:overflow-x-scroll mobile:py-[5vw] tablet:py-[5vw]  mobile:mt-[7vw]">
        <div className="flex w-full border-b border-[#DADADA]  ">
          <div className=" p-[1vw] pb-0  font-light text-[#4564AC] w-[25vw]  tablet:w-[40vw] mobile:w-[55vw]">Linear Cutter Applier</div> 
        </div>

        <div className="flex w-full border-b border-[#DADADA]  tablet:w-[130vw] mobile:w-[180vw]">
          <div className=" p-[1vw] pb-0  w-[25vw]  tablet:w-[40vw] mobile:w-[60vw]">Reference Code
          </div>
          <div className=" flex justify-start gap-[10vw] ">
            <div className="p-[1vw] pb-0  w-[15vw] tablet:w-[40vw] mobile:w-[55vw]">ADVALC55R3
            </div>
            <div className="p-[1vw] pb-0   w-[15vw] tablet:w-[40vw] mobile:w-[55vw]"> ADVALC75R3
            </div>
          </div>
        </div>

        <div className="flex w-full border-b border-[#DADADA]  tablet:w-[130vw] mobile:w-[180vw]">
          <div className=" p-[1vw] pb-0  w-[25vw]  tablet:w-[40vw] mobile:w-[60vw]">Pack Size</div>
          <div className=" flex justify-start gap-[10vw] ">
            <div className="p-[1vw] pb-0  w-[15vw] tablet:w-[40vw] mobile:w-[55vw]">1 Unit/ Box</div>
            <div className="p-[1vw] pb-0  w-[15vw] tablet:w-[40vw] mobile:w-[55vw]">1 Unit/ Box</div>
          </div>
        </div>

        <div className="flex w-full border-b border-[#DADADA]   tablet:w-[130vw] mobile:w-[180vw]">
          <div className=" p-[1vw] pb-0  font-light text-[#4564AC] w-[25vw] tablet:w-[40vw] mobile:w-[55vw]">Linear Cutter Reload</div> 
        </div>
        <div className="flex w-full border-b border-[#DADADA]  tablet:w-[130vw] mobile:w-[180vw]">
          <div className=" p-[1vw] pb-0  w-[25vw]  tablet:w-[40vw] mobile:w-[60vw]">Reference Code
          </div>
          <div className=" flex justify-start  gap-[10vw]">
            <div className="p-[1vw] pb-0  w-[15vw] tablet:w-[40vw] mobile:w-[55vw]">ADVALC55R3
            </div>
            <div className="p-[1vw] pb-0  w-[15vw] tablet:w-[40vw] mobile:w-[55vw]"> ADVALC75R3
            </div>
          </div>
        </div>

        <div className="flex w-full border-b border-[#DADADA]  tablet:w-[130vw] mobile:w-[180vw]">
          <div className=" p-[1vw] pb-0  w-[25vw]  tablet:w-[40vw] mobile:w-[60vw]">Pack Size</div>
          <div className=" flex justify-start gap-[10vw] ">
            <div className="p-[1vw] pb-0  w-[15vw] tablet:w-[40vw] mobile:w-[55vw]">6 Units/ Box</div>
            <div className="p-[1vw] pb-0  w-[15vw] tablet:w-[40vw] mobile:w-[55vw]">6 Units/ Box</div>
          </div>
        </div>

        <div className="flex w-full border-b border-[#DADADA]  tablet:w-[130vw] mobile:w-[180vw]">
          <div className=" p-[1vw] pb-0  text-[#4564AC] w-[25vw]  tablet:w-[40vw] mobile:w-[60vw] mobile:pr-[2vw]">Staple length before closure</div>
          <div className=" flex justify-start gap-[10vw] ">
            <div className="p-[1vw] pb-0  w-[15vw] tablet:w-[40vw] mobile:w-[55vw]">4.3 mm</div>
            <div className="p-[1vw] pb-0  w-[15vw] tablet:w-[40vw] mobile:w-[55vw]">4.3 mm</div>
          </div>
        </div>
        <div className="flex w-full border-b border-[#DADADA]  tablet:w-[130vw] mobile:w-[180vw]">
          <div className=" p-[1vw] pb-0  text-[#4564AC] w-[25vw]  tablet:w-[40vw] mobile:w-[60vw]">Approx. staple height closed</div>
          <div className=" flex justify-start  gap-[8vw] ">
            <div className="p-[1vw] pb-0  ">
                <ul>
                    <li className='flex items-center w-[15vw]  tablet:w-[40vw] mobile:w-[55vw]'><span className='h-[10px] w-[10px] rounded-full bg-[#5391C8] block mr-[0.5vw]'></span>Regular, 1.5 mm</li>
                    <li className='flex items-center w-[15vw] tablet:w-[40vw] mobile:w-[55vw]'><span className='h-[10px] w-[10px] rounded-full bg-[#D7B56E] block mr-[0.5vw] '></span>Regular - Thick, 1.8 mm</li>
                    <li className='flex items-center w-[15vw]  tablet:w-[40vw] mobile:w-[55vw]'><span className='h-[10px] w-[10px] rounded-full bg-[#52B173] block mr-[0.5vw]'></span>Thick, 2.0 mm</li>
                </ul>
            </div>
            <div className="p-[1vw] pb-0    ">
                <ul >
                    <li className='flex items-center w-[15vw] tablet:w-[40vw] mobile:w-[55vw]'><span className='h-[10px] w-[10px] rounded-full bg-[#5391C8] block mr-[0.5vw]'></span>Regular, 1.5 mm</li>
                    <li className='flex items-center w-[15vw]  tablet:w-[40vw] mobile:w-[55vw]'><span className='h-[10px] w-[10px] rounded-full bg-[#D7B56E] block mr-[0.5vw]'></span>Regular - Thick, 1.8 mm</li>
                    <li className='flex items-center  w-[15vw]  tablet:w-[40vw] mobile:w-[55vw]'><span className='h-[10px] w-[10px] rounded-full bg-[#52B173] block mr-[0.5vw]'></span>Thick, 2.0 mm</li>
                </ul></div>
          </div>
        </div>

        <div className="flex w-full border-b border-[#DADADA]  tablet:w-[130vw] mobile:w-[180vw]">
          <div className=" p-[1vw] pb-0  text-[#4564AC] w-[25vw]  tablet:w-[40vw] mobile:w-[60vw]">No. of pins</div>
          <div className=" flex justify-start gap-[10vw] ">
            <div className="p-[1vw] pb-0  w-[15vw] tablet:w-[40vw] mobile:w-[55vw]">88</div>
            <div className="p-[1vw] pb-0  w-[15vw] tablet:w-[40vw] mobile:w-[55vw]">118</div>
          </div>
        </div>

        <div className="flex w-full border-b border-[#DADADA]  tablet:w-[130vw] mobile:w-[180vw]">
          <div className=" p-[1vw] pb-0  text-[#4564AC] w-[25vw]   tablet:w-[40vw] mobile:w-[60vw]">
           Closed Staple Shape</div>
          <div className=" flex justify-start gap-[6vw] ">
            <div className="p-[1vw] pb-0  w-[19vw] flex items-start justify-start gap-[1vw] pb-0  tablet:w-[40vw] mobile:w-[55vw] "> <div className='relative h-[3vw] w-[3vw] '>
              <Image src="/assets/advastaplc/x-shaped.png" fill alt="x-shaped" className='object-contain'/>
              </div>X-Shaped Technology</div>
              <div className="p-[1vw] pb-0  w-[19vw] flex items-start justify-start gap-[1vw] pb-0  tablet:w-[40vw] mobile:w-[55vw] "> <div className='relative h-[3vw] w-[3vw] '>
              <Image src="/assets/advastaplc/x-shaped.png" fill alt="x-shaped" className='object-contain'/>
              </div>X-Shaped Technology</div>
          </div>
        </div>
        <div className="flex w-full border-b border-[#DADADA]  tablet:w-[130vw] mobile:w-[180vw]">
          <div className=" p-[1vw] pb-0  text-[#4564AC] w-[25vw]  tablet:w-[40vw] mobile:w-[60vw]">Rows of staples</div>
          <div className=" flex justify-start gap-[10vw]">
            <div className="p-[1vw] pb-0  w-[15vw] tablet:w-[40vw] mobile:w-[55vw]">6</div>
            <div className="p-[1vw] pb-0  w-[15vw] tablet:w-[40vw] mobile:w-[55vw]">6</div>
          </div>
        </div>
        <div className="flex w-full border-b border-[#DADADA]  tablet:w-[130vw] mobile:w-[180vw]">
          <div className=" p-[1vw] pb-0  text-[#4564AC] w-[25vw]  tablet:w-[40vw] mobile:w-[60vw]">Length of staple line</div>
          <div className=" flex justify-start gap-[10vw]">
            <div className="p-[1vw] pb-0  w-[15vw] tablet:w-[40vw] mobile:w-[55vw]">60 mm</div>
            <div className="p-[1vw] pb-0  w-[15vw] tablet:w-[40vw] mobile:w-[55vw]">80 mm</div>
          </div>
        </div>
        <div className="flex w-full border-b border-[#DADADA]  tablet:w-[130vw] mobile:w-[180vw]">
          <div className=" p-[1vw] pb-0  text-[#4564AC] w-[25vw]  tablet:w-[40vw] mobile:w-[60vw]">Shelf Life</div>
          <div className=" flex justify-start gap-[10vw] ">
            <div className="p-[1vw] pb-0  w-[15vw] tablet:w-[40vw] mobile:w-[55vw]">3 Years</div>
            <div className="p-[1vw] pb-0   w-[15vw] tablet:w-[40vw] mobile:w-[55vw]">3 Years</div>
          </div>
        </div>
        <div className="flex w-full border-b border-[#DADADA]  tablet:w-[130vw] mobile:w-[180vw]">
          <div className=" p-[1vw] pb-0  text-[#4564AC] w-[25vw]  tablet:w-[40vw] mobile:w-[60vw]">Usability</div>
          <div className=" flex justify-start gap-[10vw] ">
            <div className="p-[1vw] pb-0  w-[15vw] tablet:w-[40vw] mobile:w-[55vw]">Single-use</div>
            <div className="p-[1vw] pb-0  w-[15vw] tablet:w-[40vw] mobile:w-[55vw]">Single-use</div>
          </div>
        </div>
      </div>
    </Specifications>
 </>
  )
}

export default LC3Specifications