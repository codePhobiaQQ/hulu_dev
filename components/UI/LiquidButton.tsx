import Line from "./Line";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "../../motions/MainSection.motion";

interface ILiquidButton {
  ButtonText: string;
  ButtonLink: string;
}

const LiquidButton = ({ ButtonText, ButtonLink }: ILiquidButton) => {
  return (
    <Link href={`/${ButtonLink}`}>
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
          <span className="inner">{ButtonText}</span>
          <Line />
        </button>
      </motion.a>
    </Link>
  );
};

export default LiquidButton;
