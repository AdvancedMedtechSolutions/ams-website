import Hero from "@/components/BlogDetail/Hero";
import Layout from "@/components/Layout";
import React from "react";
import Image from "next/image";
import { fadeUp, paraAnim } from "@/components/gsapAnimations";
import { NextSeo } from "next-seo";

const shaping = () => {
  paraAnim();
  fadeUp();
  return (
    <>
      <NextSeo
        title="Shaping the future of Healthcare"
        description="Shaping the Future of Healthcare"
      />
      <Layout>
        <Hero
          img={"/assets/blogs/therapies-hero.jpg"}
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
              Shaping the Future of Healthcare
              </span>
            </h2>
            <div className="py-[1vw] mobile:py-[5vw] fadeUp">
              <p className="content-p py-[1vw]  mobile:py-[3vw]">
                At Advanced MedTech Solutions (AMS), we don&apos;t just create
                medical devices; we set new standards in healthcare innovation.
                Our therapy divisions—
                <span className="font-normal">
                  Advanced Surgery and Advanced Cardiovascular
                </span>
                —epitomize our relentless pursuit of excellence, driven by
                cutting-edge research, rigorous testing, and a commitment to
                delivering the best in the industry.
              </p>
            </div>

            <div className="py-[1vw] mobile:py-[5vw] fadeUp">
              <h2 className="text-[2.5vw] font-light leading-[1.2] text-[#1a1a1a] aeonik mobile:text-[6.5vw]  mobile:py-[3vw] tablet:text-[3.5vw]">
                Advanced Surgery: Precision Tailored for Excellence
              </h2>
              <p className="content-p py-[1vw]  mobile:py-[3vw]">
                Our <span className="font-normal">Advanced Surgery</span>{" "}
                division redefines surgical solutions, offering a portfolio
                designed with precision engineering and unmatched quality to
                meet the most demanding clinical needs.
              </p>
            </div>

            <div className="py-[2vw] fadeUp mobile:py-[5vw]">
              <div className="w-full h-[40vw] relative">
                <Image
                  src="/assets/blogs/therapies-collage.jpg"
                  fill
                  alt="blog-detail"
                  className="object-cover rounded-[2.5vw]"
                />
              </div>
            </div>
            <div className="py-[1vw] mobile:py-[5vw] fadeUp">
              <h2 className="text-[2.5vw] font-light leading-[1.2] text-[#1a1a1a] aeonik   mobile:text-[6.5vw]  mobile:py-[3vw] tablet:text-[3.5vw]">
                Comprehensive Range of Sutures
              </h2>
              <p className="content-p py-[1vw]  mobile:py-[3vw]">
                Our sutures undergo extensive testing to ensure unmatched
                reliability and performance:
              </p>
              <ul className="py-[1vw] list-disc ml-[5vw] content-p ">
                <li>
                  <span className="font-normal">ADVACRYL</span>: High-quality
                  absorbable sutures for diverse surgical applications.
                </li>
                <li>
                  <span className="font-normal">ADVALENE</span>: Non-absorbable
                  sutures providing superior strength and durability.
                </li>
                <li>
                  <span className="font-normal">ADVAPD</span>: Specialized
                  sutures designed for the most delicate and precise procedures.
                </li>
                <li>
                  <span className="font-normal">ADVAMRYL</span>: Engineered for
                  high performance, ensuring optimal healing and reduced
                  recovery time.
                </li>
              </ul>
            </div>
            <div className="py-[1vw] mobile:py-[5vw] fadeUp">
              <h2 className="text-[2.5vw] font-light leading-[1.2] text-[#1a1a1a] aeonik  mobile:text-[6.5vw]  mobile:py-[3vw] tablet:text-[3.5vw]">
                Open and Minimally Invasive Staplers
              </h2>
              <ul className="py-[1vw] list-disc ml-[5vw] content-p ">
                <li>
                  <span className="font-normal">ADVASTAP Series </span>:
                  Featuring our exclusive 3-row technology, ADVASTAP sets the
                  benchmark for safety and precision in surgical stapling,
                  ensuring exceptional tissue approximation and long-lasting
                  results.
                </li>
              </ul>
            </div>

            <div className="py-[1vw] mobile:py-[5vw] fadeUp">
              <h2 className="text-[2.5vw] font-light leading-[1.2] text-[#1a1a1a] aeonik  mobile:text-[6.5vw]  mobile:py-[3vw] tablet:text-[3.5vw]">
                Innovative Hernia Solutions
              </h2>
              <ul className="py-[1vw] list-disc ml-[5vw] content-p ">
                <li>
                  <span className="font-normal">ADVAMESH </span>: Tailored for
                  advanced hernia repair, ADVAMESH combines innovation and
                  patient comfort to provide unparalleled surgical outcomes.
                </li>
              </ul>
              <p className="content-p pt-[1vw] mobile:py-[3vw] ">
                Through these advanced products, AMS ensures that surgeons are
                equipped with tools crafted for precision, reliability, and
                superior performance.
              </p>
            </div>
            <div className="py-[1vw] mobile:py-[5vw] fadeUp">
              <h2 className="text-[2.5vw] font-light leading-[1.2] text-[#1a1a1a] aeonik  mobile:text-[6.5vw]  mobile:py-[3vw] tablet:text-[3.5vw]">
                Advanced Cardiovascular: Leading the Future of Heart Health
              </h2>
              <p className="content-p pt-[1vw] mobile:py-[3vw] ">
                The{" "}
                <span className="font-normal">Advanced Cardiovascular </span>
                division exemplifies our unwavering commitment to saving lives.
                By blending state-of-the-art technology with relentless
                research, AMS creates products that are not just effective but
                transformative.
              </p>
            </div>

            <div className="py-[1vw] mobile:py-[5vw] fadeUp">
              <h2 className="text-[2.5vw] font-light leading-[1.2] text-[#1a1a1a] aeonik  mobile:text-[6.5vw]  mobile:py-[3vw] tablet:text-[3.5vw]">
                Ligation Clips
              </h2>
              <ul className="py-[1vw] list-disc ml-[5vw] content-p ">
                <li>
                  <span className="font-normal">ADVACLIP </span>: With unmatched
                  reliability, ADVACLIP ligation clips deliver secure and
                  efficient vessel ligation for both open and minimally invasive
                  surgeries, embodying the precision surgeon&apos;s demand.
                </li>
              </ul>
            </div>

            <div className="py-[1vw] mobile:py-[5vw] fadeUp">
              <h2 className="text-[2.5vw] font-light leading-[1.2] text-[#1a1a1a] aeonik  mobile:text-[6.5vw]  mobile:py-[3vw] tablet:text-[3.5vw]">
                Cardiovascular Suture Portfolio
              </h2>
              <ul className="py-[1vw] list-disc ml-[5vw] content-p ">
                <li>
                  <span className="font-normal">ADVACRYL </span>: High-quality
                  absorbable sutures for diverse surgical applications.
                </li>
                <li>
                  <span className="font-normal">ADVALENE</span>: Non-absorbable
                  sutures providing superior strength and durability.
                </li>
                <li>
                  <span className="font-normal">ADVABOND </span>:Specialized
                  sutures designed for the most delicate and precise procedures.
                </li>
                <li>
                  <span className="font-normal">ADVASTEEL </span>:Engineered for
                  high performance, ensuring optimal healing and reduced
                  recovery time.
                </li>
              </ul>
            </div>

            <div className="py-[1vw] mobile:py-[5vw] fadeUp">
              <h2 className="text-[2.5vw] font-light leading-[1.2] text-[#1a1a1a] aeonik  mobile:text-[6.5vw]  mobile:py-[3vw] tablet:text-[3.5vw]">
                Non-Compliant PTCA Balloons
              </h2>
              <ul className="py-[1vw] list-disc ml-[5vw] content-p ">
                <li>
                  <span className="font-normal">NC ADVA GLIDE </span>: Designed
                  for uncompromising performance, NC ADVAGLIDE offers
                  exceptional precision and durability, ensuring optimal results
                  in even the most challenging percutaneous coronary
                  interventions.
                </li>
              </ul>
            </div>

            <div className="py-[1vw] mobile:py-[5vw] fadeUp">
              <h2 className="text-[2.5vw] font-light leading-[1.2] text-[#1a1a1a] aeonik  mobile:text-[6.5vw]  mobile:py-[3vw] tablet:text-[3.5vw]">
                Sirolimus-Eluting Stents
              </h2>
              <ul className="py-[1vw] list-disc ml-[5vw] content-p ">
                <li>
                  <span className="font-normal">ADVA PRO </span>:Our
                  cutting-edge stents, featuring advanced Sirolimus-eluting
                  technology, deliver unparalleled efficacy and long-term
                  outcomes, providing patients with the best path to recovery.
                </li>
              </ul>
              <p className="content-p pt-[1vw] mobile:py-[3vw] ">
                Each product in our cardiovascular portfolio undergoes stringent
                quality checks and is built to exceed the highest global
                standards, ensuring trust and excellence in every procedure.
              </p>
            </div>

            <div className="py-[1vw] mobile:py-[5vw] fadeUp">
              <h2 className="text-[2.5vw] font-light leading-[1.2] text-[#1a1a1a] aeonik  mobile:text-[6.5vw]  mobile:py-[3vw] tablet:text-[3.5vw]">
                AMS: Where Innovation Meets Perfection
              </h2>
              <p className="content-p pt-[1vw] mobile:py-[3vw] ">
                AMS&apos;s success is rooted in our meticulous attention to
                detail, from rigorous testing protocols to advanced
                manufacturing techniques. Across both therapy divisions, our
                products are a testament to our belief in blending{" "}
                <span className="font-normal">
                  {" "}
                  scientific precision with compassionate care.
                </span>
              </p>
              <p className="content-p pt-[1vw] mobile:py-[3vw] ">
                With a relentless focus on innovation, we strive to empower
                healthcare professionals with tools that inspire confidence and
                enable groundbreaking outcomes.
              </p>
            </div>

            <div className="py-[1vw] mobile:py-[5vw] fadeUp">
              <h2 className="text-[2.5vw] font-light leading-[1.2] text-[#1a1a1a] aeonik  mobile:text-[6.5vw]  mobile:py-[3vw] tablet:text-[3.5vw]">
                Shaping Tomorrow&apos;s Healthcare, Today
              </h2>
              <p className="content-p pt-[1vw] mobile:py-[3vw] ">
                AMS is not just a MedTech company; we are{" "}
                <span className="font-normal">
                  architects of the future of healthcare
                </span>
                . Our Advanced Surgery and Cardiovascular divisions reflect a
                commitment to pushing boundaries, enhancing lives, and ensuring
                that our solutions remain the gold standard in the industry.
              </p>
              <p className="content-p pt-[1vw] mobile:py-[3vw] ">
                Join us in advancing healthcare for generations to come. With
                AMS, the future of medicine is here.
              </p>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default shaping;
