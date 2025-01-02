
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
          <NavLink className='mt-[0.4vw]' href="/products/cardiac-surgery" linkText="Cardiac Surgery" />
        </div>
        <div className='flex items-start gap-[3vw] pt-4 mobile:flex-col mobile:gap-[5vw]'>
          <ul className='space-y-[0.2vw] mobile:space-y-1'>
            <li className='font-normal text-[1.3vw] tablet:text-[2.2vw] mobile:text-[5vw]'>Cardiac Sutures</li>
            <li><NavLink className='uppercase' href="/cardiac-surgery/advabond-polyester-cardiovascular-suture" linkText="Advabond" /></li>
            <li><NavLink className='uppercase' href="/cardiac-surgery/advalene-polypropylene-cardiovascular-suture" linkText="Advalene" /></li>
            <li><NavLink className='uppercase' href="/cardiac-surgery/advasteel-sternotomy-cardiovascular-suture" linkText="Advasteel" /></li>
            <li>
              <a href="/cardiac-surgery/advapacer-316L-stainless-steel-sternotomy-suture#advawax" className={`text-[1.3vw] fade-in-0 leading-tight text-body tablet:text-[2.3vw] mobile:text-[5vw] overflow-hidden block relative group aeonik font-light uppercase`}>
                <span
                  data-attr="Advawax"
                  className="inline-block transition-transform duration-500 ease-out after:absolute after:left-0 after:-bottom-0 after:translate-y-full after:content-[attr(data-attr)] group-hover:-translate-y-full"
                >
                  Advawax
                </span>
              </a>
            </li>
            <li>
              <NavLink className='uppercase' href="/cardiac-surgery/advapacer-316L-stainless-steel-sternotomy-suture" linkText="AdvaPacer" /></li>
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
          </ul>
          <ul className='space-y-[0.2vw] mobile:space-y-1'>
            <li className='font-normal text-[1.3vw] tablet:text-[2.2vw] mobile:text-[5vw]'>Ligation Solutions</li>
            <li><NavLink className='uppercase' href="/ligation-solutions/advaclip-ligation-clips" linkText="Advaclip" /></li>
          </ul>
        </div>
      </div>
    </>
  );
}