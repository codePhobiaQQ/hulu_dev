import WhyHuntySection from "./WhyHuntySection";
import AboutSection from "./AboutSection";
import { MotionValue, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface IWrapperSecond {
  scrolling: MotionValue<number>;
}

const WrapperSecond = ({ scrolling }: IWrapperSecond) => {
  const [top, setTop] = useState<number>(500);
  const [height, setHeight] = useState<number>(780);
  const sectionRef = useRef<HTMLDivElement>(null);
  const opacity = useTransform(scrolling, [top, top + height], [1, 0]);

  console.log(opacity);

  useEffect(() => {
    // @ts-ignore
    setTop(sectionRef.current?.offsetTop);
    console.log(sectionRef);
    // @ts-ignore
    setTop(sectionRef.current?.clientHeight);
  }, []);

  return (
    <div ref={sectionRef} className="WrapperSecond">
      <WhyHuntySection opacity={opacity} />
      <AboutSection opacity={opacity} />
    </div>
  );
};

export default WrapperSecond;
