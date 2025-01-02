
import Image from 'next/image'

const MidWeight = () => {
  return (
    <section
        className="overflow-hidden mobile:py-[15%] relative py-[7%] tablet:py-[10%]"
        id="medium-weight-mesh"
      >
        <div className="w-screen h-[50vw] container-lg z-[5] mobile:h-full tablet:h-full">
          <div className="w-full h-full flex flex-col items-center justify-center pb-[5vw] tablet:justify-start mobile:justify-start ">
            <div className="w-full h-full flex flex-col items-center justify-start mobile:flex mobile:justify-center mobile:h-fit tablet:h-fit tablet:flex tablet:justify-center">
             <h2
data-para-anim
                className=" w-[70%] text-[3.95vw] font-light leading-[1.25] aeonik text-center capitalize  text-[#111111]  mobile:text-center mobile:w-full mobile:text-[11vw] tablet:text-[7.5vw]"
              >
                ADVAMESH Medium-Weight
              </h2>
            </div>
            <div className=" h-full w-full absolute left-[45%] top-[30%]  mobile:h-full   pt-[10vw] mobile:pb-[10%] mobile:top-[25%]  tablet:pb-[5%] tablet:left-0 tablet:top-[10%]">
              <div className="h-[38vw] w-[50vw] relative mobile:w-[90vw] mobile:h-[100vw] mobile:left-[-38%]  mobile:top-0 tablet:w-[100vw] tablet:h-[50vw] tablet:top-[15%] tablet:scale-[1.5] fadeUp">
                <Image
                  src="/assets/advamesh/mid-weight.png"
                  fill
                  alt="mid-weight"
                  className=" object-contain"
                />
              </div>
            </div>
          </div>
          <div className="absolute top-[26%] text-[1.25vw] left-[5%] h-[50vw] py-[5.4%] space-y-[26%] mobile:static mobile:space-y-0 mobile:flex mobile:flex-col mobile:gap-[8vw] mobile:justify-center mobile:mt-[50vh] mobile:w-full mobile:h-fit mobile:text-[6vw] tablet:static tablet:space-y-0 tablet:flex tablet:flex-col tablet:justify-center tablet:items-center tablet:mt-[40vh] tablet:w-full tablet:h-fit tablet:gap-[5vw] tablet:text-[4vw]">
              <div className="ml-[50%] mobile:translate-y-0 mobile:ml-0 mobile:flex mobile:justify-center tablet:translate-y-0 tablet:ml-0 tablet:flex tablet:justify-center hover:scale-[1.05] duration-300 ease transition-all">
                <p data-para-anim className=" leading-[1.2] font-light w-[21vw] text-[#2A2A2A] mobile:w-[80%] mobile:text-center mobile:whitespace-normal tablet:w-[80%] tablet:text-center">A Revolutionary Solution Engineered for Surgical Success</p>
              </div>
              <div className="translate-y-[-110%] ml-[40%] mobile:translate-y-0 mobile:ml-0 mobile:flex mobile:justify-center tablet:translate-y-0 tablet:ml-0 tablet:flex tablet:justify-center hover:scale-[1.05] duration-300 ease transition-all">
                <p data-para-anim className=" leading-[1.2] font-light w-[25vw] text-[#2A2A2A] mobile:w-[80%] mobile:text-center mobile:whitespace-normal tablet:whitespace-normal tablet:w-full">Dual Elasticity – Comfortable Healing</p>
              </div>
              <div className="translate-y-[-150%] ml-[70%] mobile:translate-y-0 mobile:ml-0 mobile:flex mobile:justify-center tablet:translate-y-0 tablet:ml-0 tablet:flex tablet:justify-center hover:scale-[1.05] duration-300 ease transition-all">
                <p data-para-anim className=" leading-[1.2] font-light w-[25vw] whitespace-nowrap text-[#2A2A2A] mobile:w-[80%] mobile:text-center mobile:whitespace-normal tablet:whitespace-normal 
                tablet:w-full">Precise Mesh Positioning</p>
              </div>
              <div className="translate-y-[-155%] ml-[40%] mobile:translate-y-0 mobile:ml-0 mobile:flex mobile:justify-center tablet:translate-y-0 tablet:ml-0 tablet:flex tablet:justify-center hover:scale-[1.05] duration-300 ease transition-all">
                <p data-para-anim className=" leading-[1.2] font-light w-[25vw] text-[#2A2A2A] mobile:w-[80%] mobile:text-center mobile:whitespace-normal tablet:whitespace-normal 
                tablet:w-full">Honeycomb Structure – Optimum Porosity</p>
              </div>
              <div className="translate-y-[-185%] ml-[95%] mobile:translate-y-0 mobile:ml-0 mobile:flex mobile:justify-center tablet:translate-y-0 tablet:ml-0 tablet:flex tablet:justify-center hover:scale-[1.05] duration-300 ease transition-all">
                <p data-para-anim className=" leading-[1.2] font-light w-[25vw] text-[#2A2A2A] mobile:w-[80%] mobile:text-center mobile:whitespace-normal tablet:whitespace-normal 
                tablet:w-full">Blue informative lines</p>
              </div>
            </div>
            <div className="w-[50%] h-[50vw] absolute top-[20%] left-[40%] mobile:hidden tablet:hidden">
              <Image src="/assets/advamesh/half-circle-left.png" fill alt="half-circle" />
            </div>
        </div>
        <div className="w-[100vw] h-[100%] absolute top-0 right-0 z-[-1] mobile:h-[200vw] mobile:w-[300vw] mobile:top-[-7%] tablet:h-[100vw] tablet:w-[100vw]">
          <Image src="/assets/advamesh/mid-weight-bg.png"
            fill
            alt="mid-weight-bg" />
        </div>
      </section>
  )
}

export default MidWeight