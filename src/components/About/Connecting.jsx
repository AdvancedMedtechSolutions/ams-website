import React from 'react'
import PrimaryButton from "../Button/PrimaryButton"


const Connecting = () => {

  return (
    <section className='mobile:py-[10%]' id='connect'>
      <div className='container-lg my-[10%] fadeUp'>
        <div className='p-[3%]  border-[1px]  flex justify-between flex-col items-center rounded-[3.5vw] bg-white/50  relative tablet:rounded-[4vw] tablet:py-[8%] mobile:justify-center mobile:text-center mobile:px-[8%] mobile:py-[15%] mobile:rounded-[7vw]'>
          <div className='tablet:w-full tablet:flex tablet:justify-center mobile:w-[75vw]'>
            <h2 data-para-anim className="title-2 aeonik tablet:text-center ">
              Connecting for a Healthier Tomorrow.
            </h2>
          </div>
          <div className='mt-[2vw] mb-[5vw] content-p mobile:text-center mobile:w-[65vw] mobile:mt-[10vw] mobile:mb-[8vw]'>
            <p data-para-anim className='tablet:text-center'>
              Ready to shape the future of healthcare with us? Reach out today and let&apos;s collaborate to innovate together.
            </p>
          </div>
          <div className='fadeUp'>
            <PrimaryButton link="/career" text="Career"  className='!pl-[4.5vw] mobile:!pl-[12vw]'/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Connecting