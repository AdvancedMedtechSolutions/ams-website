import Hero from "@/components/BlogDetail/Hero";
import Layout from "@/components/Layout";
import React from "react";
import Image from "next/image";
import { fadeUp, paraAnim } from "@/components/gsapAnimations";
import { NextSeo } from "next-seo";

const nextLeapInEndoSurgery = () => {
  paraAnim();
  fadeUp();
  return (
    <>
      <NextSeo
        title="Next Leap in Endo Surgery"
        description=" Discover the Next Leap in Endo Surgery: ADVASTAP 3-Row Series"
      />
      <Layout>
        <Hero img={"/assets/blogs/3-row-hero.jpg"}  dark={"dark"}/>
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
              Discover the Next Leap in Endo Surgery: ADVASTAP 3-Row Series
              </span>
            </h2>
            <div className="py-[1vw] mobile:py-[5vw] fadeUp">
              <p className="content-p py-[1vw]  mobile:py-[3vw]">
                In the ever-evolving field of endoscopic surgery, precision,
                reliability, and efficiency are non-negotiable. Advanced MedTech
                Solutions (AMS) is proud to introduce the{" "}
                <span className="font-normal">
                  ADVASTAP Staplers 3-Row Series
                </span>
                —a groundbreaking innovation designed to elevate surgical
                outcomes and redefine the standards of care.
              </p>
            </div>

            <div className="py-[1vw] mobile:py-[5vw] fadeUp">
              <h2 className="text-[2.5vw] font-light leading-[1.2] text-[#1a1a1a] aeonik mobile:text-[6.5vw]  mobile:py-[3vw] tablet:text-[3.5vw]">
                Setting a New Benchmark in Endo Surgery
              </h2>
              <p className="content-p py-[1vw]  mobile:py-[3vw]">
                The ADVASTAP 3-Row Series represents a critical leap forward in
                endoscopic surgery, offering unparalleled advantages:
              </p>
              <ul className="py-[1vw] list-disc ml-[5vw] content-p ">
                <li>
                  <span className="font-normal">Enhanced Precision</span>:
                  Engineered with advanced stapling technology, the 3-row series
                  ensures consistent and reliable staple line formation,
                  minimizing the risk of complications.
                </li>
                <li>
                  <span className="font-normal">Improved Patient Outcomes</span>
                  :With features designed to optimize tissue perfusion and
                  reduce stress during procedures, these staplers contribute to
                  faster recovery and better overall results.
                </li>
                <li>
                  <span className="font-normal">One-Stop Solution</span>: From
                  simple cases to the most complex procedures, the ADVASTAP
                  3-Row Series delivers versatility and dependability, making it
                  a comprehensive solution for endo surgery needs.
                </li>
              </ul>
            </div>

            <div className="py-[1vw] mobile:py-[5vw] fadeUp">
              <h2 className="text-[2.5vw] font-light leading-[1.2] text-[#1a1a1a] aeonik mobile:text-[6.5vw]  mobile:py-[3vw] tablet:text-[3.5vw]">
                Elevating Surgical Excellence
              </h2>
              <p className="content-p py-[1vw]  mobile:py-[3vw]">
                At AMS, we understand the criticalities surgeons face in the
                operating room. The ADVASTAP 3-Row Series is meticulously
                crafted to address these challenges:
              </p>
              <ul className="py-[1vw] list-disc ml-[5vw] content-p ">
                <li>
                  <span className="font-normal">
                    Consistency Under Pressure
                  </span>
                  : The 3-row design ensures uniform staple height, providing
                  optimal tissue compression and secure closures every time.
                </li>
                <li>
                  <span className="font-normal">Ergonomic Design</span>
                  :Thoughtfully designed for ease of use, the staplers enhance
                  the surgeon&apos;s precision and efficiency, reducing fatigue
                  during lengthy procedures.
                </li>
                <li>
                  <span className="font-normal">Transformative Technology</span>
                  : Incorporating the latest innovations, the ADVASTAP 3-Row
                  Series stands as a testament to AMS&apos;s commitment to
                  advancing surgical techniques.
                </li>
              </ul>
            </div>

            <div className="py-[2vw] fadeUp mobile:py-[5vw]">
              <div className="w-full h-[40vw] relative">
                <Image
                  src="/assets/blogs/3-row-collage.jpg"
                  fill
                  alt="blog-detail"
                  className="object-cover rounded-[2.5vw]"
                />
              </div>
            </div>
            <div className="py-[1vw] mobile:py-[5vw] fadeUp">
              <h2 className="text-[2.5vw] font-light leading-[1.2] text-[#1a1a1a] aeonik   mobile:text-[6.5vw]  mobile:py-[3vw] tablet:text-[3.5vw]">
                Transforming the Surgical Landscape
              </h2>
              <p className="content-p py-[1vw]  mobile:py-[3vw]">
                The ADVASTAP 3-Row Series is more than just a product—it&apos;s
                a solution that empowers healthcare professionals. By addressing
                critical surgical needs and providing reliable performance, this
                innovation transforms how endo surgery is performed, paving the
                way for better outcomes and elevated care standards.
              </p>
            </div>
            <div className="py-[1vw] mobile:py-[5vw] fadeUp">
              <h2 className="text-[2.5vw] font-light leading-[1.2] text-[#1a1a1a] aeonik  mobile:text-[6.5vw]  mobile:py-[3vw] tablet:text-[3.5vw]">
                Advancing Minimally Invasive Surgery
              </h2>
              <p className="content-p py-[1vw]  mobile:py-[3vw]">
                Minimally invasive surgery (MIS) has revolutionized patient
                care, offering reduced trauma, faster recovery times, and
                improved procedural efficiency. The ADVASTAP 3-Row Series aligns
                perfectly with the principles of MIS, ensuring:
              </p>
              <ul className="py-[1vw] list-disc ml-[5vw] content-p ">
                <li>
                  <span className="font-normal">Precise Tissue Handling</span>:
                  The advanced stapling mechanism minimizes tissue damage,
                  making it ideal for small, delicate incisions.
                </li>
                <li>
                  <span className="font-normal">Enhanced Recovery Rates</span>:
                  By supporting smaller incisions and reducing surgical stress,
                  the staplers promote quicker healing and shorter hospital
                  stays.
                </li>
                <li>
                  <span className="font-normal">Optimized for Versatility</span>
                  : Whether used in laparoscopic or robotic-assisted procedures,
                  the ADVASTAP 3-Row Series ensures seamless performance in a
                  variety of MIS applications.
                </li>
              </ul>
            </div>

            <div className="py-[1vw] mobile:py-[5vw] fadeUp">
              <h2 className="text-[2.5vw] font-light leading-[1.2] text-[#1a1a1a] aeonik  mobile:text-[6.5vw]  mobile:py-[3vw] tablet:text-[3.5vw]">
                Why Choose ADVASTAP 3-Row Series?
              </h2>
              <ul className="py-[1vw] list-disc ml-[5vw] content-p ">
                <li>
                  <span className="font-normal">
                    Reliability You Can Trust{" "}
                  </span>
                  : With proven performance and rigorous quality standards, the
                  ADVASTAP 3-Row Series offers unmatched dependability in every
                  procedure.
                </li>
                <li>
                  <span className="font-normal">Comprehensive Support</span>:
                  Backed by AMS&apos;s expertise, the 3-row series comes with
                  comprehensive resources to ensure seamless integration into
                  surgical practices.
                </li>
                <li>
                  <span className="font-normal">Commitment to Innovation </span>
                  : At AMS, innovation is at the core of everything we do. The
                  ADVASTAP 3-Row Series reflects our dedication to improving the
                  lives of patients and the professionals who care for them.
                </li>
              </ul>
            </div>
            <div className="py-[1vw] mobile:py-[5vw] fadeUp">
              <h2 className="text-[2.5vw] font-light leading-[1.2] text-[#1a1a1a] aeonik  mobile:text-[6.5vw]  mobile:py-[3vw] tablet:text-[3.5vw]">
                Take the Next Leap in Endo Surgery
              </h2>
              <p className="content-p pt-[1vw] mobile:py-[3vw] ">
                With the ADVASTAP 3-Row Series, AMS invites surgeons to embrace
                a future where precision, efficiency, and reliability come
                together to create transformative surgical experiences.
                Let&apos;s advance the science of surgery, one staple at a time.
              </p>
              <p className="content-p pt-[1vw] mobile:py-[3vw] ">
                <span className="font-normal">
                  ADVASTAP Staplers 3-Row Series—Redefining Endo Surgery for a
                  Healthier Tomorrow.
                </span>
              </p>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default nextLeapInEndoSurgery;
