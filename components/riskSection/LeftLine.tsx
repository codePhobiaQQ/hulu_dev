import { motion } from "framer-motion";
import { fadeIn } from "../../motions/RiskSection.motion";

interface ILeftLine {
  custom?: number;
}

const LeftLine = ({ custom }: ILeftLine) => {
  return (
    <motion.svg
      width="87"
      height="548"
      viewBox="0 0 87 548"
      fill="none"
      className="leftLine"
      xmlns="http://www.w3.org/2000/svg"
      variants={fadeIn}
      custom={custom || 0}
    >
      <path
        d="M87 547L26 547C12.1929 547 1.00004 535.807 1.00004 522L0.999997 16.8161C0.999997 8.08114 8.0811 1.00003 16.8161 1.00002V1.00002"
        stroke="white"
      />
    </motion.svg>
  );
};

export default LeftLine;
