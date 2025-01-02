
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import Image from "next/image";
import PrimaryButton from "../Button/PrimaryButton";
import { paraAnim } from "../gsapAnimations";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(useGSAP,ScrollTrigger)

export default function Advance() {
    paraAnim()
    // imageAnim()
    if(globalThis.innerWidth<1024){
        useGSAP(()=>{
            const tl = gsap.timeline({
                scrollTrigger:{
                    trigger:".suture-container",
                    scrub:true,
                    start:"top bottom",
                    end:"bottom 20%",
                   
                }
            })
            tl.to(".suture-left",{
                yPercent:-10,
                xPercent:30,
                duration:5,
            })
            tl.to(".suture-right",{
                yPercent:0,
                xPercent:-60,
                duration:5,
                delay:-5
            })
            
        })
    }
    else{
        useGSAP(()=>{
            const tl = gsap.timeline({
                scrollTrigger:{
                    trigger:".suture-container",
                    scrub:true,
                    start:"top bottom",
                    end:"bottom 20%",
                   
                }
            })
            tl.to(".suture-left",{
                yPercent:-25,
                xPercent:30,
                duration:5,
            })
            tl.to(".suture-right",{
                yPercent:0,
                xPercent:-70,
                duration:5,
                delay:-5
            })
            
        })

    }
    return (
        <>
            <section className=" py-[10%] mobile:pb-[20%] tablet:pb-[8%] overflow-hidden bg-white/50" id="facility">
                <div className=" suture-container ">
                <div className=" container-lg virtual rounded-[3vw] relative flex items-center justify-between px-[6%] py-[8%] bg-white/50  border border-gray-200 mobile:pt-[60%] mobile:pb-[20%] mobile:flex-col-reverse mobile:rounded-[6vw] tablet:pt-[10%] tablet:flex tablet:flex-col tablet:justify-between tablet:gap-[5vw]">
                    <div className="w-full flex flex-col items-center justify-between gap-[5vw] mobile:gap-[12vw]">
                        <h2
data-para-anim className="title-2 aeonik mobile:text-center tablet:text-center">
                            
                        Advanced Wound Closure
                            
                        </h2>
                       
                        <div className="w-full flex justify-center mobile:justify-center fadeUp">
                        <PrimaryButton className={""} link={"/products/wound-care"} text={"See More"}/>
                        </div>
                    </div>
                    <div className="w-[30vw] h-[30vw] absolute top-[10%] right-[-30%] suture-right mobile:w-[60vw] mobile:h-[60vw] mobile:right-[-60%] mobile:rotate-6">
                        <Image src="/assets/needle/Suture-left.webp" className="object-contain " fill alt="suture-left"/>

                    </div>
                    <div className="w-[50vw] h-[50vw] absolute top-0 left-[-35%] suture-left mobile:w-[80vw] mobile:h-[80vw] mobile:left-[-50%] rotate-6">
                        <Image src="/assets/needle/Suture-right.webp" className="object-contain " fill alt="suture-right"/>

                    </div>
                    
                </div>

                </div>
            </section>
        </>
    )
}