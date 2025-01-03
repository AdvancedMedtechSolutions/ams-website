import { useState, useEffect } from "react";
import { useRouter } from "next/router";

function useRouteColors() {
  const router = useRouter();
  const [colors, setColors] = useState({
    color1: "#D467D7",
    color2: "#669FE5",
    color3: "#669FE5",
  });

  useEffect(() => {
    switch (router.pathname) {
      case "/":
        setColors({
          color1: "#D467D7",
          color2: "#669FE5",
          color3: "#669FE5",
        });
        break;
      case "/products/interventional-cardiology":
        setColors({
          color1: "#F74141",
          color2: "#669FE5",
          color3: "#669FE5",
        });
        break;
      case "/wound-care/advamryl-poliglecaprone-25-suture":
        setColors({
          color1: "#F74141",
          color2: "#669FE5",
          color3: "#669FE5",
        });
        break;
      case "/wound-care/advacryl-polyglactin-910-suture":
        setColors({
          color1: "#D7B3E1",
          color2: "#669FE5",
          color3: "#D467D7",
        });
        break;
      case "/wound-care/coated-advacryl-plus-antibacterial-polyglactin-910-suture":
        setColors({
          color1: "#D7B3E1",
          color2: "#669FE5",
          color3: "#D467D7",
        });
        break;
      case "/products/endo-surgery":
        setColors({
          color1: "#637DA2",
          color2: "#669FE5",
          color3: "#669FE5",
        });
        break;
      case "/products/hernia-solutions":
        setColors({
          color1: "#637DA2",
          color2: "#669FE5",
          color3: "#669FE5",
        });
        break;
      case "/advanced-medtech-academy-ama":
        setColors({
          color1: "#637DA2",
          color2: "#669FE5",
          color3: "#669FE5",
        });
        break;
      case "/r-and-d/suture-needle-technology":
        setColors({
          color1: "#637DA2",
          color2: "#669FE5",
          color3: "#669FE5",
        });
        break;
      case "/research-and-development":
        setColors({
          color1: "#637DA2",
          color2: "#669FE5",
          color3: "#669FE5",
        });
        break;
      case "/products/oem":
        setColors({
          color1: "#637DA2",
          color2: "#669FE5",
          color3: "#669FE5",
        });
        break;
      case "/wound-care/advapd-polydioxanone-suture":
        setColors({
          color1: "#A5BBCE",
          color2: "#A5BBCE",
          color3: "#CCCCCC",
        });
        break;
      case "/advacat":
        setColors({
          color1: "#DDCB9F",
          color2: "#DDCB9F",
          color3: "#CCCCCC",
        });
        break;
      case "/wound-care/advalene-polypropylene-suture":
        setColors({
          color1: "#D5D6F3",
          color2: "#D5D6F3",
          color3: "#307FB2",
        });
        break;
      case "/wound-care/advabond-polyester-suture":
        setColors({
          color1: "#669DE5",
          color2: "#669DE5",
          color3: "#FFCDBC",
        });
        break;
      case "/wound-care/advalon-polyamide-suture":
        setColors({
          color1: "#DFD6F3",
          color2: "#DFD6F3",
          color3: "#307FB2",
        });
        break;
      case "/wound-care/advasyl-silk-suture":
        setColors({
          color1: "#DFD6F3",
          color2: "#DFD6F3",
          color3: "#307FB2",
        });
        break;
      case "/wound-care/advabond-polyester-tape-suture":
        setColors({
          color1: "#669DE5",
          color2: "#669DE5",
          color3: "#FFCDBC",
        });
        break;
      case "/products/cardiac-surgery":
        setColors({
          color1: "#669DE5",
          color2: "#669DE5",
          color3: "#F74141",
        });
        break;
      case "/wound-care/advagrip-knotless-barbed-suture":
        setColors({
          color1: "#D7B3E1",
          color2: "#669DE5",
          color3: "#669DE5",
        });
        break;
      case "/endo-surgery/advastap-linear-cutter-stapler":
        setColors({
          color1: "#669DE5",
          color2: "#669DE5",
          color3: "#ACBCFA",
        });
        break;
      case "/cardiac-surgery/advabond-polyester-cardiovascular-suture":
        setColors({
          color1: "#669DE5",
          color2: "#669DE5",
          color3: "#FFCDBC",
        });
        break;
      case "/cardiac-surgery/advalene-polypropylene-cardiovascular-suture":
        setColors({
          color1: "#DFD6F3",
          color2: "#DFD6F3",
          color3: "#307FB2",
        });
        break;
      case "/cardiac-surgery/advasteel-sternotomy-cardiovascular-suture":
        setColors({
          color1: "#669DE5",
          color2: "#669DE5",
          color3: "#FFCDBC",
        });
        break;
      case "/cardiac-surgery/advapacer-316L-stainless-steel-sternotomy-suture":
        setColors({
          color1: "#669DE5",
          color2: "#669DE5",
          color3: "#EED681",
        });
        break;
      case "/wound-care/advacryl-rapid-polyglactin-910-suture":
        setColors({
          color1: "#A5BBCE",
          color2: "#A5BBCE",
          color3: "#E41F30",
        });
        break;

      default:
        setColors({
          color1: "#D467D7",
          color2: "#669FE5",
          color3: "#669FE5",
        });
        break;
    }
  }, [router.pathname]);

  return colors;
}

export default useRouteColors;
