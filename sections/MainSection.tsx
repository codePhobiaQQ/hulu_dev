import LiquidButton from "../components/UI/LiquidButton";
import { motion, MotionValue } from "framer-motion";
import { wrapperVariant, fadeIn } from "../motions/MainSection.motion";
import { useEffect, useRef, useState } from "react";

const MainSection = () => {
  const mainSectionRef = useRef<HTMLElement>(null);
  const [sectionHeight, setSectionHeight] = useState(980);
  const [isHide, setIsHide] = useState(false);

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
            Most flexible transaction monitoring for your compliance
            <span> needs</span>
          </motion.h1>
          <LiquidButton />
        </div>
      </div>
    </motion.section>
  );
};

export default MainSection;
