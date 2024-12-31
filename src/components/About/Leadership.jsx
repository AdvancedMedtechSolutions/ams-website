import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import styles from "./index.module.css";
import { useRef, useEffect } from "react";

const Leadership = () => {
    const topBoxRef = useRef(null);
    const swiperRef = useRef(null);

    const handleSlideChange = (swiper) => {
        const translatePercent = -(swiper.activeIndex * 14.285);
        if (topBoxRef.current) {
            topBoxRef.current.style.transform = `translateX(${translatePercent}%)`;
        }
    };

    const slideNext = () => {
        if (swiperRef.current) swiperRef.current.slideNext();
    };

    const slidePrevious = () => {
        if (swiperRef.current) swiperRef.current.slidePrev();
    };

    useEffect(() => {
        if (topBoxRef.current) {
            topBoxRef.current.style.transform = `translateX(0%)`;
        }
    }, []);

    return (
        <>
            <section id="leadership" className="bg-white/50">
                <div className="w-full pt-[7%] mobile:py-[15%] h-[76vw] tablet:h-[100vw] mobile:h-[230vw]">
                    <h3 className="aeonik title-2 text-center">AMS Leadership</h3>
                    <div className="relative w-screen overflow-hidden">
                        <div className="w-screen mobile:gap-8 px-[4vw] flex justify-between mobile:justify-center items-center top-[37%] z-10 absolute mobile:top-[90%] mobile:h-fit">
                            <div onClick={slidePrevious} className="px-[1.2vw] py-[1.2vw] z-[5] relative bg-white/50 overflow-hidden  mobile:p-[5vw] tablet:p-[2vw] rounded-full cursor-pointer mobile:block group hover:text-white border border-black/20">
                                <span className="bg-[#222222] w-[100%] h-[100%] z-[1] absolute top-0 left-0 origin-center scale-0 rounded-full group-hover:scale-100 duration-300" />
                                <div className="w-[1.2vw] h-[1.2vw] relative z-[6] mobile:w-[4.5vw] mobile:h-[4.5vw] tablet:w-[2.5vw] tablet:h-[2.5vw] rotate-180">
                                    <Image
                                        src="/assets/home/arrow-left.png"
                                        alt="arrow-left"
                                        className={`object-cover group-hover:invert duration-300 rotate-180`}
                                        fill
                                    />
                                </div>
                            </div>
                            <div onClick={slideNext} className="px-[1.2vw] py-[1.2vw] z-[5] relative overflow-hidden mobile:p-[5vw] tablet:p-[2vw] rounded-full cursor-pointer group hover:text-white bg-white/50 border border-black/20">
                                <span className="bg-[#222222] w-[100%] h-[100%] z-[1] absolute top-0 left-0 origin-center scale-0 rounded-full group-hover:scale-100 duration-300" />
                                <div className="w-[1.2vw] h-[1.2vw] relative z-[6] mobile:w-[4.5vw] mobile:h-[4.5vw] tablet:w-[2.5vw] tablet:h-[2.5vw]">
                                    <Image
                                        src="/assets/home/arrow-right.png"
                                        alt="arrow-right"
                                        className={`object-cover group-hover:invert duration-300`}
                                        fill
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="w-[700%] h-[40vw] pt-[2vw] flex items-center absolute top-box duration-1000 mobile:pt-[5vw] mobile:h-[70vw]" ref={topBoxRef}>
                            {content.map((content, key) => (
                                <div key={key} className="px-[5vw] text-center leader-1 h-full w-screen relative tablet:overflow-hidden mobile:overflow-hidden">
                                    <p className="aeonik text-black/5 text-[11vw] text-nowrap font-light mt-[4vw] w-full mobile:text-[15vw] overflow-hidden">{content.name}</p>
                                    <Image className="absolute w-[60%] top-[-10%] opacity-75 left-1/2 -translate-x-1/2 mobile:w-[100%] mobile:top-[-20%]" src={content.slideImageBg} alt={`${content.name} image`} width={1000} height={1000} quality={100} priority={false} />
                                </div>
                            ))}
                        </div>
                        <Swiper
                            className={`${styles.swiper} !pt-[35vw] tablet:!pt-[40vw] font-light mobile:!pt-[70vw]`}
                            style={swiperStyle}
                            breakpoints={{
                                1200: {
                                    slidesPerView: 3,
                                    spaceBetween: 100,
                                }
                            }}
                            slidesPerView={1}
                            spaceBetween={50}
                            centeredSlides={true}
                            speed={1000}
                            navigation={false}
                            onSwiper={(swiper) => (swiperRef.current = swiper)}
                            onSlideChange={handleSlideChange}
                        >
                            {content.map((item, i) => (
                                <SwiperSlide key={i} className={styles.swiperSlide}>
                                    <div className="relative">
                                        <div className={`leader-image flex justify-center mobile:hidden`}>
                                            <Image
                                                className="w-[100%] tablet:w-[40%]"
                                                src={item.slideImage}
                                                alt={`${item.name} image`}
                                                width={450}
                                                height={300}
                                                quality={90}
                                            />
                                        </div>
                                        <div className="h-[24vw] w-[42vw] tablet:h-[40vw] tablet:w-3/4 bg-white/70 backdrop-blur-md rounded-[1.5vw] p-[2vw] tablet:p-[4vw] overflow-hidden border-white absolute top-0 left-1/2 -translate-x-1/2 duration-500 opacity-0 translate-y-[0%] leaderSwiperContent pointer-events-none mobile:w-full mobile:h-[100vw] mobile:relative mobile:py-[10vw] mobile:px-[7vw] mobile:rounded-2xl mobile:opacity-100 mobile:translate-y-[-15%]">
                                            <h4 className="text-[2.5vw] aeonik mb-[0.5vw] tablet:text-[4vw] tablet:mb-2 mobile:text-[8vw] mobile:text-center ">{item.name}</h4>
                                            <p className="uppercase mb-[0.5vw] tablet:font-bold tablet:mb-2 mobile:text-[3.5vw] mobile:text-center mobile:mb-[8%]">{item.title}</p>
                                            <span className="bg-black/50 h-[1.5px] w-[3vw] block mb-[1.5vw] tablet:mb-[4vw] tablet:w-[30vw] mobile:hidden" />
                                            <div data-lenis-prevent className="overflow-y-scroll h-[60%] tablet:h-[55%] mobile:h-[70%]">
                                                <div className="text-justify text-[1.1vw] font-extralight mobile:text-center space-y-[3%] pr-3 tablet:text-lg mobile:text-[4vw]">
                                                    {item.description.map((text, index) => (
                                                        <p key={index}>{text}</p>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Leadership;

const swiperStyle = {
    padding: "0 5% 5% 5%"
}

const content = [
    {
        name: "Vijay Kewalramani",
        title: "Founder and Chairman",
        description: [
            "Vijay Kewalramani is the Founder and Chairman of Advanced MedTech Solutions. He is a global entrepreneur, investor and visionary leader with a career spanning several capital market cycles over 45 years across the U.S., Africa, Asia & Europe. Adept at managing volatility and leveraging opportunities in any economic condition, he started his career in textile and apparel manufacturing where he acquired rights to open a licensed retail division for the Polo Ralph Lauren Group in Greenwich, Connecticut. With a continued focus and growth in both retail and manufacturing he forged a 20 year tenure that helped facilitate another two decades of successful fund management through working closely with financial institutions such as UBS, Credit Suisse, & Citigroup.",
            "His invaluable hands-on experience in proprietary trading, investment management and global property development have made him a seasoned investment magnate with expertise in varied multi-asset class portfolios ranging from ETFs, equities, fixed income and forex. He was an investment advisor to IDC Global overseeing an index of unlisted and listed companies, private equity, venture capital and wealth management. He serves on the advisory boards of investment funds managed by Invesco Private Capital, Vedanta Capital, New Silk Route, & Tenzing S.A."
        ],
        slideImage: "/assets/about/leadership/Vijay-Ramani-small.png",
        slideImageBg: "/assets/about/leadership/Vijay-Ramani.png",
    },
    {
        name: "Parag Saxena",
        title: "Chief Advisor",
        description: [
            "Parag Saxena co-founded two private equity investment firms, Vedanta Management and New Silk Route, with commitments over $2 billion. Over the span of his 37-year career, he been a part of teams that have invested in companies with aggregate market value exceeding $500 billion. Named multiple times to the Forbes' Midas List of top investors, he has led or been on teams that have made over 80 investments in pharma-biotech, digital health, medical devices, hospital management and health insurance. He is also CEO and a Director at Eucrates Biomedical Acquisition Corp which seeks to target healthcare companies, specifically those utilizing biomedicine and data science.",
            "Previously, he was Chief Executive Officer of INVESCO Private Capital (and its predecessor firms), a venture capital firm in the U.S. During his 23-year tenure at INVESCO, over 300 investments were made, including Amgen, Costco, PictureTel, Polycom, Staples, and Starbucks. Mr. Saxena led more than 90 investments for INVESCO Private Capital (and its predecessor firms), a third of which went on to become public companies. These investments include Alkermes, Celgene, Genomic Health, Indigo, Masimo, Transgenomic, Xenon Pharmaceuticals, Amber Networks, ARM Holdings, Horizon Health Corp. and MetroPCS.",
            "Mr. Saxena has served on committees advising the Prime Minister of India on foreign direct investments, and the Planning Commission of India on venture capital. He has also addressed U.S. Congressional Members on Venture Capital and Healthcare. He is also a Founding, Global Advisory Board Member of the Wilson Center in Washington D.C, a past Board Member of the TB Alliance and on the U.S. Advisory Board of the Royal Shakespeare Company. He was the President of TiE Tri-State (NY, CT, NJ) from 2003 to 2010. He was also on Mayor Bloomberg's Applied Sciences NYC Advisory Committee which attracted Cornell University to New York City.",
            "Mr. Saxena received an M.B.A. from the Wharton School of the University of Pennsylvania. He earned a B.Tech. from the Indian Institute of Technology, Bombay, and an M.S. in Chemical Engineering from the West Virginia College of Graduate Studies."
        ],
        slideImage: "/assets/about/leadership/Parag-Saxena-small.png",
        slideImageBg: "/assets/about/leadership/Parag-Saxena.png",
    },
    {
        name: "Jiten Surtani",
        title: "Executive Director",
        description: [
            "Jiten Surtani is the Executive Director at Advanced MedTech Solutions (AMS), where he brings over 18 years of financial expertise and strategic leadership. As a founding partner at 360 One Wealth, he played an instrumental role in transforming the firm from a startup to a market leader in private wealth management, showcasing his ability to scale businesses and optimize growth strategies.",
            "At AMS, Surtani leverages his financial acumen and business foresight to drive strategic initiatives, streamline operations, and accelerate the company’s expansion. His hands-on approach and focus on creating long-term value have been pivotal in strengthening AMS’s competitive edge.",
            "A graduate of the Indian Institute of Management (IIM) Calcutta with an MBA and an honors graduate in Economics from Shri Ram College of Commerce, Surtani exemplifies visionary leadership and decisive execution, making him a cornerstone of AMS’s success."
        ],
        slideImage: "/assets/about/leadership/Jiten-Surtani-small.png",
        slideImageBg: "/assets/about/leadership/Jiten-Surtani.png",
    },
    {
        name: "Sameer Ramani",
        title: "Executive Director",
        description: [
            "Sameer Ramani serves as the Executive Director at Advanced MedTech Solutions bringing  over 25 years of distinguished experience in global manufacturing, real estate, entrepreneurship, and strategic business growth.Sameer began his career in textile and apparel production, establishing a robust presence in the U.S. market while honing expertise across Europe, Asia, and Africa. .",
            " Throughout his journey, Sameer has spearheaded quality improvements, streamlined operations, and developed scalable manufacturing models, delivering consistent growth and operational excellence.Recognized for his ingenuity in driving sales growth and cultivating enduring partnerships, Sameer has played a pivotal role in accelerating business expansion.",
            "His innovative approach to marketing has shaped AMS’s trajectory, advanced its global brand positioning, and opened new market avenues. As an engaging public speaker and motivational leader, he effectively inspires teams and aligns stakeholders with organizational goals.A motivational leader and engaging public speaker, Sameer inspires teams and aligns stakeholders with organizational objectives.",
            "Holding a Bachelor’s degree in Economics from New York University, Sameer combines analytical acumen with visionary leadership. His deep understanding of market dynamics and customer engagement has been instrumental in propelling AMS’s success and fostering innovation on a global scale."
        ],
        slideImage: "/assets/about/leadership/Sameer-Ramani-small.png",
        slideImageBg: "/assets/about/leadership/Sameer-Ramani.png",
    },
    {
        name: "Davendra Kumar Dhama",
        title: "DIRECTOR, OPERATIONS",
        description: [
            "Davendra Kumar Dhama is a distinguished leader with over 30 years of experience in the medical devices and pharmaceutical industries. As the Director of Operations at AMS, he brings a profound understanding of manufacturing excellence, regulatory compliance, and strategic execution, driving the company’s mission to deliver innovative, high-quality healthcare solutions.",
            "Throughout his career, Davendra has spearheaded the establishment of advanced manufacturing facilities for a diverse range of medical devices. His expertise lies in streamlining complex operations, optimizing manufacturing processes, and ensuring seamless regulatory compliance with international standards such as FDA, CE, and 510(k) certifications. These efforts have consistently enabled the successful entry of high-quality medical devices into competitive global markets.",
            "A visionary leader, Davendra excels in fostering operational efficiency, cultivating high-performing teams, and driving initiatives that align with organizational goals. His comprehensive knowledge of regulatory frameworks and quality assurance ensures that all products meet the stringent requirements of the medical industry, while his strategic mindset supports innovation and scalability.",
            "Davendra’s approach to leadership is defined by a focus on continuous improvement, operational innovation, and cross-functional collaboration. His ability to navigate complex challenges and implement sustainable solutions has significantly contributed to AMS's reputation as a trusted partner in advancing healthcare technologies." ,
            "He holds a graduate degree in Science, Certification in Pharmaceutical Quality Control and Assurance Management, Lead Auditor for quality Management system and an MBA in Operations Management."
        ],
        slideImage: "/assets/about/leadership/Davendra-Dhama-small.png",
        slideImageBg: "/assets/about/leadership/Devendra-Dhama.png",
    },
    {
        name: "Manuel Parente",
        title: "ADVISOR, INTERVENTIONAL CARDIOLOGY",
        description: [
            "“Manuel Parente brings to AMS more than 40 years of global experience in Interventional Cardiology and Radiology. He served as a Director of Oerlikon Buhrle from 1981 to 1990 where he was responsible for ADATS & Patriot Missile systems (Switzerland and USA).",
            "Mr. Parente served as a Director and VP in Schneider Worldwide from 1991 to 1999 where he developed Catheter's like, Goldie, Medina, Bonnie and Maverick* (*PTCA Catheter for Boston Scientific in 1998/1999). He presented in numerous Congress' on various topics including catheters like Goldie, Bonnie and more, also in PTA balloon technology. He participated in securing more than 800 patents in Interventional Cardiology and Radiology products.",
            "He also served as Vice President, Director of Production and R&D at Bolton Medical from 1999 to 2004 and amongst other things was instrumental in design, development and introduction of two new balloon catheters on the market (Runner in PTCA and Rider in PTA). ",
            "In 2008 he found Conic Vascular (own Company) which develops and manufactures medical devices with particular focus on PTCA and PTA balloon technology.",
            "Mr. Parente has been awarded with numerous products, process and technology patents.",
            'Mr. Parente graduated from Technical School of Engineering, "Zurich, Switzerland"',
        ],
        slideImage: "/assets/about/leadership/Manuel-Parente-small.png",
        slideImageBg: "/assets/about/leadership/Manuel-Parente.png",
    },
    {
        name: "Bhavin Chauhan",
        title: "ASSOCIATE DIRECTOR, FINANCE",
        description: [
            "Bhavin Chauhan is a highly accomplished finance professional with over two decades of experience spanning multiple industries, including real estate, retail, manufacturing, aviation, and healthcare. Demonstrated exceptional capabilities in managing complex financial environments and driving organizational growth.",
            "A dynamic and consummate professional, Mr. Chauhan is responsible for the financial, legal and regulatory compliance and has been instrumental in setting up business processes to meet the organisational needs. ",
            "With financial and commercial expertise has ensured seamless operations for the organisation. Enhanced performance of organisation by IT advancement of by successful implementation latest ERP platform in SAP and inhouse development of applications for sales support system.",
            "He holds a Bachelor of commerce degree from Mumbai University, is a Chartered Accountant by Profession and IIM Ahmedabad Alumnus bringing an expertise in financial analysis, statutory compliance, Legal and treasury management.",
        ],
        slideImage: "/assets/about/leadership/Bhavin-Chauhan-small.png",
        slideImageBg: "/assets/about/leadership/Bhavin-Chauhan.png",
    }
]