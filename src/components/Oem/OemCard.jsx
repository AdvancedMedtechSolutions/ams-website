import Image from "next/image";
import PrimaryButton from "../Button/PrimaryButton";

export default function OemCard() {
  return (
    <>
       <section id='oemcard' className=' py-[5%] overflow-hidden tablet:h-full tablet:py-[10%] mobile:h-full mobile:pb-[15%]'>
      <div className='h-full flex flex-col items-center justify-center gap-[8vw] tablet:gap-[4vw]'>
        
          <div
            
            className={`rounded-[45px] w-[90vw] border-[1px] border-gray-200 h-full px-[4vw] py-[8vw] flex bg-white/50 justify-center items-center  tablet:flex-col tablet:h-full tablet:px-[5vw] tablet:py-[5vw] tablet:rounded-[5vw] tablet:gap-[4vw] mobile:flex-col mobile:w-[90vw] mobile:h-full mobile:rounded-[9vw] mobile:py-[5vw] mobile:pb-[20vw] fadeUp`}
          >
            <div className="w-[85%] flex justify-between mobile:flex-col mobile:w-full mobile:items-center tablet:flex-col tablet:w-full">

            <div className='h-[23vw] w-[35vw] relative rounded-[50px] overflow-hidden tablet:h-[45vw] tablet:w-[80vw] tablet:rounded-[4vw] mobile:w-[80vw] mobile:h-[85vw] mobile:rounded-[6vw] fadeUp'>
              <Image
                src="/assets/oem/oem-rnd-img.webp"
                fill
                alt="oem-rnd"
                className={'imageAnim'}
              />
            </div>

            <div className={`flex flex-col w-[43%] items-left justify-center gap-[2vw] tablet:w-[90%] tablet:ml-[1vw] tablet:mt-[2vw] mobile:w-full mobile:text-center mobile:ml-0 mobile:gap-[7vw] mobile:mt-[10vw]`}>
              <h2
data-para-anim className='text-[2.5vw] font-light aeonik text-[#111111] w-[100%] leading-[1.3] tablet:text-[5vw] mobile:text-[10vw] para-animation'>Research & Development</h2>
              <p  className='leading-[1.8] w-[99%] text-[#2A2A2A] font-light text-[1.15vw] tablet:text-[2vw] mobile:text-[4.5vw] mobile:w-full text-justify mobile:text-center mobile:leading-[1.6]'>
                <span data-para-anim className='para-animation block'>At AMS, we’re setting new standards in medical research and development. Our advanced R&D facility paves the way for new therapies and enhanced treatment outcomes through insight-driven medical device technology and innovation.</span>
              </p>
              <div className="w-full mobile:flex mobile:justify-center fadeUp">

                <PrimaryButton text={"Explore Our R&D Capabilities"} link={"/research-and-development"} className={" mobile:px-[6vw] tablet:px-[2vw] tablet:py-[1.5vw]"}/>
              </div>
            </div>
            
            
            </div>
          </div>
        
      </div>
    </section>
      
    </>
  )
}

 
