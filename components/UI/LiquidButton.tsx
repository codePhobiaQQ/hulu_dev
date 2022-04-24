import { useEffect, useRef } from "react";
import Line from "./Line";
import Link from "next/link";

const LiquidButton = () => {
  const button = useRef<any>(null);
  const canvas = useRef<any>(null);

  const buttonWidth = button.current?.clientWidth;
  const buttonHeight = button.current?.clientHeight;

  useEffect(() => {
    // mouseSpeed();
    // initButton();
  }, []);

  return (
    <Link href="/#WhyHuntli">
      <a className="btn-liquid">
        <div className="button-container-1">
          <span className="mas">
            <span className="inner">Learn more</span>
            <Line />
          </span>
          <button id="work" type="button" name="Hover">
            <span className="inner">Learn more</span>
            <Line />
          </button>
        </div>
      </a>
    </Link>
  );
};

export default LiquidButton;
