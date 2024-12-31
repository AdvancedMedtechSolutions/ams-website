import React from "react";
import { m, LazyMotion, domAnimation } from "framer-motion";

function Transition() {
  return (
      <LazyMotion features={domAnimation}>
        <m.div
          className="w-screen h-screen fixed top-0 left-0 bg-[#111] origin-bottom p-[5vw] z-[999]"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        />
        <m.div
          className="w-screen h-screen fixed top-0 left-0 bg-[#111] origin-top p-[5vw] z-[999]"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 1 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        />
      </LazyMotion>
  );
}

export default Transition;
