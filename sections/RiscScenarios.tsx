import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import StartIcon from "../components/UI/StartIcon";
import TopLine from "../components/UI/riscSection/TopLine";
import RiskElem from "../components/riskSection/RiskElem";
import Finish from "../components/UI/riscSection/Finish";
import RightLine from "../components/riskSection/RightLine";
import LeftLine from "../components/riskSection/LeftLine";
import { wrapperVariant, fadeIn } from "../motions/RiskSection.motion";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface IRiskSection {
  setTopPosition: Dispatch<SetStateAction<number>>;
}

const RiscScenarios = ({ setTopPosition }: IRiskSection) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    sectionRef.current
      ? setTopPosition(sectionRef.current.offsetTop - 100)
      : null;
  }, [sectionRef]);

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <section ref={sectionRef} id="Risk" className="RiscScenarios">
      <div className="container">
        <h2>RISK SCENARIOS</h2>
      </div>
      <div className="riskContainer">
        <motion.div
          className="schemaWrapper"
          ref={ref}
          animate={inView ? "visible" : "hidden"}
          variants={wrapperVariant}
        >
          <span className="schemaSpan">
            Use drag-n-drop tools to build your perfect fraud prevention
            scenarios
          </span>
          <div className="leftSide">
            <motion.div variants={fadeIn} custom={1} className="startBtn">
              <RightLine custom={4} />
              <StartIcon />
              <span>input</span>
              <motion.div
                variants={fadeIn}
                custom={1}
                className="plainLine"
              ></motion.div>
              <TopLine custom={2} classing={"topLine"} />
              <TopLine custom={4} classing={"topLine second"} />
              <div className="startInner"></div>
            </motion.div>
          </div>
          <div className="secondSide">
            <LeftLine custom={6} />
            <RightLine custom={7} />
            <RiskElem
              classMob={"mobi"}
              text={"Client_sorter_latest"}
              classing={"topLine"}
              custom={3}
              customLine={6}
            />
            <RiskElem
              classMob={"mob"}
              text={"Loan_type_latest"}
              classing={"bottomLine"}
              custom={5}
              customLine={7}
            />
            <motion.div custom={9} className="plainLine"></motion.div>
          </div>
          <div className="thirdSide">
            <div className="thirdSideInner"></div>
            <RiskElem
              custom={8}
              text={"Loan_sorter_latest"}
              plainLine={"plainLine"}
              customLine={9}
            />
          </div>
          <motion.div variants={fadeIn} custom={10} className="finishSide">
            <div className="finishBtn">
              <Finish />
              <span>Output</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default RiscScenarios;
