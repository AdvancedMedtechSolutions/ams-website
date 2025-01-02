import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { NavLink } from './NavLink';
import { ArrowLeft } from 'lucide-react';

export default function ManufacturingMenu({ onBack }) {
  const menuRef = useRef(null);

  useEffect(() => {
    const links = menuRef.current.querySelectorAll("li");
    gsap.fromTo(links, { yPercent: 100, autoAlpha: 0 }, { yPercent: 0, autoAlpha: 1, duration: 0.5, stagger: 0.05 });
  }, []);

  return (
    <div className="flex gap-5 items-start mobile:pt-[10vw]" ref={menuRef}>
      <button className="h-[2.5vw] w-[2.5vw] p-[0.5vw] tablet:w-8 tablet:h-8 tablet:p-1.5 mobile:h-8 mobile:w-8 mobile:p-1.5 flex items-center justify-center rounded-full border border-black/50 group hover:bg-black duration-300" onClick={onBack}>
        <ArrowLeft className='w-full h-full group-hover:text-white duration-300'/>
      </button>
      <div className='flex items-start gap-[3vw] pt-1'>
        <ul className='space-y-[0.2vw] tablet:space-y-1 mobile:space-y-2'>
          <li><NavLink href="/manufacturing" linkText="Manufacturing" /></li>
          <li><NavLink href="/research-and-development" linkText="Research and Development" /></li>
          <li><NavLink href="/r&d/suture-needle-technology" linkText="Advanced Needle Technology" /></li>
        </ul>
      </div>
    </div>
  );
}
