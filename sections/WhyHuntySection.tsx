// @ts-ignore
import { MotionValue, motion, useTransform } from "framer-motion";
import { Range, getTrackBackground } from "react-range";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { calcNumbSection } from "../services/calc.service";
import Circles from "../components/Circles";

interface IWhyHuntySection {
  opacity: MotionValue<number>;
  setWhyHeight: Dispatch<SetStateAction<number>>;
}

const STEP = 1;
const MIN = 1000;
const MAX = 100000;

const WhyHuntySection = ({ opacity, setWhyHeight }: IWhyHuntySection) => {
  const [values, setValue] = useState<number[]>([1000]);
  const sectionRef = useRef(null);

  useEffect(() => {
    // @ts-ignore
    setWhyHeight(sectionRef.current?.clientHeight);
  }, []);

  return (
    <section id="WhyHuntli" ref={sectionRef} className="whyHuntly">
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
              <span className="numbFirst">1 000</span>
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
              <span className="numbSecond">100 000</span>
            </div>
            <div className="resultLines">
              <span className="savingSpan">
                With Huntli you can save up to:
              </span>
              <div className="result green">
                {calcNumbSection(values[0], true)} €
              </div>
            </div>
            <div className="resultLines">
              <span className="savingSpan">
                Without Huntli you can save up to:
              </span>
              <div className="result">
                {calcNumbSection(values[0], false)} €
              </div>
            </div>

            <p className="weHave">
              We have designed our system to help financial market players save
              up to 60% on their day-to-day compliance costs while being on par
              with local compliance requirements.
            </p>
          </div>
          <div className="rightCol">
            <Circles />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyHuntySection;
