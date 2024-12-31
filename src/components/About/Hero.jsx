import { useState, useEffect } from "react";

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVideoSrc("/assets/about/about-hero-video.mp4");
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <section className="hero h-screen tablet:h-[80vh] overflow-hidden mobile:w-full bg-white" id="hero">
        <div className="px-[10%] relative">
          <div className="flex h-dvh w-full justify-start items-center tablet:h-[80vh] mobile:flex-col mobile:h-screen mobile:justify-start mobile:pt-[30vw]">
            <div className="w-full mobile:flex mobile:justify-center mobile:items-center mobile:flex-col mobile:text-center z-[50] mobile:pb-[20vw]">
              <h1
                data-para-anim
                className="title-1 aeonik leading-[1.15] mobile:text-[12.5vw]"
              >
                Advancing Healthcare for Generations to Come
              </h1>
              <p data-para-anim className="max-w-[30vw] mt-[3vw] mb-[4vw] content-p tablet:text-[2vw] tablet:max-w-[40vw] mobile:max-w-[90vw] mobile:text-center">
                  At the heart of our mission is a commitment to improving
                  global health by making quality care more affordable and
                  accessible for all.
              </p>
            </div>
            <div className="absolute right-0 bottom-0 h-full mobile:bottom-[-5%]">
              <div className="w-[77vw] overflow-hidden h-full tablet:w-[100vw] tablet:h-[100%] mobile:w-[100vw] mobile:h-[60%] mobile:mt-[80%]">
                <video
                  poster="/assets/about/about-hero-poster.webp"
                  autoPlay
                  loop
                  muted
                  src={videoSrc}
                  className="w-full h-full object-cover object-left tablet:object-center scale-[1.05] mobile:object-center"
                  playsInline
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
