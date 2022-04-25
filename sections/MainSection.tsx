import LiquidButton from "../components/UI/LiquidButton";
import { motion } from "framer-motion";
import {
  wrapperVariant,
  fadeIn,
  fadeInScale,
} from "../motions/MainSection.motion";

interface IMainSection {
  hideMain: boolean;
}

const MainSection = ({ hideMain }: IMainSection) => {
  return (
    <motion.section
      variants={wrapperVariant}
      initial="hidden"
      animate="visible"
      className="mainSection"
    >
      <motion.div variants={fadeInScale} className="dirty"></motion.div>
      <div className="container">
        <motion.div className={hideMain ? "content hide" : "content"}>
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
