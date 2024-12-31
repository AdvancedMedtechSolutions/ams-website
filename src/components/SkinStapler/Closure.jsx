import React from 'react'
import Image from 'next/image'

const Closure = () => {
  return (
    <section className="overflow-hidden relative mobile:py-[10%]" id="think">
      <div className="w-screen h-full container-lg  mobile:h-full tablet:h-[70%] ">
        <div className="w-full h-full flex flex-col items-center justify-center gap-[5vw] py-[5vw]">
          <div className="w-full h-full flex flex-col items-center justify-center mobile:flex mobile:justify-center">
            <h2
              data-para-anim
              className="title-2 aeonik text-center capitalize mobile:text-center mobile:w-[80%]"
            >
             Closure than you think
            </h2>
          </div>
         
        </div>
      </div>
      <div className="absolute h-[100%] w-[100vw] top-0 left-0 z-[-1]">
            <Image
              src="/assets/skinstapler/closure-bg.png"
              fill
              alt="Precision bg"
              className="object-cover"
            />
          </div>
    </section>
  )
}

export default Closure