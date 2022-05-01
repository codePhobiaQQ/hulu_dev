import WhyHuntySection from "./WhyHuntySection";
import AboutSection from "./AboutSection";
import { MotionValue, useTransform, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface IWrapperSecond {
  scrolling: MotionValue<number>;
}

const WrapperSecond = ({ scrolling }: IWrapperSecond) => {
  const [topi, setTop] = useState<number>(920);
  const [windowHeight, setWindowHeight] = useState<number>(920);
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
    setWindowHeight(window.innerHeight);
  }, [sectionRef.current]);

  return (
    <div ref={sectionRef} className="WrapperSecond">
      <motion.div style={{ opacity: opacity }} className="dirty"></motion.div>
      <WhyHuntySection setWhyHeight={setWhyHeight} />
      <AboutSection />
    </div>
  );
};

export default WrapperSecond;
