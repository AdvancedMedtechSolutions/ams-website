import React from 'react'
import PrimaryButton from '../Button/PrimaryButton'
import Image from 'next/image'

const Sirolimus = () => {
  return (
    <>
      <section id='SiroLimus' className=' w-screen h-screen relative py-[8%] bg-white/50 overflow-hidden mobile:h-full mobile:py-[20%] tablet:h-full'>
        <div className='container-lg'>
          <div className='w-[45vw] h-[30vw] rounded-[3vw] p-[4vw] py-[6vw] flex flex-col glassmorphism-light justify-between border border-gray-400/60 fadeUp mobile:w-[90vw] mobile:h-[160vw] overflow-hidden mobile:justify-end mobile:items-center mobile:pb-[20vw] fadeUp tablet:w-[90vw] tablet:h-[45vw] tablet:justify-start tablet:gap-[7vw]'>
            <div className='w-full mobile:flex mobile:flex-col mobile:items-center'>

              <h3 data-para-anim className='text-[4vw] leading-[1.2] aeonik font-light mobile:text-[11vw] mobile:text-center mobile:mb-[3vw] tablet:text-[6vw]'>ADVA PRO</h3>
              <p className='text-[1.6vw] capitalize font-extralight mb-[1.5vw] mobile:text-[5vw] mobile:text-center mobile:mb-[15vw] mobile:w-[80%] tablet:text-[2.5vw]'>sirolimus drug eluting Stent system</p>
            </div>
            <PrimaryButton text={"See More"} link={"/interventional-cardiology/adva-pro-coronary-sirolimus-stent"} className={'!border-gray-200 '} />
          </div>
        </div>
        <div className=' absolute w-[45vw] h-full right-0 scale-[1.1] top-[-14%] mobile:w-[90vw] mobile:top-[-21%] mobile:left-[5%] tablet:top-[-3%] tablet:right-[7%]'>
          <Image src={"/assets/advaglide/advaglide-visit.png"} alt='advaglide-visit-bg' fill className='object-contain w-full h-full' />
        </div>
      </section>
    </>
  )
}

export default Sirolimus
