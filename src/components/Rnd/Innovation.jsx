import Image from "next/image";


export default function Innovation() {
  return (
    <>
      <section className="pt-[0] mobile:py-[10%]" id="Innovation">
        <div className="w-screen h-screen flex flex-col items-center justify-center gap-[3vw] tablet:h-[50vh] mobile:h-full mobile:gap-[12vw]">
        <div>
        <h2
data-para-anim className="title-2 aeonik mobile:text-center ">
        Breakthrough Innovations
        </h2>
      </div>
      <div className="flex items-center justify-between w-full h-full gap-[1.5vw]  mobile:flex-col mobile:gap-[10vw]">
        <div className="h-[90%] w-[30%] relative flex items-center justify-center mobile:w-[90vw] mobile:h-[100vw] ">
          <Image src="/assets/rnd/innovation-left.png"
          fill
          alt="Innovation "
          className="mobile:rounded-[20px]"
          />
          <div className="text-white absolute  text-[2.5vw] font-light w-full h-full flex justify-center items-center   tablet:text-[3.2vw] mobile:text-[6vw]" >
            <p>Knotless tissue
            control device</p>
          </div>
        </div>

        <div className="h-[90%] w-[30%] relative flex items-center justify-center mobile:w-[90vw] mobile:h-[100vw]">
          <Image src="/assets/rnd/innovation-center.png"
          fill
          alt="Innovation "
           className="mobile:rounded-[20px]"
          />
          <div className="text-white absolute  text-[2.5vw] font-light   tablet:text-[3.2vw] mobile:text-[6vw]">
            <p>Heart Valves</p>
          </div>
        </div>

        <div className="h-[90%] w-[30%] relative flex items-center justify-center mobile:w-[90vw] mobile:h-[100vw]">
          <Image src="/assets/rnd/innovation-right.png"
          fill
          alt="Innovation "
           className="mobile:rounded-[20px]"
          />
          <div className="text-white absolute text-[2.5vw] font-light   tablet:text-[3.2vw] mobile:text-[6vw]">
            <p>Soft Nylon</p>
          </div>
        </div>
          
</div>
        </div>
      </section>
    </>
  );
}