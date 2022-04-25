import Line from "./Line";
import Link from "next/link";

const LiquidButton = () => {
  return (
    <Link href="/#WhyHuntli">
      <a className="button-container-1">
        <span className="mas">
          <span className="inner">Learn more</span>
          <Line />
        </span>
        <button id="work" type="button" name="Hover">
          <span className="inner">Learn more</span>
          <Line />
        </button>
      </a>
    </Link>
  );
};

export default LiquidButton;
