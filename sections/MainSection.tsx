import LiquidButton from "../components/UI/LiquidButton";
import { motion, MotionValue } from "framer-motion";
import { wrapperVariant, fadeIn } from "../motions/MainSection.motion";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { BackUrl } from "../vars";

interface MainSectionDataI {
  title: string;
  ButtonText: string;
  ButtonLink: string;
}

const MainSection = () => {
  const mainSectionRef = useRef<HTMLElement>(null);
  const [sectionHeight, setSectionHeight] = useState(980);
  const [isHide, setIsHide] = useState(false);
  const [sectionData, setSectionData] = useState<MainSectionDataI>({
    title:
      "Most flexible transaction\n" +
      "monitoring for your\n" +
      "compliance needs",
    ButtonText: "Learn more",
    ButtonLink: "#WhyHuntli",
  } as MainSectionDataI);

  const scrollPosition = () => {
    return window.pageYOffset || document.documentElement.scrollTop;
  };

  const scrollHandler = () => {
    const position = scrollPosition();
    if (position > sectionHeight / 4) {
      setIsHide(true);
    } else {
      setIsHide(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [sectionHeight]);

  useEffect(() => {
    mainSectionRef.current
      ? setSectionHeight(mainSectionRef.current.clientHeight)
      : null;
  }, [mainSectionRef.current]);

  useEffect(() => {
    const takeData = async () => {
      const response = await axios.get(
        BackUrl + "/api/main-page-fields?populate=MainSection"
      );
      setSectionData(response.data.data.attributes.MainSection);
    };
    takeData();
  }, []);

  useEffect(() => {
    console.log(
      sectionData.title.split(" ")[sectionData.title.split(" ").length - 1]
    );
  }, [sectionData]);

  return (
    <motion.section
      variants={wrapperVariant}
      initial="hidden"
      animate="visible"
      className="mainSection"
      style={{ backgroundColor: "#131313" }}
    >
      <div className="dirty"></div>
      <div className="container">
        <div className={!isHide ? "content" : "content hide"}>
          <motion.h1 variants={fadeIn} custom={1}>
            {sectionData.title
              .split(" ")
              .slice(0, sectionData?.title.split(" ").length - 2)
              .join(" ")}
            <span>
              {" " +
                sectionData.title.split(" ")[
                  sectionData.title.split(" ").length - 1
                ]}
            </span>
          </motion.h1>
          <LiquidButton
            ButtonText={sectionData.ButtonText}
            ButtonLink={sectionData.ButtonLink}
          />
        </div>
      </div>
    </motion.section>
  );
};

export default MainSection;
