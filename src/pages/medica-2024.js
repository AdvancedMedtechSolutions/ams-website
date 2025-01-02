import Hero from "@/components/BlogDetail/Hero";
import Layout from "@/components/Layout";
import React from "react";
import Image from "next/image";
import { fadeUp, paraAnim } from "@/components/gsapAnimations";
import { NextSeo } from "next-seo";

const medica = () => {
  paraAnim();
  fadeUp();
  return (
    <>
      <NextSeo
        title="Medica 2024"
        description="  It's a Wrap: A Successful MEDICA 2024!"
      />
      <Layout>
        <Hero
          img={"/assets/blogs/medica-hero.jpg"}
          dark={"dark"}
        />
        <section
          id="blog-content"
          className="w-screen h-full py-[5vw] mobile:py-[10vw]"
        >
          <div className="container-lg mobile:px-[5vw]">
            <h2
              data-para-anim
            className="text-[3.2vw] font-light  leading-[1.2] text-[#1a1a1a] aeonik flex justify-center   text-center mobile:text-[7.2vw]  mobile:py-[3vw] tablet:text-[4vw]"
            >
                <span data-para-anim className="w-[60%] tablet:w-[80%] mobile:w-[90%]">
              It&apos;s a Wrap: A Successful MEDICA 2024!
              </span>
            </h2>
            <div className="py-[1vw] mobile:py-[5vw] fadeUp">
              <p className="content-p py-[1vw]  mobile:py-[3vw]">
                As the curtains close on{" "}
                <span className="font-normal">MEDICA 2024 </span>, Advanced
                MedTech Solutions (AMS) extends its heartfelt gratitude to all
                the visitors, partners, and organizers who made this event an
                extraordinary success. Together, we celebrated innovation,
                shared insights, and took significant strides toward a healthier
                future.
              </p>
            </div>

            <div className="py-[1vw] mobile:py-[5vw] fadeUp">
              <h2 className="text-[2.5vw] font-light leading-[1.2] text-[#1a1a1a] aeonik mobile:text-[6.5vw]  mobile:py-[3vw] tablet:text-[3.5vw]">
                Connecting Minds, Sharing Ideas
              </h2>
              <p className="content-p py-[1vw]  mobile:py-[3vw]">
                MEDICA 2024 provided a platform for us to connect with global
                healthcare experts, fostering collaborations that inspire
                innovation. From insightful discussions to hands-on
                demonstrations, the event was a hub of transformative ideas
                aimed at advancing healthcare worldwide.
              </p>
            </div>

            <div className="py-[2vw] fadeUp mobile:py-[5vw]">
              <div className="w-full h-[40vw] relative">
                <Image
                  src="/assets/blogs/medica-collage.jpg"
                  fill
                  alt="blog-detail"
                  className="object-cover rounded-[2.5vw]"
                />
              </div>
            </div>
            <div className="py-[1vw] mobile:py-[5vw] fadeUp">
              <h2 className="text-[2.5vw] font-light leading-[1.2] text-[#1a1a1a] aeonik   mobile:text-[6.5vw]  mobile:py-[3vw] tablet:text-[3.5vw]">
                Empowering Healthcare with Cutting-Edge Solutions
              </h2>
              <p className="content-p py-[1vw]  mobile:py-[3vw]">
                At our booth, attendees experienced firsthand how AMS is driving
                change with solutions that empower healthcare professionals. Our
                showcased technologies spanned critical areas:
              </p>
              <ul className="py-[1vw] list-disc ml-[5vw] content-p !font-normal">
                <li>Wound Care</li>
                <li>Cardiac Surgery</li>
                <li>Hernia Solutions</li>
                <li>Endo Surgery</li>
                <li>Interventional Cardiology</li>
              </ul>
              <p className="content-p py-[1vw]  mobile:py-[3vw]">
                These innovations sparked meaningful conversations about
                improving patient care and surgical outcomes globally.
              </p>
            </div>

            <div className="py-[1vw] mobile:py-[5vw] fadeUp">
              <h2 className="text-[2.5vw] font-light leading-[1.2] text-[#1a1a1a] aeonik  mobile:text-[6.5vw]  mobile:py-[3vw] tablet:text-[3.5vw]">
                Building Strong Partnerships for a Healthier Future
              </h2>
              <p className="content-p pt-[1vw] mobile:py-[3vw] ">
                MEDICA 2024 was more than just an exhibition—it was a meeting of
                minds committed to making a difference. The partnerships formed
                and strengthened during the event will undoubtedly shape the
                future of healthcare, bringing us closer to our mission of{" "}
                <span className="font-normal">
                  {" "}
                  Innovating for a Healthier Tomorrow.
                </span>
              </p>
            </div>
            <div className="py-[1vw] mobile:py-[5vw] fadeUp">
              <h2 className="text-[2.5vw] font-light leading-[1.2] text-[#1a1a1a] aeonik  mobile:text-[6.5vw]  mobile:py-[3vw] tablet:text-[3.5vw]">
                Thank You to All Our Visitors, Partners, and Organizers
              </h2>
              <p className="content-p pt-[1vw] mobile:py-[3vw] ">
                Your support, curiosity, and collaboration made our
                participation at MEDICA 2024 a memorable and impactful
                experience. The enthusiasm and interest shown by attendees fuel
                our commitment to advancing the science of surgery and
                cardiovascular care.
              </p>
            </div>
            <div className="py-[1vw]  fadeUp">
              <h2 className="text-[2.5vw] font-light leading-[1.2] text-[#1a1a1a] aeonik  mobile:text-[6.5vw]  mobile:py-[3vw] tablet:text-[3.5vw]">
                See You Next Year at MEDICA 2025!
              </h2>
              <p className="content-p py-[1vw] mobile:py-[3vw]">
                As we look ahead, we are excited to continue our journey of
                innovation and excellence. Mark your calendars for{" "}
                <span className="font-normal">MEDICA 2025 </span>, where AMS
                will once again showcase advancements that transform patient
                care and redefine healthcare.
              </p>
              <p className="content-p py-[1vw] mobile:py-[3vw]">
                Thank you for joining us at MEDICA 2024. Together, we&apos;re
                building a healthier future!
              </p>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default medica;
