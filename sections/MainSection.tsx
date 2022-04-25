import LiquidButton from "../components/UI/LiquidButton";
import { motion, MotionValue } from "framer-motion";
import { wrapperVariant, fadeIn } from "../motions/MainSection.motion";
import { useEffect, useRef, useState } from "react";

interface IMainSection {
  scrolling?: MotionValue<number>;
}

const MainSection = ({ scrolling }: IMainSection) => {
  const mainSectionRef = useRef<HTMLElement>(null);
  const [sectionHeight, setSectionHeight] = useState(980);

  useEffect(() => {
    mainSectionRef.current
      ? setSectionHeight(mainSectionRef.current.clientHeight)
      : null;
  }, [mainSectionRef.current]);

  console.log(scrolling);

  return (
    <motion.section
      variants={wrapperVariant}
      initial="hidden"
      animate="visible"
      className="mainSection"
    >
      <div className="dirty"></div>
      <div className="container">
        <motion.div className={"content"}>
          <motion.h1 variants={fadeIn}>
            Most flexible transaction monitoring for your compliance
            <span> needs</span>
          </motion.h1>
          <LiquidButton />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default MainSection;
