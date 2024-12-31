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
          <NavLink href="/wound-care" linkText="Wound Care" />
        </div>
        <button className="absolute top-[-2.9vw] mobile:top-[4vw] h-[2.5vw] w-[2.5vw] p-[0.5vw] tablet:w-8 tablet:h-8 tablet:p-1.5 mobile:h-8 mobile:w-8 mobile:p-1.5 flex items-center justify-center rounded-full border border-black/50 group hover:bg-black duration-300" onClick={onBack}>
          <ArrowLeft className='w-full h-full group-hover:text-white duration-300' />
        </button>
        <div className='space-y-[1vw]'>
          <div className='flex items-start gap-[1vw] pt-1 mobile:flex-col mobile:gap-[5vw] tablet:pt-7 mobile:pt-[10vw]'>
            <ul className='space-y-[0.2vw] w-[15vw] tablet:w-[28vw] mobile:w-full'>
              <li className='font-normal text-[1.3vw] tablet:text-[2.2vw] mobile:text-[5vw]'>Absorbable Sutures</li>
              <li><NavLink className='uppercase' href="/advacryl" linkText="Advacryl" /></li>
              <li><NavLink className='uppercase' href="/advacrylplus" linkText="Advacryl Plus" /></li>
              <li><NavLink className='uppercase' href="/advacryl-rapid" linkText="Advacryl Rapid" /></li>
              <li><NavLink className='uppercase' href="/advamryl" linkText="Advamryl" /></li>
              <li><NavLink className='uppercase' href="/advapd" linkText="Advapd" /></li>
              <li><NavLink className='uppercase' href="/advacat" linkText="Advacat" /></li>
            </ul>
            <ul className='space-y-[0.2vw]'>
              <li className='font-normal text-[1.3vw] tablet:text-[2.2vw] mobile:text-[5vw]'>Non Absorbable Sutures</li>
              <li><NavLink className='uppercase' href="/advalene" linkText="Advalene" /></li>
              <li><NavLink className='uppercase' href="/advabond" linkText="Advabond" /></li>
              <li><NavLink className='uppercase' href="/advalon" linkText="Advalon" /></li>
              <li><NavLink className='uppercase' href="/advasyl" linkText="Advasyl" /></li>
              <li><NavLink href="/bondtape#umbilical-tape" linkText="Umbilical Cotton Tape" /></li>
              <li><NavLink className='uppercase' href="/bondtape" linkText="Advabond tape" /></li>
            </ul>
          </div>
          <div className='flex items-start gap-[1vw] pt-2 tablet:pt-4 mobile:flex-col mobile:pt-[5vw]'>
            <ul className='space-y-[0.2vw] w-[15vw] tablet:w-[28vw] mobile:w-full'>
              <li className='font-normal text-[1.3vw] tablet:text-[2.2vw] mobile:text-[5vw]'>Knotless Sutures</li>
              <li><NavLink className='uppercase' href="/knotless-tissue-control-device" linkText="Advagrip" /></li>
              {/* <li><NavLink className='!text-[1.2vw] tablet:!text-[2.2vw] font-normal !mt-[1vw] tablet:!mt-[2vw] mobile:!text-[5vw] mobile:!mt-[5vw]' href="/advakit" linkText="ADVAKIT" /></li> */}
            </ul>
            <ul className='space-y-[0.2vw] mobile:hidden'>
              <li className='font-normal text-[1.2vw] tablet:text-[2.2vw] mobile:text-[5vw]'>Others</li>
              <li><NavLink className='uppercase' href="/advaspong" linkText="Advaspong" /></li>
              <li><NavLink className='uppercase' href="/advakit" linkText="Advakit" /></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}