
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { NavLink } from './NavLink';
import { ArrowLeft } from 'lucide-react';


export default function HerniaSolutionsMenu({ onBack }) {
  const menuRef = useRef(null);

  useEffect(() => {
    const links = menuRef.current.querySelectorAll("li");
    gsap.fromTo(links, { yPercent: 100, autoAlpha: 0 }, { yPercent: 0, autoAlpha: 1, duration: 0.5, stagger: 0.05 });
  }, []);


  return (
    <div className="flex gap-5 items-start mobile:pt-[10vw]" ref={menuRef}>
      <button className="h-[2.5vw] w-[2.5vw] p-[0.5vw] tablet:w-8 tablet:h-8 tablet:p-1.5 mobile:h-8 mobile:w-8 mobile:p-1.5 flex items-center justify-center rounded-full border border-black/50 group hover:bg-black duration-300" onClick={onBack}>
        <ArrowLeft className='w-full h-full group-hover:text-white duration-300' />
      </button>
      <div className='flex items-start gap-[3vw] pt-1'>
        <ul className='space-y-[0.2vw] mobile:space-y-1'>
          <li><NavLink href="/products/hernia-solutions" linkText="Hernia Solutions" /></li>
          <li>
          <a href="/hernia-solutions/advamesh-hernia-mesh#polypropylene-mesh" className={`text-[1.3vw] fade-in-0 leading-tight text-body tablet:text-[2.3vw] mobile:text-[5vw] overflow-hidden block relative group aeonik font-light `}>
                <span
                  data-attr="ADVAMESH"
                  className="inline-block transition-transform duration-500 ease-out after:absolute after:left-0 after:-bottom-0 after:translate-y-full after:content-[attr(data-attr)] group-hover:-translate-y-full"
                >
                  ADVAMESH
                </span>
              </a>
            </li>
          <li>
          <a href="/hernia-solutions/advamesh-hernia-mesh#medium-weight-mesh" className={`text-[1.3vw] fade-in-0 leading-tight text-body tablet:text-[2.3vw] mobile:text-[5vw] overflow-hidden block relative group aeonik font-light `}>
                <span
                  data-attr="ADVAMESH Medium Weight"
                  className="inline-block transition-transform duration-500 ease-out after:absolute after:left-0 after:-bottom-0 after:translate-y-full after:content-[attr(data-attr)] group-hover:-translate-y-full"
                >
                  ADVAMESH Medium Weight
                </span>
              </a>
          </li>
          <li>
          <a href="/hernia-solutions/advamesh-hernia-mesh#macroporous-mesh" className={`text-[1.3vw] fade-in-0 leading-tight text-body tablet:text-[2.3vw] mobile:text-[5vw] overflow-hidden block relative group aeonik font-light `}>
                <span
                  data-attr="ADVAMESH Macroporous"
                  className="inline-block transition-transform duration-500 ease-out after:absolute after:left-0 after:-bottom-0 after:translate-y-full after:content-[attr(data-attr)] group-hover:-translate-y-full"
                >
                  ADVAMESH Macroporous
                </span>
              </a>
           </li>
        </ul>
      </div>
    </div>
  ); 
}  
