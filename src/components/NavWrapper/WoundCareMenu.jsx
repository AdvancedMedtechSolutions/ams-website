
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowLeft } from 'lucide-react';
import { NavLink } from './NavLink';

export default function WoundCareMenu({ onBack }) {
  const menuRef = useRef(null);

  useEffect(() => {
    const links = menuRef.current.querySelectorAll("li");
    gsap.fromTo(links, { yPercent: 100, autoAlpha: 0 }, { yPercent: 0, autoAlpha: 1, duration: 0.5, stagger: 0.05 });
  }, []);

  return (
    <>
      <div className="flex gap-5 items-start relative mobile:pt-[5vw]" ref={menuRef}>
        <div className='absolute left-[10%] top-[-2.6vw] mobile:top-[4vw] mobile:left-[20%]'> 
          <NavLink href="/products/wound-care" linkText="Wound Care" />
        </div>
        <button className="absolute top-[-2.9vw] mobile:top-[4vw] h-[2.5vw] w-[2.5vw] p-[0.5vw] tablet:w-8 tablet:h-8 tablet:p-1.5 mobile:h-8 mobile:w-8 mobile:p-1.5 flex items-center justify-center rounded-full border border-black/50 group hover:bg-black duration-300" onClick={onBack}>
          <ArrowLeft className='w-full h-full group-hover:text-white duration-300' />
        </button>
        <div className='space-y-[1vw]'>
          <div className='flex items-start gap-[1vw] pt-1 mobile:flex-col mobile:gap-[5vw] tablet:pt-7 mobile:pt-[10vw]'>
            <ul className='space-y-[0.2vw] w-[15vw] tablet:w-[28vw] mobile:w-full'>
              <li className='font-normal text-[1.3vw] tablet:text-[2.2vw] mobile:text-[5vw]'>Absorbable Sutures</li>
              <li><NavLink className='uppercase' href="/wound-care/advacryl-polyglactin-910-suture" linkText="Advacryl" /></li>
              <li><NavLink className='uppercase' href="/wound-care/coated-advacryl-plus-antibacterial-polyglactin-910-suture" linkText="Advacryl Plus" /></li>
              <li><NavLink className='uppercase' href="/wound-care/advacryl-rapid-polyglactin-910-suture" linkText="Advacryl Rapid" /></li>
              <li><NavLink className='uppercase' href="/wound-care/advamryl-poliglecaprone-25-suture" linkText="Advamryl" /></li>
              <li><NavLink className='uppercase' href="/wound-care/advapd-polydioxanone-suture" linkText="Advapd" /></li>
              <li><NavLink className='uppercase' href="/wound-care/advacat-gut-suture-chromic-plain" linkText="Advacat" /></li>
            </ul>
            <ul className='space-y-[0.2vw]'>
              <li className='font-normal text-[1.3vw] tablet:text-[2.2vw] mobile:text-[5vw]'>Non Absorbable Sutures</li>
              <li><NavLink className='uppercase' href="/wound-care/advalene-polypropylene-suture" linkText="Advalene" /></li>
              <li><NavLink className='uppercase' href="/wound-care/advabond-polyester-suture" linkText="Advabond" /></li>
              <li><NavLink className='uppercase' href="/wound-care/advalon-polyamide-suture" linkText="Advalon" /></li>
              <li><NavLink className='uppercase' href="/wound-care/advasyl-silk-suture" linkText="Advasyl" /></li>
              <li>
              <a href="/wound-care/advabond-polyester-tape-suture#umbilical-tape" className={`text-[1.3vw] fade-in-0 leading-tight text-body tablet:text-[2.3vw] mobile:text-[5vw] overflow-hidden block relative group aeonik font-light `}>
                <span
                  data-attr="Umbilical Cotton Tape"
                  className="inline-block transition-transform duration-500 ease-out after:absolute after:left-0 after:-bottom-0 after:translate-y-full after:content-[attr(data-attr)] group-hover:-translate-y-full"
                >
                  Umbilical Cotton Tape
                </span>
              </a>
              </li>
              <li><NavLink className='uppercase' href="/wound-care/advabond-polyester-tape-suture" linkText="Advabond tape" /></li>
            </ul>
          </div>
          <div className='flex items-start gap-[1vw] pt-2 tablet:pt-4 mobile:flex-col mobile:pt-[5vw]'>
            <ul className='space-y-[0.2vw] w-[15vw] tablet:w-[28vw] mobile:w-full'>
              <li className='font-normal text-[1.3vw] tablet:text-[2.2vw] mobile:text-[5vw]'>Knotless Sutures</li>
              <li><NavLink className='uppercase' href="/wound-care/advagrip-knotless-barbed-suture" linkText="Advagrip" /></li>
              {/* <li><NavLink className='!text-[1.2vw] tablet:!text-[2.2vw] font-normal !mt-[1vw] tablet:!mt-[2vw] mobile:!text-[5vw] mobile:!mt-[5vw]' href="/wound-care/surgical-kits" linkText="ADVAKIT" /></li> */}
            </ul>
            <ul className='space-y-[0.2vw] mobile:hidden'>
              <li className='font-normal text-[1.2vw] tablet:text-[2.2vw] mobile:text-[5vw]'>Others</li>
              <li><NavLink className='uppercase' href="/haemostats-gelatin-sponge" linkText="Advaspong" /></li>
              <li><NavLink className='uppercase' href="/wound-care/surgical-kits" linkText="Advakit" /></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}