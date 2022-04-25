// @ts-ignore
import { MotionValue, motion, useTransform } from "framer-motion";
import { Range, getTrackBackground } from "react-range";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { calcNumbSection } from "../services/calc.service";
import Circles from "../components/Circles";

interface IWhyHuntySection {
  setWhyHeight: Dispatch<SetStateAction<number>>;
}

const STEP = 1;
const MIN = 1000;
const MAX = 100000;

const WhyHuntySection = ({ setWhyHeight }: IWhyHuntySection) => {
  const [values, setValue] = useState<number[]>([1000]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    sectionRef.current ? setWhyHeight(sectionRef.current.clientHeight) : null;
  }, [sectionRef.current]);

  return (
    <section id="WhyHuntli" ref={sectionRef} className="whyHuntly">
      <div className="container">
        <h2>STOP LOSING MONEY ON COMPLIANCE</h2>
        <div className="content">
          <div className="leftCol">
            <span className="without">
              Without automated transaction monitoring system you are loosing A
              LOT of money on your day-to-day compliance operations
            </span>
            <span className="numbers">
              How much monthly transactions do you have?
            </span>
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
              <span className="savingSpan">Money you are loosing:</span>
              <div className="result green">
                {calcNumbSection(values[0], true)} €
              </div>
            </div>
            <div className="resultLines">
              <span className="savingSpan">How much you can save:</span>
              <div className="result">
                {calcNumbSection(values[0], false)} €
              </div>
            </div>
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
