import Hero from "@/components/BlogDetail/Hero";
import { fadeUp, paraAnim } from "@/components/gsapAnimations";
import Layout from "@/components/Layout";
import { NextSeo } from "next-seo";
import Image from "next/image";
import React from "react";

const arabhealth = () => {
  fadeUp();
  paraAnim();
  return (
    <>
     <NextSeo
            title="Arab Health 2025"
            description="  Reimagining Health, Redefining Care: AMS at Arab Health 2025"
          />
      <Layout>
        <main>
          <Hero img={"/assets/blogs/arab-health-hero.jpg"} dark={"dark"}/>
          <section id="blog-content" className="w-screen h-full py-[5vw] mobile:py-[10vw]">
            <div className="container-lg mobile:px-[5vw]">
            <h2
              className="text-[3.2vw] font-light  leading-[1.2] text-[#1a1a1a] aeonik flex justify-center   text-center mobile:text-[7.2vw]  mobile:py-[3vw] tablet:text-[4vw]"
            >
                <span data-para-anim className="w-[60%] tablet:w-[80%] mobile:w-[90%]">
                Reimagining Health, Redefining Care: AMS at Arab Health 2025
                </span>
            </h2>
            <div className="py-[1vw] pt-[3vw] mobile:py-[5vw] fadeUp">
              <p className="content-p py-[1vw]  mobile:py-[3vw]">As we embark on a journey to reshape the future of healthcare, Advanced MedTech Solutions (AMS) is proud to announce its participation in<span className="font-normal"> Arab Health 2025 </span>—the leading healthcare exhibition in the Middle East. This prestigious event will take place from <span className="font-normal">27th to 30th January 2025</span> at the <span className="font-normal">Dubai World Trade Center </span>, and we are thrilled to invite you to be part of this transformative experience.</p>
              <p className="content-p py-[1vw]  mobile:py-[3vw]">At AMS, innovation is at the heart of everything we do. Our dedication to advancing the science of surgery and cardiovascular care drives us to create groundbreaking solutions that empower healthcare professionals worldwide. Arab Health 2025 offers a unique platform to connect, collaborate, and showcase our cutting-edge technologies that are transforming lives across the globe.</p>
            </div>

            <div className="py-[1vw] mobile:py-[5vw] fadeUp">
            <h2
             
              className="text-[2.5vw] font-light leading-[1.2] text-[#1a1a1a] aeonik mobile:text-[6.5vw]  mobile:py-[3vw] tablet:text-[3.5vw]"
            >
              Why Visit AMS at Arab Health 2025?
            </h2>
            <p className="content-p py-[1vw]  mobile:py-[3vw]">At <span className="font-normal">Booth No. H5.A20</span>, you&apos;ll have the opportunity to:</p>
            <ul className="py-[1vw]  list-decimal ml-[2vw] content-p  mobile:py-[3vw]">
              <li>
              <span className="font-normal">Discover Advanced Solutions:</span> Explore our portfolio of innovative products designed to address critical healthcare challenges. From <span className="font-normal">Wound Care</span> and <span className="font-normal">Cardiac Surgery</span> to <span className="font-normal">Hernia Solutions, Endo Surgery, and Interventional Cardiology</span>, AMS delivers excellence across five essential therapies.
              </li>
              <li><span className="font-normal">Experience Transformative Technologies:</span> Witness how our pioneering solutions are redefining care. Our products are meticulously engineered to enhance precision, improve outcomes, and elevate the standard of patient care.</li>
              <li><span className="font-normal">Engage with Experts:</span> Meet our team of specialists and gain insights into how AMS is shaping the future of healthcare. Let&apos;s discuss how we can collaborate to drive meaningful change in the industry.</li>
            </ul>

            </div>

            <div className="py-[2vw] fadeUp mobile:py-[5vw]">
              <div className="w-full h-[40vw] relative">
                <Image src="/assets/blogs/arab-health-collage.jpg" fill alt="blog-detail" className="object-cover rounded-[2.5vw]"/>
              </div>
            </div>
            <div className="py-[1vw] mobile:py-[5vw]">
            <h2
              className="text-[2.5vw] font-light leading-[1.2] text-[#1a1a1a] aeonik   mobile:text-[6.5vw]  mobile:py-[3vw] tablet:text-[3.5vw]"
            >Reimagining Health, Together
            </h2>
            <p className="content-p py-[1vw]  mobile:py-[3vw]">Healthcare is not just about treating conditions—it&apos;s about envisioning a better tomorrow. At AMS, we believe in <span className="font-normal">Reimagining Health and Redefining Care.</span> Our commitment to this vision fuels our efforts to innovate, inspire, and impact lives globally.</p>
            <p className="content-p py-[1vw]  mobile:py-[3vw]">Arab Health 2025 is more than an exhibition; it is a convergence of visionaries, innovators, and leaders who share a common goal: to create a healthier world. Join us as we demonstrate how AMS is contributing to this mission by empowering healthcare professionals with solutions that elevate surgical precision and cardiovascular care.</p>
            </div>

            <div className="py-[1vw] mobile:py-[5vw] fadeUp">
              <h2 
              className="text-[2.5vw] font-light leading-[1.2] text-[#1a1a1a] aeonik  mobile:text-[6.5vw]  mobile:py-[3vw] tablet:text-[3.5vw]">
              Mark Your Calendar
              </h2>
              <p className="content-p pt-[1vw] mobile:py-[3vw] ">Don&apos;t miss the chance to be part of this groundbreaking event. Here are the details you need:</p>
              <ul className="py-[1vw]  list-disc content-p  mobile:py-[3vw] ml-[5vw]">
                <li><span className="font-normal">Date:</span> 27th to 30th January 2025</li>
                <li><span className="font-normal">Location:</span> Dubai World Trade Center</li>
                <li><span className="font-normal">Booth:</span> H5.A20</li>
              </ul>
              <p className="content-p  mobile:py-[3vw]"><span className="font-normal">Let&apos;s Reimagine Health Together</span></p>
            </div>
            <div className="py-[1vw]  fadeUp">
              <p className="content-p py-[1vw] ">
              Your partnership and collaboration mean the world to us. We look forward to welcoming you to Arab Health 2025 and sharing the innovations that are revolutionizing healthcare. Together, we can redefine care and build a brighter, healthier future.
              </p>
              <p className="content-p py-[1vw] mobile:py-[3vw]">See you in Dubai!</p>

            </div>
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
};

export default arabhealth;
