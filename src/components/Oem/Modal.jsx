import React, { useEffect } from 'react';
import Image from 'next/image';
import { useLenis } from "lenis/react";


const Modal = ({ isOpen, onClose, children }) => {
    const lenis = useLenis();
  useEffect(()=>{
  if(isOpen){
    lenis && lenis.stop();
    document.body.style.overflow = "hidden";
  }else{
    lenis && lenis.start();
    document.body.style.overflow = "";
  }
})
  if (!isOpen) return null;

  return (
    <div className="fixed w-screen h-screen top-0 left-0 flex items-center justify-center z-[999] bg-opacity-50 bg-black/80 fade-in ">
      
      <div data-lenis-prevent className="bg-[#efefef] border border-white relative rounded-[2vw] p-[3vw] pt-[5vw] w-[80vw] max-h-[95vh] mobile:h-[120vw] tablet:h-[65vw] mobile:px-[5vw] mobile:py-[7vw] mobile:w-[90vw] mobile:rounded-[7vw] tablet:w-[90vw] tablet:max-w-[95vw] tablet:rounded-[3.5vw] tablet:p-[4vw] tablet:overflow-x-scroll mobile:overflow-y-scroll " id="hernia-table">
       {children}
       <div
        onClick={onClose}
        className="cursor-pointer absolute top-[2vw] right-[2vw] flex items-center justify-center text-[#2a2a2a] border p-[0.7vw] rounded-full border-[#2a2a2a] h-[2.5vw] w-[2.5vw] mobile:w-[7.5vw] mobile:h-[7.5vw] mobile:p-[1.5vw] mobile:top-[6vw] mobile:right-[5vw] tablet:h-[6vw] tablet:w-[6vw] tablet:p-[1.5vw]"
      >
        <div className="h-full w-full relative">
          <Image
            src="/assets/icons/cross-icon.svg"
            fill
            className="object-contain"
            alt="cross-icon"
          />
        </div>
      </div>
      </div>
    </div>
  );
};

export default Modal;
