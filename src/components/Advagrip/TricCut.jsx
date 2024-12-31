import Image from 'next/image'
import React from 'react'



const TricCut = () => {
  
  return (
    <section id='tricut' className='w-screen h-[58vw] overflow-hidden pt-[7%] mb-[3%] pb-[5%] mobile:py-[15%] relative bg-white/20 mobile:h-[125vh] tablet:py-[10%] tablet:h-[60vh]'>
      <div className='container-lg flex items-center flex-col gap-[4vw] mobile:gap-[18vw]'>
        <h2
data-para-anim className='title-2 aeonik mobile:text-center'>Tri-Cut Technology</h2>
        <div className='w-full flex h-full items-center justify-start pl-[10vw] gap-[8vw] mobile:pl-0 mobile:flex-col mobile:gap-[15vw] tablet:mt-[5vw] tablet:pl-[5vw]'>
          <div className='w-fit h-fit rounded-full'>
            <div className='w-[20vw] h-[20vw] rounded-full overflow-hidden relative mobile:w-[70vw] mobile:h-[70vw] tablet:w-[30vw] tablet:h-[30vw] fadeUp'>
              <Image src={"/assets/advagrip/Tricut-Circle.png"} alt='tricut-circle' fill />
            </div>
          </div>
          <div className='w-[45%] h-fit px-[2vw] py-[2.5vw] glassmorphism border rounded-[2.5vw] mobile:w-[95%] mobile:px-[5vw] mobile:py-[7vw] mobile:rounded-[7vw] tablet:w-[70%] fadeUp'>
            <p data-para-anim className='text-[1.8vw] w-full font-light mobile:text-[4.8vw] mobile:text-center tablet:text-[2.5vw]'>Produces barbs that delivers a robust anchoring force whilst maintaining the integrity of the strand’s strength.</p>
          </div>
        </div>
      </div>
      <div className='absolute bottom-[2%] w-[100vw] h-[50vw] mobile:h-[100vw] mobile:z-[-1] mobile:w-[180vw] mobile:bottom-[20%] mobile:left-[-50%]'>
        <Image src={"/assets/advagrip/Tricut-bg.png"} alt='tricut-bg' fill className='mobile:rotate-[-40deg] mobile:object-contain mobile:w-full mobile:h-full' />
      </div>

    </section>
  )
}

export default TricCut
