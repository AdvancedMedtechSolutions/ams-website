/* eslint-disable react-hooks/rules-of-hooks */
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { SplitInWord } from "./splitTextUtils";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

gsap.config({
  nullTargetWarn: false
})

export function paraAnim() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const paraAnimations = document.querySelectorAll("[data-para-anim]");
      paraAnimations.forEach((paraAnimation) => {
        SplitInWord(paraAnimation);
        const paraLine = paraAnimation.querySelectorAll(".word");
        gsap.from(paraLine, {
          scrollTrigger: {
            trigger: paraAnimation,
            start: "top 80%",
          },
          opacity: 0,
          yPercent: 100,
          duration: 1,
          stagger: 0.02,
        });
      });
    });
    return () => ctx.revert();
  }, []);
}

export function fadeIn() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const content = document.querySelectorAll(".fadein");
      content.forEach((content) => {
        gsap.from(content, {
          scrollTrigger: {
            trigger: content,
            start: "top 80%",
          },
          opacity: 0,
          ease: "power3.out",
          duration: 1,
          stagger: 0.5,
        });
      });
    });
    return () => ctx.revert();
  }, []);
}

export function fadeUp() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const fadeUps = document.querySelectorAll(".fadeUp");
      fadeUps.forEach((el) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
          },
          opacity: 0,
          y: 50,
          duration: 1,
          stagger: 0.5,
          ease: "power3.out",
        })
      })
    })
    return () => ctx.revert();
  }, []);
}

export function lineAnim() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const lineDraws = document.querySelectorAll(".lineDraw");
      lineDraws.forEach((lineDraw) => {
        gsap.from(lineDraw, {
          scrollTrigger: {
            trigger: lineDraw,
            start: "top 80%",
          },
          scaleX: 0,
          transformOrigin: "left",
          duration: 1,
          yPercent: 100,
          stagger: 0.07,
          ease: "power3.out",
        });
      });
    })
    return () => ctx.revert()
  }, []);
}