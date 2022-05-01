import Line from "./Line";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "../../motions/MainSection.motion";

const LiquidButton = () => {
  return (
    <Link href="/#WhyHuntli">
      <motion.a variants={fadeIn} custom={2} className="button-container-1">
        <span className="mas">
          <span className="inner">Learn more</span>
          <Line />
        </span>
        <button
          style={{ backgroundColor: "#01C497" }}
          id="work"
          type="button"
          name="Hover"
        >
          <span className="inner">Learn more</span>
          <Line />
        </button>
      </motion.a>
    </Link>
  );
};

export default LiquidButton;
