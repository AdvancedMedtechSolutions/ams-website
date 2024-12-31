// import React, { useEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/dist/ScrollTrigger";
// import Image from "next/image";
// import PrimaryButton from "../Button/PrimaryButton";
// import { Media } from "../media";

// gsap.registerPlugin(ScrollTrigger);

// const GalleryComponent = () => {
 
//   const manufacturingVideoRef = useRef(null);
//   const [videoLoaded, setVideoLoaded] = useState(false); // Track if the video has been loaded

//   useEffect(() => {
//       const observer = new IntersectionObserver(
//           (entries) => {
//               entries.forEach((entry) => {
//                   if (entry.isIntersecting) {
//                       const video = manufacturingVideoRef.current;
//                       if (video && !videoLoaded) {
//                           // Set video source dynamically when it enters the viewport
//                           video.src = "/assets/home/ams-manufacturing-video.mp4";
//                           video.load(); // Ensure the video is loaded
//                           video.play(); // Play the video when it's visible
//                           setVideoLoaded(true); // Set video as loaded
//                       }
//                       observer.unobserve(entry.target); // Stop observing once the video has loaded
//                   }
//               });
//           },
//           { threshold: 0.5 } // Trigger when 50% of the video is visible
//       );

//       const videoElement = manufacturingVideoRef.current;
//       if (videoElement) {
//           observer.observe(videoElement);
//       }

//       return () => {
//           if (videoElement) observer.unobserve(videoElement);
//       };
//   }, [videoLoaded]);
//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // Set initial state of photos
//       const photos = gsap.utils.toArray(".photo");
//       gsap.set(photos.slice(1), { yPercent: 120, scale: 1.4 });
  
//       const animation = gsap.timeline();
  
//       photos.forEach((photo, i) => {
//         if (i > 0) { // Skip the first photo since we don’t need to animate it initially
//           animation
//             .to(photo, {
//               yPercent: 5,
//               scale: 1.2,
//               duration: 1,
//               ease:"none"
//             })
//             .to(
//               photos[i - 1], // Animate the previous photo in the sequence
//               {
//                 yPercent: -10,
//                 duration: 1,
              
//                ease:"none"
//               },
//               "-=1" // Overlap the animation with the current photo's animation
//             );
//         }
//       });
//       // Set up ScrollTrigger
//       ScrollTrigger.create({
//         trigger: ".gallery",
//         start: "top top",
//         end: "+=200%", // Extend the scrollable area
//         pin: ".right",
//         animation: animation,
//         scrub: true,
//         // markers: true,
//       });
//     });
  
//     return () => ctx.revert(); // Clean up on unmount
//   }, []);


//   return (
//     <section className="pb-[7%] pt-[10%] mobile:pt-[15%] overflow-hidden w-screen h-full bg-white/50" id="manufacturing-slideshow">
//         <Media greaterThan="tablet">

//         <div className="gallery flex w-full overflow-hidden">
//           <div className="left w-1/2 ml-[5vw]">
//             <div className="detailsWrapper w-[70%]">
//               <div className="space-y-[3vw] mobile:space-y-[5vw] tablet:space-y-[3vw] w-full h-screen flex flex-col justify-center">
//                 <h2
//                  data-para-anim
//                   className="title-2 aeonik mobile:text-center"
//                 >
//                   Ushering in the Next Generation of Medical Technology
//                 </h2>
//                 <p
//                   data-para-anim
//                   className="content-p mb-[5vw] mobile:text-center"
//                 >
//                   AMS leverages strategic global partnerships to procure
//                   state-of-the-art manufacturing technology, ensuring
//                   uncompromising quality, innovation, and agility in our
//                   processes. Our adherence to LEAN principles and implementation
//                   of a robust quality management system guarantees compliance
//                   with the most stringent global regulatory standards.
//                 </p>
//                 <div className="mobile:w-full mobile:flex mobile:justify-center">
//                   <PrimaryButton text={"Manufacturing"} link={"/manufacturing"} className={"fadeUp"} />
//                 </div>
//               </div>
//               <div className="space-y-[3vw] mobile:space-y-[5vw] tablet:space-y-[3vw] w-full h-screen flex flex-col justify-center">
//                 <h2 data-para-anim className="title-2 aeonik">
//                   Building World Class Capability
//                 </h2>
//                 <p data-para-anim className="content-p">
//                   Designed by renowned Spanish architect Ricardo Bofill, the AMS
//                   facility meets the Gold standard on Green building principles
//                   for sustainability and conforms to ISO 14001 safety and
//                   environmental specifications. Approx. 150,000 sq. ft.
//                   completed in Phase I and 180,000 sq.ft expansion in phase II.
//                 </p>
//                 <PrimaryButton text={"Manufacturing"} link={"/manufacturing"} className={"fadeUp"} />
//               </div>
//               <div className="space-y-[3vw] mobile:space-y-[5vw] tablet:space-y-[3vw] w-full h-screen flex flex-col justify-center">
//                 <h2 data-para-anim className="title-2 aeonik">
//                   Robust Manufacturing Processes
//                 </h2>
//                 <p data-para-anim className="content-p my-[4vw]">
//                   The AMS plant design is based on LEAN concepts, Schedule M
//                   compliance, and Class C clean room principles. The Testing and
//                   Microbiological Laboratories are outfitted with best-in-class
//                   equipment. All under the supervision of experienced
//                   Manufacturing and Quality teams.
//                 </p>
//                 <PrimaryButton text={"Manufacturing"} link={"/manufacturing"} className={"fadeUp"} />
//               </div>
//             </div>
//           </div>

