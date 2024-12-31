import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger,useGSAP)

const Genesis = ({ content, sParaWidth, bParaWidth }) => {
  useGSAP(()=>{
    gsap.to(".genesis-img",{
      yPercent:30,
      ease:"none",
      scrollTrigger:{
        trigger:".genesis-img",
        start:"top 80%",
        end:"bottom top",
        scrub:true,
      }
    })
  })

  return (
    <section className="genesis mobile:h-full overflow-hidden pt-[12%] tablet:pt-[15%] mobile:pt-[20%] mobile:pb-[10%]" id="genesis">
      <div className="container-lg mx-auto flex items-center justify-center flex-col relative pb-[7.5vw] tablet:pb-0 mobile:pb-0">
        <div className="genesis-card w-[80%] border-[1px] relative border-[#DADADA] z-[1] bg-white/70 backdrop-blur-sm rounded-[2.5vw] px-[1%] py-[5%] mobile:py-[15%] mobile:w-full tablet:w-[90%] mobile:rounded-[11vw]">
          <h2 data-para-anim className="title-2 aeonik ml-[5.5%] mobile:text-center mobile:ml-0 mobile:px-[5vw] tablet:ml-[6%] mobile:flex mobile:justify-center mobile:items-center kerning-none tablet:text-wrap">
            <span>
              {content.heading}
            </span>
          </h2>
          <div className="genesis-text flex w-full justify-center gap-x-[4vw] mt-[4vw] mobile:flex-col mobile:px-[7vw] mobile:gap-[7vw] mobile:py-[4vw] tablet:gap-x-[4vw] tablet:flex tablet:flex-col tablet:px-[4vw] tablet:gap-[3vw]">
            <div className={`w-[30%] content-p mobile:w-full mobile:text-[4vw] tablet:w-full tablet:text-[2.2vw] tablet:leading-[1.4] ${sParaWidth}`}>
              <p data-para-anim className=" leading-[1.5] text-justify mobile:text-center ">
                {content.smallpara}
              </p>
            </div>
            <div className={`w-[53%] text-[2.3vw] font-light text-[#111111] mobile:w-full mobile:text-[5.5vw] mobile:text-center tablet:w-full tablet:text-[3vw] ${bParaWidth} `}>
              <p data-para-anim className="leading-[1.3]">
                {content.bigpara}
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-[2.5vw] overflow-hidden absolute bottom-0 w-full h-[32vw] tablet:hidden mobile:hidden">
            <Image
              className="object-cover w-full h-full scale-[1.2] genesis-img translate-y-[-15%]"
              src={content.src}
              alt="Genesis Image"
              width={1750}
              height={650}
            />
        </div>
      </div>
    </section>
  );
};

export default Genesis;
