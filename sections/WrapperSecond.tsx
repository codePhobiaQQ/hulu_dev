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
  const [topi, setTop] = useState<number>(920);
  const [windowHeight, setWindowHeight] = useState<number>(920);
  const [whyHeight, setWhyHeight] = useState<number>(630);
  const sectionRef = useRef<HTMLDivElement>(null);

  const [opaciting, setOpaciting] = useState<number>(1);
  const [from, setFrom] = useState(1200);
  const [to, setTo] = useState(2400);

  // const opacity = useTransform(
  //   scrolling,
  //   [
  //     windowHeight < whyHeight ? topi + whyHeight - windowHeight + 200 : topi,
  //     windowHeight < whyHeight
  //       ? topi + whyHeight - windowHeight + 600
  //       : topi + whyHeight - 100,
  //   ],
  //   [1, 0]
  // );

  useEffect(() => {
    console.log("topi whyHeight, windowHeight", topi, whyHeight, windowHeight);
  }, [topi, whyHeight, windowHeight]);

  useEffect(() => {
    if (windowHeight < whyHeight) {
      setFrom(topi + whyHeight - windowHeight + 200);
      setTo(topi + whyHeight - windowHeight + 600);
    } else {
      setFrom(topi);
      setTo(topi + whyHeight - 100);
    }
  }, [topi, whyHeight, windowHeight]);

  const scrollHandler = () => {
    if (scrollPosition() < topi && opaciting != 1) {
      setOpaciting(1);
    } else if (scrollPosition() > from && scrollPosition() < to) {
      // @ts-ignore
      setOpaciting((1 - (scrollPosition() - from) / (to - from)).toFixed(2));
    } else if (scrollPosition() > to && opaciting != 0) {
      setOpaciting(0);
    }
  };

  const scrollPosition = () => {
    return window.pageYOffset || document.documentElement.scrollTop;
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [to, from, topi]);

  useEffect(() => {
    sectionRef.current ? setTop(sectionRef.current?.offsetTop) : null;
    setWindowHeight(window.innerHeight);
  }, [sectionRef.current]);

  return (
    <div ref={sectionRef} className="WrapperSecond">
      <motion.div
        style={{
          opacity: opaciting,
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
