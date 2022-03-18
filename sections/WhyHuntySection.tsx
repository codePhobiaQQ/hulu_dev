// @ts-ignore
import { MotionValue, motion, useTransform } from "framer-motion";
import { Range, getTrackBackground } from "react-range";
import { useState } from "react";
import { calcNumbSection } from "../services/calc.service";

interface IWhyHuntySection {
  opacity: MotionValue<number>;
}

const STEP = 0.1;
const MIN = 0;
const MAX = 100;

const WhyHuntySection = ({ opacity }: IWhyHuntySection) => {
  const [values, setValue] = useState<number[]>([50]);

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
            <span className="numbers">number of transactions</span>
            <div className="slider">
              <Range
                step={STEP}
                min={MIN}
                max={MAX}
                values={values}
                onChange={(values) => setValue(values)}
                renderTrack={({ props, children }) => (
                  <div
                    className="sliderLine"
                    // ref={props.ref}
                    {...props}
                    style={{
                      background: getTrackBackground({
                        values: values,
                        colors: ["#01C497", "#666"],
                        min: MIN,
                        max: MAX,
                      }),
                    }}
                  >
                    {children}
                  </div>
                )}
                renderThumb={({ props }) => (
                  <div className="circlingRange" {...props} />
                )}
              />
            </div>
            <div className="resultLines">
              <span>With Huntli you can save up to:</span>
              <span>{calcNumbSection(values[0])} €</span>
            </div>
            <div className="resultLines">
              <span>Without Huntli you can save up to:</span>
              <span className="green">790 €</span>
            </div>
            <p className="weHave">
              We have designed our system to help financial market players save
              up to 60% on their day-to-day compliance costs while being on par
              with local compliance requirements.
            </p>
          </div>
          <div className="rightCol">
            <ul>
              <li>monitoring and screening of clients in real-time</li>
              <li>analytics</li>
              <li>scoring (for clients and transactions)</li>
              <li>visual interface for rules creation</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyHuntySection;
