import Image from "next/image";
import PrimaryButton from "../Button/PrimaryButton";

export default function Discover() {
  return (
    <>
      <section className="pt-[5%] pb-[10%] mobile:pt-[20%] tablet:pt-[15%]" id="facility">
                <div className=" container-lg virtual rounded-[3vw] flex items-center justify-between px-[7%] py-[4%] bg-white/50  border border-gray-200 mobile:flex-col-reverse mobile:rounded-[9vw] tablet:flex tablet:flex-col tablet:justify-between tablet:gap-[5vw] tablet:rounded-[4vw] tablet:py-[5%]">
                    <div className="w-[45%] relative z-10 space-y-[3.5vw] duration-300 tablet:order-1 tablet:w-full mobile:w-[89%] mobile:text-center mobile:py-[5vw] mobile:flex-col mobile:items-center mobile:justify-center mobile:space-y-[10vw]">
                        <h2 data-para-anim className="title-2 aeonik">
                            Delve Deeper into the World of AMS
                        </h2>
                        <p className="content-p mr-[6vw] mobile:mr-[0vw] fadeUp">
                            Experience our facility virtually.
                        </p>
                        <div className="w-full flex mobile:justify-center fadeUp">
                            <PrimaryButton className={"!border-gray-200"} link={"/360/index.html"} text={"Virtual Tour"} />
                        </div>
                    </div>
                    <div className="relative w-[50%] h-[26vw] rounded-[3vw] overflow-hidden fadeUp mobile:h-[100vw] mobile:w-[80vw] tablet:w-[80vw] tablet:h-[30vh] mobile:rounded-[6vw]">
                        <Image
                            className="w-full object-cover "
                            src="/assets/rnd/rnd-discover.png"
                            alt="rnd discover img"
                            fill
                        />
                        <img
                            src="/assets/icons/360.svg"
                            alt="360 icon"
                            className="absolute w-[15%] bottom-8 right-8"
                        />
                    </div>
                </div>
            </section>
    </>
  );
}
