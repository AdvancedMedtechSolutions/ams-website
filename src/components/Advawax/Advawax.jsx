import Image from "next/image";

const Advawax = () => {
  return (
    <>
      <section className="hero tablet:mb-0 tablet:pr-[3%] w-screen overflow-hidden  shadow-md drop-shdow-md mobile:bg-white/30 mobile:pt-[10%]" id="advawax">
        <div className="px-[10%] relative hero-container tablet:px-[5%] mobile:px-[8%]">
          <div className="flex h-dvh w-full justify-start items-center mobile:h-[90vh] mobile:flex-col mobile:justify-start mobile:text-center mobile:gap-[2vw] tablet:h-[60vh]">
            <div className="gap-[4vw] mobile:w-full mobile:h-fit mobile:flex mobile:flex-col mobile:gap-0">
              <div className="mobile:w-full mobile:h-full mobile:flex  mobile:flex-col mobile:gap-[2vw] mobile:items-center">
                <h2 className="title-1 aeonik  leading-[1] overflow-hidden">
                  <span data-para-anim
                    className={`leading-[1.2] overflow-hidden uppercase text-[5.75vw] mobile:text-[13.2vw] text-[#CBA82A] tablet:text-[9vw]`}
                  >
                    ADVAWAX
                  </span> 
                </h2>
                <p data-para-anim className="uppercase  text-[1.25vw] leading-[1.25] tracking-wide mobile:text-[5vw] mobile:leading-[1.2] mobile:w-[80%] mobile:text-center mobile:py-[5%] mobile:tracking-normal tablet:text-[2.5vw] tablet:w-[60%] tablet:tracking-normal tablet:py-[3%]">
                Natural Wax and Isopropyl Myristate
                </p>
              </div>
              <div className="flex items-center justify-start ml-[-2vw] mobile:justify-center mobile:text-center mobile:ml-0 ">
                <span className="w-[4.5vw] h-[2px] bg-black rotate-90 mobile:hidden tablet:w-[1.5px] tablet:rotate-0 tablet:h-[15vw] fadeUp"></span>
                <p className="max-w-[25vw] ml-[-1vw] mt-[4vw] mb-[4vw] text-[1.65vw] leading-[1.1] font-light mobile:text-[4.8vw] mobile:max-w-full mobile:leading-[1.2] tablet:text-[2.5vw] tablet:max-w-[60%] tablet:leading-[1.2] tablet:ml-[2vw]">
                  <span data-para-anim>Ultimate confidence for control of
                  bleeding from bone surfaces</span>
                </p>
              </div>
            </div>
            <div className="absolute right-0 top-[20%] flex flex-col items-center justify-end  mobile:flex-col-reverse mobile:right-0 mobile:top-[23%] tablet:top-[30%]">
              <div className="w-[55vw] h-[40vw] absolute bottom-[10%] mobile:w-[100vw] mobile:h-[80vw] mobile:right-[10%] mobile:bottom-0 tablet:w-[65vw] tablet:h-[60vw] z-0 fadeUp">
                <Image
                  className="object-cover"
                  src="/assets/advapacer/advawax-bg.png"
                  alt="Background Image"
                  fill
                />
              </div>

              <div className="w-[48vw] h-[40vw] relative bottom-[10%]  mobile:bottom-0 mobile:w-[100vw] mobile:h-[80vw] mobile:left-0  tablet:w-[55vw] tablet:h-[60vw] z-10 fadeUp ">
                <Image
                  className="object-contain "
                  src="/assets/advapacer/advawax-hero.png"
                  alt="Hero Image"
                  priority={true}
                  fill
                />
              </div>

              <div className={`mobile:mt-[15vw] mt-[-3vw]`}>
                <p data-para-anim className="max-w-[30vw] mt-[-3vw] text-[1.65vw] leading-[1.2] font-light mobile:text-[5vw] mobile:max-w-[75vw] mobile:py-[10%] mobile:mb-[20%] tablet:text-[2.5vw] tablet:max-w-[30vw] tablet:mt-[-10vw] tablet:text-left">
                Non-Absorbable Bone Wax
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Advawax;
