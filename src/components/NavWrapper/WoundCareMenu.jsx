import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowLeft } from "lucide-react";
import { NavLink } from "./NavLink";

export default function WoundCareMenu({ onBack }) {
  const menuRef = useRef(null);

  useEffect(() => {
    const links = menuRef.current.querySelectorAll("li");
    gsap.fromTo(
      links,
      { yPercent: 100, autoAlpha: 0 },
      { yPercent: 0, autoAlpha: 1, duration: 0.5, stagger: 0.05 }
    );
  }, []);

  return (
    <>
      <div
        className="flex gap-5 items-start relative mobile:pt-[5vw]"
        ref={menuRef}
      >
        <div className="absolute left-[20%] mobile:top-[21vw] mobile:left-[18%] tablet:left-[18%]">
          <NavLink href="/products/wound-care" linkText="Wound Care" />
        </div>
        <button
          className="absolute mobile:top-[20vw] h-[2.5vw] w-[2.5vw] p-[0.5vw] tablet:w-8 tablet:h-8 tablet:p-1.5 mobile:h-8 mobile:w-8 mobile:p-1.5 flex items-center justify-center rounded-full border border-black/50 group hover:bg-black duration-300"
          onClick={onBack}
        >
          <ArrowLeft className="w-full h-full group-hover:text-white duration-300" />
        </button>
        <div className="space-y-[1vw] ml-[3.8vw] mobile:ml-[12vw] mt-[2.5vw] mobile:mt-[17vw] tablet:ml-[6vw] tablet:mt-[1.5vw]">
          <div className="flex items-start gap-[1vw] pt-1 mobile:flex-col mobile:gap-[5vw] tablet:pt-7 mobile:pt-[10vw]">
            <ul className="space-y-[0.2vw] w-[15vw] tablet:w-[28vw] mobile:w-full mobile:space-y-1">
              <li>
                {" "}
                <a
                  href="/products/wound-care#suture-carousel-first"
                  className={`text-[1.3vw] fade-in-0 leading-tight text-body tablet:text-[2.3vw] mobile:text-[5vw] overflow-hidden block relative group aeonik font-light `}
                >
                  <span
                    data-attr="Absorbable Sutures"
                    className="inline-block transition-transform duration-500 ease-out after:absolute after:left-0 after:-bottom-0 after:translate-y-full after:content-[attr(data-attr)] group-hover:-translate-y-full"
                  >
                    Absorbable Sutures
                  </span>
                </a>
              </li>
              <li>
                {" "}
                <a
                  href="/products/wound-care#suture-carousel-second"
                  className={`text-[1.3vw] fade-in-0 leading-tight text-body tablet:text-[2.3vw] mobile:text-[5vw] overflow-hidden block relative group aeonik font-light `}
                >
                  <span
                    data-attr="Non Absorbable Sutures"
                    className="inline-block transition-transform duration-500 ease-out after:absolute after:left-0 after:-bottom-0 after:translate-y-full after:content-[attr(data-attr)] group-hover:-translate-y-full"
                  >
                    Non Absorbable Sutures
                  </span>
                </a>
              </li>
              <li>
                <NavLink
                  className=""
                  href="/wound-care/advagrip-knotless-barbed-suture"
                  linkText="Knotless Sutures"
                />
              </li>
              <li>
                <NavLink
                  className=""
                  href="/haemostats-gelatin-sponge"
                  linkText="Haemostats"
                />
              </li>
              <li>
                <NavLink
                  className=""
                  href="/wound-care/surgical-kits"
                  linkText="Surgical Kits"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
