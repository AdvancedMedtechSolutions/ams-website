import PrimaryButton from "../Button/PrimaryButton";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import LazyVideo from "../layoutComponents/LazyVideo";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const [videoSrc, setVideoSrc] = useState(null);
  const videoAnim = useRef(null);
  const containerRef = useRef();
  const background = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVideoSrc("/assets/home/hero-final.mp4");
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (globalThis.innerWidth > 1023) {
      let ctx = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "+=4000 top",
            scrub: true,
            pin: true,
          }
        });

        tl.to(videoAnim.current, {
          y: "-110%",
          duration: 2,
        });
        tl.to(background.current, {
          opacity: "0",
          duration: 1.5,
          delay: -1,
        })
        tl.to(videoAnim.current, {
          scale: "1.3",
          borderRadius: "0",
          duration: 2,
        })
        tl.to(videoAnim.current, {
          scale: "0.95",
          borderRadius: "2.5vw",
          duration: 2,
          delay: 1,
          ease: "none",
        })
      });
      return () => ctx.revert();
    }
  }, []);

  return (
    <section ref={containerRef} className="relative overflow-hidden bg-white mobile:bg-transparent tablet:bg-transparent " id="hero">
      <div ref={background} className="px-[12%] w-full relative mobile:px-[5vw] tablet:px-[10%] mobile:flex mobile:flex-col-reverse">
        <div className="flex h-dvh relative z-10 w-full justify-start items-center mobile:h-full mobile:items-start tablet:h-[80vh]">
          <div className="w-[55%] mobile:w-full mobile:flex mobile:flex-col mobile:items-center mobile:justify-center tablet:w-[85%] mt-[4vw] mobile:mt-[10vw]">
            <h1 data-para-anim className="title-1 aeonik mobile:text-center mobile:text-[11vw] text-[#ffffff] tablet:text-[10vw] text-shadow mobile:text-[#111111] mobile:!drop-shadow-none" >
              Advancing the way we care
            </h1>
            <p className="font-light max-w-[50vw] text-[1.25vw] text-white mt-[3vw] mb-[7vw] mobile:text-[4.5vw] mobile:max-w-[90vw] mobile:text-center mobile:mt-[10vw] mobile:mb-[15vw]  tablet:text-[2.5vw] tablet:max-w-[50vw] mobile:text-[#111111] ">
              <span data-para-anim className="mobile:leading-[1.8] text-shadow-para mobile:!drop-shadow-none">
                AMS is dedicated to advancing healthcare by providing meaningful
                MedTech solutions and improving lives for patients around the
                world.
              </span>
            </p>
            <div className="fadeUp">
              <PrimaryButton
                text={"About us"}
                link={"/about-us"}
                className={"secondary  !text-white !border-gray-200"}
                prefetch={false}
              />
            </div>
          </div>
        </div>

        <div className="absolute top-0 left-0 bottom-0 right-0 h-full w-full z-[1] mobile:relative mobile:h-[75vw] mobile:w-[100vw] mobile:ml-[-5vw]">
          <span className="block z-[1] absolute bg-gradient-to-b from-white/25 to-transparent w-full h-full" />
          <video
            poster="/assets/home/hero-video-poster.webp"
            autoPlay
            loop
            muted
            src={videoSrc}
            className="w-full h-full object-cover object-left"
            playsInline
          />
        </div>
      </div>
      <div className="w-screen mobile:py-[15%] mobile:bg-white/50 mobile:mt-[20%]">

        <div id="videoAnim" ref={videoAnim} className='h-[45vw] w-[90vw] overflow-hidden rounded-[2.5vw] scale-50 tablet:scale-100 mobile:scale-100 absolute z-[20] mx-auto left-1/2 translate-x-[-50%] tablet:relative tablet:translate-x-0 tablet:left-0 tablet:my-[15%] mobile:relative mobile:translate-x-0 mobile:left-0'>
          <LazyVideo
            poster={"/assets/home/homepage-reel-poster.webp"}
            type="video/mp4"
            muted
            autoPlay
            loop
            videoSrc={"/assets/home/homepage-reel.mp4"}
            className='w-full h-full object-cover scale-[1.2]'
          />
        </div>
      </div>
    </section>
  );
}
