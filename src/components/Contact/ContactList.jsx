import Image from "next/image";
import React, { useState } from "react";
import ContactListForm from "./ContactListForm";
import { useLenis } from "lenis/react";
import OtherContactform from "./OtherContactform";
import ContactOemform from "./ContactOemform";

const ContactList = () => {
  const [isOpen, setIsOpen] = useState({ healthcare: false, other: false, oem: false }); 
  const lenis = useLenis();

  const openModal = (type) => {
    lenis?.stop();
    document.body.style.overflow = "hidden";
    setIsOpen((prev) => ({ ...prev, [type]: true }));
  };

  const closeModal = () => {
    setIsOpen({ healthcare: false, other: false, oem: false });
    lenis?.start();
    document.body.style.overflow = "";
  };

  const modalConfig = [
    {id:1,
      type: "healthcare",
      title: "Healthcare Providers",
      image: "/assets/contact/contact-healthcare.png",
      description: "Join us in advancing MedTech solutions. Reach out for sales, distribution, clinical support, or collaboration opportunities. Submit a request, and a representative from AMS will get in touch with you shortly.",
    },
    { id:2,
      type: "oem",
      title: "OEM Solutions",
      image: "/assets/contact/contact-other.png",
      description: "Explore our expertise in OEM manufacturing. Reach out for bespoke product designs, high-quality manufacturing, and innovative medical device solutions.",
    },
    { id:3,
      type: "other",
      title: "Other Enquiries",
      image: "/assets/contact/contact-oem.png",
      description: "Have a different query? We’re here to assist. Simply fill out the details for general questions, business inquiries, or more information about our offerings.",
    },
  ];

  return (
    <>
      <section
        className="w-full h-full bg-white/50 py-[7%] mobile:py-[15%]"
        id="contact-list"
      >
        <div className="container-lg h-full flex flex-col items-center gap-[5vw]">
          <h2 data-para-anim className="title-2 aeonik mobile:mb-[5vw]">Contact AMS</h2>
          <div className="w-full flex justify-between fadeUp mobile:flex-col mobile:gap-12 tablet:flex-wrap">
            {modalConfig.map(({ type, title, image, description,id }) => (
              <div
                key={type}
                className={`cursor-pointer ${id==3?"tablet:mt-[4vw]":""} `}
                onClick={() => openModal(type)}
              >
                <div className="w-[29vw] h-full flex flex-col gap-[1.5vw] mobile:w-full tablet:w-[44vw]">
                  <div className="w-full h-[16vw] rounded-[2vw] overflow-hidden relative mobile:h-[50vw] tablet:h-[25vw]">
                    <Image
                      src={image}
                      alt={`${type}-image`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex gap-[0.5vw] items-center mobile:gap-2 tablet:gap-[1vw]">
                    <h4 data-para-anim className="text-[1.2vw] aeonik font-normal tablet:text-[3vw] mobile:text-[7vw]">
                      {title}
                    </h4>
                    <div className="fadeUp">
                      <Image
                        src={"/assets/icons/arrow-up-right.svg"}
                        width={12}
                        height={12}
                        alt="arrow-up-right"
                        className="mobile:mt-1"
                      />
                    </div>
                  </div>
                  <p data-para-anim className="text-[1.25vw] leading-[1.4] aeonik font-light tablet:text-[2.2vw] mobile:text-xl">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {isOpen.healthcare && <ContactListForm onClose={closeModal} />}
        {isOpen.other && <OtherContactform onClose={closeModal} />}
        {isOpen.oem && <ContactOemform onClose={closeModal} />}
      </section>
    </>
  );
};

export default ContactList;
