import WhyHuntySection from "./WhyHuntySection";
import AboutSection from "./AboutSection";
import {
  MotionValue,
  useTransform,
  motion,
  useViewportScroll,
} from "framer-motion";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import useWindowSize from "../hooks/useWindowSize";

interface IWrapperSecond {
  setTopPosition: Dispatch<SetStateAction<number>>;
}

const WrapperSecond = ({ setTopPosition }: IWrapperSecond) => {
  const [topi, setTop] = useState<number>(920);
  const [whyHeight, setWhyHeight] = useState<number>(630);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { width, height } = useWindowSize();

  useEffect(() => {
    sectionRef.current ? setTop(sectionRef.current?.offsetTop) : null;
  }, [width, height]);

  const scrollHandler = () => {
    const top = document.documentElement.scrollTop;
    const firstPoint = width <= 1359 ? topi + whyHeight / 4 : topi;
    const secondPoint =
      width <= 1359 ? topi + (whyHeight * 3) / 4 : topi + whyHeight / 2;

    console.log(firstPoint, secondPoint);

    if (top < firstPoint) {
      if (
        !sectionRef.current?.querySelector(".dirty")?.classList.contains("dark")
      ) {
        sectionRef.current?.querySelector(".dirty")?.classList.add("dark");
      }
    } else if (top >= firstPoint && top < secondPoint) {
      if (
        sectionRef.current?.querySelector(".dirty")?.classList.contains("dark")
      ) {
        sectionRef.current?.querySelector(".dirty")?.classList.remove("dark");
      }
      if (
        sectionRef.current?.querySelector(".dirty")?.classList.contains("light")
      ) {
        sectionRef.current?.querySelector(".dirty")?.classList.remove("light");
      }
      sectionRef.current
        ?.querySelector(".dirty")
        ?.setAttribute(
          "style",
          `opacity: ${
            1 -
            Math.round(
              ((top - firstPoint) * 100) / (secondPoint - firstPoint)
            ) /
              100
          }`
        );
    } else {
      if (
        !sectionRef.current
          ?.querySelector(".dirty")
          ?.classList.contains("light")
      ) {
        sectionRef.current?.querySelector(".dirty")?.classList.add("light");
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [width, height]);

  return (
    <div ref={sectionRef} className="WrapperSecond">
      <motion.div className="dirty"></motion.div>
      <WhyHuntySection setWhyHeight={setWhyHeight} />
      <AboutSection whyHeight={topi} setTopPosition={setTopPosition} />
    </div>
  );
};

export default WrapperSecond;
