import React, { useState } from "react";
import Image from "next/image";
import CareerForm from "./CareerForm";
import styles from "../Button/style.module.css";

const JobDescription = ({ onClose }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleBackgroundClick = (e) => {
    if (e.target.id === "job-description" || !e.target.id == "jd-block") {
      onClose();
    }
  };
  const handleLinkClick = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <section
        id="job-description"
        onClick={handleBackgroundClick}
        className="w-screen h-screen fixed bg-black/60 z-[999] top-0 left-0 fade-in"
        // Close modal on click outside the card
      >
        {" "}
        <button
          className="absolute flex right-[5%] top-[5%]  items-center gap-3 z-[999]"
          onClick={onClose}
        >
        
          <span className="w-[2.2vw] h-[2.2vw] flex justify-center items-center p-2 border border-head rounded-full tablet:w-[4vw] tablet:h-[4vw] mobile:w-[10vw] mobile:h-[10vw] mobile:p-[2.8vw]">
            <Image
              src="/assets/icons/close-icon.svg"
              alt="Close Menu"
              className="invert"
              width={20}
              height={20}
            />
          </span>
        </button>
        {!isModalOpen ? (
          <div className="container-lg flex items-center justify-center h-full">
            <div
              className="w-[70vw] h-[45vw]  rounded-[3vw] overflow-hidden relative px-[5vw] pt-[3vw] bg-white jd-card mobile:h-[70vh] mobile:w-[90vw] mobile:rounded-[7vw] mobile:py-[10vw] tablet:w-[85vw] tablet:h-[70vh]"
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
                <div className="w-full h-full flex flex-col gap-[2vw] text-[1.3vw] !text-[#111111] relative z-[10] font-light mobile:text-[4vw] mobile:gap-[7vw] tablet:text-[2.5vw] tablet:gap-[4vw] tablet:pt-[4vw]">
                  <p>
                    Experience: 3-5 years (medical devices/interventional
                    cardiology preferred) Qualification: Bachelor&apos;s in Life
                    Sciences/Biomedical Engineering (MBA preferred)
                  </p>

                  <ul className="list-disc">
                    <span className="mobile:font-medium">Key Responsibilities</span>
                    <div className="pl-[2%] mobile:pl-[5%] tablet:pl-[5%]">
                      <li > Develop product strategies and roadmaps.</li>
                      <li>
                        Conduct market research to identify trends and
                        opportunities.
                      </li>
                      <li>
                        Collaborate with R&D on product development and
                        compliance.
                      </li>
                      <li>Lead product launches and create marketing plans.</li>
                      <li>Provide training and support to sales teams.</li>
                    </div>
                  </ul>
                  <ul className="list-disc">
                    <span className="mobile:font-medium">Skills Required</span>
                    <div className="pl-[2%] mobile:pl-[5%] tablet:pl-[5%]">
                      <li>
                        Strong understanding of interventional cardiology.
                      </li>
                      <li>Strategic thinking and analytical skills.</li>
                      <li>
                        Excellent communication and presentation abilities.
                      </li>
                    </div>
                  </ul>
                  <p>Join AMS and be part of driving healthcare innovation!</p>
                  <div
                    className={`${styles.btn} cursor-pointer mobile:min-h-[15vw]`}
                    onClick={handleLinkClick}
                  >
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
