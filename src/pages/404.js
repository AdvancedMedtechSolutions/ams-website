import Header from "@/components/Header";
import BgVideo from "@/components/Layout/BgVideo";
import { Media } from "@/components/media";
import Link from "next/link";
import React from "react";

const NotFound = () => {
    return (
        <>
            <Header />
            <section className="w-screen h-screen flex justify-center items-center">
                <Media greaterThan='tablet'>
                    <BgVideo videoSrc={"/assets/bg-videos/original-bg.mp4"} />
                </Media>
                <div className="w-full flex flex-col justify-center items-center" >
                    <h1 className="text-[12vw] leading-[1]">404</h1>
                    <p className="w-[30%] text-center">
                        Uh Oh!<br /> We could not find the page you&apos;re looking for. Don&apos;t Worry! We
                        can take you to <Link href={"/"} className="text-blue-500 hover:underline">Home</Link>
                    </p>
                </div>
            </section>
        </>
    );
};

export default NotFound;