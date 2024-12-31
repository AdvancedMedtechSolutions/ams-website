import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useRouter } from "next/router";
import { FreeMode } from "swiper/modules";


const cards = [
    { img: "/assets/advalene-cv/advalenecv.png", txt: "Advalene", src: "/advalene-cv" },
    { img: "/assets/advalene-cv/advabondcv.png", txt: "Advabond", src: "/advabond-cv" },
    { img: "/assets/advalene-cv/advasteelcv.png", txt: "Advasteel", src: "/advasteel-cv" },
    { img: "/assets/advalene-cv/advapacercv.png", txt: "Advapacer", src: "/advapacer-and-wax" },
    { img: "/assets/advalene-cv/advawaxcv.png", txt: "Advawax", src: "/advapacer-and-wax" },
    { img: "/assets/advalene-cv/advaclipcv.png", txt: "Advaclip", src: "/#" }
];


const UncoverCard = ({ img, txt, src }) => {
  return (
    <Link href={src || ""}>
      <div
        className={`w-[20.5vw] h-[11.5vw] relative flex justify-between items-center cursor-pointer rounded-[2vw] overflow-hidden border uncover-card bg-white/50 mobile:w-[75vw] mobile:h-[90vw] mobile:rounded-[9vw] mobile:flex-col-reverse mobile:justify-center mobile:py-[10%] mobile:pt-[30%] tablet:w-[40vw] tablet:h-[25vw]`}
      >
        <div className="flex flex-col justify-start items-start text-left w-full h-full pl-[2vw] pt-[2vw] mobile:items-center mobile:justify-end mobile:py-[4vw] mobile:pl-0">
          <p
            className="font-light text-[1.1vw] uppercase whitespace-nowrap mobile:text-[7vw] tablet:text-[3vw]"
          >
            {txt}
          </p>
        </div>
        <div className="h-[6vw] w-[24vw] mobile:w-[55vw] mobile:h-[60vw] tablet:w-[25vw] tablet:h-[25vw]">
          <div className="w-full h-full relative right-[-7%]">
            <Image src={img} fill alt="uncover" className="object-contain" />
          </div>
        </div>
      </div>
    </Link>
  );
};

const UncoverCV = () => {
  const router = useRouter();
  const currentRoute = router.pathname;

  const filteredCards = cards.filter(card => card.src !== currentRoute);

  return (
    <section id="uncovercv" className="mobile:pb-[20%] py-[5%] w-screen overflow-hidden ">
      <div className="flex flex-col items-center justify-center px-[4%] pb-[4%]">
        <div className="mobile:mb-[7vw]">
          <h2 className="title-2 aeonik">Uncover More</h2>
        </div>
        <div className=" w-full overflow-visible">

        <div className="w-screen h-full pt-[5vw] px-[3vw] ml-[-3vw] mobile:pl-[3vw] mobile:overflow-scroll ">
          <Swiper
            slidesPerView={1.2}
            spaceBetween={20}
            freeMode={true}
            modules={[FreeMode]}
            breakpoints={{
              540: { slidesPerView: 2.2 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
            className="uncover-swiper w-full h-full"
          >
            {filteredCards.map((card, index) => (
              <SwiperSlide key={index}>
                <UncoverCard img={card.img} txt={card.txt} src={card.src} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        </div>
      </div>
    </section>
  );
};

export default UncoverCV;
