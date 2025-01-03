import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay } from "swiper/modules";
import { useLenis } from 'lenis/react'
import styles from "@/styles/careerSwiper.module.css";
import JobDescription from "./JobDescription";
import Image from "next/image";

const JobCard = ({ dept, designation, location, onClick }) => {
  return (
    <div onClick={onClick} className="pt-[5%] h-[28vw]  flex flex-col items-center justify-between gap-[3vw] bg-white/50 border-[1px]  rounded-[40px] text-center career-card cursor-pointer mobile:w-[90vw] mobile:h-[100vw] mobile:rounded-[7vw] tablet:w-[40.5vw] tablet:h-[50vw]">
      <div className="content-p mobile:text-[5.7vw] tablet:text-[2.5vw] mt-[2vw]">
        {dept}
      </div>
      <div className="w-[75%]">
        <h3 className="text-[2.2vw] leading-[1.3] font-light text-[#2a2a2a] mobile:text-[8.3vw] tablet:text-[4.5vw]">
          {designation}
          <Image className="ml-[0.5vw] w-[1.2vw] tablet:ml-[1vw] tablet:w-[2.5vw] mobile:w-[4vw] mobile:ml-[2vw] inline-block" src={"/assets/icons/arrow-up-right.svg"} alt="arrow-up-right" height={20} width={20} />
        </h3>
      </div>
      <div className="content-p border-t-[1px] w-full h-[4vw] items-center py-[3%] bg-white/90 flex justify-center location rounded-b-[40px] mobile:w-[90vw] mobile:h-[16vw] mobile:rounded-b-[7vw] tablet:text-[2.5vw] tablet:w-[40.5vw] tablet:h-[7vw]">
        {location}
      </div>
    </div>
  );
};

const Jobs = ({ jobs }) => {
  const swiperRef = useRef(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const lenis = useLenis();

  const handleCardClick = (job) => {
    lenis && lenis.stop();
    document.body.style.overflow = "hidden";
    setSelectedJob(job);
    setModalOpen(true);
  };

  // Close modal and restart Lenis
  const handleModalClose = () => {
    setModalOpen(false);
    lenis && lenis.start();
    document.body.style.overflow = "";
  };

  return (
    <section id="jobs">
      <div className="py-[5%] mobile:py-[10%] mobile:pb-[15%] mobile:flex mobile:flex-col mobile:gap-[7vw] tablet:mt-[10%] tablet:mb-[5%]">
        <div className="flex items-center justify-center tablet:mb-[8vw]">
          <h2 data-para-anim className="title-2 aeonik">
            Featured Jobs
          </h2>
        </div>
        <div className={`mt-[5%] ${styles.careerSwiper} careerSwiper fadeUp`}>
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            slidesPerView={1}
            spaceBetween={150}
            speed={500}
            loop={true}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              541: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 100,
              },
              1350: {
                slidesPerView: 3,
                spaceBetween: 170,
              },
              1650: {
                slidesPerView: 3,
                spaceBetween: 200,
              }
            }}
            modules={[Pagination, Autoplay]}
            className="MySwiper !px-[5vw]"
          >
            {jobs.map((job, index) => (
              <SwiperSlide key={index}>
                <JobCard
                  dept={job.jobfields.category}
                  designation={job.title}
                  location={job.jobfields.location}
                  onClick={() => handleCardClick(job)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {isModalOpen && <JobDescription job={selectedJob} onClose={handleModalClose} />}
      
    </section>
  );
};

export default Jobs;
