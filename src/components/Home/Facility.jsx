/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import PrimaryButton from "../Button/PrimaryButton";
export default function Facility() {

    return (

        <>
            <section className="pt-[0] pb-[10%] mobile:pb-[20%] tablet:pb-[12%]" id="facility">
                <div className="container-lg relative virtual rounded-[2.5vw] flex items-center justify-between px-[6%] py-[3%]  bg-gradient-to-b from-[#F9F9F9] to-[#E5E5E5] ease-in mobile:flex-col-reverse mobile:rounded-[9vw] mobile:py-[4.5vw] tablet:flex tablet:flex-col tablet:justify-between tablet:gap-[5vw] tablet:pb-[7vw] tablet:pt-[5vw]">
                    <div className="w-[45%] relative z-10 space-y-[2.5vw] duration-300 tablet:order-1 tablet:w-full mobile:w-[89%] mobile:text-center mobile:py-[5vw] mobile:flex-col mobile:items-center mobile:justify-center mobile:space-y-[10vw]">
                        <h2 data-para-anim className="title-2 aeonik">
                        Delve Deeper into the World of AMS
                        </h2>
                        <p data-para-anim className="content-p-md mr-[6vw] mobile:mr-[0vw] ">
                        Experience the Future of Healthcare: Discover our innovative ecosystem with an exclusive virtual tour.  
                        </p>
                        <div className="w-full flex mobile:justify-center pt-[2vw] fadeUp">
                            <PrimaryButton className={""} link={"/360/index.html"} text={"Virtual Tour"} />
                        </div>
                    </div>
                    <div className=" w-[49.5%] h-[26.2vw] rounded-[2.5vw] overflow-hidden fadeUp mobile:h-[100vw] mobile:w-[80vw] mobile:rounded-[6vw] tablet:w-[80vw] tablet:h-[30vh]">
                        <Image data-speed="0.7"
                            className="w-full object-cover h-full "
                            src="/assets/home/virtual.jpg"
                            alt="facility"
                            width={741}
                            height={503}
                        />
                        <Image
                            src="/assets/icons/360.svg"
                            alt="360 icon"
                            className="absolute w-[15%] bottom-8 right-8"
                            width={100}
                            height={100}
                        />
                    </div>
                    
                </div>
            </section>
        </>
    )
}