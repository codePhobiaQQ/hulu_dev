import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../motions/DashBoard.motion";

const Circles = () => {
  const [first, setFirst] = useState<boolean>(false);
  const [second, setSecond] = useState<boolean>(false);
  const [third, setThird] = useState<boolean>(false);

  const curcleRef = useInView({
    threshold: 1,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={curcleRef.ref}
      variants={fadeIn}
      animate={curcleRef.inView ? "visible" : "hidden"}
      className="circles"
    >
      <p className={first ? "firstText active" : "firstText"}>
        <span>€2 trillion </span>in suspicious transactions
      </p>
      <p className={second ? "secondText active" : "secondText"}>
        <span>€25 billion </span>payment card fraud
      </p>
      <p className={third ? "thirdText active" : "thirdText"}>
        <span>€180 billion </span>annual cost of compliance
      </p>
      <div
        onMouseEnter={() => setFirst(true)}
        onMouseLeave={() => setFirst(false)}
        className="firstLevel"
      ></div>
      <div
        onMouseEnter={() => setSecond(true)}
        onMouseLeave={() => setSecond(false)}
        className="secondLevel"
      ></div>
      <div
        onMouseEnter={() => setThird(true)}
        onMouseLeave={() => setThird(false)}
        className="thirdLevel"
      ></div>
    </motion.div>
  );
};

export default Circles;
