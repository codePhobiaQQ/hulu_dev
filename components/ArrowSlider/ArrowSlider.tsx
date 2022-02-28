import styles from "./ArrowSlider.module.sass";
import React from "react";
import sliderArrow from "./../../public/assets/svg/ArrowRight.svg";
import sliderArrowMob from "./../../public/assets/svg/ArrowRightMob.svg";
import useWindowWidth from "react-hook-use-window-width";

interface IArrowSlider {
  left?: boolean;
  onClick?: () => void | null;
}

const ArrowSlider = ({ onClick, left }: IArrowSlider) => {
  const width = useWindowWidth();

  return (
    <div onClick={onClick} className={styles.arrowSlider + " arrowSlider"}>
      <div className={styles.circle}>
        <img
          className={left ? styles.left : ""}
          src={width <= 576 ? sliderArrowMob.src : sliderArrow.src}
          alt="arrow"
        />
      </div>
    </div>
  );
};

export default ArrowSlider;
