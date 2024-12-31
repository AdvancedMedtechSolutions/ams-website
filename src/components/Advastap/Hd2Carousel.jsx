import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { Scrollbar } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css/navigation';

const Hd2Carousel = () => {

        const swiperRef = useRef(null); 

      
        const handleNext = () => {
          if (swiperRef.current) {
            swiperRef.current.slideNext();
          }
        };
      
        const handlePrev = () => {
          if (swiperRef.current) {
            swiperRef.current.slidePrev(); 
          }
        };
     
  return (
    <>
    <section id='skinstapler-carousel' className='overflow-hidden tablet:h-[70vh] pb-[5%] mobile:h-[170vw] bg-[#020912]'>  
        <div className={`w-screen h-full  py-[5vw]  items-center flex justify-center swiper-container cursor-grab relative mobile:items-start`}>
        <Swiper
         onSwiper={(swiper) => (swiperRef.current = swiper)}
        scrollbar={true}
        loop={true}
        centeredSlides={true}
        modules={[Scrollbar]}
        breakpoints={{       
            541: {
              slidesPerView: 1,
              spaceBetween:30,
            },
            640:{
                slidesPerView:2,
                spaceBetween:30
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
          }}
        className={`w-screen flex items-center justify-center specificationSwiper tablet:h-[60vh] mobile:h-[130vw] advastap-carousel hd2Carousel`}
      >
        <SwiperSlide>
        <div className="py-[2vw] flex justify-center fadeUp">
            <div className='w-full h-full flex flex-col justify-center gap-[2vw]  mobile:w-[85vw] mobile:h-[150vw] mobile:justify-center mobile:gap-0 tablet:h-[50vh]'>
                <p className=' h-[5vw] leading-[1.2] text-[2.5vw] font-light ml-[1.5vw] mobile:text-[8vw] mobile:text-center tablet:text-[3vw] mobile:h-[25vw] tablet:h-[8vw] text-[#FFFFFF]'><span >High Staple Count Per Firing</span></p>
                <div className=' h-[31vw] w-[48vw] pb-[2vw] flex flex-col gap-[4vw] overflow-hidden relative mobile:h-[100vw] mobile:w-[85vw] tablet:h-[50vh] mobile:rounded-[9vw]'>
                    <div className='w-full h-full absolute mobile:h-[55vw] mobile:w-[85vw]'>
                        <Image
                        src="/assets/advastap/advastap-hd3-carousel-card1.png"
                        fill
                        alt='specification 1'
                        className='object-cover mobile:object-contain rounded-[3vw] tablet:rounded-[5vw] mobile:rounded-[9vw] '
                        />
                    </div> 
                    <p className='text-[1.25vw] leading-[1.3] text-[#FFFFFF] absolute bottom-[15%] left-[10%] font-light aeonik   mobile:text-[5.5vw] mobile:w-[90%] mobile:top-auto mobile:bottom-[10%] mobile:font-light mobile:left-[5%] mobile:text-center  mobile:z-50 tablet:text-[2.5vw] tablet:top-[85%] tablet:font-light tablet:w-[40vw]'><span >Extensive closure with effective coverage</span></p>
                   
                </div>
               
            </div>
        </div>
            </SwiperSlide>
            <SwiperSlide>
        <div className="py-[2vw] flex justify-center fadeUp">
            <div className='w-full h-full flex flex-col justify-center gap-[2vw]  mobile:w-[85vw] mobile:h-[150vw] mobile:justify-center mobile:gap-0 tablet:h-[50vh]'>
                <p className='h-[5vw] leading-[1.2] text-[2.5vw] font-light ml-[1.5vw] mobile:text-[8vw] mobile:text-center tablet:text-[3vw] mobile:h-[25vw] tablet:h-[8vw] text-[#FFFFFF]'><span >Four Housing Conduids</span></p>
                <div className='  h-[31vw] w-[48vw] pb-[2vw] flex flex-col gap-[4vw] overflow-hidden relative mobile:h-[100vw] mobile:w-[85vw] mobile:rounded-[9vw] tablet:h-[50vh] '>
                    <div className='w-full h-full absolute mobile:h-[55vw] mobile:w-[85vw]'>
                        <Image
                        src="/assets/advastap/advastap-hd3-carousel-card2.png"
                       fill
                        alt='specification 1'
                        className='object-cover mobile:object-contain  rounded-[3vw] tablet:rounded-[5vw] mobile:rounded-[9vw]'
                        />
                    </div>
                    <p className=' text-[1.25vw] text-[#FFFFFF] absolute bottom-[15%] left-[20%] aeonik  leading-[1.3]  font-light mobile:text-[5.5vw] mobile:w-[90%] mobile:font-light mobile:top-auto mobile:bottom-[10%] mobile:left-[5%]  mobile:z-50 mobile:text-center  tablet:text-[2.5vw] tablet:bottom-[5%] tablet:w-[40vw] tablet:font-light'><span >Designed for secure purse-string suture placement.</span></p>
                </div>
               
            </div>
        </div>
            </SwiperSlide>
            <SwiperSlide>
        <div className="py-[2vw] flex justify-center fadeUp">
            <div className='w-full h-full flex flex-col justify-center gap-[2vw]  mobile:w-[85vw] mobile:h-[150vw] mobile:justify-center mobile:gap-0 tablet:h-[50vh]'>
                <p className=' h-[5vw] text-[2.5vw] font-light ml-[1.5vw] leading-[1.2] mobile:text-[8vw] mobile:text-center tablet:text-[3vw] mobile:h-[25vw] tablet:h-[8vw] text-[#FFFFFF]'><span >Uniform Perfusion Across the Staple Lines</span></p>
                <div className=' h-[31vw] w-[48vw] pb-[2vw] flex flex-col gap-[4vw] overflow-hidden relative mobile:h-[100vw] mobile:w-[85vw]  tablet:h-[50vh] '>
                    <div className='w-full h-full absolute mobile:h-[55vw] mobile:w-[85vw]'>
                        <Image
                        src="/assets/advastap/advastap-hd3-carousel-card3.png"
                       
                        fill
                        alt='specification 1'
                        className='object-cover mobile:object-contain rounded-[3vw] mobile:rounded-[9vw] tablet:rounded-[5vw]'
                        />
                    </div>
                    <p className=' text-[#FFFFFF] text-[1.25vw] absolute bottom-[15%] left-[15%] aeonik  leading-[1.3] font-light mobile:text-[5.5vw] mobile:font-light mobile:w-[90%] mobile:bottom-[10%] mobile:top-auto mobile:left-[5%] mobile:z-50 mobile:text-center  tablet:text-[2.5vw] tablet:bottom-[10%] tablet:left-[7%] tablet:font-light tablet:w-[40vw]' ><span >Faster Recovery & better postoperative results</span></p>
                  
                </div>
               
            </div>
        </div>
            </SwiperSlide>
            <SwiperSlide>
        <div className="py-[2vw] flex justify-center fadeUp">
            <div className='w-full h-full flex flex-col justify-center gap-[2vw]  mobile:w-[85vw] mobile:h-[150vw] mobile:justify-center mobile:gap-0 tablet:h-[50vh]'>
                <p className=' h-[5vw] leading-[1.2] text-[2.5vw] font-light ml-[1.5vw] mobile:text-[8vw] mobile:text-center tablet:text-[3vw] mobile:h-[25vw] tablet:h-[8vw] text-[#FFFFFF]'><span >High Staple Count Per Firing</span></p>
                <div className=' h-[31vw] w-[48vw] pb-[2vw] flex flex-col gap-[4vw] overflow-hidden relative mobile:h-[100vw] mobile:w-[85vw] tablet:h-[50vh] mobile:rounded-[9vw]'>
                    <div className='w-full h-full absolute mobile:h-[55vw] mobile:w-[85vw]'>
                        <Image
                        src="/assets/advastap/advastap-hd3-carousel-card1.png"
                        fill
                        alt='specification 1'
                        className='object-cover mobile:object-contain rounded-[3vw] tablet:rounded-[5vw] mobile:rounded-[9vw] '
                        />
                    </div> 
                    <p className='text-[1.25vw] leading-[1.3] text-[#FFFFFF] absolute bottom-[15%] left-[10%] font-light aeonik   mobile:text-[5.5vw] mobile:w-[90%] mobile:top-auto mobile:bottom-[10%] mobile:font-light mobile:left-[5%] mobile:text-center  mobile:z-50 tablet:text-[2.5vw] tablet:top-[85%] tablet:font-light tablet:w-[40vw]'><span >Extensive closure with effective coverage</span></p>
                   
                </div>
               
            </div>
        </div>
            </SwiperSlide>
            <SwiperSlide>
        <div className="py-[2vw] flex justify-center fadeUp">
            <div className='w-full h-full flex flex-col justify-center gap-[2vw]  mobile:w-[85vw] mobile:h-[150vw] mobile:justify-center mobile:gap-0 tablet:h-[50vh]'>
                <p className='h-[5vw] leading-[1.2] text-[2.5vw] font-light ml-[1.5vw] mobile:text-[8vw] mobile:text-center tablet:text-[3vw] mobile:h-[25vw] tablet:h-[8vw] text-[#FFFFFF]'><span >Four Housing Conduids</span></p>
                <div className='  h-[31vw] w-[48vw] pb-[2vw] flex flex-col gap-[4vw] overflow-hidden relative mobile:h-[100vw] mobile:w-[85vw] mobile:rounded-[9vw] tablet:h-[50vh] '>
                    <div className='w-full h-full absolute mobile:h-[55vw] mobile:w-[85vw]'>
                        <Image
                        src="/assets/advastap/advastap-hd3-carousel-card2.png"
                       fill
                        alt='specification 1'
                        className='object-cover mobile:object-contain  rounded-[3vw] tablet:rounded-[5vw] mobile:rounded-[9vw]'
                        />
                    </div>
                    <p className=' text-[1.25vw] text-[#FFFFFF] absolute bottom-[15%] left-[20%] aeonik  leading-[1.3]  font-light mobile:text-[5.5vw] mobile:w-[90%] mobile:font-light mobile:top-auto mobile:bottom-[10%] mobile:left-[5%]  mobile:z-50 mobile:text-center  tablet:text-[2.5vw] tablet:bottom-[5%] tablet:w-[40vw] tablet:font-light'><span >Designed for secure purse-string suture placement.</span></p>
                </div>
               
            </div>
        </div>
            </SwiperSlide>
            <SwiperSlide>
        <div className="py-[2vw] flex justify-center fadeUp">
            <div className='w-full h-full flex flex-col justify-center gap-[2vw]  mobile:w-[85vw] mobile:h-[150vw] mobile:justify-center mobile:gap-0 tablet:h-[50vh]'>
                <p className=' h-[5vw] text-[2.5vw] font-light ml-[1.5vw] leading-[1.2] mobile:text-[8vw] mobile:text-center tablet:text-[3vw] mobile:h-[25vw] tablet:h-[8vw] text-[#FFFFFF]'><span >Uniform Perfusion Across the Staple Lines</span></p>
                <div className=' h-[31vw] w-[48vw] pb-[2vw] flex flex-col gap-[4vw] overflow-hidden relative mobile:h-[100vw] mobile:w-[85vw]  tablet:h-[50vh] '>
                    <div className='w-full h-full absolute mobile:h-[55vw] mobile:w-[85vw]'>
                        <Image
                        src="/assets/advastap/advastap-hd3-carousel-card3.png"
                       
                        fill
                        alt='specification 1'
                        className='object-cover mobile:object-contain rounded-[3vw] mobile:rounded-[9vw] tablet:rounded-[5vw]'
                        />
                    </div>
                    <p className=' text-[#FFFFFF] text-[1.25vw] absolute bottom-[15%] left-[15%] aeonik  leading-[1.3] font-light mobile:text-[5.5vw] mobile:font-light mobile:w-[90%] mobile:bottom-[10%] mobile:top-auto mobile:left-[5%] mobile:z-50 mobile:text-center  tablet:text-[2.5vw] tablet:bottom-[10%] tablet:left-[7%] tablet:font-light tablet:w-[40vw]' ><span >Faster Recovery & better postoperative results</span></p>
                  
                </div>
               
            </div>
        </div>
            </SwiperSlide>
          
       
      
      </Swiper>
      
       <div
                      className={`px-[1.2vw] py-[1.2vw] absolute z-[5] bottom-[7%] right-0 mobile:bottom-[6%] mobile:top-auto mobile:right-auto mobile:left-[62%] translate-x-[-65%]  tablet:top-[93%] tablet:right-[35%] tablet:bottom-auto tablet:translate-y-[-70%] overflow-hidden mobile:p-[5vw] tablet:p-[2vw] rounded-full next-button border-[#222222] border cursor-pointer  mobile:block group hover:text-white bg-white/50`}
                      onClick={handleNext} 
                    >
                      <span
                        className={`bg-[#222222] w-[100%] h-[100%] z-[1] absolute top-0 left-0 origin-center scale-0 rounded-full group-hover:scale-100 duration-300`}
                      />
                      <div className="w-[1.2vw] h-[1.2vw] relative z-[6] mobile:w-[4.5vw] mobile:h-[4.5vw] tablet:w-[2.5vw] tablet:h-[2.5vw]">
                        <Image
                          src="/assets/home/arrow-right.png"
                          alt="arrow-right"
                          className={`object-cover group-hover:invert duration-300`}
                          fill
                        />
                      </div>
                    </div>
                    <div
                      className={`px-[1.2vw] py-[1.2vw] bottom-[7%] right-[6%] absolute z-[5] mobile:bottom-[6%] mobile:top-auto mobile:left-[37%] mobile:right-auto  translate-x-[-38%]  tablet:top-[93%] tablet:right-[48%] tablet:bottom-auto tablet:translate-y-[-70%] bg-white/50 overflow-hidden  mobile:p-[5vw] tablet:p-[2vw] rounded-full prev-button cursor-pointer  mobile:block group hover:text-white border-[#222222] border`}
                      onClick={handlePrev} 
                    >
                      <span
                        className={`bg-[#222222] w-[100%] h-[100%] z-[1] absolute top-0 left-0 origin-center scale-0 rounded-full group-hover:scale-100 duration-300`}
                      />
                      <div className="w-[1.2vw] h-[1.2vw] relative z-[6] mobile:w-[4.5vw] mobile:h-[4.5vw] tablet:w-[2.5vw] tablet:h-[2.5vw] rotate-180">
                        <Image
                          src="/assets/home/arrow-left.png"
                          alt="arrow-left"
                          className={`object-cover group-hover:invert duration-300 rotate-180`}
                          fill
                        />
                      </div>
                    </div>
        </div>
    </section>
    </>
  )
}

export default Hd2Carousel;