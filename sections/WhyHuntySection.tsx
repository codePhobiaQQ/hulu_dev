// @ts-ignore
import { MotionValue, motion, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface IWhyHuntySection {
  opacity: MotionValue<number>;
}

const WhyHuntySection = ({ opacity }: IWhyHuntySection) => {
  return (
    <section className="whyHuntly">
      <motion.div
        style={{ opacity: opacity }}
        className="backgroundWrapper"
      ></motion.div>
      <div className="container">
        <h2>WHY HUNTLI?</h2>
      </div>
    </section>
  );
};

export default WhyHuntySection;
