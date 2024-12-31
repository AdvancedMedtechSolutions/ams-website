import React from 'react'

const Information = ({info}) => {
  return (
   <section id='info' className='w-screen h-full overflow-hidden py-[5%] mobile:py-[15%]'>
    <div className='container-lg w-[90%] h-full p-[5vw]  rounded-[2.5vw] bg-white/50 mobile:rounded-[12vw] mobile:py-[15vw]'>
    <p data-para-anim className=' text-[1.65vw] font-light leading-[1.5] tracking-wide text-center mobile:text-[4.5vw] mobile:leading-[1.6] tablet:text-[2.5vw]'>
  {info}
        </p> 

    </div>

   </section>
  )
}

export default Information