import "@/styles/fonts.css";
import "@/styles/globals.css";
import { DefaultSeo } from 'next-seo';
import { MediaContextProvider } from "@/components/media";
import { ReactLenis } from "lenis/react";
import { AnimatePresence } from "framer-motion";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleTagManager } from '@next/third-parties/google';

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
      />
      <MediaContextProvider>
        <ReactLenis root>
          <AnimatePresence mode="wait">
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </ReactLenis>
      </MediaContextProvider>
      <GoogleTagManager gtmId="GTM-KSL3Q9F6" />
      <Analytics/>
      <SpeedInsights/>
    </>
  );
}
