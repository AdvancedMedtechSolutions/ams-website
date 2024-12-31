import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const State = () => {
  useEffect(() => {
    if (globalThis.innerWidth >= 1024) {
      const totalContentElements = document.querySelectorAll(".content--card");
      totalContentElements.forEach((el) => {
        gsap.timeline({
          scrollTrigger: {
            trigger: el,
            start: "center center",
            end: "+=90%",
            scrub: true,
          },
        }).to(el, {
          ease: "none",
          scale: 0.85,
          opacity: 0,
          yPercent: 130,
        }, 0);
      });
    }
  }, []);

  return (
    <section id="state" className="main py-[7%] mobile:py-[15%]">
      <div className="wrap px-[5%] flex flex-col gap-[10vw] mobile:gap-[10vw] items-center w-full tablet:gap-[5vw]">
        {content.map((item, index) => (
          <div key={item.id} className={`${index === 4 ? "" : "content--card"}`}>
            <Card
              image={item.image}
              title={item.title}
              description={item.description}
              className={item.className}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default State;

const Card = ({ image, title, description, className = "" }) => {
  return (
    <div className={`rounded-[45px] items-center border-[1px] border-gray-200 px-[4vw] py-[3vw] flex gap-[4vw] justify-between bg-white/50 tablet:flex-col tablet:h-[65vh] tablet:py-[5vw] tablet:rounded-[4vw] tablet:justify-start tablet:gap-[4vw] mobile:flex-col mobile:h-auto mobile:rounded-[9vw] mobile:py-[4vw] mobile:pb-[10vw] fadeUp ${className}`}>
      <div className="h-[27vw] w-[46.5vw] relative rounded-[2.5vw] overflow-hidden tablet:h-[50vw] tablet:w-[82vw] tablet:rounded-[3vw] mobile:w-[82vw] mobile:h-[90vw] mobile:rounded-[6vw]">
        <Image src={image} width={870} height={520} alt={title} className="object-cover h-full w-full" />
      </div>
      <div className={`flex flex-col w-[40%] font-light items-left justify-center gap-[2vw] tablet:w-full tablet:ml-[1vw] mobile:w-full mobile:text-center mobile:ml-0 mobile:gap-[7vw]`}>
        <h2 className={`text-[3vw] aeonik text-[#111111] w-[100%] leading-[1.3] tablet:text-[5vw] mobile:text-[10vw] para-animation`}>
          {title}
        </h2>
        <p className="leading-[1.8] text-justify w-full text-[#2A2A2A] text-[1.15vw] tablet:text-[2vw] mobile:text-[4.5vw] mobile:w-full mobile:text-center">
          {description}
        </p>
      </div>
    </div>
  )
}

const content = [
  {
    id: 1,
    image: "/assets/manufacturing/state-1.png",
    title: "State of the Art Excellence",
    description: "Designed by the visionary Spanish architect Ricardo Bofill, the AMS campus is a testament to the bold vision and ingenuity of modern architecture, spanning 250,000 sq. ft. across 10.5 acres. This iconic MedTech hub stands as a beacon of excellence, combining form and function. It merges cutting-edge design with a groundbreaking blueprint that embodies AMS's commitment to healthcare innovation. A symbol of ambition, this campus is not just a facility—it is a landmark for medical, technological, and educational advancement, shaping the future of healthcare.",
    className: ""
  },
  {
    id: 2,
    image: "/assets/manufacturing/state-2.png",
    title: "Cultivating High Standards",
    description: "AMS's expansive clean rooms are built to surpass industry standards, with a focus on reducing bio burden and maintaining impeccable cleanliness. Utilizing lean methodologies, including unidirectional material flow and precise man-material movement, we ensure unmatched efficiency and rigorous quality control. Our adoption of the visual factory concept enhances productivity, promotes agility, and reinforces our commitment to patient safety and product reliability.",
    className: "flex-row-reverse"
  },
  {
    id: 3,
    image: "/assets/manufacturing/state-3.png",
    title: "Commitment to Quality",
    description: "At AMS, our unwavering commitment to quality is at the heart of every product we manufacture. We uphold some of the most stringent testing standards in the industry, building a culture that constantly strives to exceed expectations and elevate protocols. Our in-house QA & RA center, equipped with cutting-edge equipment, and a world-class microbiology lab enable us to perform comprehensive, precise testing at every stage. With meticulous planning, robust control functions, and an unwavering focus on continuous improvement, we ensure that every product meets the highest standards.",
    className: ""
  },
  {
    id: 4,
    image: "/assets/manufacturing/state-4.png",
    title: "Logistical Precision",
    description: "At AMS, patients remain at the core of our supply chain strategy, driving the creation of optimal and efficient channels that benefit both patients and healthcare organizations. Our advanced distribution center serves as a pivotal element, integrating state-of-the-art warehousing with streamlined logistics to deliver unmatched precision and reliability. From meticulous inventory management to timely deliveries, AMS exemplifies logistical excellence, ensuring seamless operations that consistently support patient care worldwide.",
    className: "flex-row-reverse"
  },
  {
    id: 5,
    image: "/assets/manufacturing/state-5.png",
    title: "Green Manufacturing",
    description: "AMS operates a LEED-certified facility dedicated to sustainable manufacturing. Our commitment to environmental stewardship is reflected in our energy-efficient operations, responsible waste management, wastewater recycling, and the use of solar electricity. These practices underscore our dedication to minimizing our environmental footprint while advancing medical technology.",
    className: ""
  }
];