//           <div className="right w-1/2 h-screen flex flex-col justify-center">
//             <div className="w-[50vw] h-screen relative overflow-hidden rounded-tl-[2vw] rounded-bl-[2vw]">
//               <div className="photo absolute w-full h-full">
//                 <video
//                   autoPlay
//                   muted
//                   loop
//                   playsInline
//                   ref={manufacturingVideoRef}
//                   poster="/assets/home/ams-manufactuing-facility-poster.webp"
//                   className="object-cover h-full w-full"
//                   alt="Service Image"
//                   loading="lazy"
//                 />
//               </div>
//               <div className="photo absolute w-full h-full ">
//                 <Image
//                   className="object-cover"
//                   src="/assets/home/manufacturing-2.webp"
//                   alt="Service Image"
//                   loading="lazy"
//                   width={1090}
//                   height={1080}
//                 />
//               </div>
//               <div className="photo absolute w-full h-full">
//                 <Image
//                   loading="lazy"
//                   className="object-cover"
//                   src="/assets/home/manufacturing-3.webp"
//                   alt="Service Image"
//                   width={1090}
//                   height={1080}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//         </Media>
//         <Media at="tablet">

//         <div className=" w-full px-[5vw] pb-[10vw] tablet:pb-[5vw]">
//           <div className="w-full flex flex-col gap-[20vw] tablet:gap-[10vw]">
//             <div className="w-full flex flex-col gap-[10vw] items-center tablet:gap-[3.5vw]">
//               <div className="w-[85vw] h-[120vw] rounded-[3vw] overflow-hidden tablet:h-[60vw]">
//                 <video
//                   autoPlay
//                   muted
//                   loop
//                   playsInline
//                   ref={manufacturingVideoRef}
//                   poster="/assets/home/ams-manufactuing-facility-poster.webp"
//                   className="object-cover h-full w-full imgMove"
//                   alt="Service Image"
//                   loading="lazy"
//                 />
//               </div>
//               <h2
//                data-para-anim
//                 className="title-2 aeonik font-light text-center"
//               >
//                 Ushering in the Next Generation of Medical Technology
//               </h2>
//               <p data-para-anim className="content-p text-center">
//                 AMS leverages strategic global partnerships to procure
//                 state-of-the-art manufacturing technology, ensuring
//                 uncompromising quality, innovation, and agility in our
//                 processes. Our adherence to LEAN principles and implementation
//                 of a robust quality management system guarantees compliance with
//                 the most stringent global regulatory standards.
//               </p>
//               <PrimaryButton
//                 text={"Manufacturing"}
//                 link={"#"}
//                 className={"fadeUp tablet:px-[4vw] tablet:py-[1.5vw]"}
//               />
//             </div>
//             <div className="w-full flex flex-col gap-[7vw] items-center tablet:gap-[3.5vw]">
//               <div className="w-[85vw] h-[120vw] rounded-[3vw] overflow-hidden relative tablet:h-[60vw]">
//                 <Image
//                   className="object-cover h-full w-full"
//                   src="/assets/home/manufacturing-2.webp"
//                   alt="manufacturing-image-2"
//                   fill
//                 />
//               </div>
//               <h2
//                data-para-anim
//                 className="title-2 aeonik font-light text-center"
//               >
//                 Building World Class Capability
//               </h2>
//               <p data-para-anim className="content-p text-center">
//                 Designed by renowned Spanish architect Ricardo Bofill, the AMS
//                 facility meets the Gold standard on Green building principles
//                 for sustainability and conforms to ISO 14001 safety and
//                 environmental specifications. Approx. 150,000 sq. ft. completed
//                 in Phase I and 180,000 sq.ft expansion in phase II.
//               </p>
//               <PrimaryButton
//                 text={"Manufacturing"}
//                 link={"#"}
//                 className={"fadeUp tablet:px-[4vw] tablet:py-[1.5vw]"}
//               />
//             </div>
//             <div className="w-full flex flex-col gap-[7vw] items-center tablet:gap-[3.5vw]">
//               <div className="w-[85vw] h-[120vw] rounded-[3vw] overflow-hidden relative tablet:h-[60vw]">
//                 <Image
//                   className="object-cover h-full w-full"
//                   src="/assets/home/manufacturing-3.webp"
//                   alt="manufacturing-image-3"
//                   fill
//                 />
//               </div>
//              <h2 data-para-anim
//                 className="title-2 aeonik font-light text-center"
//               >
//                 Robust Manufacturing Processes
//               </h2>
//               <p data-para-anim className="content-p text-center">
//                 The AMS plant design is based on LEAN concepts, Schedule M
//                 compliance, and Class C clean room principles. The Testing and
//                 Microbiological Laboratories are outfitted with best-in-class
//                 equipment. All under the supervision of experienced
//                 Manufacturing and Quality teams.
//               </p>
//               <PrimaryButton
//                 text={"Manufacturing"}
//                 link={"#"}
//                 className={"fadeUp tablet:px-[4vw] tablet:py-[1.5vw]"}
//               />
//             </div>
//           </div>
//         </div>
//         </Media>
//         <Media lessThan="tablet">

