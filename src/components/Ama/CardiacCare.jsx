import Image from 'next/image'

const CardiacCare = () => {
    return (
        <section className='pt-[12%] tablet:pt-[15%] mobile:pt-[10%]'>
            <div className='container-lg h-full tablet:flex tablet:flex-col justify-between gap-[5vw] mobile:text-center mobile:flex mobile:flex-col mobile:gap-12'>
                <div className='w-full h-full justify-between flex mobile:flex-col-reverse mobile:gap-6'>
                    <div className='w-[45%] flex flex-col gap-[2vw] tablet:w-1/2 mobile:w-full mobile:gap-4'>
                        <h3 data-para-anim className='aeonik text-[3vw] leading-[1.25] font-light  tablet:text-[4vw] mobile:text-[7.5vw]'>How do we empower those who dedicate their lives to healing others?</h3>
                        <p className='content-p text-justify fadeUp mobile:text-center'>At AMA, we equip healthcare professionals with the tools, knowledge, and confidence to navigate complex clinical challenges. Together, we are creating safer surgical settings, enhancing patient care, and building a future where excellence in healthcare knows no bounds.</p>
                    </div>
                    <div className='w-[45%] relative h-[35vw] rounded-[3vw] overflow-hidden fadeUp tablet:h-full mobile:w-full mobile:h-[70vw]'>
                        <Image src={"/assets/ama/ama-3-2.png"} alt='ama-3-1' width={800} height={700} className='w-full h-full object-cover' />
                    </div>
                </div>
                <div className='w-full h-full flex justify-between flex-row-reverse mobile:flex-col-reverse mobile:gap-6'>
                    <div className='w-[45%] flex flex-col gap-[2vw] mt-[3.5vw] tablet:mt-0 tablet:w-1/2 mobile:w-full mobile:mt-0 mobile:gap-4'>
                        <h3 data-para-anim className='aeonik text-[3vw] leading-[1.25] font-light  tablet:text-[4vw] mobile:text-[7.5vw]'>How do we put patients first in every aspect of care?</h3>
                        <p className='content-p text-justify fadeUp mobile:text-center'>Our ethos—&quot;What can I do to improve patient care?&quot;—guides every initiative. With a global network of renowned faculty, AMA provides not just learning but lifelong mentorship, supported by expert advice from the industry&apos;s most distinguished professionals.</p>
                    </div>
                    <div className='w-[45%] relative h-[35vw] rounded-[3vw] overflow-hidden fadeUp mt-[-13%] tablet:mt-0 tablet:h-full mobile:w-full mobile:h-[70vw] mobile:mt-0'>
                        <Image src={"/assets/ama/ama-3-1.png"} alt='ama-3-2' width={800} height={700} className='w-full h-full object-cover' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CardiacCare;
