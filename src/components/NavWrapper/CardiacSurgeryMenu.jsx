import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowLeft } from 'lucide-react';
import { NavLink } from './NavLink';

export default function CardiacSurgeryMenu({ onBack }) {
  const menuRef = useRef(null);

  useEffect(() => {
    const links = menuRef.current.querySelectorAll("li");
    gsap.fromTo(links, { yPercent: 100, autoAlpha: 0 }, { yPercent: 0, autoAlpha: 1, duration: 0.5, stagger: 0.05 });
  }, []);

  return (
    <>
      <div className="mobile:pt-[10vw]" ref={menuRef}>
        <div className='flex gap-3 items-start'>
          <button className="h-[2.5vw] w-[2.5vw] p-[0.5vw] tablet:w-8 tablet:h-8 tablet:p-1.5 mobile:h-8 mobile:w-8 mobile:p-1.5 flex items-center justify-center rounded-full border border-black/50 group hover:bg-black duration-300" onClick={onBack}>
            <ArrowLeft className='w-full h-full group-hover:text-white duration-300' />
          </button>
          <NavLink className='mt-[0.4vw]' href="/cardiovascular-solutions" linkText="Cardiac Surgery"/>
        </div>
        <div className='flex items-start gap-[3vw] pt-4 mobile:flex-col mobile:gap-[5vw]'>
          <ul className='space-y-[0.2vw] mobile:space-y-1'>
            <li className='font-normal text-[1.3vw] tablet:text-[2.2vw] mobile:text-[5vw]'>Cardiac Sutures</li>
            <li><NavLink className='uppercase' href="/advabond-cv" linkText="Advabond" /></li>
            <li><NavLink className='uppercase' href="/advalene-cv" linkText="Advalene" /></li>
            <li><NavLink className='uppercase' href="/advasteel-cv" linkText="Advasteel" /></li>
            <li><NavLink className='uppercase' href="/advapacer-and-wax" linkText="Advawax" /></li>
            <li><NavLink className='uppercase' href="/advapacer-and-wax" linkText="AdvaPacer" /></li>
            <li><NavLink href="/bondtape" linkText="Umbilical Cotton Tape" /></li>
          </ul>
          <ul className='space-y-[0.2vw] mobile:space-y-1'>
            <li className='font-normal text-[1.3vw] tablet:text-[2.2vw] mobile:text-[5vw]'>Ligation Solutions</li>
            <li><NavLink className='uppercase' href="/ligation-solutions" linkText="Advaclip" /></li>
          </ul>
        </div>
      </div>
    </>
  );
}