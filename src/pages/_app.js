import "@/styles/fonts.css";
import "@/styles/globals.css";
import { DefaultSeo } from 'next-seo';
import { MediaContextProvider } from "@/components/media";
import { ReactLenis } from "lenis/react";
import { AnimatePresence } from "framer-motion";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleTagManager } from '@next/third-parties/google';
import nextSeoConfig from "../../next-seo.config";

export default function App({ Component, pageProps, router }) {

  return (
    <>
      <DefaultSeo {...nextSeoConfig}/>
      <MediaContextProvider>
        <ReactLenis root>
          <AnimatePresence mode="wait">
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </ReactLenis>
      </MediaContextProvider>
      <GoogleTagManager gtmId="GTM-KSL3Q9F6" />
      <Analytics />
      <SpeedInsights />
    </>
  );
}
