import React, { useEffect, useRef } from "react";

const Hero = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        const videoSrc = "/assets/ic/ic-hero-video.mp4";
        const video = videoRef.current;
        setTimeout(() => {
            video.src = videoSrc;
        }, 2000);
    }, []);

    return (
        <section className='hero-container dark' id="hero">
            <div className="w-[100vw] h-[100vh] relative overflow-hidden tablet:h-[80vh] mobile:h-[210vw]">
                <div className="w-full h-full absolute mobile:static mobile:h-[75vw] ">
                    <video
                        ref={videoRef}
                        playsInline
                        autoPlay
                        loop
                        muted
                        className="w-full h-full object-cover"
                        poster="/assets/ic/ic-hero-video-frame.webp"
                    />
                </div>
                <div className="px-[12%] relative mobile:px-[5%] ">
                    <div className="flex h-dvh w-full flex-col justify-center items-start tablet:h-[60vh] mobile:justify-start  tablet:pt-[10vw] mobile:pt-[10vw] mobile:h-[90vw]">
                        <div className="w-[80%] mobile:w-full tablet:w-full">
                            <h1 className='title-1 w-full aeonik  leading-[1] mobile:text-center'>
                                <span data-para-anim className='leading-[1.21] overflow-hidden text-[#FFFFFF] w-[80%] mobile:w-full mobile:text-center  mobile:text-[#111111] mobile:!drop-shadow-none  '>
                                Advancing the Science of Flow Restoration
                                </span>
                            </h1>
                            <p className={` max-w-[36vw] mt-[3vw] mb-[4vw] content-p mobile:text-center  mobile:max-w-[120vw] tablet:max-w-[60vw] mobile:my-[7vw] tablet:text-[2.5vw]
                            `}>
                                <span data-para-anim className='text-[#FFFFFF] leading-[1.4] 
                                mobile:text-[#111111] mobile:!drop-shadow-none  '>
                                Every heartbeat tells a story of life, and at AMS, we are rewriting those stories with groundbreaking innovations. Our relentless pursuit of excellence is transforming the science of flow restoration, bringing hope and healing to millions affected by cardiovascular diseases.
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