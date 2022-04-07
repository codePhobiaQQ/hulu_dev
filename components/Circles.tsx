import { useEffect, useState } from "react";
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

  const levelHandler = () => {
    const firstCircle = new Promise((resolve, reject) => {
      setFirst(true);
      setTimeout(() => {
        setFirst(false);
        console.log("first");
        resolve("hello world");
      }, 2000);
    });
    firstCircle
      .then(() => {
        setSecond(true);
        setTimeout(() => {
          console.log("second");
          setSecond(false);
        }, 2000);
      })
      .then(() => {
        setThird(true);
        setTimeout(() => {
          console.log("third");
          setThird(false);
        }, 2000);
      });
  };

  useEffect(() => {
    levelHandler();
  }, []);

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
      <div className="firstLevel"></div>
      <div className="secondLevel"></div>
      <div className="thirdLevel"></div>
    </motion.div>
  );
};

export default Circles;
