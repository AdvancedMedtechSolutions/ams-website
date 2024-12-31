import React from 'react'
import PrimaryButton from '../Button/PrimaryButton'
import Image from 'next/image'

const Discover = () => {

  return (
    <section id='discover' className='tablet:py-[10%] pb-[10%] mobile:pb-[20%]'>
      <div className='px-[5%] border border-gray-200 bg-white/50 mobile:py-[15%] rounded-[3vw] mobile:rounded-[6vw] py-[7vw] tablet:px-0 mobile:px-0'>
        <div className='flex justify-between mobile:flex-col container-lg pl-[5%] tablet:pl-0 mobile:pl-0'>
          <div className='w-[50%] flex flex-col items-start justify-center gap-[4vw] mobile:order-1 mobile:w-full mobile:items-center mobile:text-center mobile:gap-[12vw] mobile:mt-[12vw] tablet:w-[47%]'>
            <h2 className="title-2 aeonik">
              <span data-para-anim  >Discover the profound impact our work is having on patients everywhere.</span>
            </h2>
            <PrimaryButton link='/contact-us' text="Let's Meet" className={"!border-gray-200"} />
          </div>
          <div className='w-[45%] flex flex-col items-end justify-center gap-[2vw] mobile:w-full mobile:items-center mobile:gap-[5vw]'>
            <div className='w-[25vw] h-[20vw] rounded-[40px] overflow-hidden relative fadeUp mobile:w-[80vw] mobile:h-[70vw] mobile:rounded-[6vw] tablet:rounded-[3vw] tablet:w-[30vw] tablet:h-[25vw]'>
              <Image
                src="/assets/career/career-discover-1.png"
                fill
                alt="Discover"
                className=' object-cover' />
            </div>
            <div className='w-[35vw] h-[25vw] rounded-[40px] overflow-hidden relative fadeUp mobile:w-[80vw] mobile:h-[70vw] mobile:rounded-[6vw] tablet:rounded-[3vw] tablet:w-[38vw] tablet:h-[28vw]'>
              <Image
                src="/assets/career/career-discover-2.png"
                fill
                alt="Discover"
                className='object-cover'
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Discover

