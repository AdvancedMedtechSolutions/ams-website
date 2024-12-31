
import Image from 'next/image'

const Polypropylene = () => {
  return (
    <section
        className="overflow-hidden mobile:py-[15%] relative py-[3%] tablet:py-[10%] bg-white/50"
        id="polypropylene-mesh"
      >
        <div className="w-screen h-[65vw] container-lg z-[5] mobile:h-full tablet:h-full">
          <div className="w-full h-full flex flex-col items-center justify-center pb-[5vw] tablet:justify-start mobile:justify-start ">
            <div className="w-full h-full flex flex-col items-center justify-start mobile:mb-[10vw] mobile:flex mobile:justify-center mobile:h-fit tablet:h-fit tablet:flex tablet:justify-center">
             <h2
data-para-anim
                className=" w-[70%] text-[3.95vw] font-light leading-[1.25] aeonik text-center text-[#111111]  mobile:text-center mobile:w-full mobile:text-[11vw] tablet:text-[7vw]"
              >
                ADVAMESH Polypropylene
              </h2>
            </div>
            <div className=" h-full w-full absolute left-[10%] top-[20%]  mobile:h-full   pt-[10vw] mobile:pb-[10%] mobile:top-0  tablet:h-full tablet:pb-[5%] tablet:top-[15%]">
              <div className="h-[38vw] w-[50vw] relative mobile:w-[95vw] mobile:h-[100vw] mobile:left-[-10%] tablet:w-[80vw] tablet:h-[60vw] mobile:top-[15%] tablet:scale-[1.35] fadeUp">
                <Image
                  src="/assets/advamesh/polypropylene.png"
                  fill
                  alt="polypropylene"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
            <div className="text-[1.25vw] absolute top-[18%] left-[65%] h-[50vw] py-[5.4%] space-y-[17%] mobile:static mobile:space-y-0 mobile:flex mobile:flex-col mobile:gap-[8vw] mobile:justify-center mobile:mt-[40vh] mobile:w-full mobile:h-fit mobile:text-[6vw] tablet:static tablet:space-y-0 tablet:flex tablet:flex-col tablet:justify-center tablet:items-center tablet:mt-[40vh] tablet:w-full tablet:h-fit tablet:gap-[5vw] tablet:text-[4vw]">
              <div className="mobile:translate-y-0 mobile:ml-0 mobile:flex mobile:justify-center tablet:translate-y-0 tablet:ml-0 tablet:flex tablet:justify-center hover:scale-[1.05] duration-300 ease transition-all">
                <p data-para-anim className=" leading-[1.2] font-light w-[70%] text-[#2A2A2A]  mobile:w-[80%] mobile:text-center mobile:whitespace-normal tablet:whitespace-normal  ">Specially engineered for open ventral and inguinal hernia repairs</p>
              </div>
              <div className="translate-y-[-45%] ml-[18%] mobile:translate-y-0 mobile:ml-0 mobile:flex mobile:justify-center tablet:translate-y-0 tablet:ml-0 tablet:flex tablet:justify-center hover:scale-[1.05] duration-300 ease transition-all">
                <p data-para-anim className=" leading-[1.2] font-light w-[75%] text-[#2A2A2A] mobile:w-[80%] mobile:text-center mobile:whitespace-normal tablet:whitespace-normal  ">Distinct inter-locking structure allows fibroblastic tissue response</p>
              </div>
              <div className="translate-y-[-55%] ml-[22%] mobile:translate-y-0 mobile:ml-0 mobile:flex mobile:justify-center tablet:translate-y-0 tablet:ml-0 tablet:flex tablet:justify-center hover:scale-[1.05] duration-300 ease transition-all">
                <p data-para-anim className=" leading-[1.2] font-light w-[85%]  text-[#2A2A2A] mobile:w-[80%] mobile:text-center mobile:whitespace-normal tablet:whitespace-normal">Ease of customization for confident clinical outcomes</p>
              </div>
              <div className="translate-y-[-95%] ml-[22%] mobile:translate-y-0 mobile:ml-0 mobile:flex mobile:justify-center tablet:translate-y-0 tablet:ml-0 tablet:flex tablet:justify-center hover:scale-[1.05] duration-300 ease transition-all">
                <p data-para-anim className=" leading-[1.2] font-light w-[90%] text-[#2A2A2A] mobile:w-[80%] mobile:text-center mobile:whitespace-normal tablet:whitespace-normal">
                Smooth rounded corners with unique knit structure prevents unraveling
                </p>
              </div>
              <div className="translate-y-[-190%] ml-[16%] mobile:translate-y-0 mobile:ml-0 mobile:flex mobile:justify-center tablet:translate-y-0 tablet:ml-0 tablet:flex tablet:justify-center hover:scale-[1.05] duration-300 ease transition-all">
                <p data-para-anim className=" leading-[1.2] font-light w-full text-[#2A2A2A] mobile:w-[80%] mobile:text-center mobile:whitespace-normal tablet:whitespace-normal">Trim to size without fraying</p>
              </div>
              <div className="translate-y-[-180%] mobile:translate-y-0 mobile:ml-0 mobile:flex mobile:justify-center tablet:translate-y-0 tablet:ml-0 tablet:flex tablet:justify-center hover:scale-[1.05] duration-300 ease transition-all">
                <p data-para-anim className=" leading-[1.2] whitespace-nowrap font-light w-full text-[#2A2A2A] mobile:w-[80%] mobile:text-center mobile:whitespace-normal tablet:whitespace-normal">Extensibility across X-axis and Y-axis</p>
              </div>
            </div>
            <div className="w-[50%] h-[50vw] absolute top-[20%] right-[30%] mobile:hidden tablet:hidden">
              <Image src="/assets/advamesh/half-circle.png" fill alt="half-circle" />
            </div>
        </div>
        <div className="w-[100vw] h-[100%] absolute top-0 left-0 z-[-1] mobile:h-[150vw] mobile:w-[300vw] mobile:top-[5%] tablet:h-[100vw] tablet:w-[100vw]">
          <Image src="/assets/advamesh/macroporous-bg.png"
            fill
            alt="macroporous-bg" />
        </div>
      </section>
  )
}

export default Polypropylene