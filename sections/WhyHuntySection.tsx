// @ts-ignore
import { MotionValue, motion, useTransform } from "framer-motion";
import { Range, getTrackBackground } from "react-range";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { calcNumbSection } from "../services/calc.service";
import Circles from "../components/Circles";
import React from "react";
import axios from "axios";
import { BackUrl } from "../vars";

interface IWhyHuntySection {
  setWhyHeight: Dispatch<SetStateAction<number>>;
}

interface WhySectionDataI {
  title: string;
  FIrstText: string;
  SecondText: string;
  loosing: string;
  save: string;
}

const STEP = 1;
const MIN = 1000;
const MAX = 100000;

// eslint-disable-next-line react/display-name
const WhyHuntySection = React.memo(({ setWhyHeight }: IWhyHuntySection) => {
  const [values, setValue] = useState<number[]>([1000]);
  const sectionRef = useRef<HTMLElement>(null);

  const [sectionData, setSectionData] = useState<WhySectionDataI>({
    title: "STOP LOSING MONEY ON COMPLIANCE",
    FIrstText:
      "Without automated transaction monitoring system you are loosing A LOT of money on your day-to-day compliance operations",
    SecondText: "How much monthly transactions do you have?",
    loosing: "Money you are loosing:",
    save: "How much you can save:",
  } as WhySectionDataI);

  useEffect(() => {
    sectionRef.current ? setWhyHeight(sectionRef.current.clientHeight) : null;
  }, [sectionRef.current]);

  useEffect(() => {
    const takeData = async () => {
      const response = await axios.get(
        BackUrl + "/api/main-page-fields?populate=MoneySection"
      );
      setSectionData(response.data.data.attributes.MoneySection);
    };
    takeData();
  }, []);

  return (
    <section id="WhyHuntli" ref={sectionRef} className="whyHuntly">
      <div className="container">
        <h2>{sectionData.title}</h2>
        <div className="content">
          <div className="leftCol">
            <span className="without">{sectionData.FIrstText}</span>
            <span className="numbers">{sectionData.SecondText}</span>
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
                    <div className="centerValue">50 000</div>
                  </div>
                )}
                renderThumb={({ props }) => (
                  <div className="circlingRange" {...props} />
                )}
              />

              <span className="numbSecond">100 000</span>
            </div>
            <div className="resultLines">
              <span className="savingSpan">{sectionData.loosing}</span>
              <div className="result green">
                {calcNumbSection(values[0], true)} €
              </div>
            </div>
            <div className="resultLines">
              <span className="savingSpan">{sectionData.save}</span>
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
});

export default WhyHuntySection;
