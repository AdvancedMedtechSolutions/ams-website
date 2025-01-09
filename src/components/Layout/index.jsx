import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Media } from "../media";
import Transition from "../Transition";
// import { m, LazyMotion, domAnimation } from "framer-motion";

import {
  ImageObjectJsonLd,
  LocalBusiness,
  OrganizationJsonLd,
  WebsiteJsonLd,
} from "@/lib/json-ld";

const Layout = ({ children }) => {
  return (
    <>
      <OrganizationJsonLd />
      <WebsiteJsonLd />
      <ImageObjectJsonLd />
      <LocalBusiness />
      {/* <LazyMotion features={domAnimation}>
        <m.div className=""
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ 
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1] 
          }}
        > */}
          <Header />
          {children}
          <Footer />
          {/* <Media lessThan="desktop">
            <div className="w-screen h-screen fixed top-0 left-0 z-[-20] bg-gradient-to-tr from-pink-500/30 via-white/50 to-blue-500/30"></div>
          </Media> */}
        {/* </m.div>
      </LazyMotion> */}

      <Transition /> 
      <Media lessThan="desktop">
        <div className="w-screen h-screen fixed top-0 left-0 z-[-20] bg-gradient-to-tr from-pink-500/30 via-white/50 to-blue-500/30"></div>
      </Media>
    </>
  );
};

export default Layout;
