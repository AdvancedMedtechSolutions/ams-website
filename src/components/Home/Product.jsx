import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import LinkButton from "../Button/LinkButton";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { useRef } from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import { Media } from "../media";

import "swiper/css/navigation";

gsap.registerPlugin(ScrollTrigger);

export default function Product() {
  const swiperRef = useRef(null);

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext(); // Move to the next slide
    }
  };

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev(); // Move to the previous slide
    }
  };

  return (
    <>
      <section
        id="product"
        className="py-[5%] relative overflow-hidden mobile:pb-[30%] mobile:pt-[15vw]"
      >
        <div className="h-full">
          <Media greaterThanOrEqual="tablet">
            <Image
              src={"/assets/home/homepage-product-bg.png"}
              width={1960}
              height={1180}
              alt={"product-bg"}
              className="object-cover top-0 w-full h-full product-bg-img absolute scale-[1] "
            />
          </Media>
          <Media lessThan="tablet">
            <Image
              src={"/assets/home/product-bg-mobile.png"}
              fill
              alt={"product-bg"}
              className="object-cover product-bg-img scale-[1] "
            />
          </Media>
        </div>

        <div className="">
          <div className="container-lg product-top text-center flex flex-col items-center">
            <h2 data-para-anim className="title-2 aeonik leading-[1.3]">
              Empowering Healthcare Professionals
            </h2>
            <p
              data-para-anim
              className="content-p my-6 w-[55%] mobile:w-[90%] mobile:my-10 tablet:w-[70%]"
            >
              Advanced MedTech Solutions paves the way for new therapies and
              enhanced treatment outcomes through insight-driven medical device
              technology and innovation.
            </p>
          </div>
          <div className="fadeUp">
            <Swiper
              spaceBetween={70}
              loop={true}
              breakpoints={{
                1024: {
                  spaceBetween: 160
                }
              }}
              speed={1000}
              navigation={false}
              modules={[Navigation]}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              className="homeCarousel !px-[10vw] mobile:!px-[5%]"
            >
              <SwiperSlide>
                <CardContainer className="product-card relative h-full">
                  <Image
                    src={"/assets/products/product-frame.png"}
                    fill
                    className="object-fill mobile:hidden"
                    alt="product-frame"
                  />
                  <Image
                    src={"/assets/products/product-frame-mobile.png"}
                    fill
                    className="object-fill hidden mobile:block"
                    alt="product-frame"
                  />
                  <CardBody className="main relative">
                    <CardItem className="absolute right-[4.5%] top-[1%] font-light text-[#2a2a2a] border border-[#2a2a2a] rounded-full h-[1.8vw] w-[1.8vw] flex justify-center items-center mobile:h-[8vw] mobile:w-[8vw] mobile:right-[10%] mobile:top-[2%] tablet:w-[3vw] tablet:h-[3vw] tablet:right-[2%] ">
                      <span className="text-[0.9vw] pt-1 mobile:text-[4vw] mobile:pt-0 tablet:text-[1.8vw] tablet:pt-0">
                        01
                      </span>
                    </CardItem>
                    <div className="flex justify-between items-center h-full w-full gap-[5vw] mobile:flex-col mobile:justify-center mobile:items-center mobile:gap-[10vw]">
                      <div className="w-[90%] mobile:w-[70%]">
                        <Image
                          className="fadeUp w-full h-full object-contain"
                          src="/assets/products/ADVA-Glide.webp"
                          alt="Product Image"
                          width={467}
                          height={270}
                        />
                      </div>
                      <div className="flex flex-col w-full pr-[3vw] mobile:justify-center mobile:items-center mobile:pr-[0vw] tablet:pr-0 mobile:w-[95%] mobile:text-center">
                        <h3 className="title-2 aeonik mb-[0.5vw] mobile:mb-[2vw] !text-[#3ABFF0] tablet:text-[6vw] tablet:leading-[1.1]">
                          <span>ADVA GLIDE</span>
                        </h3>
                        <h4 className="content-p mb-[2.5vw] mobile:mb-[2.5vw] mobile:text-[5.2vw] !font-normal">
                          Gliding to Perfection.
                        </h4>

                        <p className="content-p mb-[5vw] mobile:mb-[6vw] flex flex-col gap-[0.8vw] mobile:text-[4vw] tablet:text-[1.5vw]">
                          <span>
                            ADVA GLIDE&apos;s balloon catheter technologies are
                            engineered to excel in the most demanding coronary
                            anatomies, offering superior trackability,
                            crossability, and navigability across complex
                            lesions.
                          </span>
                        </p>
                        <LinkButton
                          btnText={"Learn More"}
                          link={"/interventional-cardiology/adva-glide-ptca-coronary-balloon-semi-compliant"}
                          className={"tablet:text-[2vw] tablet:mt-[-0.8vw]"}
                        />
                      </div>
                    </div>
                  </CardBody>
                </CardContainer>
              </SwiperSlide>
              <SwiperSlide>
                <CardContainer className="product-card relative">
                  <Image
                    src={"/assets/products/product-frame.png"}
                    fill
                    className="object-fill mobile:hidden"
                    alt="product-frame"
                  />
                  <Image
                    src={"/assets/products/product-frame-mobile.png"}
                    fill
                    className="object-fill hidden mobile:block"
                    alt="product-frame"
                  />
                  <div className="main relative">
                    <div className="absolute right-[4.5%] top-[1%] font-light text-[#2a2a2a] border border-[#2a2a2a] rounded-full h-[1.8vw] w-[1.8vw] flex justify-center items-center mobile:h-[8vw] mobile:w-[8vw] mobile:right-[10%] mobile:top-[2%] tablet:w-[3vw] tablet:h-[3vw] tablet:right-[2%]">
                      <span className="text-[0.9vw] pt-1 mobile:text-[4vw] mobile:pt-0 tablet:text-[1.8vw] tablet:pt-0">
                        02
                      </span>
                    </div>
                    <div className="flex justify-between items-center h-full w-full gap-[5vw] mobile:flex-col mobile:justify-center mobile:items-center mobile:gap-[10vw]">
                      <div className="w-[100%] h-[60vw] mobile:w-[70%] relative">
                        <Image
                          className="fadeUp object-contain"
                          src="/assets/home/product-advagrip.png"
                          alt="Product Image"
                          fill
                        />
                      </div>
                      <div className="flex flex-col w-full pr-[3vw] mobile:justify-center mobile:items-center mobile:pr-[0vw] tablet:pr-0 mobile:w-[95%] mobile:text-center">
                        <h3 className="title-2 aeonik mb-[0.5vw] mobile:mb-[2vw] !text-[#8855C3] tablet:text-[6vw] tablet:leading-[1.1]">
                          <span>ADVAGRIP </span>
                        </h3>
                        <h4 className="content-p mb-[2vw] mobile:mb-[2.5vw] mobile:text-[5.2vw] !font-normal">
                          A GRIP like No Other.
                        </h4>

                        <p className="content-p mb-[5vw] mobile:mb-[6vw] mobile:text-[4vw] tablet:text-[1.5vw]">
                          ADVAGRIP sets a new benchmark in Knotless Tissue
                          Control Device, employing Tri-Cut Technology to
                          produce barbs that delivers a robust anchoring force
                          whilst maintaining the integrity of the suture
                          strength.
                        </p>
                        <LinkButton
                          btnText={"Learn More"}
                          link={"/wound-care/advagrip-knotless-barbed-suture"}
                          className={"tablet:text-[2vw] tablet:mt-[-0.8vw]"}
                        />
                      </div>
                    </div>
                  </div>
                </CardContainer>
              </SwiperSlide>
              <SwiperSlide>
                <CardContainer className="product-card relative">
                  <Image
                    src={"/assets/products/product-frame.png"}
                    fill
                    className="object-fill mobile:hidden"
                    alt="product-frame"
                  />
                  <Image
                    src={"/assets/products/product-frame-mobile.png"}
                    fill
                    className="object-fill hidden mobile:block"
                    alt="product-frame"
                  />
                  <div className="main relative">
                    <div className="absolute right-[4.5%] top-[1%] font-light text-[#2a2a2a] border border-[#2a2a2a] rounded-full h-[1.8vw] w-[1.8vw] flex justify-center items-center mobile:h-[8vw] mobile:w-[8vw] mobile:right-[10%] mobile:top-[2%] tablet:w-[3vw] tablet:h-[3vw] tablet:right-[2%]">
                      <span className="text-[0.9vw] pt-1 mobile:text-[4vw] mobile:pt-0 tablet:text-[1.8vw] tablet:pt-0">
                        03
                      </span>
                    </div>
                    <div className="flex justify-between items-center h-full w-full gap-[5vw] mobile:flex-col mobile:justify-center mobile:items-center mobile:gap-[10vw]">
                      <div className="w-[100%] h-[70vw] relative mobile:w-[full] scale-[1.8] mobile:h-[80vw] ">
                        <Image
                          className="fadeUp object-contain "
                          src="/assets/home/advapro-product.png"
                          alt="Product Image"
                          fill
                        />
                      </div>
                      <div className="flex flex-col w-full pr-[3vw] mobile:justify-center mobile:items-center mobile:pr-[0vw] tablet:pr-0 mobile:w-[95%] mobile:text-center">
                        <h3 className="title-2 aeonik mb-[0.5vw] mobile:mb-[2vw] !text-[#3ABFF0] tablet:text-[6vw] tablet:leading-[1.1]">
                          <span>ADVA PRO</span>
                        </h3>
                        <h4 className="content-p mb-[2.5vw] mobile:mb-[2.5vw] mobile:text-[5.2vw] !font-normal">
                          Precision. Perfection. Pro.
                        </h4>

                        <p className="content-p mb-[5vw] mobile:mb-[6vw] mobile:text-[4vw] tablet:text-[1.5vw]">
                          Designed for complex PCI, ADVA PRO provides optimized
                          safety and efficacy, ensuring consistent and trusted
                          patient outcomes.
                        </p>
                        <LinkButton
                          btnText={"Learn More"}
                          link={"/interventional-cardiology/adva-pro-coronary-sirolimus-stent"}
                          className={"tablet:text-[2vw] tablet:mt-[-0.8vw]"}
                        />
                      </div>
                    </div>
                  </div>
                </CardContainer>
              </SwiperSlide>
              <SwiperSlide>
                <CardContainer className="product-card relative">
                  <Image
                    src={"/assets/products/product-frame.png"}
                    fill
                    className="object-fill mobile:hidden"
                    alt="product-frame"
                  />
                  <Image
                    src={"/assets/products/product-frame-mobile.png"}
                    fill
                    className="object-fill hidden mobile:block"
                    alt="product-frame"
                  />
                  <div className="main relative">
                    <div className="absolute right-[4.5%] top-[1%] font-light text-[#2a2a2a] border border-[#2a2a2a] rounded-full h-[1.8vw] w-[1.8vw] flex justify-center items-center mobile:h-[8vw] mobile:w-[8vw] mobile:right-[10%] mobile:top-[2%] tablet:w-[3vw] tablet:h-[3vw] tablet:right-[2%]">
                      <span className="text-[0.9vw] pt-1 mobile:text-[4vw] mobile:pt-0 tablet:text-[1.8vw] tablet:pt-0">
                        04
                      </span>
                    </div>
                    <div className="flex justify-between items-center h-full w-full gap-[5vw] mobile:flex-col mobile:justify-center mobile:items-center mobile:gap-[7vw]">
                      <div className="w-[100%] h-[30vw] relative mobile:h-[80vw] ">
                        <Image
                          className="fadeUp object-contain "
                          src="/assets/home/advacryl-hero.png"
                          alt="Product Image"
                          fill
                      />
                      </div>
                      <div className="flex flex-col w-full pr-[3vw] mobile:justify-center mobile:items-center mobile:pr-[0vw] tablet:pr-0 mobile:w-[95%] mobile:text-center">
                        <h3 className="title-2 aeonik mb-[0.5vw] mobile:mb-[2vw] !text-[#9263A5] tablet:text-[6vw] tablet:leading-[1.1]">
                          <span>ADVACRYL</span>
                        </h3>
                        <h4 className="content-p mb-[2vw] mobile:mb-[2.5vw] mobile:text-[5.2vw] !font-normal">
                          Braided Coated Polyglactin 910
                        </h4>

                        <p className="content-p mb-[5vw] mobile:mb-[6vw] mobile:text-[4vw] tablet:text-[1.5vw]">
                          Consistent performance for confidence in a variety of
                          soft tissue approximation. The trusted choice of
                          Polyglactin 910 for surgeon&apos;s worldwide.
                        </p>
                        <LinkButton
                          btnText={"Learn More"}
                          link={"/wound-care/advacryl-polyglactin-910-suture"}
                          className={"tablet:text-[2vw] tablet:mt-[-0.8vw]"}
                        />
                      </div>
                    </div>
                  </div>
                </CardContainer>
              </SwiperSlide>
              <SwiperSlide>
                <CardContainer className="product-card relative">
                  <Image
                    src={"/assets/products/product-frame.png"}
                    fill
                    className="object-fill mobile:hidden"
                    alt="product-frame"
                  />
                  <Image
                    src={"/assets/products/product-frame-mobile.png"}
                    fill
                    className="object-fill hidden mobile:block"
                    alt="product-frame"
                  />
                  <div className="main relative">
                    <div className="absolute right-[4.5%] top-[1%] font-light text-[#2a2a2a] border border-[#2a2a2a] rounded-full h-[1.8vw] w-[1.8vw] flex justify-center items-center mobile:h-[8vw] mobile:w-[8vw] mobile:right-[10%] mobile:top-[2%] tablet:w-[3vw] tablet:h-[3vw] tablet:right-[2%]">
                      <span className="text-[0.9vw] pt-1 mobile:text-[4vw] mobile:pt-0 tablet:text-[1.8vw] tablet:pt-0">
                        05
                      </span>
                    </div>
                    <div className="flex justify-between items-center h-full w-full gap-[5vw] mobile:flex-col mobile:justify-center mobile:items-center mobile:gap-[10vw]">
                      <div className="w-[75%] mobile:w-[70%]">
                        <div className="w-[30vw] h-[24vw] relative scale-[1.4] left-[10%] mobile:w-[60vw] mobile:h-[50vw]">
                          <Image
                            className="fadeUp object-contain"
                            src="/assets/home/poweredlc-product.png"
                            alt="Product Image"
                            fill
                          />
                        </div>
                      </div>
                      <div className="flex flex-col w-full pr-[3vw] mobile:justify-center mobile:items-center mobile:pr-[0vw] tablet:pr-0 mobile:w-[95%] mobile:text-center">
                        <h3 className="title-2 aeonik mb-[0.5vw] mobile:mb-[2vw] !text-[#3F5EA8] tablet:text-[6vw] tablet:leading-[1.1]">
                          <span>ADVASTAP POWERED LC</span>
                        </h3>
                        <h4 className="content-p mb-[2vw] mobile:mb-[2.5vw] mobile:text-[5.2vw] !font-normal">
                          Precision is the ultimate sophistication
                        </h4>

                        <p className="content-p mb-[5vw] mobile:mb-[6vw] mobile:text-[4vw] tablet:text-[1.5vw]">
                          The Powered Endoscopic Linear Cutter delivers uniform
                          compression and consistent staple formation, achieving
                          stable and controlled tissue transection.
                        </p>
                        <LinkButton
                          btnText={"Learn More"}
                          link={"/endo-surgery/advastap-powered-linear-cutter-stapler"}
                          className={"tablet:text-[2vw] tablet:mt-[-0.8vw]"}
                        />
                      </div>
                    </div>
                  </div>
                </CardContainer>
              </SwiperSlide>
            </Swiper>
          </div>
          <div
            className={`px-[1.2vw] py-[1.2vw] absolute z-[5] top-[55%] right-0 mobile:bottom-[3%] mobile:top-auto mobile:right-auto mobile:left-[62%] translate-x-[-65%] tablet:top-[68%] tablet:right-[-2%] tablet:translate-y-[-70%] overflow-hidden mobile:p-[5vw] tablet:p-[2vw] rounded-full next-button cursor-pointer  mobile:block group hover:text-white bg-white/50`}
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
            className={`px-[1.2vw] py-[1.2vw] top-[55%] left-[5%] absolute z-[5] mobile:bottom-[3%] mobile:top-auto mobile:left-[37%] translate-x-[-38%]  tablet:top-[68%] tablet:translate-y-[-70%] bg-white/50 overflow-hidden  mobile:p-[5vw] tablet:p-[2vw] rounded-full prev-button cursor-pointer  mobile:block group hover:text-white`}
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
  );
}
