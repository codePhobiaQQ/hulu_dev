import { motion } from "framer-motion";
import { fadeIn } from "../../motions/RiskSection.motion";

interface IRightLine {
  custom?: number;
}

const RightLine = ({ custom }: IRightLine) => {
  return (
    <motion.svg
      width="87"
      height="470"
      viewBox="0 0 87 470"
      className="rightLine"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      variants={fadeIn}
      custom={custom || 0}
    >
      <path
        d="M0 1H61C74.8071 1 86 12.1929 86 26V453.184C86 461.919 78.9189 469 70.1839 469V469"
        stroke="white"
      />
    </motion.svg>
  );
};

export default RightLine;
