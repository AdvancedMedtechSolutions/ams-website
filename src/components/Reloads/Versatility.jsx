import React, { useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";

const Versatility = () => {
  useEffect(() => {
    const hoverEffect = (dot, text) => {
      const dotElement = document.querySelector(dot);
      const textElement = document.querySelector(text);

      gsap.set(textElement, { autoAlpha: 0, y: 20 });

      dotElement.addEventListener("mouseenter", () => {
        gsap.to(textElement, { autoAlpha: 1, y: 0, duration: 0.5, ease: "power2.out" });
      });

      dotElement.addEventListener("mouseleave", () => {
        gsap.to(textElement, { autoAlpha: 0, y: 20, duration: 0.5, ease: "power2.in" });
      });
    };

    hoverEffect(".dot-1", ".text-1");
    hoverEffect(".dot-2", ".text-2");
    hoverEffect(".dot-3", ".text-3");
  }, []);

  return (
    <section className="overflow-hidden py-[2%] mobile:pt-[10%] mobile:pb-0 relative" id="versatility">
      <div className="w-screen h-[55vw] versatality-container container-lg mobile:h-[250vw] tablet:h-[70vh]">
        <div className="w-full h-full flex flex-col items-center justify-center relative gap-[5vw] py-[5vw] mobile:h-fit mobile:static">
          <div className="w-full h-full flex flex-col items-center mobile:mb-[10vw] mobile:flex mobile:justify-center">
            <h2
              data-para-anim
              className="title-2 aeonik text-center w-[60%] mobile:text-center mobile:w-full"
            >
              Versatility Meets Strength
            </h2>
          </div>
          <div className="w-full h-full flex flex-col items-center justify-center">
            <div className="h-[40vw] w-[70vw] absolute scale-[1] left-[-10%] bottom-[-5%] mobile:order-1 mobile:w-[180vw] mobile:h-[120vw] mobile:right-[-80%] mobile:left-auto mobile:top-[35%] mobile:absolute tablet:w-[100vw] tablet:h-[60vw] fadeUp">
              <Image
                src="/assets/reloads/reloads2.png"
                fill
                alt="Reloads Product"
                className="object-contain mobile:rotate-[-80deg]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-[100%] w-[100vw] z-[-1] top-0 left-0">
        <Image
          src="/assets/reloads/versatility-bg.png"
          fill
          alt="Ergonomic bg"
          className="object-cover z-[-1]"
        />
      </div>

      <div className="text-1 absolute bottom-[30%] left-[40%] mobile:bottom-[50%] mobile:left-[10%] opacity-0 tablet:bottom-[10%]">
        <p
          data-para-anim
          className="text-[1.67vw] font-light mobile:text-[4.5vw] mobile:w-[50%] mobile:text-center mobile:leading-[1.2] tablet:text-[3vw]"
        >
          Three rows of varied height staples
        </p>
      </div>
      <div className="text-2 absolute top-[40%] left-[15%] mobile:top-[55%] tablet:top-[45%] opacity-0">
        <p
          data-para-anim
          className="text-[1.67vw] font-light mobile:text-[4.5vw] mobile:w-[60%] mobile:text-center tablet:text-[3vw]"
        >
          <span>Drop shaped anvil pockets</span>
        </p>
      </div>
      <div className="text-3 absolute right-[25%] top-[45%] opacity-0 mobile:right-[10%] mobile:top-[12%]  mobile:w-[50vw] mobile:h-[20vw] mobile:mt-[15vw] mobile:flex mobile:flex-col tablet:w-[35vw] tablet:top-[30%]">
        <Image
          src="/assets/reloads/stepped.png"
          height={200}
          width={200}
          alt="stepped"
          className="object-contain w-full h-full"
        />
        <p
          data-para-anim
          className="text-[1.67vw] font-light mobile:text-[4vw] mobile:text-center tablet:text-[3vw] tablet:text-center"
        >
          Stepped cartridge face
        </p>
      </div>
      <span className="dot-1 absolute top-[57%] left-[39.5%] w-[2vw] h-[2vw] bg-white/30 rounded-full flex justify-center items-center mobile:w-[8vw] mobile:h-[8vw] mobile:right-[17%] mobile:top-[47%] mobile:left-auto tablet:w-[3.5vw] tablet:h-[3.5vw] tablet:top-[71%] tablet:left-[50%] z-[5] cursor-pointer">
        <span className="w-[0.8vw] h-[0.8vw] bg-white rounded-full mobile:w-[4vw] mobile:h-[4vw] tablet:w-[2vw] tablet:h-[2vw]"></span>
      </span>
      <span className="dot-2 absolute top-[52%] left-[31%] w-[2vw] h-[2vw] bg-white/30 rounded-full flex justify-center items-center mobile:w-[8vw] mobile:h-[8vw] mobile:right-[30%] mobile:top-[55%] mobile:left-auto tablet:w-[3.5vw] tablet:h-[3.5vw] tablet:top-[61%] tablet:left-[70%] z-[5] cursor-pointer">
        <span className="w-[0.8vw] h-[0.8vw] bg-white rounded-full mobile:w-[4vw] mobile:h-[4vw] tablet:w-[2vw] tablet:h-[2vw]"></span>
      </span>
      <span className="dot-3 absolute top-[52%] left-[47%] w-[2vw] h-[2vw] bg-white/30 rounded-full flex justify-center items-center mobile:w-[8vw] mobile:h-[8vw] mobile:right-[17%] mobile:top-[38%] mobile:left-auto tablet:w-[3.5vw] tablet:h-[3.5vw] tablet:top-[60%] tablet:left-[45%] z-[5] cursor-pointer">
        <span className="w-[0.8vw] h-[0.8vw] bg-white rounded-full mobile:w-[4vw] mobile:h-[4vw] tablet:w-[2vw] tablet:h-[2vw]"></span>
      </span>
    </section>
  );
};

export default Versatility;
