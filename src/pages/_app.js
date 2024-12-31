import "@/styles/fonts.css";
import "@/styles/globals.css";
import { DefaultSeo } from 'next-seo';
import { MediaContextProvider } from "@/components/media";
import { ReactLenis } from "lenis/react";
import { AnimatePresence } from "framer-motion";

export default function App({ Component, pageProps, router }) {

  return (
    <>
      <DefaultSeo
        title="Advanced Medtech Solutions"
        description="Advanced Medtech Solutions"
        additionalLinkTags={[
          {
            rel: "preload",
            href: "/assets/fonts/aeonik/Aeonik-Light.woff2",
            as: "font",
            type: "font/woff2",
            crossOrigin: "",
          },
          {
            rel: "preload",
            href: "/assets/fonts/sofia-pro/Sofia-Pro-Light.woff2",
            as: "font",
            type: "font/woff2",
            crossOrigin: "",
          },
        ]}
        // dangerouslySetAllPagesToNoFollow={true}
        // dangerouslySetAllPagesToNoIndex={true}
      />
      <MediaContextProvider>
        <ReactLenis root>
          <AnimatePresence mode="wait">
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </ReactLenis>
      </MediaContextProvider>
    </>
  );
}
