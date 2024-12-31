import React,{useEffect} from "react";
import Image from "next/image";

const Performance = () => {
  return (
    <>
      <section
        className="overflow-hidden  mobile:py-[15%] relative py-[7vw]  tablet:py-[10%]"
        id="performance"
      >
        <div className="w-screen h-full container-lg z-[5] mobile:h-full tablet:h-[70vh] ">
          <div className="w-full h-full flex flex-col items-center justify-center pb-[5vw] tablet:justify-start">
            <div className="w-full h-full flex flex-col items-center justify-center mobile:mb-[10vw] mobile:flex mobile:justify-center mobile:h-fit tablet:h-fit  z-[10]">
             <h2
data-para-anim
                className=" w-[70%] text-[3.95vw] font-light leading-[1.25] aeonik text-center text-white  mobile:text-center mobile:w-full mobile:text-[10.2vw]"
              >
              ADVA PRO, the Performance PRO for Complex Anatomies
              </h2>
            </div>
            <div className=" h-[50vw] w-[80vw] mobile:h-full flex flex-col items-center justify-end  pt-[10vw] mobile:pb-[10%] z-[10]">
             
                <div className=" w-full h-full flex flex-col items-center justify-center">
                  <div className="h-[50vw] w-[65vw] relative mobile:w-[120vw] mobile:h-[60vw] mobile:left-[5%]  mobile:top-[-5%] tablet:w-[80vw] tablet:h-[70vw] tablet:top-[30%] tablet:left-[7%]">
                    <Image
                      src="/assets/advapro/advapro-tube.png"
                      fill
                      alt="advapro tube"
                      className=" fadeUp object-contain "
                    />
                  </div>
                  <div className="mobile:mt-[15vw] mobile:flex mobile:flex-col mobile:gap-[7vw]">

                  <div className="absolute w-[28%] h-fit rounded-[1vw] px-[2vw] py-[1vw] flex items-center justify-center  text-[#FFFFFF] left-[10%] top-[35%] mobile:static mobile:w-[90vw] mobile:flex mobile:flex-col mobile:items-center mobile:py-[6vw] mobile:rounded-[4vw] mobile:gap-[5vw] mobile:px-[5vw] tablet:w-[40%] tablet:top-[30%]">
                    <div className="absolute h-[4vw] w-[4vw] left-0 top-0 tablet:h-[5vw] tablet:w-[5vw] mobile:top-[47%] mobile:relative mobile:h-[15vw] mobile:w-[15vw]">
                        <Image src="/assets/advapro/coating.png" fill alt="coating" className="fadeUp"/>
                    </div>
                    <p
                      data-para-anim
                      className="text-[1.45vw] font-light mobile:text-[5.5vw] tracking-wide mobile:text-center tablet:text-[2.5vw]"
                    >
                    Abluminal Drug Coating
                    </p>
                  </div>
                  <div className="absolute w-[28%] h-fit rounded-[1vw] px-[2vw] py-[1vw] flex items-center justify-center  text-[#FFFFFF] right-[10%] top-[40%] mobile:static mobile:w-[90vw] mobile:flex mobile:flex-col mobile:items-center mobile:py-[6vw] mobile:rounded-[4vw] mobile:gap-[5vw] mobile:px-[5vw] tablet:w-[40%] tablet:right-[2%] tablet:top-[35%]">
                    <div className="absolute h-[4vw] w-[4vw] left-0 top-0 tablet:h-[5vw] tablet:w-[5vw]  mobile:top-[56%] mobile:left-0 mobile:h-[15vw] mobile:w-[15vw] mobile:relative ">
                        <Image src="/assets/advapro/design.png" fill alt="coating" className="fadeUp"/>
                    </div>
                    <p
                      data-para-anim
                      className="text-[1.45vw] font-light mobile:text-[5.5vw] tracking-wide mobile:text-center tablet:text-[2.5vw]"
                    >
                   Stent (Scaffold) Design
                    </p>
                  </div>
                  <div className="absolute w-[22%] h-fit rounded-[1vw] px-[2vw] py-[1vw] flex items-center justify-center  text-[#FFFFFF] left-[10%] top-[52%] mobile:static mobile:w-[90vw] mobile:flex mobile:flex-col mobile:items-center mobile:py-[6vw] mobile:rounded-[4vw] mobile:gap-[5vw] mobile:px-[5vw] tablet:w-[30%] tablet:top-[43%] tablet:left-[10%]">
                    <div className="absolute h-[4vw] w-[4vw] left-0 top-0 tablet:h-[5vw] tablet:w-[5vw] mobile:top-[66%] mobile:left-0 mobile:h-[15vw] mobile:w-[15vw] mobile:relative ">
                        <Image src="/assets/advapro/drug.png" fill alt="coating" className="fadeUp"/>
                    </div>
                    <p
                      data-para-anim
                      className="text-[1.45vw] font-light mobile:text-[5.5vw] tracking-wide mobile:text-center tablet:text-[2.5vw]"
                    >
                   Sirolimus Drug
                    </p>
                  </div>
                  <div className="absolute w-[32%] h-fit rounded-[1vw] px-[2vw] py-[1vw] flex items-center justify-center  text-[#FFFFFF] left-[38%] bottom-[12%] mobile:static mobile:w-[90vw] mobile:flex mobile:flex-col mobile:items-center mobile:py-[6vw] mobile:rounded-[4vw] mobile:gap-[5vw] mobile:px-[5vw] tablet:w-[50%] tablet:bottom-[20%] tablet:left-[25%]">
                    <div className="absolute h-[4vw] w-[4vw] left-0 top-0 tablet:h-[5vw] tablet:w-[5vw] mobile:top-[75%] mobile:left-0 mobile:h-[15vw] mobile:w-[15vw] mobile:relative">
                        <Image src="/assets/advapro/matrix.png" fill alt="coating" className="fadeUp"/>
                    </div>
                    <p
                      data-para-anim
                      className="text-[1.45vw] font-light mobile:text-[5.5vw] tracking-wide mobile:text-center tablet:text-[2.5vw]"
                    >
                  Biodegradable Polymer Matrix
                    </p>
                  </div>
                  <div className="absolute w-[28%] h-fit rounded-[1vw] px-[2vw] py-[1vw] flex items-center justify-center  text-[#FFFFFF] right-[5%] bottom-[20%] mobile:static mobile:w-[90vw] mobile:flex mobile:flex-col mobile:items-center mobile:py-[6vw] mobile:rounded-[4vw] mobile:gap-[5vw] mobile:px-[5vw] tablet:w-[40%] tablet:bottom-[30%]">
                    <div className="absolute h-[4vw] w-[4vw] left-0 top-0  tablet:h-[5vw] tablet:w-[5vw] mobile:top-[84%] mobile:left-0 mobile:h-[15vw] mobile:w-[15vw] mobile:relative">
                        <Image src="/assets/advapro/stent.png" fill alt="coating" className="fadeUp"/>
                    </div>
                    <div className="absolute h-[7vw] w-[6vw]  bottom-[90%] mobile:hidden">
                        <Image src="/assets/advapro/cobalt.png" fill alt="coating" className="fadeUp"/>
                    </div>
                    <p
                      data-para-anim
                      className="text-[1.45vw] font-light mobile:text-[5.5vw] tracking-wide mobile:text-center tablet:text-[2.5vw]"
                    >
                  Cobalt Chromium Stent
                    </p>
                  </div>
                  <div className="absolute left-[10%] bottom-[20%] mobile:static mobile:w-[90vw] mobile:flex mobile:flex-col mobile:items-center mobile:py-[6vw] mobile:rounded-[4vw] mobile:gap-[5vw] mobile:px-[5vw] tablet:bottom-[35%] tablet:left-[2%]">
                  <Image src={"/assets/advapro/sirolimus-drug.png"} width={154} height={154} alt="Sirolimus drug" className="fadeUp"/>
                  </div>

                  </div>                 
                    </div>
                  </div>
                </div>
               
              </div>
              <div className="w-[15vw] h-[30%] absolute top-[35%] right-[42%] mobile:hidden">
                <Image src="/assets/advapro/water-drops.png"
                fill
                alt="performance-bg"/>
                </div>
              <div className="w-[100vw] h-[100%] absolute top-0 left-0 z-[1]">
                <Image src="/assets/advapro/performance-bg.png"
                fill
                alt="performance-bg"/>
                </div>
      </section>
    </>
  );
};

export default Performance;
