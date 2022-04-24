import LiquidButton from "../components/UI/LiquidButton";
import { motion, MotionValue, useTransform } from "framer-motion";
import {
  wrapperVariant,
  fadeIn,
  fadeInScale,
} from "../motions/MainSection.motion";
import { useEffect, useRef, useState } from "react";

interface IMainSection {
  hideMain: boolean;
  scrolling: MotionValue<number>;
}

const MainSection = ({ hideMain, scrolling }: IMainSection) => {
  const [height, setHeight] = useState<number>(780);
  const sectionRef = useRef<HTMLDivElement>(null);
  const opacity = useTransform(scrolling, [0, height / 2], [1, 0]);
  const y = useTransform(scrolling, [0, height / 2], [0, 150]);

  useEffect(() => {
    // @ts-ignore
    setHeight(sectionRef.current?.clientHeight);
  }, []);

  return (
    <motion.section
      variants={wrapperVariant}
      initial="hidden"
      animate="visible"
      className="mainSection"
      ref={sectionRef}
      style={{ opacity: opacity }}
    >
      <motion.div variants={fadeInScale} className="dirty"></motion.div>
      <div className="container">
        <motion.div
          style={{ y: y }}
          className={hideMain ? "content hide" : "content"}
        >
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
