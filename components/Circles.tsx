import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../motions/DashBoard.motion";

const Circles = () => {
  const [whatActive, setWhatActive] = useState<number>(0);
  const benefitsActive = useRef(0);

  const curcleRef = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      benefitsActive.current = (benefitsActive.current + 1) % 3;
      setWhatActive(benefitsActive.current);
    }, 3500);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <motion.div
      ref={curcleRef.ref}
      variants={fadeIn}
      animate={curcleRef.inView ? "visible" : "hidden"}
      className="circles"
    >
      <p className={`firstText ${benefitsActive.current == 0 ? "active" : ""}`}>
        <span>€2 trillion </span>in suspicious transactions
      </p>
      <p
        className={`secondText ${benefitsActive.current == 1 ? "active" : ""}`}
      >
        <span>€25 billion </span>payment card fraud
      </p>
      <p className={`thirdText ${benefitsActive.current == 2 ? "active" : ""}`}>
        <span>€180 billion </span>annual cost of compliance
      </p>
      <div
        className={`firstLevel ${benefitsActive.current == 0 ? "active" : ""}`}
      ></div>
      <div
        className={`secondLevel ${benefitsActive.current == 1 ? "active" : ""}`}
      ></div>
      <div
        className={`thirdLevel ${benefitsActive.current == 2 ? "active" : ""}`}
      ></div>
    </motion.div>
  );
};

export default Circles;
