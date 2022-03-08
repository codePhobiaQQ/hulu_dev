// @ts-ignore
import { MotionValue, motion, useTransform } from "framer-motion";
import Line from "../components/diagramSection/Line";
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
        <div className="content">
          <div className="leftCol">
            <div className="lines">{/*<Line />*/}</div>
          </div>
          <div className="rightCol">saved money (euro)</div>
        </div>
      </div>
    </section>
  );
};

export default WhyHuntySection;
