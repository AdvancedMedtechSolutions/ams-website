import React from 'react'
import Image from 'next/image'

const UniqueCard = ({ src, title, para }) => {
  return (
    <>
      <div className='rounded-[2.5vw] glassmorphism-light border border-[#DADADA] flex flex-col  items-start justify-end pt-[1vw] pb-[3vw] px-[3vw] w-[27vw] h-[18vw] mobile:w-[80vw] mobile:h-[95vw] mobile:rounded-[7vw]   hover:bg-white hover:shadow-xl hover:drop-shadow-xl duration-300 transition-all ease mobile:pb-[10vw] mobile:px-[6vw] tablet:w-[43vw] tablet:h-[50vw] tablet:px-[3vw] tablet:pb-[7vw] '>
        <div className='w-[7vw] h-[7vw] absolute top-[8%] right-[8%] mobile:left-[30%] mobile:h-[28vw] mobile:w-[28vw]  mobile:top-[10%] tablet:w-[15vw] tablet:h-[15vw]'>
          <Image src={src} height={80} width={80} alt='unique card' className='object-contain w-full h-full' />
        </div>
        <div className='flex flex-col w-full h-full justify-end items-start mobile:items-center'>
          <p data-para-anim className='text-[1.67vw] leading-[1.2] font-normal w-[50%] py-[1vw] mobile:text-[8vw] mobile:w-[95%] mobile:text-center mobile:leading-[1] tablet:text-[4vw] tablet:w-[80%]'>{title}</p>
          <p data-para-anim className='text-[1.67vw] leading-[1.2] font-light text-justify mobile:text-[5.5vw] mobile:leading-[1.2]  mobile:text-center mobile:mt-[7vw] tablet:text-[2.5vw]'>{para}</p>
        </div>
      </div>
    </>
  )
}

const Unique = () => {

  return (
    <section id="unique" className='w-screen overflow-hidden relative  py-[7%] tablet:py-[10%] mobile:pb-[20%]'>
      <div className="w-screen h-full container-lg">
        <div className="w-full h-full flex flex-col items-center justify-center relative">
          <div className="w-full h-full flex flex-col items-center justify-center mobile:mb-[10vw] mobile:flex mobile:justify-center mobile:w-[90%]">
            <h2
              data-para-anim
              className="title-2 aeonik text-center mobile:text-center"
            >
              Unique Design, Universal Benefits
            </h2>
          </div>
          <div className='mobile:w-screen  mobile:overflow-scroll mobile:px-[5%]'>
            <div className="w-full h-full mt-[5vw] flex items-center justify-between gap-[4vw] mobile:w-[230vw] mobile:gap-[5vw] mobile:pb-[5vw] tablet:flex-wrap tablet:justify-center tablet:mt-[10vw] fadeUp">
              <UniqueCard src={"/assets/reloads/unique-card1.png"} title={"Less Stress:"} para={"Graduated compression for reduced tissue trauma"} />
              <UniqueCard src={"/assets/reloads/unique-card2.png"} title={"Superior Performance:"} para={"Reliable results across all tissue types"} />
              <UniqueCard src={"/assets/reloads/unique-card3.png"} title={"Greater Perfusion:"} para={"Enhanced staple line integration."} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-[100%] w-[100vw] z-[-1] top-0 left-0">
        <Image
          src="/assets/poweredlc/surgical-bg.png"
          fill
          alt="surgical bg"
          className="object-cover"
        />
      </div>
    </section>
  )
}

export default Unique