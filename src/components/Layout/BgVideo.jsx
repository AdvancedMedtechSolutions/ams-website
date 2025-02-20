import { useEffect, useRef } from "react";

const BgVideo = ({ videoSrc }) => {
    const videoRef = useRef();

    useEffect(() => {
        const video = videoRef.current;
        setTimeout(() => {
            video.src = videoSrc;
        }, 3000);
    }, [videoSrc]);

    return (
        <>
            <div className="fixed z-[-1] top-0 left-0 h-screen w-screen pointer-events-none bgFadeIn">
                <video ref={videoRef} loop autoPlay playsInline muted className="w-full h-full object-cover"/>
            </div>
        </>
    )
}

export default BgVideo;