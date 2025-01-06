import React, { useEffect, useRef } from "react";

const Hero = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        const videoSrc = "/assets/endo/Endo.mp4";
        const video = videoRef.current;
        setTimeout(() => {
            video.src = videoSrc;
        }, 2000);
    }, []);

    return (
        <section className='hero-container dark ' id="hero">
            <div className="w-[100vw] h-[100vh] relative overflow-hidden tablet:h-[80vh] mobile:h-[180vw]">
                <div className="w-full h-full absolute mobile:static mobile:h-[75vw] ">
                    <video
                        ref={videoRef}
                        playsInline
                        autoPlay
                        loop
                        muted
                        className="w-full h-full object-cover scale-x-[-1]"
                        poster="/assets/endo/hero-poster.webp"
                    />
                </div>
                <div className="px-[12%] relative mobile:px-[5%]">
                    <div className="flex h-dvh w-full flex-col justify-center items-start tablet:h-[60vh] mobile:justify-start mobile:pt-[10vw] mobile:h-[80vw]">
                        <div className="w-[70%] mobile:w-full tablet:w-full">
                            <h1 className='title-1 w-full aeonik  leading-[1] mobile:text-center'>
                                <span data-para-anim className='leading-[1.21] overflow-hidden text-[#FFFFFF] mobile:w-full  mobile:text-[#111111]  mobile:text-center mobile:!drop-shadow-none  text-shadow  '>
                                    Breaking New Ground in Endo Surgery
                                </span>
                            </h1>
                            <p className={` max-w-[32vw] mt-[3vw] mb-[4vw] content-p mobile:text-center  mobile:max-w-[100%] tablet:max-w-[50vw] mobile:my-[7vw] tablet:text-[2.5vw] text-shadow-para`}>
                                <span data-para-anim className='text-[#FFFFFF]  mobile:text-[#111111]   leading-[1.4]  mobile:!drop-shadow-none '>
                                From advanced surgical stapling solutions to seamless transitions across open and laparoscopic procedures, we deliver unmatched precision and reliability. The future of surgery is here—bold, transformative, and at your fingertips!
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;