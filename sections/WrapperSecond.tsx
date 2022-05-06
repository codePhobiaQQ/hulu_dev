import WhyHuntySection from "./WhyHuntySection";
import AboutSection from "./AboutSection";
import { MotionValue, useTransform, motion } from "framer-motion";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { useWindowSize } from "../hooks/useWindowSize";

interface IWrapperSecond {
  scrolling: MotionValue<number>;
  setTopPosition: Dispatch<SetStateAction<number>>;
}

const WrapperSecond = ({ scrolling, setTopPosition }: IWrapperSecond) => {
  const { height } = useWindowSize();

  const [windowHeight, setWindowHeight] = useState<number>(920);
  const [topi, setTop] = useState<number>(920);
  const [whyHeight, setWhyHeight] = useState<number>(630);
  const sectionRef = useRef<HTMLDivElement>(null);

  const opacity = useTransform(
    scrolling,
    [
      windowHeight < whyHeight ? topi + whyHeight - windowHeight + 200 : topi,
      windowHeight < whyHeight
        ? topi + whyHeight - windowHeight + 600
        : topi + whyHeight - 100,
    ],
    [1, 0]
  );

  useEffect(() => {
    sectionRef.current ? setTop(sectionRef.current?.offsetTop) : null;
    height != undefined ? setWindowHeight(height) : null;
  }, [sectionRef]);

  return (
    <div ref={sectionRef} className="WrapperSecond">
      <motion.div
        style={{
          opacity: opacity,
          backgroundColor: "#131313",
        }}
        className="dirty"
      ></motion.div>
      <WhyHuntySection setWhyHeight={setWhyHeight} />
      <AboutSection whyHeight={topi} setTopPosition={setTopPosition} />
    </div>
  );
};

export default WrapperSecond;
