import React from "react";
import Image from "next/image";
import Link from "next/link";

const AdvakitSpecifications = ({ textclass, bgimg ,color, paddingBottom, link }) => {
  return (
    <>
      <section id="specifications" className="relative ">
        <div className={`w-screen h-fit  flex overflow-hidden items-center pt-[7vw] pb-[4.5vw] mobile:pt-0 mobile:pb-0 pl-[10vw]  tablet:h-[15vh] mobile:h-[15vh] ${paddingBottom}`}>
          <div className="flex items-center justify-center">
            
                <Link href={link} target="_blank" className="flex items-center">
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
              </Link>
          
          </div>
        </div>
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

export default AdvakitSpecifications;
