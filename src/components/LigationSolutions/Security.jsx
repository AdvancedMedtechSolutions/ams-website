import React from 'react'
import Image from 'next/image'

const Security = () => {
  return ( 
    <section className="overflow-hidden relative mobile:py-[10%]" id="security">
         <div className="w-screen h-full container-lg  mobile:h-full tablet:h-[70%] ">
           <div className="w-full h-full flex flex-col items-center justify-center gap-[5vw] py-[5vw]">
             <div className="w-full h-full flex flex-col items-center justify-center mobile:flex mobile:justify-center z-[10]">
               <h2
                 data-para-anim
                 className="title-2 aeonik text-center uppercase mobile:text-center mobile:w-[80%] overflow-hidden"
               >
               Security redefined
               </h2>
             </div>
            
           </div>
         </div>
         <div className="absolute  top-0 left-0 z-[1] ">
               <Image
                 src="/assets/ligation/security-bg.png"
                width={1920}
                height={283}
                 alt="Security bg"
                 className="object-cover mobile:h-[25vh] tablet:h-[20vh]"
               />
             </div>
       </section>
  )
}

export default Security