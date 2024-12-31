/* eslint-disable react-hooks/rules-of-hooks */
import PrimaryButton from "../Button/PrimaryButton";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import LinkButton from "../Button/LinkButton";

gsap.registerPlugin(ScrollTrigger);

export default function Blog() {
  const blogLeft = useRef(null);
  const blogContainer = useRef(null);

  if (globalThis.innerWidth >= 1024) {
    useEffect(() => {
      const ctx = gsap.context(() => {
        ScrollTrigger.create({
          trigger: blogLeft.current,
          start: "top 10%",
          endTrigger: blogContainer.current,
          end: "bottom 90%",
          invalidateOnRefresh: true,
          pin: blogLeft.current,
        });
      });
      return () => ctx.revert();
    });
  }

  return (
    <>
      <section className="p-y-sm tablet:py-[15%] mobile:py-[15vw] w-screen overflow-hidden" ref={blogContainer} id="blogs">
        <div className="px-[12%] flex items-start justify-between w-full tablet:flex-col mobile:flex-col mobile:items-center mobile:px-[5%]">
          <div ref={blogLeft} className="blog-left w-[45%] space-y-[2.5vw] mobile:w-[100%] mobile:space-y-[5vw] tablet:w-full">
            <h2 data-para-anim className="title-2 aeonik mobile:text-center">
              <span>Newsroom</span>
            </h2>
            <p data-para-anim className="content-p w-[95%] tablet:w-[80%] mobile:w-full mobile:px-[3vw] mobile:pb-[15vw] mobile:text-center">
              Stay connected with the latest updates, breakthrough innovations, and exciting events that drive our progress.
            </p>
          </div>
          <div className="blog-right w-1/2 flex flex-col gap-[4vw] items-end tablet:items-center tablet:gap-[6vw] mobile:w-[100%] mobile:space-y-[15vw] tablet:w-full tablet:mt-[7vw]">
            {content.map((item, index) => (
              <Card 
                key={index}
                title={item.title}
                description={item.description}
                image={item.image}
                link={item.link}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

const Card = ({ title, description, image, link }) => {
  return (
    <div className="w-[87%] flex items-start flex-col space-y-[2vw] mobile:w-full mobile:space-y-[4vw] mobile:text-center">
      <div className="h-[18.5vw] w-full fadeUp rounded-[1.1vw] overflow-hidden mobile:rounded-[5vw] mobile:h-[60vw] tablet:h-[35vw] tablet:rounded-[2vw]">
        <Image
          className="w-full h-full object-cover"
          src={image}
          alt="blog image"
          height={360}
          width={640}
        />
      </div>
      <h5  className="text-[2.2vw] font-extralight leading-[1.2] mobile:text-[8vw] mobile:mb-[8vw] tablet:text-[3.5vw]">
        {title}
      </h5>
      <p  className="text-[0.94vw] font-light mobile:text-[4.2vw] tablet:text-[2vw]" >
        {description}
      </p>
      <div className=" !mb-[2vw] tablet:!mb-[4vw] mobile:!mb-[8vw] mobile:w-full mobile:text-center mobile:flex mobile:justify-center">
        <LinkButton link={link} btnText="Read More"/>
      </div>
      <span className="block h-[1px] w-full bg-[#444444] lineDraw tablet:h-[0.5px]" />
    </div>
  )
}

const content = [
  {
    title: "Reimagining Health, Redefining Care Arab Health 2025",
    description: "Advanced MedTech Solutions is excited to showcase innovation at Arab Health 2025! Visit us to explore advanced solutions transforming healthcare.",
    image: "/assets/home/blog-image-1.png",
    link: "/news/arab-health",
  },
  {
    title: "Shaping the Future of Healthcare Advanced Surgery & Cardiovascular",
    description: "AMS serves as a healthcare ecosystem focused on the MedTech fields of Advanced Surgery & Advanced Cardiovascular.",
    image: "/assets/home/blog-image-2.png",
    link: "/news/shaping-the-future-of-healthcare",
  },
  {
    title: "The Next Leap in Endo Surgery 3-Row Series",
    description: "The ADVASTAP Staplers 3-row series is here, setting a new benchmark in endo surgery. Designed to enhance precision and improve patient outcomes, our innovative stapling technology is revolutionizing the surgical landscape..",
    image: "/assets/home/blog-image-3.png",
    link: "/news/next-leap-in-endo-surgery",
  },
  {
    title: "Building the Future of MedTech Expansion of The AMS Campus",
    description: "AMS Takes Center Stage at Arab Health in Dubai: Leading the Charge in Global MedTech with Industry leaders and partners Transforming Healthcare Worldwide.",
    image: "/assets/home/blog-image-4.png",
    link: "/news/building-the-future-of-medtech",
  },
]