import React from 'react'
import Image from 'next/image'

const UmbilicalTape = () => {
  return (
    <section className="hero py-[5%] pt-[8%] tablet:pb-0 tablet:pr-[3%] w-screen overflow-hidden bg-white/30 shadow-md box-shadow-sm mobile:shadow-none" id="umbilical-tape">
    <div className="px-[10%] relative  tablet:px-[5%] mobile:px-[8%]">
      <div className="flex h-screen w-full justify-start items-start mobile:h-full mobile:flex-col mobile:justify-start mobile:text-center mobile:gap-[2vw] tablet:h-[60vh]">
        <div className="gap-[4vw] mobile:w-full mobile:h-fit mobile:flex mobile:flex-col mobile:gap-0">
          <div className="w-full mobile:h-full mobile:flex  mobile:flex-col mobile:gap-[2vw]">
            <h1 className="title-1 aeonik  leading-[1]">
              <span
data-para-anim
                className={`leading-[1.2] overflow-hidden uppercase text-[5.75vw] mobile:text-[11.2vw] text-[#79C0E4] tablet:text-[7.5vw]`}
              >
               UMBILICAL COTTON TAPE
              </span> 
            </h1>
            <p data-para-anim className="uppercase  text-[1.25vw] leading-[1] tracking-widest font-light mt-[1vw] mobile:text-[4.2vw] mobile:leading-[1.2] mobile:w-full mobile:text-center mobile:py-[5%] mobile:tracking-normal tablet:text-[2.5vw] tablet:w-[60%] tablet:tracking-normal tablet:py-[3%]">
            Comfort meets confidence
            </p>
          </div>
         
          <div className="flex items-center justify-start ml-[-2vw] mobile:justify-center mt-[13vw] mobile:text-center mobile:ml-0 mobile:mt-[110vw] mobile:flex-col ">
            <span className="w-[4.5vw] h-[2px] bg-black rotate-90 mobile:hidden tablet:w-[8vw] fadeUp"></span>
            <div className='w-full h-[1px] my-[7vw] bg-black hidden mobile:block'></div>
            <p className="max-w-[35vw] ml-[-1vw] text-[1.65vw] leading-[1.2] font-light mobile:text-[4.2vw] mobile:max-w-full tablet:text-[2.5vw] tablet:max-w-[55%]">
              <span data-para-anim>High-quality, soft and expertly woven cotton, ensures unmatched comfort.</span>
            </p>
          </div>
          <div className='w-full h-[1px] bg-black mt-[7vw] hidden mobile:block'></div>
          <div className="flex items-center justify-start ml-[-2vw] mt-[3vw] mobile:justify-center mobile:text-center mobile:ml-0 mobile:mt-[4vw]  ">
            <span className="w-[4.5vw] h-[2px] bg-black rotate-90 mobile:hidden tablet:w-[8vw] fadeUp"></span>
            <p className="max-w-[35vw] ml-[-1vw] text-[1.65vw] leading-[1.2] font-light mobile:text-[4.2vw] mobile:max-w-full tablet:text-[2.5vw] tablet:max-w-[55%]">
              <span data-para-anim>Preserves tissue integrity, facilitates easy application and removal.</span>
            </p>
          </div>
        </div>
        <div className="absolute right-[30%] top-[90%] flex flex-col items-center justify-end  mobile:flex-col-reverse mobile:right-[60%] mobile:top-[70%] tablet:top-[90%]">
          <div className="w-[55vw] h-[40vw] absolute bottom-[10%] mobile:w-[100vw] mobile:h-[80vw]  tablet:w-[65vw] tablet:h-[60vw] z-0 fadeUp">
            <Image
              className="object-cover"
              src="/assets/advabondtape/umbilical-hero-bg.png"
              alt="Background Image"
              fill
            />
          </div>


        </div>
          <div className="w-[48vw] h-[40vw] absolute bottom-0 right-0 mobile:absolute  mobile:top-[30%] mobile:bottom-auto mobile:left-[0%] mobile:w-[90vw] mobile:h-[80vw] tablet:w-[55vw] tablet:h-[60vw] z-10 fadeUp ">
            <Image
              className="object-contain"
              src="/assets/advabondtape/umbilical-cotton-tape.png"
              alt="Hero Image"
              priority={true}
              fill
            />
          </div>
          <div className="w-full absolute bottom-[5%] left-[65%] mobile:left-0 mobile:bottom-[20%]">
            <p data-para-anim className="max-w-[30vw] mt-[-3vw] text-[1.65vw] leading-[1] font-light mobile:text-[4.2vw] mobile:max-w-full mobile:text-center mobile:py-[5%] tablet:text-[2.5vw] tablet:max-w-[30vw] tablet:mt-[-10vw] tablet:text-left">
            Non-Absorbable Bone Wax
            </p>
          </div>
      </div>
    </div>
  </section>
  )
}

export default UmbilicalTape