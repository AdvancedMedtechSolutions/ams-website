import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/free-mode";
import gsap from "gsap";
import Modal from "./Modal";
import styles from "./styles.module.css";
import { useLenis } from "lenis/react";

export default function Offerings() {
  const lenis = useLenis();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCardId, setSelectedCardId] = useState(null);

  const openModal = (id) => {
    setSelectedCardId(id);
    setIsModalOpen(true);
    lenis.stop();
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCardId(null);
    lenis.start();
  };
  const content = modalContent.find(
    (item) => item.id === selectedCardId
  )?.description;
  useEffect(() => {
    const navbarLinks = document.querySelectorAll(".oemcard-button");
    const cardContainer = document.querySelector(".card-container");
    const focSections = document.querySelectorAll(".card-item");

    navbarLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();

        navbarLinks.forEach((lnk) => lnk.classList.remove("active"));

        link.classList.add("active");

        const targetHref = link.getAttribute("href");
        const targetElem = document.querySelector(targetHref);

        if (!targetElem) return;

        const cardIndex = Array.from(focSections).indexOf(targetElem);

        const xPercent = -(cardIndex * 20);

        gsap.to(cardContainer, {
          xPercent: xPercent,
          duration: 1,
          ease: "power2.out",
        });
      });
    });

    return () => {
      navbarLinks.forEach((link) => {
        link.removeEventListener("click", () => {});
      });
    };
  }, []);

  return (
    <>
      <section id="offerings">
        <div className="offerings-container pt-[12%] tablet:pt-[15%] mobile:pt-0">
          <h2 className="title-2 font-light text-center aeonik mb-[2vw] mobile:mb-10 fadeUp">
            OEM Solutions
          </h2>
          <Swiper
            freeMode={true}
            scrollbar={{
              draggable: true,
            }}
            slidesPerView={1.2}
            spaceBetween={20}
            breakpoints={{
              1024: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              640: {
                slidesPerView: 2.5,
                spaceBetween: 30,
              },
            }}
            navigation={false}
            modules={[FreeMode, Scrollbar]}
            className={`${styles.offeringSwiper}`}
          >
            {smallContent.map((item, index) => (
              <SwiperSlide key={index} className="h-full fadeUp">
                <a
                  href={`#card-item-${index + 1}`}
                  className="links oemcard-button block h-full w-full"
                >
                  <div className="rounded-[3vw] p-[1vw]  h-full w-full bg-white duration-300 tablet:p-[2vw] mobile:p-[3.5vw] mobile:rounded-3xl">
                    <h3 className="aeonik text-center font-light my-[1vw] text-[1.2vw] tablet:text-[2.6vw] tablet:mb-4 mobile:text-[4.5vw] mobile:mb-4">
                      {item.title}
                    </h3>
                    <div className="rounded-[2vw] overflow-hidden h-[15vw] tablet:h-[30vw] mobile:h-[70vw] mobile:rounded-2xl">
                      <Image
                        src={item.image}
                        alt={item.title}
                        className="object-cover h-full w-full"
                        width={400}
                        height={400}
                      />
                    </div>
                  </div>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="w-screen h-full mt-[2%] overflow-hidden mobile:mt-10">
          <div className="w-[500%] flex whitespace-nowrap items-center card-container">
            <div className={`w-screen card-item shadow-sm`} id="card-item-1">
              <div className="w-[90%] mx-auto h-full">
                <div className={`${styles.cardHead}`}>
                  <h4>Needle Technology</h4>
                  <p className="mobile:!text-[3.8vw]">Surgical Suture Needle</p>
                </div>
                <div className={styles.cardMain}>
                  <Image
                    className={styles.bigImage}
                    src="/assets/oem/needle-tech-big.png"
                    alt="product image"
                    width={900}
                    height={700}
                    priority={false}
                    quality={100}
                  />
                  <div className={`${styles.cardTextContainer}`}>
                    <div className={styles.cardText}>
                      <p className="mr-[0.8vw]">
                        <span>Advanced US & German Technology</span>
                        <span className={styles.bulletPoint}>
                          <span />
                        </span>
                      </p>
                      <p className="mr-[-0.5vw]">
                        <span>Cutting-Edge Robotics and Automation</span>
                        <span className={styles.bulletPoint}>
                          <span />
                        </span>
                      </p>
                      <p className="mr-[-0.5vw]">
                        <span>Robust Capacity</span>
                        <span className={styles.bulletPoint}>
                          <span />
                        </span>
                      </p>
                      <p className="mr-[0.8vw]">
                        <span>Precision Engineering & Quality Assurance</span>
                        <span className={styles.bulletPoint}>
                          <span />
                        </span>
                      </p>
                    </div>
                    <div className="absolute mobile:hidden">
                      <div className="pb-[3vw]">
                        <Image
                          src="/assets/oem/half-circle.png"
                          className="h-[100%]"
                          alt="half-circle image"
                          height={700}
                          width={1000}
                          priority={false}
                          quality={100}
                        />
                      </div>
                    </div>
                    <div className="absolute bottom-[10%] left-[20%] tablet:bottom-6 mobile:bottom-4 mobile:left-5">
                      <button className="flex items-center gap-2 text-[#4D7EC8] text-[1.25vw] font-normal tablet:text-[2.5vw] mobile:text-xl">
                        <a
                          href="/infographics/needle-brochure.pdf"
                          target="_blank"
                          className="flex items-center justify-center gap-2"
                        >
                          <span className="text">Technical Specification </span>
                          <svg
                            className="w-3"
                            width="51"
                            height="51"
                            viewBox="0 0 51 51"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M3.01701 48.0165L48.0168 3.01677L3.01701 48.0165ZM48.0168 3.01677L48.0795 46.9876L48.0168 3.01677ZM48.0168 3.01677L4.04596 2.95404L48.0168 3.01677Z"
                              fill="currentColor"
                            />
                            <path
                              d="M3.01701 48.0165L48.0168 3.01677M48.0168 3.01677L48.0795 46.9876M48.0168 3.01677L4.04596 2.95404"
                              stroke="currentColor"
                              strokeWidth="5"
                              strokeLinecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-item w-screen shadow-sm" id="card-item-2">
              <div className="w-[90%] mx-auto h-full">
                <div className={`${styles.cardHead}`}>
                  <h4 className="">Sternotomy Suture</h4>
                  <p className="mobile:!text-[3.8vw]">316LVM Stainless Steel</p>
                </div>
                <div className={styles.cardMain}>
                  <Image
                    className={styles.bigImage}
                    src="/assets/oem/sternotomy-suture-big.png"
                    alt="product image"
                    width={900}
                    height={700}
                    priority={false}
                    quality={100}
                  />
                  <div className={`${styles.cardTextContainer}`}>
                    <div className={styles.cardText}>
                      <p className="mr-[0.8vw]">
                        <span>Excellent Tissue Compatibility</span>
                        <span className={styles.bulletPoint}>
                          <span />
                        </span>
                      </p>
                      <p className="mr-[-0.5vw]">
                        <span>Superior Pliability</span>
                        <span className={styles.bulletPoint}>
                          <span />
                        </span>
                      </p>
                      <p className="mr-[-0.5vw]">
                        <span>High Resistance to Breakage</span>
                        <span className={styles.bulletPoint}>
                          <span />
                        </span>
                      </p>
                      <p className="mr-[0.8vw]">
                        <span>Excellent Knot Security</span>
                        <span className={styles.bulletPoint}>
                          <span />
                        </span>
                      </p>
                    </div>
                    <div className="absolute mobile:hidden">
                      <div className="pb-[3vw]">
                        <Image
                          src="/assets/oem/half-circle.png"
                          className="h-[100%]"
                          alt="half-circle image"
                          height={700}
                          width={1000}
                          priority={false}
                          quality={100}
                        />
                      </div>
                    </div>
                    <div className="absolute bottom-[10%] left-[20%] tablet:bottom-6 mobile:bottom-4 mobile:left-5">
                      <button
                        onClick={() => openModal(2)}
                        aria-label="open specification modal"
                        className="flex items-center gap-2 text-[#4D7EC8] text-[1.25vw] font-normal tablet:text-[2.5vw] mobile:text-xl"
                      >
                        <span className="text">Technical Specification </span>
                        <svg
                          className="w-3"
                          width="51"
                          height="51"
                          viewBox="0 0 51 51"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3.01701 48.0165L48.0168 3.01677L3.01701 48.0165ZM48.0168 3.01677L48.0795 46.9876L48.0168 3.01677ZM48.0168 3.01677L4.04596 2.95404L48.0168 3.01677Z"
                            fill="currentColor"
                          />
                          <path
                            d="M3.01701 48.0165L48.0168 3.01677M48.0168 3.01677L48.0795 46.9876M48.0168 3.01677L4.04596 2.95404"
                            stroke="currentColor"
                            strokeWidth="5"
                            strokeLinecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-item w-screen shadow-sm" id="card-item-3">
              <div className="w-[90%] mx-auto h-full">
                <div className={`${styles.cardHead}`}>
                  <h4 className="">Hernia Solutions</h4>
                  <p className="mobile:!text-[3.8vw]">
                    Monofilament Polypropylene Mesh
                  </p>
                </div>
                <div className={styles.cardMain}>
                  <Image
                    className={styles.bigImage}
                    src="/assets/oem/hernia-solutions-big.png"
                    alt="product image"
                    width={900}
                    height={700}
                    priority={false}
                    quality={100}
                  />
                  <div className={`${styles.cardTextContainer}`}>
                    <div className={styles.cardText}>
                      <p className="mr-[0.2vw]">
                        <span>European Knitting Technology</span>
                        <span className={styles.bulletPoint}>
                          <span />
                        </span>
                      </p>
                      <p className="mr-[-0.5vw]">
                        <span>
                          Ability to Customize Knitting Pattern, Pore Size,
                          Weight, and Size
                        </span>
                        <span className={styles.bulletPoint}>
                          <span />
                        </span>
                      </p>
                      <p className="mr-[-0.2vw]">
                        <span>
                          Integrated Process with Minimal Human Intervention
                        </span>
                        <span className={styles.bulletPoint}>
                          <span />
                        </span>
                      </p>
                    </div>
                    <div className="absolute mobile:hidden">
                      <div className="pb-[3vw]">
                        <Image
                          src="/assets/oem/half-circle.png"
                          className="h-[100%]"
                          alt="half-circle image"
                          height={700}
                          width={1000}
                          priority={false}
                          quality={100}
                        />
                      </div>
                    </div>
                    <div className="absolute bottom-[10%] left-[20%] tablet:bottom-6 mobile:bottom-4 mobile:left-5">
                      <button
                        onClick={() => openModal(3)}
                        aria-label="open specification modal"
                        className="flex items-center gap-2 text-[#4D7EC8] text-[1.25vw] font-normal tablet:text-[2.5vw] mobile:text-xl"
                      >
                        <span className="text">Technical Specification </span>
                        <svg
                          className="w-3"
                          width="51"
                          height="51"
                          viewBox="0 0 51 51"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3.01701 48.0165L48.0168 3.01677L3.01701 48.0165ZM48.0168 3.01677L48.0795 46.9876L48.0168 3.01677ZM48.0168 3.01677L4.04596 2.95404L48.0168 3.01677Z"
                            fill="currentColor"
                          />
                          <path
                            d="M3.01701 48.0165L48.0168 3.01677M48.0168 3.01677L48.0795 46.9876M48.0168 3.01677L4.04596 2.95404"
                            stroke="currentColor"
                            strokeWidth="5"
                            strokeLinecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-item w-screen shadow-sm" id="card-item-4">
              <div className="w-[90%] mx-auto h-full">
                <div className={`${styles.cardHead}`}>
                  <h4 className="">Stent Delivery Systems</h4>
                  <p className="mobile:!text-[3.8vw]">
                    Rapid Exchange Catheter
                  </p>
                </div>
                <div className={styles.cardMain}>
                  <Image
                    className={styles.bigImage}
                    src="/assets/oem/stent-delivery-big.png"
                    alt="product image"
                    width={900}
                    height={700}
                    priority={false}
                    quality={100}
                  />
                  <div className={`${styles.cardTextContainer}`}>
                    <div className={styles.cardText}>
                      <p className="mr-[2vw]">
                        <span>Proprietary Shaft Design</span>
                        <span className={styles.bulletPoint}>
                          <span />
                        </span>
                      </p>
                      <p className="mr-[0.5vw]">
                        <span>Engineered for Trackability</span>
                        <span className={styles.bulletPoint}>
                          <span />
                        </span>
                      </p>
                      <p className="mr-[-0.5vw]">
                        <span>Enhanced Deliverability</span>
                        <span className={styles.bulletPoint}>
                          <span />
                        </span>
                      </p>
                      <p className="mr-[-0.5vw]">
                        <span>Precise Balloon Positioning</span>
                        <span className={styles.bulletPoint}>
                          <span />
                        </span>
                      </p>
                      <p className="mr-[0.5vw]">
                        <span>Deep Shoulder Balloon</span>
                        <span className={styles.bulletPoint}>
                          <span />
                        </span>
                      </p>
                      <p className="mr-[2vw]">
                        <span>Minimized Vessel Trauma</span>
                        <span className={styles.bulletPoint}>
                          <span />
                        </span>
                      </p>
                    </div>
                    <div className="absolute mobile:hidden">
                      <div className="pb-[3vw]">
                        <Image
                          src="/assets/oem/half-circle.png"
                          className="h-[100%]"
                          alt="half-circle image"
                          height={700}
                          width={1000}
                          priority={false}
                          quality={100}
                        />
                      </div>
                    </div>
                    <div className="absolute bottom-[10%] left-[20%] tablet:bottom-6 mobile:bottom-4 mobile:left-5">
                      <button
                        onClick={() => openModal(4)}
                        aria-label="open specification modal"
                        className="flex items-center gap-2 text-[#4D7EC8] text-[1.25vw] font-normal tablet:text-[2.5vw] mobile:text-xl"
                      >
                        <span className="text">Technical Specification </span>
                        <svg
                          className="w-3"
                          width="51"
                          height="51"
                          viewBox="0 0 51 51"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3.01701 48.0165L48.0168 3.01677L3.01701 48.0165ZM48.0168 3.01677L48.0795 46.9876L48.0168 3.01677ZM48.0168 3.01677L4.04596 2.95404L48.0168 3.01677Z"
                            fill="currentColor"
                          />
                          <path
                            d="M3.01701 48.0165L48.0168 3.01677M48.0168 3.01677L48.0795 46.9876M48.0168 3.01677L4.04596 2.95404"
                            stroke="currentColor"
                            strokeWidth="5"
                            strokeLinecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-item w-screen shadow-sm" id="card-item-5">
              <div className="w-[90%] mx-auto h-full">
                <div className={`${styles.cardHead}`}>
                  <h4 className="">Knotless Tissue Control Device</h4>
                  <p className="mobile:!text-[3.8vw]">
                    Polydioxanone | Poliglecaprone 25 | Polypropylene
                  </p>
                </div>
                <div className={styles.cardMain}>
                  <Image
                    className={styles.bigImage}
                    src="/assets/oem/knotless-tissue-big.png"
                    alt="product image"
                    width={900}
                    height={700}
                    priority={false}
                    quality={100}
                  />
                  <div className={`${styles.cardTextContainer}`}>
                    <div className={styles.cardText}>
                      <p className="mr-[0.8vw]">
                        <span>Closer Barb Spacing</span>
                        <span className={styles.bulletPoint}>
                          <span />
                        </span>
                      </p>
                      <p className="mr-[-0.5vw]">
                        <span>Superior Holding Strength</span>
                        <span className={styles.bulletPoint}>
                          <span />
                        </span>
                      </p>
                      <p className="mr-[-0.5vw]">
                        <span>Unidirectional and Circumferential Barbs</span>
                        <span className={styles.bulletPoint}>
                          <span />
                        </span>
                      </p>
                      <p className="mr-[0.8vw]">
                        <span>Ultrasonic Welded Loop</span>
                        <span className={styles.bulletPoint}>
                          <span />
                        </span>
                      </p>
                    </div>
                    <div className="absolute mobile:hidden">
                      <div className="pb-[3vw]">
                        <Image
                          src="/assets/oem/half-circle.png"
                          className="h-[100%]"
                          alt="half-circle image"
                          height={700}
                          width={1000}
                          priority={false}
                          quality={100}
                        />
                      </div>
                    </div>
                    <div className="absolute bottom-[10%] left-[20%] tablet:bottom-6 mobile:bottom-4 mobile:left-5">
                      <button
                        onClick={() => openModal(5)}
                        aria-label="open specification modal"
                        className="flex items-center gap-2 text-[#4D7EC8] text-[1.25vw] font-normal tablet:text-[2.5vw] mobile:text-xl"
                      >
                        <span className="text">Technical Specification </span>
                        <svg
                          className="w-3"
                          width="51"
                          height="51"
                          viewBox="0 0 51 51"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3.01701 48.0165L48.0168 3.01677L3.01701 48.0165ZM48.0168 3.01677L48.0795 46.9876L48.0168 3.01677ZM48.0168 3.01677L4.04596 2.95404L48.0168 3.01677Z"
                            fill="currentColor"
                          />
                          <path
                            d="M3.01701 48.0165L48.0168 3.01677M48.0168 3.01677L48.0795 46.9876M48.0168 3.01677L4.04596 2.95404"
                            stroke="currentColor"
                            strokeWidth="5"
                            strokeLinecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Modal isOpen={isModalOpen} onClose={closeModal}>
            {content}
          </Modal>
        </div>
      </section>
    </>
  );
}

const smallContent = [
  {
    title: "Surgical Suture Needles",
    image: "/assets/oem/surgical-needle.png",
  },
  {
    title: "Sternotomy Suture",
    image: "/assets/oem/sternotomy-suture.png",
  },
  {
    title: "Hernia Solutions",
    image: "/assets/oem/hernia-solutions.png",
  },
  {
    title: "Stent Delivery Systems",
    image: "/assets/oem/stent-delivery.png",
  },
  {
    title: "Knotless Tissue Control Device",
    image: "/assets/oem/knotless-tissue.png",
  },
];
const modalContent = [
  {
    id: 1,
    title: "Knotless Tissue Control Device",
    description: (
      <div>
        <h2 className="text-lg font-bold">Knotless Tissue Control Device</h2>
        <p>
          This is a detailed description of the Knotless Tissue Control
          Device...
        </p>
        <ul className="list-disc pl-4">
          <li>Closer Barb Spacing</li>
          <li>Superior Holding Strength</li>
          <li>Unidirectional and Circumferential Barbs</li>
          <li>Ultrasonic Welded Loop</li>
        </ul>
      </div>
    ),
  },
  {
    id: 2,
    description: (
      <>
        <div
          className={`text-[#111111] font-light text-[2.5vw] mt-[-3vw] leading-[1.2] mobile:text-[7vw] tablet:text-[5vw] mobile:mt-0  tablet:mt-[3vw]`}
        >
          <p>Technical Specification</p>
        </div>
        <div className="w-full  text-[1.25vw] font-light py-[2vw] text-[#4A4A4A] mobile:text-[4.5vw] tablet:text-[2.5vw] mobile:py-[5vw] mobile:mt-[4vw] tablet:py-[3.5vw] mobile:overflow-y-scroll   ">
          <div
            data-lenis-prevent
            className="flex w-full border-b border-[#DADADA] gap-[5vw] tablet:gap-[8vw] mobile:gap-[15vw] mobile:overflow-x-auto "
          >
            <div className=" p-[1vw] pb-0  font-light w-[20vw] tablet:w-[30vw] text-[#4564AC] mobile:w-[40vw]">
              Composition
            </div>
            <div className="p-[1vw] pb-0  font-light w-[30vw] tablet:w-[55vw] mobile:w-[70vw]">
              Stainless 316LVM Steel
            </div>
          </div>

          <div className="flex w-full border-b border-[#DADADA] gap-[5vw]   tablet:gap-[8vw] mobile:gap-[15vw]">
            <div className=" p-[1vw] pb-0  w-[20vw] tablet:w-[30vw] text-[#4564AC] mobile:w-[40vw]">
              Coating
            </div>

            <div className="p-[1vw] pb-0   w-[30vw] tablet:w-[55vw] mobile:w-[70vw]">
              NA
            </div>
          </div>

          <div className="flex w-full border-b border-[#DADADA] gap-[5vw]  tablet:gap-[8vw] mobile:gap-[15vw]">
            <div className=" p-[1vw] pb-0  w-[20vw] tablet:w-[30vw] text-[#4564AC] mobile:w-[40vw]">
              Available Sizes
            </div>

            <div className="p-[1vw] pb-0  w-[30vw] tablet:w-[55vw] mobile:w-[70vw]">
              U.S.P. 1 to 7
            </div>
          </div>

          <div className="flex w-full border-b border-[#DADADA] gap-[5vw]  tablet:gap-[8vw] mobile:gap-[15vw]">
            <div className=" p-[1vw] pb-0  w-[20vw] tablet:w-[30vw] text-[#4564AC] mobile:w-[40vw]">
              Colour
            </div>

            <div className="p-[1vw] pb-0   w-[30vw] tablet:w-[55vw] mobile:w-[70vw]">
              Steel
            </div>
          </div>

          <div className="flex w-full border-b border-[#DADADA] gap-[5vw]  tablet:gap-[8vw] mobile:gap-[15vw]">
            <div className=" p-[1vw] pb-0  w-[20vw] tablet:w-[30vw] text-[#4564AC] mobile:w-[40vw]">
              Tensile Strength
            </div>

            <div className="p-[1vw] pb-0   w-[30vw] tablet:w-[55vw] mobile:w-[70vw]">
              Permanent
            </div>
          </div>

          <div className="flex w-full border-b border-[#DADADA] gap-[5vw]  tablet:gap-[8vw] mobile:gap-[15vw]">
            <div className=" p-[1vw] pb-0  w-[20vw] tablet:w-[30vw] text-[#4564AC] mobile:w-[40vw]">
              Needle
            </div>

            <div className="p-[1vw] pb-0   w-[30vw] tablet:w-[55vw] mobile:w-[90vw]">
              Taper Cut, Cutting, Reverse Cutting &
            </div>
          </div>

          <div className="flex w-full border-b border-[#DADADA] gap-[5vw]  tablet:gap-[8vw] mobile:gap-[15vw]">
            <div className=" p-[1vw] pb-0  w-[20vw] tablet:w-[30vw] text-[#4564AC] mobile:w-[40vw]">
              Availability
            </div>

            <div className="p-[1vw] pb-0  w-[30vw] tablet:w-[55vw] mobile:w-[70vw]">
              Blunt Point.
            </div>
          </div>
          <div className="flex w-full border-b border-[#DADADA] gap-[5vw]  tablet:gap-[8vw] mobile:gap-[15vw]">
            <div className=" p-[1vw] pb-0  w-[20vw] tablet:w-[30vw] text-[#4564AC] mobile:w-[40vw]">
              Length
            </div>

            <div className="p-[1vw] pb-0  w-[30vw] tablet:w-[55vw] mobile:w-[70vw]">
              40-90 mm
            </div>
          </div>
          <div className="flex w-full border-b border-[#DADADA] gap-[5vw]  tablet:gap-[8vw] mobile:gap-[15vw]">
            <div className=" p-[1vw] pb-0  w-[20vw] tablet:w-[30vw] text-[#4564AC] mobile:w-[40vw]">
              Wire Diameter
            </div>

            <div className="p-[1vw] pb-0  w-[30vw] tablet:w-[55vw] mobile:w-[70vw]">
              1.00-1.60 mm
            </div>
          </div>

          <div className="flex w-full border-b border-[#DADADA] gap-[5vw]  tablet:gap-[8vw] mobile:gap-[15vw]">
            <div className=" p-[1vw] pb-0  w-[20vw] tablet:w-[30vw] text-[#4564AC] mobile:w-[40vw]">
              Hole Diameter
            </div>

            <div className="p-[1vw] pb-0  w-[30vw] tablet:w-[55vw] mobile:w-[70vw]">
              0.5-1.03 mm
            </div>
          </div>
        </div>
      </>
    ),
  },
  {
    id: 3,
    description: (
      <>
        <div
          className={`text-[#111111] font-light text-[2.5vw] mt-[-3vw] leading-[1.2] mobile:text-[7vw] tablet:text-[5vw] mobile:mt-0  tablet:mt-[3vw]`}
        >
          <p>Technical Specification</p>
        </div>
        <div
          data-lenis-prevent
          className="w-full  text-[1.25vw] font-light py-[2vw] text-[#4A4A4A] mobile:text-[4.5vw] tablet:text-[2.5vw] mobile:py-[5vw] mobile:mt-[4vw] tablet:py-[3.5vw] mobile:w-[120vw] "
        >
          <div className="flex w-full border-b border-[#DADADA] gap-[5vw] tablet:gap-[8vw] mobile:gap-[15vw]">
            <div className=" p-[1vw] pb-0  font-light w-[20vw] tablet:w-[30vw] text-[#4564AC] mobile:w-[60vw]">
              Filament Diameter
            </div>
            <div className="p-[1vw] pb-0  font-light w-[30vw] tablet:w-[55vw] mobile:w-[70vw]">
              0.125 & 0.150 mm
            </div>
          </div>

          <div className="flex w-full border-b border-[#DADADA] gap-[5vw]   tablet:gap-[8vw] mobile:gap-[17vw]">
            <div className=" p-[1vw] pb-0  w-[20vw] tablet:w-[30vw] text-[#4564AC] mobile:w-[60vw]">
              Weight
            </div>

            <div className="p-[1vw] pb-0   w-[30vw] tablet:w-[55vw] mobile:w-[70vw]">
              40 – 90 GSM
            </div>
          </div>

          <div className="flex w-full border-b border-[#DADADA] gap-[5vw]  tablet:gap-[8vw] mobile:gap-[17vw]">
            <div className=" p-[1vw] pb-0  w-[20vw] tablet:w-[30vw] text-[#4564AC] mobile:w-[60vw]">
              Thickness
            </div>

            <div className="p-[1vw] pb-0  w-[30vw] tablet:w-[55vw] mobile:w-[70vw]">
              0.36, 0.50 & 0.60 mm
            </div>
          </div>

          <div className="flex w-full border-b border-[#DADADA] gap-[5vw]  tablet:gap-[8vw] mobile:gap-[17vw]">
            <div className=" p-[1vw] pb-0  w-[20vw] tablet:w-[30vw] text-[#4564AC] mobile:w-[60vw]">
              Burst Strength
            </div>

            <div className="p-[1vw] pb-0   w-[30vw] tablet:w-[55vw] mobile:w-[70vw]">
              245 – 1000 KPA
            </div>
          </div>

          <div className="flex w-full border-b border-[#DADADA] gap-[5vw]  tablet:gap-[8vw] mobile:gap-[17vw]">
            <div className=" p-[1vw] pb-0  w-[20vw] tablet:w-[30vw] text-[#4564AC] mobile:w-[60vw]">
              Warp Direction
            </div>

            <div className="p-[1vw] pb-0   w-[30vw] tablet:w-[55vw] mobile:w-[70vw]">
              13, 14 & 20 wpi
            </div>
          </div>

          <div className="flex w-full border-b border-[#DADADA] gap-[5vw]  tablet:gap-[8vw] mobile:gap-[17vw]">
            <div className=" p-[1vw] pb-0  w-[20vw] tablet:w-[30vw] text-[#4564AC] mobile:w-[60vw]">
              Weft Direction
            </div>

            <div className="p-[1vw] pb-0   w-[30vw] tablet:w-[55vw] mobile:w-[70vw]">
              19, 26 & 40 cpi
            </div>
          </div>

          <div className="flex w-full border-b border-[#DADADA] gap-[5vw]  tablet:gap-[8vw] mobile:gap-[17vw]">
            <div className=" p-[1vw] pb-0  w-[20vw] tablet:w-[30vw] text-[#4564AC] mobile:w-[60vw]">
              Shipped
            </div>

            <div className="p-[1vw] pb-0  w-[30vw] tablet:w-[55vw] mobile:w-[70vw]">
              Pre-Cut
            </div>
          </div>
          <div className="flex w-full border-b border-[#DADADA] gap-[5vw]  tablet:gap-[8vw] mobile:gap-[14vw]">
            <div className=" p-[1vw] pb-0  w-[20vw] tablet:w-[30vw] text-[#4564AC] mobile:w-[60vw]">
              Sizes
            </div>

            <div className="p-[1vw] pb-0  w-[30vw] tablet:w-[55vw] mobile:w-[70vw]">
              Customizable
            </div>
          </div>
        </div>
      </>
    ),
  },
  {
    id: 4,
    description: (
      <>
        <div
          className={`text-[#111111] font-light text-[2.5vw] mt-[-3vw] leading-[1.2] mobile:text-[7vw] tablet:text-[5vw] mobile:mt-0 tablet:mt-[3vw]`}
        >
          <p>Technical Specification</p>
        </div>
        <div
          data-lenis-prevent
          className="w-full  text-[1.25vw] font-light py-[2vw] text-[#4A4A4A]  overflow-y-scroll h-[70vh] mobile:text-[4.5vw] tablet:text-[2.5vw] mobile:py-[5vw] mobile:mt-[4vw] tablet:py-[3.5vw]  mobile:overflow-x-auto tablet:overflow-x-auto tablet:w-[100vw]"
        >
          <div className="flex w-full border-b border-[#DADADA] gap-[5vw] tablet:gap-[15vw] mobile:gap-[15vw]">
            <div className=" p-[1vw] pb-0  font-light w-[30vw] tablet:w-[30vw] text-[#4564AC] mobile:w-[60vw]">
              Proximal Shaft Diameter
            </div>
            <div className="p-[1vw] pb-0  font-light w-[30vw] tablet:w-[40vw] mobile:w-[70vw]">
              1.9 Fr.
            </div>
          </div>

          <div className="flex w-full border-b border-[#DADADA] gap-[5vw]   tablet:gap-[15vw] mobile:gap-[15vw]">
            <div className=" p-[1vw] pb-0  w-[30vw] tablet:w-[30vw] text-[#4564AC] mobile:w-[60vw]">
              Distal Shaft Diameter
            </div>

            <div className="p-[1vw] pb-0   w-[30vw] tablet:w-[40vw] mobile:w-[70vw]">
              2.4 Fr.
            </div>
          </div>

          <div className="flex w-full border-b border-[#DADADA] gap-[5vw]  tablet:gap-[15vw] mobile:gap-[15vw]">
            <div className=" p-[1vw] pb-0  w-[30vw] tablet:w-[30vw] text-[#4564AC] mobile:w-[60vw]">
              Usable Catheter Length
            </div>

            <div className="p-[1vw] pb-0  w-[30vw] tablet:w-[40vw] mobile:w-[70vw]">
              140 ± 2 cm
            </div>
          </div>

          <div className="flex w-full border-b border-[#DADADA] gap-[5vw]  tablet:gap-[15vw] mobile:gap-[15vw]">
            <div className=" p-[1vw] pb-0  w-[30vw] tablet:w-[30vw] text-[#4564AC] mobile:w-[60vw]">
              Shaft Marker (Tip to Proximal & Distal marker)
            </div>

            <div className="p-[1vw] pb-0   w-[30vw] tablet:w-[40vw] mobile:w-[70vw]">
              94 ± 2 cm & 104 ± 2 cm
            </div>
          </div>

          <div className="flex w-full border-b border-[#DADADA] gap-[5vw]  tablet:gap-[15vw] mobile:gap-[15vw]">
            <div className=" p-[1vw] pb-0  w-[30vw] tablet:w-[30vw] text-[#4564AC] mobile:w-[60vw]">
              X-Ray Markers - Low Profile & Highly Visible
            </div>

            <div className="p-[1vw] pb-0   w-[30vw] tablet:w-[40vw] mobile:w-[70vw]">
              2 Pt/Ir Markers - 0.6 mm width
            </div>
          </div>

          <div className="flex w-full border-b border-[#DADADA] gap-[5vw]  tablet:gap-[15vw] mobile:gap-[15vw]">
            <div className=" p-[1vw] pb-0  w-[30vw] tablet:w-[30vw] text-[#4564AC] mobile:w-[60vw]">
              Proximal Shaft Material
            </div>

            <div className="p-[1vw] pb-0   w-[30vw] tablet:w-[40vw] mobile:w-[70vw]">
              PTFE Coated Kink Resistant Shaft
            </div>
          </div>

          <div className="flex w-full border-b border-[#DADADA] gap-[5vw]  tablet:gap-[15vw] mobile:gap-[15vw]">
            <div className=" p-[1vw] pb-0  w-[30vw] tablet:w-[30vw] text-[#4564AC] mobile:w-[60vw]">
              Rapid Exchange Length
            </div>

            <div className="p-[1vw] pb-0  w-[30vw] tablet:w-[40vw] mobile:w-[70vw]">
              23 cm
            </div>
          </div>
          <div className="flex w-full border-b border-[#DADADA] gap-[5vw]  tablet:gap-[15vw] mobile:gap-[15vw]">
            <div className=" p-[1vw] pb-0  w-[30vw] tablet:w-[30vw] text-[#4564AC] mobile:w-[60vw]">
              Soft Tip Entry Profile
            </div>

            <div className="p-[1vw] pb-0  w-[30vw] tablet:w-[40vw] mobile:w-[70vw]">
              0.016&apos; (0.40 mm)
            </div>
          </div>
          <div className="flex w-full border-b border-[#DADADA] gap-[5vw]  tablet:gap-[15vw] mobile:gap-[15vw]">
            <div className=" p-[1vw] pb-0  w-[30vw] tablet:w-[30vw] text-[#4564AC] mobile:w-[60vw]">
              Tip Material
            </div>

            <div className="p-[1vw] pb-0  w-[30vw] tablet:w-[40vw] mobile:w-[70vw]">
              PEBAX
            </div>
          </div>
          <div className="flex w-full border-b border-[#DADADA] gap-[5vw]  tablet:gap-[15vw] mobile:gap-[15vw]">
            <div className=" p-[1vw] pb-0  w-[30vw] tablet:w-[30vw] text-[#4564AC] mobile:w-[60vw]">
              Crossing Profile / Balloon Profile
            </div>

            <div className="p-[1vw] pb-0  w-[30vw] tablet:w-[40vw] mobile:w-[70vw]">
              0.65 mm - 0.85 mm
            </div>
          </div>
          <div className="flex w-full border-b border-[#DADADA] gap-[5vw]  tablet:gap-[15vw] mobile:gap-[15vw]">
            <div className=" p-[1vw] pb-0  w-[30vw] tablet:w-[30vw] text-[#4564AC] mobile:w-[60vw]">
              Balloon Nominal Pressure
            </div>
            <div className="p-[1vw] pb-0  w-[30vw] tablet:w-[40vw] mobile:w-[70vw]">
              6 ATM*
            </div>
          </div>

          <div className="flex w-full border-b border-[#DADADA] gap-[5vw]  tablet:gap-[15vw] mobile:gap-[15vw]">
            <div className=" p-[1vw] pb-0  w-[30vw] tablet:w-[30vw] text-[#4564AC] mobile:w-[60vw]">
              Coating (Except Balloon)
            </div>
            <div className="p-[1vw] pb-0  w-[30vw] tablet:w-[40vw] mobile:w-[70vw]">
              Hydrophilic
            </div>
          </div>

          <div className="flex w-full border-b border-[#DADADA] gap-[5vw]  tablet:gap-[16vw] mobile:gap-[15vw]">
            <div className=" p-[1vw] pb-0  w-[30vw] tablet:w-[80vw] text-[#4564AC] mobile:w-[90vw]">
              * Depending on diameters & Stent Length
            </div>
          </div>
        </div>
      </>
    ),
  },
  {
    id: 5,
    description: (
      <>
        <div
          className={`text-[#111111] font-light text-[2.5vw] mt-[-3vw] leading-[1.2] mobile:text-[7vw] tablet:text-[5vw] mobile:mt-0  tablet:mt-[3vw]`}
        >
          <p>Technical Specification</p>
        </div>
        <div className="w-full text-[1.25vw] font-light py-[3vw] text-[#4A4A4A] mobile:text-[4.5vw] tablet:text-[2.5vw]  mobile:py-[5vw] mobilepy-[4vw] tablet:py-[3.5vw] mobile:overflow-x-auto mobile:w-[210vw] tablet:overflow-x-auto tablet:w-[130vw]">
          <div className="flex w-full border-b border-[#DADADA]  ">
            <div className=" p-[1vw] pb-0  w-[20vw] font-light tablet:w-[30vw] mobile:w-[50vw] text-[#4564AC]">
              Features
            </div>
            <div className=" flex justify-start gap-[18vw] mobile:gap-[15vw] tablet:gap-[15vw]">
              <div className="p-[1vw] pb-0  font-light mobile:w-[70vw] tablet:w-[38vw]">
                Poliglecaprone 25
              </div>
              <div className="p-[1vw] pb-0  font-light  mobile:w-[70vw] tablet:w-[38vw]">
                Polydioxanone
              </div>
            </div>
          </div>

          <div className="flex w-full border-b border-[#DADADA] ">
            <div className=" p-[1vw] pb-0  w-[20vw] tablet:w-[30vw] mobile:w-[50vw] text-[#4564AC]">
              Tensile Strength
            </div>
            <div className=" flex justify-start gap-[20.5vw] mobile:gap-[15vw]  tablet:gap-[15vw] ">
              <div className="p-[1vw] pb-0   mobile:w-[70vw] tablet:w-[38vw]">
                <p>7 days - 60%</p>
                <p>14 days - 40%</p>
              </div>
              <div className="p-[1vw] pb-0   mobile:w-[70vw] tablet:w-[38vw]">
                <p>14 days - 80% </p>
                <p>28 days - 70%</p>
                <p>42 days - 45 %</p>
              </div>
            </div>
          </div>

          <div className="flex w-full border-b border-[#DADADA] ">
            <div className=" p-[1vw] pb-0  w-[20vw] tablet:w-[30vw] mobile:w-[50vw] text-[#4564AC]">
              Absorption Profile
            </div>
            <div className=" flex justify-start gap-[21vw]  tablet:gap-[15vw] mobile:gap-[15vw]">
              <div className="p-[1vw] pb-0  mobile:w-[70vw] tablet:w-[38vw]">
                Upto 90 days
              </div>
              <div className="p-[1vw] pb-0  mobile:w-[70vw] tablet:w-[38vw]">
                180 - 220 days
              </div>
            </div>
          </div>

          <div className="flex w-full border-b border-[#DADADA] ">
            <div className=" p-[1vw] pb-0  w-[20vw] tablet:w-[30vw] mobile:w-[50vw] text-[#4564AC]">
              Color
            </div>
            <div className=" flex justify-start gap-[24vw] mobile:gap-[15vw]  tablet:gap-[15vw] ">
              <div className="p-[1vw] pb-0   mobile:w-[70vw] tablet:w-[38vw]">
                Undyed{" "}
              </div>
              <div className="p-[1vw] pb-0  mobile:w-[70vw] tablet:w-[38vw]">
                Violet
              </div>
            </div>
          </div>
          <div className="flex w-full border-b border-[#DADADA] ">
            <div className=" p-[1vw] pb-0  w-[20vw] tablet:w-[30vw] mobile:w-[50vw] text-[#4564AC]">
              USP Size
            </div>
            <div className=" flex justify-start gap-[24vw] mobile:gap-[15vw]  tablet:gap-[15vw]">
              <div className="p-[1vw] pb-0  mobile:w-[70vw] tablet:w-[38vw]">
                0 to 4-0
              </div>
              <div className="p-[1vw] pb-0   mobile:w-[70vw] tablet:w-[38vw]">
                1 to 4-0
              </div>
            </div>
          </div>
          <div className="flex w-full border-b border-[#DADADA] ">
            <div className=" p-[1vw] pb-0  w-[20vw] tablet:w-[30vw] mobile:w-[50vw] text-[#4564AC]">
              No. of Barbs/ inch
            </div>
            <div className=" flex justify-start gap-[27vw] mobile:gap-[15vw]  tablet:gap-[15vw]">
              <div className="p-[1vw] pb-0   mobile:w-[70vw] tablet:w-[38vw]">
                46
              </div>
              <div className="p-[1vw] pb-0   mobile:w-[70vw] tablet:w-[38vw]">
                46
              </div>
            </div>
          </div>
          <div className="flex w-full border-b border-[#DADADA] ">
            <div className=" p-[1vw] pb-0  w-[20vw] tablet:w-[30vw] mobile:w-[50vw] text-[#4564AC]">
              Indications
            </div>
            <div className=" flex justify-start gap-[11vw] mobile:gap-[15vw]  tablet:gap-[15vw]">
              <div className="p-[1vw] pb-0   w-[20vw] mobile:w-[70vw] tablet:w-[38vw]">
                Indicated for general soft tissue approximation purpose.
              </div>
              <div className="p-[1vw] pb-0   w-[20vw] mobile:w-[70vw] tablet:w-[38vw]">
                Indicated for general soft tissue approximation purpose.
              </div>
            </div>
          </div>
        </div>
      </>
    ),
  },
];
