import Image from "next/image";
import React, { useState } from "react";

const Ergonomic = () => {
  const [visibleTextIndex, setVisibleTextIndex] = useState(null);

  return (
    <>
      <section
        className="w-screen h-[55vw] overflow-hidden relative py-[7%] mobile:h-[120vh] tablet:h-[120vw]"
        id="advaglide-ergonomic"
      >
        <div className="w-full container-lg flex justify-center">
          <h2
            data-para-anim
            className="title-2 w-[60%] font-light aeonik text-center z-[10] mobile:w-[90%] tablet:text-[7vw] tablet:w-[90%]"
          >
            Revolutionised for the Most Challenging Environments
          </h2>
        </div>
        <div className="absolute w-[70vw] h-[35vw] scale-[1.7] left-[5%] top-[10%] z-[10] mt-[5vw] fadeUp mobile:w-[140vw] mobile:h-[140vw] mobile:left-[-55%] mobile:top-[30%] mobile:rotate-[-40deg] fadeUp tablet:top-[30%] tablet:w-[120vw] tablet:h-[50vw] tablet:left-[-20%] tablet:rotate-[-30deg]">
          <Image
            src={"/assets/advaglide/advaglide-features.png"}
            alt="advaglide-features"
            fill
            className="object-contain w-full h-full rotate-[10deg] tablet:rotate-[30deg]"
          />
        </div>
        <span
          className="w-[2vw] h-[2vw] bg-white/30 rounded-full absolute top-[39%] right-[19.5%] flex justify-center items-center cursor-pointer border mobile:w-[8vw] mobile:h-[8vw] mobile:top-[25%]  mobile:right-[6.5%] tablet:w-[5vw] tablet:h-[5vw] z-[10] tablet:right-[4.5%]"
          onMouseEnter={() => setVisibleTextIndex(0)}
          onMouseLeave={() => setVisibleTextIndex(null)}
        >
          <span className="w-[0.5vw] h-[0.5vw] bg-blue-500 rounded-full mobile:w-[3vw] mobile:h-[3vw] tablet:w-[1.5vw] tablet:h-[1.5vw]"></span>
        </span>
        <span
          className="w-[2vw] h-[2vw] bg-white/30 rounded-full absolute top-[59%] right-[30.5%] flex justify-center items-center cursor-pointer border mobile:w-[8vw] mobile:h-[8vw] mobile:top-[44%] mobile:right-[13%] tablet:w-[5vw] tablet:h-[5vw] z-[10] tablet:right-[16%] tablet:top-[53.5%]"
          onMouseEnter={() => setVisibleTextIndex(1)}
          onMouseLeave={() => setVisibleTextIndex(null)}
        >
          <span className="w-[0.5vw] h-[0.5vw] bg-blue-500 rounded-full mobile:w-[3vw] mobile:h-[3vw] tablet:w-[1.5vw] tablet:h-[1.5vw]"></span>
        </span>
        <span
          className="w-[2vw] h-[2vw] bg-white/30 rounded-full absolute top-[59%] right-[36%] flex justify-center items-center cursor-pointer border mobile:w-[8vw] mobile:h-[8vw] mobile:right-[24.5%] mobile:top-[47%] tablet:w-[5vw] tablet:h-[5vw] z-[10] tablet:right-[24%] tablet:top-[55%]"
          onMouseEnter={() => setVisibleTextIndex(2)}
          onMouseLeave={() => setVisibleTextIndex(null)}
        >
          <span className="w-[0.5vw] h-[0.5vw] bg-blue-500 rounded-full mobile:w-[3vw] mobile:h-[3vw] tablet:w-[1.5vw] tablet:h-[1.5vw]"></span>
        </span>
        <span
          className="w-[2vw] h-[2vw] bg-white/30 rounded-full absolute bottom-[22%] left-[49%] flex justify-center items-center cursor-pointer border mobile:w-[8vw] mobile:h-[8vw] mobile:left-[54%] mobile:bottom-[30%] tablet:w-[5vw] tablet:h-[5vw] z-[10] tablet:bottom-[28%] tablet:left-[55%]"
          onMouseEnter={() => setVisibleTextIndex(3)}
          onMouseLeave={() => setVisibleTextIndex(null)}
        >
          <span className="w-[0.5vw] h-[0.5vw] bg-blue-500 rounded-full mobile:w-[3vw] mobile:h-[3vw] tablet:w-[1.5vw] tablet:h-[1.5vw]"></span>
        </span>
        <span
          className="w-[2vw] h-[2vw] bg-white/30 rounded-full absolute bottom-[27%] left-[42%] flex justify-center items-center cursor-pointer border mobile:w-[8vw] mobile:h-[8vw] mobile:left-[30%] mobile:bottom-[27%] tablet:w-[5vw] tablet:h-[5vw] z-[10]  tablet:left-[45%] tablet:bottom-[30%]"
          onMouseEnter={() => setVisibleTextIndex(4)}
          onMouseLeave={() => setVisibleTextIndex(null)}
        >
          <span className="w-[0.5vw] h-[0.5vw] bg-blue-500 rounded-full mobile:w-[3vw] mobile:h-[3vw] tablet:w-[1.5vw] tablet:h-[1.5vw]"></span>
        </span>
        <span
          className="w-[2vw] h-[2vw] bg-white/30 rounded-full absolute bottom-[16.5%] left-[28%] flex justify-center items-center cursor-pointer border mobile:w-[8vw] mobile:h-[8vw] tablet:w-[5vw] tablet:h-[5vw] z-[10] mobile:left-[22%]  mobile:bottom-[20%] tablet:left-[30%] tablet:bottom-[22%]"
          onMouseEnter={() => setVisibleTextIndex(5)}
          onMouseLeave={() => setVisibleTextIndex(null)}
        >
          <span className="w-[0.5vw] h-[0.5vw] bg-blue-500 rounded-full mobile:w-[3vw] mobile:h-[3vw] tablet:w-[1.5vw] tablet:h-[1.5vw]"></span>
        </span>
        <div className={`z-[10] absolute top-[46.5%] right-[1%] font-light  text-[#4a4a4a] mobile:top-[28%] mobile:right-[8%] transition-opacity duration-300   ${visibleTextIndex === 0 ? "opacity-100" : "opacity-0"
            } tablet:top-[35%] tablet:right-[15%]`}>
        <p
          className={`text-[1.25vw] uppercase mobile:leading-[1.2] mobile:text-[4vw] tablet:text-[3vw] `}
        >
          UNSURPASSED TIP ENTRY PROFILE
          </p>
          <p className="text-[1.05vw] mobile:leading-[1.2] mobile:text-[3.5vw] mobile:w-[70%] tablet:text-[2.5vw]">
            Excellent versatility in accessing tortuous lesions
          </p>
        </div>
        <div className={`z-[10] absolute top-[63%] right-[8%] font-light  text-[#4a4a4a] transition-opacity duration-300  ${visibleTextIndex === 1 ? "opacity-100" : "opacity-0"
            } mobile:top-[40%] mobile:left-[15%] mobile:w-[50%] tablet:w-[40%] tablet:right-[-10%] tablet:top-[65%]` }>
        <p
          className={`text-[1.25vw] uppercase mobile:leading-[1.2] mobile:text-[4vw] tablet:text-[3vw]  `}
        >
          Innovative Steep Shoulder Design
          </p>
          <p className="text-[1.05vw] mobile:leading-[1.2]  mobile:text-[3.5vw] mobile:w-[80%]  mobile:mt-[1.5vw] tablet:text-[2.5vw] tablet:w-[70%]">
            Focused dilatation & minimised vessel trauma
          </p>
        </div>
        <div className={`z-[10] absolute top-[47%] right-[40%] font-light  text-[#4a4a4a] transition-opacity duration-300  ${visibleTextIndex === 2 ? "opacity-100" : "opacity-0"
            } mobile:left-[15%] tablet:right-[30%]`}>
        <p
          className={`text-[1.25vw] uppercase mobile:leading-[1.2] mobile:text-[4vw] tablet:text-[3vw]  `}
        >
         Precise Balloon Positioning
          </p>
          <p className="text-[1.05vw] mobile:leading-[1.2] mobile:text-[3.5vw] mobile:w-[70%] mobile:mt-[1.5vw] tablet:text-[2.5vw]">
           Improved visibility for accurate results
          </p>
        </div>
        <div className={`z-[10] absolute bottom-[15%] right-[30%] font-light  text-[#4a4a4a] transition-opacity duration-300  ${visibleTextIndex === 3 ? "opacity-100" : "opacity-0"
            } mobile:right-[-15%] mobile:bottom-[22%] mobile:w-[50%] tablet:right-[5%] tablet:bottom-[18%]`}>
        <p
          className={`text-[1.25vw] uppercase mobile:leading-[1.2] mobile:text-[4vw] tablet:text-[3vw]  `}
        >
         Outstanding deliverability
          </p>
          <p className="text-[1.05vw] mobile:leading-[1.2] mobile:text-[3.5vw] mobile:w-[60%] mobile:mt-[1.5vw] tablet:text-[2.5vw]">
          Fastest inflation & deflation time
          </p>
        </div>
        <div className={`z-[10] absolute bottom-[33%] left-[27%] font-light  text-[#4a4a4a] transition-opacity duration-300  ${visibleTextIndex === 4 ? "opacity-100" : "opacity-0"
            } mobile:left-[5%] mobile:bottom-[33%] mobile:w-[40%] tablet:bottom-[35%] tablet:left-[10%]`}>
        <p
          className={`text-[1.25vw] uppercase mobile:leading-[1.2] mobile:text-[4vw] tablet:text-[3vw]  `}
        >
         Ultra thin balloon material
          </p>
          <p className="text-[1.05vw] mobile:leading-[1.2]  mobile:text-[3.5vw] mobile:w-[70%] mobile:mt-[1.5vw] tablet:text-[2.5vw]">
          Wide working pressure range
          </p>
        </div>
        <div className={`z-[10] absolute bottom-[4%] left-[32%] font-light  text-[#4a4a4a] transition-opacity duration-300  ${visibleTextIndex === 5 ? "opacity-100" : "opacity-0"
            } mobile:bottom-[8%] mobile:left-[20%] tablet:bottom-[10%]`}>
        <p
          className={`text-[1.25vw] uppercase  mobile:leading-[1.2] mobile:text-[4vw] tablet:text-[3vw]  `}
        >
         Proprietary Shaft Design
          </p>
          <p className="text-[1.05vw] mobile:leading-[1.2]  mobile:text-[3.5vw] mobile:w-[70%] mobile:mt-[1.5vw] tablet:text-[2.5vw]">
          Balanced Pus & track performance
          </p>
        </div>
        <div className="absolute w-full h-full top-0 left-0">
          <Image src="/assets/advaglide/advaglide-ergonomic-bg.png" fill alt="advaglide"/>
          </div>
      </section>
    </>
  );
};

export default Ergonomic;
