import LazyVideo from "@/components/layoutComponents/LazyVideo";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

export default function HomePageReel() {
  const containerRef = useRef();
  const videoAnim = useRef();

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          markers: true,
          scrub: true,
        }
      });

      tl.to(videoAnim.current, {
        y: "-100%",
        duration: 1,
      })
    });
    return () => ctx.revert();
  }, []);

  // useEffect(() => {
  //   if (globalThis.innerWidth > 1023) {
  //     let ctx = gsap.context(() => {
  //       const tl = gsap.timeline();
  //       // gsap.to(videoAnim.current, {
  //       //   scrollTrigger: {
  //       //     trigger: containerRef.current,
  //       //     start: "-=40% center",
  //       //     end: "top center",
  //       //     scrub: true,
  //       //   },
  //       //   y: "-50%",
  //       //   duration: 4 
  //       // });
  //       tl.fromTo(videoAnim.current, {
  //         scrollTrigger: {
  //           trigger: containerRef.current,
  //           start: "top bottom",
  //           end: "top center",
  //           scrub: true,
  //         },
  //         y: "-70%",
  //         duration: 4
  //       });
  //       tl.fromTo(videoAnim.current, {
  //         scrollTrigger: {
  //           trigger: containerRef.current,
  //           start: "top center",
  //           end: "bottom center",
  //           scrub: true,
  //           markers: true,
  //         },
  //         y: "-70%",
  //       }, {
  //         y: "0%",
  //         scale: 1,
  //         duration: 4
  //       });
  //     });
  //     return () => ctx.revert();
  //   }
  // }, [])

  return (
    <>
      <section ref={containerRef} className='h-full py-[10%] tablet:py-[15%] bg-white mobile:py-[20%] relative z-[10]' id='homepagereel'>
        <div className='w-full h-full flex justify-center items-center'>
          <div id="videoAnim" ref={videoAnim} className='h-[45vw] w-[90vw] overflow-hidden rounded-[2.5vw] scale-50 tablet:scale-100 mobile:scale-100'>
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
    </>
  )
}
