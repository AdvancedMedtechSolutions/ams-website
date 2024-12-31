import Image from 'next/image'
import React from 'react'

const Unique = () => {
  return (
   <> 
   <section id='unique' className='py-[8vw] mobile:pt-0 overflow-hidden'>
   <div className='h-full w-screen tablet:h-full mobile:h-full '>
          <div className='h-full w-full flex flex-col   items-center justify-center gap-[7vw] tablet:py-[5vw] tablet:h-[60%] mobile:h-full mobile:py-[10%]'>
            <div className='mobile:w-[90%] tablet:w-[70%]'>
              <h2
data-para-anim className='title-2 aeonik mobile:text-center tablet:text-center capitalize'>Unique tip first closing behavior</h2>
            </div>
            <div className='flex flex-col items-center justify-evenly px-[5vw] gap-[3vw] w-full  mobile:flex-col tablet:flex-wrap tablet:justify-center tablet:items-start mobile:gap-[20vw] mobile:mt-[15vw]'>
                <div className='mobile:scale-[2.5] tablet:scale-[1.5]'>
                    <Image src="/assets/ligation/unique-tip.png" alt='unique-tip' width={1728} height={269} className='fadeUp tablet:object-[-15vw]'/>
                </div>
                <div className='mt-[2vw] '>
                    <p data-para-anim className='text-[#2A2A2A] font-light text-[1.65vw] mobile:text-[5.6vw] mobile:text-center tablet:text-center tablet:text-[4vw]'>Distinguished chevron shape for safe and precise positioning</p>
                </div>
            </div>
          </div>
        </div>
   </section>
   </>
  )
}

export default Unique