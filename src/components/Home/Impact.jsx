import PrimaryButton from "../Button/PrimaryButton";
import gsap from "gsap";
import LazyVideo from "../layoutComponents/LazyVideo";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Impact() {

    return (
        <>
            <section className="p-y-sm mt-[5%] mobile:mt-[10%]" id="impact">
                <div className="mx-auto w-[90%] relative px-[8%] h-full py-[6%] overflow-hidden rounded-[2.5vw] mobile:w-[100%] mobile:py-0 mobile:px-0 mobile:flex-col mobile:items-center mobile:justify-center mobile:rounded-none fadeUp">
                <LazyVideo
                    poster={"/assets/home/impact-video-poster.webp"}
                    type="video/mp4"
                    autoPlay
                    loop
                    videoSrc={"/assets/home/impact-video.mp4"}
                    className='w-full h-full object-cover left-0 top-0 absolute mobile:h-[60vw]'
                    />
                    <div className="flex items-center mobile:justify-center mobile:mt-[65vw]">
                        <div className="w-1/2 h-[35vw] relative z-10 space-y-[2vw] tablet:w-[80%] mobile:w-[100%] mobile:h-full tablet:h-[60vw] mobile:flex-col mobile:items-center mobile:justify-center mobile:text-center mobile:space-y-[8vw]">
                            <h2 className="title-2 aeonik leading-[0]">
                                <span data-para-anim className="text-white leading-[1.3] mobile:text-[#111111]">
                                Making an Impact:
                                
                                 Our Global Reach
                                </span>
                            </h2>
                            <p data-para-anim className="text-[1.15vw] font-light leading-[1.7] text-white   mobile:text-[4.5vw] tablet:text-[1.8vw] mobile:text-[#111111]">
                            Our unwavering commitment to global healthcare fuels our relentless pursuit of MedTech innovation, enhancing outcomes in every corner of the world. Our expanding footprint across 116+ countries, empowers us to forge powerful partnerships, creating solutions that make a profound difference in patients’&apos;lives.
                            </p>
                            <div className="w-full flex mobile:justify-center pt-[3vw] fadeUp">
                            <PrimaryButton className={"secondary  !text-white"} link={"/about-us"} text={"Know More"} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
