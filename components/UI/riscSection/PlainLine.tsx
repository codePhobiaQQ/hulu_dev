import { motion } from "framer-motion";
import { fadeIn } from "./../../../motions/RiskSection.motion";

interface IPlainLine {
  classing: string;
  custom?: number;
}

const PlainLine = ({ classing, custom }: IPlainLine) => {
  return (
    <motion.svg
      width="100"
      height="1"
      className={classing}
      viewBox="0 0 100 1"
      fill="#C4C4C4"
      xmlns="http://www.w3.org/2000/svg"
      variants={fadeIn}
      custom={custom || 0}
    >
      <rect width="100" height="1" fill="#C4C4C4" />
    </motion.svg>
  );
};

export default PlainLine;
