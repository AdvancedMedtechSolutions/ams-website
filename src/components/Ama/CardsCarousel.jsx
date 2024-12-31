import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import 'swiper/css/scrollbar';
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import { Media } from "../media";
import { useLenis } from "lenis/react";
import Modal from "../Oem/Modal";
import { Scrollbar } from "swiper/modules";


export default function CardsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
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
    const content = modalContent.find((item) => item.id === selectedCardId)?.description;

  const cards = [
    { src: "/assets/ama/ama-card-1.webp", alt: "ama-card-1", title:"Gynaecology AMA Program" },
    { src: "/assets/ama/ama-card-2.webp", alt: "ama-card-2", title:"Knotting Workshop" },
    { src: "/assets/ama/ama-card-3.webp", alt: "ama-card-3", title:"Nurturing Nursing Skills Program" },
    { src: "/assets/ama/ama-card-4.webp", alt: "ama-card-4", title:"Cardiac Observership Programs" },
    { src: "/assets/ama/ama-card-5.webp", alt: "ama-card-5",title:"General Surgery AMA Program" },
    { src: "/assets/ama/ama-card-6.jpg", alt: "ama-card-6",title:"Hands on Stapling Workshop" },

  ];

  return (
    <>
      <section className="pb-[10%] w-screen overflow-hidden" id="cards-carousel">
        <Media greaterThan="tablet">
          <div className="w-full h-full flex flex-col gap-[4vw] ">
            <h2 data-para-anim className="aeonik title-2 text-center">
              Our Featured Programs
            </h2>
            <div className="mt-[2vw] fadeUp px-[5vw]">
              <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={3.5}
                initialSlide={0}
                scrollbar={
                  {
                      draggable: true, 
                  }
              }
                spaceBetween={60}
                speed={500}
                coverflowEffect={{
                  rotate: 20,
                  stretch: 10,
                  slideShadows: false,
                }}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)} 
                modules={[EffectCoverflow, Pagination, Autoplay, Scrollbar]}
                className="mySwiper ama-card !pb-[3vw]"
              >
                {cards.map((card, index) => (
                  <SwiperSlide key={index} onClick={() => openModal(index+1)}>
                    <div className="w-full h-full flex flex-col gap-[2.5vw]">
                      <div className="w-full h-[32vw] rounded-[2vw] overflow-hidden">
                        <Image
                          src={card.src}
                          width={320}
                          height={560}
                          className="object-cover w-full h-full"
                          alt={card.alt}
                        />
                      </div>
                      <p className={`text-[1.5vw] font-light text-center card-title ${activeIndex === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"} transition-all duration-500 ease-in-out`}>
                       {card.title}
                      </p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            
          </div>
        </Media>

        <Media lessThan="desktop">
          <div className="py-[10%] tablet:py-[5%]">
            <div className="w-full flex flex-col gap-[8vw] tablet:gap-[8vw]">
              <div className="w-full flex justify-center">
                <h2 className="title-2 aeonik text-center px-[2vw] tablet:w-[80%] mobile:w-[95%]">
                  <span data-para-anim>Our Featured Programs</span>
                </h2>
              </div>
              <div className="w-full mobile:overflow-scroll mobile:mt-[5vw] mobile:fadeUp mobile:block hidden mobile:pr-[5%] fadeUp tablet:overflow-scroll tablet:block tablet:pr-[5%] overflow-visible tablet:mt-0">
                <div className="mobile:flex mobile:flex-nowrap mobile:w-fit mobile:gap-[5vw] mobile:ml-[5vw] mobile:h-fit tablet:flex tablet:flex-nowrap tablet:w-fit tablet:gap-[3vw] tablet:h-fit tablet:ml-[5vw]">
                  {cards.map((card, index) => (
                    <div className="w-full h-full flex flex-col gap-[3vw] mobile:gap-[5vw]" key={index} onClick={() => openModal(index+1)}>
                      <div className="w-[85vw] h-[100vw] tablet:w-[40vw] tablet:h-[50vw] relative rounded-[6vw] tablet:rounded-[3vw] overflow-hidden" >
                        <Image
                          src={card.src}
                          fill
                          className="object-cover"
                          alt={card.alt}
                        />
                      </div>
                      <div className="w-full product-base-text flex justify-center">
                        <p className="aeonik font-light tracking-widest text-[5vw] text-center tablet:text-[2.5vw]">
                         {card.title}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Media>
        <Modal isOpen={isModalOpen} onClose={closeModal} >
                    {content}
                    </Modal>
      </section>
    </>
  );
}

const modalContent = [
  {
    id: 1,
    description: (
      <div>
        <h2 className="text-[2.5vw] font-light leading-[1.2] mobile:text-[6.5vw] tablet:text-[3.5vw]">Objective:</h2>
        <p className="content-p py-[1vw] mobile:py-[3vw] tablet:py-[2vw]">The Gynaecology AMA Programs are designed for surgeons aiming to enhance their expertise in advanced gynaecological procedures, including hysterectomy, laparoscopic myomectomy, and vNotes techniques. Through theoretical sessions and live demonstrations led by renowned experts, participants gain valuable insights into the latest surgical advancements, equipping them with the skills to manage complex cases with precision and confidence.</p>
        
        <p className="content-p py-[1vw] mobile:py-[3vw] tablet:py-[2vw]">These programs provide a comprehensive platform to refine clinical practice and expand surgical skills. By integrating advanced techniques into their expertise, participants can achieve optimal patient outcomes, improve reproductive health, and elevate the standard of care in gynaecological procedures.</p>
      </div>
    ),
  },
  {
    id: 2,
    description: (
      <div>
      <h2 className="text-[2.5vw] font-light leading-[1.2] mobile:text-[6.5vw] tablet:text-[3.5vw]">Objective:</h2>
      <p className="content-p py-[1vw] mobile:py-[3vw] tablet:py-[2vw]">The Surgical Suturing and Knotting Workshop is designed to equip participants with essential techniques for secure suturing and knotting. Focused on addressing challenges like tissue type, wound depth, and postoperative tension, the workshop enhances precision, adaptability, and cosmetic outcomes through hands-on training and expert guidance.</p>
      
      <p className="content-p py-[1vw] mobile:py-[3vw] tablet:py-[2vw]">The workshop empowers participants with the confidence and skills to perform effective suturing and knotting. By mastering advanced techniques and material selection, attendees improve patient outcomes, enhance healing, and elevate their professional expertise.</p>
    </div>
    ),
  },
  {
      id: 3,
      description: (
        <div>
        <h2 className="text-[2.5vw] font-light leading-[1.2] mobile:text-[6.5vw] tablet:text-[3.5vw]">Objective:</h2>
        <p className="content-p py-[1vw] mobile:py-[3vw] tablet:py-[2vw]">The Nurturing Nursing Skills Program by AMS aims to empower nurses with enhanced leadership, technical, and soft skills to elevate the standard of patient care. This program strives to cultivate confident, capable nursing professionals who embody excellence and compassion, ensuring that healthcare delivery continuously improves to meet the demands of dynamic medical environments.</p>
        
        <p className="content-p py-[1vw] mobile:py-[3vw] tablet:py-[2vw]">At AMS, we believe that investing in the growth of nurses is integral to shaping the future of healthcare. The Nurturing Nursing Skills Program reflects our commitment to fostering professional development, enhancing patient outcomes, and creating a culture of excellence in care delivery. By empowering nurses, we are not only advancing their careers but also contributing to a healthier, more compassionate world.</p>
      </div>
        ),
    },
    {
      id: 4,
      description: (
        <div>
        <h2 className="text-[2.5vw] font-light leading-[1.2] mobile:text-[6.5vw] tablet:text-[3.5vw]">Objective:</h2>
        <p className="content-p py-[1vw] mobile:py-[3vw] tablet:py-[2vw]">These cardiac programs—Valve Repair Workshop, Pediatric Observership Programs, MICS Observerships, Hands-on Vascular Anastamosis Workshop, Hands-on Experience of Valve Repair & CABG Technique, and Advanced Cardiac Cadaver Workshop—are designed for surgeons to refine and elevate their skills. Attendees will learn from key opinion leaders and esteemed faculties through live surgery observations, interactive discussions, and dedicated sessions, gaining deep insights into advanced surgical techniques. This immersive learning environment will empower participants with the knowledge and expertise needed to apply these methods effectively in their practice. </p>
        
        <p className="content-p py-[1vw] mobile:py-[3vw] tablet:py-[2vw]">Participants will gain both theoretical knowledge and practical experience, empowering them to effectively apply advanced techniques in their practice. This hands-on experience, combined with expert guidance and exposure to cutting-edge methods, will enhance professional growth and patient outcomes in cardiac surgery, setting a new standard for excellence.</p>
      </div>
        ),
    },
    {
      id: 5,
     description:(
      <div>
      <h2 className="text-[2.5vw] font-light leading-[1.2] mobile:text-[6.5vw] tablet:text-[3.5vw]">Objective:</h2>
      <p className="content-p py-[1vw] mobile:py-[3vw] tablet:py-[2vw]">The General Surgery AMA Program is a comprehensive workshop series designed to enhance surgeons&apos; skills in hernia repair, colorectal surgery, and hemorrhoidectomy/proctology procedures. Participants gain practical expertise through hands-on training with staplers and other essential instruments. Led by esteemed faculty and key opinion leaders, the program provides real-time insights into the complexities of these surgeries, ensuring surgeons are equipped with the latest techniques and tools.</p>
      
      <p className="content-p py-[1vw] mobile:py-[3vw] tablet:py-[2vw]">The General Surgery AMA Program equips surgeons with the confidence and proficiency needed to perform complex procedures effectively. By mastering advanced techniques, participants not only improve patient outcomes but also foster their professional growth. With practical exposure and learning opportunities in real surgical settings, this program is a step toward achieving excellence in surgical care.</p>
    </div>
     )
    },
    {
      id: 6,
     description:(
      <div>
      <h2 className="text-[2.5vw] font-light leading-[1.2] mobile:text-[6.5vw] tablet:text-[3.5vw]">Objective:</h2>
      <p className="content-p py-[1vw] mobile:py-[3vw] tablet:py-[2vw]">The Intensive 1-Day Hands-On Stapling Workshop is designed for junior surgeons to enhance their skills in open and laparoscopic surgeries. This workshop offers expert demonstrations, real-time learning, and hands-on practice with animal tissue and colon.</p>
      
      <p className="content-p py-[1vw] mobile:py-[3vw] tablet:py-[2vw]">The Intensive 1-Day Hands-On Stapling Workshop is a prime opportunity for junior surgeons to upskill and gain confidence. With expert guidance and hands-on practice, participants will leave with advanced stapling techniques and practical knowledge to apply directly in their surgical careers.</p>
    </div>
     )
    },
  
];
