/* eslint-disable @next/next/no-img-element */
import React from "react";
import ContactForm from "./ContactForm";
import Link from "next/link";
import Image from "next/image";

const ContactDetail = () => {
  return (
    <>
      <section className="py-[5%] pb-[8%] relative mobile:py-[15%]" id="contactDetail">
        <div className="container-lg">
          <div className=" flex justify-between pr-[5vw] mobile:pr-0 mobile:flex-col tablet:flex-col tablet:pr-0">
            <div className="w-[50%] flex flex-col gap-[5vw] mt-[4vw] mobile:w-full tablet:flex-row tablet:w-full tablet:justify-between">
              <div className="flex flex-col gap-[1vw] mobile:gap-[10vw] tablet:w-[55%]">
                <h2
                  data-para-anim className="aeonik text-[2.5vw] font-light mobile:text-[9vw] mobile:text-center mobile:leading-[1.3] tablet:text-[5vw]">
                  Let&apos;s Work Together to Drive Innovation in Healthcare
                </h2>
                <p data-para-anim className="text-[1.25vw] font-light w-[80%] mobile:text-[5.5vw] mobile:w-full mobile:text-center tablet:text-[2.5vw] ">
                  Got questions or want to collaborate? Contact us by phone, email, or form below — we&apos;re here to support healthcare innovation.
                </p>
              </div>
              <div className="flex flex-col gap-[2vw] mobile:gap-[10vw] mobile:mt-[7vw] tablet:w-[40%] tablet:gap-[5vw] fadeUp">
                <div className="flex flex-col gap-[0.5vw] text-[1.25vw] mobile:text-[5.5vw] mobile:w-full mobile:text-center mobile:gap-[4vw] tablet:text-[2.5vw]">
                  <h4>Manufacturing:</h4>
                  <p className="w-[65%] font-light mobile:w-full tablet:w-full">
                    Advanced MedTech Solutions<br /> P-21-22, 25-26 & 34-35, GIDC
                    Manjusar, Tal - Savli, Dist. - Vadodara -391775 Gujarat,
                    India
                  </p>
                </div>
                <div className="flex flex-col gap-[0.5vw] text-[1.25vw] mobile:text-[5.5vw] mobile:w-full mobile:text-center mobile:gap-[1vw] tablet:text-[2.5vw]">
                  <h4>Phone:</h4>
                  <a href="tel:+91 2667671302" className="font-light hover:underline">+91 2667671302</a>
                </div>
                <div className="flex flex-col gap-[0.5vw] text-[1.25vw] mobile:text-[5.5vw] mobile:w-full mobile:text-center mobile:gap-[1vw] tablet:text-[2.5vw]" >
                  <h4>Email:</h4>
                  <a href="mailto:info@amsltd.com" className="font-light hover:underline">info@amsltd.com</a>
                </div>
                <div className="flex flex-col gap-[0.5vw] text-[1.25vw] mobile:text-[5.5vw] mobile:w-full mobile:text-center mobile:gap-[1vw] tablet:text-[2.5vw] tablet:gap-[1.5vw]">
                  <p>Socials:</p>
                  <div className="social-icons flex items-bottom gap-[1vw] z-10 mobile:mb-[5vw] mobile:mt-[5vw] mobile:gap-[7vw] mobile:justify-center">
                    <Link
                      href="https://www.facebook.com/AdvancedMedTechSolutions"
                      target="_blank"
                      className="opacity-60 hover:opacity-100 duration-300 mobile:opacity-100"
                    >
                      <Image
                        className="w-[1.5vw] h-[1.5vw] mobile:w-[8vw] mobile:h-[8vw] tablet:w-[4vw] tablet:h-[4vw]"
                        src="/assets/icons/fb.svg"
                        alt="Facebook Icon"
                        height={30}
                        width={30}
                      />
                    </Link>
                    <Link
                      href="https://www.linkedin.com/company/advanced-medtech-solutions"
                      target="_blank"
                      className="opacity-60 hover:opacity-100 duration-300 mobile:opacity-100"
                    >
                      <Image
                        className="w-[1.5vw] h-[1.5vw] mobile:w-[8vw] mobile:h-[8vw] tablet:w-[4vw] tablet:h-[4vw]"
                        src="/assets/icons/linkedin.svg"
                        alt="LinkedIn Icon"
                        height={30}
                        width={30}
                      />
                    </Link>
                    <Link
                      href="https://x.com/AmsMedTech"
                      target="_blank"
                      className="opacity-60 hover:opacity-100 duration-300 mobile:opacity-100"
                    >
                      <Image
                        className="w-[1.5vw] h-[1.5vw] mobile:w-[8vw] mobile:h-[8vw] tablet:w-[4vw] tablet:h-[4vw]"
                        src="/assets/icons/twitter.svg"
                        alt="Twitter Icon"
                        height={30}
                        width={30}
                      />
                    </Link>
                    <Link
                      href="https://www.instagram.com/officialamsltd"
                      target="_blank"
                      className="opacity-60 hover:opacity-100 duration-300 mobile:opacity-100"
                    >
                      <Image
                        className="w-[1.5vw] h-[1.5vw] mobile:w-[8vw] mobile:h-[8vw] tablet:w-[4vw] tablet:h-[4vw]"
                        src="/assets/icons/insta.svg"
                        alt="Instagram Icon"
                        height={30}
                        width={30}
                      />
                    </Link>
                    <Link
                      href="https://www.youtube.com/channel/UCRwHSaWfb2ciojSBz3dhrUw"
                      target="_blank"
                      className="opacity-60 hover:opacity-100 duration-300 mobile:opacity-100"
                    >
                      <Image
                        className="w-[1.6vw] h-[1.5vw] mobile:w-[8vw] mobile:h-[8vw] tablet:w-[4vw] tablet:h-[4vw]"
                        src="/assets/icons/youtube.svg"
                        alt="Youtube Icon"
                        height={30}
                        width={30}
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[50%] fadeUp mobile:w-full tablet:w-[80%] tablet:mx-auto relative z-10">
              <ContactForm />
            </div>
          </div>

          <div className="relative mt-[-5%] tablet:mt-[10%] z-0 w-full h-[36vw] mobile:mt-[15%] rounded-[2vw] overflow-hidden fadeUp mobile:h-[160vw] mobile:w-[90vw] mobile:ml-0 mobile:rounded-[7vw] tablet:h-[60vw] tablet:w-[90vw] tablet:ml-0">
            <iframe src="https://snazzymaps.com/embed/672758" width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            {/* <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.271775312155!2d73.1982016!3d22.4416587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fcd55d94a2c7b%3A0x15b70110ad06dd8d!2sAdvanced%20MedTech%20Solutions!5e0!3m2!1sen!2sin!4v1699342803289!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactDetail;
