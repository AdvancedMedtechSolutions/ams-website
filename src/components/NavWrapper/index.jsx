import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ProductsMenu from './ProductsMenu';
import WoundCareMenu from './WoundCareMenu';
import EndoSurgeryMenu from './EndoSurgeryMenu';
import ManufacturingMenu from './ManufacturingMenu';
import HerniaSolutionsMenu from './HerniaSolutionsMenu';
import InterventionalCardiologyMenu from './InterventionalCardiologyMenu';
import CardiacSurgeryMenu from './CardiacSurgeryMenu';
import { NavLink, NavButton } from './NavLink';
import { ChevronRight } from 'lucide-react';

export default function NavWrapper({ isMenuOpen }) {
    const [currentMenu, setCurrentMenu] = useState(null);
    const submenuContainerRef = useRef(null);

    useEffect(() => {
        if (!isMenuOpen) {
            setCurrentMenu(null);
        }
    }, [isMenuOpen]);

    useEffect(() => {
        const container = submenuContainerRef.current;
        if (currentMenu) {
            gsap.fromTo(
                container,
                { x: 100, autoAlpha: 0 },
                { x: 0, autoAlpha: 1, duration: 0.5, ease: 'power3.out' }
            );
        } else {
            gsap.to(container, {
                x: 100,
                autoAlpha: 0,
                duration: 0.5,
                ease: 'power3.in'
            });
        }
    }, [currentMenu]);

    const goToMenu = (menuName) => setCurrentMenu(menuName);

    return (
        <div className="flex items-start gap-[2vw] mobile:flex-col text-left">
            {(currentMenu === null || window.innerWidth > 1024) && (
                <MainNav onSelectMenu={goToMenu} />
            )}
            <div ref={submenuContainerRef} className='pt-[1vw]'>
                {currentMenu === 'products' && (
                    <ProductsMenu onBack={() => goToMenu(null)} onSelectMenu={goToMenu} />
                )}
                {currentMenu === 'manufacturing' && (
                    <ManufacturingMenu onBack={() => goToMenu(null)} />
                )}
                {currentMenu === 'wound-care' && (
                    <WoundCareMenu onBack={() => goToMenu('products')} />
                )}
                {currentMenu === 'endo-surgery' && (
                    <EndoSurgeryMenu onBack={() => goToMenu('products')} />
                )}
                {currentMenu === 'hernia-solutions' && (
                    <HerniaSolutionsMenu onBack={() => goToMenu('products')} />
                )}
                {currentMenu === 'interventional-cardiology' && (
                    <InterventionalCardiologyMenu onBack={() => goToMenu('products')} />
                )}
                {currentMenu === 'cardiac-surgery' && (
                    <CardiacSurgeryMenu onBack={() => goToMenu('products')} />
                )}
            </div>
        </div>
    );
}
function MainNav({ onSelectMenu }) {
    return (
        <ul className='space-y-[0.5vw] mobile:space-y-[2vw] border-r pr-[3vw] border-[#d8d8d8] py-5 main-nav tablet:border-none mobile:border-none tablet:pl-[3vw]'>
            <li>
                <NavLink className='text-[1.5vw] tablet:!text-[2.5vw] mobile:!text-[5.5vw]' href={"/"} linkText="Home" />
            </li>
            <li>
                <NavLink className='text-[1.5vw] tablet:!text-[2.5vw] mobile:!text-[5.5vw]' href={"/about"} linkText="About" />
            </li>
            <li>
                <button onClick={() => onSelectMenu('products')} className={`text-[1.5vw] fade-in-0 leading-tight text-body tablet:text-[2.5vw] mobile:text-[5.5vw] overflow-hidden block relative group aeonik font-light`}>
                    <span
                        data-attr="Products"
                        className="inline-block transition-transform duration-500 ease-out after:absolute after:left-0 after:-bottom-0 after:translate-y-full after:content-[attr(data-attr)] group-hover:-translate-y-full"
                    >
                        Products
                    </span>
                    <ChevronRight className="inline-block w-[1.5vw] tablet:w-[2.5vw] mobile:w-[5vw] text-current mb-[1%] stroke-[1.2px]" />
                </button>
            </li>
            <li>
                <button onClick={() => onSelectMenu('manufacturing')} className={`text-[1.5vw] fade-in-0 leading-tight text-body tablet:text-[2.5vw] mobile:text-[5.5vw] overflow-hidden block relative group aeonik font-light`}>
                    <span
                        data-attr="Manufacturing"
                        className="inline-block transition-transform duration-500 ease-out after:absolute after:left-0 after:-bottom-0 after:translate-y-full after:content-[attr(data-attr)] group-hover:-translate-y-full"
                    >
                        Manufacturing
                    </span>
                    <ChevronRight className="inline-block w-[1.5vw] tablet:w-[2.5vw] mobile:w-[5vw] text-current mb-[1%] stroke-[1.2px]" />
                </button>
            </li>
            <li>
                <NavLink className='text-[1.5vw] tablet:!text-[2.5vw] mobile:!text-[5.5vw]' href={"/ama"} linkText="Advanced MedTech Academy" />
            </li>
            <li>
                <NavLink className='text-[1.5vw] tablet:!text-[2.5vw] mobile:!text-[5.5vw]' href={"/career"} linkText="Career" />
            </li>
            <li>
                <NavLink className='text-[1.5vw] tablet:!text-[2.5vw] mobile:!text-[5.5vw]' href={"/news"} linkText="Newsroom" />
            </li>
            <li>
                <NavLink className='text-[1.5vw] tablet:!text-[2.5vw] mobile:!text-[5.5vw]' href={"/contact-us"} linkText="Contact" />
            </li>
           
        </ul>
    );
}
