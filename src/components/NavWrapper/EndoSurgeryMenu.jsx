import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { NavLink } from './NavLink';
import { ArrowLeft } from 'lucide-react';

export default function EndoSurgeryMenu({ onBack }) {
  const menuRef = useRef(null);

  useEffect(() => {
    const links = menuRef.current.querySelectorAll("li");
    gsap.fromTo(links, { yPercent: 100, autoAlpha: 0 }, { yPercent: 0, autoAlpha: 1, duration: 0.5, stagger: 0.05 });
  }, []);

  return (
    <div className="flex gap-5 items-start relative mobile:pt-[10vw]" ref={menuRef}>
      <div className='absolute left-[12%] top-[-2.5vw] mobile:top-[5vw] mobile:left-[20%]'>
        <NavLink href="/endo" linkText="Endo Surgery" />
      </div>
      <button className="absolute top-[-2.9vw] mobile:top-[5vw] h-[2.5vw] w-[2.5vw] p-[0.5vw] tablet:w-8 tablet:h-8 tablet:p-1.5 mobile:h-8 mobile:w-8 mobile:p-1.5 flex items-center justify-center rounded-full border border-black/50 group hover:bg-black duration-300" onClick={onBack}>
        <ArrowLeft className='w-full h-full group-hover:text-white duration-300' />
      </button>
      {/* <button className="h-[2vw] w-[2vw] p-[0.5vw] tablet:w-8 tablet:h-8 tablet:p-1.5 mobile:h-8 mobile:w-8 mobile:p-1.5 flex items-center justify-center rounded-full border border-black/50 group hover:bg-black duration-300" onClick={onBack}>
        <ArrowLeft className='w-full h-full group-hover:text-white duration-300' />
      </button> */}
      <div className='flex items-start gap-[3vw] pt-2 mobile:flex-col mobile:gap-[5vw] tablet:pt-7 mobile:pt-[5vw]'>
        <ul className='space-y-[0.2vw] mobile:space-y-1'>
          <li className='font-normal text-[1.2vw] tablet:text-[2.2vw] mobile:text-[5vw]'>ADVASTAP Series</li>
          <li><NavLink href="/advastap" linkText="Hemorrhoid Stapler" /></li>
          <li><NavLink href="/advastaplc" linkText="Linear Cutter" /></li>
          <li><NavLink href="/advastapcs" linkText="Circular Stapler" /></li>
          <li><NavLink href="/skinstapler" linkText="Skin Stapler" /></li>
          <li><NavLink href="/endolc" linkText="Endoscopic Linear Cutter" /></li>
          <li><NavLink href="/poweredlc" linkText="Powered Linear Cutter" /></li>
          <li><NavLink href="/reloads" linkText="Endoscopic Reloads" /></li>
        </ul>
        <ul className='space-y-[0.2vw] mobile:space-y-1'>
          <li className='font-normal text-[1.2vw] tablet:text-[2.2vw] mobile:text-[5vw]'>Ligation Solutions</li>
          <li><NavLink className='uppercase' href="/ligation-solutions" linkText="Advaclip" /></li>
        </ul>
      </div>
    </div>
  );
}
