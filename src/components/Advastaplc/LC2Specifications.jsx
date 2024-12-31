import React from "react";
import Specifications from "../Specifications";
import Image from "next/image";

const LC2Specifications = () => {
  return (
    <>
      <Specifications
        textclass={"reloads-text"}
        bgimg={"/assets/advastaplc/closure-bg-1.png"}
        heading={"Technical Specification"}
        color={"#FB4BCC"}
        paddingBottom={"!pb-[7vw]"}
      >
        <div
          data-lenis-prevent
          className="w-full h-[70vh] text-[1.25vw] font-light mt-[3vw] text-[#4A4A4A]  mobile:text-[4.5vw] tablet:text-[2.5vw] mobile:overflow-x-scroll   tablet:overflow-x-scroll mobile:py-[5vw] tablet:pt-[5vw] tablet:h-[50vh] mobile:mt-[7vw] mobile:h-[55vh]"
        >

          <div className="flex w-full border-b border-[#DADADA] tablet:w-[180vw] mobile:w-[280vw]">
            <div className=" p-[1vw] pb-0  w-[20vw] tablet:w-[40vw] mobile:w-[60vw]">Cartridge order codes</div>
            <div className="  flex justify-start gap-[0.8vw] tablet:gap-[8vw] mobile:gap-[7vw]">
              <div className="p-[1vw] pb-0  px-[0.5vw]   w-[8vw] tablet:w-[15vw] mobile:w-[30vw]">ADVALCR60B</div>
              <div className="p-[1vw] pb-0  px-[0.5vw]    w-[8vw]  tablet:w-[15vw] mobile:w-[30vw]">ADVALCR60G</div>
              <div className="p-[1vw] pb-0  px-[0.5vw]   w-[8vw]  tablet:w-[15vw] mobile:w-[30vw]"> ADVALCR80B</div>
              <div className="p-[1vw] pb-0  px-[0.5vw]   w-[8vw]  tablet:w-[15vw] mobile:w-[30vw]"> ADVALCR80G</div>
              <div className="p-[1vw] pb-0  px-[0.5vw]   w-[8vw]  tablet:w-[15vw] mobile:w-[30vw]"> ADVALCR100B</div>
              <div className="p-[1vw] pb-0  px-[0.5vw]   w-[8vw]  tablet:w-[15vw] mobile:w-[30vw]"> ADVALCR100G</div>
            </div>
          </div>

          <div className="flex w-full border-b border-[#DADADA] tablet:w-[180vw] mobile:w-[280vw]">
            <div className=" p-[1vw] pb-0  w-[20vw] tablet:w-[40vw] mobile:w-[60vw]">Linear cutter order codes</div>
            <div className=" flex justify-start  gap-[0.8vw]  tablet:gap-[8vw] mobile:gap-[7vw]">
              <div className="p-[1vw] pb-0  w-[8vw]  tablet:w-[15vw] mobile:w-[30vw]">ADVALC60</div>
              <div className="p-[1vw] pb-0  w-[8vw]  tablet:w-[15vw] mobile:w-[30vw]">ADVALC6O</div>
              <div className="p-[1vw] pb-0  w-[8vw]  tablet:w-[15vw] mobile:w-[30vw]"> ADVALC80</div>
              <div className="p-[1vw] pb-0  w-[8vw]  tablet:w-[15vw] mobile:w-[30vw]"> ADVALC80</div>
              <div className="p-[1vw] pb-0  w-[8vw]  tablet:w-[15vw] mobile:w-[30vw]"> ADVALC100</div>
              <div className="p-[1vw] pb-0  w-[8vw]  tablet:w-[15vw] mobile:w-[30vw]"> ADVALC100</div>
            </div>
          </div>

          <div className="flex w-full border-b border-[#DADADA] tablet:w-[180vw] mobile:w-[280vw]">
            <div className=" p-[1vw] pb-0  w-[20vw] tablet:w-[40vw] mobile:w-[60vw] mobile:pr-[2vw]">Staple length before closure</div>
            <div className=" flex justify-start  gap-[0.8vw]  tablet:gap-[8vw] mobile:gap-[7vw]">
              <div className="p-[1vw] pb-0  w-[8vw]  tablet:w-[15vw] mobile:w-[30vw]">3.8 mm</div>
              <div className="p-[1vw] pb-0  w-[8vw]  tablet:w-[15vw] mobile:w-[30vw]">4.8 mm</div>
              <div className="p-[1vw] pb-0  w-[8vw]  tablet:w-[15vw] mobile:w-[30vw]"> 3.8 mm</div>
              <div className="p-[1vw] pb-0   w-[8vw] tablet:w-[15vw] mobile:w-[30vw]"> 4.8 mm</div>
              <div className="p-[1vw] pb-0   w-[8vw] tablet:w-[15vw] mobile:w-[30vw]"> 3.8 mm</div>
              <div className="p-[1vw] pb-0   w-[8vw] tablet:w-[15vw] mobile:w-[30vw]"> 4.8 mm</div>
            </div>
          </div>


          <div className="flex w-full border-b border-[#DADADA] tablet:w-[180vw] mobile:w-[280vw]">
            <div className=" p-[1vw] pb-0  w-[20vw] tablet:w-[40vw] mobile:w-[60vw] mobile:pr-[2vw]">Approx. staple height closed</div>
            <div className=" flex justify-start gap-[0.8vw]   tablet:gap-[8vw] mobile:gap-[7vw]">
              <div className="p-[1vw] pb-0   w-[8vw] tablet:w-[15vw] mobile:w-[30vw]">1.6 mm</div>
              <div className="p-[1vw] pb-0   w-[8vw] tablet:w-[15vw] mobile:w-[30vw]">2.0 mm</div>
              <div className="p-[1vw] pb-0   w-[8vw] tablet:w-[15vw] mobile:w-[30vw]"> 1.6 mm</div>
              <div className="p-[1vw] pb-0   w-[8vw] tablet:w-[15vw] mobile:w-[30vw]"> 2.0 mm</div>
              <div className="p-[1vw] pb-0   w-[8vw] tablet:w-[15vw] mobile:w-[30vw]"> 1.6 mm</div>
              <div className="p-[1vw] pb-0   w-[8vw] tablet:w-[15vw] mobile:w-[30vw]"> 2.0 mm</div>
            </div>
          </div>

          <div className="flex w-full border-b border-[#DADADA] tablet:w-[180vw] mobile:w-[280vw]">
            <div className=" p-[1vw] pb-0  w-[20vw] tablet:w-[40vw] mobile:w-[60vw]">Color</div>
            <div className=" flex justify-start gap-[0.8vw]   tablet:gap-[8vw] mobile:gap-[7vw]">
              <div className="p-[1vw] pb-0   w-[8vw] tablet:w-[15vw] mobile:w-[30vw]"><Image src="/assets/advastaplc/blue-cartridge.png" height={50} width={60} alt="blue-cartridge"/></div>
              <div className="p-[1vw] pb-0   w-[8vw] tablet:w-[15vw] mobile:w-[30vw]"><Image src="/assets/advastaplc/green-cartridge.png" height={50} width={60} alt="green-cartridge"/></div>
              <div className="p-[1vw] pb-0   w-[8vw] tablet:w-[15vw] mobile:w-[30vw]"> <Image src="/assets/advastaplc/blue-cartridge.png" height={50} width={60} alt="blue-cartridge"/></div>
              <div className="p-[1vw] pb-0   w-[8vw] tablet:w-[15vw] mobile:w-[30vw]"> <Image src="/assets/advastaplc/green-cartridge.png" height={50} width={60} alt="green-cartridge"/></div>
              <div className="p-[1vw] pb-0   w-[8vw] tablet:w-[15vw] mobile:w-[30vw]"> <Image src="/assets/advastaplc/blue-cartridge.png" height={50} width={60} alt="blue-cartridge"/></div>
              <div className="p-[1vw] pb-0   w-[8vw] tablet:w-[15vw] mobile:w-[30vw]"> <Image src="/assets/advastaplc/green-cartridge.png" height={50} width={60} alt="green-cartridge"/></div>
            </div>
          </div>

          <div className="flex w-full border-b border-[#DADADA] tablet:w-[180vw] mobile:w-[280vw]">
            <div className=" p-[1vw] pb-0  w-[20vw] tablet:w-[40vw] mobile:w-[60vw]">No. of reloads</div>
            <div className=" flex justify-start gap-[0.8vw]  tablet:gap-[8vw] mobile:gap-[7vw]">
              <div className="p-[1vw] pb-0   w-[8vw] tablet:w-[15vw] mobile:w-[30vw]">6</div>
              <div className="p-[1vw] pb-0  w-[8vw] tablet:w-[15vw] mobile:w-[30vw]">6</div>
              <div className="p-[1vw] pb-0   w-[8vw] tablet:w-[15vw] mobile:w-[30vw]"> 6</div>
              <div className="p-[1vw] pb-0   w-[8vw] tablet:w-[15vw] mobile:w-[30vw]"> 6</div>
              <div className="p-[1vw] pb-0   w-[8vw] tablet:w-[15vw] mobile:w-[30vw]"> 6</div>
              <div className="p-[1vw] pb-0   w-[8vw] tablet:w-[15vw] mobile:w-[30vw]"> 6</div>
            </div>
          </div>
          
          <div className="flex w-full border-b border-[#DADADA] tablet:w-[180vw] mobile:w-[280vw]">
            <div className=" p-[1vw] pb-0  w-[20vw] tablet:w-[40vw] mobile:w-[60vw]">No. of pins</div>
            <div className=" flex justify-start gap-[0.8vw]  tablet:gap-[8vw] mobile:gap-[7vw] ">
              <div className="p-[1vw] pb-0  w-[8vw] tablet:w-[15vw] mobile:w-[30vw]">64</div>
              <div className="p-[1vw] pb-0  w-[8vw] tablet:w-[15vw] mobile:w-[30vw]">64</div>
              <div className="p-[1vw] pb-0   w-[8vw] tablet:w-[15vw] mobile:w-[30vw]"> 84</div>
              <div className="p-[1vw] pb-0   w-[8vw] tablet:w-[15vw] mobile:w-[30vw]"> 84</div>
              <div className="p-[1vw] pb-0   w-[8vw] tablet:w-[15vw] mobile:w-[30vw]" > 104</div>
              <div className="p-[1vw] pb-0   w-[8vw] tablet:w-[15vw] mobile:w-[30vw]"> 104</div>
            </div>
          </div>

          <div className="flex w-full border-b border-[#DADADA] tablet:w-[180vw] mobile:w-[280vw]">
            <div className=" p-[1vw] pb-0  w-[20vw] tablet:w-[40vw] mobile:w-[60vw]">Rows of staples</div>
            <div className=" flex justify-start gap-[0.8vw]  tablet:gap-[8vw] mobile:gap-[7vw]">
              <div className="p-[1vw] pb-0   w-[8vw] tablet:w-[15vw] mobile:w-[30vw]">4</div>
              <div className="p-[1vw] pb-0   w-[8vw] tablet:w-[15vw] mobile:w-[30vw]">4</div>
              <div className="p-[1vw] pb-0   w-[8vw] tablet:w-[15vw] mobile:w-[30vw]">4</div>
              <div className="p-[1vw] pb-0   w-[8vw] tablet:w-[15vw] mobile:w-[30vw]">4</div>
              <div className="p-[1vw] pb-0   w-[8vw] tablet:w-[15vw] mobile:w-[30vw]">4</div>
              <div className="p-[1vw] pb-0   w-[8vw] tablet:w-[15vw] mobile:w-[30vw]">4</div>
            </div>
          </div>

          <div className="flex w-full border-b border-[#DADADA] tablet:w-[180vw] mobile:w-[280vw]">
            <div className=" p-[1vw] pb-0  w-[20vw] tablet:w-[40vw] mobile:w-[60vw]">Length of staple line</div>
            <div className=" flex justify-start gap-[0.8vw]  tablet:gap-[8vw] mobile:gap-[7vw]">
              <div className="p-[1vw] pb-0   w-[8vw] tablet:w-[15vw] mobile:w-[30vw]">61</div>
              <div className="p-[1vw] pb-0   w-[8vw] tablet:w-[15vw] mobile:w-[30vw]">61</div>
              <div className="p-[1vw] pb-0   w-[8vw] tablet:w-[15vw] mobile:w-[30vw]">81</div>
              <div className="p-[1vw] pb-0   w-[8vw] tablet:w-[15vw] mobile:w-[30vw]">81</div>
              <div className="p-[1vw] pb-0   w-[8vw] tablet:w-[15vw] mobile:w-[30vw]">101</div>
              <div className="p-[1vw] pb-0   w-[8vw] tablet:w-[15vw] mobile:w-[30vw]">101</div>
            </div>
          </div>

          <div className="flex w-full border-b border-[#DADADA] tablet:w-[180vw] mobile:w-[280vw]">
            <div className=" p-[1vw] pb-0  w-[20vw] tablet:w-[40vw] mobile:w-[60vw]">Shelf life</div>
            <div className=" flex justify-start gap-[0.8vw]  tablet:gap-[8vw] mobile:gap-[7vw]">
              <div className="p-[1vw] pb-0  w-[8vw] tablet:w-[15vw] mobile:w-[30vw]">3 Years</div>
              <div className="p-[1vw] pb-0   w-[8vw] tablet:w-[15vw] mobile:w-[30vw]">3 Years</div>
              <div className="p-[1vw] pb-0  w-[8vw] tablet:w-[15vw] mobile:w-[30vw]">3 Years</div>
              <div className="p-[1vw] pb-0  w-[8vw] tablet:w-[15vw] mobile:w-[30vw]">3 Years</div>
              <div className="p-[1vw] pb-0   w-[8vw] tablet:w-[15vw] mobile:w-[30vw]">3 Years</div>
              <div className="p-[1vw] pb-0  w-[8vw] tablet:w-[15vw] mobile:w-[30vw]">3 Years</div>
            </div>
          </div>

          <div className="flex w-full border-b border-[#DADADA] tablet:w-[180vw] mobile:w-[280vw]">
            <div className=" p-[1vw] pb-0  w-[20vw] tablet:w-[40vw] mobile:w-[60vw]">Usability</div>
            <div className=" flex justify-start gap-[0.8vw]  tablet:gap-[8vw]  mobile:gap-[7vw]">
              <div className="p-[1vw] pb-0  w-[8vw] tablet:w-[15vw] mobile:w-[30vw]">Single-use</div>
              <div className="p-[1vw] pb-0  w-[8vw] tablet:w-[15vw] mobile:w-[30vw]">Single-use</div>
              <div className="p-[1vw] pb-0  w-[8vw] tablet:w-[15vw] mobile:w-[30vw]">Single-use</div>
              <div className="p-[1vw] pb-0  w-[8vw] tablet:w-[15vw] mobile:w-[30vw]">Single-use</div>
              <div className="p-[1vw] pb-0   w-[8vw] tablet:w-[15vw] mobile:w-[30vw]">Single-use</div>
              <div className="p-[1vw] pb-0   w-[8vw] tablet:w-[15vw] mobile:w-[30vw] ">Single-use</div>
            </div>
          </div>
        </div>
      </Specifications>
    </>
  );
};

export default LC2Specifications;
