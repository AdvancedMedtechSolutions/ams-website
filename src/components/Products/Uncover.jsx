import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/scrollbar';
import { Scrollbar } from 'swiper/modules';
import { useRouter } from "next/router";
import { FreeMode } from "swiper/modules";


const cards = [
  { img: "/assets/advacryl/advacryl-rapid.png", txt: "Advacryl Rapid", src: "/wound-care/advacryl-rapid-polyglactin-910-suture" },
  { img: "/assets/advacryl/advacryl.png", txt: "Advacryl", src: "/wound-care/advacryl-polyglactin-910-suture" },
  { img: "/assets/advacryl/advacrylplus.png", txt: "Advacryl Plus", src: "/wound-care/coated-advacryl-plus-antibacterial-polyglactin-910-suture" },
  { img: "/assets/advacryl/advamryl.png", txt: "Advamryl", src: "/wound-care/advamryl-poliglecaprone-25-suture" },
  { img: "/assets/advacryl/advapd.png", txt: "Advapd", src: "/wound-care/advapd-polydioxanone-suture" },
  { img: "/assets/advacryl/advacat.png", txt: "Advacat", src: "/wound-care/advacat-gut-suture-chromic-plain" },
  { img: "/assets/advacryl/advalene.png", txt: "Advalene", src: "/wound-care/advalene-polypropylene-suture" },
  { img: "/assets/advacryl/advabond.png", txt: "Advabond", src: "/wound-care/advabond-polyester-suture" },
  { img: "/assets/advacryl/advasyl.png", txt: "Advasyl", src: "/wound-care/advasyl-silk-suture" },
  { img: "/assets/advacryl/advacryl.png", txt: "Advacryl", src: "/wound-care/advacryl-polyglactin-910-suture" },
  { img: "/assets/advacryl/bondtape.png", txt: "Advabond tape", src: "/wound-care/advabond-polyester-tape-suture" }, 
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
        <div className="h-[6vw] w-[10vw] mobile:w-[55vw] mobile:h-[60vw] tablet:w-[25vw] tablet:h-[25vw]">
          <div className="w-full h-full relative right-[40%] top-[30%] mobile:right-0 mobile:top-0">
            <Image src={img} fill alt="uncover" className="object-contain" />
          </div>
        </div>
      </div>
    </Link>
  );
};

const Uncover = () => {
  const router = useRouter();
  const currentRoute = router.pathname;

  const filteredCards = cards.filter(card => card.src !== currentRoute);

  return (
    <section id="uncover" className="mobile:pb-[20%] py-[5%] w-screen overflow-hidden ">
      <div className="flex flex-col items-center justify-center px-[4%] pb-[4%]">
        <div className="mobile:mb-[7vw]">
          <h2 className="title-2 aeonik">Uncover More</h2>
        </div>
        <div className="w-screen h-full pt-[5vw] px-[3vw] mobile:pl-[5vw] ">
          <Swiper
            slidesPerView={1.2}
            spaceBetween={20}
            freeMode={true}
        scrollbar={true}
            modules={[FreeMode, Scrollbar]}
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
    </section>
  );
};

export default Uncover;
