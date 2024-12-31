import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { useLenis } from "lenis/react";
import dynamic from "next/dynamic";

const Menu = dynamic(() => import("./Menu"), {ssr: false});

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [isInverted, setIsInverted] = useState(false);
  const observerRef = useRef(null);
  const router = useRouter();
  const lenis = useLenis();

  const openMenu = () => {
    setIsMenuOpen(true);
    lenis && lenis.stop();
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    lenis && lenis.start();
  };

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        const darkSectionInView = entries.some((entry) => entry.isIntersecting);
        setIsInverted(darkSectionInView);
      },
      { threshold: [0.1] }
    );
    const darkSections = document.querySelectorAll(".dark");
    darkSections.forEach((section) => observerRef.current.observe(section));
    return () => {
      observerRef.current.disconnect();
    };
  }, []);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsHeaderVisible(currentScrollY <= lastScrollY);

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Restart Lenis on route change
  useEffect(() => {
    const handleRouteChange = () => {
      lenis && lenis.start();
      lenis && lenis.scrollTo(0, { immediate: true });
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events, lenis]);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 w-screen h-fit z-[99] transition-transform duration-500 ${isHeaderVisible ? "transform-none" : "-translate-y-full"}`}>
        <div className="header-container w-[92%] mx-auto py-[2vw] mobile:py-[5vw]">
          <div className="flex justify-between items-center mobile:h-[10vw]">
            <Link prefetch={false} href="/" className="relative h-fit w-[8vw] mobile:w-[25vw] tablet:w-[15vw] block">
              <Image
                src="/logo.svg"
                width={160}
                height={80}
                className={` ${isInverted ? "hidden" : "block"}`}
                alt="AMS Logo"
              />
              <Image
                src="/assets/header/ams-logo-white.webp"
                className={`h-auto w-auto ${isInverted ? "block" : "hidden"}`}
                alt="ams-logo-white"
                width={160}
                height={80}
              />
            </Link>
            <div className="flex justify-center w-fit items-center gap-8">
              <div className="burger-wrapper other-wrapper">
                <button onClick={openMenu} aria-label="Open Menu" className={`menu-btn ${isMenuOpen ? "open" : ""} ${isInverted ? "invert" : ""}`} >
                  <span className="line-wrapper">
                    <span className="line-1 line"></span>
                    <span className="line-2 line"></span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Menu isMenuOpen={isMenuOpen} toggleMenu={closeMenu} />
    </>
  );
};

export default Header;
