import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useLenis } from "lenis/react";

const Specifications = ({ children, heading, textclass, bgimg ,color, paddingBottom }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);
  const lenis = useLenis();

  const openModal = () => {
    setIsModalOpen(true);
    lenis && lenis.stop();
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    gsap.to(modalRef.current, {
      opacity: 0,
      duration: 0.7,
      ease: "power3.out",
      onComplete: () => {
        setIsModalOpen(false);
        lenis && lenis.start();
        document.body.style.overflow = "";
      },
    });
  };

  useEffect(() => {
    if (isModalOpen) {
      gsap.fromTo(
        modalRef.current,
        { opacity: 0.5 },
        { opacity: 1, duration: 0.7, ease: "power3.out" }
      );
    }
  }, [isModalOpen]);

  return (
    <>
      <section id="specifications" className="relative ">
        <div className={`w-screen h-fit  flex overflow-hidden items-center pt-[7vw] pb-[4.5vw] mobile:pt-0 mobile:pb-0 pl-[10vw]  tablet:h-[15vh] mobile:h-[15vh] ${paddingBottom}`}>
          <div className="flex items-center justify-center">
            <button onClick={openModal} className="flex items-center">
              <div
                className={`text-white aeonik text-[2.5vw]  uppercase mt-[-3vw] leading-[1.2] tracking-widest ${textclass} mobile:text-[6vw] tablet:text-[5vw] mobile:mt-0 z-[10]`}
              >
                <p>Specifications</p>
              </div>
              <div className="h-[1.5vw] w-[1.5vw]  ml-[0.5vw] mt-[-2.8vw] mobile:h-[4vw] mobile:w-[4vw] mobile:mt-[1vw] tablet:h-[3vw] tablet:w-[3vw] mobile:scale-[1] z-10">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 51 51"
                  className="w-full h-full"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.01701 48.0165L48.0168 3.01677L3.01701 48.0165ZM48.0168 3.01677L48.0795 46.9876L48.0168 3.01677ZM48.0168 3.01677L4.04596 2.95404L48.0168 3.01677Z"
                    fill={color}

                  />
                  <path
                    d="M3.01701 48.0165L48.0168 3.01677M48.0168 3.01677L48.0795 46.9876M48.0168 3.01677L4.04596 2.95404"
                    stroke={color}
                    stroke-width="5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </button>
          </div>
        </div>
        {isModalOpen && (
          <>
            <div
              className="fixed  w-screen h-screen top-0 left-0  flex items-center justify-center z-[999] bg-opacity-50 bg-black/80 "
              ref={modalRef}
            >
              <div className="bg-[#efefef]  border relative  border-white rounded-[2vw] p-[3vw] pt-[4vw] w-[80vw] max-h-[95vh]  mobile:max-h-[95vh] mobile:py-[10vw] mobile:px-[5vw] mobile:w-[95vw] mobile:rounded-[7vw]  tablet:w-[90vw] tablet:max-w-[95vw] tablet:rounded-[3.5vw] tablet:p-[4vw] ">
                <div
                  onClick={closeModal}
                  className="cursor-pointer absolute top-[2vw] right-[2vw] flex items-center justify-center text-white border p-[0.7vw] rounded-full border-[#2a2a2a] h-[2.5vw] w-[2.5vw] mobile:w-[7.5vw] mobile:h-[7.5vw] mobile:p-[2vw] mobile:top-[4vw] mobile:right-[4vw] tablet:h-[6vw] tablet:w-[6vw] tablet:p-[1.5vw]"
                >
                  <div className="h-full w-full relative ">
                    <Image
                      src="/assets/icons/cross-icon.svg"
                      fill
                      className="object-contain"
                      alt="cross-icon"
                    />
                  </div>
                </div>
                <p className="text-[2.5vw] text-[#2A2A2A] font-extralight  leading-[1.2] ml-[1vw] mobile:text-[8vw] mobile:text-center tablet:text-[4vw] mobile:pt-[4vw]">
                  {heading}
                </p>
                {children}
              </div>
            </div>
          </>
        )}
        <div className="w-[100vw] h-[100%] absolute z-[1] top-0 left-0">
          <Image
            src={bgimg}
            fill
            alt="specifications-bg"
            className="object-cover"
          />
        </div>
      </section>
    </>
  );
};

export default Specifications;
