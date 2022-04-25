import LiquidButton from "../components/UI/LiquidButton";
import { motion } from "framer-motion";
import { wrapperVariant, fadeIn } from "../motions/MainSection.motion";

const MainSection = () => {
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