//         <div className=" w-full px-[5vw] pb-[10vw] tablet:pb-[5vw]">
//           <div className="w-full flex flex-col gap-[20vw] tablet:gap-[10vw]">
//             <div className="w-full flex flex-col gap-[10vw] items-center tablet:gap-[3.5vw]">
//               <div className="w-[85vw] h-[120vw] rounded-[3vw] overflow-hidden tablet:h-[60vw] fadeUp">
//                 <video
//                   autoPlay
//                   muted
//                   loop
//                   playsInline
//                   ref={manufacturingVideoRef}
//                   poster="/assets/home/ams-manufactuing-facility-poster.webp"
//                   className="object-cover h-full w-full imgMove"
//                   alt="Service Image"
//                   loading="lazy"
//                 />
//               </div>
//              <h2 data-para-anim
//                 className="title-2 aeonik font-light text-center"
//               >
//                 Ushering in the Next Generation of Medical Technology
//               </h2>
//               <p data-para-anim className="content-p text-center">
//                 AMS leverages strategic global partnerships to procure
//                 state-of-the-art manufacturing technology, ensuring
//                 uncompromising quality, innovation, and agility in our
//                 processes. Our adherence to LEAN principles and implementation
//                 of a robust quality management system guarantees compliance with
//                 the most stringent global regulatory standards.
//               </p>
//               <PrimaryButton
//                 text={"Manufacturing"}
//                 link={"#"}
//                 className={"fadeUp tablet:px-[4vw] tablet:py-[1.5vw]"}
//               />
//             </div>
//             <div className="w-full flex flex-col gap-[7vw] items-center tablet:gap-[3.5vw]">
//               <div className="w-[85vw] h-[120vw] rounded-[3vw] overflow-hidden relative tablet:h-[60vw] fadeUp">
//                 <Image
//                   className="object-cover h-full w-full"
//                   src="/assets/home/manufacturing-2.webp"
//                   alt="manufacturing-image-2"
//                   fill
//                 />
//               </div>
//              <h2 data-para-anim
//                 className="title-2 aeonik font-light text-center"
//               >
//                 Building World Class Capability
//               </h2>
//               <p data-para-anim className="content-p text-center">
//                 Designed by renowned Spanish architect Ricardo Bofill, the AMS
//                 facility meets the Gold standard on Green building principles
//                 for sustainability and conforms to ISO 14001 safety and
//                 environmental specifications. Approx. 150,000 sq. ft. completed
//                 in Phase I and 180,000 sq.ft expansion in phase II.
//               </p>
//               <PrimaryButton
//                 text={"Manufacturing"}
//                 link={"#"}
//                 className={"fadeUp tablet:px-[4vw] tablet:py-[1.5vw]"}
//               />
//             </div>
//             <div className="w-full flex flex-col gap-[7vw] items-center tablet:gap-[3.5vw]">
//               <div className="w-[85vw] h-[120vw] rounded-[3vw] overflow-hidden relative tablet:h-[60vw] fadeUp">
//                 <Image
//                   className="object-cover h-full w-full"
//                   src="/assets/home/manufacturing-3.webp"
//                   alt="manufacturing-image-3"
//                   fill
//                 />
//               </div>
//              <h2 data-para-anim
//                 className="title-2 aeonik font-light text-center"
//               >
//                 Robust Manufacturing Processes
//               </h2>
//               <p data-para-anim className="content-p text-center">
//                 The AMS plant design is based on LEAN concepts, Schedule M
//                 compliance, and Class C clean room principles. The Testing and
//                 Microbiological Laboratories are outfitted with best-in-class
//                 equipment. All under the supervision of experienced
//                 Manufacturing and Quality teams.
//               </p>
//               <PrimaryButton
//                 text={"Manufacturing"}
//                 link={"#"}
//                 className={"fadeUp tablet:px-[4vw] tablet:py-[1.5vw]"}
//               />
//             </div>
//           </div>
//         </div>
//         </Media>
//     </section>
//   );
// };

// export default GalleryComponent;
