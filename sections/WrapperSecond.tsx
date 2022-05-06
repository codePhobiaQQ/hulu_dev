import WhyHuntySection from "./WhyHuntySection";
import AboutSection from "./AboutSection";
import { MotionValue, useTransform, motion } from "framer-motion";
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

  const [opaciting, setOpaciting] = useState<number>(1);
  const [froming, setFrom] = useState<number>(1200);
  const [to, setTo] = useState<number>(2400);

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
    if (windowHeight < whyHeight) {
      setFrom(topi + whyHeight - windowHeight + 200);
      setTo(topi + whyHeight - windowHeight + 600);
    } else {
      setFrom(topi);
      setTo(topi + whyHeight - 100);
    }
  }, [topi, whyHeight, windowHeight]);

  const scrollHandler = () => {
    const position = scrollPosition();

    if (position < topi && opaciting != 1) {
      setOpaciting(1);
    } else if (scrollPosition() > froming && position < to) {
      setOpaciting(
        // @ts-ignore
        (1 - (position - froming) / (to - froming)).toFixed(2)
      );
    } else if (position > to && opaciting != 0) {
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
  }, [to, froming, topi, opaciting]);

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
