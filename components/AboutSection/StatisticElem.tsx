import { fadeFromBotDelay } from "../../motions/AboutSection.motion";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

interface IStaticElem {
  title: string;
  to: number;
  text: string;
  spaning: string;
}

const StatisticElem = ({ title, text, to, spaning }: IStaticElem) => {
  const [numb, setNumb] = useState<number>(0);

  const { ref, inView } = useInView({
    threshold: 0.7,
    triggerOnce: true,
  });

  const changeNumb = useCallback((i: number) => {
    setNumb(i);
  }, []);

  useEffect(() => {
    if (inView) {
      for (let i = 0; i <= to; i++) {
        setTimeout(() => {
          changeNumb(i);
        }, 500 + i * 3);
      }
    }
  }, [inView]);

  return (
    <div className={inView ? "statInner active" : "statInner"} ref={ref}>
      <h4>{title}</h4>
      <span className="number">
        {numb}
        {text}
      </span>
      <span className="small">{spaning}</span>
    </div>
  );
};

export default StatisticElem;
