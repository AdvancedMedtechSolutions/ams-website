import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper/modules";
import styles from "./styles.module.css";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const NewsCard = ({ title, para, img, link, innertitle }) => {
  return (
    <>
      <Link href={link}>
        <div className="h-full w-full rounded-[2vw] newsCard relative transition-all duration-500 ease group">
          <div className="relative h-full w-full">
            <Image
              src={img}
              fill
              alt="news-img"
              className="rounded-[2.5vw] object-cover"
            />
          </div>
          <div className="absolute inset-0 flex flex-col justify-center z-[5] text-white transition-all rounded-[2.5vw] duration-500 ease opacity-0 group-hover:opacity-100 group-hover:bg-black/80 mobile:hidden tablet:hidden">
            <p
              data-para-anim
              className="text-[1.65vw] font-light py-[0.5vw]  px-[2vw]"
            >
              {innertitle}
            </p>
            <p data-para-anim className="text-[1.25vw] font-light px-[2vw] ">
              {para}
            </p>
          </div>

          <div>
            <p className="font-light text-[2vw] px-[2vw] py-[1vw] aeonik leading-[1.2] fadeUp mobile:text-[6.5vw] tablet:text-[4vw]">
              {title}
              <span className="inline-block">
                <Image
                  className=" w-[1.2vw] h-[1.2vw] ml-[0.2vw]  mobile:ml-[2vw] relative z-[7] mobile:w-[3.5vw] mobile:h-[3.5vw] tablet:h-[2vw] tablet:w-[2vw] tablet:ml-[1vw]"
                  src="/assets/icons/arrow-up-right.svg"
                  alt="arrow"
                  width={50}
                  height={50}
                />
              </span>
            </p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default function Insights() {
  const handleSlideChange = (swiper) => {
    if (globalThis.innerWidth > 1024) {
      gsap.to(".swiper-slide", {
        scale: 0.8,
        duration: 0.5,
        ease: "power2.out",
      });
      gsap.to(swiper.slides[swiper.activeIndex], {
        scale: 1,
        duration: 1,
        ease: "power3.out",
      });
      const prevSlide = swiper.slides[swiper.activeIndex - 1];
      const nextSlide = swiper.slides[swiper.activeIndex + 1];

      if (prevSlide) {
        gsap.to(prevSlide, { scale: 0.8, duration: 1, ease: "power3.out" });
      }
      if (nextSlide) {
        gsap.to(nextSlide, { scale: 0.8, duration: 1, ease: "power3.out" });
      }
    }
  };

  return (
    <>
      <section
        id="insights"
        className="py-[5%] relative overflow-hidden w-screen h-full mobile:pt-[15vw] mobile:h-[225vw] tablet:py-[10vw] tablet:h-[135vw] "
      >
        <div className="">
          <div className="insights-top text-center flex flex-col items-center">
            <h2 data-para-anim className="title-2 aeonik leading-[1.3]">
              Insights and Innovations in Healthcare
            </h2>
            <p
              data-para-anim
              className="content-p my-6 w-[50%] mobile:w-[90%] mobile:my-10 tablet:w-[70%]"
            >
              Welcome to the AMS Blog, your go-to resource for cutting-edge
              advancements and expert insights in the medical and healthcare
              industry.
            </p>
            <p
              data-para-anim
              className="aeonik font-light text-[2.5vw]  mt-[2vw] mobile:text-[8vw] tablet:text-[5vw]"
            >
              What&apos;s Trending News
            </p>
          </div>
          <div className="w-full h-[48vw] pt-[3vw] pb-[2vw] cursor-grab fadeUp mobile:pt-[10vw]">
            <Swiper
              scrollbar={{
                hide: false,
              }}
              initialSlide={1}
              centeredSlides={true}
              breakpoints={{
                541: {
                  slidesPerView: 1,
                  spaceBetween: 50,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 50,
                },
                1024: {
                  slidesPerView: 2.5,
                  spaceBetween: 0,
                },
              }}
              onSlideChange={handleSlideChange}
              onSwiper={(swiper) => handleSlideChange(swiper)}
              modules={[Scrollbar]}
              className={`h-full w-full ${styles.newsSwiper} mobile:h-[100vw] tablet:h-[65vw]`}
            >
              <SwiperSlide className="pb-[7vw] mobile:px-[5vw]">
                <NewsCard
                  para={
                    "The ADVASTAP Staplers 3-row series is here, setting a new benchmark in endo surgery. Designed to enhance precision and improve patient outcomes, our innovative stapling technology is transforming the surgical landscape.   "
                  }
                  title={"3-Row Series"}
                  img={"/assets/blogs/3-row.jpg"}
                  link={"/next-leap-in-endo-surgery"}
                  innertitle={"Discover the Next Leap in Endo Surgery "}
                />
              </SwiperSlide>
              <SwiperSlide className="pb-[7vw] mobile:px-[5vw]">
                <NewsCard
                  para={
                    "Advanced MedTech Solutions is excited to showcase innovation at Arab Health 2025! Visit us to explore advanced solutions transforming healthcare."
                  }
                  title={"Arab Health 2025 "}
                  img={"/assets/blogs/arab-health.jpg"}
                  link={"/arab-health"}
                  innertitle={"Reimagining Health, Redefining Care"}
                />
              </SwiperSlide>
              <SwiperSlide className="pb-[7vw] mobile:px-[5vw]">
                <NewsCard
                  para={
                    "AMS is expanding the campus with the launch of its 60,000 sq. ft. Phase 2 facility, enhancing capabilities in medical device manufacturing, sustainability, and innovation. Featuring the Advanced MedTech Academy and advanced cleanroom spaces, this expansion sets new standards in global healthcare and patient care. "
                  }
                  title={"Expansion of The AMS Campus"}
                  img={"/assets/blogs/expansion.jpg"}
                  link={"/building-the-future-of-medtech"}
                  innertitle={"Building the Future of MedTech"}
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}
