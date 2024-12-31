import Image from 'next/image'
import { Media } from '../media'
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

const DNA = () => {
  return (
    <>
      <section className='dna w-screen overflow-hidden' id='dna'>
        <div className='mx-auto py-[7%] tablet:py-[15%] mobile:py-[10%] mobile:pb-[20%]'>
          <div className='mobile:w-full mobile:flex mobile:justify-center'>
            <h2
              data-para-anim className="title-2 aeonik ml-[7%] mobile:ml-0">
              <span>Our DNA</span>
            </h2>
          </div>
          <Media greaterThan='tablet'>
            <div className='dna-card-container flex justify-between items-center p-[3%] px-[5vw] gap-[1.5vw]  '>
              <CardContainer className="inter-var group">
                <div className='dna-card px-[2%] py-[6%] w-[28.5vw] border-[1px] rounded-[3vw] bg-white/50 h-[37vw] dna-card1 fadeUp'>
                  <CardBody className=" relative group/card h-auto p-6">
                    <CardItem translateZ="100" className=' ml-[1vw] w-[5.5vw] h-[6vw] relative '>
                      <Image
                        className="rounded-[20px] object-contain group-hover:scale-[1.2] transition-all duration-500 ease"
                        src="/assets/about/globe.svg"
                        alt="Accessible Image"
                        fill
                      />
                    </CardItem>
                    <CardItem className='mt-[3vw] mb-[2vw]' translateZ="60">
                      <h2 className='text-[2.4vw] aeonik leading-[1] font-light text-[#111111]'>Accessible Care</h2>
                    </CardItem>
                    <CardItem className='content-p tracking-wide' as="p"
                      translateZ="60">
                      AMS is transforming the landscape of MedTech, ensuring that high quality healthcare is accessible to everyone. Our pioneering products are designed to overcome barriers in care and deliver excellence globally.
                    </CardItem>
                  </CardBody>
                </div>
              </CardContainer>
              <CardContainer className="inter-var group">
                <div className='dna-card px-[2%] py-[6%] w-[28.5vw] border-[1px] rounded-[3vw] bg-white/50 h-[37vw] dna-card1 fadeUp'>
                  <CardBody className=" relative group/card h-auto p-6">
                    <CardItem translateZ="100" className=' ml-[1vw] w-[5.5vw] h-[6vw] relative'>
                      <Image
                        className="rounded-[20px]  object-contain group-hover:scale-[1.2] transition-all duration-500 ease"
                        src="/assets/about/people.svg"
                        alt="Accessible Image"
                        fill
                      />
                    </CardItem>
                    <CardItem className='mt-[3vw] mb-[2vw]' translateZ="60">
                      <h2 className='text-[2.4vw] aeonik leading-[1] font-light text-[#111111]'>People at the Core</h2>
                    </CardItem>
                    <CardItem className='content-p tracking-wide ' as="p"
                      translateZ="60">
                      People are the cornerstone of AMS, and our commitment to them fuels everything we strive to achieve. At AMS, we unite the expertise of our skilled team with the fresh perspectives of motivated individuals, working together with a shared vision to advance healthcare.
                    </CardItem>
                  </CardBody>
                </div>
              </CardContainer>
              <CardContainer className="inter-var group">
                <div className='dna-card px-[1vw] py-[6%] w-[28.5vw] border-[1px] rounded-[3vw] bg-white/50 h-[37vw] dna-card1 fadeUp'>
                  <CardBody className=" relative group/card h-auto p-6">
                    <CardItem translateZ="100" className=' ml-[1vw] w-[5.5vw] h-[6vw] relative'>
                      <Image
                        className="rounded-[20px] object-contain group-hover:scale-[1.2] transition-all duration-500 ease"
                        src="/assets/about/ethics.svg"
                        alt="Accessible Image"
                        fill
                      />
                    </CardItem>
                    <CardItem className='mt-[3vw] mb-[2vw]' translateZ="60">
                      <h2 className='text-[2.4vw] aeonik leading-[1] font-light text-[#111111]'>Ethics and Integrity</h2>
                    </CardItem>
                    <CardItem className='content-p tracking-wide ' as="p"
                      translateZ="60">
                      At AMS, we hold a deep belief that ethics and integrity are fundamental to effective healthcare, shaping every provider-patient relationship. Our mission is to embrace these values with transparency and honesty in all our practices, fostering a culture where compassionate care thrives.
                    </CardItem>
                  </CardBody>
                </div>
              </CardContainer>
            </div>
          </Media>
          <Media lessThan='desktop'>
            <div className='mobile:pt-[10%] tablet:pt-[10%]'>
              <div className='w-full flex flex-col justify-center items-center gap-[7vw] tablet:flex-row tablet:flex-wrap tablet:gap-[2vw]'>
                <div className='w-[85vw] h-[100vw] border border-gray-200 py-[6vw] rounded-[7vw] flex flex-col gap-[5vw] justify-center bg-white/50 items-center px-[2vw] fadeUp tablet:w-[45vw] tablet:h-[55vw] tablet:rounded-[3vw]'>
                  <div className='w-[15vw] h-[15vw] relative mobile:w-[20vw] mobile:h-[20vw]'>
                    <Image
                      className="rounded-[20px] group-hover/card:drop-shadow-xl object-contain"
                      src="/assets/about/globe.svg"
                      alt="Accessible Image"
                      fill
                    />
                  </div>
                  <div className='w-full text-center'>
                    <h2 className='text-[2.4vw] aeonik leading-[1.2] font-light text-[#111111] tablet:text-[4vw] mobile:text-[8.2vw] '>Accessible Care</h2>
                  </div>
                  <div>
                    <p className='content-p tracking-wide mobile:w-[100%] mobile:p-[5vw] text-center '>Breaking barriers to care. AMS designs affordable medical solutions that bring quality healthcare to everyone, everywhere.</p>
                  </div>
                </div>
                <div className='w-[85vw] h-[100vw] border border-gray-200 py-[6vw] rounded-[7vw] flex flex-col gap-[5vw] justify-center bg-white/50 items-center px-[2vw] fadeUp tablet:w-[45vw] tablet:h-[55vw] tablet:rounded-[3vw]'>
                  <div className='w-[15vw] h-[15vw] relative mobile:w-[20vw] mobile:h-[20vw]'>
                    <Image
                      className="rounded-[20px] group-hover/card:drop-shadow-xl object-contain"
                      src="/assets/about/people.svg"
                      alt="Accessible Image"
                      fill
                    />
                  </div>
                  <div className='w-full text-center'>
                    <h2 className='text-[2.4vw] aeonik leading-[1.2] font-light text-[#111111] tablet:text-[4vw] mobile:text-[8.2vw] '>Global Standards</h2>
                  </div>
                  <div>
                    <p className='content-p tracking-wide mobile:w-[100%] mobile:p-[5vw] text-center '>The AMS facility is equipped to produce cutting edge medical devices that meet the most stringent global specifications.</p>
                  </div>
                </div>
                <div className='w-[85vw] h-[100vw] border border-gray-200 py-[6vw] rounded-[7vw] flex flex-col gap-[5vw] justify-center bg-white/50 items-center px-[2vw] fadeUp tablet:w-[45vw] tablet:h-[55vw] tablet:rounded-[3vw]'>
                  <div className='w-[15vw] h-[15vw] relative mobile:w-[20vw] mobile:h-[20vw]'>
                    <Image
                      className="rounded-[20px] group-hover/card:drop-shadow-xl object-contain"
                      src="/assets/about/ethics.svg"
                      alt="Accessible Image"
                      fill
                    />
                  </div>
                  <div className='w-full text-center'>
                    <h2 className='text-[2.4vw] aeonik leading-[1.2] font-light text-[#111111] tablet:text-[4vw] mobile:text-[8.2vw] '>Ethics and Integrity</h2>
                  </div>
                  <div>
                    <p className='content-p tracking-wide mobile:w-[100%] mobile:p-[5vw] text-center '>We uphold ethical standards and integrity in all business practices, ensuring transparency & honesty in building lasting relationships..</p>
                  </div>
                </div>
              </div>
            </div>
          </Media>
        </div>
      </section>
    </>
  )
}

export default DNA;