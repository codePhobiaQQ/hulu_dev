import WhyHuntySection from "./WhyHuntySection";
import AboutSection from "./AboutSection";
import {
  MotionValue,
  useTransform,
  motion,
  useViewportScroll,
} from "framer-motion";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";

interface IWrapperSecond {
  scrolling: MotionValue<number>;
  setTopPosition: Dispatch<SetStateAction<number>>;
}

const WrapperSecond = ({ scrolling, setTopPosition }: IWrapperSecond) => {
  const [topi, setTop] = useState<number>(920);
  const [windowHeight, setWindowHeight] = useState<number>(920);
  const [whyHeight, setWhyHeight] = useState<number>(630);
  const sectionRef = useRef<HTMLDivElement>(null);

  const [from, setFrom] = useState<number>(920);
  const [to, setTo] = useState<number>(1300);

  useEffect(() => {
    if (windowHeight < whyHeight) {
      setFrom(topi + whyHeight - windowHeight + 200);
      setTo(topi + whyHeight - windowHeight + 600);
    } else {
      setFrom(topi);
      setTo(topi + whyHeight - 100);
    }
  }, [windowHeight]);

  const opacity = useTransform(scrolling, [from, to], [1, 0]);

  useEffect(() => {
    sectionRef.current ? setTop(sectionRef.current?.offsetTop) : null;
    setWindowHeight(window.innerHeight);
  }, [sectionRef.current]);

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
