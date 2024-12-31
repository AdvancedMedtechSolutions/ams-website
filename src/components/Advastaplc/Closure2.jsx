import React from 'react'
import Image from 'next/image'

const Closure2 = () => {
  return (
    <section className="overflow-hidden relative mobile:py-[5%]" id="think">
      <div className="w-screen h-full container-lg  mobile:h-full tablet:h-[70%] ">
        <div className="w-full h-full flex flex-col items-center justify-center gap-[5vw] py-[5vw]">
          <div className="w-full h-full flex flex-col items-center justify-center mobile:flex mobile:justify-center">
            <h2 className="advastap-text text-white text-[2.8vw] aeonik  leading-[1.2] hero-text mobile:text-center tablet:text-center">
                  <span 
                    className={`leading-[1.2] overflow-hidden uppercase text-[2.5vw] mobile:text-[8.2vw] tablet:text-[6vw] `}
                  >
                Secure hemostasis for unwavering confidence
                  </span>
                </h2>
          </div>
         
        </div>
      </div>
      <div className="absolute h-[100%] w-[100vw] top-0 right-0 z-[-1]">
            <Image
              src="/assets/advastaplc/closure-bg-1.png"
              fill
              alt="Precision bg"
              className="object-cover"
            />
          </div>
          <div className="absolute h-[100%] w-[100vw] bottom-0 left-0 z-[-1]">
            <Image
              src="/assets/advastaplc/closure-bg-2.png"
              fill
              alt="Precision bg"
              className="object-cover"
            />
          </div>
    </section>
  )
}

export default Closure2