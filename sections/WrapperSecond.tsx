import WhyHuntySection from "./WhyHuntySection";
import AboutSection from "./AboutSection";
import { MotionValue, useTransform, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface IWrapperSecond {
  scrolling: MotionValue<number>;
}

const WrapperSecond = ({ scrolling }: IWrapperSecond) => {
  const [topi, setTop] = useState<number>(500);
  const [height, setHeight] = useState<number>(780);
  const [whyHeight, setWhyHeight] = useState<number>(630);

  const sectionRef = useRef<HTMLDivElement>(null);
  const opacity = useTransform(
    scrolling,
    [topi, topi + whyHeight + 100],
    [1, 0]
  );

  useEffect(() => {
    // @ts-ignore
    setTop(sectionRef.current?.offsetTop);
    // @ts-ignore
    setHeight(sectionRef.current?.clientHeight);
  }, []);

  return (
    <motion.div ref={sectionRef} className="WrapperSecond">
      <WhyHuntySection setWhyHeight={setWhyHeight} opacity={opacity} />
      <AboutSection opacity={opacity} />
    </motion.div>
  );
};

export default WrapperSecond;
