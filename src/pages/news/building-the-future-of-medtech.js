import Hero from "@/components/BlogDetail/Hero";
import Layout from "@/components/Layout";
import React from "react";
import { fadeUp, paraAnim } from "@/components/gsapAnimations";
import Image from "next/image";
import { NextSeo } from "next-seo";

const buildingTheFutureOfMedtech = () => {
  paraAnim();
  fadeUp();
  return (
    <>
      <NextSeo
        title="Building the future of Medtech"
        description=" AMS: Redefining Excellence in MedTech"
      />
      <Layout>
        <Hero
          img={"/assets/blogs/expansion-hero.jpg"} dark={""}
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
              AMS: Redefining Excellence in MedTech
              </span>

            </h2>
            <div className="py-[1vw] mobile:py-[5vw] fadeUp">
              <p className="content-p py-[1vw]  mobile:py-[3vw]">
                At Advanced MedTech Solutions (AMS), we are not just creating
                medical devices—we are shaping the future of healthcare. With a
                legacy rooted in innovation and a commitment to excellence, AMS
                stands as a global leader in the MedTech industry. Our
                facilities, innovations, and ethos set us apart as a beacon of
                progress in medical technology.
              </p>
            </div>

            <div className="py-[1vw] mobile:py-[5vw] fadeUp">
              <h2 className="text-[2.5vw] font-light leading-[1.2] text-[#1a1a1a] aeonik mobile:text-[6.5vw]  mobile:py-[3vw] tablet:text-[3.5vw]">
                A Vision Realized: The AMS Campus
              </h2>
              <p className="content-p py-[1vw]  mobile:py-[3vw]">
                Nestled in the heart of Vadodara, the AMS campus is more than a
                manufacturing site; it&apos;s a center of excellence. The
                architecturally stunning design by Ricardo Bofill spans 250,000
                sq. ft. across 10.5 acres, blending modernity with
                functionality. Now, with the addition of the Phase 2 facility,
                our vision has expanded to embrace even greater possibilities.
              </p>
            </div>

            <div className="py-[2vw] fadeUp mobile:py-[5vw]">
              <div className="w-full h-[40vw] relative">
                <Image
                  src="/assets/blogs/expansion-collage.jpg"
                  fill
                  alt="blog-detail"
                  className="object-cover rounded-[2.5vw]"
                />
              </div>
            </div>

            <div className="py-[1vw] mobile:py-[5vw] fadeUp">
              <h2 className="text-[2.5vw] font-light leading-[1.2] text-[#1a1a1a] aeonik mobile:text-[6.5vw]  mobile:py-[3vw] tablet:text-[3.5vw]">
                Innovating: Architecting a Global Healthcare Ecosystem
              </h2>
              <p className="content-p py-[1vw]  mobile:py-[3vw]">
                The Phase 2 facility features a{" "}
                <span className="font-normal">20,000 sq. ft. expansion</span>,
                establishing a global epicenter for medical research and
                training. Central to this is the{" "}
                <span className="font-normal">
                  Advanced MedTech Academy (AMA)
                </span>
                , which empowers healthcare professionals with cutting-edge
                skills and knowledge. The AMA includes:
              </p>
              <ul className="py-[1vw] list-disc ml-[5vw] content-p ">
                <li>
                  <span className="font-normal">200+ Seater Auditorium</span>:
                  Fostering thought leadership and collaboration.
                </li>
                <li>
                  <span className="font-normal">State-of-the-Art Labs</span>
                  :Offering hands-on training in both dry and wet lab settings
                </li>
              </ul>
              <p className="content-p py-[1vw]  mobile:py-[3vw]">
                By merging innovation and education, AMS paves the way for
                transformative advancements in healthcare.
              </p>
            </div>

            <div className="py-[1vw] mobile:py-[5vw] fadeUp">
              <h2 className="text-[2.5vw] font-light leading-[1.2] text-[#1a1a1a] aeonik mobile:text-[6.5vw]  mobile:py-[3vw] tablet:text-[3.5vw]">
                Integrating: Advancing Engineering Excellence
              </h2>
              <p className="content-p py-[1vw]  mobile:py-[3vw]">
                Spanning an additional{" "}
                <span className="font-normal">60,000 sq. ft.</span>, the Phase 2
                facility seamlessly integrates advanced engineering capabilities
                with sustainable practices. This expansion includes the{" "}
                <span className="font-normal">
                  enhancement of needle manufacturing processes
                </span>{" "}
                for our suture business, positioning AMS as a global leader in
                producing world-class needles.
              </p>
            </div>

            <div className="py-[1vw] mobile:py-[5vw] fadeUp">
              <h2 className="text-[2.5vw] font-light leading-[1.2] text-[#1a1a1a] aeonik mobile:text-[6.5vw]  mobile:py-[3vw] tablet:text-[3.5vw]">
                Increasing: Scaling to Meet Global Demands
              </h2>
              <p className="content-p py-[1vw]  mobile:py-[3vw]">
                With an additional{" "}
                <span className="font-normal">20,000 sq. ft.</span> dedicated to
                cleanroom areas, AMS is expanding its capabilities to serve the
                global demand for{" "}
                <span className="font-normal">Class 3 medical devices</span>.
                This strategic growth ensures that our facilities remain at the
                forefront of innovation, quality, and precision in MedTech
                manufacturing.
              </p>
            </div>

            <div className="py-[1vw] mobile:py-[5vw] fadeUp">
              <h2 className="text-[2.5vw] font-light leading-[1.2] text-[#1a1a1a] aeonik mobile:text-[6.5vw]  mobile:py-[3vw] tablet:text-[3.5vw]">
                Join Us in Shaping Tomorrow
              </h2>
              <p className="content-p py-[1vw]  mobile:py-[3vw]">
                AMS invites you to be part of a journey that transcends
                boundaries and redefines possibilities. As we continue to
                advance healthcare with innovation, sustainability, and
                excellence, we remain steadfast in our mission: to make quality
                care accessible and impactful for generations to come. Together,
                let&apos;s shape the future of MedTech.
              </p>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default buildingTheFutureOfMedtech;
