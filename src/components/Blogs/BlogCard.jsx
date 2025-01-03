import { postPathBySlug } from "@/lib/posts";
import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ para, title, img, link, innertitle, large }) => {
    return (
        <Link href={postPathBySlug(link)} className="group overflow-hidden fadeUp">
            <div className="w-full h-full overflow-hidden tablet:h-[50vw] mobile:h-[60vw] relative py-[1vw] rounded-[2.5vw]">
                <Image
                    src={img}
                    width={1200}
                    height={1000}
                    alt="blog image"
                    className="object-cover h-full w-full scale-[1.1] group-hover:scale-[1.1] transition-transform duration-500 ease-in-out group-hover:blur-sm mobile:group-hover:blur-0"
                />
                <div className="absolute inset-0 flex flex-col items-start justify-center z-[10] opacity-0 px-[5%] group-hover:opacity-100 transition-opacity duration-500 ease bg-black/40 mobile:hidden">
                    <p className={`py-[0.5vw] text-white font-light ${large ? "text-[2.5vw] !font-extralight" : "text-[1.25vw]"} tablet:text-[4vw]`}>
                        {innertitle}
                    </p>
                    <div className={`text-white tracking-wide  font-light leading-[1.2] ${large ? "text-[1.65vw] w-[80%] font-extralight" : "text-[1.15vw] w-[100%]"} tablet:text-[2vw]`} dangerouslySetInnerHTML={{__html:para}} />
                </div>
            </div>
            <div className="w-full mt-[1vw] px-[3%] z-[50] mobile:mt-[3vw]">
                <p className="leading-[1.2] text-[1.25vw] text-[#111111] font-light aeonik mobile:text-[6vw] tablet:text-[4vw]">
                    {title}
                    <span className="inline-block ml-[0.5vw]">
                        <Image
                            src="/assets/icons/arrow-up-right.svg"
                            alt="arrow"
                            height={10}
                            width={10}
                            className="mobile:h-[3.5vw] mobile:w-[3.5vw] mobile:ml-[1vw] tablet:h-[2vw] tablet:w-[2vw]"
                        />
                    </span>
                </p>
            </div>
        </Link>
    )
}

export default BlogCard;