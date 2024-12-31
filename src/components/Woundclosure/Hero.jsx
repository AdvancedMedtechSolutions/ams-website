import React, { useEffect, useRef } from "react";

const Hero = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        const videoSrc = "/assets/woundclosure/wc-hero-video.mp4";
        const video = videoRef.current;
        setTimeout(() => {
            video.src = videoSrc;
        }, 2000);
    }, []);

    return (
        <section className='hero-container dark' id="hero">
            <div className="w-[100vw] h-[100vh] relative overflow-hidden tablet:h-[80vh] mobile:h-[180vw]">
                <div className="w-full h-full absolute mobile:static mobile:h-[75vw]">
                    <video
                        ref={videoRef}
                        playsInline
                        autoPlay
                        loop
                        muted
                        className="w-full h-full object-cover"
                        poster="/assets/woundclosure/wound-care-video-frame.png"
                    />
                </div>
                <div className="px-[12%] relative mobile:px-[5%]">
                    <div className="flex h-dvh w-full flex-col justify-center items-start tablet:h-[60vh] mobile:justify-start mobile:pt-[10vw]">
                        <div className="w-[80%] mobile:w-full">
                            <h1 className='title-1 w-full aeonik  mobile:!leading-[1] mobile:text-center'>
                                <span data-para-anim className='leading-[1.21] overflow-hidden text-[#FFFFFF] w-[80%] mobile:text-[11vw] mobile:w-full mobile:text-[#111111] mobile:!drop-shadow-none    '>
                                Advancing the Science of Wound Closure
                                </span>
                            </h1>
                            <p className={` max-w-[30vw] mt-[3vw] mb-[4vw] content-p mobile:text-center  mobile:max-w-[100%] tablet:max-w-[50vw] mobile:my-[7vw] tablet:text-[2.5vw]`}>
                                <span data-para-anim className='text-[#FFFFFF]  mobile:text-[#111111] leading-[1.4]  mobile:!drop-shadow-none  '>
                                We offer an impressive portfolio of sutures to provide critical choices for optimal results where every suture is a seal of confidence.
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