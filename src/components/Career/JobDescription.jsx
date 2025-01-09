import React, { useEffect, useState } from "react";
import Image from "next/image";
import CareerForm from "./CareerForm";
import styles from "../Button/style.module.css";
import style from "@/styles/job.module.css";

const JobDescription = ({ onClose, job }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOutsideClick = (e) => {
    if (e.target.classList.contains("background-overlay")) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleLinkClick = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <section id="job-description" className="w-screen h-screen fixed bg-black/60 z-[999] top-0 left-0 fade-in background-overlay">
        <div className="absolute right-[5%] top-[5%] z-[999]">
          <button onClick={onClose} className="flex items-center gap-3 group ">
            <span className="w-[2.7vw] h-[2.7vw] bg-white group-hover:bg-black duration-300 flex justify-center items-center p-2 border border-head rounded-full tablet:w-[5vw] tablet:h-[5vw] mobile:w-[10vw] mobile:h-[10vw] mobile:p-[2.8vw]">
              <Image
                className="group-hover:invert duration-300 group-hover:rotate-180 transition-all"
                src="/assets/icons/close-icon.svg"
                alt="Close Menu"
                width={13}
                height={13}
              />
            </span>
          </button>
        </div>
        {!isModalOpen ? (
          <div className=" flex items-center justify-center h-full">
            <div
              className="w-[70vw] h-[45vw] rounded-[3vw] overflow-hidden relative px-[5vw] pt-[5vw] bg-white jd-card mobile:h-[70vh] mobile:w-[90vw] mobile:rounded-[7vw] mobile:py-[10vw] tablet:w-[85vw] tablet:h-[70vh]"
              id="jd-block"
            >
              <div className="w-full h-full absolute top-0 left-0">
                <Image
                  src="/assets/career/jd-bg.png"
                  alt="jd-bg"
                  fill
                  className="object-cover w-full h-full"
                />
              </div>
              <div
                data-lenis-prevent
                className="overflow-y-auto overflow-visible h-full w-full"
              >
                <div className="w-full h-full relative z-[10] mobile:gap-[7vw] tablet:gap-[4vw] tablet:pt-[4vw]">
                  <h3 className="text-[2.5vw] tablet:text-[5vw] mobile:text-3xl mobile:mb-4 aeonik mb-6 text-[#2a2a2a]">{job.title}</h3>
                  <div
                    className={`${style.job} space-y-[2vw] tablet:space-y-[3vw] mobile:space-y-[5vw]`}
                    dangerouslySetInnerHTML={{ __html: job.content }} />
                  <div className={`${styles.btn} cursor-pointer mobile:min-h-[15vw]`} onClick={handleLinkClick}>
                    <div aria-hidden="true" className={styles.btnCircle}>
                      <div className={styles.btnCircleText}>
                        <svg
                          viewBox="0 0 10 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className={styles.btnIcon}
                        >
                          <path
                            data-v-f4363f2a
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M3.82475e-07 5.625L7.625 5.625L4.125 9.125L5 10L10 5L5 -4.37114e-07L4.125 0.874999L7.625 4.375L4.91753e-07 4.375L3.82475e-07 5.625Z"
                            className={`${styles.btnPath}`}
                          />
                          <path
                            data-v-f4363f2a
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M3.82475e-07 5.625L7.625 5.625L4.125 9.125L5 10L10 5L5 -4.37114e-07L4.125 0.874999L7.625 4.375L4.91753e-07 4.375L3.82475e-07 5.625Z"
                            className={`${styles.btnPath}`}
                          />
                        </svg>
                      </div>
                    </div>
                    <span className={styles.btnText}>Apply Now</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <CareerForm onClose={onClose} />
        )}
      </section>
    </>
  );
};

export default JobDescription;
